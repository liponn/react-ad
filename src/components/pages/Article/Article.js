import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch ,fetchAction} from '../../../actions/omg';
import { getConfig } from '../../../config/omg';
import { Link, Radio, Status, Popover, Alert, ImgBox } from '../../tools';
import history from '../../../core/history';
import { showModal, hideModal } from '../../../actions/modal';
import ArticleAddModal from './ArticleAddModal';
import { ARTICLE_LIST, ARTICLE_ADD, ARTICLE_PUT, ARTICLE_TYPE_LIST, ARTICLE_DEL, ARTICLE_RELEASE, ARTICLE_OFFLINE, ARTICLE_DOWN, ARTICLE_UP } from '../../../constants';

class Article extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.delArticle = this.delArticle.bind(this);
    this.releaseArticle = this.releaseArticle.bind(this);
    this.offLineArticle = this.offLineArticle.bind(this);
    this.upArticle = this.upArticle.bind(this);
    this.downArticle = this.downArticle.bind(this);
    this.typeChange = this.typeChange.bind(this);
    this.getType = this.getType.bind(this);
    this.getArticle = this.getArticle.bind(this);
    this.freshArticle = this.freshArticle.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.showUpdate = this.showUpdate.bind(this);
    
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
    const modalView = <ArticleAddModal typeId={this.state.currentId} submit={this.add} />;
    this.props.dispatch(showModal(modalView));
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { dispatch } = this.props;
    dispatch(fetchAction({
      type: ARTICLE_ADD,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        dispatch(hideModal(true));
        this.freshArticle();
      } else {
        alert(json.data.error_msg);
      }
    });
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
      .then(() => (this.freshArticle()));
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
    const id = $(e.target).data('id');
    this.props.dispatch(commonFetch(ARTICLE_UP, 'GET',false ,"/"+id))
      .then(() => (this.freshArticle()));
  }
  downArticle(e) {
    const id = $(e.target).data('id');
    this.props.dispatch(commonFetch(ARTICLE_DOWN, 'GET',false ,"/"+id))
      .then(() => (this.freshArticle()));
  }
  showUpdate(e) {
    const id = e.target.dataset.id;
    const index = e.target.dataset.index;
    const item = this.articles[index] || {};
    if (item.id !== +id) {
      this.setState({
        errorMsg: '编辑信息不匹配,请刷新重试',
      });
      return;
    }
    const modalView = <ArticleAddModal update typeId={this.state.currentId} item={item} submit={this.update} />;
    this.props.dispatch(showModal(modalView));
  }
  update(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { dispatch } = this.props;
    dispatch(fetchAction({
      type: ARTICLE_PUT,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        dispatch(hideModal(true));
        this.freshArticle();
      } else {
        alert(json.data.error_msg);
      }
    });
  }
  render() {
    const typeItems = this.props.typeItems || {};
    const fatherItems = typeItems[0] || [];
    const subItems = typeItems[this.props.firId] || [];
    const articlesObj = this.props.articleList[this.state.currentId] || {};
    const articles = articlesObj.data || [];
    this.articles = articles;
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
        <hr hidden={subItems.length === 0} />
        <Alert msg={this.state.errorMsg} />
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
              to="/article/type"
            >
              <i className="fa fa-pencil">类型管理</i>
            </Link>
          </div>
          <table className="table table-bordered m-b-0 table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>标题</th>
                <th>配图</th>
                <th>内容</th>
                <th>发布状态</th>
                <th>发布平台</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {articles.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.cover ? <ImgBox src={item.cover} /> : '—'}</td>
                <td><Popover title={item.title} content={item.content} /></td>
                <td><Status status={+item.release} /></td>
                <td>{getConfig('platform', item.platform)}</td>
                <td>
                  <button className="btn btn-success-outline btn-sm" hidden={+item.release === 1} data-id={item.id} onClick={this.releaseArticle}>发布</button>
                  <button className="btn btn-warning-outline btn-sm" hidden={+item.release === 0} data-id={item.id} onClick={this.offLineArticle}>下线</button>
                  <button className="btn btn-info-outline btn-sm" data-id={item.id} onClick={this.upArticle}>上移</button>
                  <button className="btn btn-info-outline btn-sm" data-id={item.id} onClick={this.downArticle}>下移</button>
                  <button className="btn btn-success-outline btn-sm" data-index={index} data-id={item.id} onClick={this.showUpdate}>编辑</button>
                  <button className="btn btn-danger-outline btn-sm" data-id={item.id} onClick={this.delArticle}>删除</button>
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

