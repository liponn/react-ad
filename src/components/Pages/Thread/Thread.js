import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch, fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import { BBS_THREAD_LIST,BBS_SECTION_LIST } from '../../../constants';
import { Radio,Pagination,DateTimeInput } from '../../tools';
import ActivityAddModal from '../../modals/ActivityAddModal';
import { getConfig } from '../../../config/omg';

class Thread extends Component {
    constructor(props) {
        super(props);
        this.freshSectionList = this.freshSectionList.bind(this);
        this.list = this.list.bind(this);
        this.typeChange = this.typeChange.bind(this);
        this.changeLength = this.changeLength.bind(this);
        this.changePage = this.changePage.bind(this);
        //this.freshThreadList = this.freshThreadList.bind(this);
        //this.updateThread = this.updateThread.bind(this);
        this.state = {
            isVerify:0
        }
    }
    componentDidMount() {
        this.freshSectionList();
        this.list();
    }

    list(){
        const queryObj = {};
        const isVerify = this.state.isVerify || 0;
        const page = this.state.page || 1;
        const pageNum = this.state.pageNum || 20;
        queryObj[`page`] = page;
        queryObj[`data[filter][isverify]`] = isVerify;
        if(pageNum !== 20){
            queryObj[`data[pagenum]`] = pageNum;
        }
        const requert = {
            type:BBS_THREAD_LIST,
            key:isVerify,
            queryObj
        }
        this.props.dispatch(fetchAction(requert));
    }

    typeChange(e){
        const value = e.target.value;
        this.setState({
            isVerify:value,
            page:1,
        },() => {this.list()}
        );
    }

    changeLength(e){
        const length = e.target.value;
        this.setState({
            pageNum:length
        },() => {this.list()});
    }

    changePage(page){
        this.setState({
            page:page
        },()=>{this.list()});
    }

    freshSectionList() {
        this.props.dispatch(fetchAction({
            type: BBS_SECTION_LIST,
            key: 'type',
        }));
    }
    // 更新活动
    /* updateActivity(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(fetchAction({
            type: ACTIVITY_PUT,
            method: 'POST',
            formData,
        })).then(json => {
            if (json.error_code === 0) {
                this.props.dispatch(hideModal(true));
                this.freshActivityInfo();
            }
        });
    }
    // 更新活动
    showUpdateActivity() {
        if (!this.activity || !this.activity.id) {
            alert('获取活动详情失败');
            return;
        }
        this.props.dispatch(showModal(<ActivityAddModal item={this.activity} update submit={this.updateActivity} />));
    }*/


    render() {
        const threadList = this.props.threadList[this.state.isVerify] || {};
        const sectionList = this.props.sectionList || {};
        const sections = sectionList.type || [];
        const items = threadList.data;
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
                checked={items && items[0].isverify === 0}
                onChange={this.typeChange}
                value={0}
            />
            <Radio
                labelName="已审核"
                name="userfilter"
                checked={items && items[0].isverify === 1}
                onChange={this.typeChange}
                value={1}
            />
            <Radio
                labelName="已拒绝"
                name="userfilter"
                value={2}
                checked={items && items[0].isverify === 2}
                onChange={this.typeChange}
            />
            <hr />
            <div>
                <div className="card clearfix">
                    <div className="clearfix">
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
                        </h4>
                    </div>
                    <div className="clearfix">
                        <h4 className="card-title">
                            <form className="form-inline pull-left" onSubmit={this.changeSearch}>
                                <div className="pull-left m-l-1 m-b-1">
                                    <select className="custom-select">
                                        {sections.map((item) => (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        ))}
                                    </select>&nbsp;
                                    <DateTimeInput name="created_at" labelName="起始时间"/>
                                    <DateTimeInput name="created_at" labelName="结束时间"/>
                                </div>
                                &nbsp;
                                <input
                                    className="form-control form-control-sm mr-sm-2"
                                    type="text"
                                    name="searchValue"
                                    placeholder="搜索"
                                />&nbsp;
                                <button type="submit"
                                        className="btn btn-sm btn-info-outline pull-right"
                                >
                                    <i className="fa fa-search">搜索</i>
                                </button>
                            </form>
                        </h4>
                    </div>
                    <table className="table table-bordered m-b-0 table-hover data-table">
                        <thead>
                        <tr>
                            <th>字段名</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>字段值</td>
                                <td>
                                    <button
                                        className="btn btn-info-outline btn-sm"
                                    >编辑</button>
                                    <button
                                        className="btn btn-danger-outline btn-sm"
                                    >删除</button>
                                </td>
                            </tr>
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