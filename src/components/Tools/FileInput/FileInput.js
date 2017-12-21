import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.fileChange = this.fileChange.bind(this);
  }
  fileChange(e) {
    const filename = e.target.value.split('\\').pop()
    const s = document.createElement('style');
    s.innerText = `html .file-custom:after{content:'${filename}'}`;
    this.refs.fileInput.appendChild(s);
  }
  render() {
    return (
      <div ref="fileInput" className="form-group row">
        <label className="col-sm-4 form-control-label text-sm-right">文件:</label>
        <div className="col-sm-6">
          <label className="file">
            <input type="file" name="file" id="coupon-file" onChange={this.fileChange} />
            <span className="file-custom"></span>
          </label>
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  required: PropTypes.bool,
}

Input.defaultProps = {
  required: false,
}

export default Input;
