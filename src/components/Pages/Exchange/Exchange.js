import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import {
  EXCHANGE_LIST,
  EXCHANGE_DT_UPDATE,
  EXCHANGE_EXPORT,
  EXCHANGE_IMPORT,
} from '../../../constants';
import { Radi,Pagination } from '../../tools';
import { DatePicker,Select,Form,Input,Checkbox } from "antd";
import ExchangeAddModal from '../../modals/ExchangeAddModal';
import ExchangeUploadModal from '../../modals/ExchangeUploadModal';


class Exchange extends Component {
  constructor(props) {
    super(props);
    this.list = this.list.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
    this.changeLength = this.changeLength.bind(this);
    this.changePage = this.changePage.bind(this);
    this.batchDel = this.batchDel.bind(this);
    this.showUpdateModal = this.showUpdateModal.bind(this);
    this.update = this.update.bind(this);
    this.export = this.export.bind(this);
    this.import = this.import.bind(this);
    this.showImportModal = this.showImportModal.bind(this);
    this.state = {
            order:{
                col:'id',
                val:'desc',
            },
        }
  }

  list(top=false,action=false){
        const queryObj = {};
        const page = this.state.page || 1;
        const pageNum = this.state.pageNum || 20;
        const order = this.state.order || {};
        const searchParams = this.state.formData || [];
        queryObj[`page`] = page;
        if(pageNum !== 20){
            queryObj[`data[pagenum]`] = pageNum;
        }
        if(JSON.stringify(order) != '{}'){
            queryObj[`data[order][${order.col}]`] = order.val;
        }
        if(top){
            let topVal = this.state.top ? 0 :1
            queryObj[`data[filter][istop]`] = topVal;
            this.setState({
                top:topVal,
            })
        }else{
            if(searchParams.realname){
                queryObj[`data[filter][realname]`] = searchParams.realname;
            }
            if(searchParams.created_at){
                queryObj[`data[filter][created_at]`] = searchParams.created_at.format('YYYY-MM-DD');
                queryObj[`data[filter][created_at_pattern]`] = "min_equal_max";
            }
            if(searchParams.end_at){
                queryObj[`data[filter][end_at]`] = searchParams.end_at.format('YYYY-MM-DD');
            }
            if(searchParams.phone){
                queryObj[`data[filter][phone]`] = searchParams.phone;
            }
            if(searchParams.pname){
                queryObj[`data[filter][pname]`] = searchParams.pname;
            }
            if(searchParams.track_status){
                queryObj[`data[filter][track_status]`] = searchParams.track_status;
            }

        }
        queryObj[`data[filter][is_real]`] = 1;
        let request = {};
        if(action){
          if(action == "export"){
            request = {
              type:EXCHANGE_EXPORT,
              method:"POST",
              queryObj
            }
            this.props.dispatch(fetchAction(request)).then(json => {
              if(json.error_code == 0){
                window.open(json.data);
              }
            });
          }
        }else{
          request = {
              type:EXCHANGE_LIST,
              queryObj
          }
          this.props.dispatch(fetchAction(request));
        }
    }

    componentDidMount() {
        this.list();
    }

    changeLength(e){
        const length = e.target.value;
        this.setState({
            pageNum:length
        },()=>{this.list()});
    }

    changePage(page){
        this.setState({
            page:page
        },()=>{this.list()});

    }

    import(e){
      e.preventDefault();
      const formData = new FormData(e.target);
      this.props.dispatch(fetchAction({
        type: EXCHANGE_IMPORT,
        method: 'POST',
        formData,
      })).then(json => {
        if (json.error_code === 0) {
          this.props.dispatch(hideModal(true));
          this.list();
        }
      });
    }

    showImportModal(){
      this.props.dispatch(showModal(<ExchangeUploadModal submit={this.import} errorMsg={this.state.addErrorMsg} />));
    }

    export(){
      const  formData = this.props.form.getFieldsValue();
      this.setState({
          formData:formData,
      },()=>{this.list(false,'export')});
    }

    update(e){
      e.preventDefault();
      const formData = new FormData(e.target);
      this.props.dispatch(fetchAction({
        type: EXCHANGE_DT_UPDATE,
        method: 'POST',
        formData,
      })).then(json => {
        if (json.error_code === 0) {
          this.props.dispatch(hideModal());
          this.list();
        }
      });
    }


    showUpdateModal(e){
      const key = e.currentTarget.dataset.index;
      this.props.dispatch(showModal(<ExchangeAddModal submit={this.update} status={this.items[key].track_status} item={this.items[key]} errorMsg={this.state.addErrorMsg} />));
    }

    changeSearch(e){
        e.preventDefault();
        const  formData = this.props.form.getFieldsValue();
        this.setState({
            formData:formData,
        },()=>{this.list()});
    }

    batchDel(e){
        const isAll = e.target.dataset.type;
        const tidArr = document.getElementsByName('all_id');
        let tidStr = '';
        const formData = new FormData;
        for(var i=0;i<tidArr.length;i++){
                if(isAll == 'all'){
                    tidStr+= '-'+tidArr[i].value;
                } else {
                    if(tidArr[i].checked == true){
                        tidStr+= '-'+tidArr[i].value;
                    }
                }
               
        }
        formData.append('id',tidStr);
        this.props.dispatch(fetchAction({type:PRIZE_BATCH_DEL, method:'POST',formData:formData}))
            .then(() => (this.list()));
        
    }

