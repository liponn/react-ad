
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { commonFetch, fetchAction } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';

import {Alert, Input, ModalHeader} from '../../tools';

import { ARTICLE_TYPE_ADD, ARTICLE_TYPE_LIST } from '../../../constants'

class ArticleTypeAddModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      errorMsg: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { dispatch } = this.props;
    dispatch(commonFetch(ARTICLE_TYPE_ADD, 'POST', formData))
      .then(json => {
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
    const parentId = this.props.parentId;
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader title="添加文章分类" />
          <div className="modal-body">
            <Alert msg={this.state.errorMsg} />
            <form id="add-articleType-form" method="post" onSubmit={this.onSubmit}>
              <input hidden name="parent_id" value={parentId}/>
              <Input labelName="分类名称" name="name"  />
              <Input labelName="别名" name="alias_name" />
              <div className="form-group row">
                <div className="col-sm-offset-4 col-sm-8">
                  <button type="submit" className="btn btn-primary" >保存</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
ArticleTypeAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  parentId: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
}

export default connect()(ArticleTypeAddModal);
