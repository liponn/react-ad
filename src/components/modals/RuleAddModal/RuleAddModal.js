import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import ModalHeader from '../../tools/ModalHeader';
import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import { ACTIVITY_GROUP_ADD, ACTIVITY_GROUP_LIST } from '../../../constants'

import ChannelRule from '../../Rules/ChannelRule';

class RuleAddModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.selectRule = this.selectRule.bind(this);
    this.state = {
      currentRule: ' ',
    };
  }
  onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { dispatch } = this.props;
    dispatch(commonFetch(ACTIVITY_GROUP_ADD, 'POST', formData))
      .then(code => {
        if (code === 0) {
          dispatch(hideModal());
          dispatch(commonFetch(ACTIVITY_GROUP_LIST))
        }
      });
  }
  selectRule(e) {
    const ruleName = e.target.value;
    switch (ruleName) {
      case 'channel':
        this.setState({
          currentRule: <ChannelRule activityId={this.props.activityId} />,
        })
        break;
      default:
        this.setState({
          currentRule: ruleName,
        });
    }
  }

  render() {
    console.log(this.props.activityId);
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader title="添加规则" />
          <div className="modal-body">
            <div>
              <label className="c-input c-radio">
                <input name="rule-add" value="register" type="radio" onClick={this.selectRule} />
                <span className="c-indicator"></span>
                &nbsp;注册时间
              </label>&nbsp;&nbsp;
              <label className="c-input c-radio">
                <input name="rule-add" value="channel" type="radio" onClick={this.selectRule} />
                <span className="c-indicator"></span>
                &nbsp;渠道
              </label>&nbsp;&nbsp;
              <label className="c-input c-radio">
                <input name="rule-add" value="invite" type="radio" onClick={this.selectRule} />
                <span className="c-indicator"></span>
                &nbsp;邀请
              </label>&nbsp;&nbsp;
              <label className="c-input c-radio">
                <input name="rule-add" value="firstcast" type="radio" onClick={this.selectRule} />
                <span className="c-indicator"></span>
                &nbsp;首投
              </label>&nbsp;&nbsp;
              <label className="c-input c-radio">
                <input name="rule-add" value="cast" type="radio" onClick={this.selectRule} />
                <span className="c-indicator"></span>
                &nbsp;投资
              </label>&nbsp;&nbsp;
              <hr />
              {this.state.currentRule}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
RuleAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
}

export default connect(state => {
  const { omg } = state;
  const  errorMsg = omg.errorMsg[ACTIVITY_GROUP_ADD] || '';
  return {
    errorMsg
  };
})(RuleAddModal);
