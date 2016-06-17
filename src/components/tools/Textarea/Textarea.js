import React, { PropTypes, Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="form-group row">
        <label className="col-sm-4 text-xs-right">{this.props.labelName}:</label>
        <div className="col-sm-6">
          <textarea
            name={this.props.name}
            required={this.props.required}
            className="form-control"
          ></textarea>
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
