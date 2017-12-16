import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import {
  BBS_SECTION_LIST,
  BBS_USER_ADMIN_LIST,
  BBS_THREAD_RESTORE,
  BBS_THREAD_TOGGLE_STATUS,
  BBS_THREAD_DT_UPDATE,
  BBS_THREAD_DT_DEL,
  BBS_THREAD_DT_ADD,
  BBS_THREAD_DT_LIST,
  BBS_THREAD_UNVERIFY,
  BBS_COMMENT_DT_ADD,
  BBS_COMMENT_VERIFY,
  BBS_THREAD_VERIFY,
} from '../../../constants';
import { DataTable, Radio } from '../../tools';
import UnVerifyModal from './UnVerifyModal';
import ReplayModal from './ReplayModal';



class Thread extends Component {
  constructor(props) {
    super(props);
    this.typeChange = this.typeChange.bind(this);
    this.verify = this.verify.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.getBtns = this.getBtns.bind(this);
    this.getSections = this.getSections.bind(this);
    this.fetchSections = this.fetchSections.bind(this);
    this.getAdmins = this.getAdmins.bind(this);
    this.fetchAdmins = this.fetchAdmins.bind(this);
    this.unVerify = this.unVerify.bind(this);
    this.restore = this.restore.bind(this);
    this.showUnVerifyModal = this.showUnVerifyModal.bind(this);
    this.showReplayModal = this.showReplayModal.bind(this);
    this.replay = this.replay.bind(this);
    this.verifyReplay = this.verifyReplay.bind(this);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      admins: {},
      sections: {},
      addErrorMsg: '',
      dataTable: {
        title: '帖子管理',
        listType: BBS_THREAD_DT_LIST,
        updateType: BBS_THREAD_DT_UPDATE,
        addType: BBS_THREAD_DT_ADD,
        deleteType: BBS_THREAD_DT_DEL,
        timeStamp: (new Date).getTime(),
        getBtns: this.getBtns,
        forbiddenDefaultBtns: false,
        noDelete: true,
        onlyTrashed: false,
        identify: 0,
        withs: ['section', 'user'],
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
            type: 'select',
            updateType: 'text',
            getOptions: this.getAdmins,
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'title',
            cname: '帖子标题',
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
            cname: '帖子内容',
            type: 'textarea',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'type_id',
            cname: '板块id',
            type: 'select',
            getOptions: this.getSections,
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
            {
                name: 'video_code',
                cname: '视频链接',
                type: 'text',
                searchable: false,
                orderable: true,
                search: {
                    value: '',
                    regex: false,
                },
            },
          /*{
            name: 'url',
            cname: '跳转地址',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'cover',
            cname: '封面',
            tableType: 'img_box',
            type: 'attachment',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },*/
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
            name: 'istop',
            cname: '置顶',
            type: 'check',
            tableType:'radio',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'isgreat',
            cname: '加精',
            type: 'none',
            tableType:'radio',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'ishot',
            cname: '最热',
            type: 'none',
            tableType: 'radio',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'isverify',
            cname: '审核',
            type: 'check',
            tableType: 'radio',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
            {
                name: 'isofficial',
                cname: '官方帖',
                type: 'check',
                tableType: 'radio',
                searchable: false,
                orderable: true,
                search: {
                    value: '',
                    regex: false,
                },
            },
          {
            name: 'comment_num',
            cname: '评论数',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
            {
                name: 'zan_num',
                cname: '点赞数',
                type: 'none',
                searchable: false,
                orderable: true,
                search: {
                    value: '',
                    regex: false,
                },
            },
            {
                name: 'collection_num',
                cname: '收藏数',
                type: 'none',
                searchable: false,
                orderable: true,
                search: {
                    value: '',
                    regex: false,
                },
            },
          {
            name: 'section',
            cname: '板块',
            type: 'none',
            tableType: 'object',
            tableShow: (object) => (object && object.name),
            searchable: false,
            orderable: false,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'user',
            cname: '用户',
            type: 'none',
            tableType: 'object',
            tableShow: (object) => (object && object.nickname),
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
  componentDidMount() {
    this.fetchAdmins();
    this.fetchSections();
  }
  getBtns(item, callback) {
    if (!this.list) {
      this.list = callback;
    }
    if (this.state.dataTable.onlyTrashed) {
      return [
        <button
          key="btn-"
          className={'btn btn-success-outline btn-sm'}
          data-id={item.id}
          onClick={this.restore}
        >恢复</button>
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
    if (!this.state.dataTable.customSearch.value) {
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
        >拒绝</button>];
    }

    return [
      <button
        key="btn-replay"
        className="btn btn-success-outline btn-sm"
        data-id={item.id}
        onClick={this.showReplayModal}
      >回复</button>,
      <button
        key="btn-top"
        className={`btn ${item.istop ? 'btn-warning-outline' : 'btn-success-outline'} btn-sm`}
        data-id={item.id}
        data-type="istop"
        data-tvalue={item.istop ? 0 : 1}
        onClick={this.toggleStatus}
      >置顶</button>,
      <button
        key="btn-great"
        className={`btn ${item.isgreat ? 'btn-warning-outline' : 'btn-success-outline'} btn-sm`}
        data-id={item.id}
        data-type="isgreat"
        data-tvalue={item.isgreat ? 0 : 1}
        onClick={this.toggleStatus}
      >加精</button>,
      <button
        key="btn-hot"
        className={`btn ${item.ishot ? 'btn-warning-outline' : 'btn-success-outline'} btn-sm`}
        data-id={item.id}
        data-type="ishot"
        data-tvalue={item.ishot ? 0 : 1}
        onClick={this.toggleStatus}
      >最热</button>,
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

  getAdmins() {
    return this.state.admins;
  }
  getSections() {
    return this.state.sections;
  }
  fetchAdmins() {
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
  fetchSections() {
    this.props.dispatch(fetchAction({
      type: BBS_SECTION_LIST,
      method: 'GET',
    })).then(json => {
      if (json.error_code === 0) {
        const sections = {};
        for (let i = 0; i < json.data.length; i++) {
          sections[json.data[i].id] = json.data[i].name;
        }
        this.setState({
          sections,
        });
      } else {
        alert(json.error_msg);
      }
    });
  }

  restore(e) {
    const id = e.currentTarget.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: BBS_THREAD_RESTORE,
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
  verify(e) {
    const id = e.currentTarget.dataset.id;
    const type = e.currentTarget.dataset.type;
    const typeValue = +e.currentTarget.dataset.tvalue;
    const formData = new FormData;
    formData.append('id', id);
    formData.append(type, typeValue);
    this.props.dispatch(fetchAction({
      type: BBS_THREAD_VERIFY,
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
  toggleStatus(e) {
    const id = e.currentTarget.dataset.id;
    const type = e.currentTarget.dataset.type;
    const typeValue = +e.currentTarget.dataset.tvalue;
    const formData = new FormData;
    formData.append('id', id);
    formData.append(type, typeValue);
    this.props.dispatch(fetchAction({
      type: BBS_THREAD_TOGGLE_STATUS,
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
      type: BBS_COMMENT_DT_ADD,
      method: 'POST',
      formData,
    })).then((json) => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        if (json.data.id) {
          this.verifyReplay(json.data.id);
        }
      } else {
        alert(json.data.error_msg);
      }
    });
  }
  verifyReplay(id) {
    const formData = new FormData;
    formData.append('id', id);
    formData.append('isverify', 1);
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
  showUnVerifyModal(e) {
    const id = e.currentTarget.dataset.id;
    this.props.dispatch(
      showModal(
        <UnVerifyModal
          submit={this.unVerify}
          id={id}
        />
      )
    );
  }
  unVerify(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: BBS_THREAD_UNVERIFY,
      method: 'POST',
      formData,
    })).then((json) => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.list();
      } else {
        alert(json.data.error_msg);
      }
    });
  }
  typeChange(e) {
    const value = +e.currentTarget.value;
    let dataTable = {};
    if (value !== 3) {
      const customSearch = Object.assign({}, this.state.dataTable.customSearch, {
        name: 'isverify',
        pattern: 'equal',
        value,
      });
      dataTable = Object.assign({}, this.state.dataTable, {
        forbiddenDefaultBtns: false,
        customSearch,
        onlyTrashed: false,
        identify: value,
        timeStamp: (new Date).getTime(),
      });
    } else {
        dataTable = Object.assign({}, this.state.dataTable, {
        forbiddenDefaultBtns: true,
        customSearch: false,
        onlyTrashed: true,
        identify: value,
        timeStamp: (new Date).getTime(),
      });
    }

    this.setState({
      dataTable,
    });
  }
  render() {
    const customSearch = this.state.dataTable.customSearch;
    const onlyTrashed = this.state.dataTable.onlyTrashed;
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
Thread.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

Thread.defaultProps = {
}


export default connect()(Thread);


