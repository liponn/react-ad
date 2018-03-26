import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ImgBox, Card, Radio, Status, Modal, Alert, DateTimeInput, Input, Submit, Textarea, Select, Popover } from '../../tools';
import { showModal, hideModal } from '../../../actions/modal';
import { fetchAction } from '../../../actions/omg';
import {APP_DISABLE, APP_ENABLE, APP_ADD, APP_PUT, APP_INFO, APP_UPDATE_LOG, APP_DEL } from '../../../constants';
import { getConfig } from '../../../config/omg';
import hisotry from '../../../core/history';


class AppUpdate extends Component {
  constructor(props) {
    super(props);
    this.showAddModal = this.showAddModal.bind(this);
    this.showUpdateModal = this.showUpdateModal.bind(this);
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
    this.freshData = this.freshData.bind(this);
    this.del = this.del.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    const types = getConfig('appUpdateTypes');
    this.state = {
      types,
      errorMsg: '',
      addErrorMsg: '',
    };
  }
  componentDidMount() {
    this.freshData(this.props.type);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      this.freshData(nextProps.type);
    }
  }

  showAddModal() {
    const modalView = (<AppUpdateAddModal
      submit={this.add}
      errorMsg={this.state.addErrorMsg}
      type={this.props.type}
      callback={this.freshData}
    />);
    this.props.dispatch(showModal(modalView));
  }
  
  showUpdateModal(e) {
    const index = e.target.dataset.index;
    const item = this.items[index];
    const modalView = (<AppUpdateAddModal
      submit={this.update}
      errorMsg={this.state.addErrorMsg}
      type={this.props.type}
      item={item}
      update
      callback={this.freshData}
    />);
    this.props.dispatch(showModal(modalView));
  }

  disable(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: APP_DISABLE,
      method: 'POST',
      formData,
    })).then(() => {
      this.freshData(this.props.type);
    });
  }
  enable(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: APP_ENABLE,
      method: 'POST',
      formData,
    })).then(() => {
      this.freshData(this.props.type);
    });
  }
  freshData(type) {
    this.props.dispatch(fetchAction({
      type: APP_UPDATE_LOG,
      suffix: `/${type}`,
      key: type,
    }));
  }
  del(e) {
    const id = $(e.target).data('id');
    if(!confirm('确认删除吗?')) {
      return;
    }
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: APP_DEL,
      method: 'POST',
      formData,
    })).then(() => (this.freshData(this.props.type)));
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: APP_ADD,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.freshData(this.props.type);
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
      type: APP_PUT,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.freshData(this.props.type);
      } else {
        this.setState({
          addErrorMsg: json.data.error_msg,
        });
        this.showAddModal();
      }
    });
  }

  selectChange(e) {
    const value = e.target.value;
    hisotry.push(`/appupdate/${value}`);
  }
  render() {
    const { updates, type } = this.props;
    const { types } = this.state;
    const btn = (
      <button
        className="btn btn-info btn-sm pull-xs-right"
        onClick={this.showAddModal}
      >添加</button>
    );
    const updatesList = updates[type] || {};
    const items = updatesList.data || [];
    this.items = items;
    return (
      <div>
        <div>
          {Object.keys(types).map(key => (
            <Radio
              key={`redio-${key}`}
              checked={+key === type}
              labelName={types[key]}
              value={key}
              onChange={this.selectChange}
              name="banner-type"
            />
          ))}
        </div>
        <hr />
        <Card title="升级配置列表" btn={btn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>版本号</th>
                <th>强制升级</th>
                <th>更新时间</th>
                <th>下载链接</th>
                <th>安装包大小</th>
                <th>升级描述</th>
                <td>状态</td>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.version}</td>
                <td>{getConfig('forceTypes', item.force)}</td>
                <td>{item.update_time}</td>
                <td><a title={item.url} href={item.url} target="_blank">查看</a></td>
                <td>{item.size}</td>
                <td><Popover title="升级描述" content={`${item.description} `} /></td>
                <td><Status status={+item.toggle} /></td>
                <td>
                  <button hidden={+item.toggle === 1} className="btn btn-sm btn-success-outline" data-id={item.id} onClick={this.enable}>上线</button>
                  <button hidden={+item.toggle === 0} className="btn btn-sm btn-warning-outline" data-id={item.id} onClick={this.disable}>下线</button>
                  <button data-index={index} className="btn btn-sm btn-success-outline" data-id={item.id} onClick={this.showUpdateModal}>编辑</button>
                  <button className="btn btn-sm btn-danger-outline" data-id={item.id} onClick={this.del}>删除</button>
                </td>
              </tr>
            )) }
            </tbody>
          </table>
        </Card>
      </div>
    );
  }
}

AppUpdate.propTypes = {
  updates: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

AppUpdate.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const updates = omg[APP_UPDATE_LOG] || {};
  return {
    updates,
  };
})(AppUpdate);

class AppUpdateAddModal extends Component {
  constructor(props) {
    super(props);
    const forceTypes = getConfig('forceTypes');
    this.state = {
      forceTypes,
    };
  }
  static defaultProps = {
    item: {},  
  }
  static propTypes = {
    type: PropTypes.number.isRequired,
    submit: PropTypes.func.isRequired,
    errorMsg: PropTypes.string.isRequired,
    item: PropTypes.any,
    update: PropTypes.boolean,
  }
  render() {
    return (
      <Modal title={this.props.update ? '更新升级配置' : '添加升级配置'}>
        <Alert msg={this.props.errorMsg} />
        <form method="post" ref="addForm" onSubmit={this.props.submit}>
          <input type="hidden" name="platform" value={this.props.type} />
          <input type="hidden" name="id" value={this.props.item.id || ''} />
          <Input labelName="版本号" name="version" defaultValue={this.props.item.version || ''} />
          <Select labelName="强制升级" name="force" options={this.state.forceTypes} defaultValue={this.props.item.force || ''} />
          <Input labelName="更新时间" placeholder="YYYY-MM-DD" name="update_time" defaultValue={this.props.item.update_time || ''} />
          <Input labelName="下载链接" name="url" defaultValue={this.props.item.url || ''} />
          <Input labelName="安装包大小" name="size" defaultValue={this.props.item.size || ''}/>
          <Textarea labelName="升级描述" name="description" defaultValue={this.props.item.description || ''} />
          <Submit />
        </form>
      </Modal>
    );
  }
}
