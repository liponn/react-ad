import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Select, Submit, Alert, Modal,Editor,Checkbox,Radio } from '../../tools';

class ThreadAddModal extends Component {
  constructor(props) {
    super(props);
    this.changUserType = this.changUserType.bind(this);
    this.state ={
      usertype:1
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value && nextProps.value !== this.props.value) {
      this.refs.select.value = nextProps.value;
    }
  }

  changUserType(e){
    const type = e.target.value
    this.setState({
      usertype: +type,
    });
  }

  render() {
    const item = this.props.item || {};
    const types = this.props.types || [];
    const admins = this.props.admins || [];
    const vests = this.props.vests || [];
    let typeFileds = false;
    switch(this.state.usertype){
      case 1:
      typeFileds = [
        <div className="form-group row">
            <label className="col-sm-4 form-control-label text-xs-right">官方号:</label>
            <div className="col-sm-6">
              <select ref="select" name="user_id" className="form-control c-select" defaultValue={item.type_id}>
                {admins.map((admin,index)=>(
                     <option key={index} value={admin.user_id}>{admin.nickname}</option>
                  ))};
              </select>
            </div>
          </div>
      ];
      break;
      case 2:
      typeFileds = [
        <div className="form-group row">
            <label className="col-sm-4 form-control-label text-xs-right">马甲号:</label>
            <div className="col-sm-6">
              <select ref="select" name="user_id" className="form-control c-select" defaultValue={item.type_id}>
                {vests.map((vest,index)=>(
                  <option key={index} value={vest.user_id}>{vest.nickname}</option>
                ))};
              </select>
            </div>
          </div>
      ];
      break;
      default:
    }
    return (
        <Modal key={item.id} title={this.props.update ? '编辑帖子' : '添加帖子'}>
            <form name="formupdate" method="post" onSubmit={this.props.submit}>
                <Alert msg={this.props.errorMsg} />
                {this.props.update ? <input type="hidden" name="id" value={item.id} /> : ""}
                <Input required labelName="标题" name="title" defaultValue={item.title} />
                {
                  this.props.update ? "" :
                    <div className="form-group row">
                      <label className="col-sm-4 form-control-label text-xs-right">用户类型:</label>
                      <div className="col-sm-6">
                        <select ref="select" onChange={this.changUserType} className="form-control c-select" defaultValue={item.type_id}>
                          <option key={1} value={1}>官方号</option>
                          <option key={2} value={2}>马甲号</option>
                        </select>
                      </div>
                    </div>
                }
                {this.props.update ? "" : typeFileds }
                <div className="form-group row">
                  <label className="col-sm-4 form-control-label text-xs-right">所属板块:</label>
                  <div className="col-sm-6">
                    <select ref="select" name="type_id" className="form-control c-select" defaultValue={item.type_id}>
                      {types.map((type,index) => (
                        <option key={index} value={type.id}>{type.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <Editor name="content" defaultValue={item.content} />
                {this.props.update ? "" : <Checkbox className="pull-left" key="isofficial"  name="isofficial" labelName="官方帖" checked={item.isofficial == 1 ? true : false} />}
                <Submit />
            </form>
        </Modal>
    );
  }
}

ThreadAddModal.propTypes = {
  submit: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
  update: PropTypes.bool.isRequired,
}

ThreadAddModal.defaultProps = {
  errorMsg: '',
}

export default ThreadAddModal;
