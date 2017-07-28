import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Status, ImgBox,Pagination, Card, } from '../../tools';
import { FEEFLOWCONFIG_LIST ,FEEFLOWCONFIG_ADD,FEEFLOWCONFIG_UP_STATUS} from '../../../constants';
import { showModal, hideModal } from '../../../actions/modal';
import { fetchAction } from '../../../actions/omg';
import { getConfig } from '../../../config/omg';
import hisotry from '../../../core/history';
import AddModal from './AddModal';

class Feeflowconfig extends Component {
    constructor(props) {
        super(props);
        this.freshData = this.freshData.bind(this);
        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        this.showAdd = this.showAdd.bind(this);
        this.showUpdate = this.showUpdate.bind(this);
        this.selectChange = this.selectChange.bind(this);
        this.upStatus = this.upStatus.bind(this);
        this.pageSelect = this.pageSelect.bind(this);
        const feeFlowConfigTypes = getConfig('feeFlowConfigTypes');
        const page = props.page || 1;
        this.state = {
          feeFlowConfigTypes,
          page,
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
    freshData(type,page) {
        const queryObj = { type: type,page:page };
        this.props.dispatch(fetchAction({
          type: FEEFLOWCONFIG_LIST,
          key: `${type}_${page}`,
          queryObj,
        }));
    }
    showAdd() {
        const modalView = <AddModal type={this.props.type} submit={this.add} />;
        this.props.dispatch(showModal(modalView));
    }
    add(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(fetchAction({
            type: FEEFLOWCONFIG_ADD,
            method: 'POST',
            formData,
        })).then((json) => {
            if (json.error_code === 0) {
                this.props.dispatch(hideModal(true));
                hisotry.push(`/feeflowconfig/${formData.get('type')}`);
                this.freshData(formData.get('type'),this.props.page);
            } else {
                this.setState({
                    addErrorMsg: json.data.error_msg,
                });
            }
        });
    }
    update(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.dispatch(fetchAction({
            type: FEEFLOWCONFIG_ADD,
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
        const modalView = <AddModal type={this.props.type} item={item} id={id} submit={this.update} />;
        this.props.dispatch(showModal(modalView));
    }
    upStatus(e) {
        const id = $(e.target).data('id');
        const thisType = $(e.target).data('status');
        const formData = new FormData;
        formData.append('id', id);
        formData.append('type', thisType)
        this.props.dispatch(fetchAction({
            type: FEEFLOWCONFIG_UP_STATUS,
            method: 'POST',
            formData,
        })).then(() => {
            this.freshData(this.props.type,this.props.page);
        });
    }
    selectChange(e) {
        const value = e.target.value;
        hisotry.push(`/feeflowconfig/${value}`);
    }
    pageSelect(page) {
        this.setState({
            page,
        });
        this.freshData(this.props.type,page)
    }
  render() {
    const { feeConfigs, type } = this.props;
    const { feeFlowConfigTypes } = this.state;
    const btn = (
        <button
            className="btn btn-info btn-sm pull-xs-right"
            onClick={this.showAdd}
        >添加</button>
    );
    const key = `${type}_${this.state.page}`;
      console.log(key);
    const feeconfiglist = feeConfigs[key] || {};
    const items = feeconfiglist.data || [];
      console.log(feeconfiglist);
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
        <Card title='分享配置' btn={btn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>序号</th>
                <th>商品名称</th>
                <th>商品类型</th>
                <th>运营商类型</th>
                <th>出售价格</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{getConfig('feeFlowConfigChildTypes', item.type)}</td>
                  <td>{getConfig('feeFlowConfigChildOperator', item.operator_type)}</td>
                  <td>{item.price}</td>
                  <td>{item.status === 1 ? '已上线' : '已下线' }</td>
                  <td>
                    <button hidden={+item.status === 1} className="btn btn-sm btn-success-outline" data-id={item.id} data-status="1" onClick={this.upStatus}>上线</button>
                    <button hidden={+item.status == 0} className="btn btn-sm btn-warning-outline" data-id={item.id}  data-status="2" onClick={this.upStatus}>下线</button>
                    <button className="btn btn-sm btn-success-outline" data-id={item.id} data-index={index} onClick={this.showUpdate}>编辑</button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </Card>
          <Pagination currentPage={feeconfiglist.current_page} lastPage={feeconfiglist.last_page} onClick={this.pageSelect} unurl={true} />
      </div>
    );
  }
}

Feeflowconfig.propTypes = {
  feeConfigs: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  page: PropTypes.number,
}

Feeflowconfig.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const feeConfigs = omg[FEEFLOWCONFIG_LIST] || {};
  return {
    feeConfigs,
  };
})(Feeflowconfig);
