import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import PrizeAddModal from '../../modals/PrizeAddModal';
import {
  PRIZE_LIST,
  PRIZE_TYPE_LIST,
  PRIZE_OPERATION,
  PRIZE_CHANGE_STATUS,
  PRIZE_UP,
  PRIZE_DOWN,
  PRIZE_DT_DEL,
  PRIZE_BATCH_DEL,
} from '../../../constants';
import { Radio,Pagination,ImgBox} from '../../tools';
import { DatePicker,Select,Form,Input,Checkbox } from "antd";


class Prize extends Component {
  constructor(props) {
    super(props);
    this.list = this.list.bind(this);
    this.typeList = this.typeList.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.showUpdateModal = this.showUpdateModal.bind(this);
    this.add = this.add.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.del = this.del.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
    this.changeLength = this.changeLength.bind(this);
    this.changePage = this.changePage.bind(this);
    this.batchDel = this.batchDel.bind(this);
    this.state = {
            order:{
                col:'id+%2b+sort',
                val:'desc',
            },
        }
  }

  list(top=false){
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
            if(searchParams.type_id){
                queryObj[`data[filter][type_id]`] = searchParams.type_id;
            }
            if(searchParams.created_at){
                queryObj[`data[filter][created_at]`] = searchParams.created_at.format('YYYY-MM-DD');
                queryObj[`data[filter][created_at_pattern]`] = "min_equal_max";
            }
            if(searchParams.end_at){
                queryObj[`data[filter][end_at]`] = searchParams.end_at.format('YYYY-MM-DD');
            }
            if(searchParams.id){
                queryObj[`data[filter][id]`] = searchParams.id;
            }
            if(searchParams.is_online){
                queryObj[`data[filter][is_online]`] = searchParams.is_online;
            }
        }
        
