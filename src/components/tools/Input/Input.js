import React, { PropTypes, Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.valueChange = this.valueChange.bind(this);
    this.state = {
      value: props.value,
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: props.value,
    })
  }

  component
  valueChange(e) {
    const value = e.target.value;
    this.setState({
      value,
    })

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
            value={this.state.value}
            onChange={this.valueChange}
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
  value: PropTypes.any,
  required: PropTypes.bool,
}

Input.defaultProps = {
  required: false,
  type: 'text',
}

export default Input;
