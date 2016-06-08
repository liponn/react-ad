import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../../actions/modal';

class Article extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
  }
  componentDidMount() {
  }
  showModal() {
    this.props.dispatch(showModal('fafa'));
  }
  hideModal() {
    this.props.dispatch(hideModal());
  }
  render() {
    return (
      <div>
        <a onClick={this.showModal}>showModal</a>
      </div>
    );
  }
}
Article.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => {
  return {};
})(Article);

