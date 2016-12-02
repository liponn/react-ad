import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal} from '../../../actions/modal';
import { ONEYUAN_LIST, ONEYUAN_DEL, ONEYUAN_OPERATION, ONEYUAN_ENABLE, ONEYUAN_DISABLE, ONEYUAN_OPEN, ONEYUAN_AUTO_OPEN, ONEYUAN_ADD_CHANCE } from '../../../constants';
import { Card, Pagination, ImgBox, Status } from '../../tools';
import AddModal from './AddModal';
import OpenModal from './OpenModal';
import AddChanceModal from './AddChanceModal';
import { getConfig } from '../../../config/omg';


class OneYuan extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.fresh = this.fresh.bind(this);
    this.list = this.list.bind(this);
    this.del = this.del.bind(this);
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
    this.open = this.open.bind(this);
    this.autoOpen = this.autoOpen.bind(this);
    this.addChance = this.addChance.bind(this);
    this.showOpenModal = this.showOpenModal.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.showAddChanceModal = this.showAddChanceModal.bind(this);
    this.showUpdateModal = this.showUpdateModal.bind(this);
    this.state = {
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
    if (nextProps.page !== this.props.page) {
      this.list(nextProps.page);
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
    this.list(this.props.page);
  }
  list(page) {
    this.props.dispatch(fetchAction({
      type: ONEYUAN_LIST,
      queryObj: { page },
      key: page,
    }));
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: ONEYUAN_OPERATION,
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
      type: ONEYUAN_OPERATION,
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
  showAddChanceModal() {
    this.props.dispatch(showModal(<AddChanceModal submit={this.addChance} errorMsg={this.state.addErrorMsg} />));
  }
  showAddModal() {
    this.props.dispatch(showModal(<AddModal submit={this.add} errorMsg={this.state.addErrorMsg} />));
  }
  showOpenModal(e) {
    const id = e.target.dataset.id;
    this.props.dispatch(showModal(<OpenModal id={id} submit={this.open} errorMsg={this.state.addErrorMsg} />));
  }
  showUpdateModal(e) {
    const index = e.target.dataset.index;
    const item = this.items[index];
    this.props.dispatch(showModal(<AddModal update item={item} submit={this.update} errorMsg={this.state.addErrorMsg} />));
  }
  addChance(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: ONEYUAN_ADD_CHANCE,
      method: 'POST',
      formData,
    })).then(json => {
      this.props.dispatch(hideModal(true));
      this.fresh();
      alert(json.data.error_msg);
    });
  }
  open(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: ONEYUAN_OPEN,
      method: 'POST',
      formData,
    })).then(json => {
      this.props.dispatch(hideModal(true));
      this.fresh();
      alert(json.data.error_msg);
    });
  }
  autoOpen(e) {
    const id = e.target.dataset.id;
    const formData = new FormData();
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: ONEYUAN_AUTO_OPEN,
      method: 'POST',
      formData,
    })).then(json => {
      this.props.dispatch(hideModal(true));
      this.fresh();
      alert(json.data.error_msg);
    });
  }
  enable(e) {
    const id = e.target.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: ONEYUAN_ENABLE,
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
    this.props.dispatch(fetchAction({
      type: ONEYUAN_DISABLE,
      method: 'POST',
      formData,
    })).then(() => {
      this.fresh();
    });
  }
  del(e) {
    if (!confirm('确认删除吗?')) {
      return;
    }
    const id = e.target.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: ONEYUAN_DEL,
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

  render() {
    const itemObj = this.props.itemList[this.props.page] || {};
    const items = itemObj.data || [];
    this.items = items;
    const addBtn = (
      [
        <button
          onClick={this.showAddModal}
          className="btn btn-sm btn-info pull-right"
        >
          <i className="fa fa-plus">商品</i>
        </button>,
        <button
          onClick={this.showAddChanceModal}
          className="btn btn-sm btn-info pull-right"
        >
          <i className="fa fa-plus">抽奖次数</i>
        </button>,
      ]
    );
    return (
      <div>
        <Card title="一元夺宝" btn={addBtn}>
          <table className="table table-bordered m-b-0 table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>商品</th>
                <th>奖品配图</th>
                <th>总量</th>
                <th>已购买</th>
                <th>时时彩</th>
                <th>中奖码</th>
                <th>中奖用户</th>
                <th>开始时间</th>
                <th>结束时间</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><ImgBox src={item.photo} /></td>
                <td>{item.total_num}</td>
                <td>{item.buy_num}</td>
                <td>
                  {item.code ? item.code : (item.total_num === item.buy_num ? '':'-')}
                  <button hidden={item.code || item.total_num !== item.buy_num } className="btn btn-sm btn-success-outline" data-id={item.id} onClick={this.autoOpen} >自动开奖</button>
                  <button hidden={item.code || item.total_num !== item.buy_num } className="btn btn-sm btn-success-outline" data-id={item.id} onClick={this.showOpenModal} >人工开奖</button>
                </td>
                <td>{item.luck_code ? item.luck_code : '—'}</td>
                <td>{item.user_id ? item.user_id : '—'}</td>
                <td>{item.start_time}</td>
                <td>{item.end_time}</td>
                <td><Status status={+item.status} /></td>
                <td>
                  <button hidden={+item.status === 1} className="btn btn-sm btn-success-outline" data-id={item.id} onClick={this.enable}>上线</button>
                  <button hidden={+item.status === 0} className="btn btn-sm btn-warning-outline" data-id={item.id} onClick={this.disable}>下线</button>
                  <button className="btn btn-success-outline btn-sm" data-id={item.id} data-index={index} onClick={this.showUpdateModal}>编辑</button>
                  <button className="btn btn-danger-outline btn-sm" data-id={item.id} onClick={this.del}>删除</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </Card>
        <Pagination currentPage={itemObj.current_page} lastPage={itemObj.last_page} />
      </div>
    );
  }
}
OneYuan.propTypes = {
  itemList: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
}

OneYuan.defaultProps = {
  itemList: {},
}

export default connect(state => {
  const { omg } = state;
  const itemList = omg[ONEYUAN_LIST] || {};
  return {
    itemList,
  };
})(OneYuan);
