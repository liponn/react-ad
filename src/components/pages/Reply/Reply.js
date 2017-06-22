import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import {
  BBS_COMMENT_UNVERIFY,
  BBS_COMMENT_VERIFY,
  BBS_COMMENT_DT_UPDATE,
  BBS_COMMENT_DT_DEL,
  BBS_COMMENT_DT_ADD,
  BBS_COMMENT_DT_LIST
} from '../../../constants';
import { DataTable, Radio } from '../../tools';
import UnVerifyModal from './UnVerifyModal';


class Reply extends Component {
  constructor(props) {
    super(props);
    this.typeChange = this.typeChange.bind(this);
    this.verify = this.verify.bind(this);
    this.getBtns = this.getBtns.bind(this);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      dataTable: {
        title: '评论',
        listType: BBS_COMMENT_DT_LIST,
        updateType: BBS_COMMENT_DT_UPDATE,
        addType: BBS_COMMENT_DT_ADD,
        deleteType: BBS_COMMENT_DT_DEL,
        timeStamp: (new Date).getTime(),
        noDelete: true,
        getBtns: this.getBtns,
        withs: ['thread'],
        identify: 0,
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
        customSearch: {
          name: 'isverify',
          pattern: 'equal',
          value: 0,
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
            name: 'content',
            cname: '内容',
            type: 'textarea',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'isverify',
            cname: '审核',
            type: 'none',
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
            name: 'thread',
            cname: '帖子详情',
            type: 'none',
            tableType: 'object',
            tableShow: (object) => (object && object.content),
            searchable: false,
            orderable: false,
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
    if (this.state.dataTable.customSearch.value === 1) {
      return [
        <button
          key="btn-unverify"
          className={'btn btn-warning-outline btn-sm'}
          data-id={item.id}
          data-type="isverify"
          data-tvalue={2}
          onClick={this.verify}
        >拒绝</button>,
      ];
    }
    if (this.state.dataTable.customSearch.value === 2) {
      return [
        <button
          key="btn-verify"
          className={'btn btn-success-outline btn-sm'}
          data-id={item.id}
          data-type="isverify"
          data-tvalue={1}
          onClick={this.verify}
        >恢复</button>,
      ];
    }
    return [
      <button
        key="btn-verify"
        className={'btn btn-success-outline btn-sm'}
        data-id={item.id}
        data-type="isverify"
        data-tvalue={1}
        onClick={this.verify}
      >通过</button>,
      <button
        key="btn-unverify"
        className={'btn btn-warning-outline btn-sm'}
        data-id={item.id}
        data-type="isverify"
        data-tvalue={2}
        onClick={this.verify}
      >拒绝</button>,
    ];
  }
  verify(e) {
    const id = e.currentTarget.dataset.id;
    const formData = new FormData;
    const typeValue = +e.currentTarget.dataset.tvalue;
    formData.append('id', id);
    formData.append('isverify', typeValue);
    this.props.dispatch(fetchAction({
      type: BBS_COMMENT_VERIFY,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.list();
      } else {
        alert(json.error_msg);
      }
    });
  }
  typeChange(e) {
    const value = +e.currentTarget.value;
    const customSearch = Object.assign({}, this.state.dataTable.customSearch, { value });
    const dataTable = Object.assign({}, this.state.dataTable, {
      customSearch,
      identify: value,
      timeStamp: (new Date).getTime(),
    });
    this.setState({
      dataTable,
    });
  }
  render() {
    const customSearch = this.state.dataTable.customSearch;
    return (
      <div>
        <Radio
          labelName="未审核"
          name="isVerify"
          value="0"
          checked={customSearch.value === 0}
          onChange={this.typeChange}
        />
        <Radio
          labelName="已审核"
          name="isVerify"
          value="1"
          checked={customSearch.value === 1}
          onChange={this.typeChange}
        />
        <Radio
          labelName="已拒绝"
          name="isVerify"
          value="2"
          checked={customSearch.value === 2}
          onChange={this.typeChange}
        />
        <hr />
        <DataTable
          config={this.state.dataTable}
        />
      </div>
    );
  }
}
Reply.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

Reply.defaultProps = {
}


export default connect()(Reply);


