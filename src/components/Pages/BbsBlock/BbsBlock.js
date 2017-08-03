import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { BBS_TOGGLE_STATUS, BBS_BLOCK_DT_UPDATE, BBS_BLOCK_DT_DEL, BBS_BLOCK_DT_ADD , BBS_BLOCK_DT_LIST } from '../../../constants';
import { DataTable, Radio } from '../../tools';


class BbsBlock extends Component {
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
        title: '拒审原因',
        listType: BBS_BLOCK_DT_LIST,
        updateType: BBS_BLOCK_DT_UPDATE,
        addType: BBS_BLOCK_DT_ADD,
        deleteType: BBS_BLOCK_DT_DEL,
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
BbsBlock.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

BbsBlock.defaultProps = {
}


export default connect()(BbsBlock);


