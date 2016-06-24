/**
 * Created by Administrator on 2016/6/17.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { commonFetch,fetchAction } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import { getConfig } from '../../../config/omg';
import Alert from '../../tools/Alert';
import Input from '../../tools/Input';
import ModalHeader from '../../tools/ModalHeader';

import {ARTICLE_TYPE_INFO,ARTICLE_TYPE_PUT,ARTICLE_TYPE_LIST} from '../../../constants'

class ArticleTypePutModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    const id = this.props.TypeId;
    this.props.dispatch(fetchAction({type:ARTICLE_TYPE_INFO,method:'GET',suffix:'/'+id,key:"typeInfo"}))
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.TypeId!=this.props.TypeId){
      this.props.dispatch(fetchAction({type:ARTICLE_TYPE_INFO,method:'GET',suffix:'/'+nextProps.TypeId,key:"typeInfo"}));
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const form =  $('#put-article-type-form').get(0);
    const formData = new FormData(form);
    const { dispatch } = this.props;
    dispatch(commonFetch(ARTICLE_TYPE_PUT, 'POST', formData))
      .then(code => {
        //if (code === 0) {
          //alert("修改成功");
          dispatch(hideModal());
          dispatch(fetchAction({type:ARTICLE_TYPE_LIST,method:'GET',suffix:'/0',key:"articleType"}));
        //}
      });
  }
  render() {
    var typeInfo = this.props.typeInfos["typeInfo"];
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader title="修改文章分类" />
          <div className="modal-body">
            <form　id="put-article-type-form"　method="post"　onSubmit={this.onSubmit}>
              <input hidden  name="id" value={typeInfo.id}/>
              <input hidden  name="parent_id" value={typeInfo.parent_id}/>
              <Input labelName="分类名称" name="name"  value={typeInfo.name}/>
              <Input labelName="别名" name="alias_name" value={typeInfo.alias_name}/>
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
ArticleTypePutModal.propTypes = {
  dispatch: PropTypes.func.isRequired
};
ArticleTypePutModal.defaultProps = {
  typeInfos: {},
};
export default connect(state => {
  const { omg } = state;
  const  errorMsg = omg.errorMsg[ARTICLE_TYPE_PUT] || '';
  const typeInfos = omg[ARTICLE_TYPE_INFO] || {};
  return {
    errorMsg,
    typeInfos,
  };
})(ArticleTypePutModal);
