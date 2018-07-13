import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Select, Submit, Alert, Modal,Editor,Checkbox,Radio } from '../../tools';

class ThreadMoveModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentType:props.currentType,
    }
    this.change = this.change.bind(this);
  }

  change(e){
    const value = e.target.value;
    this.setState({
      currentType:+value
    });
  }

  render() {
    const item = this.props.item || {};
    const types = this.props.types || [];
    const currentType = this.state.currentType;
    return (
        <Modal key={item.id} title='移动帖子'>
            <form name="formmove" method="post" onSubmit={this.props.submit}>
                <Alert msg={this.props.errorMsg} />
                <input type="hidden" name="id" value={item.id} />
                <div>
                  {
                      types.map((type,index) => (
                        <Radio onChange={this.change} key={index} labelName={type.name} value={type.id} name="type_id" checked={currentType === type.id ? true :false}/>
                      ))
                  }
                </div>
                <br/>
                <Submit />
            </form>
        </Modal>
    );
  }
}

ThreadMoveModal.propTypes = {
  submit: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  errorMsg: PropTypes.string,
}

ThreadMoveModal.defaultProps = {
  errorMsg: '',
}

export default ThreadMoveModal;
