import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch } from '../../../actions/omg';
import { showModal } from '../../../actions/modal';
import { ACTIVITY_GROUP_LIST } from '../../../constants';
import Link from '../../tools/Link';

class ActivityList extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(commonFetch(ACTIVITY_GROUP_LIST));
  }
  showModal() {
    this.props.dispatch(showModal('activityAdd'));
  }
  render() {
    console.dir(this.props.items);
    const items = this.props.items;
    return (
      <div className="card">
        <div className="card-header clearfix">活动列表
          <button
            type="button"
            onClick={this.showModal}
            className="btn btn-sm btn-info action-add pull-right"
          >
            <i className="fa fa-plus">活动</i>
          </button>
        </div>
        <table className="table m-b-0">
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
              let trArr = [
                <tr key={'group' + item.id}>
                  <td>{item.name}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Link className="btn btn-sm btn-info-outline" to={`/activity/gid/${item.id}`}>
                      <i className="fa fa-plus">子活动</i>
                    </Link>
                    <a href="/activity/group-update/@{{group.id}}" className="btn btn-sm btn-info-outline">编辑</a>
                    <button className="btn btn-sm btn-danger-outline">删除</button>
                  </td>
                </tr>
              ];
              {item.activities.map((activity) => {
                trArr.join(
                  <tr key={'activity' + activity.id}>
                    <td>{activity.name}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <button className="btn btn-sm btn-warning-outline">下线</button>
                      <button className="btn btn-sm btn-info-outline">上线</button>
                      <button className="btn btn-sm btn-danger-outline">删除</button>
                    </td>
                  </tr>
                )
              })}
              return trArr;
            })}
          </tbody>
        </table>
      </div>
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



