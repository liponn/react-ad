import React, { PropTypes, Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-sm-6">
        <div className="row">
            <iframe frameborder="0" width="640" height="498" src={this.props.src} allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

Text.propTypes = {
  src: PropTypes.string.isRequired,
}

Text.defaultProps = {
  src: '',
}

export default Text;
