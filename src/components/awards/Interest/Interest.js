import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Popover, Pagination } from '../../tools';
import { AWARD_LIST, AWARD_ADD, AWARD_UPDATE, AWARD_DEL } from '../../../constants';
import { fetchAction } from '../../../actions/omg';
import InterestAddModal from './InterestAddModal';
import { getConfig } from '../../../config/omg';
import { showModal, hideModal } from '../../../actions/modal';

class Interest extends Component {
  constructor(props) {
    super(props);
    this.showAddModal = this.showAddModal.bind(this);
    this.showUpdateModal = this.showUpdateModal.bind(this);
    this.pageSelect = this.pageSelect.bind(this);
    this.fresh = this.fresh.bind(this);
    this.list = this.list.bind(this);
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
    this.update = this.update.bind(this);
    const types = getConfig('interestTypes');
    const timeTypes = getConfig('interestTimeTypes');
    const page = props.page || 1;
    this.state = {
      page,
      types,
      timeTypes,
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
  del(e) {
    const name = e.target.dataset.name;
    const id = +e.target.dataset.id;
    const formData = new FormData();
    formData.append('award_type', this.props.type);
    formData.append('award_id', id);
    if (!confirm(`你确定删除:${name}吗？该操作不可逆`)){
      return;
    }
    this.props.dispatch(fetchAction({
      type: AWARD_DEL,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.fresh();
      } else {
        alert(json.data.error_msg);
      }
    });
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

  showAddModal() {
    this.props.dispatch(showModal(<InterestAddModal submit={this.add} />));
  }
  showUpdateModal(e) {
    const index = e.target.dataset.index;
    const id = +e.target.dataset.id;
    const item = this.items[index] || {};
    if (item.id !== id) {
      alert('获取奖品信息失败,请刷新重试');
      return;
    }
    this.props.dispatch(showModal(<InterestAddModal item={item} update submit={this.update} />));
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
      <div>
        <Card title="加息券" btn={btn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr><th>id</th><th>名称</th><th>加息值</th><th>加息时长</th><th>有效期</th><th>投资门槛</th><th>项目类型</th><th>项目期限</th><th>产品ID</th><th>平台限制</th><th>限制说明</th><th>消息模板</th><th>操作</th></tr>
            </thead>
            <tbody>
            {items.map((item, index) => {
              let addAwardBtn = false;
              if (modal) {
                addAwardBtn = (
                  <button
                    data-type={this.props.type}
                    data-id={item.id}
                    hidden={!modal}
                    className="btn btn-info btn-sm"
                    onClick={addAward}
                  >添加</button>
                );
              }
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{`${(item.rate_increases * 100).toFixed(2)}%`}</td>
                  <td>{
                    item.rate_increases_type === 1 ? '全周期' :
                    item.rate_increases_type === 2 ? `${item.rate_increases_time}天` :
                    item.rate_increases_type === 3 ? [<span key="filed_start">开始: {item.rate_increases_start}</span>, <br key="filed_br" />, <span key="filed_end">结束: {item.rate_increases_end}</span>] :
                    item.rate_increases_type === 4 ? `${item.rate_increases_time}月` : '未知'
                  }</td>
                  <td>{+item.effective_time_type === 1 ? `${item.effective_time_day}天` : [<span key="filed_start2">开始: {item.effective_time_start}</span>, <br key="filed_br2" />, <span key="filed_end2">结束: {item.effective_time_end}</span>]}</td>
                  <td>{item.investment_threshold ? `${item.investment_threshold}元` : '不限'}</td>
                  <td>{getConfig('projectTypes', item.project_type)}</td>
                  <td>{`${item.project_duration_type === 1 ? '' : item.project_duration_time}${getConfig('projectDurationTypes', item.project_duration_type)}`}</td>
                  <td>{item.product_id === '' ? '不限' : item.product_id}</td>
                  <td>{getConfig('platformTypes', item.platform_type)}</td>
                  <td><Popover title="限制说明" content={item.limit_desc === '' ? '无' : `${item.limit_desc} `} /></td>
                  <td>
                    <Popover name="站内信" title="站内信" content={!item.mail ? '无' : `${item.mail} `} />
                    <Popover name="短信" title="短信" content={!item.message ? '无' : `${item.message} `} />
                  </td>
                  <td>
                    <button hidden={modal} className="btn btn-success-outline btn-sm" data-id={item.id} data-index={index} onClick={this.showUpdateModal}>编辑</button>
                    {addAwardBtn}
                    <button hidden={true || modal} className="btn btn-danger-outline btn-sm" data-id={item.id} data-name={item.name} onClick={this.del}>删除</button>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </Card>
        <Pagination currentPage={award.current_page} lastPage={award.last_page} onClick={this.pageSelect} unurl={modal} />
      </div>
    );
  }
}

Interest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  awardList: PropTypes.object.isRequired,
  modal: PropTypes.bool,
  addAward: PropTypes.func,
  type: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
}

Interest.defaultProps = {
  modal: false,
}

export default connect( state => {
  const { omg } = state;
  const awardList = omg[AWARD_LIST] || {};
  return {
    awardList,
  };
})(Interest);
