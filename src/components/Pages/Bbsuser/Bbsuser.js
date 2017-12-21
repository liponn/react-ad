import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { BBS_USER_ADMIN,BBS_USER_UPDATE, BBS_USER_UNADMIN, BBS_USER_BLOCK, BBS_USER_UNBLOCK, BBS_USER_DT_UPDATE, BBS_USER_DT_DEL, BBS_USER_DT_ADD , BBS_USER_DT_LIST, BBS_USER_SEARCH_LIST
} from '../../../constants';
import { BbsUserDataTable, Radio } from '../../tools';


class Bbsuser extends Component {
  constructor(props) {
    super(props);
    this.typeChange = this.typeChange.bind(this);
    this.toggleBlock = this.toggleBlock.bind(this);
    this.toggleAdmin = this.toggleAdmin.bind(this);
    this.getBtns = this.getBtns.bind(this);
    this.getUserTypes = this.getUserTypes.bind(this);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      dataTable: {
        title: '论坛用户',
        identify: 0,
        listType: BBS_USER_SEARCH_LIST,
        updateType: BBS_USER_UPDATE,
        addType: BBS_USER_DT_ADD,
        deleteType: BBS_USER_DT_DEL,
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
        customSearch:[],
        defaultSearch:[],
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
            searchable: false,
            orderable: false,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'head_img',
            cname: '头像',
            type: 'attachment',
            tableType: 'img_box',
            searchable: false,
            orderable: false,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'phone',
            cname: '手机号',
            type: 'text',
            searchable: true,
            orderable: false,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'nickname',
            cname: '昵称',
            type: 'text',
            searchable: false,
            orderable: false,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'isblack',
            cname: '用户状态',
            type: 'none',
            tableType:'radio',
            searchable: false,
            orderable: false,
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
            name: 'isadmin',
            cname: '用户类型',
            type: 'select',
            tableType:'radio3',
            searchable: false,
            getOptions:this.getUserTypes,
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
    return [
      <button
        key="btn-block"
        className={`btn ${item.isblack ? 'btn-warning-outline' : 'btn-success-outline'} btn-sm`}
        data-id={item.id}
        data-type="isblack"
        data-tvalue={item.isblack ? 0 : 1}
        onClick={this.toggleBlock}
      >拉黑</button>,
      <button
        key="btn-admin"
        className={`btn ${item.isadmin ? 'btn-warning-outline' : 'btn-success-outline'} btn-sm`}
        data-id={item.id}
        data-type="isblack"
        data-tvalue={item.isadmin ? 0 : 1}
        onClick={this.toggleAdmin}
      >马甲</button>,
    ];
  }

  getUserTypes() {
      return {
          0:"普通用户",
          1:"官方号",
          2:"马甲号"
      };
  }

  toggleBlock(e) {
    const id = e.currentTarget.dataset.id;
    const typeValue = +e.currentTarget.dataset.tvalue;
    const formData = new FormData;
    const type = typeValue ? BBS_USER_BLOCK : BBS_USER_UNBLOCK;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type,
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
  toggleAdmin(e) {
    const id = e.currentTarget.dataset.id;
    const typeValue = +e.currentTarget.dataset.tvalue;
    const formData = new FormData;
    const type = typeValue ? BBS_USER_ADMIN : BBS_USER_UNADMIN;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type,
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
    const value = e.currentTarget.value;
    let defaultSearch = [];
    let identify = 0;
    switch (value) {
      case 'all':
       defaultSearch = [];
        identify = 0;
        break;
      case 'admin':
          defaultSearch = [
                {name:'isadmin',pattern:'equal',value:2}
              ];
        identify = 1;
        break;
      case 'black':
          defaultSearch = [
              {name:'isblack',pattern:'equal',value:1}
          ];
        identify = 2;
        break;
      default:
        identify = 0;
        defaultSearch = [];
        break;
    }
    const dataTable = Object.assign({}, this.state.dataTable, {
      defaultSearch,
      identify,
      timeStamp: (new Date).getTime(),
    });
    this.setState({
      dataTable,
    });
  }
  render() {
    const defaultSearch = this.state.dataTable.defaultSearch;
    return (
      <div>
        <Radio
          labelName="全部"
          name="userfilter"
          value="all"
          checked={defaultSearch.length == 0}
          onChange={this.typeChange}
        />
        <Radio
          labelName="马甲"
          name="userfilter"
          value="admin"
          checked={defaultSearch.length>0 && defaultSearch[0].name === 'isadmin'}
          onChange={this.typeChange}
        />
        <Radio
          labelName="已拉黑"
          name="userfilter"
          value="black"
          checked={defaultSearch.length>0 && defaultSearch[0].name === 'isblack'}
          onChange={this.typeChange}
        />
        <hr />
        <BbsUserDataTable
          config={this.state.dataTable}
        />
      </div>
    );
  }
}
Bbsuser.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

Bbsuser.defaultProps = {
}


export default connect()(Bbsuser);


