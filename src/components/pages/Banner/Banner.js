import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ImgBox, Card, Status } from '../../tools';
import { showModal } from '../../../actions/modal';
import { fetchAction } from '../../../actions/omg';
import { BANNER_LIST, BANNER_DEL, BANNER_DISABLE, BANNER_ENABLE, BANNER_UP, BANNER_DOWN } from '../../../constants';
import BannerAddModal from '../../modals/BannerAddModal';
import { getConfig } from '../../../config/omg';
import hisotry from '../../../core/history';


class Banner extends Component {
  constructor(props) {
    super(props);
    this.showAddModal = this.showAddModal.bind(this);
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.freshData = this.freshData.bind(this);
    this.del = this.del.bind(this);
    const bannerTypes = getConfig('bannerTypes');
    this.state = {
      bannerTypes,
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
  freshData(type) {
    const queryObj = { position: type };
    this.props.dispatch(fetchAction({
      type: BANNER_LIST,
      key: type,
      queryObj,
    }));
  }
  showAddModal() {
    const modalView = <BannerAddModal type={this.props.type} callback={this.freshData} />;
    this.props.dispatch(showModal(modalView));
  }
  enable(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: BANNER_ENABLE,
      method: 'POST',
      formData,
    })).then(() => {
      this.freshData(this.props.type);
    });
  }
  disable(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: BANNER_DISABLE,
      method: 'POST',
      formData,
    })).then(() => {
      this.freshData(this.props.type);
    });
  }
  up(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: BANNER_UP,
      method: 'POST',
      formData,
    })).then(() => {
      this.freshData(this.props.type);
    });
  }
  down(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: BANNER_DOWN,
      method: 'POST',
      formData,
    })).then(() => {
      this.freshData(this.props.type);
    });
  }
  del(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: BANNER_DEL,
      method: 'POST',
      formData,
    })).then(() => (this.freshData(this.props.type)));
  }

  selectChange(e) {
    const value = e.target.value;
    hisotry.push(`/banner/${value}`);
  }
  render() {
    const { banners, type } = this.props;
    const { bannerTypes } = this.state;
    const btn = (
      <button
        className="btn btn-info btn-sm pull-xs-right"
        onClick={this.showAddModal}
      >添加</button>
    );
    const banner = banners[type] || {};
    const items = banner.data || [];
    return (
      <div>
        <div>
          {Object.keys(bannerTypes).map(key => (
            <label key={`redio-${key}`} className="c-input c-radio">
              <input
                checked={key === type}
                name="banner-type"
                value={key}
                type="radio"
                onChange={this.selectChange}
              />
              <span className="c-indicator"></span>
              {bannerTypes[key]}
            </label>
          ))}
        </div>
        <hr />
        <Card title="banner图" btn={btn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>跳转URL</th>
                <th>图片预览</th>
                <th>状态</th>
                <th>开始时间</th>
                <th>结束时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item)=>(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><a title={item.img_url} href={item.img_url} target="_blank">查看</a></td>
                <td><ImgBox src={item.img_path} /></td>
                <td><Status status={+item.can_use} /></td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>
                  <button hidden={+item.can_use === 1} className="btn btn-sm btn-success-outline" data-id={item.id} onClick={this.enable}>上线</button>
                  <button hidden={+item.can_use === 0} className="btn btn-sm btn-warning-outline" data-id={item.id} onClick={this.disable}>下线</button>
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

Banner.propTypes = {
  banners: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

Banner.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const banners = omg[BANNER_LIST] || {};
  return {
    banners,
  };
})(Banner);
