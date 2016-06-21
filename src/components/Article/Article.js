import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch } from '../../actions/omg';
import { Link, Card } from '../tools';
import { showModal, hideModal } from '../../actions/modal';
import ArticleAddModal from '../modals/ArticleAddModal';
import ArticlePutModal from '../modals/ArticlePutModal';
import {ARTICLE_LIST,ARTICLE_TYPE_LIST,ARTICLE_DEL,ARTICLE_RELEASE,ARTICLE_OFFLINE,ARTICLE_DOWN,ARTICLE_UP} from '../../constants'

class Article extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.delArticle = this.delArticle.bind(this);
    this.releaseArticle = this.releaseArticle.bind(this);
    this.offLineArticle = this.offLineArticle.bind(this);
    this.showPutModal = this.showPutModal.bind(this);
    this.upArticle = this.upArticle.bind(this);
    this.downArticle = this.downArticle.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(commonFetch(ARTICLE_TYPE_LIST,'GET',false,'/0'));
    this.props.dispatch(commonFetch(ARTICLE_LIST,'GET', false, '/3/10'));
  }
  showModal() {
    const  modalView = <ArticleAddModal />;
    this.props.dispatch(showModal(modalView));
  }
  showPutModal(e){
    const id=$(e.target).data('id');
    const putModalView = <ArticlePutModal articleId={id}/>;
    this.props.dispatch(showModal(putModalView));
  }
  hideModal() {
    this.props.dispatch(hideModal());
  }
  delArticle(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(commonFetch(ARTICLE_DEL, 'POST', formData))
      .then(() => (this.props.dispatch(commonFetch(ARTICLE_LIST))));
  }
  releaseArticle(e){
    const id =$(e.target).data('id');
    const formData = new FormData;
    formData.append('id',id);
    this.props.dispatch(commonFetch(ARTICLE_RELEASE, 'POST', formData))
      .then(() => (this.props.dispatch(commonFetch(ARTICLE_LIST))));
  }
  offLineArticle(e){
    const id =$(e.target).data('id');
    const formData = new FormData;
    formData.append('id',id);
    this.props.dispatch(commonFetch(ARTICLE_OFFLINE, 'POST', formData))
      .then(() => (this.props.dispatch(commonFetch(ARTICLE_LIST))));
  }

  upArticle(e){
    const id =$(e.target).data('id');
    this.props.dispatch(commonFetch(ARTICLE_UP, 'GET',false ,"/"+id))
      .then(() => (this.props.dispatch(commonFetch(ARTICLE_LIST))));
  }
  downArticle(e){
    const id =$(e.target).data('id');
    this.props.dispatch(commonFetch(ARTICLE_DOWN, 'GET',false ,"/"+id))
      .then(() => (this.props.dispatch(commonFetch(ARTICLE_LIST))));
  }
  render() {
    const items = this.props.items;
    const typeItems = this.props.typeItems;
    return (
      <div>
        <div id="btnType" class="btn-group" role="group" style={{marginBottom:"20px"}}>
          {typeItems.map((item) => (
          <button type="button" data-id={item.id} className="btn btn-primary-outline">{item.name}</button>
          ))}
        </div>
        <div className="card">
          <div className="card-header clearfix">文章
            <button
              type="button"
              className="btn btn-sm  btn-info pull-right"
              data-toggle="modal"
              data-target="#channel-add-modal"
            >
              <i className="fa fa-plus" data-toggle="modal" data-target="#cahnnel-add-modal" onClick={this.showModal}> 添加</i>
            </button>
            <Link
              className="btn btn-sm  btn-info pull-right"
              to='/article/type'
            >
              <i className="fa fa-pencil">类型管理</i>
            </Link>
          </div>
          <table className="table table-bordered m-b-0 table-hover">
            <thead>
            <tr>
              <th>id</th>
              <th>标题</th>
              <th>封面</th>
              <th>内容</th>
              <th>发布状态</th>
              <th>发布平台</th>
              <th>文章来源</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.cover}</td>
                <td>{item.content}</td>
                <td>{(item.release==1)?"未发布":"发布"}</td>
                <td>{item.platform}</td>
                <td>{item.source}</td>
                <td>
                  <button className="btn btn-primary-outline btn-sm" hidden={item.release==0} data-id={item.id} onClick={this.releaseArticle}>发布</button>
                  <button className="btn btn-primary-outline btn-sm" data-id={item.id} onClick={this.showPutModal}>修改</button>
                  <button className="btn btn-danger-outline btn-sm" hidden={item.release==1} data-id={item.id} onClick={this.offLineArticle}>下线</button>
                  <button className="btn btn-danger-outline btn-sm" data-id={item.id} onClick={this.delArticle}>删除</button>
                  <button className="btn btn-success-outline btn-sm" data-id={item.id} onClick={this.upArticle}>上移</button>
                  <button className="btn btn-success-outline btn-sm" data-id={item.id} onClick={this.downArticle}>下移</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}
Article.propTypes = {
  dispatch: PropTypes.func.isRequired
};
Article.defaultProps = {
  items: [],
  typeItems:[]
}

export default connect(state => {
  const { omg } = state;
  const { data } = omg[ARTICLE_LIST] || [];
  const typeItems = omg[ARTICLE_TYPE_LIST] || [];
  return {
    items: data,
    typeItems
  };
})(Article);

