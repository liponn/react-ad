import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ImgBox, Card, Status, Popover, Pagination } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { REDEEM_LIST, REDEEM_ADD, REDEEM_EXPORT, REDEEM_DOWNLOAD } from '../../../constants';
import RedeemAddModal from './RedeemAddModal';
import { hideModal, showModal } from '../../../actions/modal';
import { getConfig, getApi } from '../../../config/omg';
import hisotry from '../../../core/history';

class Redeem extends Component {
  constructor(props) {
    super(props);
    this.fresh = this.fresh.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.add = this.add.bind(this);
    this.list = this.list.bind(this);
    this.export = this.export.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.pageSelect = this.pageSelect.bind(this);
    const page = props.page || 1;
    const redeemTypes  = getConfig("redeemTypes");
    this.state = {
      redeemTypes,
      page,
      errorMsg: '',
    };
  }
  componentDidMount() {
    this.fresh(this.props.typeId,this.props.page);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.typeId !== nextProps.typeId || nextProps.page !== this.props.page) {
      this.list(this.props.typeId,nextProps.page);
    }
  }
  list(type,page) {
    this.props.dispatch(fetchAction({
      type: REDEEM_LIST,
      queryObj: { type,page },
      key: `${type}_${page}`,
    }));
  }
  fresh() {
    this.list(this.props.typeId,this.props.page);
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: REDEEM_ADD,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.fresh();
      }
    });
  }
  export(e) {
    const id = e.target.dataset.id;
    this.props.dispatch(fetchAction({
      type: REDEEM_EXPORT,
      queryObj: { id },
    })).then(() => (
      this.fresh()
    ));
  }
  showAddModal() {
    const modalView = <RedeemAddModal typeId={this.props.typeId} submit={this.add} />;
    this.props.dispatch(showModal(modalView));
  }
  selectChange(e) {
    const value = e.target.value;
    hisotry.push(`/redeem/${value}`);
  }
  pageSelect() {
    this.fresh()
  }
  render() {
    const key = `${this.props.typeId}_${this.props.page}`;
    const redeem = this.props.redeemList[key] || {};
    const items = redeem.data || [];
    const btn = (
      <button
        className="btn btn-info btn-sm pull-xs-right"
        onClick={this.showAddModal}
      >添加</button>
    );
    const { redeemTypes } = this.state;
    return (
      <div>
        <div>
          {Object.keys(redeemTypes).map(key => (
              <label key={`redio-${key}`} className="c-input c-radio">
                <input
                    checked={key == this.props.typeId}
                    name="main_type"
                    value={key}
                    type="radio"
                    onChange={this.selectChange}
                />
                <span className="c-indicator"></span>
                {redeemTypes[key]}
              </label>
          ))}
        </div>
        <Card title="兑换码列表" btn={btn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>{this.props.typeId == 1 ? '口令': '名称'}</th>
                <th>奖品类型</th>
                <th>奖品ID</th>
                <th>数量</th>
                <th hidden={this.props.typeId == 1 ? '': 'hidden'}>已领取数量</th>
                <th hidden={this.props.typeId == 1 ? 'hidden': ''}>兑换码文件</th>
                <th>状态</th>
                <th>过期时间</th>
                <th hidden={this.props.typeId == 1 ? 'hidden': ''}>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{getConfig('awardTypes', item.award_type)}</td>
                <td>{item.award_id}</td>
                <td>{item.number}</td>
                <td hidden={this.props.typeId == 1 ? '': 'hidden'}>{item.use_num}</td>
                <td hidden={this.props.typeId == 1 ? 'hidden': ''}><span hidden={item.export_status !== 1}>生成中</span><a hidden={item.file_name === '' || item.export_status === 1} href={`${getApi(REDEEM_DOWNLOAD)}?file=${item.file_name}`} target="_blank" >下载</a></td>
                <td>{getConfig('redeemStatus', item.status)}</td>
                <td>{item.expire_time}</td>
                <td hidden={this.props.typeId == 1 ? 'hidden': ''}>
                  <button hidden={item.export_status === 1 || item.status !== 2} className="btn btn-sm btn-primary-outline" data-id={item.id} onClick={this.export}>{item.export_status === 0 ? '生成下载文件' : '重新生成下载文件'}</button>
                  <button className="btn btn-sm btn-info-outline" data-id={item.id} onClick={this.fresh}>刷新</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </Card>
        <Pagination currentPage={redeem.current_page} lastPage={redeem.last_page} />
      </div>
    );
  }
}

Redeem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  redeemList: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
}

Redeem.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const redeemList = omg[REDEEM_LIST] || {};
  return {
    redeemList,
  };
})(Redeem);

