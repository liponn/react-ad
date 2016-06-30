import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ImgBox, Card } from '../../tools';
import { showModal } from '../../../actions/modal';
import { fetchAction } from '../../../actions/omg';
import { BANNER_LIST } from '../../../constants';
import BannerAddModal from '../../modals/BannerAddModal';
import { getConfig } from '../../../config/omg';
import hisotry from '../../../core/history';


class Login extends Component {
  constructor(props) {
    super(props);
    this.showAddModal = this.showAddModal.bind(this);
    this.releaseBanner = this.releaseBanner.bind(this);
    this.putBanner = this.putBanner.bind(this);
    this.freshData = this.freshData.bind(this);
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
  releaseBanner(e) {
    const { dispatch } = $this.props;
    const id = $(e.target).data('id');
  }

  putBanner(e) {
    const { dispatch } = this.props;
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
                <td>{item.can_use}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>
                  <button className="btn btn-success-outline" data-id={item.id} onClick={this.releaseBanner}>发布</button>
                  <button className="btn btn-warning-outline" data-id={item.id} onClick={this.putBanner}>修改</button>
                  <button className="btn btn-danger-outline" data-id={item.id} onClick={this.delBanner}>删除</button>
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

Login.propTypes = {
  banners: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

Login.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const banners = omg[BANNER_LIST] || {};
  return {
    banners,
  };
})(Login);