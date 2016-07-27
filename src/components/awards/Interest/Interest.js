import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {Card, Popover} from '../../tools';
import { AWARD_LIST } from '../../../constants';
import { fetchAction } from '../../../actions/omg';
import InterestAddModal from '../../modals/InterestAddModal';
import { getConfig } from '../../../config/omg';
import { showModal } from '../../../actions/modal';

class Interest extends Component {
  constructor(props) {
    super(props);
    this.showAddModal = this.showAddModal.bind(this);
    this.fresh = this.fresh.bind(this);
    const types = getConfig('interestTypes');
    const timeTypes = getConfig('interestTimeTypes');
    this.state = {
      awardType: 1,
      types,
      timeTypes,
    };
  }

  componentDidMount() {
    this.fresh();
  }
  fresh() {
    const formData = new FormData;
    formData.append('award_type', this.state.awardType);
    this.props.dispatch(fetchAction({
      type: AWARD_LIST,
      method: 'POST',
      formData,
      key: this.state.awardType,
    }));
  }

  showAddModal() {
    this.props.dispatch(showModal(<InterestAddModal callback={this.fresh} />));
  }

  render() {
    const btn = (
      <button
        hidden={this.props.modal}
        className="btn btn-info btn-sm pull-xs-right"
        onClick={this.showAddModal}
      >添加</button>
    );
    const { modal, addAward = false, awards, } = this.props;
    const { awardType } = this.state;
    if (typeof awards[awardType] === 'undefined') {
      awards[awardType] = {};
    }
    const { data = [] } = awards[awardType];
    return (
      <Card title="加息券" btn={btn}>
        <table className="table m-b-0 table-bordered">
          <thead>
            <tr><th>id</th><th>名称</th><th>加息值</th><th>加息时长</th><th>有效期</th><th>投资门槛</th><th>项目类型</th><th>项目期限</th><th>产品ID</th><th>平台限制</th><th>限制说明</th><th>操作</th></tr>
          </thead>
          <tbody>
          {data.map((item) => {
            let addAwardBtn = false;
            if (modal) {
              addAwardBtn = (
                <button
                  data-type={awardType}
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
                <td>{`${(item.rate_increases * 100).toFixed(1)}%`}</td>
                <td>{
                  item.rate_increases_type === 1 ? '全周期' :
                  item.rate_increases_type === 2 ? `${item.rate_increases_time}天` :
                  item.rate_increases_type === 3 ? [`开始: ${item.rate_increases_start}`, <br />, `结束: ${item.rate_increases_end}`] :
                  item.rate_increases_type === 4 ? `${item.rate_increases_time}月` : '未知'
                }</td>
                <td>{item.effective_time_type === 1 ? `${item.effective_time_day}天` : [`开始: ${item.effective_time_start}`, <br />, `结束: ${item.effective_time_end}`]}</td>
                
                <td>{item.investment_threshold ? `${item.investment_threshold}元` : '不限制'}</td>
                <td>{getConfig('projectTypes', item.project_type)}</td>
                <td>{`${item.project_duration_type === 1 ? '' : item.project_duration_time}${getConfig('projectDurationTypes', item.project_duration_type)}`}</td>
                <td>{item.product_id === '' ? '不限制' : item.product_id}</td>
                <td>{getConfig('platformTypes', item.platform_type)}</td>
                <td><Popover title="限制说明" content={item.limit_desc === '' ? '无' : `${item.limit_desc} `} /></td>
                <td>{addAwardBtn}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </Card>
    );
  }
}

Interest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  awards: PropTypes.object.isRequired,
  modal: PropTypes.bool,
  addAward: PropTypes.func,
}

Interest.defaultProps = {
  awards: {},
  modal: false,
}

export default connect( state => {
  const { omg } = state;
  const awards = omg[AWARD_LIST];
  return {
    awards,
  };
})(Interest);
