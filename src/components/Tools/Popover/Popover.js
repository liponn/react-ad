import React, { PropTypes, Component } from 'react';

class Popover extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $(this.refs.popover).popover({
      html: true,
      placement: 'top',
    });
  }

  render() {
    return (
      <button
        ref="popover"
        title={this.props.title}
        data-content={`${this.props.content} `}
        className="btn btn-sm btn-info-outline"
      >{this.props.name}</button>
    );
  }
}

Popover.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

Popover.defaultProps = {
  name: '查看',
}

export default Popover;
