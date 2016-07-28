import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch, fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import { ACTIVITY_INFO, ACTIVITY_RULE_LIST, ACTIVITY_AWARD_LIST, ACTIVITY_RULE_DEL, ACTIVITY_AWARD_ADD, ACTIVITY_AWARD_DEL} from '../../../constants';
import RuleAddModal from '../../modals/RuleAddModal';
import Award from '../../pages/Award';
import { Card, Modal, Text, Alert, Input, Submit } from '../../tools';
import { getConfig } from '../../../config/omg';

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
  // 显示添加规则
  showAddRuleModal() {
    const ruleAddModal = <RuleAddModal activityId={this.props.activityId} callback={this.freshRuleList} />;
    this.props.dispatch(showModal(ruleAddModal));
  }
  // 显示添加奖品
  showAddAwardModal(e) {
    const awardRule = e.target.dataset.awardRule;
    const awardView = (
      <AddAwardModal submit={this.addAward} awardRule={awardRule} activityId={this.props.activityId} />
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
  render() {
    const activity = this.props.activityList[this.props.activityId] || {};
    const awards = this.props.awardList[this.props.activityId] || [];
    const rules = this.props.ruleList[this.props.activityId] || [];
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
        data-awardRule={activity.awardRule}
        className="btn btn-sm btn-info pull-right"
      >
        <i className="fa fa-plus">奖品</i>
      </button>
    )
    return (
      <div>
        <Card title="活动详情" >
          <Text name="活动名称" value={activity.name} />
          <Text name="活动别名" value={activity.alias_name} />
          
          <Text name="活动id" value={activity.id} />
          <Text name="状态" value={+activity.enable ? '上线' : '下线'} />

          <Text name="触发类型" value={this.state.activityTriggers[activity.trigger_type]} />
          <Text name="发奖频次" value={this.state.frequencyTypes[activity.frequency]} />
          
          <Text name="开始时间" value={activity.created_at} />
          <Text name="结束时间" value={activity.created_at} />
          
          <Text name="创建时间" value={activity.created_at} />
          <Text name="更新时间" value={activity.updated_at} />
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
                <td>{getConfig('ruleTypes', rule.rule_type)}</td>
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
              <tr><th>奖品类型</th><th>奖品ID</th><th>奖品名称</th><th>权重</th><th>操作</th></tr>
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
                <td>{award.priority}</td>
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
  ruleList: PropTypes.object.isRequired,
  awardList: PropTypes.object.isRequired,
  activityList: PropTypes.object.isRequired,
  activityId: PropTypes.number.isRequired,
};

Activity.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const activityList = omg[ACTIVITY_INFO] || {};
  const ruleList = omg[ACTIVITY_RULE_LIST] || {};
  const awardList = omg[ACTIVITY_AWARD_LIST] || {};
  return {
    activityList,
    ruleList,
    awardList,
  };
})(Activity);

class AddAwardModal extends Component {
  constructor(props) {
    super(props);
    this.addAward = this.addAward.bind(this);
    this.showAward = this.showAward.bind(this);
    this.state = {
      awardType: '',
      awardId: '',
      awardHidden: true,
    };
  }
  static propTypes = {
    activityId: PropTypes.number.isRequired,
    awardRule: PropTypes.number,
    submit: PropTypes.func.isRequired,
  }
  addAward(e) {
    this.setState({
      awardHidden: true,
      awardType: e.target.dataset.type,
      awardId: e.target.dataset.id,
    });
  }
  showAward() {
    this.setState({
      awardHidden: false,
    });
  }
  render() {
    return (
      <Modal title="添加奖品" className="modal-lg">
        <Alert msg={this.props.addErrorMsg} />
        <form onSubmit={this.props.submit}>
          <input type="hidden" name="activity_id" value={this.props.activityId} />
          <Input name="award_type" labelName="奖品类型Id" value={this.state.awardType} />
          <Input name="award_id" labelName="奖品Id" value={this.state.awardId} />
          <div className="form-group row">
            <div className="col-sm-offset-4 col-sm-8 col-md-6">
              <a className="btn btn-info-outline" onClick={this.showAward}>选择奖品</a>
            </div>
          </div>
          <Input name="priority" labelName="奖品权重" type="number" defaultValue="0" />
          <Submit value="添加" />
        </form>
        <div hidden={this.state.awardHidden}>
          <hr style={{ borderStyle: 'dashed' }} />
          <Award modal addAward={this.addAward} awardType="1" />
        </div>
      </Modal>
    );
  }
}
