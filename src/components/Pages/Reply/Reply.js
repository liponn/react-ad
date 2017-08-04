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
  BBS_COMMENT_DT_LIST,
  BBS_USER_ADMIN_LIST,
  BBS_COMMENT_REPLY,
} from '../../../constants';
import { DataTable, Radio } from '../../tools';
import ReplayModal from './ReplayModal';


class Reply extends Component {
  constructor(props) {
    super(props);
    this.typeChange = this.typeChange.bind(this);
    this.verify = this.verify.bind(this);
    this.getBtns = this.getBtns.bind(this);
    this.showReplayModal = this.showReplayModal.bind(this);
    this.fetchAdmins = this.fetchAdmins.bind(this);
    this.replay = this.replay.bind(this);
    this.getAdmins = this.getAdmins.bind(this);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      admins:{},
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
            tableShow: (object) => (object && <div title={object.content} className="ellipsis">{object.content.substring(0,100)}{object.content.length > 100 ? '...': ''}</div>),
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

  componentDidMount(){
      this.fetchAdmins();
  }
  getBtns(item, callback) {
    if (!this.list) {
      this.list = callback;
    }
    if (this.state.dataTable.customSearch.value === 1) {
      return [
          <button
              key="btn-replay"
              className="btn btn-success-outline btn-sm"
              data-id={item.id}
              onClick={this.showReplayModal}
          >回复</button>,
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

  fetchAdmins(){
      this.props.dispatch(fetchAction({
          type: BBS_USER_ADMIN_LIST,
          method: 'GET',
      })).then(json => {
          if (json.error_code === 0) {
              const admins = {};
              for (let i = 0; i < json.data.length; i++) {
                  admins[json.data[i].user_id] = json.data[i].nickname;
              }
              this.setState({
                  admins,
              });
          } else {
              alert(json.error_msg);
          }
      });
  }

  getAdmins(){
      return this.state.admins;
  }

  showReplayModal(e) {
      const id = e.currentTarget.dataset.id;
      this.props.dispatch(
          showModal(
              <ReplayModal
                  submit={this.replay}
                  getAdmins={this.getAdmins}
                  id={id}
              />
          )
      );
  }

  replay(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      this.props.dispatch(fetchAction({
          type: BBS_COMMENT_REPLY,
          method: 'POST',
          formData,
      })).then((json) => {
          if (json.error_code === 0) {
              this.props.dispatch(hideModal(true));
              alert('回复成功');
          } else {
              alert(json.data.error_msg);
          }
      });
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


