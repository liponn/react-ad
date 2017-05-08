import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { BBS_SECTION_OPEN, BBS_SECTION_CLOSE, BBS_SECTION_DT_UPDATE, BBS_SECTION_DT_DEL, BBS_SECTION_DT_ADD , BBS_SECTION_DT_LIST } from '../../../constants';
import { DataTable, Radio } from '../../tools';


class Section extends Component {
  constructor(props) {
    super(props);
    this.toggleEnable = this.toggleEnable.bind(this);
    this.getBtns = this.getBtns.bind(this);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      dataTable: {
        title: '板块',
        listType: BBS_SECTION_DT_LIST,
        updateType: BBS_SECTION_DT_UPDATE,
        addType: BBS_SECTION_DT_ADD,
        deleteType: BBS_SECTION_DT_DEL,
        timeStamp: (new Date).getTime(),
        getBtns: this.getBtns,
        order: {
          column: 5,
          dir: 'desc',
        },
        start: 0,
        length: 20,
        search: {
          value: '',
          regex: false,
        },
        customSearch: false,
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
            cname: '名称',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'description',
            cname: '描述',
            type: 'textarea',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'isuse',
            cname: '是否可用',
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
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'sort',
            cname: '权重',
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
      <button
        key="btn-verify"
        className={`btn ${item.isuse ? 'btn-warning-outline' : 'btn-success-outline'} btn-sm`}
        data-id={item.id}
        data-type="isuse"
        data-tvalue={item.isuse ? 0 : 1}
        onClick={this.toggleEnable}
      >通过</button>,
    ];
  }
  toggleEnable(e) {
    const id = e.currentTarget.dataset.id;
    const typeValue = +e.currentTarget.dataset.tvalue;
    const formData = new FormData;
    const type = typeValue ? BBS_SECTION_OPEN : BBS_SECTION_CLOSE;
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
  render() {
    const customSearch = this.state.dataTable.customSearch;
    return (
      <div>
        <DataTable
          config={this.state.dataTable}
        />
      </div>
    );
  }
}
Section.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

Section.defaultProps = {
}


export default connect()(Section);


