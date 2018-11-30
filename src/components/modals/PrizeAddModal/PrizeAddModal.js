import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, DateTimeInput, Select, Submit, Alert, Modal,AttachmentInput } from '../../tools';
import { getConfig } from '../../../config/omg';
import { PRIZE_CHANGE_STATUS } from '../../../constants';
import { commonFetch, fetchAction } from '../../../actions/omg';

class PrizeAddModal extends Component {
  constructor(props) {
    super(props);
    const awardTypes = getConfig('awardTypes');
    this.state = {
        awardTypes,
    };
  }



  render() {
    const item = this.props.item || {};
    const prizeTypes = this.props.prizeTypes || {};
    return (
      <Modal title={this.props.update ? '编辑奖品' : '添加奖品'}>
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.props.errorMsg} />
          <input type="hidden" name="id" value={item.id} />
          <Select labelName="商品类型" name="type_id" options={prizeTypes} defaultValue={item.type_id} />
          <Input required labelName="奖品名称" name="name" defaultValue={item.name} />
          <Input required labelName="所需积分" name="price" defaultValue={item.price} />
          <Input labelName="折扣积分" name="kill_price" defaultValue={item.kill_price} />
          <Select labelName="奖品类型" name="award_type" options={this.state.awardTypes} defaultValue={item.award_type} />
          <Input labelName="奖品ID" name="award_id" placeholder="奖品ID" defaultValue={item.award_id} />
          <Input  name="stock" labelName="库存" defaultValue={item.stock}/>
          <DateTimeInput required limit labelName="开始时间" name="start_at" defaultValue={item.start_at} />
          <DateTimeInput required limit labelName="结束时间" name="end_at" defaultValue={item.end_at} />
          <AttachmentInput labelName="列表图" name="list_img" defaultValue={item.list_img} position=""/>
          <AttachmentInput labelName="详情页头图" name="detail_img" defaultValue={item.detail_img} position=""/>
          <AttachmentInput labelName="商品介绍图" name="des_img" defaultValue={item.des_img} position=""/>
          <div className="form-group row">
            <label className="col-sm-4 text-xs-right">商品描述:</label>
            <div className="col-sm-6">
              <textarea name="des" className="form-control" defaultValue={item.des}></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 text-xs-right">兑换说明:</label>
            <div className="col-sm-6">
              <textarea name="ex_note" className="form-control" defaultValue={item.ex_note}></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 text-xs-right">免责声明:</label>
            <div className="col-sm-6">
              <textarea name="disclaimer" className="form-control" defaultValue={item.disclaimer}></textarea>
            </div>
          </div>
          <Submit />
        </form>
      </Modal>
    );
  }
}

PrizeAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
  update: PropTypes.bool,
}

PrizeAddModal.defaultProps = {
  errorMsg: '',
}

export default connect( state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[PRIZE_CHANGE_STATUS] || '';
  return {
    errorMsg,
  };
})(PrizeAddModal);
