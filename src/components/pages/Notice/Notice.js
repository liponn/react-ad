import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch ,fetchAction} from '../../../actions/omg';
import { getConfig } from '../../../config/omg';
import { Status, Popover, Pagination} from '../../tools';
import { showModal, hideModal } from '../../../actions/modal';
import NoticeAddModal from './NoticeAddModal';
import { NOTICE_ADD, NOTICE_DEL, NOTICE_DOWN, NOTICE_LIST, NOTICE_OFFLINE, NOTICE_PUT, NOTICE_RELEASE, NOTICE_UP } from '../../../constants';

class Notice extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.del = this.del.bind(this);
    this.release = this.release.bind(this);
    this.offLine = this.offLine.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.fresh = this.fresh.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.showUpdate = this.showUpdate.bind(this);
    this.list = this.list.bind(this);

  }
  componentDidMount() {
    this.list(this.props.page);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.list(nextProps.page);
    }
  }
  showModal() {
    const modalView = <NoticeAddModal submit={this.add} />;
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
        this.fresh(this.props.page);
      } else {
        alert(json.data.error_msg);
      }
    });
  }
  hideModal() {
    this.props.dispatch(hideModal());
  }
  fresh() {
    this.list(this.props.page);
  }
  list(page) {
    this.props.dispatch(fetchAction({
      type: NOTICE_LIST,
      method: 'GET',
      queryObj: { page },
      key: page,
    }));   
  }
  del(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    const type_id = $('.focus').data('id');
    this.props.dispatch(commonFetch(NOTICE_DEL, 'POST', formData))
      .then(() => (this.fresh()));
  }
  release(e) {
    const id = e.target.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: NOTICE_RELEASE,
      method: 'POST',
      formData,
    })).then(() => (this.fresh()));
  }
  offLine(e) {
    const id = e.target.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: NOTICE_OFFLINE,
      method: 'POST',
      formData,
    })).then(() => (this.fresh(this.props.page)));
  }

  up(e) {
    const id = e.target.dataset.id;
    this.props.dispatch(commonFetch(NOTICE_UP, 'GET',false ,"/"+id))
      .then(() => (this.fresh()));
  }
  down(e) {
    const id = e.target.dataset.id;
    this.props.dispatch(commonFetch(NOTICE_DOWN, 'GET',false ,"/"+id))
      .then(() => (this.fresh()));
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
    const modalView = <NoticeAddModal update item={item} submit={this.update} />;
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
        this.fresh();
      } else {
        alert(json.data.error_msg);
      }
    });
  }
  render() {
    const notice = this.props.noticeList[this.props.page] || {};
    const items = notice.data || [];
    this.items = items;
    return (
      <div>
        <div className="card">
          <div className="card-header clearfix">公告列表
            <button
              type="button"
              className="btn btn-sm  btn-info pull-right"
              data-toggle="modal"
              data-target="#channel-add-modal"
              onClick={this.showModal}
            >
              <i className="fa fa-plus"> 添加</i>
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
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td><Popover title={item.title} content={item.content} /></td>
                <td><Status status={+item.release} /></td>
                <td>{getConfig('platform', item.platform)}</td>
                <td>
                  <button className="btn btn-success-outline btn-sm" hidden={+item.release === 1} data-id={item.id} onClick={this.release}>发布</button>
                  <button className="btn btn-warning-outline btn-sm" hidden={+item.release === 0} data-id={item.id} onClick={this.offLine}>下线</button>
                  <button className="btn btn-info-outline btn-sm" data-id={item.id} onClick={this.up}>上移</button>
                  <button className="btn btn-info-outline btn-sm" data-id={item.id} onClick={this.down}>下移</button>
                  <button className="btn btn-success-outline btn-sm" data-index={index} data-id={item.id} onClick={this.showUpdate}>编辑</button>
                  <button className="btn btn-danger-outline btn-sm" data-id={item.id} onClick={this.del}>删除</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <Pagination currentPage={notice.current_page} lastPage={notice.last_page} />
      </div>

    );
  }
}

Notice.propTypes = {
  dispatch: PropTypes.func.isRequired,
  noticeList: PropTypes.object,
  page: PropTypes.number.isRequired,
};
Notice.defaultProps = {
};

export default connect(state => {
  const { omg } = state;
  const noticeList = omg[NOTICE_LIST] || {};
  return {
    noticeList,
  };
})(Notice);

