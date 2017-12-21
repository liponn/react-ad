import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { BBS_MESSAGE_DT_UPDATE, BBS_MESSAGE_DT_DEL, BBS_MESSAGE_DT_ADD , BBS_MESSAGE_DT_LIST } from '../../../constants';
import { DataTable, Radio } from '../../tools';


class BbsMessage extends Component {
  constructor(props) {
    super(props);
    this.getBtns = this.getBtns.bind(this);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      dataTable: {
        title: '社区消息',
        listType: BBS_MESSAGE_DT_LIST,
        updateType: BBS_MESSAGE_DT_UPDATE,
        addType: BBS_MESSAGE_DT_ADD,
        deleteType: BBS_MESSAGE_DT_DEL,
        timeStamp: (new Date).getTime(),
        getBtns: this.getBtns,
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
        customSearch: false,
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
            cname: '用户ID',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'from_user_id',
            cname: '来源用户ID',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'tid',
            cname: '帖子ID',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'cid',
            cname: '评论ID',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'content',
            cname: '内容',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'created_at',
            cname: '创建时间',
            type: 'text',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'isread',
            cname: '是否已读',
            type: 'text',
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
  getBtns(item, callback) {
    if (!this.list) {
      this.list = callback;
    }
    return [
    ];
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
BbsMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

BbsMessage.defaultProps = {
}


export default connect()(BbsMessage);


