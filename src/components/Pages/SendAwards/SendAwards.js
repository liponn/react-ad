import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { getConfig } from '../../../config/omg';
import { Pagination } from '../../tools';


import { showModal, hideModal } from '../../../actions/modal';
import AwardsAddModal from './AwardsAddModal';
import { BATCH_AWARD_LIST, BATCH_AWARD } from '../../../constants';

class SendAwards extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.fresh = this.fresh.bind(this);
    this.list = this.list.bind(this);
    this.add = this.add.bind(this);
  }
  componentDidMount() {
    this.list(this.props.page);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.list(nextProps.page);
    }
  }
  showModal() {
    const modalView = <AwardsAddModal submit={this.add} />;
    this.props.dispatch(showModal(modalView));
  }
  fresh() {
    this.list(this.props.page);
  }
  list(page) {
    this.props.dispatch(fetchAction({
      type: BATCH_AWARD_LIST,
      method: 'GET',
      queryObj: {
        
        page,
      },
      key: page,
    }));
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: BATCH_AWARD,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal());
        this.fresh();
      }
    });
  }
  render() {
    const batch = this.props.batchList[this.props.page] || {};
    const items = batch.data || [];
    this.items = items;
    return (
      <div>
        <div className="card">
          <div className="card-header clearfix">批量发送奖品
            <button
              type="button"
              className="btn btn-sm  btn-info pull-right"
              data-toggle="modal"
              data-target="#channel-add-modal"
              onClick={this.showModal}
            >
              <i className="fa fa-plus"> 添加</i>
            </button>
          </div>
          <table className="table table-bordered m-b-0 table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>用户id</th>
                <th>奖品类型</th>
                <th>奖品id</th>
                <th>来源名</th>
                <th>发送数量</th>
                <th>发送状态</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><div style={{ 'wordBreak': 'break-all' }}>{item.uids}</div></td>
                <td>{getConfig('awardTypes', item.award_type)}</td>
                <td>{item.award_id}</td>
                <td>{item.source_name}</td>
                <td>{item.send_num || '—'}</td>
                <td>{item.status !== 2 ? '发送中' : '发送完成'}</td>
                <td>
                  <button className="btn btn-info-outline btn-sm" onClick={this.fresh}>刷新</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          <Pagination currentPage={batch.current_page} lastPage={batch.last_page} />
        </div>
      </div>

    );
  }
}

SendAwards.propTypes = {
  dispatch: PropTypes.func.isRequired,
  batchList: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
};
SendAwards.defaultProps = {
};

export default connect(state => {
  const { omg } = state;
  const batchList = omg[BATCH_AWARD_LIST] || {};
  return {
    batchList,
  };
})(SendAwards);

