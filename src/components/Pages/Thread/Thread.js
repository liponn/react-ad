import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commonFetch, fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import { BBS_THREAD_LIST,BBS_SECTION_LIST } from '../../../constants';
import { Radio,Pagination } from '../../tools';
import { DatePicker,Select,Form,Input } from "antd";

class Thread extends Component {
    constructor(props) {
        super(props);
        this.freshSectionList = this.freshSectionList.bind(this);
        this.list = this.list.bind(this);
        this.typeChange = this.typeChange.bind(this);
        this.changeLength = this.changeLength.bind(this);
        this.changePage = this.changePage.bind(this);
        this.changeSearch= this.changeSearch.bind(this);
        //this.componentDidMount = this.componentDidMount.bind(this);
        //this.updateThread = this.updateThread.bind(this);
        this.state = {
            isVerify:0,
        }
    }
    componentDidMount() {
        this.freshSectionList();
        this.list();
    }

    list(){
        const queryObj = {};
        const page = this.state.page || 1;
        const isVerify = this.state.isVerify || 0;
        const pageNum = this.state.pageNum || 20;
        const searchParams = this.state.formData || [];
        queryObj[`page`] = page;
        queryObj[`data[filter][isverify]`] = isVerify;
        if(pageNum !== 20){
            queryObj[`data[pagenum]`] = pageNum;
        }
        if(searchParams.type_id){
            queryObj[`data[filter][type_id]`] = searchParams.type_id;
        }
        if(searchParams.created_at){
            queryObj[`data[filter][created_at]`] = searchParams.created_at.format('YYYY-MM-DD');
            queryObj[`data[filter][created_at_pattern]`] = "min_equal_max";
        }
        if(searchParams.end_at){
            queryObj[`data[filter][end_at]`] = searchParams.end_at.format('YYYY-MM-DD');
        }
        const requert = {
            type:BBS_THREAD_LIST,
            key:isVerify,
            queryObj
        }
        this.props.dispatch(fetchAction(requert));
    }

    typeChange(e){
        const isVerify = e.target.value;
        this.setState({
            isVerify,
            page:1,
        });
        this.list();
    }

    changeLength(e){
        const length = e.target.value;
        this.setState({
            pageNum:length
        });
        this.list();
    }

    changePage(page){
        this.setState({
            page:page
        });
        this.list()
    }

    changeSearch(e){
        e.preventDefault();
        const  formData = this.props.form.getFieldsValue();
        this.setState({
            formData:formData,
        });
        this.list()
    }

    freshSectionList() {
        this.props.dispatch(fetchAction({
            type: BBS_SECTION_LIST,
            key: 'type',
        }));
    }

    render() {
        const threadList = this.props.threadList[this.state.isVerify] || {};
        const sectionList = this.props.sectionList || {};
        const sections = sectionList.type || [];
        const items = threadList.data || [];
        const { getFieldDecorator,getFieldsValue } = this.props.form;

        const updateActivityBtn = (
            <button
                /*onClick={this.showUpdateActivity}*/
                className="btn btn-sm btn-info pull-right"
            >
                <i className="fa fa-edit">编辑</i>
            </button>
        );
        return (
            <div>
                <Radio
                    labelName="未审核"
                    name="userfilter"
                    checked={this.state.isVerify ===  0}
                    onChange={this.typeChange}
                    value={0}
                />
                <Radio
                    labelName="已审核"
                    name="userfilter"
                    checked={this.state.isVerify === 1}
                    onChange={this.typeChange}
                    value={1}
                />
                <Radio
                    labelName="已拒绝"
                    name="userfilter"
                    value={2}
                    checked={this.state.isVerify === 2}
                    onChange={this.typeChange}
                />
                <hr />
                <div>
                    <div className="card clearfix ">
                        <div className="clearfix m-t-1">
                            <h4 className="card-title">
                                <div className="pull-left m-l-1">
                                    帖子管理
                                    <span className="total">
                                    ({threadList.total}/{threadList.per_page})
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
                                        currentPage={threadList.current_page}
                                        lastPage={threadList.last_page}
                                        unurl
                                    />
                                </div>

                                <Form className="form-inline pull-right" onSubmit={this.changeSearch}>
                                    <div className="pull-left m-l-1 m-b-1">
                                        {getFieldDecorator('type_id', {
                                            rules: [],
                                        })(
                                            <Select style={{ width: 120 }}>
                                                {sections.map((item,index) => (
                                                    <Option key={index} value={item.id}>{item.name}</Option>
                                                ))}
                                            </Select>
                                        )}
                                        &nbsp;
                                        {getFieldDecorator('created_at',
                                            {rules:[]},
                                        )(
                                            <DatePicker placeholder="START"/>
                                        )}


                                        {getFieldDecorator("end_at",
                                            {rules:[]},
                                        )(
                                            <DatePicker placeholder="END"/>
                                        )}
                                    </div>
                                    &nbsp;
                                    <button type="submit"
                                            className="btn btn-sm btn-info-outline pull-right"
                                    >
                                        <i className="fa fa-search">搜索</i>
                                    </button>
                                </Form>
                            </h4>
                        </div>
                        <table className="table table-bordered m-b-0 table-hover data-table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>所属版块</th>
                                <th>贴子标题</th>
                                <th>贴子内容</th>
                                <th>用户ID</th>
                                <th>用户昵称</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            { items.map((item,index) => (
                                <tr key={`group-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.section.name}</td>
                                    <td>{item.title}</td>
                                    <td>{item.content}</td>
                                    <td>{item.user_id}</td>
                                    <td>{item.user.nickname}</td>
                                    <td>
                                        <button data-id={item.id} onClick={this.updateThread}
                                                className="btn btn-info-outline btn-sm"
                                        >编辑</button>
                                        <button data-id={item.id} onClick={this.updateThread}
                                                className="btn btn-info-outline btn-sm"
                                        >编辑</button>
                                        <button data-id={item.id} onClick={this.updateThread}
                                                className="btn btn-info-outline btn-sm"
                                        >编辑</button>
                                        <button data-id={item.id} onClick={this.delThread}
                                                className="btn btn-danger-outline btn-sm"
                                        >删除</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className="card-block clearfix">
                            <h4 className="card-title">
                                <div className="pull-left">
                                    帖子管理
                                    <span className="total">
                                    ({threadList.total}/{threadList.per_page})
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
                                        currentPage={threadList.current_page}
                                        lastPage={threadList.last_page}
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
Thread = Form.create()(Thread);
Thread.propTypes = {
    dispatch: PropTypes.func.isRequired,
    sectionList: PropTypes.object.isRequired,
};

Thread.defaultProps = {
}

export default connect(state => {
    const { omg } = state;
    const threadList = omg[BBS_THREAD_LIST] || {};
    const sectionList = omg[BBS_SECTION_LIST] || {};
    return {
        sectionList,
        threadList,
    };
})(Thread);
