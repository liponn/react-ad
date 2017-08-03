import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import TinyMce from 'react-tinymce';
import { fetchAction } from '../../../actions/omg';
import { ATTACHMENT_ADD } from '../../../constants/';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.valueChange = this.valueChange.bind(this);
    this.imgUpload = this.imgUpload.bind(this);
    this.imgUploadClick = this.imgUploadClick.bind(this);
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
    this.refs.hiddeninput.value = value;
  }
  imgUploadClick(fieldName) {
    const imgUploadForm = this.refs.imgUploadForm;
    this.fieldName = fieldName;
    $(imgUploadForm).find('input:file').click();
  }
  imgUpload() {
    const uploadForm = this.refs.imgUploadForm;
    const formData = new FormData(uploadForm);
    this.props.dispatch(fetchAction({
      type: ATTACHMENT_ADD,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        if (this.fieldName) {
          $(`#${this.fieldName}`).val(json.data.url);
        }
      } else {
        alert(json.data.error_msg);
      }
    });
  }

  render() {
    const imgUploadClick = this.imgUploadClick;
    console.log('aa');
    return (
      <div className="form-group row">
        <div className="col-sm-12">
          <TinyMce
            config={{
              height: 500,
              plugins: [
                'advlist autolink lists link image charmap preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code textcolor',
              ],
              toolbar: 'forecolor backcolor | fontsizeselect | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
              language: 'zh_CN',
              fontsize_formats: '12px 14px 16px 18px 24px 36px',
              image_dimensions: false,
              file_browser_callback_types: 'image',
              file_browser_callback: (fieldName) => {
                imgUploadClick(fieldName);
              },
            }}
            content={this.props.defaultValue}
            onChange={this.valueChange}
          />
          <input type="hidden" name={this.props.name} ref="hiddeninput" defaultValue={this.props.defaultValue} />
          <form hidden className="btn btn-sm btn-info btn-file" ref="imgUploadForm" method="post" >
            <input type="hidden" name="position" value={this.props.position || 'default'} />
            <input type="file" name="img_path" onChange={this.imgUpload} />
          </form>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  value: PropTypes.any,
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  defaultValue: PropTypes.any,
  position: PropTypes.string,
}

Editor.defaultProps = {
  required: false,
}

export default connect()(Editor);
