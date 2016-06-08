import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../../actions/modal';

class ArticleType extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(showModal('bannerAdd'));
  }
  showModal() {
    this.props.dispatch(showModal('bannerAdd'));
  }
  hideModal() {
    this.props.dispatch(hideModal());
  }
  render() {
    return (
      <div>
        <a onClick={this.showModal}>articleType</a>
      </div>
    );
  }
}
ArticleType.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => {
  return {};
})(ArticleType);