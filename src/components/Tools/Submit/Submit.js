import React, { PropTypes, Component } from 'react';

class Submit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="form-group row">
        <div className="col-sm-offset-4 col-sm-8 col-md-6">
          <button type="submit" className="btn btn-primary" >{this.props.value}</button>
        </div>
      </div>
    );
  }
}

Submit.propTypes = {
  value: PropTypes.string,
}

Submit.defaultProps = {
  value: '保存',
}

export default Submit;