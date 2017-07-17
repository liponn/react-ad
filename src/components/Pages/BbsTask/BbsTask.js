import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { BBS_TASK_DT_LIST,BBS_TASK_DT_UPDATE,BBS_TASK_DT_DEL,BBS_TASK_DT_ADD } from '../../../constants';
import { DataTable , Radio} from '../../tools';

class BbsTask extends Component{
    constructor(props){
        super(props);
        this.typeChange = this.typeChange.bind(this);

        this.state = {
            name: '',
            alias_name: '',
            pre: '',
            errorMsg: '',
            addErrorMsg: '',
            dataTable: {
                title: '社区任务',
                listType: BBS_TASK_DT_LIST,
                updateType: BBS_TASK_DT_UPDATE,
                addType: BBS_TASK_DT_ADD,
                deleteType: BBS_TASK_DT_DEL,
                timeStamp: (new Date).getTime(),
                getBtns: this.getBtns,
                order: {
                    column: 0,
                    dir: 'desc',
                },
                start: 0,
                length: 20,
                search: {
                    value: '',
                    regex: false,
                },
                customSearch: {
                    name:'task_type',
                    parent:'equal',
                    value:1
                },
                idColumn: 0,
                columns: [
                    {
                        name: 'id',
                        cname: 'id',
                        type: 'hidden',
                        searchable: false,
                        orderable: true,
                        search: {
                            value: '',
                            regex: false,
                        },
                    },
                    {
                        name: 'user_id',
                        cname: '用户ID',
                        type: 'text',
                        searchable: true,
                        orderable: true,
                        search: {
                            value: '',
                            regex: false,
                        },
                    },
                    {
                        name: 'from_user_id',
                        cname: '来源用户ID',
                        type: 'text',
                        searchable: true,
                        orderable: true,
                        search: {
                            value: '',
                            regex: false,
                        },
                    },
                    {
                        name: 'tid',
                        cname: '帖子ID',
                        type: 'text',
                        searchable: true,
                        orderable: true,
                        search: {
                            value: '',
                            regex: false,
                        },
                    },
                    {
                        name: 'cid',
                        cname: '评论ID',
                        type: 'text',
                        searchable: true,
                        orderable: true,
                        search: {
                            value: '',
                            regex: false,
                        },
                    },
                    {
                        name: 'content',
                        cname: '内容',
                        type: 'text',
                        searchable: true,
                        orderable: true,
                        search: {
                            value: '',
                            regex: false,
                        },
                    },
                    {
                        name: 'created_at',
                        cname: '创建时间',
                        type: 'text',
                        searchable: false,
                        orderable: true,
                        search: {
                            value: '',
                            regex: false,
                        },
                    },
                    {
                        name: 'isread',
                        cname: '是否已读',
                        type: 'text',
                        searchable: false,
                        orderable: true,
                        search: {
                            value: '',
                            regex: false,
                        },
                    },
                ],
            },
        };
    }
    typeChange(e) {
        const value = +e.currentTarget.value;
        let dataTable = {};
        if (value !== 3) {
            const customSearch = Object.assign({}, this.state.dataTable.customSearch, {
                name: 'task_type',
                pattern: 'equal',
                value,
            });
            dataTable = Object.assign({}, this.state.dataTable, {
                forbiddenDefaultBtns: false,
                customSearch,
                onlyTrashed: false,
                identify: value,
                timeStamp: (new Date).getTime(),
            });
        } else {
            dataTable = Object.assign({}, this.state.dataTable, {
                forbiddenDefaultBtns: true,
                customSearch: false,
                onlyTrashed: true,
                identify: value,
                timeStamp: (new Date).getTime(),
            });
        }

        this.setState({
            dataTable,
        });
    }
    render() {
        const customSearch = this.state.dataTable.customSearch;
        return (
            <div>
                <Radio
                    labelName="每日任务"
                    name="task_type"
                    value="1"
                    checked={customSearch.value === 1}
                    onChange={this.typeChange}
                />
                <Radio
                    labelName="成就任务"
                    name="task_type"
                    value="2"
                    checked={customSearch.value === 2}
                    onChange={this.typeChange}
                />
                <hr />
                <DataTable
                    config={this.state.dataTable}
                />
            </div>
        );
    }
}
BbsTask.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

BbsTask.defaultProps = {
}

export default connect()(BbsTask);