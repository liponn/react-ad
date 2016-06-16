import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch } from '../../../actions/omg';
import { CHANNEL_LIST } from '../../../constants';


class Channel extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addChannel = this.addChannel.bind(this);
    this.delChannel = this.delChannel.bind(this)
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(commonFetch(CHANNEL_LIST));
  }
  handleChange(e) {
    const target = e.target;
    const state = { errorMsg: '' };
    state[target.name] = target.value;
    this.setState(state);
  }
  addChannel() {
    const { dispatch } = this.props;
    if (this.state.name === '') {
      this.setState({ errorMsg: '名称不能为空。' });
      return;
    }
    if (this.state.alias_name === '') {
      this.setState({ errorMsg: '别名不能为空。' });
      return;
    }
    $.post('http://api-omg.wanglibao.com/channel/add', $('#add-channel-form').serialize(), function(res){
      if (res.error_code !== 0) {
        this.setState({ errorMsg: res.data.error_msg });
      } else {
        $('#channel-add-modal').modal('hide');
        dispatch(commonFetch(CHANNEL_LIST));
      }
    }.bind(this));
  }
  delChannel(e) {
    const { dispatch } = this.props;
    const id = $(e.target).data('id');
    $.post('http://api-omg.wanglibao.com/channel/del',{id: id}, function(res){
      if (res.error_code !== 0) {
        this.setState({ errorMsg: res.data.error_msg });
      } else {
        dispatch(commonFetch(CHANNEL_LIST));
      } 
    }.bind(this));
  }

  render() {
    const { items, isFetching } = this.props;
    let loadClass = 'text-info fa fa-refresh fa-spin fa-fw';
    loadClass += isFetching ? '' : ' invisible';
    let errorClass = 'alert alert-danger';
    errorClass += this.state.errorMsg === '' ? ' invisible' : '';

    return (
      <div>
        <div className="card">
          <div className="card-header clearfix">渠道
            <i className={loadClass}></i>
            <button
              type="button"
              className="btn btn-sm  btn-info pull-right"
              data-toggle="modal"
              data-target="#channel-add-modal"
            >
              <i className="fa fa-plus" data-toggle="modal" data-target="#cahnnel-add-modal"> 添加</i>
            </button>
          </div>
          <table className="table table-bordered m-b-0 table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>名称</th>
                <th>前缀</th>
                <th>英文名称</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.pre}</td>
                <td>{item.alias_name}</td>
                <td>
                  <button className="btn btn-danger-outline btn-sm" data-id={item.id} onClick={this.delChannel}>删除</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div className="modal fade" id="channel-add-modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
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
                  id="add-channel-form"
                  onSubmit={this.addChannel}
                >
                  <div className="row" role="alert">
                    <div className="col-sm-12">
                      <div hidden={this.state.errorMsg === ''} className={errorClass}>
                        {this.state.errorMsg}
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      required
                      className="col-sm-4 form-control-label text-xs-right"
                    >中文名称:</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        required
                        name="name"
                        defaultValue={this.state.name}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-4 form-control-label text-xs-right">英文别名:</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        required
                        name="alias_name"
                        defaultValue={this.state.alias_name}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-4 form-control-label text-xs-right">前缀:</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        name="pre"
                        defaultValue={this.state.pre}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="默认为空"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">取消</button>
                <button type="button" className="btn btn-primary" onClick={this.addChannel}>保存</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Channel.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

Channel.defaultProps = {
  items: []
}


export default connect(state => {
  const { omg } = state;
  const data = omg[CHANNEL_LIST] || [];
  return {
    items : data 
  };
})(Channel);

