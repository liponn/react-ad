import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Submit, Alert, Checkbox, Input } from '../../tools';
import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import { ACTIVITY_RULE_ADD_RECHARGE } from '../../../constants';


class RechargeRule extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      errorMsg: '',
    };
  }
  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(commonFetch(ACTIVITY_RULE_ADD_RECHARGE, 'POST', formData))
      .then((json) => {
        if (json.error_code === 0) {
          this.props.dispatch(hideModal());
          this.props.callback();
        } else {
          this.setState({
            errorMsg: json.data.error_msg,
          });
        }
      });
  }
  render() {
    return (
      <form id="activity-add-form" method="post" onSubmit={this.onSubmit}>
        <Alert msg={this.state.errorMsg} />
        <input name="activity_id" type="hidden" value={this.props.activityId} />
        <Input required limit labelName="最小金额" name="min_recharge" />
        <Input required limit labelName="最大金额" name="max_recharge" />
        <Checkbox labelName="首充" name="isfirst" />
        <Submit />
      </form>
    );
  }
}

RechargeRule.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
}

export default connect()(RechargeRule);