import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ImgBox, Card, Radio, Status } from '../../tools';
import { showModal } from '../../../actions/modal';
import { fetchAction } from '../../../actions/omg';
import { STARTUP_LIST, STARTUP_DISABLE, STARTUP_ENABLE, STARTUP_DEL, STARTUP_UP, STARTUP_DOWN} from '../../../constants';
import StartupAddModal from '../../modals/StartupAddModal';
import { getConfig } from '../../../config/omg';
import hisotry from '../../../core/history';


class Startup extends Component {
  constructor(props) {
    super(props);
    this.showAddModal = this.showAddModal.bind(this);
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.freshData = this.freshData.bind(this);
    this.del = this.del.bind(this);
    const types = getConfig('startupTypes');
    this.state = {
      types,
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
    const modalView = <StartupAddModal type={this.props.type} callback={this.freshData} />;
    this.props.dispatch(showModal(modalView));
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
  freshData(type) {
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
        <Card title="banner图" btn={btn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>跳转URL</th>
                <th>图片1</th>
                <th>图片2</th>
                <th>图片3</th>
                <th>图片4</th>
                <th>状态</th>
                <th>开始时间</th>
                <th>结束时间</th>
                <th>发布时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><a title={item.target_url} href={item.target_url} target="_blank">查看</a></td>
                <td><ImgBox src={item.img1} /></td>
                <td><ImgBox src={item.img2} /></td>
                <td><ImgBox src={item.img3} /></td>
                <td><ImgBox src={item.img4} /></td>
                <td><Status status={+item.enable} /></td>
                <td>{item.online_time}</td>
                <td>{item.offline_time}</td>
                <td>{item.release_at}</td>
                <td>
                  <button hidden={+item.enable === 1} className="btn btn-sm btn-success-outline" data-id={item.id} onClick={this.enable}>上线</button>
                  <button hidden={+item.enable === 0} className="btn btn-sm btn-warning-outline" data-id={item.id} onClick={this.disable}>下线</button>
                  <button className="btn btn-sm btn-info-outline" data-id={item.id} onClick={this.up}>上移</button>
                  <button className="btn btn-sm btn-info-outline" data-id={item.id} onClick={this.down}>下移</button>
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
