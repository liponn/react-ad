import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../tools/Card';
import Alert from '../../tools/Alert';
import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import { CHANNEL_LIST, ACTIVITY_RULE_ADD_CHANNEL, ACTIVITY_RULE_LIST } from '../../../constants';

class ChannelRule extends Component {
  constructor(props) {
    super(props);
    this.channelAdd = this.channelAdd.bind(this);
    this.channelDel = this.channelDel.bind(this);
    this.changeChannel = this.changeChannel.bind(this);
    this.addChannelRule = this.addChannelRule.bind(this);
    this.state = {
      channels: [],
    };
  }
  componentDidMount() {
    this.props.dispatch(commonFetch(CHANNEL_LIST));
  }
  // 添加渠道到规则
  channelAdd(e) {
    const name = $(e.target).data('name').toString();
    const { channels } = this.state;
    if(!channels.find((value) => (value === name))) {
      channels.push(name);
    }
    this.setState({
      channels,
    });
  }

  // 删除渠道从规则
  channelDel(e) {
    const name = $(e.target).data('name').toString();
    const { channels } = this.state;
    const index = channels.findIndex((value) => (value === name))
    if (index > -1) {
      channels.splice(index, 1);
    }
    this.setState({
      channels,
    });
  }
  // 人工修改渠道规则
  changeChannel(e) {
    const value = $(e.target).val().toString();
    const channels = value === '' ? [] : value.split(/;+/);
    this.setState({
      channels,
    });
  }
  // 保存渠道规则
  addChannelRule(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const form = $(e.target).get(0);   
    const formData = new FormData(form);
    const activityId = this.props.activityId;
    this.props.dispatch(commonFetch(ACTIVITY_RULE_ADD_CHANNEL, 'POST', formData) )
      .then(({ error_code }) => {
        if (error_code === 0) {
          this.setState({
            channels: [],
          })
          dispatch(hideModal());
          dispatch(commonFetch(ACTIVITY_RULE_LIST, 'GET', false, `/${activityId}`));
        }
      });
  }
  render() {
    const { items } = this.props;
    const channelStr = this.state.channels.join(';');
    return (
      <div>
        <form method="post" onSubmit={this.addChannelRule}>
          <Alert msg={this.props.errorMsg} />
          <input type="hidden" name="activity_id" value={this.props.activityId} />
          <div className="form-group row">
            <label className="col-sm-2 text-xs-right">渠道:</label>
            <div className="col-sm-6">
              <textarea
                required
                name="channels"
                value={channelStr}
                onChange={this.changeChannel}
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-offset-2 col-sm-10">
              <input type="submit" className="btn btn-info btn-secondary" value="保存" />
            </div>
          </div>
        </form>
        <Card title="添加渠道">
          <table className="table table-bordered m-b-0 table-hover">
            <thead>
              <tr><th>名称</th><th>英文名</th><th>操作</th></tr>
            </thead>
            <tbody>
            {items.map(item => {
              const { alias_name } = item;
              let added = false;
              if (this.state.channels.find((value) => (alias_name === value))) {
                added = true;
              }
              return (<tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.alias_name}</td>
                <td>
                  <button
                    hidden={added}
                    className="btn btn-sm btn-info-outline"
                    data-name={item.alias_name}
                    onClick={this.channelAdd}
                  >添加
                  </button>
                  <button
                    hidden={!added}
                    className="btn btn-sm btn-danger-outline"
                    data-name={item.alias_name}
                    onClick={this.channelDel}
                  >删除
                  </button>
                </td>
              </tr>);
            })}
            </tbody>
          </table>
        </Card>
      </div>
    );
  }
}

ChannelRule.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
  activityId: PropTypes.number.isRequired,
}

ChannelRule.defaultProps = {
  items: [],
  errorMsg: '',
}


export default connect(state => {
  const { omg } = state;
  const { data } = omg[CHANNEL_LIST] || [];
  const errorMsg = omg.errorMsg[ACTIVITY_RULE_ADD_CHANNEL] || '';
  return {
    items: data,
    errorMsg,
  };
})(ChannelRule);
