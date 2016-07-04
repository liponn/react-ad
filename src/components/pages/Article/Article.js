import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch ,fetchAction} from '../../../actions/omg';
import { getConfig } from '../../../config/omg';
import { Link, Radio, Status, Popover } from '../../tools';
import history from '../../../core/history';
import { showModal, hideModal } from '../../../actions/modal';
import ArticleAddModal from '../../modals/ArticleAddModal';
import ArticlePutModal from '../../modals/ArticlePutModal';
import { ARTICLE_LIST, ARTICLE_TYPE_LIST, ARTICLE_DEL, ARTICLE_RELEASE, ARTICLE_OFFLINE, ARTICLE_DOWN, ARTICLE_UP } from '../../../constants';

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
    this.articleByType = this.articleByType.bind(this);
    this.typeChange = this.typeChange.bind(this);
    this.getType = this.getType.bind(this);
    this.getArticle = this.getArticle.bind(this);
    this.freshArticle = this.freshArticle.bind(this);
    const currentId = this.props.secId || this.props.firId || 0;
    this.state = {
      currentId,
    };
  }
  componentDidMount() {
    this.getType(0);
    if (this.props.firId !== undefined) {
      this.getType(this.props.firId);
    }
    this.getArticle(this.state.currentId);
  }
  showModal() {
    const modalView = <ArticleAddModal typeId={this.state.currentId} callback={this.freshArticle} />;
    this.props.dispatch(showModal(modalView));
  }

  showPutModal(e){
    const id = $(e.target).data('id');
    const putModalView = <ArticlePutModal articleId={id}/>;
    this.props.dispatch(showModal(putModalView));
  }
  hideModal() {
    this.props.dispatch(hideModal());
  }
  getType(typeId) {
    this.props.dispatch(fetchAction({
      type: ARTICLE_TYPE_LIST,
      method: 'GET',
      suffix: `/${typeId}`,
      key: typeId,
    }));
  }
  getArticle(typeId) {
    this.props.dispatch(fetchAction({
      type: ARTICLE_LIST,
      method: 'GET',
      suffix: `/${typeId}/30`,
      key: typeId,
    }));
  }
  freshArticle() {
    this.getArticle(this.state.currentId);   
  }
  typeChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    if (name === 'firId') {
      history.push(`/article/${value}`);
      this.getType(value)
    }
    if (name === 'secId') {
      history.push(`/article/${this.props.firId}/${value}`);
    }
    this.setState({
      currentId: +value,
    });
    this.getArticle(value);
  }
  delArticle(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    const type_id = $('.focus').data('id');
    this.props.dispatch(commonFetch(ARTICLE_DEL, 'POST', formData))
      .then(() => (this.props.dispatch(fetchAction({type:ARTICLE_LIST,method:'GET',suffix: '/'+type_id+'/10',key:'articleList'}))));
  }
  releaseArticle(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: ARTICLE_RELEASE,
      method: 'POST',
      formData,
    })).then(() => (this.freshArticle()));
  }
  offLineArticle(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: ARTICLE_OFFLINE,
      method: 'POST',
      formData,
    })).then(() => (this.freshArticle()));
  }

  upArticle(e) {
    const id =$(e.target).data('id');
    this.props.dispatch(commonFetch(ARTICLE_UP, 'GET',false ,"/"+id))
      .then(() => (this.freshArticle()));
  }
  downArticle(e) {
    const id =$(e.target).data('id');
    this.props.dispatch(commonFetch(ARTICLE_DOWN, 'GET',false ,"/"+id))
      .then(() => (this.freshArticle()));
  }
  articleByType(e) {
    const self = $(e.target);
    const id = self.data('id');
    $("#articleAdd").attr("data-id",id);
    self.addClass('focus').siblings().removeClass('focus');
    self.parent().siblings().find('button').removeClass('focus');
    if(self.parent().attr('id')=='btnType'){
      this.props.dispatch(fetchAction({type:ARTICLE_TYPE_LIST,method:'GET',suffix:'/'+id,key:'subType'}))
    }
    this.props.dispatch(fetchAction({type:ARTICLE_LIST,method:'GET',suffix: '/'+id+'/10',key:'articleList'}));
  }
  render() {
    // const items = this.props.items["articleList"]?this.props.items["articleList"].data:[];
    const typeItems = this.props.typeItems || {};
    const fatherItems = typeItems[0] || [];
    const subItems = typeItems[this.props.firId] || [];
    const articlesObj = this.props.articleList[this.state.currentId] || {};
    const articles = articlesObj.data || [];
    return (
      <div>
        {fatherItems.map(item => (
          <Radio
            key={item.id}
            labelName={item.name}
            name="firId"
            value={item.id}
            checked={item.id === this.props.firId}
            onChange={this.typeChange}
          />
        ))}
        <hr />
        {subItems.map(item => (
          <Radio
            key={item.id}
            labelName={item.name}
            name="secId"
            value={item.id}
            checked={item.id === this.props.secId}
            onChange={this.typeChange}
          />
        ))}
        <hr />
        <div className="card">
          <div className="card-header clearfix">文章
            <button
              type="button"
              className="btn btn-sm  btn-info pull-right"
              data-toggle="modal"
              data-target="#channel-add-modal"
              onClick={this.showModal}
            >
              <i id="articleAdd" className="fa fa-plus"> 添加</i>
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
              <th>内容</th>
              <th>发布状态</th>
              <th>发布平台</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            {articles.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td><Popover title={item.title} content={item.content}  /></td>
                <td><Status status={+item.release} /></td>
                <td>{getConfig('platform', item.platform)}</td>
                <td>
                  <button className="btn btn-primary-outline btn-sm" hidden={+item.release === 1} data-id={item.id} onClick={this.releaseArticle}>发布</button>
                  <button className="btn btn-danger-outline btn-sm" hidden={+item.release === 0} data-id={item.id} onClick={this.offLineArticle}>下线</button>
                  <button className="btn btn-primary-outline btn-sm" data-id={item.id} onClick={this.showPutModal}>修改</button>
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
  dispatch: PropTypes.func.isRequired,
  articleList: PropTypes.object,
  firId: PropTypes.number,
  secId: PropTypes.number,
};
Article.defaultProps = {
};

export default connect(state => {
  const { omg } = state;
  const articleList = omg[ARTICLE_LIST] || {};
  const typeItems = omg[ARTICLE_TYPE_LIST] || {};
  return {
    articleList,
    typeItems,
  };
})(Article);

