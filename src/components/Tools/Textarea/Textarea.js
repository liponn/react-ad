import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.valueChange = this.valueChange.bind(this);
    this.state = {
      value: props.value,
    }
  }
  componentWillReceiveProps(props) {
    if (typeof props.value !== 'undefined') {
      this.setState({
        value: props.value,
      });
    }
  }

  valueChange(e) {
    const value = e.target.value;
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div className="form-group row">
        <label className="col-sm-4 form-control-label text-xs-right">{this.props.labelName}:</label>
        <div className="col-sm-8 col-md-6">
          <textarea
            name={this.props.name}
            className="form-control"
            value={this.state.value}
            defaultValue={this.props.defaultValue}
            onChange={this.valueChange}>
          </textarea>
        </div>
      </div>
    );
  }
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  required: PropTypes.bool,
}

Textarea.defaultProps = {
  required: false,
}

export default Textarea;
