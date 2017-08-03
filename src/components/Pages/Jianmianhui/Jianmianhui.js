import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { JIANMIANHUI_DT_DEL, JIANMIANHUI_DT_UPDATE, JIANMIANHUI_DT_ADD, JIANMIANHUI_DT_LIST } from '../../../constants';
import { DataTable } from '../../tools';


class Jianmianhui extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      dataTable: {
        title: '见面会',
        listType: JIANMIANHUI_DT_LIST,
        updateType: JIANMIANHUI_DT_UPDATE,
        addType: JIANMIANHUI_DT_ADD,
        deleteType: JIANMIANHUI_DT_DEL,
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
            name: 'openid',
            cname: 'openid',
            type: 'none',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'nick_name',
            cname: '昵称',
            type: 'none',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'headimgurl',
            cname: '头像',
            type: 'none',
            tableType: 'img_box',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'iswin',
            cname: '是否中奖',
            type: 'check',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'isdefault',
            cname: '场内人员',
            type: 'check',
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
Jianmianhui.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

Jianmianhui.defaultProps = {
}


export default connect(() => {})(Jianmianhui);



