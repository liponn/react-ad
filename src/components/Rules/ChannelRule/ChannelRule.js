import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Submit, Card } from '../../tools';
import { commonFetch } from '../../../actions/omg';
import { CHANNEL_LIST } from '../../../constants';

class ChannelRule extends Component {
  constructor(props) {
    super(props);
    this.channelAdd = this.channelAdd.bind(this);
    this.channelDel = this.channelDel.bind(this);
    this.changeChannel = this.changeChannel.bind(this);
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
  render() {
    const { items } = this.props;
    const channelStr = this.state.channels.join(';');
    return (
      <div>
        <form method="post" onSubmit={this.props.submit}>
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
          <Submit />
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
  activityId: PropTypes.number.isRequired,
}

ChannelRule.defaultProps = {
  items: [],
}


export default connect(state => {
  const { omg } = state;
  const { data } = omg[CHANNEL_LIST] || [];
  return {
    items: data,
  };
})(ChannelRule);
