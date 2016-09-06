import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ImgBox, Card, Status, Popover, Pagination } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { ACTIVITY_REWARD_LIST } from '../../../constants';
import { getConfig } from '../../../config/omg';


class AwardList extends Component {
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
      type: ACTIVITY_REWARD_LIST,
      queryObj: { page },
      key: page,
    }));
  }
  render() {
    const award = this.props.awardList[this.props.page] || {};
    const items = award.data || [];
    return (
      <div>
        <Card title="用户反馈列表">
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>活动ID</th>
                <th>用户ID</th>
                <th>奖品类型</th>
                <th>奖品ID</th>
                <th>站内信发送状态</th>
                <th>短信发送状态</th>
                <th>奖品发送状态</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.activity_id}</td>
                <td>{item.user_id}</td>
                <td>{item.award_type}</td>
                <td>{item.award_id}</td>
                <td>{item.mail_status}</td>
                <td>{item.message_status}</td>
                <td>{item.status}</td>
                <td>{JSON.stringify(JSON.parse(item.remark || '{}'))}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </Card>
        <Pagination currentPage={award.current_page} lastPage={award.last_page} />
      </div>
    );
  }
}

AwardList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  awardList: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
}

AwardList.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const awardList = omg[ACTIVITY_REWARD_LIST] || {};
  return {
    awardList,
  };
})(AwardList);
