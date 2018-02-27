import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GLOBALATTR_DT_LIST, GLOBALATTR_DT_UPDATE, GLOBALATTR_DT_ADD, GLOBALATTR_DT_DEL } from '../../../constants';
import { DataTable } from '../../tools';


class GlobalAttr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      dataTable: {
        title: '全局属性',
        listType: GLOBALATTR_DT_LIST,
        updateType: GLOBALATTR_DT_UPDATE,
        addType: GLOBALATTR_DT_ADD,
        deleteType: GLOBALATTR_DT_DEL,
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
        columns: [
          {
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'key',
            cname: 'key',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'number',
            cname: 'number',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'string',
            cname: 'string',
            type: 'text',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'text',
            cname: 'text',
            type: 'textarea',
            searchable: false,
            orderable: true,
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
  render() {
    return (
      <div>
        <DataTable
          config={this.state.dataTable}
        />
      </div>
    );
  }
}
GlobalAttr.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

GlobalAttr.defaultProps = {
}


export default connect(() => {})(GlobalAttr);


