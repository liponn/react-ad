import React, { PropTypes, Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">{this.props.title}{this.props.btn}</div>
        {this.props.children}
      </div>

    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: '',
  btn: false,
}

export default Card;