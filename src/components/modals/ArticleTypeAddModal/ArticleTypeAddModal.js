/**
 * Created by Administrator on 2016/6/15.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';

import Alert from '../../tools/Alert';
import Input from '../../tools/Input';
import ModalHeader from '../../tools/ModalHeader';

import { ARTICLE_TYPE_ADD, ARTICLE_TYPE_LIST } from '../../../constants'

class ArticleTypeAddModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const form =  $('#add-articleType-form').get(0);
    const formData = new FormData(form);
    console.log(formData);
    const { dispatch } = this.props;
    dispatch(commonFetch(ARTICLE_TYPE_ADD, 'POST', formData))
      .then(code => {
        if (code === 0) {
          alert("添加成功");
          dispatch(hideModal());
          dispatch(commonFetch(ARTICLE_TYPE_LIST))
        }
      });
  }

  render() {
    const Parent_id = this.props.Parent_id;
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader title="添加文章分类" />
          <div className="modal-body">
            <form　id="add-articleType-form"　method="post"　onSubmit={this.onSubmit}>
              <input hidden name="parent_id" value={Parent_id}/>
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
}

export default connect(state => {
  const { omg } = state;
  const  errorMsg = omg.errorMsg[ARTICLE_TYPE_ADD] || '';
  return {
    errorMsg
  };
})(ArticleTypeAddModal);
