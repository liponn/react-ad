import React, { PropTypes, Component } from 'react';

import { connect } from 'react-redux';
import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import { ACTIVITY_GROUP_ADD, ACTIVITY_GROUP_LIST } from '../../../constants'

class RegisterRule extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <form id="activity-add-form" method="post" onSubmit={this.onSubmit}>
        <input name="group_id" type="hidden" value={this.props.groupId} className="form-control" />
        <div className="form-group row">
          <label className="col-sm-2 form-control-label text-xs-right">开始时间:</label>
          <div className="col-sm-3">
            <input type="text" className="form-control datepicker" name="start_at_date"  placeholder="YYYY-MM-DD" />
          </div>
          <div className="col-sm-3">
            <input type="text"  className="form-control timepicker" name="start_at_time" placeholder="hh:mm:ss" />
          </div>
          <div className="col-sm-4">
            <label className="form-control-label"><input type="checkbox" name="start_at_nolimit" />不限制</label>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 form-control-label text-xs-right">结束时间:</label>
          <div className="col-sm-3">
            <input type="text" className="form-control datepicker" name="end_at_date" placeholder="YYYY-MM-DD" />
          </div>
          <div className="col-sm-3">
            <input type="text" className="form-control timepicker" name="end_at_time" placeholder="hh:mm:ss" />
          </div>
          <div className="col-sm-4">
            <label className="form-control-label"><input type="checkbox" name="end_at_nolimit" />不限制</label>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-offset-2 col-sm-10">
            <input type="submit" className="btn btn-secondary" value="保存" />
          </div>
        </div>
      </form>
    );
  }    
}

export default connect()(RegisterRule);