import React, { PropTypes, Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value && nextProps.value !== this.props.value) {
      this.refs.select.value = nextProps.value;
    }
  }
  render() {
    const { options, onChange } = this.props;
    const keys = Object.keys(options);
    return (
      <div className="form-group row">
        <label
          className="col-sm-4 form-control-label text-xs-right"
        >{this.props.labelName}:</label>
        <div className="col-sm-6">
          <select ref="select" onChange={onChange} name={this.props.name} className="form-control c-select" defaultValue={this.props.defaultValue}>
            {keys.map((key) => (
              <option key={key} value={key}>{options[key]}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

Select.propTypes = {
  options: PropTypes.object.isRequired,
  labelName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.any,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
}

Select.defaultProps = {
  options: [],
  onChange() {},
}

export default Select;
