import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch, fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import { BBS_GROUP_TASK_LIST, BBS_TASK_DEL, BBS_TASK_DT_DEL,BBS_TASK_ADD,BBS_TASK_TRIGGER_TYPES,BBS_GROUP_TASK_INFO,BBS_TASK_OFFLINE,BBS_TASK_ONLINE } from '../../../constants';
import { Link, Card, Modal, Radio, Pagination } from '../../tools';
import history from '../../../core/history';
import { getConfig } from '../../../config/omg';
import TaskGroupAddModal  from '../../modals/TaskGroupAddModal';
import TaskGroupUpdateModal  from '../../modals/TaskGroupUpdateModal';
import TaskAddModal from '../../modals/TaskAddModal';

class BbsTaskList extends Component{
    constructor(props){
        super(props);
        this.getGroupTaskList = this.getGroupTaskList.bind(this);
        this.freshGroupTaskList = this.freshGroupTaskList.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.groupDelete = this.groupDelete.bind(this);
        this.groupUpdate = this.groupUpdate.bind(this);
        this.taskOffline = this.taskOffline.bind(this);
        this.taskOnline = this.taskOnline.bind(this);
        this.taskDelete = this.taskDelete.bind(this);
        this.groupClick = this.groupClick.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.showTaskAddModal = this.showTaskAddModal.bind(this);
        this.freshTaskGroupInfo = this.freshTaskGroupInfo.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.typeChange = this.typeChange.bind(this);
        this.showModal = this.showModal.bind(this);
        const taskTypes = getConfig('taskTypes');

        this.state = {
            taskTypes,
            group: {},
        };
    }

    componentDidMount() {
        this.getGroupTaskList(this.props.typeId, this.props.page);
        this.getTaskTriggerTypes();
    }

    freshGroupTaskList() {
        this.getGroupTaskList(this.props.typeId, this.props.page);
    }

    getTaskTriggerTypes(){
        this.props.dispatch(fetchAction({
            type:BBS_TASK_TRIGGER_TYPES,
        }));
    }

    showModal() {
        this.props.dispatch(showModal(<TaskGroupAddModal callback={this.freshGroupTaskList} typeId={this.props.typeId} />));
    }

    typeChange(e) {
        const value = e.target.value;
        history.push(`/bbstask/${value}`);
    }

