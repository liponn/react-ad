import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { commonFetch,fetchAction } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import {Input, Alert, ModalHeader} from '../../tools'

import {ARTICLE_TYPE_INFO,ARTICLE_TYPE_PUT,ARTICLE_TYPE_LIST} from '../../../constants'

class ArticleTypePutModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.getTypeInfo = this.getTypeInfo.bind(this);
    this.state = {
      errorMsg: '',
    };
  }

  componentDidMount() {
    this.getTypeInfo(this.props.id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.getTypeInfo(nextProps.id);
    }
  }
  getTypeInfo(id) {
    this.props.dispatch(fetchAction({
      type: ARTICLE_TYPE_INFO,
      method: 'GET',
      suffix: `/${id}`,
      key: id,
    }));
  }
  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { dispatch } = this.props;
    dispatch(commonFetch(ARTICLE_TYPE_PUT, 'POST', formData))
      .then(json => {
        if (json.error_code === 0) {
          dispatch(hideModal());
          this.props.callback();
        } else {
          this.setState({
            errorMsg: json.data.error_msg,
          });
        }
      });
  }
  render() {
    const typeInfo = this.props.typeInfoList[this.props.id] || {};
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader title="修改文章分类" />
          <div className="modal-body">
            <Alert msg={this.state.errorMsg} />
            <form method="post" onSubmit={this.onSubmit}>
              <input hidden name="id" value={this.props.id} />
              <Input labelName="分类名称" name="name" value={typeInfo.name} />
              <Input labelName="别名" name="alias_name" value={typeInfo.alias_name} />
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
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default connect(state => {
  const { omg } = state;
  const typeInfoList = omg[ARTICLE_TYPE_INFO] || {};
  return {
    typeInfoList,
  };
})(ArticleTypePutModal);
