import React, { PropTypes, Component } from 'react';

class ImgBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="img-pop" title="点击查看大图" data-url={this.props.src} style={{ outline: '1px solid #f5f5f5',  background: '#f5f5f5 center center no-repeat', backgroundImage: `url("${this.props.src}")`, backgroundSize: 'contain' }}>
        <div style={{ paddingTop: '100%' }} ></div>
      </div>
    );
  }
}

ImgBox.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImgBox;
