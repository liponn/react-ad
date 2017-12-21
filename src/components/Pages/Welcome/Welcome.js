import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import {
  WELCOME_DT_UPDATE,
  WELCOME_DT_DEL,
  WELCOME_DT_ADD,
  WELCOME_DT_LIST,
  WELCOME_ENABLE,
  WELCOME_DISABLE,
} from '../../../constants';
import { DataTable, Radio } from '../../tools';


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
    this.getBtns = this.getBtns.bind(this);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      admins: {},
      addErrorMsg: '',
      dataTable: {
        title: '解锁页欢迎语',
        listType: WELCOME_DT_LIST,
        updateType: WELCOME_DT_UPDATE,
        addType: WELCOME_DT_ADD,
        deleteType: WELCOME_DT_DEL,
        timeStamp: (new Date).getTime(),
        getBtns: this.getBtns,
        order: {
          column: 2,
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
            name: 'enable',
            cname: '是否可用',
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
  getBtns(item, callback) {
    if (!this.list) {
      this.list = callback;
    }

    return [
      <button
        key="btn-disable"
        hidden={!item.enable}
        className={'btn btn-danger-outline btn-sm'}
        data-id={item.id}
        onClick={this.disable}
      >禁用</button>,
      <button
        key="btn-enable"
        hidden={item.enable}
        className={'btn btn-success-outline btn-sm'}
        data-id={item.id}
        onClick={this.enable}
      >启用</button>,
    ];
  }

  disable(e) {
    const id = e.currentTarget.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: WELCOME_DISABLE,
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
  enable(e) {
    const id = e.currentTarget.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: WELCOME_ENABLE,
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
Welcome.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

Welcome.defaultProps = {
}


export default connect()(Welcome);


