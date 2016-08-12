import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Input, Editor, AttachmentInput, Alert, Submit, Modal } from '../../tools';
import { ARTICLE_ADD} from '../../../constants'

class ArticleAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: '',
    };
  }
  render() {
    return (
      <Modal className="modal-lg" title={this.props.update ? '编辑文章' : '添加文章'}>
        <form id="add-article-form" method="post" onSubmit={this.props.submit}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="id" value={this.props.item.id} />
          <input type="hidden" name="type_id" defaultValue={this.props.typeId} />
          <Input labelName="标题" name="title" defaultValue={this.props.item.title} />
          <div>
            <AttachmentInput labelName="封面" defaultValue={this.props.item.cover} position={`article_${this.props.typeId}`} name="cover" />
          </div>

          <Editor name="content" defaultValue={this.props.item.title} />

          <Submit />
        </form>
      </Modal>
    );
  }
}
ArticleAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  typeId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
  update: PropTypes.bool,
  item: PropTypes.object,
}
ArticleAddModal.defaultProps = {
  item: {},
}
export default connect(state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[ARTICLE_ADD] || '';
  return {
    errorMsg,
  };
})(ArticleAddModal);