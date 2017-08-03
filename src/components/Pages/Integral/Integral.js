import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal} from '../../../actions/modal';
import { INTEGRAL_LIST, INTEGRAL_DEL, INTEGRAL_OPERATION, INTEGRAL_UP, INTEGRAL_DOWN, INTEGRAL_ENABLE, INTEGRAL_DISABLE } from '../../../constants';
import { Card, Pagination, ImgBox, Status} from '../../tools';
import AddModal from './AddModal';
import { getConfig } from '../../../config/omg';


class Integral extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.fresh = this.fresh.bind(this);
    this.list = this.list.bind(this);
    this.del = this.del.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);

    this.showAddModal = this.showAddModal.bind(this);
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
      type: INTEGRAL_LIST,
      queryObj: { page },
      key: page,
    }));
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: INTEGRAL_OPERATION,
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
      type: INTEGRAL_OPERATION,
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
    this.props.dispatch(showModal(<AddModal submit={this.add} errorMsg={this.state.addErrorMsg} />));
  }
  showUpdateModal(e) {
    const index = e.target.dataset.index;
    const item = this.items[index];
    this.props.dispatch(showModal(<AddModal update item={item} submit={this.update} errorMsg={this.state.addErrorMsg} />));
  }
  up(e) {
    const id = e.target.dataset.id;
    this.props.dispatch(fetchAction({
      type: INTEGRAL_UP,
      method: 'GET',
      suffix: `/${id}`,
    })).then(() => {
      this.fresh();
    });
  }
  down(e) {
    const id = e.target.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: INTEGRAL_DOWN,
      method: 'GET',
      suffix: `/${id}`,
    })).then(() => {
      this.fresh();
    });
  }
  enable(e) {
    const id = e.target.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: INTEGRAL_ENABLE,
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
      type: INTEGRAL_DISABLE,
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
      type: INTEGRAL_DEL,
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
      <button
        onClick={this.showAddModal}
        className="btn btn-sm btn-info pull-right"
      >
        <i className="fa fa-plus">商品</i>
      </button>
    );
    return (
      <div>

        <Card title="积分商城" btn={addBtn}>
          <table className="table table-bordered m-b-0 table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>奖品名称</th>
                <th>积分</th>
                <th>单用户兑换上限</th>
                <th>配图</th>
                <th>配图(小)</th>
                <th>总量</th>
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
                <td>{item.integral}</td>
                <td>{item.user_quantity || '不限'}</td>
                <td><ImgBox src={item.photo} /></td>
                <td><ImgBox src={item.photo_min} /></td>
                <td>{item.send_quantity}/{item.total_quantity}</td>
                <td>{item.start_time}</td>
                <td>{item.end_time}</td>
                <td><Status status={+item.status} /></td>
                <td>
                  <button hidden={+item.status === 1} className="btn btn-sm btn-success-outline" data-id={item.id} onClick={this.enable}>上线</button>
                  <button hidden={+item.status === 0} className="btn btn-sm btn-warning-outline" data-id={item.id} onClick={this.disable}>下线</button>
                  <button hidden={!item.status} className="btn btn-sm btn-info-outline" data-id={item.id} onClick={this.up}>上移</button>
                  <button hidden={!item.status} className="btn btn-sm btn-info-outline" data-id={item.id} onClick={this.down}>下移</button>
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
Integral.propTypes = {
  itemList: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
}

Integral.defaultProps = {
  itemList: {},
}

export default connect(state => {
  const { omg } = state;
  const itemList = omg[INTEGRAL_LIST] || {};
  return {
    itemList,
  };
})(Integral);
