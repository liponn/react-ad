import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../tools/Card';
import { fetchAction, commonFetch } from '../../../actions/omg';
import { BANNER_LIST } from '../../../constants';
import { getConfig } from '../../../config/omg';
import hisotry from '../../../core/history';


class Banner extends Component {
  constructor(props) {
    super(props);
    this.releaseBanner = this.releaseBanner.bind(this);
    this.putBanner = this.putBanner.bind(this);
    this.delBanner = this.delBanner.bind(this);
    
    const bannerTypes = getConfig('bannerTypes');
    
    this.state = {
      bannerTypes,
      currentType: 1,
    };
  }
  componentDidMount() {
    this.freshData(this.props.type);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.type !== nextProps.type) {
      this.freshData(nextProps.type);
    }
  }
  
  freshData(type) {
    const queryObj = { position: type}
    this.props.dispatch(fetchAction({
      type: BANNER_LIST,
      key: type,
      queryObj,
    }));
  }
  
  releaseBanner(e) {
    const { dispatch } = $this.props;
    const id = $(e.target).data('id');
  }

  putBanner(e) {
    const { dispatch } = this.props;
    dispatch()
  }

  delBanner(e) {
    const { dispatch } = this.props;
    const id = $(e.target).data('id');
    $.post('http://api-omg.wanglibao.com/img/banner-del',{id: id}, function(res){
      if (res.error_code !== 0) {
        console.log(res);
        this.setState({ errorMsg: res.data.error_msg });
      } else {
        dispatch(commonFetch(BANNER_LIST));
      }
    }.bind(this));
  }
  selectChange(e) {
    const value = e.target.value;
    hisotry.push(`/banner/${value}`);
  }
  render() {
    const { items, type } = this.props;
    const { bannerTypes, currentType } = this.state;
    const btn = (
      <button
        className="btn btn-info btn-sm pull-xs-right"
      >添加</button>
    );
    
    if (typeof items[type] === 'undefined') {
      items[type] = [];
    }
    
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
              <th>位置</th>
              <th>名称</th>
              <th>跳转URL</th>
              <th>状态</th>
              <th>介绍</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            {items[type].map((item)=>(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.position}</td>
                <td>{item.name}</td>
                <td>{item.img_url}</td>
                <td>{item.can_use}</td>
                <td>{item.desc}</td>
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

Banner.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

Banner.defaultProps = {
  items: [],
}

export default connect(state => {
  const { omg } = state;
  const data = omg[BANNER_LIST] || [];
  return {
    items: data,
  }
})(Banner);