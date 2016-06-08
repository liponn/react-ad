import React, { PropTypes, Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="form-group row">
        <label
          className="col-sm-4 form-control-label text-xs-right"
        >{this.props.labelName}:</label>
        <div className="col-sm-8 col-md-6">
          <input
            required={this.props.required}
            type={this.props.type}
            name={this.props.name}
            className="form-control"
          />
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
}

Input.defaultProps = {
  required: false,
  type: 'text',
}

export default Input;
