import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commonFetch, fetchAction } from '../../../actions/omg';
import { getConfig } from '../../../config/omg';
import { Link, Radio, Status, Popover, Alert, ImgBox, Pagination } from '../../tools';
import history from '../../../core/history';
import { showModal, hideModal } from '../../../actions/modal';
import ArticleAddModal from './ArticleAddModal';
import { ARTICLE_LIST, ARTICLE_ADD, ARTICLE_PUT, ARTICLE_TYPE_LIST, ARTICLE_DEL, ARTICLE_RELEASE, ARTICLE_OFFLINE, ARTICLE_DOWN, ARTICLE_UP, TEMPLATE_HELP, TEMPLATE_DYNAMIC, TEMPLATE_MEDIA, TEMPLATE_CLASSROOM } from '../../../constants';
import { DatePicker } from 'antd';

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
    this.fresh = this.fresh.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.showUpdate = this.showUpdate.bind(this);
    this.templateDynamic = this.templateDynamic.bind(this);
    this.templateHelp = this.templateHelp.bind(this);
    this.templateMedia = this.templateMedia.bind(this);
    this.templateClass = this.templateClass.bind(this);
    const currentId = this.props.secId || this.props.firId || 0;
    this.state = {
      currentId,
      aliasname: '',
    };
  }
  componentDidMount() {
    this.getType(0);
    if (this.props.firId !== undefined) {
      this.getType(this.props.firId);
    }
    this.fresh();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.getArticle(this.state.currentId, nextProps.page);
    }
  }
  templateMedia() {
    this.props.dispatch(fetchAction({
      type: TEMPLATE_MEDIA,
      method: 'POST',
    })).then(() => {
      alert('媒体报道页生成完成');
    });
  }
  templateDynamic() {
    this.props.dispatch(fetchAction({
      type: TEMPLATE_DYNAMIC,
      method: 'POST',
    })).then(() => {
      alert('pc网利动态成完成');
    });
  }
  templateHelp() {
    this.props.dispatch(fetchAction({
      type: TEMPLATE_HELP,
      method: 'POST',
    })).then(() => {
      alert('pc帮助中心生成完成');
    });
  }
  templateClass() {
    this.props.dispatch(fetchAction({
      type: TEMPLATE_CLASSROOM,
      method: 'POST',
    })).then(() => {
      alert('理财课堂页生成完成');
    });
  }
  showModal(e) {
    const aliasName = e.target.dataset.alias;
    const modalView = <ArticleAddModal aliasName={aliasName} typeId={this.state.currentId} submit={this.add} />;
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
        this.fresh();
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
  getArticle(typeId, page) {
    this.props.dispatch(fetchAction({
      type: ARTICLE_LIST,
      method: 'GET',
      queryObj: { page },
      suffix: `/${typeId}/30`,
      key: `${typeId}_${page}`,
    }));
  }
  fresh() {
    this.getArticle(this.state.currentId, this.props.page);
  }
  typeChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    
    if (name === 'firId') {
      history.push(`/article/${value}`);
      this.getType(value);
    }
    if (name === 'secId') {
      history.push(`/article/${this.props.firId}/${value}`);
    }
    this.setState({
      currentId: +value,
    });
    this.getArticle(value, this.props.page);
  }
  delArticle(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    const type_id = $('.focus').data('id');
    this.props.dispatch(commonFetch(ARTICLE_DEL, 'POST', formData))
      .then(() => (this.fresh()));
  }
  releaseArticle(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: ARTICLE_RELEASE,
      method: 'POST',
      formData,
    })).then(() => (this.fresh()));
  }
  offLineArticle(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: ARTICLE_OFFLINE,
      method: 'POST',
      formData,
    })).then(() => (this.fresh()));
  }

  upArticle(e) {
    const id = $(e.target).data('id');
    this.props.dispatch(commonFetch(ARTICLE_UP, 'GET',false ,"/"+id))
      .then(() => (this.fresh()));
  }
  downArticle(e) {
    const id = $(e.target).data('id');
    this.props.dispatch(commonFetch(ARTICLE_DOWN, 'GET',false ,"/"+id))
      .then(() => (this.fresh()));
  }
  showUpdate(e) {
    const id = e.target.dataset.id;
    const index = e.target.dataset.index;
    const item = this.articles[index] || {};
    const aliasName = e.target.dataset.alias;
    if (item.id !== +id) {
      this.setState({
        errorMsg: '编辑信息不匹配,请刷新重试',
      });
      return;
    }
    const modalView = <ArticleAddModal update aliasName={aliasName} typeId={this.state.currentId} item={item} submit={this.update} />;
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
        this.fresh();
      } else {
        alert(json.data.error_msg);
      }
    });
  }
  render() {
    const typeItems = this.props.typeItems || {};
    const fatherItems = typeItems[0] || [];
    const subItems = typeItems[this.props.firId] || [];
    const key = `${this.state.currentId}_${this.props.page}`;
    const articlesObj = this.props.articleList[key] || {};
    const articles = articlesObj.data || [];
    let aliasName = '';
    this.articles = articles;
    for (let i = 0; i < fatherItems.length; i++) {
      if (fatherItems[i].id === this.props.firId) {
        aliasName = fatherItems[i].alias_name;
      }
    }
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
        <Link
          className="btn btn-sm  btn-info-outline pull-right" to="/article/type">
          <i className="fa fa-pencil">类型管理</i>
        </Link>
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
              data-alias={aliasName}
              onClick={this.showModal}
            >
              <i id="articleAdd" data-alias={aliasName} className="fa fa-plus"> 添加</i>
            </button>
            <button
              type="button"
              className="btn btn-sm  btn-success pull-right"
              hidden={aliasName !== 'trends'}
              onClick={this.templateDynamic}
            >生成网利动态页</button>
            <button
              type="button"
              className="btn btn-sm  btn-success pull-right"
              hidden={aliasName !== 'questions'}
              onClick={this.templateHelp}
            >生成帮助中心页</button>
            <button
              type="button"
              className="btn btn-sm  btn-success pull-right"
              hidden={aliasName !== 'report'}
              onClick={this.templateMedia}
            >生成媒体报道页</button>
            <button
              type="button"
              className="btn btn-sm  btn-success pull-right"
              hidden={aliasName !== 'classroom'}
              onClick={this.templateClass}
            >生成理财课堂页</button>
          </div>
          <table className="table table-bordered m-b-0 table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>标题</th>
                <th>配图</th>
                <th>内容</th>
                <th>发布状态</th>
                {(aliasName === 'questions' || aliasName === 'pc_questions') ? [<th>常见问题</th>] : false}
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
                {(aliasName === 'questions' || aliasName === 'pc_questions') ? [<td>{item.platform === 1 ? '√️' : '—'}</td>] : false}
                <td>
                  <button className="btn btn-success-outline btn-sm" hidden={+item.release === 1} data-id={item.id} onClick={this.releaseArticle}>发布</button>
                  <button className="btn btn-warning-outline btn-sm" hidden={+item.release === 0} data-id={item.id} onClick={this.offLineArticle}>下线</button>
                  <button className="btn btn-info-outline btn-sm" data-id={item.id} onClick={this.upArticle}>上移</button>
                  <button className="btn btn-info-outline btn-sm" data-id={item.id} onClick={this.downArticle}>下移</button>
                  <button className="btn btn-success-outline btn-sm" data-alias={aliasName} data-index={index} data-id={item.id} onClick={this.showUpdate}>编辑</button>
                  <button className="btn btn-danger-outline btn-sm" data-id={item.id} onClick={this.delArticle}>删除</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <Pagination currentPage={articlesObj.current_page} lastPage={articlesObj.last_page} />
      </div>
    );
  }
}
Article.propTypes = {
  dispatch: PropTypes.func.isRequired,
  articleList: PropTypes.object,
  firId: PropTypes.number,
  secId: PropTypes.number,
  page: PropTypes.number.isRequired,
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

