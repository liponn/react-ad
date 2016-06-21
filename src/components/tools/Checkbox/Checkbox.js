import React, { PropTypes, Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.checkChange = this.checkChange.bind(this);
    this.state = {
      checked: props.checked,
    };
  }
  checkChange(e) {
    console.log(e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  }
  render() {
    const value = this.state.checked ? this.props.true : this.props.false;
    return (
      <div className="form-group row">
        <div className="col-sm-offset-4 col-sm-6">
          <input type="hidden" name={this.props.name} value={value} />
          <label className="c-input c-checkbox">
            <input type="checkbox" checked={this.state.checked} onChange={this.checkChange} />
            <span className="c-indicator"></span>
            {this.props.labelName}
          </label>
        </div>
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  true: PropTypes.any,
  false: PropTypes.any,
}

Checkbox.defaultProps = {
  checked: false,
  true: 1,
  false: 0,
}
export default Checkbox;