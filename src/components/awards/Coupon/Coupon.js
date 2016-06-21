import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../tools/Card';
import { AWARD_LIST } from '../../../constants';
import { commonFetch } from '../../../actions/omg';
import CouponAddModal from '../../modals/CouponAddModal';
import { showModal } from '../../../actions/modal';

class Coupon extends Component {
  constructor(props) {
    super(props);
    this.showAddModal = this.showAddModal.bind(this);
    this.state = {
      awardType: 6,
    };
  }

  componentDidMount() {
    const formData = new FormData;
    formData.append('award_type', this.state.awardType);
    this.props.dispatch(commonFetch(AWARD_LIST, 'POST', formData));
  }

  showAddModal() {
    this.props.dispatch(showModal(<CouponAddModal />));
  }

  render() {
    const btn = (
      <button
        hidden={this.props.modal}
        className="btn btn-info btn-sm pull-xs-right"
        onClick={this.showAddModal}
      >添加</button>
    );
    const { modal, addAward = false } = this.props;
    const { awardType } = this.state;
    return (
      <Card title="优惠券" btn={btn}>
        <table className="table m-b-0 table-bordered">
          <thead>
          <tr><th>id</th><th>名称</th><th>金额</th><td>操作</td></tr>
          </thead>
          <tbody>
          {this.props.items.map((item) => {
            let addAwardBtn = false;
            if (modal) {
              addAwardBtn = (
                <button
                  data-type={awardType}
                  data-id={item.id}
                  hidden={!modal}
                  className="btn btn-info btn-sm"
                  onClick={addAward}
                >添加</button>
              );
            }
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.red_money}</td>
                <td>{addAwardBtn}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </Card>
    );
  }
}

Coupon.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  modal: PropTypes.bool,
  addAward: PropTypes.func,
}

Coupon.defaultProps = {
  items: [],
  modal: false,
}

export default connect( state => {
  const { omg } = state;
  const { data } = omg[AWARD_LIST] || [];
  return {
    items: data,
  };
})(Coupon);