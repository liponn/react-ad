import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch, fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import { ACTIVITY_INFO, ACTIVITY_RULE_LIST, ACTIVITY_AWARD_LIST, ACTIVITY_RULE_DEL, ACTIVITY_AWARD_ADD, ACTIVITY_AWARD_DEL, ACTIVITY_PUT, ACTIVITY_INVITE_AWARD_ADD, ACTIVITY_INVITE_AWARD_DEL, ACTIVITY_INVITE_AWARD_LIST } from '../../../constants';
import { Radio,Pagination } from '../../tools';
import ActivityAddModal from '../../modals/ActivityAddModal';
import { getConfig } from '../../../config/omg';

class Thread extends Component {
    constructor(props) {
        super(props);
        this.freshActivityInfo = this.freshActivityInfo.bind(this);
        this.updateActivity = this.updateActivity.bind(this);

        const awardTypes = getConfig('awardTypes');
        const activityTriggers = getConfig('activityTriggers');
        const frequencyTypes = getConfig('frequencyTypes');
        const ruleTypes = getConfig('ruleTypes');
        const ruleFileds = getConfig('ruleFileds');
        this.state = {
            awardTypes,
            activityTriggers,
            frequencyTypes,
            ruleTypes,
            ruleFileds,
            addAwardErrorMsg: '',
        };
    }
    componentDidMount() {
        this.freshActivityInfo();
    }
    // 刷新活动信息
    freshActivityInfo() {
        this.props.dispatch(fetchAction({
            type: ACTIVITY_INFO,
            suffix: `/${this.props.activityId}`,
            key: this.props.activityId,
        }));
    }


    // 更新活动
    updateActivity(e) {
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
    /*// 更新活动
    showUpdateActivity() {
        if (!this.activity || !this.activity.id) {
            alert('获取活动详情失败');
            return;
        }
        this.props.dispatch(showModal(<ActivityAddModal item={this.activity} update submit={this.updateActivity} />));
    }*/


    render() {
        const activity = this.props.activityList[this.props.activityId] || {};
        this.activity = activity;

        const updateActivityBtn = (
            <button
                onClick={this.showUpdateActivity}
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
                </div>
            </div>
        </div>
        );
    }
}

Thread.propTypes = {
    dispatch: PropTypes.func.isRequired,
    activityList: PropTypes.object.isRequired,
    activityId: PropTypes.number.isRequired,
};

Thread.defaultProps = {
}

export default connect(state => {
    const { omg } = state;
    const activityList = omg[ACTIVITY_INFO] || {};
    const ruleList = omg[ACTIVITY_RULE_LIST] || {};
    const awardList = omg[ACTIVITY_AWARD_LIST] || {};
    const inviteAwardList = omg[ACTIVITY_INVITE_AWARD_LIST] || {};
    return {
        activityList,
        ruleList,
        awardList,
        inviteAwardList,
    };
})(Thread);