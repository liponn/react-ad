import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import {
  BBS_COMMENT_UNVERIFY,
  BBS_COMMENT_VERIFY,
  BBS_COMMENT_DT_UPDATE,
  BBS_COMMENT_DT_DEL,
  BBS_COMMENT_DT_ADD,
  BBS_COMMENT_LIST,
  BBS_USER_ADMIN_LIST,
  BBS_COMMENT_REPLY,
  BBS_USER_VEST_LIST,
  BBS_COMMENT_BATCH_REFUSE,
  BBS_COMMENT_BATCH_PASS,
} from '../../../constants';
import { Radio,Pagination } from '../../tools';
import ReplayModal from './ReplayModal';
import CommentModal from './CommentModal';
import { Form,Input,Checkbox } from "antd";


class Reply extends Component {
    constructor(props) {
        super(props);
       
        this.list = this.list.bind(this);
        this.typeChange = this.typeChange.bind(this);
        this.changeLength = this.changeLength.bind(this);
        this.changePage = this.changePage.bind(this);
        this.changeSearch= this.changeSearch.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.changeOrder = this.changeOrder.bind(this);
        this.batchPass = this.batchPass.bind(this);
        this.batchRefuse = this.batchRefuse.bind(this);
        this.showReplayModal = this.showReplayModal.bind(this);
        this.fetchAdmins = this.fetchAdmins.bind(this);
        this.replay = this.replay.bind(this);
        this.delComment = this.delComment.bind(this);
        this.passComment = this.passComment.bind(this);
        this.holdComment = this.holdComment.bind(this);
        this.getAdmins = this.getAdmins.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.showUpdateModal = this.showUpdateModal.bind(this);
        this.addComment = this.addComment.bind(this);
        this.showAddModal = this.showAddModal.bind(this);
        this.state = {
            isVerify:0,
            order:{
                col:'id',
                val:'desc',
            },
            allChecked: false,

        }
    }

    componentDidMount() {
      this.fetchAdmins();
        this.list();
    }

    list(gov=false){
        const queryObj = {};
        const page = this.state.page || 1;
        const isVerify = this.state.isVerify || 0;
        const pageNum = this.state.pageNum || 20;
        const order = this.state.order || {};
        const searchParams = this.state.formData || [];
        queryObj[`page`] = page;
        queryObj[`data[filter][isverify]`] = isVerify;
        if(pageNum !== 20){
            queryObj[`data[pagenum]`] = pageNum;
        }
        if(JSON.stringify(order) != '{}'){
            queryObj[`data[order][${order.col}]`] = order.val;
        }
        if(gov){
            queryObj[`data[filter][isofficial]`] = 1;
        }else{
            if(searchParams.tid){
                queryObj[`data[filter][tid]`] = searchParams.tid;
            }
        }
        const request = {
            type:BBS_COMMENT_LIST,
            key:isVerify,
            queryObj
        }
        this.props.dispatch(fetchAction(request));
    }

    fetchAdmins(){
       this.props.dispatch(fetchAction({
            type: BBS_USER_VEST_LIST,
            method: 'GET',
        })).then(json => {
            if (json.error_code === 0) {
                const admins = {};
                for (let i = 0; i < json.data.length; i++) {
                    admins[json.data[i].user_id] = json.data[i].nickname;
                }
                this.setState({
                    admins,
                });
            } else {
                alert(json.error_msg);
            }
        });
    }

    getAdmins(){
        return this.state.admins;
    }

    addComment(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('isverify',1)
        this.props.dispatch(fetchAction({
            type: BBS_COMMENT_DT_ADD,
            method: 'POST',
            formData,
        })).then(json => {
            if (json.error_code === 0) {
                this.props.dispatch(hideModal(true));
                this.list();
            } else {
                this.props.dispatch(hideModal(true));
                this.list();
                alert(json.data.error_msg);
            }
        });
    }

    showUpdateModal(e){
        const index = e.target.dataset.index;
        this.props.dispatch(showModal(<CommentModal item={this.items[index]} update={true} submit={this.updateComment} />));
    }

    showAddModal(){
        this.props.dispatch(showModal(<CommentModal submit={this.addComment} />));
    }

    updateComment(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(fetchAction({
            type: BBS_COMMENT_DT_UPDATE,
            method: 'POST',
            formData,
        })).then(json => {
            if (json.error_code === 0) {
                this.props.dispatch(hideModal(true));
                this.list();
            } else {
                this.props.dispatch(hideModal(true));
                this.list();
                alert(json.data.error_msg);
            }
        });
    }

    showReplayModal(e){
        const id = e.currentTarget.dataset.id;
        this.props.dispatch(showModal(<ReplayModal id={id} submit={this.replay} getAdmins={this.getAdmins} />));
    }

    replay(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(fetchAction({
            type: BBS_COMMENT_REPLY,
            method: 'POST',
            formData,
        })).then((json) => {
            if (json.error_code === 0) {
                this.props.dispatch(hideModal(true));
                alert('回复成功');
            } else {
                alert(json.data.error_msg);
            }
        });
    }

