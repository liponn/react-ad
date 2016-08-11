import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, Popover, Pagination} from '../../tools';
import { AWARD_LIST, AWARD_ADD, AWARD_UPDATE } from '../../../constants';
import { fetchAction } from '../../../actions/omg';
import RedEnvelopeAddModal from './RedEnvelopeAddModal';
import { getConfig } from '../../../config/omg';
import { showModal, hideModal } from '../../../actions/modal';

class RedEnvelope extends Component {
  constructor(props) {
    super(props);
    this.showAddModal = this.showAddModal.bind(this);
    this.showUpdateModal = this.showUpdateModal.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.fresh = this.fresh.bind(this);
    const page = props.page || 1;
    this.state = {
      page,
    };
  }

  componentDidMount() {
    this.fresh();
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: AWARD_ADD,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.fresh();
      } else {
        this.setState({
          errorMsg: json.data.error_msg,
        });
      }
    });
  }
  update(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: AWARD_UPDATE,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.fresh();
      } else {
        this.setState({
          errorMsg: json.data.error_msg,
        });
      }
    });
  }
  fresh() {
    this.list(this.state.page);
  }
  list(page) {
    const formData = new FormData;
    formData.append('award_type', this.props.type);
    this.props.dispatch(fetchAction({
      type: AWARD_LIST,
      method: 'POST',
      queryObj: { page },
      formData,
      key: `${this.props.type}_${page}`,
    }));
  }
  pageSelect(page) {
    this.setState({
      page,
    });
    this.list(page);
  }

  showAddModal() {
    this.props.dispatch(showModal(<RedEnvelopeAddModal submit={this.add} />));
  }
  showUpdateModal(e) {
    const index = e.target.dataset.index;
    const id = +e.target.dataset.id;
    const item = this.items[index] || {};
    if (item.id !== id) {
      return alert('获取奖品信息失败,请刷新重试');
    }
    this.props.dispatch(showModal(<RedEnvelopeAddModal item={item} update submit={this.update} />));
  }
  render() {
    const btn = (
      <button
        hidden={this.props.modal}
        className="btn btn-info btn-sm pull-xs-right"
        onClick={this.showAddModal}
      >添加</button>
    );
    const { modal, addAward = false } = this.props;
    const key = `${this.props.type}_${this.state.page}`;
    const awardList = this.props.awardList || {};
    const award = awardList[key] || {};
    const items = award.data || [];
    this.items = items;
    return (
      <div>
        <Card title="红包" btn={btn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr><th>id</th><th>名称</th><th>金额</th><th>类型</th><th>有效期</th><th>投资门槛</th><th>项目类型</th><th>项目期限</th><th>产品ID</th><th>平台限制</th><th>限制说明</th><th>消息模板</th><th>操作</th></tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                let addAwardBtn = false;
                if (modal) {
                  addAwardBtn = (
                    <button
                      data-type={this.props.type}
                      data-id={item.id}
                      hidden={!modal}
                      className="btn btn-info btn-sm"
                      onClick={addAward}
                    >添加</button>
                  );
                }
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.red_money}元</td>
                    <td>{getConfig('redEnvelopeTypes', item.red_type)}{item.red_type === 2 ? `(${(item.percentage * 100).toFixed(1)}%)` : ''}</td>
                    <td>{item.effective_time_type === 1 ? `${item.effective_time_day}天` : [`开始: ${item.effective_time_start}`, <br />, `结束: ${item.effective_time_end}`]}</td>
                    <td>{item.investment_threshold ? `${item.investment_threshold}元` : '不限制'}</td>
                    <td>{getConfig('projectTypes', item.project_type)}</td>
                    <td>{`${item.project_duration_type === 1 ? '' : item.project_duration_time}${getConfig('projectDurationTypes', item.project_duration_type)}`}</td>
                    <td>{item.product_id === '' ? '不限制' : item.product_id}</td>
                    <td>{getConfig('platformTypes', item.platform_type)}</td>
                    <td><Popover title="限制说明" content={item.limit_desc === '' ? '无' : `${item.limit_desc} `} /></td>
                    <td>
                      <Popover name="站内信" title="站内信" content={!item.mail ? '无' : `${item.mail} `} />
                      <Popover name="短信" title="短信" content={!item.message ? '无' : `${item.message} `} />
                    </td>
                    <td>
                      <button hidden={modal} className="btn btn-success-outline btn-sm" data-id={item.id} data-index={index} onClick={this.showUpdateModal}>编辑</button>
                      {addAwardBtn}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
        <Pagination currentPage={award.current_page} lastPage={award.last_page} onClick={this.pageSelect} unurl={modal} />
      </div>
    );
  }
}

RedEnvelope.propTypes = {
  dispatch: PropTypes.func.isRequired,
  awardList: PropTypes.object.isRequired,
  modal: PropTypes.bool,
  addAward: PropTypes.func,
  page: PropTypes.number,
  type: PropTypes.string.isRequired,
}

RedEnvelope.defaultProps = {
  modal: false,
}

export default connect(state => {
  const { omg } = state;
  const awardList = omg[AWARD_LIST] || {};
  return {
    awardList,
  };
})(RedEnvelope);
