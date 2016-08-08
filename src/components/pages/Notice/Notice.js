import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch ,fetchAction} from '../../../actions/omg';
import { getConfig } from '../../../config/omg';
import { Link, Radio, Status, Popover, Alert } from '../../tools';
import history from '../../../core/history';
import { showModal, hideModal } from '../../../actions/modal';
import NoticeAddModal from '../../modals/NoticeAddModal';
import { NOTICE_ADD, NOTICE_DEL, NOTICE_DOWN, NOTICE_LIST, NOTICE_OFFLINE, NOTICE_PUT, NOTICE_RELEASE, NOTICE_UP } from '../../../constants';

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
    this.getArticle(this.props.page);
  }
  showModal() {
    const modalView = <NoticeAddModal typeId={this.state.currentId} submit={this.add} />;
    this.props.dispatch(showModal(modalView));
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { dispatch } = this.props;
    dispatch(fetchAction({
      type: NOTICE_ADD,
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
  getArticle(typeId) {
    this.props.dispatch(fetchAction({
      type: NOTICE_LIST,
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
    this.props.dispatch(commonFetch(NOTICE_DEL, 'POST', formData))
      .then(() => (this.freshArticle()));
  }
  releaseArticle(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: NOTICE_RELEASE,
      method: 'POST',
      formData,
    })).then(() => (this.freshArticle()));
  }
  offLineArticle(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: NOTICE_OFFLINE,
      method: 'POST',
      formData,
    })).then(() => (this.freshArticle()));
  }

  upArticle(e) {
    const id = $(e.target).data('id');
    this.props.dispatch(commonFetch(NOTICE_UP, 'GET',false ,"/"+id))
      .then(() => (this.freshArticle()));
  }
  downArticle(e) {
    const id = $(e.target).data('id');
    this.props.dispatch(commonFetch(NOTICE_DOWN, 'GET',false ,"/"+id))
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
    const modalView = <NoticeAddModal update typeId={this.state.currentId} item={item} submit={this.update} />;
    this.props.dispatch(showModal(modalView));
  }
  update(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { dispatch } = this.props;
    dispatch(fetchAction({
      type: NOTICE_PUT,
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
    const articlesObj = this.props.articleList[this.state.currentId] || {};
    const articles = articlesObj.data || [];
    this.articles = articles;
    return (
      <div>
        <Alert msg={this.state.errorMsg} />
        <div className="card">
          <div className="card-header clearfix">公告
            <button
              type="button"
              className="btn btn-sm  btn-info pull-right"
              data-toggle="modal"
              data-target="#channel-add-modal"
              onClick={this.showModal}
            >
              <i id="articleAdd" className="fa fa-plus"> 添加</i>
            </button>
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
            {articles.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
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
};
Article.defaultProps = {
};

export default connect(state => {
  const { omg } = state;
  const articleList = omg[NOTICE_LIST] || {};
  return {
    articleList,
  };
})(Article);

