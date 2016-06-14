import React, { PropTypes, Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onChange = false } = this.props;
    return (
      <div className="form-group row">
        <label
          className="col-sm-4 form-control-label text-xs-right"
        >{this.props.labelName}:</label>
        <div className="col-sm-8 col-md-6">
          <select onChange={onChange} name={this.props.name} className="form-control c-select">
            {this.props.options.map((option) => (
              <option key={option.value} value={option.value}>{option.name}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  labelName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.any,
}

Select.defaultProps = {
  options: [],
}

export default Select;
