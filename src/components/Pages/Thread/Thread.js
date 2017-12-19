import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch, fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import { BBS_THREAD_LIST } from '../../../constants';
import { Radio,Pagination } from '../../tools';
import ActivityAddModal from '../../modals/ActivityAddModal';
import { getConfig } from '../../../config/omg';

class Thread extends Component {
    constructor(props) {
        super(props);
        this.list = this.list.bind(this);
        //this.freshThreadList = this.freshThreadList.bind(this);
        //this.updateThread = this.updateThread.bind(this);

    }
    componentDidMount() {
        this.list();
    }

    list(){
        const queryObj = {};
        const isVerify = this.props.isVerify || 0;
        switch (isVerify){
            case 0:
                this.verifyName = "noverify";
                break;
            case 1:
                this.verifyName = "verifyed";
                break;
            case 2:
                this.verifyName = "refused";
                break;
            default:
                this.verifyName = "noverify";
                break;
        }
        queryObj[`data[filter][isverify]`] = isVerify;
        const requert = {
            type:BBS_THREAD_LIST,
            key:isVerify,
            queryObj

        }
        this.props.dispatch(fetchAction(requert));
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
        const threadList = this.props.threadList[this.props.isVerify] || {};
        this.threadList = threadList;

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
                labelName="全部"
                name="userfilter"
                checked={}
                value="all"
            />
            <Radio
                labelName="马甲"
                name="userfilter"
                value="admin"
            />
            <Radio
                labelName="已拉黑"
                name="userfilter"
                value="black"
               /* checked=
                onChange=*/
            />
            <hr />
            <div>
                <div className="card clearfix">
                    <div className="card-block clearfix">
                        <h4 className="card-title">
                            <div className="pull-left">
                                帖子管理
                                <span className="total">
                                    (123/20)
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
                                /* currentPage={parseInt(this.state.start / this.state.length, 10) + 1}*/
                                    /*lastPage={Math.ceil(filterNum / this.state.length)}*/
                                    unurl
                                />
                            </div>
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
                </div>
            </div>
        </div>
        );
    }
}

Thread.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Thread.defaultProps = {
}

export default connect(state => {
    const { omg } = state;
    const threadList = omg[BBS_THREAD_LIST] || {};


    return {
        threadList,
    };
})(Thread);