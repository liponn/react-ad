import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.props.dispatch(commonFetch(ACTIVITY_GROUP_ADD, 'POST', formData))
      .then(({ error_code }) => {
        if (error_code === 0) {
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
              <input type="hidden" name="type_id" value={this.props.typeId} />
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
  callback: PropTypes.func.isRequired,
  typeId: PropTypes.number.isRequired,
}

export default connect()(ActivityAddModal);
