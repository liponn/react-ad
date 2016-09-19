import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, Popover } from '../../tools';
import { AWARD_LIST, AWARD_UPDATE, AWARD_ADD, AWARD_COUPON_TOTAL } from '../../../constants';
import { fetchAction } from '../../../actions/omg';
import CouponAddModal from './CouponAddModal';
import { showModal, hideModal } from '../../../actions/modal';

class Coupon extends Component {
  constructor(props) {
    super(props);
    this.showAddModal = this.showAddModal.bind(this);
    this.fresh = this.fresh.bind(this);
    this.list = this.list.bind(this);
    this.add = this.add.bind(this);
    this.showNum = this.showNum.bind(this);
    this.update = this.update.bind(this);
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
            <tr><th>id</th><th>名称</th><th>导入状态</th><td>消息模板</td><td>操作</td></tr>
          </thead>
          <tbody>
          {items.map((item) => {
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
                <td>{item.import_status === 2 ? '导入成功' : '导入中'}</td>
                <td>
                  <Popover name="站内信" title="站内信" content={!item.mail ? '无' : `${item.mail} `} />
                  <Popover name="短信" title="短信" content={!item.message ? '无' : `${item.message} `} />
                </td>
                <td>
                  <button hidden={modal} className="btn btn-success-outline btn-sm" data-id={item.id} onClick={this.showNum}>查看数量</button>
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