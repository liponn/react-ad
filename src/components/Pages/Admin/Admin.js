import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ADMIN_UPDATE, ADMIN_ADD, ADMIN_LIST, ADMIN_DEL } from '../../../constants';
import { DataTable } from '../../tools';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      dataTable: {
        title: "用户组",
        listType: ADMIN_LIST,
        updateType: ADMIN_UPDATE,
        addType: ADMIN_ADD,
        deleteType: ADMIN_DEL,
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
            cname: '姓名',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'mobile',
            cname: '手机号',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'privilege_id',
            cname: '权限组ID',
            type: 'text',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'last_login',
            cname: '上次登录',
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
Admin.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

Admin.defaultProps = {
}


export default connect(() => ({}))(Admin);
