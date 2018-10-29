import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RETURNCASH_LIST ,RETURNCASH_ADD, RETURNCASH_UPDATE, RETURNCASH_DELETE, RETURNCASH_BATCH_UPDATE} from '../../../constants';
import { getConfig } from '../../../config/omg';
import history from '../../../core/history';
import { fetchAction } from '../../../actions/omg';
import AddModal from './AddModal';
import { ReturncashDataTable } from '../../tools';

class Returncash extends Component {
    constructor(props) {
    super(props);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      dataTable: {
        title: '用户返现',
        listType: RETURNCASH_LIST,
        addType: RETURNCASH_ADD,
        updateType: RETURNCASH_UPDATE,
        deleteType: RETURNCASH_DELETE,
        order: {
          column: 0,
          dir: 'desc',
        },
        start: 0,
        length: 20,
        search: {
          value: '',
          regex: false,
        },
        idColumn: 0,
        customSearch:[{name:'status',value:props.type,pattern:'equal'}],
        columns: [
          {
            name: 'id',
            cname: 'ID',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'user_id',
            cname: '用户id',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'amount',
            cname: '金额',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'type',
            cname: '交易类型',
            type: 'text',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'status',
            cname: '状态',
            type: 'text',
            searchable: false,
            orderable: false,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'remark',
            cname: '备注',
            type: 'text',
            searchable: false,
            orderable: false,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'created_at',
            cname: '创建时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'updated_at',
            cname: '更新时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
        ],
      },
    };
  }

  //  componentWillReceiveProps(nextProps) {
  //   if (this.props.type !== nextProps.type) {
  //     this.props.dispatch(fetchAction({
  //       type: QUESTION_LIST,
  //       queryObj,
  //       key: page,
  //     }))
  //   }
  // }
  handleChange(e) {
        const value = e.target.value;
        history.push(`/returncash/${value}`);
      let customSearch = [{name:'status',pattern:'equal',value:value}];
      const dataTable = Object.assign({}, this.state.dataTable, {
        customSearch,
        timeStamp: (new Date).getTime(),
      });
      this.setState({
        dataTable,
      });
  }
  handleBatchSend () {
    //todo 明天 
    this.props.dispatch(fetchAction({
      type: RETURNCASH_BATCH_UPDATE,
      method:'POST',
    }));
    const dataTable = Object.assign({}, this.state.dataTable, {
        timeStamp: (new Date).getTime(),
      });
      this.setState({
        dataTable,
      });

  }
  render() {
    const returncashType = getConfig('returncashType')
    const { type } = this.props
    // const { type } = this.props
    return (
        <div>
            <div>
              {Object.keys(returncashType).map(key => (
                  <label key={`redio-${key}`} className="c-input c-radio">
                    <input
                        checked={key === type}
                        name="main_type"
                        value={key}
                        type="radio"
                        onChange={this.handleChange.bind(this)}
                    />
                    <span className="c-indicator"></span>
                    {returncashType[key]}
                  </label>
              ))}
            </div>
            <hr />
          <div>
            <ReturncashDataTable
              config={this.state.dataTable}
              onBatchSend={this.handleBatchSend.bind(this)}
              type={this.props.type}
            />
          </div>
      </div>
    );
  }
}

Returncash.propTypes = {
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  page: PropTypes.number,
}

Returncash.defaultProps = {
}
export default connect()(Returncash);
