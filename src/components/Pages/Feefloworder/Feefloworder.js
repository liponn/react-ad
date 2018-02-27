import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Status, ImgBox,Pagination, Card,DateTimeInput, } from '../../tools';
import { FEEFLOWCONFIG_ORDER_LIST ,FEEFLOWCONFIG_ORDER_REPAIR,FEEFLOWCONFIG_ORDER_STATUS_UPDATE,FEEFLOWCONFIG_ORDER_EXPORT} from '../../../constants';
import { showModal, hideModal } from '../../../actions/modal';
import { fetchAction } from '../../../actions/omg';
import { getConfig } from '../../../config/omg';
import hisotry from '../../../core/history';
import UpdateModal from './UpdateModal';

class Feefloworder extends Component {
    constructor(props) {
        super(props);
        this.freshData = this.freshData.bind(this);
        this.search = this.search.bind(this);
        this.update = this.update.bind(this);
        this.showUpdate = this.showUpdate.bind(this);
        this.pageSelect = this.pageSelect.bind(this);
        this.OrderRepair = this.OrderRepair.bind(this);
        this.exports = this.exports.bind(this);
        this.reset = this.reset.bind(this);
        const feeFlowConfigTypes = getConfig('feeFlowConfigTypes');
        const page = props.page || 1;
        this.state = {
          feeFlowConfigTypes,
          page,
          searchObj: {},
        };
    }
    static items = [];
    componentDidMount() {
        this.freshData(this.props.type,this.props.page);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.type !== nextProps.type || nextProps.page !== this.props.page) {
            this.setState({
                page: nextProps.page,
            })
            this.freshData(nextProps.type,nextProps.page);
        }
    }
    freshData(type,page,searchObj) {
        const queryObj = searchObj || this.state.searchObj;
        queryObj.page = page;
        queryObj.type = type;
        this.props.dispatch(fetchAction({
          type: FEEFLOWCONFIG_ORDER_LIST,
          key: `${type}_${page}`,
          queryObj,
        }));
    }
    search(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const searchObj = {};
        searchObj.start_time = formData.get('start_time')
        searchObj.end_time = formData.get('end_time')
        searchObj.user_id = formData.get('user_id')
        searchObj.order_id = formData.get('order_id')
        searchObj.phone = formData.get('phone')
        searchObj.debit_status = formData.get('debit_status')
        searchObj.order_status = formData.get('order_status')
        searchObj.repair_status = formData.get('repair_status')

        const location = hisotry.getCurrentLocation();
        hisotry.push({ ...location, query: Object.assign({}, location.query, { page: 1 }) });
        this.setState({
            searchObj,
        });
        this.freshData(this.props.type,this.props.page, searchObj);
    }
    update(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(fetchAction({
            type: FEEFLOWCONFIG_ORDER_STATUS_UPDATE,
            method: 'POST',
            formData,
        })).then((json) => {
            if (json.error_code === 0) {
                this.props.dispatch(hideModal(true));
                this.freshData(this.props.type,this.props.page);
            } else {
                this.setState({
                    addErrorMsg: json.data.error_msg,
                });
            }
        });
    }
    showUpdate(e) {
        const id = e.target.dataset.id;
        const index = e.target.dataset.index;
        const item = this.items[index] || {};
        const modalView = <UpdateModal type={this.props.type} item={item} id={id} submit={this.update} />;
        this.props.dispatch(showModal(modalView));
    }
    selectChange(e) {
        const value = e.target.value;
        hisotry.push(`/feefloworder/${value}`);
    }
    OrderRepair(e) {
        const id = $(e.target).data('id');
        console.log(id);
        const queryObj = { id:id };
        this.props.dispatch(fetchAction({
            type: FEEFLOWCONFIG_ORDER_REPAIR,
            method: 'POST',
            queryObj,
        })).then(() => {
            this.freshData(this.props.type,this.props.page);
        });
    }

    exports() {
        const queryObj = this.state.searchObj;
        this.props.dispatch(fetchAction({
            type: FEEFLOWCONFIG_ORDER_EXPORT,
            key: this.props.type,
            queryObj,
        })).then((json) => {
            if (json.error_code === 0) {
                const url = json.data.url;
                window.open(url);
            } else {
                this.setState({
                    addErrorMsg: json.data.error_msg,
                });
            }
        });
    }

    pageSelect(page) {
        this.setState({
            page,
        });
        this.freshData(this.props.type,page)
    }
    reset() {
        this.setState({
            searchObj: {},
        });
        this.freshData(this.props.type,this.props.page, {});
    }
  render() {
    const { feeOrders, type } = this.props;
    const { feeFlowConfigTypes } = this.state;
    const key = `${type}_${this.state.page}`;
    const feeorderlist = feeOrders[key] || {};
    const items = feeorderlist.data || [];
    this.items = items;
    return (
      <div>
        <div>
          {Object.keys(feeFlowConfigTypes).map(key => (
              <label key={`redio-${key}`} className="c-input c-radio">
                <input
                    checked={key === type}
                    name="main_type"
                    value={key}
                    type="radio"
                    onChange={this.selectChange}
                />
                <span className="c-indicator"></span>
                {feeFlowConfigTypes[key]}
              </label>
          ))}
        </div>
        <hr />
          <form className="form-inline m-b-1" onSubmit={this.search} onReset={this.reset}>
              <div className="form-group">
                  <DateTimeInput  labelName="开始时间"  name="start_time" />
                  <DateTimeInput  labelName="结束时间"  name="end_time" />
              </div>
              <br />
              <br />
              <div className="form-group">
                  <input type="number" name="user_id" className="form-control" placeholder="用户ID" />
              </div>&nbsp;
              <div className="form-group">
                  <input name="order_id" className="form-control" placeholder="订单ID" />
              </div>&nbsp;
              <div className="form-group">
                  <input type="number" name="phone" className="form-control" placeholder="手机号" />
              </div>&nbsp;
              <div className="form-group">
                  <select name="debit_status" className="form-control">
                      <option value="-1" >扣款状态</option>
                      <option value="0" >未扣款</option>
                      <option value="1" >已扣款</option>
                  </select>
              </div>&nbsp;
              <div className="form-group">
                  <select name="order_status" className="form-control">
                      <option value="-1" >订单状态</option>
                      <option value="0" >未充值</option>
                      <option value="1" >正在充值</option>
                      <option value="2" >充值失败</option>
                      <option value="3" >充值成功</option>
                      <option value="4" >订单异常</option>
                  </select>
              </div>&nbsp;
              <div className="form-group">
                  <select name="repair_status" className="form-control">
                      <option value="-1" >补单状态</option>
                      <option value="0" >未补单</option>
                      <option value="1" >已补单</option>
                  </select>
              </div>&nbsp;
              <button type="submit" className="btn btn-primary">查询</button>
              <button type="button" onClick={this.exports} className="btn btn-primary">导出</button>
              <input type="reset" className="btn btn-info" value="重置" />
          </form>
        <Card title='话费流量订单列表'>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>序号</th>
                <th>订单ID</th>
                <th>用户ID</th>
                <th>商品名称</th>
                <th>充值手机号</th>
                <th>扣款状态</th>
                <th>订单状态</th>
                <th>补单状态</th>
                <th>用户扣款金额</th>
                <th>订单金额</th>
                <th>补单金额</th>
                <th>操作时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.order_id}</td>
                    <td>{item.user_id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{getConfig('feeFlowDebitStatus', item.debit_status)}</td>
                    <td>{getConfig('feeFlowOrderStatus', item.order_status)}</td>
                    <td>{getConfig('feeFlowOrderRepairStatus', item.repair_status)}</td>
                    <td>{item.amount}</td>
                    <td>{item.amount_of}</td>
                    <td>{item.amount_of}</td>
                    <td>{item.created_at}</td>
                    <td>
                        <button hidden={item.order_status == 3 ? 'hidden':''} className="btn btn-sm btn-success-outline" data-id={item.id} data-index={index} onClick={this.showUpdate}>修改状态</button>
                        <button hidden={item.order_status == 2 && item.repair_status == 0 ? '': 'hidden'} className="btn btn-sm btn-success-outline" data-id={item.id} data-index={index} onClick={this.OrderRepair}>补单</button>
                    </td>
                </tr>
            ))}
            </tbody>
          </table>
        </Card>
          <Pagination currentPage={feeorderlist.current_page} lastPage={feeorderlist.last_page} onClick={this.pageSelect} unurl={true} />
      </div>
    );
  }
}

Feefloworder.propTypes = {
  feeConfigs: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  page: PropTypes.number,
}

Feefloworder.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const feeOrders = omg[FEEFLOWCONFIG_ORDER_LIST] || {};
  const exports = omg[FEEFLOWCONFIG_ORDER_EXPORT] || {};
  return {
      feeOrders,
      exports,
  };
})(Feefloworder);
