import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import { ACTIVITY_INFO, ACTIVITY_RULE_LIST, ACTIVITY_AWARD_LIST, ACTIVITY_RULE_DEL, ACTIVITY_AWARD_ADD, ACTIVITY_AWARD_DEL } from '../../../constants';
import RuleAddModal from '../../modals/RuleAddModal';
import Award from '../../pages/Award';
import { Card, Modal, Text } from '../../tools';
import { typeList, getConfig } from '../../../config/omg';

class Activity extends Component {
  constructor(props) {
    super(props);
    this.showAddRuleModal = this.showAddRuleModal.bind(this);
    this.showAddAwardModal = this.showAddAwardModal.bind(this);
    this.freshRuleList = this.freshRuleList.bind(this);
    this.freshAwardList = this.freshAwardList.bind(this);
    this.freshActivityInfo = this.freshActivityInfo.bind(this);
    this.ruleDel = this.ruleDel.bind(this);
    this.awardDel = this.awardDel.bind(this);
    this.addAward = this.addAward.bind(this);
    const awardTypes = getConfig('awardTypes');
    this.state = {
      awardTypes,
    };
  }
  componentDidMount() {
    this.freshRuleList();
    this.freshActivityInfo();
    this.freshAwardList();
  }
  // 刷新活动信息
  freshActivityInfo() {
    this.props.dispatch(commonFetch(ACTIVITY_INFO, 'GET', false, `/${this.props.activityId}`));
  }
  // 刷新规则
  freshRuleList() {
    this.props.dispatch(commonFetch(ACTIVITY_RULE_LIST, 'GET', false, `/${this.props.activityId}`));
  }
  // 刷新奖品
  freshAwardList() {
    const formData = new FormData;
    formData.append('activity_id', this.props.activityId);
    this.props.dispatch(commonFetch(ACTIVITY_AWARD_LIST, 'POST', formData));
  }
  // 显示添加规则
  showAddRuleModal() {
    const ruleAddModal = <RuleAddModal activityId={this.props.activityId} />;
    this.props.dispatch(showModal(ruleAddModal));
  }
  // 显示添加奖品
  showAddAwardModal() {
    const awardView = (
      <Modal title="添加奖品">
        <Award modal addAward={this.addAward} awardType="1" />
      </Modal>
    );
    this.props.dispatch(showModal(awardView));
  }
  // 删除规则
  ruleDel(e) {
    const ruleId = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', ruleId);
    this.props.dispatch(commonFetch(ACTIVITY_RULE_DEL, 'POST', formData))
      .then((() => this.freshRuleList()));
  }
  // 删除奖品
  awardDel(e) {
    const ruleId = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', ruleId);
    this.props.dispatch(commonFetch(ACTIVITY_AWARD_DEL, 'POST', formData))
      .then((() => this.freshAwardList()));
  }

  // 添加奖品
  addAward(e) {
    const target = $(e.target);
    const awardType = target.data('type');
    const id = target.data('id');
    const formDate = new FormData;
    formDate.append('activity_id', this.props.activityId);
    formDate.append('award_type', awardType);
    formDate.append('award_id', id);
    this.props.dispatch(commonFetch(ACTIVITY_AWARD_ADD, 'POST', formDate))
      .then(({ error_code }) => {
        if (error_code === 0) {
          this.props.dispatch(hideModal());
          this.freshAwardList();
        }
      });
  }
  render() {
    const { activity } = this.props;
    const addRuleBtn = (
      <button
        type="button"
        onClick={this.showAddRuleModal}
        className="btn btn-sm btn-info pull-right"
      >
        <i className="fa fa-plus">规则</i>
      </button>
    );
    const addAwardBtn = (
      <button
        type="button"
        onClick={this.showAddAwardModal}
        className="btn btn-sm btn-info pull-right"
      >
        <i className="fa fa-plus">奖品</i>
      </button>
    )
    return (
      <div>
        <Card title="活动详情" >
          <Text name="活动id" value={activity.id} />
          <Text name="状态" value={activity.enable ? '上线' : '下线'} />
          
          <Text name="活动名称" value={activity.name} />
          <Text name="活动别名" value={activity.alias_name} />
          
          <Text name="开始时间" value={activity.created_at} />
          <Text name="结束时间" value={activity.created_at} />

          <Text name="触发类型" value={activity.trigger_type} />
          <Text name="触发优先级" value={activity.trigger_index} />
          
          <Text name="创建时间" value={activity.created_at} />
          <Text name="更新时间" value={activity.updated_at} />
        </Card>
        <Card title="活动规则" btn={addRuleBtn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr><th>规则类型</th><th>规则详情</th><th>操作</th></tr>
            </thead>
            <tbody>
            {this.props.rules.map((rule) => (
              <tr key={rule.id}>
                <td>{typeList[rule.rule_type]}</td>
                <td>
                  {Object.keys(rule.rule_info).map((key) => (
                    <div
                      key={`filed-${key}`}
                    >{getConfig('ruleFileds', key)}: {rule.rule_info[key]}</div>
                  ))}
                </td>
                <td>
                  <button
                    data-id={rule.id}
                    type="button"
                    onClick={this.ruleDel}
                    className="btn btn-sm btn-danger-outline"
                  >删除</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </Card>
        <Card title="活动奖品" btn={addAwardBtn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr><th>奖品类型</th><th>奖品ID</th><th>奖品名称</th><th>操作</th></tr>
            </thead>
            <tbody>
            {this.props.awards.map((award) => (
              <tr key={award.id}>
                <td>
                  {this.state.awardTypes[award.award_type]}
                </td>
                <td>
                  {award.award_id}
                </td>
                <td>{award.name}</td>
                <td>
                  <button
                    data-id={award.id}
                    type="button"
                    onClick={this.awardDel}
                    className="btn btn-sm btn-danger-outline"
                  >删除</button>
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

Activity.propTypes = {
  dispatch: PropTypes.func.isRequired,
  rules: PropTypes.array.isRequired,
  awards: PropTypes.array.isRequired,
  activityId: PropTypes.number.isRequired,
};

Activity.defaultProps = {
  rules: [],
  awards: [],
  activity: {},
}

export default connect(state => {
  const { omg } = state;
  const activity = omg[ACTIVITY_INFO];
  const rules = omg[ACTIVITY_RULE_LIST];
  const awards = omg[ACTIVITY_AWARD_LIST];
  return {
    rules,
    awards,
    activity,
  };
})(Activity);
