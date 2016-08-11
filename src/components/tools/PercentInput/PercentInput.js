import React, { PropTypes, Component } from 'react';

class PercentInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    if (this.props.value) {
      this.refs.input.value = this.props.value;
      this.refs.hidden.value = this.props.value / 100;
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value && nextProps.value !== this.props.value) {
      this.refs.input.value = nextProps.value;
      this.refs.hidden.value = nextProps.value / 100;
    }
  }
  onChange(e) {
    const value = e.target.value;
    this.refs.hidden.value = value / 100;
  }
  render() {
    return (
      <div className="form-group row">
        <label
          className="col-sm-4 form-control-label text-xs-right"
        >{this.props.labelName}:</label>
        <div className="col-sm-6 input-group">
          <input
            type="hidden"
            ref="hidden"
            name={this.props.name}
            value={this.props.value && this.props.value / 100}
            defaultValue={this.props.defaultValue && this.props.defaultValue / 100}
          />
          <input
            ref="input"
            placeholder={this.props.placeholder}
            required={this.props.required}
            type={this.props.type}
            className="form-control"
            onChange={this.onChange}
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
