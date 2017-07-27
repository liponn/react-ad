import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch, fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import { BBS_TASK_INFO,BBS_TASK_TRIGGER_TYPES,BBS_TASK_DT_UPDATE } from '../../../constants';
import { Card, Text, Link } from '../../tools';
import TaskAddModal from '../../modals/TaskAddModal';
import { getConfig } from '../../../config/omg';

class BbsTask extends Component {
    constructor(props) {
        super(props);
        this.showUpdateTask = this.showUpdateTask.bind(this);
        this.freshTaskInfo = this.freshTaskInfo.bind(this);
        this.getTaskTriggerTypes = this.getTaskTriggerTypes.bind(this);
        this.updateTask = this.updateTask.bind(this);

        const awardTypes = getConfig('awardTypes');
        const frequencyTypes = getConfig('frequencyTypes');

        this.state = {
            awardTypes,
            frequencyTypes,
            addAwardErrorMsg: '',
        };
    }

    getTaskTriggerTypes(){
        this.props.dispatch(fetchAction({
            type:BBS_TASK_TRIGGER_TYPES,
        }));
    }

    componentDidMount() {
        this.freshTaskInfo();
        this.getTaskTriggerTypes();
    }
    // 刷新活动信息
    freshTaskInfo() {
        this.props.dispatch(fetchAction({
            type: BBS_TASK_INFO,
            suffix: `/${this.props.taskId}`,
            key: this.props.taskId,
        }));
    }

    // 更新活动
    updateTask(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(fetchAction({
            type: BBS_TASK_DT_UPDATE,
            method: 'POST',
            formData,
        })).then(json => {
            if (json.error_code === 0) {
                this.props.dispatch(hideModal(true));
                this.freshTaskInfo();
            }
        });
    }
    // 更新活动
    showUpdateTask() {
        if (!this.task || !this.task.id) {
            alert('获取任务详情失败');
            return;
        }
        this.props.dispatch(showModal(<TaskAddModal item={this.task} types={this.taskTriggerTypes} update submit={this.updateTask} />));
    }

    render() {
        const task = this.props.tasks[this.props.taskId] || {};
        this.task = task;

        this.taskTriggerTypes = this.props.taskTriggerTypes || {};
        const updateTaskyBtn = (
            <button
                onClick={this.showUpdateTask}
                className="btn btn-sm btn-info pull-right"
            >
                <i className="fa fa-edit">编辑</i>
            </button>
        );

        return (
            <div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">首页</Link></li>
                    <li className="breadcrumb-item"><Link to="/bbstask/1">任务列表</Link></li>
                    <li className="breadcrumb-item active">{task.name || '—'}</li>
                </ol>
                <Card title="任务详情" btn={updateTaskyBtn} >
                    <Text name="任务名称" value={task.name} />
                    <Text name="任务标识" value={task.task_mark || '—'} />

                    <Text name="ID" value={task.id} />
                    <Text name="状态" value={+task.enable ? '上线' : '下线'} />

                    <Text name="触发类型" value={this.taskTriggerTypes[task.trigger_type]} />
                    <Text name="触发条件" value={task.number} />

                    <Text name="奖品类型" value={this.state.awardTypes[task.award_type]}/>
                    <Text name="奖品数量" value={task.award}/>

                    <Text name="发奖频次" value={this.state.frequencyTypes[task.frequency]} />
                    <Text name="奖品有效期" value={task.exp_day}/>

                    {/*<Text name="所属任务组" value={group.name}/>*/}
                    <Text name="活动说明" value={task.remark || '—'} />

                    <div className="m-b-1 clearfix"></div>
                </Card>
            </div>
        );
    }
}

BbsTask.propTypes = {
    dispatch: PropTypes.func.isRequired,
    tasks: PropTypes.object.isRequired,
    taskId: PropTypes.number.isRequired,
};

BbsTask.defaultProps = {
}

export default connect(state => {
    const { omg } = state;
    const tasks = omg[BBS_TASK_INFO] || {};
    const taskTriggerTypes = omg[BBS_TASK_TRIGGER_TYPES] || {};
    return {
        tasks,
        taskTriggerTypes,
    };
})(BbsTask);