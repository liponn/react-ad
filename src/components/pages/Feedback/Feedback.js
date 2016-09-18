import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ImgBox, Card, Status, Popover, Pagination } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { FEEDBACK_LIST } from '../../../constants';
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
      type: FEEDBACK_LIST,
      queryObj: { page },
      key: page,
    }));
  }
  render() {
    const feedback = this.props.feedbackList[this.props.page] || {};
    const items = feedback.data || [];
    return (
      <div>
        <Card title="用户反馈列表">
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>用户ID</th>
                <th>内容</th>
                <th>平台</th>
                <th>时间</th>
                <th>UA</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.user_id}</td>
                <td>{item.content}</td>
                <td>{getConfig('feedbackPlatformTypes', item.platform)}</td>
                <td>{item.created_at}</td>
                <td>{item.user_agent}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </Card>
        <Pagination currentPage={feedback.current_page} lastPage={feedback.last_page} />
      </div>
    );
  }
}

Feedback.propTypes = {
  dispatch: PropTypes.func.isRequired,
  feedbackList: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
}

Feedback.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const feedbackList = omg[FEEDBACK_LIST] || {};
  return {
    feedbackList,
  };
})(Feedback);

