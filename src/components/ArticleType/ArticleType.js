import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch } from '../../actions/omg';
import { showModal, hideModal } from '../../actions/modal';
import {ARTICLE_TYPE_LIST,ARTICLE_TYPE_DEL,ARTICLE_TYPE_UP,ARTICLE_TYPE_DOWN} from'../../constants';
import ArticleTypeAddModal from'../modals/ArticleTypeAddModal';

class ArticleType extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.delType = this.delType.bind(this);
    this.upType = this.upType.bind(this);
    this.downType = this.downType.bind(this);
    this.showAddSubtypeModal = this.showAddSubtypeModal.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(commonFetch(ARTICLE_TYPE_LIST,'GET', false, '/0'));
  }
  showModal() {
    const modalView = <ArticleTypeAddModal Parent_id={0} />;
    this.props.dispatch(showModal(modalView));
  }
  showAddSubtypeModal(e){
    const id = $(e.target).data('id');
    const modalView = <ArticleTypeAddModal Parent_id={id} />
    this.props.dispatch(showModal(modalView));
  }
  hideModal() {
    this.props.dispatch(hideModal());
  }
  delType(e){
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(commonFetch(ARTICLE_TYPE_DEL, 'POST', formData))
      .then(() => (this.props.dispatch(commonFetch(ARTICLE_TYPE_LIST))));
  }
  upType(e){
    const id =$(e.target).data('id');
    this.props.dispatch(commonFetch(ARTICLE_TYPE_UP, 'GET',false ,"/"+id))
      .then(() => (this.props.dispatch(commonFetch(ARTICLE_LIST))));
  }
  downType(e){
    const id =$(e.target).data('id');
    this.props.dispatch(commonFetch(ARTICLE_TYPE_DOWN, 'GET',false ,"/"+id))
      .then(() => (this.props.dispatch(commonFetch(ARTICLE_LIST))));
  }
  render() {
    const items = this.props.items;
    return (
      <div>
        <div className="card">
          <div className="card-header clearfix">文章类型
            <button
              type="button"
              className="btn btn-sm  btn-info pull-right"
              data-toggle="modal"
              data-target="#channel-add-modal"
            >
              <i className="fa fa-plus" data-toggle="modal" data-target="#cahnnel-add-modal" onClick={this.showModal}> 添加</i>
            </button>
          </div>
          <table className="table table-bordered m-b-0 table-hover">
            <thead>
            <tr>
              <th>id</th>
              <th>分类名称</th>
              <th>别名</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.alias_name}</td>
                <td>
                  <button className="btn btn-sm btn-info-outline" data-id={item.id} onClick={this.showAddSubtypeModal}>
                    <i className="fa fa-plus" ></i>子类型
                  </button>
                  <button className="btn btn-danger-outline btn-sm" data-id={item.id} onClick={this.delType}>删除</button>
                  <button className="btn btn-primary-outline btn-sm" data-id={item.id} onClick={this.putType}>修改</button>
                  <button className="btn btn-success-outline btn-sm" data-id={item.id} onClick={this.upType}>上移</button>
                  <button className="btn btn-success-outline btn-sm" data-id={item.id} onClick={this.downType}>下移</button>
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
ArticleType.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

ArticleType.defaultProps = {
  items: [],
}

export default connect(state => {
  const { omg } = state;
  const items  = omg[ARTICLE_TYPE_LIST] || [];
  return {
    items
  };
})(ArticleType);
