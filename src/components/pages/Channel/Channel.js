import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal} from '../../../actions/modal';
import { CHANNEL_LIST, CHANNEL_DEL, CHANNEL_INFO, CHANNEL_PUT, CHANNEL_ADD } from '../../../constants';
import { Card, Pagination} from '../../tools';
import ChannelAddModal from './ChannelAddModal';
import { getConfig } from '../../../config/omg';


class Channel extends Component {
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
      type: CHANNEL_LIST,
      queryObj: { page },
      key: page,
    }));
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: CHANNEL_ADD,
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
      type: CHANNEL_PUT,
      method: 'POST',
      formData,
    })).then(json => {
      this.props.dispatch(hideModal(true));
      this.fresh();
    });
  }
  showAddModal() {
    this.props.dispatch(showModal(<ChannelAddModal submit={this.add} errorMsg={this.state.addErrorMsg} />));
  }
  showUpdateModal(e) {
    const index = e.target.dataset.index;
    console.dir(index);
    const item = this.items[index];
    this.props.dispatch(showModal(<ChannelAddModal update item={item} submit={this.update} errorMsg={this.state.addErrorMsg} />));
  }
  del(e) {
    if (!confirm('确认删除吗?')) {
      return false;
    }
    const id = e.target.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: CHANNEL_DEL,
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
    const channel = this.props.channelList[this.props.page] || {};
    const items = channel.data || [];
    this.items = items;
    const addBtn = (
      <button
        onClick={this.showAddModal}
        className="btn btn-sm btn-info pull-right"
      >
        <i className="fa fa-plus">渠道</i>
      </button>
    );
    return (
      <div>
        <Card title="渠道列表" btn={addBtn}>
          <table className="table table-bordered m-b-0 table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>渠道名称</th>
                <th>中文说明</th>
                <th>合作模式</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.alias_name}</td>
                <td>{item.name}</td>
                <td>{getConfig('channelStatusTypes', item.coop_status)}</td>
                <td>{getConfig('channelClassTypes', item.classification)}</td>
                <td>
                  <button className="btn btn-info-outline btn-sm" data-id={item.id} data-index={index} onClick={this.showUpdateModal}>编辑</button>
                  <button className="btn btn-danger-outline btn-sm" data-id={item.id} onClick={this.del}>删除</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </Card>
        <Pagination currentPage={channel.current_page} lastPage={channel.last_page} />
      </div>
    );
  }
}
Channel.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
}

Channel.defaultProps = {
  items: [],
}


export default connect(state => {
  const { omg } = state;
  const channelList = omg[CHANNEL_LIST] || {};
  return {
    channelList,
  };
})(Channel);


