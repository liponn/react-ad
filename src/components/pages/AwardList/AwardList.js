import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, Pagination, Input, Button } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { ACTIVITY_REWARD_LIST, AWARD_REISSUE } from '../../../constants';
import history from '../../../core/history';
import { getConfig } from '../../../config/omg';


class AwardList extends Component {
  constructor(props) {
    super(props);
    this.fresh = this.fresh.bind(this);
    this.search = this.search.bind(this);
    this.reset = this.reset.bind(this);
    this.awardReissue = this.awardReissue.bind(this);
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
  awardReissue() {
    this.props.dispatch(fetchAction({
      type: AWARD_REISSUE,
      method: 'POST',
    })).then(() => {
      alert('奖品正在补发,请稍等。。。');
    });
  }
  fresh(page, searchObj) {
    const queryObj = searchObj || this.state.searchObj;
    queryObj.page = page;
    this.props.dispatch(fetchAction({
      type: ACTIVITY_REWARD_LIST,
      queryObj,
      key: page,
    }));
  }
  search(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchObj = {};

    const userId = formData.get('user_id');
    const activityId = formData.get('activity_id');
    const awardType = formData.get('award_type');
    const awardId = formData.get('award_id');
    const status = formData.get('status');
    const mailStatus = formData.get('mail_status');
    const messageStatus = formData.get('message_status');
    if (userId) {
      searchObj['data[filter][user_id]'] = userId;
    }
    if (activityId) {
      searchObj['data[filter][activity_id]'] = activityId;
    }
    if (awardType) {
      searchObj['data[filter][award_type]'] = awardType;
    }
    if (awardId) {
      searchObj['data[filter][award_id]'] = awardId;
    }
    if (status) {
      searchObj['data[filter][status]'] = status;
    }
    if (mailStatus) {
      searchObj['data[filter][mail_status]'] = mailStatus;
    }
    if (messageStatus) {
      searchObj['data[filter][message_status]'] = messageStatus;
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
    const award = this.props.awardList[this.props.page] || {};
    const items = award.data || [];
    const btn = (
      [<button
        type="button"
        className="btn btn-sm btn-success pull-right"
        data-toggle="modal"
        data-target="#channel-add-modal"
        onClick={this.awardReissue}
      >
        补发奖品
      </button>,
        <div className="pull-right row" hidden>
          <form ref="searchForm">
            <div className="pull-left">
              <Input labelName="userId" onChange={this.searchChange} />
            </div>
            <div className="pull-left">
              <Input labelName="奖品发送状态" onChange={this.searchChange} />
            </div>
          </form>
        </div>,
      ]
    );
    return (
      <div>
        <form className="form-inline m-b-1" onSubmit={this.search} onReset={this.reset}>
          <div className="form-group">
            <input type="number" style={{ width: '100px' }} name="user_id" className="form-control" placeholder="用户Id" />
          </div>&nbsp;
          <div className="form-group">
            <input type="number" style={{ width: '100px' }} name="activity_id" className="form-control" placeholder="活动Id" />
          </div>&nbsp;
          <div className="form-group">
            <select name="award_type" className="form-control">
              <option value="" >奖品类型</option>
              {Object.keys(getConfig('awardTypes')).map((key) => (
                <option value={key} >{getConfig('awardTypes', key)}</option>
              ))}
            </select>
          </div>&nbsp;
          <div className="form-group">
            <input type="number" style={{ width: '100px' }} name="award_id" className="form-control" placeholder="奖品Id" />
          </div>&nbsp;
          <div className="form-group">
            <select name="status" className="form-control">
              <option value="" >发送状态</option>
              <option value="0" >失败</option>
              <option value="1" >成功</option>
              <option value="2" >补发成功</option>
            </select>
          </div>&nbsp;
          <div className="form-group">
            <select name="mail_status" className="form-control">
              <option value="" >站内信状态</option>
              <option value="0" >无站内信</option>
              <option value="1" >失败</option>
              <option value="2" >成功</option>
            </select>
          </div>&nbsp;
          <div className="form-group">
            <select name="message_status" className="form-control">
              <option value="" >短信状态</option>
              <option value="0" >无短信</option>
              <option value="1" >失败</option>
              <option value="2" >成功</option>
            </select>
          </div>&nbsp;
          <button type="submit" className="btn btn-primary">查询</button>&nbsp;
          <input type="reset" className="btn btn-info" value="重置" />
        </form>
        <Card title={`奖品发放记录(${award.total})`} btn={btn}>
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
                <th>创建时间</th>
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
                <td>{item.created_at}</td>
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
