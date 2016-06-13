import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch } from '../../../actions/omg';
import { ACTIVITY_ADD } from '../../../constants';
import Link from '../../Tools/Link';
import Input from '../../Tools/Input';
import history from '../../../core/history';

class ActivityAdd extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const form =  $('#activity-add-form').get(0);
    const formData = new FormData(form);
    const { dispatch } = this.props;
    const _this = this;
    const startAtDate = formData.get('start_at_date');
    const startAtTime = formData.get('start_at_time');
    const endAtDate = formData.get('end_at_date'); 
    const endAtTime = formData.get('end_at_time');
    
    if(!formData.has('start_at_nolimit') && formData.has('start_at_date') && formData.has('start_at_time')) {
      formData.append('start_at', `${startAtDate} ${startAtTime}` );
    }
    
    if(!formData.has('end_at_nolimit') && formData.has('end_at_date') && formData.has('end_at_time')) {
      formData.append('end_at', `${endAtDate} ${endAtTime}` );
    }   

    dispatch(commonFetch(ACTIVITY_ADD, 'POST', formData))
      .then(code => {
        if(code === 0) {
          history.push(`/activity/id/${_this.props.insertId}`);
        }
      })
  }
  
  render() {
    return (
      <div className="card">
        <div className="card-header">添加活动</div>
        <div className="card-block">
          <form id="activity-add-form" method="post" onSubmit={this.onSubmit}>
            <input name="group_id" type="hidden" value={this.props.groupId} className="form-control" />
            <div className="form-group row">
              <label className="col-xs-2 col-xs-2 form-control-label text-xs-right" >活动名称:</label>
              <div className="col-xs-2">
                <input name="name" type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xs-2 col-xs-2 form-control-label text-xs-right" >活动别名:</label>
              <div className="col-xs-2">
                <input name="alias_name" type="text" className="form-control" />
              </div>
            </div>
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
              <label className="col-sm-2 form-control-label text-xs-right">活动触发条件:</label>
              <div className="col-sm-4">
                <select name="trigger_type" className="form-control c-select">
                  <option value="0">手动触发</option>
                  <option value="1">首投</option>
                  <option value="2">绑卡</option>
                  <option value="3">投资</option>
                  <option value="4">邀请</option>
                  <option value="5">实名认证</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xs-2 col-xs-2 form-control-label text-xs-right" >触发优先级:</label>
              <div className="col-xs-2">
                <input name="trigger_index" type="number" defaultValue="0" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 text-xs-right">说明:</label>
              <div className="col-sm-6">
                <textarea name="des" className="form-control"></textarea>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-offset-2 col-sm-10">
                <input type="submit" className="btn btn-secondary" value="保存" />
              </div>
            </div>
          </form>          
        </div>
      </div>
    );
  }
}

ActivityAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
} 

ActivityAdd.defaultProps = {
  insertId: 0,
}

export default connect(state => {
  const { omg } = state
  const { insert_id } = omg[ACTIVITY_ADD] || 0;
  return {
    insertId: insert_id,
  }
})(ActivityAdd);