import React, { PropTypes, Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.value) {
      this.refs.input.value = this.props.value;
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value && nextProps.value !== this.props.value) {
      this.refs.input.value = nextProps.value;
    }
  }
  render() {
    if (this.props.hidden) {
      return false;
    }
    return (
      <div className="form-group row">
        <label
          className="col-sm-4 form-control-label text-xs-right"
        >{this.props.labelName}:</label>
        <div className="col-sm-6">
          <input
            ref="input"
            placeholder={this.props.placeholder}
            required={this.props.required}
            type={this.props.type}
            name={this.props.name}
            className="form-control"
            defaultValue={this.props.defaultValue}
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
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  required: PropTypes.bool,
  hidden: PropTypes.bool,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  required: false,
  type: 'text',
}

export default Input;
