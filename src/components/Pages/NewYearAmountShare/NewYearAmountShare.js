import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NEW_YEAR_AMOUNT_SHARE, NEW_YEAR_AMOUNT_SHARE_EXPORT } from '../../../constants';
import { Card, Pagination, DateTimeInput } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { getApi } from '../../../config/omg'


class NewYearAmountShare extends Component {
    constructor(props) {
        super(props);
        this.freshData = this.freshData.bind(this);
        this.exportData = this.exportData.bind(this);
    }

    componentDidMount () {
        this.freshData(this.props.page);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
            this.freshData(nextProps.page);
        }
    }

    freshData (page) {
        this.props.dispatch(fetchAction({
            type:NEW_YEAR_AMOUNT_SHARE,
            queryObj: { page },
            key: page,
        }))
    }
    exportData () {
        const type = NEW_YEAR_AMOUNT_SHARE_EXPORT;
        const requestUri = getApi(type);
        location.href = requestUri;
    }
    render() {
        const items = this.props.itemList[this.props.page] || [];
        this.items = items;
        const addBtn = (
            <button
            onClick={this.exportData}
            className="btn btn-sm btn-info pull-right"
            >
            <i className="fa fa-plus">导出未绑卡用户</i>
            </button>
            );
    return (
        <div>
        <Card title="19年新年分享现金统计" btn={addBtn}>
        <table className="table table-bordered m-b-0 table-hover">
        <thead>
        <tr>
            <th>日期</th>
            <th>分享总数</th>
            <th>分享总人数</th>
            <th>领取总人数</th>
            <th>注册且领奖人数</th>
            <th>+绑卡且开奖人数1</th>
            <th>+绑卡且开奖人数2</th>
            <th>=领取现金奖励且到账人数</th>
            <th>总成本</th>
            <th>在途成本</th>
            <th>分享人获得金额</th>
            <th>领取人获得金额</th>
        </tr>
        </thead>
        <tbody>
        {items.map((item, index) => (
        <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.counts}</td>
            <td>{item.share_users}</td>
            <td>{item.receive_users}</td>
            <td>{item.register_num}</td>
            <td>{item.bind_card_num}</td>
            <td>{item.old_user_num}</td>
            <td>{item.register_num + item.bind_card_num + item.old_user_num}</td>
            <td>{item.total_amount}</td>
            <td>{item.un_send_amount}</td>
            <td>{item.total_share_amount}</td>
            <td>{item.total_receive_amount}</td>
        </tr>
      ))}
      </tbody>
    </table>
    </Card>
  </div>
  );
  }
}
NewYearAmountShare.propTypes = {
  itemList: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
}

NewYearAmountShare.defaultProps = {
  itemList: {},
}

export default connect(state => {
    const { omg } = state;
    const itemList = omg[NEW_YEAR_AMOUNT_SHARE] || {};
    return {
        itemList,
    };
})(NewYearAmountShare);


