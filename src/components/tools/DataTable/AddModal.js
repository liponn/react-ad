import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Input, Submit, Select, Textarea } from '../../tools';
import { getConfig } from '../../../config/omg';

class AddModal extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Modal title={this.props.update ? '编辑' : '添加'}>
        <form onSubmit={this.props.submit}>
          {this.props.columns.map((filed) => {
            let ret = false;
            switch (filed.type) {
              case 'hidden':
                ret = (<input
                  type="hidden"
                  name={filed.name}
                  defaultValue={this.props.item[filed.name] || ''}
                />);
                break;
              case 'text':
                ret = (<Input
                  labelName={filed.cname}
                  name={filed.name}
                  defaultValue={this.props.item[filed.name] || ''}
                />);
                break;
              case 'textarea':
                ret = (<Textarea
                  labelName={filed.cname}
                  name={filed.name}
                  defaultValue={this.props.item[filed.name] || ''}
                />);
                break;
              default:
                break;
            }
            return ret;
          })}
          <input type="hidden" name="id" defaultValue={this.props.item.id || ''} />
          <Submit />
        </form>
      </Modal>
    );
  }
}

AddModal.propTypes = {
  submit: PropTypes.func.isRequired,
  item: PropTypes.obj,
  update: PropTypes.boolean,
  columns: PropTypes.array.isRequired,
}

AddModal.defaultProps = {
  item: {},
  update: false,
}


export default connect()(AddModal);