    passComment(e){
        const id = e.target.dataset.id;
        const formData = new FormData;
        formData.append('id', id);
        formData.append('isverify',1);
        this.props.dispatch(fetchAction({type:BBS_COMMENT_DT_UPDATE, method:'POST',formData:formData}))
            .then(() => (this.list()));
    }

    holdComment(e){
        const id = e.target.dataset.id;
        const formData = new FormData;
        formData.append('id', id);
        formData.append('isverify',2);
        this.props.dispatch(fetchAction({type:BBS_COMMENT_DT_UPDATE, method:'POST',formData:formData}))
            .then(() => (this.list()));
    }

    delComment(e){
        if (!confirm('确定删除吗?')) {
            return false;
        }
        const id = e.target.dataset.id;
        const formData = new FormData;
        formData.append('id', id);
        this.props.dispatch(fetchAction({type:BBS_COMMENT_DT_DEL, method:'POST',formData:formData}))
            .then(() => (this.list()));
    }



    batchRefuse(e){
        const isAll = e.target.dataset.type;
        const tidArr = document.getElementsByName('all_tid');
        let tidStr = '';
        const formData = new FormData;
        for(var i=0;i<tidArr.length;i++){
                if(isAll == 'all'){
                    tidStr+= '-'+tidArr[i].value;
                } else {
                    if(tidArr[i].checked == true){
                        tidStr+= '-'+tidArr[i].value;
                    }
                }
               
        }
        formData.append('id',tidStr);
        this.props.dispatch(fetchAction({type:BBS_COMMENT_BATCH_REFUSE, method:'POST',formData:formData}))
            .then(() => (this.list()));
        
    }

    batchPass(e){
        const isAll = e.target.dataset.type;
        const tidArr = document.getElementsByName('all_tid');
        let tidStr = '';
        const formData = new FormData;
        for(var i=0;i<tidArr.length;i++){
                if(isAll == 'all'){
                    tidStr+= '-'+tidArr[i].value;
                } else {
                    if(tidArr[i].checked == true){
                        tidStr+= '-'+tidArr[i].value;
                    }
                }
               
        }
        formData.append('id',tidStr);
        this.props.dispatch(fetchAction({type:BBS_COMMENT_BATCH_PASS, method:'POST',formData:formData}))
            .then(() => (this.list()));
    }

    typeChange(e){
        const isVerify = e.target.value;
        this.setState({
            formData:{},
            isVerify:isVerify,
            page:1,
        },() => {this.list()});

    }

    changeOrder(e){
        const order = this.state.order;
        const col = e.target.dataset.value;
        if(order.col == col){
            order.val = order.val == 'desc' ? 'asc' : 'desc';
        }else{
            order.col = col;
            order.val = 'desc';
        }
        
        this.setState({
            order,
        }, () => {this.list()});
    }

    changeLength(e){
        const length = e.target.value;
        this.setState({
            pageNum:length
        },()=>{this.list()});
    }

    changePage(page){
        this.setState({
            page:page
        },()=>{this.list()});

    }

    changeSearch(e){
        e.preventDefault();
        const  formData = this.props.form.getFieldsValue();
        this.setState({
            formData:formData,
        },()=>{this.list()});
    }

