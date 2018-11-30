import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import {
  PRIZETYPE_DT_ADD,
  PRIZETYPE_DT_UPDATE,
  PRIZETYPE_DT_LIST,
  PRIZETYPE_DEL,
  PRIZETYPE_CHANGE_STATUS,
  PRIZETYPE_UP,
  PRIZETYPE_DOWN,
} from '../../../constants';
import { DataTable, Radio } from '../../tools';


class Prizetype extends Component {
  constructor(props) {
    super(props);
    this.getBtns = this.getBtns.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);

    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      admins: {},
      addErrorMsg: '',
      dataTable: {
        title: '奖品类型',
        listType: PRIZETYPE_DT_LIST,
        updateType: PRIZETYPE_DT_UPDATE,
        addType: PRIZETYPE_DT_ADD,
        deleteType: PRIZETYPE_DEL,
        timeStamp: (new Date).getTime(),
        getBtns: this.getBtns,
        order: false,
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
            name: 'name',
            cname: '奖品类名',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'alias_name',
            cname: '虚拟别名',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'is_online',
            cname: '状态',
            type: 'none',
            tableType: 'line',
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
        ],
      },
    };
  }

  up(e){
    const id = e.currentTarget.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: PRIZETYPE_UP,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.list();
      } else {
        alert(json.data.error_msg);
      }
    });
  }

  down(e){
    const id = e.currentTarget.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: PRIZETYPE_DOWN,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.list();
      } else {
        alert(json.data.error_msg);
      }
    });
  }

  changeStatus(e){
    const id = e.currentTarget.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: PRIZETYPE_CHANGE_STATUS,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.list();
      } else {
        alert(json.data.error_msg);
      }
    });
  }

  getBtns(item, callback) {
    if (!this.list) {
      this.list = callback;
    }

    return [
      <button
        key="btn-change-status"
        className={'btn btn-danger-outline btn-sm'}
        data-id={item.id}
        onClick={this.changeStatus}
      >{item.is_online ? "下线" : "上线"}</button>,
      <button
        key="btn-enable"
        className={'btn btn-success-outline btn-sm'}
        data-id={item.id}
        onClick={this.up}
      >上移</button>,
      <button
        key="btn-enable-xia"
        className={'btn btn-success-outline btn-sm'}
        data-id={item.id}
        onClick={this.down}
      >下移</button>,
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
Prizetype.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

Prizetype.defaultProps = {
}


export default connect()(Prizetype);


