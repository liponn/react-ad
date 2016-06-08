import React, { PropTypes, Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const msg = this.props.msg;
    let hidden = false;
    if(typeof msg !== 'string' || msg === ''){
      hidden = true;
    }
    return (
      <div hidden={hidden} className="row" role="alert">
        <div className="col-sm-12">
          <div className="alert alert-danger">
            {msg}
          </div>
        </div>
      </div>
    );
  }
}

Alert.propTypes = {
  msg: PropTypes.string,
}

Alert.defaultProps = {
  msg: '',
}

export default Alert;