import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ACCOUNT_PROFILE } from '../../../constants';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
    };
  }

  render() {
    return (
      <div id="main" hidden={!this.props.profile.id || this.props.fetching} >
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.any,
  profile: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
}

Main.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const profile = omg[ACCOUNT_PROFILE] || {};
  const fetchingList = omg.isFetching || {};
  const fetching = fetchingList[ACCOUNT_PROFILE] || false;
  return {
    profile,
    fetching,
  };
})(Main);
