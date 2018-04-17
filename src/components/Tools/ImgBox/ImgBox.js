import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImgBox extends Component {
  constructor(props) {
    super(props);
    /*this.getSize = this.getSize.bind(this);
    this.state = {
      width: 0,
      height: 0,
    };*/
  }
 /* getSize() {
    const img = new Image();
    const setState = this.setState.bind(this);
    const state = this.state;
    const src = this.url(this.props.src);
    if (!src) return;
    img.src = src;
    img.onload = function () {
      if (img.width === state.width && img.height === state.height) {
        return;
      }
      setState({
        width: img.width,
        height: img.height,
      });
    };
  }<span className="img-pop-size">{this.state.width} X {this.state.height}</span>*/
  url(path) {
    return path;
  }
  
  render() {
    /*this.getSize();*/
    if (!this.props.src || this.props.src === '') {
      return <span>—</span>;
    }
    return (
      <div className="img-pop" title="点击查看大图" data-url={this.url(this.props.src)} style={{ background: '#f5f5f5 center center no-repeat', backgroundImage: `url("${this.url(this.props.src)}")`, backgroundSize: 'contain' }}>
        <div style={{ paddingTop: '75%' }} >
        </div>
        
      </div>
    );
  }
}

ImgBox.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImgBox;
