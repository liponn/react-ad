import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { USER_LOG_LIST } from '../../../constants';
import { Card, Pagination, DateTimeInput } from '../../tools';
import { fetchAction } from '../../../actions/omg';


class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchObj : {}
    };
  }

  componentDidMount () {
    this._loadData(this.props.page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.fresh(nextProps.page);
    }
  }

  _loadData (page, searchObj) {
    const queryObj = {...this.state.searchObj, page}
    this.props.dispatch(fetchAction({
      type:USER_LOG_LIST,
      // key: `${type}_${page}`,
      queryObj,
    }))
  }

  handleSearch(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const searchObj = {};
        searchObj.start_time = formData.get('start_time')
        searchObj.end_time = formData.get('end_time')
        this.setState({
            searchObj,
        });
        this._loadData(this.props.page, searchObj);
    }

    handleNextPage(page) {
        this.setState({
            page,
        });
        this._loadData(page)
    }

    handleReset() {
        this.setState({
            searchObj: {},
        });
        this._loadData(this.props.page, {});
    }
  render() {
    const logList = this.props.logList;
    let items = [];
    if (logList.data) {
      items = logList.data;
    }
    return (
      <div>
        <form className="form-inline m-b-1" onSubmit={this.handleSearch.bind(this)} onReset={this.handleReset.bind(this)}>
              <div className="form-group">
                  <DateTimeInput  labelName="开始时间"  name="start_time" />
                  <DateTimeInput  labelName="结束时间"  name="end_time" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">查询</button>
                <input type="reset" className="btn btn-info" value="重置" />
              </div>
          </form>
        <Card title="日志列表">
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>用户ID</th>
                <th>操作类型</th>
                <th>数据</th>
                <th>操作时间</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.user_id}</td>
                <td>{item.type}</td>
                <td>{item.data}</td>
                <td>{item.updated_at}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </Card>
        <Pagination currentPage={logList.current_page} lastPage={logList.last_page} onClick={this.handleNextPage.bind(this)} unurl={true}/>
      </div>
    );
  }
}
Log.propTypes = {
  dispatch: PropTypes.func.isRequired,
  logList: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired
}

Log.defaultProps = {
}


export default connect(() => ( state => {
  const { omg } = state;
  const logList = omg[USER_LOG_LIST] || {}
  return {
    logList
  }
}))(Log);
