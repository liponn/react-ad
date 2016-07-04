import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';

import Alert from '../../tools/Alert';
import Input from '../../tools/Input';
import ModalHeader from '../../tools/ModalHeader';

import { ACTIVITY_GROUP_ADD, ACTIVITY_GROUP_LIST } from '../../../constants'

class ActivityAddModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { dispatch } = this.props;
    dispatch(commonFetch(ACTIVITY_GROUP_ADD, 'POST', formData))
      .then(({ error_code }) => {
        if (error_code === 0) {
          dispatch(hideModal());
          dispatch(commonFetch(ACTIVITY_GROUP_LIST))
        } else {
          this.setState({
            errorMsg: json.data.error_msg,
          });
        }
      });
  }

  render() {
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader title="添加活动" />
          <div className="modal-body">
            <form
              id="add-activity-form"
              method="post"
              onSubmit={this.onSubmit}
            >
              <Alert msg={this.props.errorMsg} />
              <Input labelName="活动名称" name="name"  />

              <div className="form-group row">
                <input type="hidden" name="parent_id" value="0" />
                <label
                  className="col-sm-4 form-control-label text-xs-right"
                >活动类型:</label>
                <div className="col-sm-8 col-md-6">
                  <select name="type_id" className="form-control c-select">
                    <option value="0">常规活动</option>
                    <option value="1">节日活动</option>
                    <option value="2">加急活动</option>
                    <option value="3">渠道活动</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 form-control-label text-xs-right">说明:</label>
                <div className="col-sm-8 col-md-6">
                  <textarea name="des" className="form-control"></textarea>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-offset-4 col-sm-8">
                  <button type="submit" className="btn btn-primary" >保存</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
ActivityAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => {
  const { omg } = state;
  const  errorMsg = omg.errorMsg[ACTIVITY_GROUP_ADD] || '';
  return {
    errorMsg
  };
})(ActivityAddModal);
