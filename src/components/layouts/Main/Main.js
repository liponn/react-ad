import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ACCOUNT_PROFILE } from '../../../constants';
import { authentication } from '../../../config';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
    };
  }

  render() {
    if (!this.props.profile.id || this.props.fetching) {
      if (authentication) {
        return false;
      }
    }
    return (
      <div id="main">
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
