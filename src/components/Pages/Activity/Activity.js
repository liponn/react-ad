import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch, fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import { ACTIVITY_INFO, ACTIVITY_RULE_LIST, ACTIVITY_AWARD_LIST, ACTIVITY_RULE_DEL, ACTIVITY_AWARD_ADD, ACTIVITY_AWARD_DEL, ACTIVITY_PUT, ACTIVITY_INVITE_AWARD_ADD, ACTIVITY_INVITE_AWARD_DEL, ACTIVITY_INVITE_AWARD_LIST } from '../../../constants';
import RuleAddModal from './RuleAddModal';
import { Card, Text, Link } from '../../tools';
import ActivityAddModal from '../../modals/ActivityAddModal';
import AwardAddModal from './AwardAddModal';
import InviteAwardAddModal from './InviteAwardAddModal';
import { getConfig } from '../../../config/omg';

class Activity extends Component {
  constructor(props) {
    super(props);
    this.showAddRuleModal = this.showAddRuleModal.bind(this);
    this.showAddAwardModal = this.showAddAwardModal.bind(this);
    this.showAddInviteAwardModal = this.showAddInviteAwardModal.bind(this);
    this.showUpdateActivity = this.showUpdateActivity.bind(this);
    this.freshRuleList = this.freshRuleList.bind(this);
    this.freshAwardList = this.freshAwardList.bind(this);
    this.freshActivityInfo = this.freshActivityInfo.bind(this);
    this.ruleDel = this.ruleDel.bind(this);
    this.awardDel = this.awardDel.bind(this);
    this.inviteAwardDel = this.inviteAwardDel.bind(this);
    this.addAward = this.addAward.bind(this);
    this.addInviteAward = this.addInviteAward.bind(this);
    this.handleRule = this.handleRule.bind(this);
    this.updateActivity = this.updateActivity.bind(this);
    
    const awardTypes = getConfig('awardTypes');
    const activityTriggers = getConfig('activityTriggers');
    const frequencyTypes = getConfig('frequencyTypes');
    const ruleTypes = getConfig('ruleTypes');
    const ruleFileds = getConfig('ruleFileds');
    this.state = {
      awardTypes,
      activityTriggers,
      frequencyTypes,
      ruleTypes,
      ruleFileds,
      addAwardErrorMsg: '',
    };
  }
  componentDidMount() {
    this.freshRuleList();
    this.freshActivityInfo();
    this.freshAwardList();
    this.freshInviteAwardList();
  }
  // 刷新活动信息
  freshActivityInfo() {
    this.props.dispatch(fetchAction({
      type: ACTIVITY_INFO,
      suffix: `/${this.props.activityId}`,
      key: this.props.activityId,
    }));
  }
  // 刷新规则
  freshRuleList() {
    this.props.dispatch(fetchAction({
      type: ACTIVITY_RULE_LIST,
      suffix: `/${this.props.activityId}`,
      key: this.props.activityId,
    }));
  }
  // 刷新奖品
  freshAwardList() {
    const formData = new FormData;
    formData.append('activity_id', this.props.activityId);
    this.props.dispatch(fetchAction({
      type: ACTIVITY_AWARD_LIST,
      formData,
      method: 'POST',
      key: this.props.activityId,
    }));
  }
  // 刷新邀请人奖品
  freshInviteAwardList() {
    const formData = new FormData;
    formData.append('activity_id', this.props.activityId);
    this.props.dispatch(fetchAction({
      type: ACTIVITY_INVITE_AWARD_LIST,
      formData,
      method: 'POST',
      key: this.props.activityId,
    }));
  }
  // 更新活动
  updateActivity(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: ACTIVITY_PUT,
      method: 'POST',
      formData,     
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.freshActivityInfo();
      }
    });
  }
  // 更新活动
  showUpdateActivity() {
    if (!this.activity || !this.activity.id) {
      alert('获取活动详情失败');
      return;
    }
    this.props.dispatch(showModal(<ActivityAddModal item={this.activity} update submit={this.updateActivity} />));
  }
  // 显示添加规则
  showAddRuleModal() {
    if (!this.activity || !this.activity.id) {
      alert('获取活动详情失败');
      return;
    }
    const ruleAddModal = <RuleAddModal item={this.activity} callback={this.freshRuleList} />;
    this.props.dispatch(showModal(ruleAddModal));
  }
  // 显示添加奖品
  showAddAwardModal(e) {
    if (!this.activity || !this.activity.id) {
      alert('获取活动详情失败');
      return;
    }
    const awardView = (
      <AwardAddModal submit={this.addAward} item={this.activity} />
    );
    this.props.dispatch(showModal(awardView));
  }
  
  // 显示添加邀请人奖品
  showAddInviteAwardModal(e) {
    const awardRule = e.target.dataset.awardRule;
    const awardView = (
      <InviteAwardAddModal submit={this.addInviteAward} awardRule={awardRule} activityId={this.props.activityId} />
    );
    this.props.dispatch(showModal(awardView));
  }
  // 删除规则
  ruleDel(e) {
    const id = $(e.target).data('id');
    if (!confirm(`确认删除ID: ${id}吗?`)) {
      return;
    }
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(commonFetch(ACTIVITY_RULE_DEL, 'POST', formData))
      .then((() => this.freshRuleList()));
  }
  // 删除奖品
  awardDel(e) {
    const id = $(e.target).data('id');
    if (!confirm(`确认删除ID: ${id}吗?`)) {
      return;
    }
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(commonFetch(ACTIVITY_AWARD_DEL, 'POST', formData))
      .then((() => this.freshAwardList()));
  }
  // 删除邀请人奖品
  inviteAwardDel(e) {
    const id = $(e.target).data('id');
    if (!confirm(`确认删除ID: ${id}吗?`)) {
      return;
    }
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(commonFetch(ACTIVITY_INVITE_AWARD_DEL, 'POST', formData))
      .then((() => this.freshInviteAwardList()));
  }
  // 添加奖品
  addAward(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: ACTIVITY_AWARD_ADD,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal());
        this.freshAwardList();
      }
    });
  }
  // 添加邀请人奖品
  addInviteAward(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    this.props.dispatch(fetchAction({
      type: ACTIVITY_INVITE_AWARD_ADD,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal());
        this.freshInviteAwardList();
      }
    });
  }
  // 优化规则显示
  handleRule(type, value) {
    switch (type) {
      case 'isfirst':
        if(+value === 0) {
          return '不限';
        } else if(+value === 1) {
          return '首次';
        } else if(+value === 2) {
          return '非首次';
        }
      case 'is_invite':
        return +value === 1 ? '是' : '否';
      case 'type':
        return getConfig('castDateTypes', +value);
      case 'min_payment':
      case 'max_payment':
      case 'min_recharge':
      case 'max_recharge':
      case 'min_cast':
      case 'max_cast':
      case 'min_recharge_all':
      case 'max_recharge_all':
      case 'min_cast_all':
      case 'max_cast_all':
        return `${value} 元`;
      case 'user_level':
        return getConfig('userLevels', value);
      default:
        return value;
    }
  }
  render() {
    const activity = this.props.activityList[this.props.activityId] || {};
    this.activity = activity;
    
    const awards = this.props.awardList[this.props.activityId] || [];
    const totalPriority = awards.reduce((previous, current) => (
      { priority: previous.priority + current.priority }
    ), { priority: 0 });
    const inviteAwards = this.props.inviteAwardList[this.props.activityId] || [];
    const rules = this.props.ruleList[this.props.activityId] || [];
    console.log(rules);
    const updateActivityBtn = (
      <button
        onClick={this.showUpdateActivity}
        className="btn btn-sm btn-info pull-right"
      >
        <i className="fa fa-edit">编辑</i>
      </button>
    );
    const addRuleBtn = (
      <button
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
    );
    const addInviteAwardBtn = (
      <button
        type="button"
        onClick={this.showAddInviteAwardModal}
        className="btn btn-sm btn-info pull-right"
      >
        <i className="fa fa-plus">奖品</i>
      </button>
    )
    return (
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">首页</Link></li>
          <li className="breadcrumb-item"><Link to="/activity/1">活动列表</Link></li>
          <li className="breadcrumb-item active">{activity.name || '—'}</li>
        </ol>
        <Card title="活动详情" btn={updateActivityBtn} >
          <Text name="名称" value={activity.name} />
          <Text name="别名" value={activity.alias_name || '—'} />
          
          <Text name="ID" value={activity.id} />
          <Text name="状态" value={+activity.enable ? '上线' : '下线'} />

          <Text name="发奖频次" value={this.state.frequencyTypes[activity.frequency]} />
          <Text name="发奖规则" value={getConfig('sendAwardTypes', activity.award_rule || '—')} />

          <Text name="开始时间" value={activity.start_at || '不限'} />
          <Text name="结束时间" value={activity.end_at || '不限'} />
          
          <Text name="触发类型" value={this.state.activityTriggers[activity.trigger_type]} />
          <Text name="活动说明" value={activity.des || '—'} />

          <Text name="当前参与人数" value={activity.join_num || '—'} />
          
          <div className="m-b-1 clearfix"></div>
        </Card>
        <Card title="活动规则" btn={addRuleBtn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr><th>规则类型</th><th>规则详情</th><th>操作</th></tr>
            </thead>
            <tbody>
            {rules.map((rule) => (
              <tr key={rule.id}>
                <td>{getConfig('allRuleTypes', rule.rule_type)}</td>
                <td>
                  {Object.keys(rule.rule_info).map((key) => (
                    <div
                      key={`filed-${key}`}
                    >{getConfig('ruleFileds', key)}: {this.handleRule(key, rule.rule_info[key])}</div>
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
              <tr><th>奖品类型</th><th>奖品ID</th><th>奖品名称</th><th hidden={activity.award_rule !== 2}>权重</th><th>操作</th></tr>
            </thead>
            <tbody>
            {awards.map((award) => (
              <tr key={award.id}>
                <td>
                  {this.state.awardTypes[award.award_type]}
                </td>
                <td>
                  {award.award_id}
                </td>
                <td>{award.name}</td>
                <td hidden={activity.award_rule !== 2}>{award.priority}({(award.priority / totalPriority.priority * 100 || 0).toFixed(2)}%)</td>
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
        <Card title="邀请人奖品" btn={addInviteAwardBtn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr><th>奖品类型</th><th>奖品ID</th><th>奖品名称</th><th>操作</th></tr>
            </thead>
            <tbody>
            {inviteAwards.map((award) => (
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
                    onClick={this.inviteAwardDel}
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
  ruleList: PropTypes.object.isRequired,
  awardList: PropTypes.object.isRequired,
  activityList: PropTypes.object.isRequired,
  inviteAwardList: PropTypes.object.isRequired,
  activityId: PropTypes.number.isRequired,
};

Activity.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const activityList = omg[ACTIVITY_INFO] || {};
  const ruleList = omg[ACTIVITY_RULE_LIST] || {};
  const awardList = omg[ACTIVITY_AWARD_LIST] || {};
  const inviteAwardList = omg[ACTIVITY_INVITE_AWARD_LIST] || {};
  return {
    activityList,
    ruleList,
    awardList,
    inviteAwardList,
  };
})(Activity);


