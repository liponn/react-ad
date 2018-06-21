import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Popover } from '../../tools';
import { AWARD_LIST, AWARD_UPDATE, AWARD_ADD, AWARD_COUPON_TOTAL, AWARD_COUPON_EXPORT, AWARD_COUPON_DOWNLOAD, AWARD_INVALIDE_COUPON } from '../../../constants';
import { fetchAction } from '../../../actions/omg';
import CouponAddModal from './CouponAddModal';
import { showModal, hideModal } from '../../../actions/modal';
import { getApi } from '../../../config/omg'

class Coupon extends Component {
  constructor(props) {
    super(props);
    this.showAddModal = this.showAddModal.bind(this);
    this.showUpdateModal = this.showUpdateModal.bind(this);
    this.pageSelect = this.pageSelect.bind(this);
    this.fresh = this.fresh.bind(this);
    this.list = this.list.bind(this);
    this.add = this.add.bind(this);
    this.showNum = this.showNum.bind(this);
    this.update = this.update.bind(this);
    this.export = this.export.bind(this);
    this.disable = this.disable.bind(this);
    const page = props.page || 1;
    this.state = {
      page,
    };
  }
  componentDidMount() {
    this.fresh();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.setState({
        page: nextProps.page,
      })
      this.list(nextProps.page);
    }
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: AWARD_ADD,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.fresh();
      } else {
        this.setState({
          errorMsg: json.data.error_msg,
        });
      }
    });
  }
  showNum(e) {
    const id = e.target.dataset.id;
    const formData = new FormData();
    formData.append('coupon_id', id);
    this.props.dispatch(fetchAction({
      type: AWARD_COUPON_TOTAL,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        alert(`未送出: ${json.data.notUse || 0} 个,已送出: ${json.data.use || 0} 个`);
      } else {
        alert(json.data.error_msg);
      }
    });
  }
  update(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: AWARD_UPDATE,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.fresh();
      } else {
        this.setState({
          errorMsg: json.data.error_msg,
        });
      }
    });
  }
  fresh() {
    this.list(this.state.page);
  }
  list(page) {
    const formData = new FormData;
    formData.append('award_type', this.props.type);
    this.props.dispatch(fetchAction({
      type: AWARD_LIST,
      method: 'POST',
      queryObj: { page },
      formData,
      key: `${this.props.type}_${page}`,
    }));
  }
  pageSelect(page) {
    this.setState({
      page,
    });
    this.list(page);
  }

  showUpdateModal(e) {
    const index = e.target.dataset.index;
    const id = +e.target.dataset.id;
    const item = this.items[index] || {};
    if (item.id !== id) {
      return alert('获取奖品信息失败,请刷新重试');
    }
    this.props.dispatch(showModal(<CouponAddModal item={item} update submit={this.update} />));
  }

  showAddModal() {
    this.props.dispatch(showModal(<CouponAddModal submit={this.add} />));
  }
  export(e) {
    const id = e.target.dataset.id;
    this.props.dispatch(fetchAction({
      type: AWARD_COUPON_EXPORT,
      method: 'GET',
      queryObj: { id },
    })).then(json => {
      if (json.error_code === 0) {
        this.fresh();
      } else {
        alert(json.data.error_msg);
      }
    });
  }
  getDownloadUrl(file) {
    const requestUrl = getApi(AWARD_COUPON_DOWNLOAD);
    return `${requestUrl}?file=${file}`;
  }
  disable(e) {
    const index = e.target.dataset.index;
    const item = this.items[index];
    if (!confirm(`本条奖品将不能再使用,你确定禁用: ${item.name} 吗。`)) {
      return;
    }
    const id = e.target.dataset.id;
    this.props.dispatch(fetchAction({
      type: AWARD_INVALIDE_COUPON,
      method: 'POST',
      queryObj: { id },
    })).then(json => {
      if (json.error_code === 0) {
        this.fresh();
      } else {
        alert(json.data.error_msg);
      }
    });
  }
  render() {
    const btn = (
      <button
        hidden={this.props.modal}
        className="btn btn-info btn-sm pull-xs-right"
        onClick={this.showAddModal}
      >添加</button>
    );
    const { modal, addAward = false } = this.props;
    const key = `${this.props.type}_${this.state.page}`;
    const awardList = this.props.awardList || {};
    const award = awardList[key] || {};
    const items = award.data || [];
    this.items = items;
    return (
      <Card title="优惠券" btn={btn}>
        <table className="table m-b-0 table-bordered">
          <thead>
            <tr><th>id</th><th>名称</th><th>导入状态</th><td>消息模板</td><td hidden={modal}>导出</td><td>操作</td></tr>
          </thead>
          <tbody>
          {items.map((item, index) => {
            let addAwardBtn = false;
            if (modal) {
              addAwardBtn = (
                <button
                  data-type={this.props.type}
                  data-id={item.id}
                  hidden={!modal || item.is_del}
                  className="btn btn-info btn-sm"
                  onClick={addAward}
                >添加</button>
              );
            }
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.import_status === 2 ? '成功' : '导入中'}</td>
                <td>
                  <Popover name="站内信" title="站内信" content={!item.mail ? '无' : `${item.mail} `} />
                  <Popover name="短信" title="短信" content={!item.message ? '无' : `${item.message} `} />
                </td>

                <td hidden={modal}>
                  <button hidden={item.export_status !== 0} className="btn btn-success-outline btn-sm" data-id={item.id} onClick={this.export}>{'生成导出文件'}</button>
                  <button hidden={item.export_status !== 1} className="btn btn-sm" disabled data-id={item.id} >{'生成中...'}</button>
                  <button hidden={item.export_status !== 1} className="btn btn-success-outline btn-sm" data-id={item.id}  onClick={this.fresh}>{'刷新'}</button>
                  <button hidden={item.export_status !== 2} className="btn btn-success-outline btn-sm" data-id={item.id} onClick={this.export}>{'重新生成'}</button>
                  <a hidden={item.export_status !== 2} href={this.getDownloadUrl(item.file)} target="_blank">下载</a>
                </td>
                <td>
                  <button className="btn btn-info-outline btn-sm" data-id={item.id} onClick={this.showNum}>查看数量</button>
                  <button className="btn btn-success-outline btn-sm" data-id={item.id} data-index={index} onClick={this.showUpdateModal}>编辑</button>
                  <button hidden={!item.is_del} className="btn btn-danger btn-sm" disabled>已禁用</button>
                  <button hidden={modal || item.is_del} className="btn btn-danger-outline btn-sm" data-id={item.id} data-index={index} onClick={this.disable}>禁用</button>
                  {addAwardBtn}
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </Card>
    );
  }
}

Coupon.propTypes = {
  dispatch: PropTypes.func.isRequired,
  awards: PropTypes.object.isRequired,
  modal: PropTypes.bool,
  addAward: PropTypes.func,
  page: PropTypes.number,
  item: PropTypes.object,
}

Coupon.defaultProps = {
  awards: {},
  modal: false,
}

export default connect( state => {
  const { omg } = state;
  const awardList = omg[AWARD_LIST] || {};
  return {
    awardList,
  };
})(Coupon);
