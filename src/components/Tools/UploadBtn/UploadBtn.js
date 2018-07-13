import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';

import { ATTACHMENT_ADD } from '../../../constants/';

class UploadBtn extends Component {
  constructor(props) {
    super(props);
    this.imgUpload = this.imgUpload.bind(this);
  }


  imgUpload() {
    const uploadForm = this.refs.imgUploadForm;
    const formData = new FormData(uploadForm);
    this.props.dispatch(fetchAction({
      type: ATTACHMENT_ADD,
      method: 'POST',
      formData,
    })).then(json => (this.props.callback(json)));
  }
  
  render() {
    return (
      <form className="btn btn-sm btn-info btn-file" ref="imgUploadForm" method="post" >
        <input type="hidden" name="position" value="test" />
        <span>{this.props.labelName}</span>
        <input type="file" name="img_path" onChange={this.imgUpload} />
      </form>
    );
  }
}

UploadBtn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  labelName: PropTypes.string,
  callback: PropTypes.func.isRequired,
}

UploadBtn.defaultProps = {
  labelName: '上传',
}

export default connect()(UploadBtn);