    // 刷新活动信息
    freshTaskGroupInfo(id) {
        this.props.dispatch(fetchAction({
            type: BBS_GROUP_TASK_INFO,
            suffix: `/${id}`,
            key: id,
        }));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.typeId !== this.props.typeId || nextProps.page !== this.props.page) {
            this.getGroupTaskList(nextProps.typeId, nextProps.page);
        }
    }

    saveTask(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(commonFetch(BBS_TASK_ADD, 'POST', formData))
            .then((json) => {
                if (json.error_code === 0) {
                    this.props.dispatch(hideModal());
                    history.push(`/bbstask/id/${json.data.insert_id}`);
                }
            });
    }

    getGroupTaskList(typeId, page) {
        this.props.dispatch(fetchAction({
            type: BBS_GROUP_TASK_LIST,
            queryObj: {
                'data[filter][type_id]': typeId,
                page,
            },
            key: `${typeId}_${page}`,
        }));
    }

    showTaskAddModal(e){
        const id = +$(e.target).data('id');
        const index = $(e.target).data('index');
        const aliasName = this.taskGroupInfo[index].alias_name;
        const modalView = (
            <TaskAddModal  submit={this.saveTask} aliasName={aliasName} types={this.props.taskTriggerTypes} groupId={id} />
        );
        this.props.dispatch(showModal(modalView));
    }

    taskDelete(e){
        const id = $(e.target).data('id');
        if (!confirm('确定删除ID:'+id+'的任务吗？')) {
            return;
        }
        const formData = new FormData;
        formData.append('id',id);
        this.props.dispatch(commonFetch(BBS_TASK_DEL,'POST',formData))
            .then(() =>(this.freshGroupTaskList()));
    }

    taskOnline(e) {
        const id = $(e.target).data('id');
        const formData = new FormData;
        formData.append('id', id);
        this.props.dispatch(fetchAction({
            type:BBS_TASK_ONLINE,
            method:'POST',
            formData
        })).then(() => (this.freshGroupTaskList()));
    }

    taskOffline(e) {
        const id = $(e.target).data('id');
        const formData = new FormData;
        formData.append('id', id);
        this.props.dispatch(commonFetch(BBS_TASK_OFFLINE, 'POST', formData))
            .then(() => (this.freshGroupTaskList()));
    }

    groupDelete(e) {
        const id = $(e.target).data('id');
        if (!confirm('确定删除ID:'+id+'的任务组及子任务吗？')) {
            return;
        }
        const formData = new FormData;
        formData.append('id', id);
        this.props.dispatch(commonFetch(BBS_TASK_DT_DEL, 'POST', formData))
            .then(() => (this.freshGroupTaskList()));
    }

    groupUpdate(e){
        const index = $(e.target).data('index');
        const item = this.taskGroupInfo[index];
        this.props.dispatch(showModal(<TaskGroupUpdateModal item={item} callback={this.freshGroupTaskList} />));
    }

    groupClick(e) {
        const id = $(e.target).data('id');
        if (this.state.group[id]) {
            this.setState({
                group: Object.assign({}, this.state.group, {[id]: false}),
            });
        } else {
            this.setState({
                group: Object.assign({}, this.state.group, {[id]: true}),
            });
        }
    }

    render() {
        const groupTaskList = this.props.groupTaskList || {};
        const key = `${this.props.typeId}_${this.props.page}`;
        const groups = groupTaskList[key] || {};
        const items = groups.data || [];
        this.taskTriggerTypes = this.props.taskTriggerTypes || {};
        this.taskGroupInfo = items;
        const addBtn = (
            <button
                type="button"
                onClick={this.showModal}
                className="btn btn-sm btn-info action-add pull-right"
            >
                <i className="fa fa-plus">任务</i>
            </button>);
        return (
            <div>
                {Object.keys(this.state.taskTypes).map(key=> (
                    <Radio
                        name="activity-type"
                        key={key}
                        checked={+key === this.props.typeId}
                        labelName={this.state.taskTypes[key]}
                        value={key}
                        onChange={this.typeChange}
                    />
                ))}
                <hr />
                <Card title="任务列表" btn={addBtn}>
                    <table className="table m-b-0 table-hover">
                        <thead>
                        <tr>
                            <th>任务名称</th>
                            <th>ID</th>
                            <th>任务别名</th>
                            <th>TIP</th>
                            <th>创建时间</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody >
                        {items.map((item,index) => {
                            const trArr = [
                                <tr key={`group-${item.id}`} style={{'fontWeight': 'bold'}} title={item.name}>
                                    <td onClick={this.groupClick} data-id={item.id}>
                                        <i data-id={item.id} hidden={this.state.group[item.id] !== false} className="fa fa-plus-square-o"></i>
                                        <i data-id={item.id} hidden={this.state.group[item.id] === false} className="fa fa-minus-square-o"></i>
                                        {item.name} ({item.tasks.length})
                                    </td>
                                    <td>{item.id}</td>
                                    <td>{item.alias_name}</td>
                                    <td>{item.tip}</td>
                                    <td>—</td>
                                    <td>—</td>
                                    <td>
                                        <button
                                            data-index={index}
                                            data-id={item.id}
                                            onClick={this.showTaskAddModal}
                                            className="btn btn-sm btn-info-outline"
                                        >
                                            <i data-id={item.id} data-index={index} className="fa fa-plus"></i>子任务
                                        </button>
                                        <button
                                            hidden={item.tasks.length}
                                            data-id={item.id}
                                            data-index={index}
                                            onClick={this.groupUpdate}
                                            className="btn btn-sm btn-warning-outline"
                                        >编辑</button>
                                        <button
                                            hidden={item.tasks.length}
                                            data-id={item.id}
                                            onClick={this.groupDelete}
                                            className="btn btn-sm btn-danger-outline"
                                        >删除</button>
                                    </td>
                                </tr>];
                            const children = item.tasks.map((task) => (
                                <tr hidden={this.state.group[item.id] === false} key={`activity${task.id}`} title={task.name}>
                                    <td>&nbsp;&nbsp;{task.name}</td>
                                    <td>{task.id ? task.id : '—'}</td>
                                    <td>{task.remark ? task.remark : '—'}</td>
                                    <td>—</td>
                                    <td>{task.created_at}</td>
                                    <td>
                                        <span className="text-success" hidden={!+task.enable}>上线</span>
                                        <span className="text-warning" hidden={+task.enable}>下线</span></td>
                                    <td>
                                        <button
                                            data-id={task.id}
                                            hidden={!+task.enable}
                                            onClick={this.taskOffline}
                                            className="btn btn-sm btn-warning-outline"
                                        >下线</button>
                                        <button
                                            data-id={task.id}
                                            hidden={+task.enable}
                                            onClick={this.taskOnline}
                                            className="btn btn-sm btn-success-outline"
                                        >上线</button>
                                        <Link className="btn btn-sm btn-info-outline" to={`/bbstask/id/${task.id}`}>
                                            编辑
                                        </Link>
                                        <button
                                            hidden={task.enable}
                                            data-id={task.id}
                                            onClick={this.taskDelete}
                                            className="btn btn-sm btn-danger-outline"
                                        >删除</button>
                                    </td>
                                </tr>
                            ));
                            trArr.push(children);
                            return trArr;
                        })}
                        </tbody>
                    </table>
                </Card>
            </div>
        );
    }

}
BbsTaskList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    typeId: PropTypes.number.isRequired,
    groupTaskList: PropTypes.object.isRequired,
    groupTaskInfo:PropTypes.object.isRequired,
    taskTriggerTypes:PropTypes.object.isRequired,
    page: PropTypes.number,
}

BbsTaskList.defaultProps = {
}

export default connect(state => {
    const { omg } = state;
    const groupTaskList = omg[BBS_GROUP_TASK_LIST] || {};
    const groupTaskInfo = omg[BBS_GROUP_TASK_INFO] || {};
    const taskTriggerTypes = omg[BBS_TASK_TRIGGER_TYPES] || {};

    return {
        groupTaskList,
        groupTaskInfo,
        taskTriggerTypes,
    };
})(BbsTaskList);