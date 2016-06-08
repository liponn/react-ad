import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { articleTypeAddFetch } from '../../../actions/article';

class BannerAddModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const form =  $('#add-article-type-form').get(0);
    const formData = new FormData(form);
    this.props.dispatch(articleTypeAddFetch(formData));
  }
  render() {
    return (
      <div className="modal-dialog">
        <div className="modal-content modal-sm">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
            >
              <span>&times;</span>
            </button>
            <h4 className="modal-title">添加渠道</h4>
          </div>
          <div className="modal-body">
            <form
              id="add-article-type-form"
              method="post"
              onSubmit={this.onSubmit}
            >
              <div className="row" role="alert">
                <div className="col-sm-12">
                </div>
              </div>
              <div className="form-group row">
                <input type="hidden" name="parent_id" value="0" />
                <label
                  required
                  className="col-sm-4 form-control-label text-xs-right"
                >中文名称:</label>
                <div className="col-sm-8">
                  <input type="text" name="name" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 form-control-label text-xs-right">英文别名:</label>
                <div className="col-sm-8">
                  <input type="text" name="alias_name" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 form-control-label text-xs-right">优先级:</label>
                <div className="col-sm-8">
                  <input type="number" defaultValue="0" name="sort" className="form-control" />
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
BannerAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => ({}))(BannerAddModal);

