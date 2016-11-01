import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ImgBox, Card, Radio, Status } from '../../tools';
import { showModal, hideModal } from '../../../actions/modal';
import { fetchAction } from '../../../actions/omg';
import { STARTUP_LIST, STARTUP_DISABLE, STARTUP_ENABLE, STARTUP_DEL, STARTUP_UP, STARTUP_DOWN, STARTUP_PUT, STARTUP_ADD } from '../../../constants';
import StartupAddModal from './StartupAddModal';
import { getConfig } from '../../../config/omg';
import hisotry from '../../../core/history';


class Startup extends Component {
  constructor(props) {
    super(props);
    this.showAddModal = this.showAddModal.bind(this);
    this.showUpdateModal = this.showUpdateModal.bind(this);
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.fresh = this.fresh.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.list = this.list.bind(this);
    this.del = this.del.bind(this);
    const types = getConfig('startupTypes');
    this.state = {
      types,
    };
  }
  componentDidMount() {
    this.fresh();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      this.list(nextProps.type);
    }
  }

  showAddModal() {
    const modalView = <StartupAddModal type={this.props.type} submit={this.add} />;
    this.props.dispatch(showModal(modalView));
  }
  showUpdateModal(e) {
    const index = e.target.dataset.index;
    const item = this.items[index];
    const modalView = <StartupAddModal update item={item} type={this.props.type} submit={this.update} />;
    this.props.dispatch(showModal(modalView));
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: STARTUP_ADD,
      method: 'POST',
      formData,
    })).then((json) => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.fresh();
      } else {
        alert(json.data.error_msg);
      }
    });
  }
  update(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: STARTUP_PUT,
      method: 'POST',
      formData,
    })).then((json) => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.fresh();
      } else {
        alert(json.data.error_msg);
      }
    });   
  }
  disable(e) {
    const id = $(e.target).data('id');    
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: STARTUP_DISABLE,
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
      type: STARTUP_ENABLE,
      method: 'POST',
      formData,
    })).then(() => {
      this.freshData(this.props.type);
    });
  }
  fresh() {
    this.list(this.props.type);
  }
  list(type) {
    this.props.dispatch(fetchAction({
      type: STARTUP_LIST,
      suffix: `/${type}`,
      key: type,
    }));
  }
  up(e) {
    const id = $(e.target).data('id');
    this.props.dispatch(fetchAction({
      type: STARTUP_UP,
      suffix: `/${id}`,
    })).then(() => {
      this.freshData(this.props.type);
    });  
  }
  down(e) {
    const id = $(e.target).data('id');
    this.props.dispatch(fetchAction({
      type: STARTUP_DOWN,
      suffix: `/${id}`,
    })).then(() => {
      this.freshData(this.props.type);
    });
  }
  del(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: STARTUP_DEL,
      method: 'POST',
      formData,
    })).then(() => (this.freshData(this.props.type)));
  }

  selectChange(e) {
    const value = e.target.value;
    hisotry.push(`/startup/${value}`);
  }
  render() {
    const { startups, type } = this.props;
    const { types } = this.state;
    const btn = (
      <button
        className="btn btn-info btn-sm pull-xs-right"
        onClick={this.showAddModal}
      >添加</button>
    );
    const items = startups[type] || [];
    this.items = items;
    return (
      <div>
        <div>
          {Object.keys(types).map(key => (
            <Radio
              key={`redio-${key}`}
              checked={key === type}
              labelName={types[key]}
              value={key}
              onChange={this.selectChange}
              name="banner-type"
            />
          ))}
        </div>
        <hr />
        <Card title="启动图" btn={btn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>名称</th>
                <th hidden>跳转URL</th>
                <th>{getConfig('startupImages', `${this.props.type}:1`)}</th>
                <th>{getConfig('startupImages', `${this.props.type}:2`)}</th>
                <th>{getConfig('startupImages', `${this.props.type}:3`)}</th>
                <th>{getConfig('startupImages', `${this.props.type}:4`)}</th>
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
                <td hidden><a title={item.target_url} href={item.target_url} target="_blank">查看</a></td>
                <td><ImgBox src={item.img1} /></td>
                <td><ImgBox src={item.img2} /></td>
                <td><ImgBox src={item.img3} /></td>
                <td><ImgBox src={item.img4} /></td>
                <td>{item.online_time}</td>
                <td>{item.offline_time}</td>
                <td><Status status={+item.enable} /></td>
                <td>
                  <button hidden={+item.enable === 1} className="btn btn-sm btn-success-outline" data-id={item.id} onClick={this.enable}>上线</button>
                  <button hidden={+item.enable === 0} className="btn btn-sm btn-warning-outline" data-id={item.id} onClick={this.disable}>下线</button>
                  <button className="btn btn-sm btn-info-outline" data-id={item.id} onClick={this.up}>上移</button>
                  <button className="btn btn-sm btn-info-outline" data-id={item.id} onClick={this.down}>下移</button>
                  <button className="btn btn-sm btn-success-outline" data-id={item.id} data-index={index} onClick={this.showUpdateModal}>编辑</button>
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

Startup.propTypes = {
  startups: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

Startup.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const startups = omg[STARTUP_LIST] || {};
  return {
    startups,
  };
})(Startup);
