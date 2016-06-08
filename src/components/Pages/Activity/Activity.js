import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch } from '../../../actions/omg';
import { ACTIVITY_ADD } from '../../../constants';
import { Link, Input }  from '../../Tools';

class Activity extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.dispatch(commonFetch());
  }
  
  render() {
    return (
      <div>{this.props.id}
        
      </div>
    );
  }
}

export default connect()(Activity);