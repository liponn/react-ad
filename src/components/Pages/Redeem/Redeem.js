import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ImgBox, Card, Status, Popover, Pagination } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { REDEEM_LIST, REDEEM_ADD, REDEEM_EXPORT, REDEEM_DOWNLOAD } from '../../../constants';
import RedeemAddModal from './RedeemAddModal';
import { hideModal, showModal } from '../../../actions/modal';
import { getConfig, getApi } from '../../../config/omg';


class Redeem extends Component {
  constructor(props) {
    super(props);
    this.fresh = this.fresh.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.add = this.add.bind(this);
    this.list = this.list.bind(this);
    this.export = this.export.bind(this);
    this.state = {
      errorMsg: '',
    };
  }
  componentDidMount() {
    this.fresh(this.props.page);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.list(nextProps.page);
    }
  }
  list(page) {
    this.props.dispatch(fetchAction({
      type: REDEEM_LIST,
      queryObj: { page },
      key: page,
    }));
  }
  fresh() {
    this.list(this.props.page);
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
    const modalView = <RedeemAddModal submit={this.add} />;
    this.props.dispatch(showModal(modalView));
  }
  render() {
    const redeem = this.props.redeemList[this.props.page] || {};
    const items = redeem.data || [];
    const btn = (
      <button
        className="btn btn-info btn-sm pull-xs-right"
        onClick={this.showAddModal}
      >添加</button>
    );
    return (
      <div>
        <Card title="兑换码列表" btn={btn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>名称</th>
                <th>奖品类型</th>
                <th>奖品ID</th>
                <th>数量</th>
                <th>兑换码文件</th>
                <th>状态</th>
                <th>过期时间</th>
                <th>操作</th>
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
                <td><span hidden={item.export_status !== 1}>生成中</span><a hidden={item.file_name === '' || item.export_status === 1} href={`${getApi(REDEEM_DOWNLOAD)}?file=${item.file_name}`} target="_blank" >下载</a></td>
                <td>{getConfig('redeemStatus', item.status)}</td>
                <td>{item.expire_time}</td>
                <td>
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

