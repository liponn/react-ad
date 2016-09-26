import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ImgBox, Card, Status, Popover, Pagination } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { ACTIVITY_JOINS_LIST } from '../../../constants';
import history from '../../../core/history';
import { getConfig } from '../../../config/omg';


class Feedback extends Component {
  constructor(props) {
    super(props);
    this.fresh = this.fresh.bind(this);
    this.search = this.search.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      errorMsg: '',
      searchObj: {},
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
  fresh(page, searchObj) {
    const queryObj = searchObj || this.state.searchObj;
    queryObj.page = page;
    this.props.dispatch(fetchAction({
      type: ACTIVITY_JOINS_LIST,
      queryObj,
      key: page,
    }));
  }
  search(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchObj = {};
    const userId = formData.get('user_id')
    const activityId = formData.get('activity_id')
    const status = formData.get('status')
    if (userId) {
      searchObj['data[filter][user_id]'] = userId;
    }
    if (activityId) {
      searchObj['data[filter][activity_id]'] = activityId;
    }
    if (status) {
      searchObj['data[filter][status]'] = status;
    }
    const location = history.getCurrentLocation();
    history.push({ ...location, query: Object.assign({}, location.query, { page: 1 }) });
    this.setState({
      searchObj,
    });
    this.fresh(this.props.page, searchObj);
  }
  reset() {
    this.setState({
      searchObj: {},
    });
    this.fresh(this.props.page, {});
  }
  render() {
    const join = this.props.activityJoinList[this.props.page] || {};
    const items = join.data || [];
    return (
      <div>
        <form className="form-inline m-b-1" onSubmit={this.search} onReset={this.reset}>
          <div className="form-group">
            <input type="number" name="user_id" className="form-control" placeholder="用户Id" />
          </div>&nbsp;
          <div className="form-group">
            <input type="number" name="activity_id" className="form-control" placeholder="活动Id" />
          </div>&nbsp;
          <div className="form-group">
            <select name="status" className="form-control">
              <option value="" >状态</option>
              <option value="1" >频次验证不通过</option>
              <option value="2" >规则验证不通过</option>
              <option value="3" >成功</option>
            </select>
          </div>&nbsp;
          <button type="submit" className="btn btn-primary">查询</button>
          <input type="reset" className="btn btn-info" value="重置" />
        </form>
        <Card title="活动参与表">
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>活动id</th>
                <th>用户ID</th>
                <th>状态</th>
                <th>创建时间</th>
                <th>邀请人奖品</th>
                <th>附加信息</th>
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
                <td>{item.created_at}</td>
                <td>{JSON.stringify(JSON.parse(item.invite_remark || '{}'))}</td>
                <td>{JSON.stringify(JSON.parse(item.remark || '{}'))}</td>
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
