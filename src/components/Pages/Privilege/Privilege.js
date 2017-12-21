import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PRIVILEGE_UPDATE, PRIVILEGE_ADD, PRIVILEGE_LIST, PRIVILEGE_DEL } from '../../../constants';
import { DataTable } from '../../tools';


class Privilege extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      dataTable: {
        title: '权限',
        listType: PRIVILEGE_LIST,
        updateType: PRIVILEGE_UPDATE,
        addType: PRIVILEGE_ADD,
        deleteType: PRIVILEGE_DEL,
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
            name: 'name',
            cname: '组名称',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'privilege',
            cname: '权限',
            type: 'textarea',
            searchable: true,
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
Privilege.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

Privilege.defaultProps = {
}


export default connect(() => ({}))(Privilege);
