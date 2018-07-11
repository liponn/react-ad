import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Status, ImgBox, Card, } from '../../tools';
import { CATEGORY_LIST, CATEGORY_ADD, CATEGORY_PUT, CATEGORY_DEL, CATEGORY_ENABLE, CATEGORY_DISABLE, CATEGORY_INFO } from '../../../constants';
import { showModal, hideModal } from '../../../actions/modal';
import { fetchAction } from '../../../actions/omg';
import { getConfig } from '../../../config/omg';
import hisotry from '../../../core/history';
import AddModal from './AddModal';

class Category extends Component {
  constructor(props) {
    super(props);
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
    this.add = this.add.bind(this);
    this.freshData = this.freshData.bind(this);
    this.del = this.del.bind(this);
    this.update = this.update.bind(this);
    this.showUpdate = this.showUpdate.bind(this);
  }
  static items = [];
  componentDidMount() {
    this.freshData(this.props.page);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.page !== nextProps.page) {
      this.freshData(nextProps.page);
    }
    // if (this.props.page !== nextprops.page) {
    //   const bannerTypes = (nextProps.path === 'Banner' ? getConfig('bannerTypes') : getConfig('shareConfigTypes') );
    //   this.setState({
    //     bannerTypes,
    //   });
    // }
  }
  freshData(page) {
    const queryObj = {"page":page}
    this.props.dispatch(fetchAction({
      type: CATEGORY_LIST,
      queryObj: queryObj,
      key: false,
    }));
  }
  showAdd() {
    const modalView = <AddModal submit={this.add} />;
    this.props.dispatch(showModal(modalView));
  }
  enable(e) {
    const id = e.target.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: CATEGORY_ENABLE,
      method: 'POST',
      formData,
    })).then(() => {
      this.freshData(this.props.page);
    });
  }
  disable(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: CATEGORY_DISABLE,
      method: 'POST',
      formData,
    })).then(() => {
      this.freshData(this.props.page);
    });
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: CATEGORY_ADD,
      method: 'POST',
      formData,
    })).then((json) => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.freshData(this.props.page);
      } else {
        this.setState({
          addErrorMsg: json.data.error_msg,
        });
      }
    });
  }

  update(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: CATEGORY_PUT,
      method: 'POST',
      formData,
    })).then((json) => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.freshData(this.props.page);
      } else {
        this.setState({
          addErrorMsg: json.data.error_msg,
        });
      }
    });
  }
  showUpdate(e) {
    const id = e.target.dataset.id;
    const index = e.target.dataset.index;
    const item = this.items[index] || {};
    const modalView = <AddModal title="编辑" item={item} id={id} submit={this.update} />;
    this.props.dispatch(showModal(modalView));
  }
  del(e) {
    const id = $(e.target).data('id');
    if (!confirm(`确认删除 ID:${id} 吗?`)) {
      return;
    }
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: CATEGORY_DEL,
      method: 'POST',
      formData,
    })).then(() => (this.freshData(this.props.page)));
  }

  render() {
    const { banners } = this.props;
    const btn = (
      <button
        className="btn btn-info btn-sm pull-xs-right"
        onClick={this.showAdd.bind(this)}
      >添加</button>
    );
    const items = banners.data || [];
    this.items = items;
    return (
      <div>
        <Card title='常见问题' btn={btn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>名称</th>
                <th>icon</th>
                <th>问题</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td><ImgBox src={item.icon} /></td>
                <td>{item.questions.map((_item,_index)=>(
                    <span key={_item.id}>{_item.q_id}{item.questions.length -1 == _index ? null: ','}</span>
                  ))}
                </td>
                <td><Status status={+item.status} /></td>
                <td>
                  <button hidden={+item.status === 1} className="btn btn-sm btn-success-outline" data-id={item.id} onClick={this.enable}>上线</button>
                  <button hidden={+item.status === 0} className="btn btn-sm btn-warning-outline" data-id={item.id} onClick={this.disable}>下线</button>
                  <button className="btn btn-sm btn-success-outline" data-id={item.id} data-index={index} onClick={this.showUpdate}>编辑</button>
                  <button className="btn btn-sm btn-danger-outline" data-id={item.id} onClick={this.del}>删除</button>
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

Category.propTypes = {
  banners: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
}

Category.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const banners = omg[CATEGORY_LIST] || {};
  return {
    banners,
  };
})(Category);
