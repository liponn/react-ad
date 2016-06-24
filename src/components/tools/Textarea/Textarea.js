import React, { PropTypes, Component } from 'react';

class Textarea extends Component {
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
        <label className="col-sm-4 form-control-label text-xs-right">内容:</label>
        <div className="col-sm-8 col-md-6">
          <textarea
            name={this.props.name}
            className="form-control"
            value={this.state.value}
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
  value: PropTypes.any,
  required: PropTypes.bool,
}

Textarea.defaultProps = {
  required: false,
  type:"text"
}

export default Textarea;
