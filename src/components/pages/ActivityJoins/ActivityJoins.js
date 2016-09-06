import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ImgBox, Card, Status, Popover, Pagination } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { ACTIVITY_JOINS_LIST } from '../../../constants';
import { getConfig } from '../../../config/omg';


class Feedback extends Component {
  constructor(props) {
    super(props);
    this.fresh = this.fresh.bind(this);
    this.state = {
      errorMsg: '',
    };
  }
  componentDidMount() {
    this.fresh(this.props.page);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.fresh(nextProps.page);
    }
  }
  fresh(page) {
    this.props.dispatch(fetchAction({
      type: ACTIVITY_JOINS_LIST,
      queryObj: {
       // 'data[filter][user_id]': '1111111',
        page,
      },
      key: page,
    }));
  }
  render() {
    const join = this.props.activityJoinList[this.props.page] || {};
    const items = join.data || [];
    return (
      <div>
        <Card title="活动参与表">
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>活动id</th>
                <th>用户ID</th>
                <th>状态</th>
                <th>邀请人奖品</th>
                <th>活动奖品</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.activity_id}</td>
                <td>{item.user_id}</td>
                <td>
                  {item.status === 1 && '频次验证不通过'}
                  {item.status === 2 && '规则不通过'}
                  {item.status === 3 && '成功'}
                </td>
                <td>{JSON.stringify(JSON.parse(item.invite_remark))}</td>
                <td>{JSON.stringify(JSON.parse(item.remark))}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </Card>
        <Pagination currentPage={join.current_page} lastPage={join.last_page} />
      </div>
    );
  }
}

Feedback.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityJoinList: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
}

Feedback.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const activityJoinList = omg[ACTIVITY_JOINS_LIST] || {};
  return {
    activityJoinList,
  };
})(Feedback);