        const request = {
            type:PRIZE_LIST,
            queryObj
        }
        this.props.dispatch(fetchAction(request));
    }

    componentDidMount() {
        this.list();
        this.typeList();
    }

    typeList(){
      this.props.dispatch(fetchAction({
        type: PRIZE_TYPE_LIST,
        method: 'GET',
      }));
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

    changeSearch(e){
        e.preventDefault();
        const  formData = this.props.form.getFieldsValue();
        this.setState({
            formData:formData,
        },()=>{this.list()});
    }

    add(e){
      e.preventDefault();
      const formData = new FormData(e.target);
      this.props.dispatch(fetchAction({
        type: PRIZE_OPERATION,
        method: 'POST',
        formData,
      })).then(json => {
        if (json.error_code === 0) {
          this.props.dispatch(hideModal());
          this.list();
        }
      });
    }

    up(e){
      const id = e.currentTarget.dataset.id;
      const formData = new FormData;
      formData.append('id', id);
      this.props.dispatch(fetchAction({
        type: PRIZE_UP,
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
        type: PRIZE_DOWN,
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

    del(e){
      const id = e.currentTarget.dataset.id;
      const formData = new FormData;
      formData.append('id', id);
      this.props.dispatch(fetchAction({
        type: PRIZE_DT_DEL,
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
      const key = e.currentTarget.dataset.key;
      const formData = new FormData;
      formData.append('id', id);
      formData.append('key',key);
      this.props.dispatch(fetchAction({
        type: PRIZE_CHANGE_STATUS,
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

    showUpdateModal(e){
      const key = e.currentTarget.dataset.index;
      this.props.dispatch(showModal(<PrizeAddModal submit={this.add} item={this.items[key]} prizeTypes={this.prizetypeList} update={true} errorMsg={this.state.addErrorMsg} />));
    }

    showAddModal(){
      this.props.dispatch(showModal(<PrizeAddModal submit={this.add} prizeTypes={this.prizetypeList} update={false} errorMsg={this.state.addErrorMsg} />));
    }

  render() {
        const prizeList = this.props.prizeList || [];
        const prizetypeList = this.props.peizetypeList || [];
        const items = prizeList.data || [];
        this.items = items;
        let obj = {};
        prizetypeList.map(function (item) {
          obj[item.id] = item.name;
        });
        const onLine = [{"id":0,"name":"下线"},{"id":1,"name":"上线"}];
        this.prizetypeList = obj;
        const Option = Select.Option;
        const { getFieldDecorator,getFieldsValue } = this.props.form;
    return (
      <div>
        <div>
            <div className="card clearfix ">
                <div className="clearfix m-t-1">
                    <h4 className="card-title">
                        <div className="pull-left m-l-1">
                            奖品管理
                            <span className="total">
                            ({prizeList.total}/{prizeList.per_page})
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
                                currentPage={prizeList.current_page}
                                lastPage={prizeList.last_page}
                                unurl
                            />
                        </div>
                        <Form className="form-inline pull-right" onSubmit={this.changeSearch}>
                                    <div className="pull-left m-l-1 m-b-1">
                                        {getFieldDecorator('id', {
                                            rules: [],
                                        })(
                                            <Input style={{width:"100px"}} placeholder="ID" />
                                        )}
                                         &nbsp;
                                        {getFieldDecorator('type_id', {
                                            rules: [],
                                        })(
                                            <Select style={{ width: 120 }} placeholder="商品类型">
                                                {prizetypeList.map((item,index) => (
                                                    <Option key={index} value={item.id}>{item.name}</Option>
                                                ))}
                                            </Select>
                                        )}
                                        &nbsp;
                                        {getFieldDecorator('is_online', {
                                            rules: [],
                                        })(
                                            <Select style={{ width: 80 }} placeholder="状态">
                                                {onLine.map((item,index) => (
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
                                    <button type="submit"
                                            className="btn btn-sm btn-info-outline pull-right"
                                    >
                                        <i className="fa fa-search">搜索</i>
                                    </button>
                                </Form>
                        <button onClick={this.showAddModal} className="btn btn-sm btn-info pull-right"><i className="fa fa-plus">添加</i></button>
                    </h4>
                </div>
                <table className="table table-bordered m-b-0 table-hover data-table">
                    <thead>
                            <tr>
                                <th><button onClick={this.batchDel} data-type="all"  className="btn btn-success-outline btn-sm">全部删除</button></th>
                                <th>ID</th>
                                <th>奖品名称</th>
                                <th>商品类型</th>
                                <th>兑换积分</th>
                                <th>库存量</th>
                                <th>列表图</th>
                                <th>详情图</th>
                                <th>介绍图</th>
                                <th>添加时间</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr> 
                    </thead>
                    <tbody>
                      {items.map((item, index) => (  
                        <tr key={item.id}>
                            <td><Checkbox value={item.id} name="all_id" ></Checkbox></td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.prizetypes.name}</td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td><ImgBox src={item.list_img} /></td>
                            <td><ImgBox src={item.detail_img} /></td>
                            <td>{item.des_img ? <ImgBox src={item.des_img} /> : "——" }</td>
                            <td>{item.created_at}</td>
                            <td>{item.is_online ? "上线" : "下线"}</td>
                            <td>
                              <button key="btn-change-status-line" className={'btn btn-danger-outline btn-sm'} data-id={item.id} data-key='is_online' onClick={this.changeStatus} >{item.is_online ? "下线" : "上线"}</button>
                              <button key="btn-change-status-top" className={'btn btn-danger-outline btn-sm'} data-id={item.id} data-key='istop' onClick={this.changeStatus} >{item.istop ? "取消" : "推荐"}</button>
                              <button key="btn-enable"className={'btn btn-success-outline btn-sm'}data-id={item.id}onClick={this.up}>上移</button>
                              <button key="btn-enable-xia"className={'btn btn-success-outline btn-sm'}data-id={item.id} onClick={this.down}>下移</button>
                              <button key="btn-update"className={'btn btn-success-outline btn-sm'} data-index={index} data-id={item.id}onClick={this.showUpdateModal}>编辑</button>
                              <button key="btn-del"className={'btn btn-success-outline btn-sm'} data-id={item.id} onClick={this.del}>删除</button>
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
                            ({prizeList.total}/{prizeList.per_page})
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
                                currentPage={prizeList.current_page}
                                lastPage={prizeList.last_page}
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
Prize = Form.create()(Prize);
Prize.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

Prize.defaultProps = {

}


export default connect(state =>{
  const { omg } = state;
  const prizeList = omg[PRIZE_LIST] || {};
  const peizetypeList = omg[PRIZE_TYPE_LIST] || [];
  return {
    prizeList,
    peizetypeList,
  };
})(Prize);


