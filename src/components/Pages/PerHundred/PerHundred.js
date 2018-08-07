import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal} from '../../../actions/modal';
import { PERHUNDRED_LIST, PERHUNDRED_OPERATION, PERHUNDRED_STATUS} from '../../../constants';
import { Card, Pagination, ImgBox, Status } from '../../tools';
import AddModal from './AddModal';
import { getConfig } from '../../../config/omg';


class PerHundred extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.fresh = this.fresh.bind(this);
    this.list = this.list.bind(this);
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
  fresh() {
    this.list(this.props.page);
  }
  list(page) {
    this.props.dispatch(fetchAction({
      type: PERHUNDRED_LIST,
      queryObj: { page },
      key: page,
    }));
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: PERHUNDRED_OPERATION,
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
      type: PERHUNDRED_OPERATION,
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
  enable(e) {
    const id = e.target.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    formData.append('status', 1);
    this.props.dispatch(fetchAction({
      type: PERHUNDRED_STATUS,
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
  disable(e) {
    const id = e.target.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    formData.append('status', 0);
    this.props.dispatch(fetchAction({
      type: PERHUNDRED_STATUS,
      method: 'POST',
      formData,
    })).then(() => {
      this.fresh();
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
          <i className="fa fa-plus">添加</i>
        </button>, ,
      ]
    );
    return (
      <div>
        <Card title="逢百活动" btn={addBtn}>
          <table className="table table-bordered m-b-0 table-hover">
            <thead>
              <tr>
                <th>期号</th>
                <th>终极大奖</th>
                <th>终极大奖配图(小)</th>
                <th>终极大奖配图(大)</th>
                <th>一马当先奖名称</th>
                <th>一马当先奖配图（小）</th>
                <th>一马当先奖配图（大）</th>
                <th>一锤定音奖名称</th>
                <th>一锤定音奖配图（小）</th>
                <th>一锤定音奖配图（大）</th>
                <th>阳光普照奖名称</th>
                <th>阳光普照奖配图（小）</th>
                <th>阳光普照奖配图（大）</th>
                <th>开奖号数量</th>
                <th>开始时间</th>
                <th>生成状态</th>
                <th>上线状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.ultimate_award}</td>
                <td><ImgBox src={item.ultimate_img1} /></td>
                <td><ImgBox src={item.ultimate_img2} /></td>
                <td>{item.first_award}</td>
                <td><ImgBox src={item.first_img1} /></td>
                <td><ImgBox src={item.first_img2} /></td>
                <td>{item.last_award}</td>
                <td><ImgBox src={item.last_img1} /></td>
                <td><ImgBox src={item.last_img2} /></td>
                <td>{item.sunshine_award}</td>
                <td><ImgBox src={item.sunshine_img1} /></td>
                <td><ImgBox src={item.sunshine_img2} /></td>
                <td>{item.numbers}</td>
                <td>{item.start_time}</td>
                <td>{item.insert_status == 0 ? "未开始": item.insert_status == 1 ? "导入中" : "完成导入"}</td>
                <td><Status status={+item.status} /></td>
                <td>
                  <button hidden={+item.status === 1} className="btn btn-sm btn-success-outline" data-id={item.id} onClick={this.enable}>上线</button>
                  <button hidden={+item.status === 0} className="btn btn-sm btn-warning-outline" data-id={item.id} onClick={this.disable}>下线</button>
                  <button className="btn btn-success-outline btn-sm" data-id={item.id} data-index={index} onClick={this.showUpdateModal}>编辑</button>
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
PerHundred.propTypes = {
  itemList: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
}

PerHundred.defaultProps = {
  itemList: {},
}

export default connect(state => {
  const { omg } = state;
  const itemList = omg[PERHUNDRED_LIST] || {};
  return {
    itemList,
  };
})(PerHundred);
