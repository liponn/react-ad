import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch } from '../../../actions/omg';
import { showModal } from '../../../actions/modal';
import { ACTIVITY_GROUP_DEL, ACTIVITY_GROUP_LIST, ACTIVITY_OFFLINE, ACTIVITY_RELEASE, ACTIVITY_DEL } from '../../../constants';
import { Link, Card, Modal } from '../../tools';
import { getConfig } from '../../../config/omg';
import ActivityAddModal from '../../modals/ActivityAddModal';
import ActivityAdd from '../../activity/ActivityAdd';

class ActivityList extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.activityRelease = this.activityRelease.bind(this);
    this.activityOffline = this.activityOffline.bind(this);
    this.activityDelete = this.activityDelete.bind(this);
    this.groupDelete = this.groupDelete.bind(this);
    this.showActivityAddModal = this.showActivityAddModal.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(commonFetch(ACTIVITY_GROUP_LIST));
  }
  showModal() {
    const modalView = (
      <ActivityAddModal />
    );
    this.props.dispatch(showModal(modalView));
  }
  activityRelease(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(commonFetch(ACTIVITY_RELEASE, 'POST', formData))
      .then(() => (this.props.dispatch(commonFetch(ACTIVITY_GROUP_LIST))));
  }
  activityOffline(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(commonFetch(ACTIVITY_OFFLINE, 'POST', formData))
      .then(() => (this.props.dispatch(commonFetch(ACTIVITY_GROUP_LIST))));
  }
  activityDelete(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(commonFetch(ACTIVITY_DEL, 'POST', formData))
      .then(() => (this.props.dispatch(commonFetch(ACTIVITY_GROUP_LIST))));
  }
  groupDelete(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(commonFetch(ACTIVITY_GROUP_DEL, 'POST', formData))
      .then(() => (this.props.dispatch(commonFetch(ACTIVITY_GROUP_LIST))));
  }
  showActivityAddModal(e) {
    const id = +$(e.target).data('id');
    const modalView = (
      <Modal title="添加活动">
        <ActivityAdd groupId={id} />
      </Modal>
    );
    this.props.dispatch(showModal(modalView));
  }
  render() {
    const items = this.props.items;
    const addBtn = (
      <button
        type="button"
        onClick={this.showModal}
        className="btn btn-sm btn-info action-add pull-right"
      >
        <i className="fa fa-plus">活动</i>
      </button>);
    return (
      <Card title="活动列表" btn={addBtn}>
        <table className="table m-b-0 table-hover">
          <thead>
            <tr>
              <th>活动名称</th>
              <th>触发类型</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody >
            {items.map((item) => {
              const trArr = [
                <tr key={`group-${item.id}`}>
                  <td>{item.name} ({item.activities.length})</td>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>
                    <button
                      data-id={item.id}
                      onClick={this.showActivityAddModal}
                      className="btn btn-sm btn-info-outline"
                    >
                      <i className="fa fa-plus"></i>子活动
                    </button>
                    <button
                      hidden={item.activities.length}
                      data-id={item.id}
                      onClick={this.groupDelete}
                      className="btn btn-sm btn-danger-outline"
                    >删除</button>
                  </td>
                </tr>];
              const children = item.activities.map((activity) => (
                <tr key={`activity${activity.id}`}>
                  <td>&nbsp;&nbsp;{activity.name}</td>
                  <td>{getConfig('activityTriggers', activity.trigger_type)}</td>
                  <td>{activity.start_at ? activity.start_at : '—'}</td>
                  <td>{activity.end_at ? activity.start_at : '—'}</td>
                  <td>
                    <span className="text-success" hidden={!activity.enable}>上线</span>
                    <span className="text-warning" hidden={activity.enable}>下线</span></td>
                  <td>
                    <button
                      data-id={activity.id}
                      hidden={!activity.enable}
                      onClick={this.activityOffline}
                      className="btn btn-sm btn-warning-outline"
                    >下线</button>
                    <button
                      data-id={activity.id}
                      hidden={activity.enable}
                      onClick={this.activityRelease}
                      className="btn btn-sm btn-success-outline"
                    >上线</button>
                    <Link className="btn btn-sm btn-info-outline" to={`/activity/id/${activity.id}`}>
                      编辑
                    </Link>
                    <button
                      data-id={activity.id}
                      onClick={this.activityDelete}
                      className="btn btn-sm btn-danger-outline"
                    >删除</button>
                  </td>
                </tr>
              ));
              trArr.push(children);
              return trArr;
            })}
          </tbody>
        </table>
      </Card>
    );
  }
}

ActivityList.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

ActivityList.defaultProps = {
  items: [],
}

export default connect(state => {
  const { omg } = state;
  const { data } = omg[ACTIVITY_GROUP_LIST] || [];
  return {
    items: data
  };
})(ActivityList);