    render() {
        const commentList = this.props.commentList[this.state.isVerify] || {};
        const items = commentList.data || [];
        this.admins = this.props.adminList || [];
        this.items = items;
        const { getFieldDecorator,getFieldsValue } = this.props.form;
       
        return (
            <div>
                <Radio
                    labelName="未审核"
                    name="userfilter"
                    checked={parseInt(this.state.isVerify) === 0 }
                    onChange={this.typeChange}
                    value={0}
                />
                <Radio
                    labelName="已审核"
                    name="userfilter"
                    checked={parseInt(this.state.isVerify) === 1}
                    onChange={this.typeChange}
                    value={1}
                />
                <Radio
                    labelName="已拒绝"
                    name="userfilter"
                    value={2}
                    checked={parseInt(this.state.isVerify) === 2}
                    onChange={this.typeChange}
                />
                <hr />
                <div>
                    <div className="card clearfix ">
                        <div className="clearfix m-t-1">
                            <h4 className="card-title">
                                <div className="pull-left m-l-1">
                                    评论管理
                                    <span className="total">
                                    ({commentList.total}/{commentList.per_page})
                                </span>
                                </div>
                                <div className="pull-left m-l-1">
                                    <select className="custom-select" onChange={this.changeLength}>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                        <option value="80">80</option>
                                    </select>
                                </div>
                                <div className="pull-left">
                                    <Pagination
                                        onClick={this.changePage}
                                        currentPage={commentList.current_page}
                                        lastPage={commentList.last_page}
                                        unurl
                                    />
                                </div>

                                <Form className="form-inline pull-right" onSubmit={this.changeSearch}>
                                    <div className="pull-left m-l-1 m-b-1">
                                        {getFieldDecorator('tid', {
                                            rules: [],
                                        })(
                                            <Input style={{width:"100px"}} placeholder="帖子ID" />
                                        )}
                                         &nbsp;
                                                               
                                    </div>
                                    &nbsp;
                                    <button type="submit"
                                            className="btn btn-sm btn-info-outline pull-right"
                                    >
                                        <i className="fa fa-search">搜索</i>
                                    </button>
                                </Form>
                                { this.state.isVerify == 0 ?
                                <button onClick={this.batchPass} data-type="some" className="btn btn-sm btn-info pull-right">通过</button> : "" }

                                { this.state.isVerify == 1 ?
                                <button onClick={this.batchRefuse} data-type="some" className="btn btn-sm btn-info pull-right">拒绝</button>  : "" }
                                { this.state.isVerify == 1 ?
                                <button onClick={this.showAddModal} className="btn btn-sm btn-info pull-right"><i className="fa fa-plus">添加</i></button>   : "" }
                                 
                                

                            </h4>
                        </div>
                        <table className="table table-bordered m-b-0 table-hover data-table">
                            <thead>
                                    <tr>
                                        <th>
                                        {
                                          this.state.isVerify == 0 ? <button onClick={this.batchPass} data-type="all"  className="btn btn-success-outline btn-sm">全部通过</button> : 
                                          this.state.isVerify == 1 ? <button onClick={this.batchRefuse} data-type="all"  className="btn btn-sm btn-secondary-outline">全部拒绝</button> :
                                          ""
                                        }
                                        </th>
                                        <th>ID</th>
                                        <th>用户ID</th>
                                        <th>帖子ID</th>
                                        <th>内容</th>
                                        <th>审核</th>
                                        <th>创建时间</th>
                                        <th>帖子详情</th>
                                        <th>操作</th>
                                    </tr>
                            </thead>
                            <tbody>
                            { items.map((item,index) => (
                                <tr key={`group-${index}`}>
                                    { this.state.isVerify == 1 || this.state.isVerify == 0 ?  
                                        <td><Checkbox value={item.id} defaultChecked={false} name="all_tid" ></Checkbox></td>
                                    : "" }
                                    <td>{item.id}</td>
                                    <td>{item.user_id}</td>
                                    <td>{item.tid}</td>
                                    <td>{item.content}</td>
                                    <td>{item.isverify}</td>
                                    <td>{item.created_at}</td>
                                    <td>{item.thread.content}</td>
                                   
                                    { 
                                        this.state.isVerify == 0 ? 
                                            <td>
                                                <button data-id={item.id} onClick={this.passComment}
                                                        className="btn btn-success-outline btn-sm"
                                                >通过</button>
                                                 <button data-id={item.id} onClick={this.holdComment}
                                                        className="btn btn-sm btn-secondary-outline"
                                                >拒绝</button>
                                                <button data-id={item.id} onClick={this.delComment}
                                                        className="btn btn-danger-outline btn-sm"
                                                >删除</button>
                                            </td> 
                                        : 
                                        this.state.isVerify == 1 ? 
                                            <td>
                                                <button data-id={item.id} onClick={this.showReplayModal}
                                                        className="btn btn-primary-outline btn-sm"
                                                >回复</button>
                                                <button data-index={index} data-id={item.id} onClick={this.showUpdateModal}
                                                        className="btn btn-info-outline btn-sm"
                                                >编辑</button>
                                                <button data-id={item.id} onClick={this.holdComment}
                                                        className="btn btn-sm btn-secondary-outline"
                                                >拒绝</button>
                                            </td> 
                                        : 
                                        this.state.isVerify == 2 ? 
                                             <td>
                                                <button data-id={item.id} onClick={this.passComment}
                                                        className="btn btn-success-outline btn-sm"
                                                >通过</button>
                                                <button data-id={item.id} onClick={this.delComment}
                                                        className="btn btn-danger-outline btn-sm"
                                                >删除</button>
                                            </td>  
                                        : <td>——</td>
                                    }
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className="card-block clearfix">
                            <h4 className="card-title">
                                <div className="pull-left">
                                    评论管理
                                    <span className="total">
                                    ({commentList.total}/{commentList.per_page})
                                </span>
                                </div>
                                <div className="pull-left m-l-1">
                                    <select className="custom-select">
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                        <option value="80">80</option>
                                    </select>
                                </div>
                                <div className="pull-left">
                                    <Pagination
                                        onClick={this.changePage}
                                        currentPage={commentList.current_page}
                                        lastPage={commentList.last_page}
                                        unurl
                                    />
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Reply = Form.create()(Reply);
Reply.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Reply.defaultProps = {
}

export default connect(state => {
    const { omg } = state;
    const commentList = omg[BBS_COMMENT_LIST] || {};
    const adminList = omg[BBS_USER_ADMIN_LIST] || [];
    return {
      adminList,
      commentList,
    };
})(Reply);
