import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Alert, Input, AttachmentInput, DateTimeInput, Submit,Fieldset, Select, Textarea } from '../../tools';
import { getConfig } from '../../../config/omg';


class AddModal extends Component {
  constructor(props) {
    super(props);
    const ExamineTypes = getConfig('examineTypes');
    const item = this.props.item || {};
    this.state = {
      ExamineTypes,
    };
  }
  static propTypes = {
    submit: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    errorMsg: PropTypes.string,
    item: PropTypes.object,
  }
  static defaultProps = {
    dispatch: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    item: {},
  }
  render() {
    const item = this.props.item || {};
    console.log(this.state.ExamineTypes,555);
    return (
        <Modal title="添加">
          <form method="post" ref="form" onSubmit={this.props.submit}>
            <Alert msg={this.state.errorMsg} />
            <input type="hidden" name="id" defaultValue={item.id} />
            <input type="hidden" name="status" defaultValue={item.status} />
            <Input labelName="版本号" name="versions" defaultValue={item.versions} />
            <Input labelName="现公司名称显示" name="company_name" defaultValue={item.company_name} />
            <Fieldset>
              <Select
                  labelName="信息披露是否可点"
                  name="disclosure_click"
                  defaultValue={item.disclosure_click}
                  options={this.state.ExamineTypes}
              />
            </Fieldset>
            <Fieldset>
              <Select
                  labelName="底部信息区是否可点"
                  name="bottom_click"
                  defaultValue={item.bottom_click}
                  options={this.state.ExamineTypes}
              />
            </Fieldset>
            <Fieldset>
              <Select
                  labelName="新手指引图标是否可点"
                  name="novice_click"
                  defaultValue={item.novice_click}
                  options={this.state.ExamineTypes}
              />
            </Fieldset>
            <Input labelName="首页上线活动图" name="home_banner" defaultValue={item.home_banner} />
            <Input labelName="发现页上线活动图" name="discover_banner" defaultValue={item.discover_banner} />
            <Submit />
          </form>
        </Modal>
    );
  }
}
export default connect()(AddModal);
