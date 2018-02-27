import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal} from '../../../actions/modal';
import { IDIOM_LIST, IDIOM_DEL, IDIOM_INFO, IDIOM_PUT, IDIOM_ADD } from '../../../constants';
import { Card, Pagination} from '../../tools';
import AddModal from './AddModal';
import { getConfig } from '../../../config/omg';


class Idiom extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.fresh = this.fresh.bind(this);
    this.list = this.list.bind(this);
    this.del = this.del.bind(this);
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
      type: IDIOM_LIST,
      queryObj: { page },
      key: page,
    }));
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: IDIOM_ADD,
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
      type: IDIOM_PUT,
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
    console.dir(index);
    const item = this.items[index];
    this.props.dispatch(showModal(<AddModal update item={item} submit={this.update} errorMsg={this.state.addErrorMsg} />));
  }
  del(e) {
    if (!confirm('确认删除吗?')) {
      return false;
    }
    const id = e.target.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: IDIOM_DEL,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.fresh();
      } else {
        this.setState({ errorMsg: res.data.error_msg });
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
        <i className="fa fa-plus">成语</i>
      </button>
    );
    return (
      <div>
        <Card title="成语列表" btn={addBtn}>
          <table className="table table-bordered m-b-0 table-hover">
            <thead>
            <tr>
              <th>id</th>
              <th>标题</th>
              <th>内容</th>
              <th>优先级</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.contents}</td>
                <td>{item.priority}</td>
                <td>{item.start_at}</td>
                <td>{item.end_at}</td>
                <td>
                  <button className="btn btn-info-outline btn-sm" data-id={item.id} data-index={index} onClick={this.showUpdateModal}>编辑</button>
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
Idiom.propTypes = {
  itemList: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
}

Idiom.defaultProps = {
  itemList: {},
}

export default connect(state => {
  const { omg } = state;
  const itemList = omg[IDIOM_LIST] || {};
  return {
    itemList,
  };
})(Idiom);


