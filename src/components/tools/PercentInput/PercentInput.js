import React, { PropTypes, Component } from 'react';

class PercentInput extends Component {
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
    return (
      <div className="form-group row">
        <label
          className="col-sm-4 form-control-label text-xs-right"
        >{this.props.labelName}:</label>
        <div className="col-sm-6 input-group">
          <input
            ref="input"
            placeholder={this.props.placeholder}
            required={this.props.required}
            name={this.props.name}
            type={this.props.type}
            className="form-control"
            defaultValue={this.props.defaultValue}
          />
          <div className="input-group-addon">%</div>
        </div>
      </div>
    );
  }
}

PercentInput.propTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
}

PercentInput.defaultProps = {
  required: false,
  type: 'text',
}

export default PercentInput;
