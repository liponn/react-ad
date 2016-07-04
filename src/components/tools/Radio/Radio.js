import React, { PropTypes, Component } from 'react';

class Radio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label className="c-input c-radio">
        <input
          checked={this.props.checked}
          name={this.props.name}
          value={this.props.value}
          type="radio"
          onChange={this.props.onChange}
        />
        <span className="c-indicator"></span>
        {this.props.labelName}
      </label>
    );
  }
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Radio;