    render() {
      const exchangeList = this.props.exchangeList || [];
      const status = [{"id":0,"name":"未发货"},{"id":1,"name":"已发货"}];
      const items = exchangeList.data || [];
      this.items = items;
      const Option = Select.Option;
      const { getFieldDecorator,getFieldsValue } = this.props.form;
      return (
          <div>
            <div>
              <div className="card clearfix ">
                  <div className="clearfix m-t-1">
                      <h4 className="card-title">
                          <div className="pull-left m-l-1">
                              兑换管理
                              <span className="total">
                              ({exchangeList.total}/{exchangeList.per_page})
                          </span>
                          </div>
                          <div className="pull-left m-l-1">
                              <select className="custom-select" onChange={this.changeLength}>
                                  <option value="20">20</option>
                                  <option value="50">50</option>
                                  <option value="80">80</option>
                              </select>
                          </div>
                          <div className="pull-left">
                              <Pagination
                                  onClick={this.changePage}
                                  currentPage={exchangeList.current_page}
                                  lastPage={exchangeList.last_page}
                                  unurl
                              />
                          </div>
                          <Form className="form-inline pull-right" onSubmit={this.changeSearch}>
                                    <div className="pull-left m-l-1 m-b-1">
                                        {getFieldDecorator('realname', {
                                            rules: [],
                                        })(
                                            <Input style={{width:"100px"}} placeholder="真是姓名" />
                                        )}
                                         &nbsp;
                                        {getFieldDecorator('phone', {
                                            rules: [],
                                        })(
                                            <Input style={{width:"100px"}} placeholder="手机号" />
                                        )}
                                         &nbsp;
                                        {getFieldDecorator('pname', {
                                            rules: [],
                                        })(
                                            <Input style={{width:"100px"}} placeholder="奖品名称" />
                                        )}
                                         &nbsp;                                         
                                        {getFieldDecorator('track_status', {
                                            rules: [],
                                        })(
                                            <Select style={{ width: 120 }}>
                                                {status.map((item,index) => (
                                                    <Option key={index} value={item.id}>{item.name}</Option>
                                                ))}
                                            </Select>
                                        )}
                                        &nbsp;
                                        {getFieldDecorator('created_at',
                                            {rules:[]},
                                        )(
                                            <DatePicker placeholder="START"/>
                                        )}


                                        {getFieldDecorator("end_at",
                                            {rules:[]},
                                        )(
                                            <DatePicker placeholder="END"/>
                                        )}
                                    </div>
                                    &nbsp;
                                    <button type="button" onClick={this.export}
                                            className="btn btn-sm btn-info-outline pull-right"
                                    >
                                        <i className="fa fa-level-down">导出</i>
                                    </button>
                                    &nbsp;
                                    <button type="button" onClick={this.showImportModal}                          
                                            className="btn btn-sm btn-info-outline pull-right"
                                    >
                                        <i className="fa fa-level-up">导入</i>
                                    </button>
                                    &nbsp;
                                    <button type="submit"
                                            className="btn btn-sm btn-info-outline pull-right"
                                    >
                                        <i className="fa fa-search">搜索</i>
                                    </button>
                                </Form>
                      </h4>
                  </div>
                  <table className="table table-bordered m-b-0 table-hover data-table">
                      <thead>
                              <tr>
                                  <th><button onClick={this.batchDel} data-type="all"  className="btn btn-success-outline btn-sm">全部删除</button></th>
                                  <th>ID</th>
                                  <th>真实姓名</th>
                                  <th>奖品名称</th>
                                  <th>商品类型</th>
                                  <th>兑换数量</th>
                                  <th>兑换时间</th>
                                  <th>收货手机号</th>
                                  <th>收货地址</th>
                                  <th>状态</th>
                                  <th>快递号</th>
                                  <th>快递名称</th>
                                  <th>操作</th>
                              </tr> 
                      </thead>
                      <tbody>
                      {items.map((item, index) => (  
                          <tr key={item.id}>
                              <td><Checkbox value={item.id} name="all_id" ></Checkbox></td>
                              <td>{item.id}</td>
                              <td>{item.realname}</td>
                              <td>{item.prizes == null ? "已删除" : item.prizes.name }</td>
                              <td>{item.prizetypes == null ? "已删除" : item.prizes.name }</td>
                              <td>{item.number}</td>
                              <td>{item.created_at}</td>
                              <td>{item.phone}</td>
                              <td>{item.address == null  ? "—" : item.address}</td>
                              <td>{parseInt(item.status) ? "已发货" : "未发货"}</td>
                              <td>{item.track_num == null ? "—" : item.track_num}</td>
                              <td>{item.track_name == null ? "—" : item.track_name}</td>
                              <td>
                                <button key="btn-update" className={'btn btn-success-outline btn-sm'} data-index={index} data-id={item.id} onClick={this.showUpdateModal}>更改手机号/地址</button>
                              </td>
                          </tr>  
                      )) }
                    </tbody>
                  </table>
                  <div className="card-block clearfix">
                      <h4 className="card-title">
                          <div className="pull-left">
                              帖子管理
                              <span className="total">
                              ({exchangeList.total}/{exchangeList.per_page})
                          </span>
                          </div>
                          <div className="pull-left m-l-1">
                              <select className="custom-select">
                                  <option value="20">20</option>
                                  <option value="50">50</option>
                                  <option value="80">80</option>
                              </select>
                          </div>
                          <div className="pull-left">
                              <Pagination
                                  onClick={this.changePage}
                                  currentPage={exchangeList.current_page}
                                  lastPage={exchangeList.last_page}
                                  unurl
                              />
                          </div>

                          <button onClick={this.batchDel} data-type="some" className="btn btn-sm m-2 btn-info pull-left">删除</button>
                      </h4>
                  </div>
              </div>
          </div>
        </div>
      );
  }
}
Exchange = Form.create()(Exchange);
Exchange.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

Exchange.defaultProps = {
}


export default connect(state=>{
  const { omg } = state;
  const exchangeList = omg[EXCHANGE_LIST] || {};
  return {
    exchangeList,
  };
})(Exchange);