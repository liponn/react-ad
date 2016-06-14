import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { commonFetch } from '../../../actions/omg';
import { showModal } from '../../../actions/modal';
import { ACTIVITY_RULE_LIST, ACTIVITY_RULE_DEL } from '../../../constants';
import RuleAddModal from '../../modals/RuleAddModal';
import AwardAddModal from '../../modals/AwardAddModal';
import Card from '../../tools/Card';
import { typeList } from '../../../config/omg';

class Activity extends Component {
  constructor(props) {
    super(props);
    this.showAddRuleModal = this.showAddRuleModal.bind(this);
    this.showAddAwardModal = this.showAddAwardModal.bind(this);
    this.freshRuleList = this.freshRuleList.bind(this);
    this.ruleDel = this.ruleDel.bind(this);
  }
  componentDidMount() {
    this.freshRuleList();
  }
  freshRuleList() {
    this.props.dispatch(commonFetch(ACTIVITY_RULE_LIST, 'GET', false, `/${this.props.activityId}`));
  }
  showAddRuleModal() {
    const ruleAddModal = <RuleAddModal activityId={this.props.activityId} />;
    this.props.dispatch(showModal(ruleAddModal));
  }
  showAddAwardModal() {
    const ruleAddModal = <AwardAddModal activityId={this.props.activityId} />;
    this.props.dispatch(showModal(ruleAddModal));
  }
  ruleDel(e) {
    const ruleId = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', ruleId);
    this.props.dispatch(commonFetch(ACTIVITY_RULE_DEL, 'POST', formData))
      .then((() => (this.freshRuleList())).bind(this));
  }
  render() {
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
        <Card title="活动">
          {this.props.activityId}
        </Card>
        <Card title="活动规则" btn={addRuleBtn}>
          <table className="table m-b-0">
            <thead>
              <tr><th>规则类型</th><th>规则详情</th><th>操作</th></tr>
            </thead>
            <tbody>
            {this.props.rules.map((rule) => {
              return (
                <tr key={rule.id}>
                  <td>{typeList[rule.rule_type]}</td>
                  <td>
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
              );
            })}
            </tbody>
          </table>
        </Card>
        <Card title="活动奖品" btn={addAwardBtn}>
         bbb
        </Card>
      </div>
    );
  }
}

Activity.propTypes = {
  dispatch: PropTypes.func.isRequired,
  rules: PropTypes.array.isRequired,
  activityId: PropTypes.number.isRequired,
};

Activity.defaultProps = {
  rules: [],
}

export default connect(state => {
  const { omg } = state;
  const rules = omg[ACTIVITY_RULE_LIST] || [];
  return {
    rules,
  }

})(Activity);