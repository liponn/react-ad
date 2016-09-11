import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, Pagination } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { ADMIN_LIST, ADMIN_ADD, ADMIN_DEL, ADMIN_PUT } from '../../../constants';
import { getConfig } from '../../../config/omg';
import AdminAddModal from './AdminAddModal';
import { showModal, hideModal } from '../../../actions/modal';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.fresh = this.fresh.bind(this);
    this.list = this.list.bind(this);
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
    this.update = this.update.bind(this);
    this.showAdd = this.showAdd.bind(this);
    this.showUpdate = this.showUpdate.bind(this);
    this.state = {
      errorMsg: '',
    };
  }
  componentDidMount() {
    this.fresh(this.props.page);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.list(nextProps.page);
    }
  }
  fresh() {
    this.list(this.props.page);
  }
  list(page) {
    this.props.dispatch(fetchAction({
      type: ADMIN_LIST,
      queryObj: { page },
      key: page,
    }));
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { dispatch } = this.props;
    dispatch(fetchAction({
      type: ADMIN_ADD,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        dispatch(hideModal(true));
        this.fresh(this.props.page);
      } else {
        alert(json.data.error_msg);
      }
    });
  }
  del(e) {
    const item = this.items[e.target.dataset.index];
    if (!confirm(`确定删除${item.mobile}吗`)) {
      return;
    }
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: ADMIN_DEL,
      method: 'POST',
      formData,
    })).then(() => (this.fresh()));
  }
  update(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { dispatch } = this.props;
    dispatch(fetchAction({
      type: ADMIN_PUT,
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
  showAdd() {
    const modalView = <AdminAddModal submit={this.add} />;
    this.props.dispatch(showModal(modalView));
  }
  showUpdate(e) {
    const id = e.target.dataset.id;
    const index = e.target.dataset.index;
    const item = this.items[index] || {};
    if (item.id !== +id) {
      this.setState({
        errorMsg: '编辑信息不匹配,请刷新重试',
      });
      return;
    }
    const modalView = <AdminAddModal update item={item} submit={this.update} />;
    this.props.dispatch(showModal(modalView));
  }
  render() {
    const admin = this.props.adminList[this.props.page] || {};
    const items = admin.data || [];
    this.items = items;
    const addBtn = (
      <button
        onClick={this.showAdd}
        className="btn btn-sm btn-info pull-right"
      >
        <i className="fa fa-plus">添加</i>
      </button>
    );
    return (
      <div>
        <Card title="权限管理" btn={addBtn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>姓名</th>
                <th>手机号</th>
                <th>用户组</th>
                <th>上次登录</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{getConfig('adminTypes', item.level)}</td>
                <td>{item.last_login || '-'}</td>
                <td>
                  <button className="btn btn-success-outline btn-sm" data-index={index} data-id={item.id} onClick={this.showUpdate}>编辑</button>
                  <button className="btn btn-danger-outline btn-sm" data-id={item.id} data-index={index} onClick={this.del}>删除</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </Card>
        <Pagination currentPage={admin.current_page} lastPage={admin.last_page} />
      </div>
    );
  }
}

Admin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  adminList: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
}

Admin.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const adminList = omg[ADMIN_LIST] || {};
  return {
    adminList,
  };
})(Admin);
