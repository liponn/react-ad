/**
 * Created by Administrator on 2016/6/17.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';

import Alert from '../../tools/Alert';
import Input from '../../tools/Input';
import ModalHeader from '../../tools/ModalHeader';

import { ARTICLE_ADD, ARTICLE_LIST,ARTICLE_TYPE_LIST ,ARTICLE_DETAIL,ARTICLE_PUT} from '../../../constants'

class ArticlePutModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
    const id = this.props.articleId;
    this.props.dispatch(commonFetch(ARTICLE_DETAIL,'GET',false,'/'+id));
  }
  onSubmit(e) {
    e.preventDefault();
    const form =  $('#put-article-form').get(0);
    const formData = new FormData(form);
    const { dispatch } = this.props;
    dispatch(commonFetch(ARTICLE_PUT, 'POST', formData))
      .then(code => {
        if (code === 0) {
          alert("修改成功");
          dispatch(hideModal());
          dispatch(commonFetch(ARTICLE_LIST))
        }
      });
  }

  render() {
    var items = this.props.items;
    var ArticleDetail = this.props.detail;
    console.dir(this.props.detail);
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader title="修改文章" />
          <div className="modal-body">
            <form　id="put-article-form"　method="post"　onSubmit={this.onSubmit}>
              <input hidden name="type_id" value={ArticleDetail.type_id}/>
              <input name="id" hidden value={ArticleDetail.id}/>
              <Input labelName="文章名称" name="title"  value={ArticleDetail.title}/>
              <Input labelName="封面" name="cover" value={ArticleDetail.cover}/>
              <Input labelName="原文地址" name="source" value={ArticleDetail.source}/>
              <div className="form-group row">
                <label className="col-sm-4 form-control-label text-xs-right">发布:</label>
                <div className="col-sm-8 col-md-6">
                  <select name="release" className="form-control c-select" defaultValue={ArticleDetail.release}>
                    <option value="0">发布并保存</option>
                    <option value="1">保存</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 form-control-label text-xs-right">平台:</label>
                <div className="col-sm-8 col-md-6">
                  <select name="platform" className="form-control c-select" defaultValue={ArticleDetail.platform}>
                    <option value="0">全平台</option>
                    <option value="1">PC端</option>
                    <option value="2">移动端</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 form-control-label text-xs-right">内容:</label>
                <div className="col-sm-8 col-md-6">
                  <textarea name="content" className="form-control" defaultValue={ArticleDetail.content} >

                  </textarea>
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
ArticlePutModal.propTypes = {
  dispatch: PropTypes.func.isRequired
};
ArticlePutModal.defaultProps = {
  items: [],
  detail:{}
};
export default connect(state => {
  const { omg } = state;
  const  errorMsg = omg.errorMsg[ARTICLE_ADD] || '';
  const items  = omg[ARTICLE_TYPE_LIST] || [];
  const detail = omg[ARTICLE_DETAIL] || {};
  return {
    errorMsg,
    items,
    detail,
  };
})(ArticlePutModal);
