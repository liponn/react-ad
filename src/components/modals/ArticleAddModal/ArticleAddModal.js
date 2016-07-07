import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { commonFetch, fetchAction } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';

import { Input, Editor, AttachmentInput, Alert, Submit } from '../../tools';
import ModalHeader from '../../tools/ModalHeader';

import { ARTICLE_ADD, ARTICLE_LIST, ARTICLE_TYPE_LIST } from '../../../constants'

class ArticleAddModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      errorMsg: '',
    }
  }
  componentDidMount(){
  }
  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { dispatch } = this.props;
    dispatch(fetchAction({
      type: ARTICLE_ADD,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        dispatch(hideModal(true));
        this.props.callback();
      } else {
        this.setState({
          errorMsg: json.data.error_msg,
        });
      }
    });
  }

  render() {
    return (
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <ModalHeader title="添加文章" />
          <div className="modal-body">
            <form id="add-article-form" method="post" onSubmit={this.onSubmit}>
              <Alert msg={this.state.errorMsg} />
              <input hidden name="type_id" defaultValue={this.props.typeId} />
              <Input labelName="标题" name="title" />
              <Editor name="content" />
              <div hidden>
                <AttachmentInput labelName="封面" name="cover" />
              </div>
              <Submit />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
ArticleAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  typeId: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
}
ArticleAddModal.defaultProps = {
  items: [],
}
export default connect(state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[ARTICLE_ADD] || '';
  const items = omg[ARTICLE_TYPE_LIST] || [];
  return {
    errorMsg,
    items,
  };
})(ArticleAddModal);
