import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal} from '../../../actions/modal';
import { CHANNEL_LIST, CHANNEL_DEL, CHANNEL_INFO, CHANNEL_PUT, CHANNEL_ADD } from '../../../constants';
import { Modal, Button,  Alert, Input, Submit, Card } from '../../tools';


class Channel extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
    this.fresh = this.fresh.bind(this);
    this.del = this.del.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
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
  handleChange(e) {
    const target = e.target;
    this.setState({
      errorMsg: '',
      [target.name]: target.value ,
    });
  }
  fresh() {
    this.props.dispatch(fetchAction({
      type: CHANNEL_LIST,
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
  showAddModal() {
    this.props.dispatch(showModal(<ChannelAddModal submit={this.add} errorMsg={this.state.addErrorMsg} />));
  }
  del(e) {
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
    const { items } = this.props;
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
                <th>中文说明</th>
                <th>前缀</th>
                <th>渠道名称</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.pre}</td>
                <td>{item.alias_name}</td>
                <td>
                  <button className="btn btn-danger-outline btn-sm" data-id={item.id} onClick={this.del}>删除</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </Card>
      </div>
    );
  }
}
Channel.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

Channel.defaultProps = {
  items: [],
}


export default connect(state => {
  const { omg } = state;
  const { data } = omg[CHANNEL_LIST] || [];
  return {
    items: data,
  };
})(Channel);

class ChannelAddModal extends Component {
  constructor (props) {
    super(props);
  }
  static propTypes = {
    submit: PropTypes.func.isRequired,
  }
  render() {
    return (
      <Modal title="添加渠道">
        <Alert msg={this.props.errorMsg} />
        <form onSubmit={this.props.submit}>
          <Input labelName="中文说明" name="name" />
          <Input labelName="渠道名称" placeholder="只能包含英文和数字" name="alias_name" />
          <Submit />
        </form>
      </Modal>
    );
  }
}
