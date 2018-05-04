import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon} from 'antd';
import { getApi } from '../../../config/omg';
import { BBS_THREAD_IMG_ADD } from '../../../constants';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { Input, Select, Submit, Alert, Modal,Editor,Checkbox,Radio,Text } from '../../tools';

class ThreadAddModal extends Component {
  constructor(props) {
    super(props);
    this.changUserType = this.changUserType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.initUpdate = this.initUpdate.bind(this);
    this.state ={
      usertype:1,
      fileList:[],
      imgData:[]
    }
  }
  componentDidMount() {
    if(this.props.update && this.props.item.cover != null){
      this.initUpdate();
    }
  }
  initUpdate(){
    const imgurl = [];
    let imgItem = {};
    let imgdata = [];
    const coverObj = new String(this.props.item.cover);
    const regx = /\/\d+\.[a-zA-z]+/
    var arr = coverObj.match(regx);
    arr.map((item)=>{
        imgItem = {
            uid: -1,
            name:'xxx.png',
            status: 'done',
            url: 'http://wlbyunying.oss-cn-beijing.aliyuncs.com/wlbimage'+item,
        }
        imgurl.push(imgItem);
        imgdata.push('http://wlbyunying.oss-cn-beijing.aliyuncs.com/wlbimage'+item);
    });

    this.setState({
      fileList:imgurl,
      imgData:imgdata
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value && nextProps.value !== this.props.value) {
      this.refs.select.value = nextProps.value;
    }
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
    });
  }

  handleChange = ({ file,fileList }) => {
    const imgdata = this.state.imgData;
    if(file.status == 'done'){
      if(file.response != undefined){
        if(file.response.data != null){
          imgdata.push(file.response.data.picUrl);
        }
      }
    }else if(file.status == 'removed'){
      if(file.response != undefined){
        imgdata.splice(imgdata.indexOf(file.response.data.picUrl),1);
      }else{
        imgdata.splice(imgdata.indexOf(file.url),1);
       
      }
      
    }
    
    this.setState({ fileList });
  }

  changUserType(e){
    const type = e.target.value
    this.setState({
      usertype: +type,
    });
  }

  render() {
    const requestUri_add = getApi('BBS_THREAD_IMG_ADD');
    const { fileList,previewImage } = this.state;
    const item = this.props.item || {};
    const types = this.props.types || [];
    const admins = this.props.admins || [];
    const vests = this.props.vests || [];
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传</div>
      </div>
    );
    let typeFileds = false;
    switch(this.state.usertype){
      case 1:
      typeFileds = [
        <div className="form-group row">
            <label className="col-sm-4 form-control-label text-xs-right">官方号:</label>
            <div className="col-sm-6">
              <select ref="select" name="user_id" className="form-control c-select" defaultValue={admins[0].user_id}>
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
              <select ref="select" name="user_id" className="form-control c-select" defaultValue={vests[0].user_id}>
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
                <input type="hidden" name="imgdata" value={this.state.imgData} />
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
                <div className="form-group row">
                  <label className="col-sm-4 form-control-label text-xs-right">图片:</label>
                  <div className="col-sm-8">
                   <Upload name='img'
                      action={requestUri_add}
                      listType="picture-card"
                      onPreview={this.handlePreview}
                      onChange={this.handleChange}
                      fileList={fileList}
                     >
          {fileList.length >= 6 ? null : uploadButton}
        </Upload>
                  </div>
                </div>
                <Input labelName="视频代码" name="video_code" placeholder="腾讯视频分享中通用代码里src地址" defaultValue={item.video_code} />
                <div className="form-group row">
                  <label className="col-sm-4 form-control-label text-xs-right">帖子内容:</label>
                  <div className="col-sm-8">
                     <textarea cols='38' rows='15' name="content" defaultValue={item.content}></textarea>
                  </div>
                </div>
                <Checkbox className="pull-left" key="isofficial"  name="isofficial" labelName="官方帖" checked={item.isofficial == 1 ? true : false} />
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
