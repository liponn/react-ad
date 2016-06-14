import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../tools/Card';
import { AWARD_LIST } from '../../../constants';
import { commonFetch } from '../../../actions/omg';
import { RedEnvelopeAddModal } from '../../modals';
import { showModal } from '../../../actions/modal';

class RedEnvelope extends Component {
  constructor(props) {
    super(props);
    this.showAddRedEnvelopeModal = this.showAddRedEnvelopeModal.bind(this);
  }

  componentDidMount() {
    const formData = new FormData;
    formData.append('award_type', 2);
    this.props.dispatch(commonFetch(AWARD_LIST, 'POST', formData));
  }

  showAddRedEnvelopeModal() {
    this.props.dispatch(showModal(<RedEnvelopeAddModal />));
  }

  render() {
    const btn = (
      <button
        className="btn btn-info btn-sm pull-xs-right"
        onClick={this.showAddRedEnvelopeModal}
      >添加</button>
    );
    return (
      <Card title="红包" btn={btn}>
        <table className="table m-b-0 table-bordered">
          <thead>
            <tr><th>id</th><th>名称</th><th>金额</th><td>操作</td></tr>
          </thead>
          <tbody>
            {this.props.items.map((item) => (
              <tr><td>{item.id}</td><td>{item.name}</td><td>{item.red_money}</td><td></td></tr>
            ))}
          </tbody>
        </table>
      </Card>
    );
  }
}

RedEnvelope.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
}

RedEnvelope.defaultProps = {
  items: [],
}

export default connect( state => {
  const { omg } = state;
  const { data } = omg[AWARD_LIST] || [];
  return {
    items: data,
  }
})(RedEnvelope);