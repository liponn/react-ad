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
        data-content={this.props.content}
        className="btn btn-sm btn-info-outline"
      >查看</button>
    );
  }
}

Popover.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

Popover.defaultProps = {
}

export default Popover;
