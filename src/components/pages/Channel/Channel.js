import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { CHANNEL_DEL, CHANNEL_PUT, CHANNEL_ADD, CHANNEL_DT_LIST } from '../../../constants';
import { DataTable } from '../../tools';


class Channel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      dataTable: {
        listType: CHANNEL_DT_LIST,
        updateType: CHANNEL_PUT,
        addType: CHANNEL_ADD,
        deleteType: CHANNEL_DEL,
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
            name: 'name',
            cname: '备注名称',
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
            cname: '渠道名称',
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
        ],
      },
    };
  }
  render() {
    return (
      <div>
        <DataTable
          title="渠道"
          config={this.state.dataTable}
        />
      </div>
    );
  }
}
Channel.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

Channel.defaultProps = {
}


export default connect(() => {})(Channel);


