import React, { PropTypes, Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-sm-6">
        <div className="row">
          <div className="col-sm-4 p-l-0 m-t-1 text-xs-right">{this.props.name}:</div>
          <div className="col-sm-8 p-l-0 m-t-1">{this.props.value}</div>
        </div>
      </div>
    );
  }
}

Text.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
}

Text.defaultProps = {
  value: '',
}

export default Text;
