import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import { Pagination, ImgBox } from '../../tools';
import AddModal from './AddModal';

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.list = this.list.bind(this);
        this.changePage = this.changePage.bind(this);
        this.changeLength = this.changeLength.bind(this);
        this.searchFocus = this.searchFocus.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
        this.showUpdateModel = this.showUpdateModel.bind(this);
        this.showAddModal = this.showAddModal.bind(this);
        this.update = this.update.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.changeOrder = this.changeOrder.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.state = this.initState(props);
    }
    componentDidMount() {
        this.list();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.config.timeStamp !== this.props.config.timeStamp) {
            this.setState(this.initState(nextProps), () => { this.list(); });
        }
    }

    initState(props) {
        return Object.assign({
            draw: 0,
        }, props.config);
    }


    list() {
        const queryObj = {};
        const columns = this.state.columns;
        const order = this.state.order;
        const draw = this.state.draw +1;
        const customSearch = this.state.customSearch || false;
        const onlyTrashed = this.state.onlyTrashed || false;
        const withs = this.state.withs || false;
        queryObj.draw = draw;
        for (let i = 0; i < columns.length; i++){
            queryObj[`columns[${i}][data]`] = columns[i].name;
            queryObj[`columns[${i}][name]`] = columns[i].name;
            queryObj[`columns[${i}][searchable]`] = columns[i].searchable.toString();
            queryObj[`columns[${i}][orderable]`] = columns[i].orderable.toString();
            queryObj[`columns[${i}][search][value]`] = columns[i].search.value;
            queryObj[`columns[${i}][search][regex]`] = columns[i].search.regex.toString();
        }
        if (customSearch) {
            queryObj['customSearch[name]'] = customSearch.name;
            queryObj['customSearch[pattern]'] = customSearch.pattern;
            queryObj['customSearch[value]'] = customSearch.value;
        }
        if (onlyTrashed) {
            queryObj.onlyTrashed = 1;
        }
        if (withs) {
            for (let i = 0; i < withs.length; i++) {
                queryObj[`withs[${i}]`] = withs[i];
            }
        }
        queryObj['order[0][column]'] = order.column;
        queryObj['order[0][dir]'] = order.dir;
        queryObj.start = this.state.start;
        queryObj.length = this.state.length;
        queryObj['search[value]'] = this.state.search.value;
        queryObj['search[regex]'] = this.state.search.regex.toString();
        queryObj._ = new Date().getTime();

        this.setState({
            draw,
        })
        const request =  {
            type: this.state.listType,
            queryObj,
        };
        if (typeof this.state.identify !== 'undefined') {
            request.key = this.state.identify;
        }
        this.props.dispatch(fetchAction(request));
    }

    changePage(page) {
        const preState = this.state;
        this.setState({
            start: preState.length * (page - 1),
        }, () => (this.list()));
    }
    changeLength(e) {
        const length = e.currentTarget.value;
        this.setState({
            length,
            start: 0,
        }, () => (this.list()));
    }

    searchFocus(e) {
        e.currentTarget.focus();
        e.currentTarget.select();
    }

    searchChange(e) {
        e.preventDefault();
        const search = this.state.search;
        const value = e.target.value;
        search.value = value;
        this.setState({
            search,
            start: 0,
        });
    }

    changeOrder(e) {
        const index = +e.currentTarget.dataset.index;
        const order = this.state.order;
        if (order.column === index) {
            order.dir = order.dir === 'asc' ? 'desc' : 'asc';
        } else {
            order.column = index;
            order.dir = 'desc';
        }
        this.setState({
            order,
        }, () => {this.list()});
    }
    changeSearch(e) {
        e.preventDefault();
        this.list();
    }
    showAddModal() {
        this.props.dispatch(
            showModal(
                <AddModal
                    submit={this.add}
                    columns={this.state.columns}
                    errorMsg={this.state.addErrorMsg}
                />
            )
        );
    }
    showUpdateModel(e) {
        const index = e.target.dataset.index;
        const omg = this.props.omg;

        let dtList = {}
        if (typeof this.state.identify === 'undefined') {
            dtList = omg[this.state.listType] || {};
        } else {
            const tempDtList = omg[this.state.listType] || [];
            dtList = tempDtList[this.state.identify] || {};
        }
        const items = dtList.data || [];
        const preItem = items[index] || {};
        const columns = this.state.columns;
        const item = {}
        for (let i = 0; i < columns.length; i++) {
            item[columns[i].name] = preItem[i];
        }
        this.props.dispatch(
            showModal(
                <AddModal
                    update
                    item={item}
                    columns={this.state.columns}
                    submit={this.update}
                    errorMsg={this.state.addErrorMsg}
                />
            )
        );
    }

    add(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(fetchAction({
            type: this.state.addType,
            method: 'POST',
            formData,
        })).then(json => {
            if (json.error_code === 0) {
                this.list();
                this.props.dispatch(hideModal(true));
            } else {
                this.list();
                this.setState({
                    addErrorMsg: json.data.error_msg,
                });
                alert(json.data.error_msg);
            }
        });
    }

    update(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(fetchAction({
            type: this.state.updateType,
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

    delete(e) {
        const id = e.currentTarget.dataset.id;
        if (!confirm(`确认删除 ID:${id} 吗?`)) {
            return;
        }
        const formData = new FormData;
        formData.append('id', id);
        this.props.dispatch(fetchAction({
            type: this.state.deleteType,
            method: 'POST',
            formData,
        })).then(json => {
            if (json.error_code === 0) {
                this.list();
            } else {
                this.setState({ errorMsg: json.error_msg });
            }
        });
    }


    render() {
        const omg = this.props.omg;
        let dtList  = {}
        if (typeof this.state.identify === 'undefined') {
            dtList = omg[this.state.listType] || {};
        } else {
            const tempDtList = omg[this.state.listType] || [];
            dtList = tempDtList[this.state.identify] || {};
        }
        const items = dtList.data || [];
        const filterNum = dtList.recordsFiltered || 0;
        return (
            <div>
                <div className="card clearfix">
                    <div className="card-block clearfix">
                        <h4 className="card-title">
                            <div className="pull-left">
                                {this.state.title}
                                <span className="total">
                  ({this.state.start + items.length}/{filterNum})
                </span>
                            </div>
                            <div hidden={filterNum <= this.state.length} className="pull-left m-l-1">
                                <select
                                    className="custom-select"
                                    defaultValue={this.state.length}
                                    onChange={this.changeLength}
                                >
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="80">80</option>
                                </select>
                            </div>
                            <div className="pull-left">
                                <Pagination
                                    onClick={this.changePage}
                                    currentPage={parseInt(this.state.start / this.state.length, 10) + 1}
                                    lastPage={Math.ceil(filterNum / this.state.length)}
                                    unurl
                                />
                            </div>

                            <button
                                onClick={this.showAddModal}
                                className="btn btn-sm btn-info pull-right"
                            >
                                <i className="fa fa-plus">添加</i>
                            </button>
                            <form className="form-inline m-x-1 pull-right" onSubmit={this.changeSearch}>
                                <input
                                    className="form-control form-control-sm mr-sm-2"
                                    type="text"
                                    value={this.state.search.value}
                                    onChange={this.searchChange}
                                    onClick={this.searchFocus}
                                    onBlur={this.changeSearch}
                                    placeholder="搜索 ↫"
                                />
                            </form>

                        </h4>

                    </div>
                    <table className="table table-bordered m-b-0 table-hover data-table">
                        <thead>
                        <tr>
                            {this.state.columns.map((item, index) => (
                                <th data-index={index} key={`th_${index}`} onClick={this.changeOrder}>
                                    {item.cname}
                                    <span
                                        className="pull-right arrow"
                                        disabled={!(this.state.order.column === index && this.state.order.dir === 'asc')}
                                    >↑</span>
                                    <span
                                        disabled={!(this.state.order.column === index && this.state.order.dir === 'desc')}
                                        className="pull-right arrow"
                                    >↓</span>
                                </th>
                            ))}
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item, index) => {
                            const tempItem = {};
                            return (<tr key={`item_${index}`}>
                                {item.map((value, index2) => {
                                    const columns = this.state.columns[index2] || {};
                                    tempItem[columns.name] = value;
                                    switch (columns.tableType) {
                                        case 'img_box':
                                            return (<td key={`fileld_${index}_${index2}`}>
                                                <ImgBox src={value} />
                                            </td>);
                                        case 'object':
                                            return (<td key={`fileld_${index}_${index2}`}>
                                                {columns.tableShow && columns.tableShow(value)}
                                            </td>);
                                        case 'radio':
                                            return (<td key={`fileld_${index}_${index2}`}>
                                                {value ? "是" : "否"}
                                            </td>);
                                        default:
                                            return <td key={`fileld_${index}_${index2}`}>{value}</td>;
                                    }
                                })}
                                <td>
                                    {typeof this.state.getBtns === 'undefined' ?
                                        false : this.state.getBtns(tempItem, this.list)}
                                    <button
                                        className="btn btn-info-outline btn-sm"
                                        hidden={this.state.forbiddenDefaultBtns || false}
                                        data-index={index}
                                        onClick={this.showUpdateModel}
                                    >编辑</button>
                                    <button
                                        className="btn btn-danger-outline btn-sm"
                                        hidden={this.state.forbiddenDefaultBtns || this.state.noDelete || false}
                                        data-index={index}
                                        data-id={item[0]}
                                        onClick={this.delete}
                                    >删除</button>
                                </td>
                            </tr>);
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

DataTable.propTypes = {
    dispatch: PropTypes.func.isRequired,
    title: PropTypes.string,
    listType: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired,
};

DataTable.defaultProps = {
    title: '列表',
}

export default connect(state => {
    const { omg } = state;
    return {
        omg,
    };
})(DataTable);