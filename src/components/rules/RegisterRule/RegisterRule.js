import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { DateTimeInput, Submit, Alert } from '../../tools';
import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import { ACTIVITY_RULE_ADD_REGISTER, ACTIVITY_RULE_LIST } from '../../../constants';


class RegisterRule extends Component {
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
    this.props.dispatch(commonFetch(ACTIVITY_RULE_ADD_REGISTER, 'POST', formData))
      .then((json) => {
        if (json.error_code === 0) {
          this.props.dispatch(hideModal());
          this.props.dispatch(commonFetch(ACTIVITY_RULE_LIST, 'GET', false, `/${this.props.activityId}`));
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
        <DateTimeInput required limit labelName="开始时间" name="min_time" />
        <DateTimeInput required limit labelName="结束时间" name="max_time" />
        <Submit />
      </form>
    );
  }
}

RegisterRule.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
}

export default connect()(RegisterRule);