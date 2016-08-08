import React, { PropTypes, Component } from 'react';
import TinyMce from 'react-tinymce';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.valueChange = this.valueChange.bind(this);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: props.value,
    });
  }

  valueChange(e) {
    const value = e.target.getContent();
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div className="form-group row">
        <div className="col-sm-12">
          <input type="hidden" name={this.props.name} value={this.state.value || this.props.defaultValue} />
          <TinyMce
            config={{
              height: 500,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code',
              ],
              toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
              language: 'zh_CN',
            }}
            content={this.props.defaultValue}
            onChange={this.valueChange}
          />
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  defaultValue: PropTypes.any,
}

Editor.defaultProps = {
  required: false,
}

export default Editor;
