import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from '../../../constants';

class StatusBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const action = this.props.action || {};
    return (
      <div id="status-bar" hidden={!action || action.status === FETCH_SUCCESS}>
        <span hidden={action.status !== FETCH_REQUEST}>请求中:{action.type}</span>
        <span className="bg-danger" hidden={action.status !== FETCH_ERROR}>[{action.type}]:{action.msg}</span>
      </div>
    );
  }
}

StatusBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  logs: PropTypes.array.isRequired,
  action: PropTypes.object.isRequired,
}

StatusBar.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const logs = omg.logs || [];
  const action = omg.lastAction || {};
  return {
    logs,
    action,
  };
})(StatusBar);

