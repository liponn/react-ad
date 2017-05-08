import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { BBS_CONFIG_DT_UPDATE, BBS_CONFIG_DT_DEL, BBS_CONFIG_DT_ADD , BBS_CONFIG_DT_LIST } from '../../../constants';
import { DataTable} from '../../tools';


class BbsConfig extends Component {
  constructor(props) {
    super(props);
    this.verify = this.verify.bind(this);
    this.getBtns = this.getBtns.bind(this);
    this.state = {
      name: '',
      alias_name: '',
      pre: '',
      errorMsg: '',
      addErrorMsg: '',
      dataTable: {
        title: '社区配置',
        listType: BBS_CONFIG_DT_LIST,
        updateType: BBS_CONFIG_DT_UPDATE,
        addType: BBS_CONFIG_DT_ADD,
        deleteType: BBS_CONFIG_DT_DEL,
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
            name: 'remark',
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
            name: 'key',
            cname: '标识',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            name: 'val',
            cname: '值',
            type: 'text',
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
  getBtns(item, callback) {
    if (!this.list) {
      this.list = callback;
    }
    return [
    ];
  }
  verify(e) {
    const id = e.currentTarget.dataset.id;
    const type = e.currentTarget.dataset.type;
    const typeValue = +e.currentTarget.dataset.tvalue;
    const formData = new FormData;
    formData.append('id', id);
    formData.append(type, typeValue);
    this.props.dispatch(fetchAction({
      type: BBS_TOGGLE_STATUS,
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
BbsConfig.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

BbsConfig.defaultProps = {
}


export default connect()(BbsConfig);


