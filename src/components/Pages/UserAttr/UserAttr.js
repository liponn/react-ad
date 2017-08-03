import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { USERATTR_DT_LIST, USERATTR_DT_UPDATE, USERATTR_DT_ADD, USERATTR_DT_DEL } from '../../../constants';
import { DataTable } from '../../tools';


class UserAttr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      dataTable: {
        title: '用户属性',
        listType: USERATTR_DT_LIST,
        updateType: USERATTR_DT_UPDATE,
        addType: USERATTR_DT_ADD,
        deleteType: USERATTR_DT_DEL,
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
            searchable: false,
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
            cname: 'textarea',
            type: 'text',
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
UserAttr.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

UserAttr.defaultProps = {
}


export default connect(() => {})(UserAttr);


