import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { commonFetch,fetchAction} from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';

import Alert from '../../tools/Alert';
import Input from '../../tools/Input';
import ModalHeader from '../../tools/ModalHeader';

import { ARTICLE_ADD, ARTICLE_LIST,ARTICLE_TYPE_LIST } from '../../../constants'

class ArticleAddModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
  }
  onSubmit(e) {
    e.preventDefault();
    const form =  $('#add-article-form').get(0);
    console.log(form);
    const formData = new FormData(form);
    console.log(formData);
    const { dispatch } = this.props;
    dispatch(commonFetch(ARTICLE_ADD, 'POST', formData))
      .then(code => {
        //if (code === 0) {
          //alert("添加成功");
          dispatch(hideModal());
          const type_id = this.props.type_id;
          dispatch(fetchAction({type:ARTICLE_LIST,method:'GET',suffix: '/'+type_id+'/10',key:'articleList'}));
        //}
      });
  }

  render() {
    var items = this.props.items;
    var type_id = this.props.type_id;
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader title="添加文章" />
          <div className="modal-body">
            <form　id="add-article-form"　method="post"　onSubmit={this.onSubmit}>
                <input hidden name="type_id" value={type_id}/>
                <Input labelName="文章名称" name="title"  />
                <Input labelName="封面" name="cover" />
                <Input labelName="原文地址" name="source"/>
                <div className="form-group row">
                  <label className="col-sm-4 form-control-label text-xs-right">发布:</label>
                  <div className="col-sm-8 col-md-6">
                    <select name="release" className="form-control c-select">
                      <option value="0">发布并保存</option>
                      <option value="1">保存</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4 form-control-label text-xs-right">平台:</label>
                  <div className="col-sm-8 col-md-6">
                    <select name="platform" className="form-control c-select">
                      <option value="0">全平台</option>
                      <option value="1">PC端</option>
                      <option value="2">移动端</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4 form-control-label text-xs-right">内容:</label>
                  <div className="col-sm-8 col-md-6">
                    <textarea name="content" className="form-control"/>
                  </div>
                </div>

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
ArticleAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
}
ArticleAddModal.defaultProps = {
  items: [],
}
export default connect(state => {
  const { omg } = state;
  const  errorMsg = omg.errorMsg[ARTICLE_ADD] || '';
  const items  = omg[ARTICLE_TYPE_LIST] || [];
  return {
    errorMsg,
    items
  };
})(ArticleAddModal);
