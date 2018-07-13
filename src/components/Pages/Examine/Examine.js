import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal} from '../../../actions/modal';
import { EXAMINECONFIG_ADD, EXAMINECONFIG_LIST, EXAMINECONFIG_UP_STATUS } from '../../../constants';
import { Card, Pagination, ImgBox, Status, Radio} from '../../tools';
import AddModal from './AddModal';
import hisotry from '../../../core/history';
import { getConfig } from '../../../config/omg';


class Examine extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        this.fresh = this.fresh.bind(this);
        this.list = this.list.bind(this);
        this.enable = this.enable.bind(this);
        this.disable = this.disable.bind(this);
        const examineAppTypes = getConfig('examineAppTypes');
        this.showAddModal = this.showAddModal.bind(this);
        this.showUpdateModal = this.showUpdateModal.bind(this);
        this.selectChange = this.selectChange.bind(this);
        this.pageSelect = this.pageSelect.bind(this);
        const page = props.page || 1;
        this.state = {
            page,
            examineAppTypes,
            name: '',
            alias_name: '',
            pre: '',
            errorMsg: '',
            addErrorMsg: '',
        };
    }
    componentDidMount() {
        this.fresh();
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.typeId !== nextProps.typeId || nextProps.page !== this.props.page) {
            this.setState({
                page: nextProps.page,
            })
            this.list(nextProps.typeId,nextProps.page);
        }
    }
    handleChange(e) {
        const target = e.target;
        this.setState({
            errorMsg: '',
            [target.name]: target.value ,
        });
    }
    fresh() {
        this.list(this.props.typeId,this.props.page);
    }
    list(type,page) {
        this.props.dispatch(fetchAction({
            type: EXAMINECONFIG_LIST,
            queryObj: { type,page },
            key: `${type}_${page}`,
        }));
    }
    add(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(fetchAction({
            type: EXAMINECONFIG_ADD,
            method: 'POST',
            formData,
        })).then(json => {
            if (json.error_code === 0) {
                this.fresh();
                this.props.dispatch(hideModal(true));
            } else {
                this.setState({
                    addErrorMsg: json.data.error_msg,
                });
                this.showAddModal();
            }
        });
    }
    update(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(fetchAction({
            type: EXAMINECONFIG_ADD,
            method: 'POST',
            formData,
        })).then(json => {
            if (json.error_code === 0) {
                this.props.dispatch(hideModal(true));
                this.fresh();
            } else {
                alert(json.data.error_msg);
            }

        });
    }
    showAddModal() {
        this.props.dispatch(showModal(<AddModal typeId={this.props.typeId} submit={this.add} errorMsg={this.state.addErrorMsg} />));
    }
    showUpdateModal(e) {
        const index = e.target.dataset.index;
        const item = this.items[index];
        this.props.dispatch(showModal(<AddModal update typeId={this.props.typeId} item={item} submit={this.update} errorMsg={this.state.addErrorMsg} />));
    }
    enable(e) {
        const id = e.target.dataset.id;
        const formData = new FormData;
        formData.append('id', id);
        formData.append('status', 1);
        this.props.dispatch(fetchAction({
            type: EXAMINECONFIG_UP_STATUS,
            method: 'POST',
            formData,
        })).then(() => {
            this.fresh();
        });
    }
    disable(e) {
        const id = e.target.dataset.id;
        const formData = new FormData;
        formData.append('id', id);
        formData.append('status', 0);
        this.props.dispatch(fetchAction({
            type: EXAMINECONFIG_UP_STATUS,
            method: 'POST',
            formData,
        })).then(() => {
            this.fresh();
        });
    }
    selectChange(e) {
        const value = e.target.value;
        hisotry.push(`/examine/${value}`);
    }
    pageSelect(page) {
        this.setState({
            page,
        });
        this.fresh(this.props.typeId,page)
    }
    render() {
        const key = `${this.props.typeId}_${this.props.page}`;
        const itemObj = this.props.itemList[key] || {};
        const items = itemObj.data || [];
        const { examineAppTypes } = this.state;
        this.items = items;
        const addBtn = (
            <button
                onClick={this.showAddModal}
                className="btn btn-sm btn-info pull-right"
            >
                <i className="fa fa-plus">添加</i>
            </button>
        );
        return (
            <div>
                <div>
                    {Object.keys(examineAppTypes).map(key => (
                        <label key={`redio-${key}`} className="c-input c-radio">
                            <input
                                checked={key == this.props.typeId}
                                name="main_type"
                                value={key}
                                type="radio"
                                onChange={this.selectChange}
                            />
                            <span className="c-indicator"></span>
                            {examineAppTypes[key]}
                        </label>
                    ))}
                </div>
                <Card title='过审配置' btn={addBtn}>
                    <table className="table m-b-0 table-bordered">
                        <thead>
                        <tr>
                            <th hidden={this.props.typeId == 1 ? 'hidden': ''}>包名</th>
                            <th>版本号</th>
                            <th>现公司名称显示</th>
                            <th>信息披露是否可点</th>
                            <th>底部信息区是否可点</th>
                            <th>新手指引图标是否可点</th>
                            <th>首页上线活动图</th>
                            <th>发现页上线活动图</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item, index) => (
                            <tr key={item.id}>
                                <td hidden={this.props.typeId == 1 ? 'hidden': ''}>{item.app_name}</td>
                                <td>{item.versions}</td>
                                <td>{item.company_name}</td>
                                <td>{item.disclosure_click === 0 ? '否' : '是' }</td>
                                <td>{item.bottom_click === 0 ? '否' : '是' }</td>
                                <td>{item.novice_click === 0 ? '否' : '是' }</td>
                                <td>{item.home_banner}</td>
                                <td>{item.discover_banner}</td>
                                <td>{item.status === 0 ? '已禁用' : '已开启' }</td>
                                <td>
                                    <button hidden={+item.status === 1} className="btn btn-sm btn-success-outline" data-id={item.id} data-status="1" onClick={this.enable}>启用</button>
                                    <button hidden={+item.status == 0} className="btn btn-sm btn-warning-outline" data-id={item.id}  data-status="2" onClick={this.disable}>禁用</button>
                                    <button className="btn btn-sm btn-success-outline" data-id={item.id} data-index={index} onClick={this.showUpdateModal}>编辑</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Card>
                <Pagination currentPage={itemObj.current_page} lastPage={itemObj.last_page} onClick={this.pageSelect} unurl={true} />
            </div>
        );
    }
}
Examine.propTypes = {
    itemList: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
}

Examine.defaultProps = {
    itemList: {},
}

export default connect(state => {
    const { omg } = state;
    const itemList = omg[EXAMINECONFIG_LIST] || {};
    return {
        itemList,
    };
})(Examine);
