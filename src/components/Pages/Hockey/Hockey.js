import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal} from '../../../actions/modal';
import { HOCKEYCONFIG_LIST, HOCKEYCARD_OPERATION, HOCKEYGUESS_ADD, HOCKEYGUESS_OPERATION, HOCKEYGUESS_SENDOPENRESULT } from '../../../constants';
import { Card, Pagination, ImgBox, Status, Radio} from '../../tools';
import AddCardModal from './AddCardModal';
import AddGuessModal from './AddGuessModal';
import hisotry from '../../../core/history';
import { getConfig } from '../../../config/omg';


class Hockey extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.opCard = this.opCard.bind(this);
        this.addGuess = this.addGuess.bind(this);
        this.update = this.update.bind(this);
        this.fresh = this.fresh.bind(this);
        this.list = this.list.bind(this);
        this.enable = this.enable.bind(this);
        this.disable = this.disable.bind(this);
        const hockeyTypes = getConfig('hockeyTypes');
        this.showAddModal = this.showAddModal.bind(this);
        this.showUpdateGuessModal = this.showUpdateGuessModal.bind(this);
        this.selectChange = this.selectChange.bind(this);
        this.pageSelect = this.pageSelect.bind(this);
        const page = props.page || 1;
        this.state = {
            page,
            hockeyTypes,
            addErrorMsg: '',
            errorMsg: '',
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
            type: HOCKEYCONFIG_LIST,
            queryObj: { type,page },
            key: `${type}_${page}`,
        }));
    }
    opCard(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(fetchAction({
            type: HOCKEYCARD_OPERATION,
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
    addGuess(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(fetchAction({
            type: HOCKEYGUESS_ADD,
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
            type: HOCKEYGUESS_OPERATION,
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
        if(this.props.typeId == 1) {
            this.props.dispatch(showModal(<AddCardModal typeId={this.props.typeId} submit={this.opCard} errorMsg={this.state.addErrorMsg}/>));
        }
        if(this.props.typeId == 2) {
            this.props.dispatch(showModal(<AddGuessModal typeId={this.props.typeId} submit={this.addGuess} errorMsg={this.state.addErrorMsg} />));
        }
    }
    showUpdateGuessModal(e) {//竞猜修改
        const index = e.target.dataset.index;
        const item = this.items[index];
        this.props.dispatch(showModal(<AddGuessModal update typeId={this.props.typeId} item={item} submit={this.update} errorMsg={this.state.addErrorMsg} />));
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
        hisotry.push(`/hockey/${value}`);
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
        const { hockeyTypes } = this.state;
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
                    {Object.keys(hockeyTypes).map(key => (
                        <label key={`redio-${key}`} className="c-input c-radio">
                            <input
                                checked={key == this.props.typeId}
                                name="main_type"
                                value={key}
                                type="radio"
                                onChange={this.selectChange}
                            />
                            <span className="c-indicator"></span>
                            {hockeyTypes[key]}
                        </label>
                    ))}
                </div>
                {this.props.typeId === 1 &&
                <Card title='曲棍球配置' btn={addBtn}>
                    <table className="table m-b-0 table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>奖品名</th>
                            <th>奖品简介</th>
                            <th>奖品图片</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.award_name}</td>
                                <td>{item.info}</td>
                                <td>{item.img}</td>
                                <td>
                                    <button hidden={+item.status === 1} className="btn btn-sm btn-success-outline" data-id={item.id} data-status="1" onClick={this.enable}>启用</button>
                                    <button hidden={+item.status == 0} className="btn btn-sm btn-warning-outline" data-id={item.id}  data-status="2" onClick={this.disable}>禁用</button>
                                    <button className="btn btn-sm btn-success-outline" data-id={item.id} data-index={index} onClick={this.showAddCardModal}>编辑</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Card>
                }
                {this.props.typeId === 2 &&
                <Card title='曲棍球配置' btn={addBtn}>
                    <table className="table m-b-0 table-bordered">
                        <thead>
                        <tr>
                            <th>日程</th>
                            <th>第一场对阵</th>
                            <th>第一场比分</th>
                            <th>第一场结果</th>
                            <th>第二场对阵</th>
                            <th>第二场比分</th>
                            <th>第二场结果</th>
                            <th>第三场对阵</th>
                            <th>第三场比分</th>
                            <th>第三场结果</th>
                            <th>开奖状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.match_date}</td>
                                <td>{item.first_master}-{item.first_visiting}</td>
                                <td>{item.first_score}</td>
                                <td>{item.first_result}</td>
                                <td>{item.second_master}-{item.second_visiting}</td>
                                <td>{item.second_score}</td>
                                <td>{item.second_result}</td>
                                <td>{item.third_master}-{item.third_visiting}</td>
                                <td>{item.third_score}</td>
                                <td>{item.third_relsult == 1 ? '主胜' : item.third_relsult == 1 ? '平' : item.third_relsult == 2 ? '发送完成':'--'}</td>
                                <td>{item.open_status == 0 ? '未开奖' : item.open_status == 1 ? '发奖中' : item.open_status == 2 ? '发送完成':'--'}</td>
                                <td>
                                    <button hidden={+item.status === 1} className="btn btn-sm btn-success-outline" data-id={item.id} data-status="1" onClick={this.enable}>启用</button>
                                    <button hidden={+item.status == 0} className="btn btn-sm btn-warning-outline" data-id={item.id}  data-status="2" onClick={this.disable}>禁用</button>
                                    <button className="btn btn-sm btn-success-outline" data-id={item.id} data-index={index} onClick={this.showUpdateGuessModal}>编辑</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Card>
                }
                <Pagination currentPage={itemObj.current_page} lastPage={itemObj.last_page} onClick={this.pageSelect} unurl={true} />

            </div>
        );
    }
}
Hockey.propTypes = {
    itemList: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
}

Hockey.defaultProps = {
    itemList: {},
}

export default connect(state => {
    const { omg } = state;
    const itemList = omg[HOCKEYCONFIG_LIST] || {};
    return {
        itemList,
    };
})(Hockey);
