import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Input, Submit, DateTimeInput, Textarea, AttachmentInput, Select, Editor } from '../../tools';
import { getConfig } from '../../../config/omg';

class AddModal extends Component {
  constructor (props) {
    super(props);
    // this.state = {
    //   awardType: 0,
    // };
  }

  changeSelect(e) {
    // this.setState({
    //   awardType: e.target.value,
    // });
  }
  render() {
    return (
      <Modal title={this.props.update ? '编辑周末竞猜活动' : '添加周末竞猜活动'}>
        <form onSubmit={this.props.submit}>
          <input type="hidden" name="id" defaultValue={this.props.item.id || ''} />
          <Input labelName="期号" name="period" type="text" required defaultValue={this.props.item.period || ''} />
          <DateTimeInput required labelName="竞猜开始时间" name="start_time" defaultValue={this.props.item.start_time} />
          <DateTimeInput required labelName="竞猜结束时间" name="end_time" defaultValue={this.props.item.end_time} />
          <Input labelName="赛事时间" name="race_time" type="text" required defaultValue={this.props.item.race_time || ''} />
          <Input labelName="奖池总额" name="money" type="text" required defaultValue={this.props.item.money || ''} />
          <Input labelName="专场名称" name="special" type="text" required defaultValue={this.props.item.special || ''} />
          <Input labelName="主队名称" name="home_team" type="text" required defaultValue={this.props.item.home_team || ''} />
          <AttachmentInput labelName="主队logo" name="home_img" position={`banner_${this.props.item.home_img}`} defaultValue={this.props.item.home_img} />
          <Input labelName="客队名称" name="guest_team" type="text" required defaultValue={this.props.item.guest_team || ''} />
          <AttachmentInput labelName="客队logo" name="guest_img" position={`banner_${this.props.item.guest_img}`} defaultValue={this.props.item.guest_img} />
          <Input labelName="近期赛况" name="recent" type="text" defaultValue={this.props.item.recent || ''} />
          { this.props.update && <Input labelName="主队得分" name="home_score" type="text" required defaultValue={this.props.item.home_score} />}
          { this.props.update && <Input labelName="客队得分" name="guest_score" type="text" required defaultValue={this.props.item.guest_score} />}
          {this.props.update && <Select onChange={this.changeSelect.bind(this)} name="result" labelName="比赛结果" options={getConfig('hockeyResultTypes')} defaultValue={this.props.item.result} />}
          活动规则：
          <Editor name="activity_rule" defaultValue={this.props.item.activity_rule}/>
          <Submit />
        </form>
      </Modal>
    );
  }
}

AddModal.propTypes = {
  submit: PropTypes.func.isRequired,
  update: PropTypes.bool,
  item: PropTypes.obj,
}

AddModal.defaultProps = {
  item: {},
  update: false,
}


export default connect()(AddModal);