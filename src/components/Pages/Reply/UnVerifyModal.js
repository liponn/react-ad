import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Submit } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { BBS_BLOCK_LIST } from '../../../constants';

class UnVerifyModal extends Component {
  constructor (props) {
    super(props);
    this.list = this.list.bind(this);
  }

  componentDidMount() {
    this.list();
  }

  list() {
    this.props.dispatch(fetchAction({
      type: BBS_BLOCK_LIST,
      method: 'GET',
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
      } else {
        alert(json.data.error_msg);
      }
    });
  }

  render() {
    const blocks = this.props.blocks || [];
    return (
      <Modal title="选择拒审原因">
        <form onSubmit={this.props.submit}>
          <input type="hidden" name="id" value={this.props.id} />
          {blocks.map((item, index) => {
            return (<label key={`redio-${index}`} className="c-input c-radio">
              <input
                name="cid"
                value={item.id}
                type="radio"
              />
              <span className="c-indicator"></span>
              {item.name}
            </label>);
          })}
          <Submit value="确认" />
        </form>
      </Modal>
    );
  }
}

UnVerifyModal.propTypes = {
  submit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  blocks: PropTypes.array,
}

UnVerifyModal.defaultProps = {
}


export default connect(state => {
  const { omg } = state;
  const blocks = omg[BBS_BLOCK_LIST] || [];
  return {
    blocks,
  };
})(UnVerifyModal);
