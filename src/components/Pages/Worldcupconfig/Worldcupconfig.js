import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WORLDCUPCONFIG_UPDATE, WORLDCUPCONFIG_ADD, WORLDCUPCONFIG_LIST, WORLDCUPCONFIG_DEL } from '../../../constants';
import { DataTable } from '../../tools';

class Worldcupconfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      dataTable: {
        title: "世界杯活动",
        listType: WORLDCUPCONFIG_LIST,
        updateType: WORLDCUPCONFIG_UPDATE,
        addType: WORLDCUPCONFIG_ADD,
        deleteType: WORLDCUPCONFIG_DEL,
        order: {
          column: 0,
          dir: 'asc',
        },
        start: 0,
        length: 50,
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
            name: 'team',
            cname: '球队',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'number',
            cname: '进球数',
            type: 'text',
            value:'0',
            searchable: true,
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
          config={this.state.dataTable}
        />
      </div>
    );
  }
}
Worldcupconfig.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

Worldcupconfig.defaultProps = {
}


export default connect(() => ({}))(Worldcupconfig);
