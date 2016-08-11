import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import { AWARD_ADD, AWARD_LIST } from '../../../constants';
import { Modal, Input, Submit, Alert, Textarea, FileInput } from '../../tools';

class CouponAddModal extends Component {
  constructor(props) {
    super(props);
    this.typeChange = this.typeChange.bind(this);
    this.timeTypeChange = this.timeTypeChange.bind(this);
    this.addAward = this.addAward.bind(this);
    this.state = {
      errorMsg: '',
      awardType: 6,
    };
  }

  addAward(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    this.props.dispatch(commonFetch(AWARD_ADD, 'POST', formData))
      .then(json => {
        if (json.error_code === 0) {
          this.props.dispatch(hideModal());
          const formData2 = new FormData;
          formData2.append('award_type', this.state.awardType);
          this.props.dispatch(commonFetch(AWARD_LIST, 'POST', formData2));
        }else{
          this.setState({
            errorMsg: json.data.error_msg,
          });
        }
      });
  }
  typeChange(e) {
    const value = $(e.target).val();
    this.setState({
      type: +value,
    });
  }
  timeTypeChange(e) {
    const value = $(e.target).val();
    this.setState({
      timeType: +value,
    });
  }
  render() {
    return (
      <Modal title="添加优惠券">
        <form method="post" onSubmit={this.addAward}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="award_type" value={this.state.awardType} />
          <Input labelName="优惠券名称" name="name" />
          <FileInput labelName="优惠券文件" name="file" />
          <Textarea labelName="优惠券介绍" name="desc" />
          <Submit />
        </form>
      </Modal>
    );
  }
}

CouponAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(CouponAddModal);
