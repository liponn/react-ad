/**
 * Created by Wangli on 2016/6/14.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../tools/Card';
import { commonFetch } from '../../../actions/omg';
import { BANNER_LIST } from '../../../constants';


class Banner extends Component{
    constructor(props){
        super(props);
        this.releaseBanner = this.releaseBanner.bind(this);
        this.putBanner = this.putBanner.bind(this);
        this.delBanner = this.delBanner.bind(this);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(commonFetch(BANNER_LIST));
    }

    releaseBanner(e){
        const { dispatch } = $this.props;
        const id = $(e.target).data('id');

    }

    putBanner(e){
        const { dispatch } = this.props;
        dispatch()
    }

    delBanner(e) {
        const { dispatch } = this.props;
        const id = $(e.target).data('id');
        $.post('http://api-omg.wanglibao.com/img/banner-del',{id: id}, function(res){
            if (res.error_code !== 0) {
                this.setState({ errorMsg: res.data.error_msg });
            } else {
                dispatch(commonFetch(BANNER_LIST));
            }
        }.bind(this));
    }
    render(){
        const { items } = this.props;
        const btn = (
            <button
                className="btn btn-info btn-sm pull-xs-right"
                //onClick={this.showAddRedEnvelopeModal}
            >添加</button>
        );
        return (
            <Card title="banner图" btn={btn}>
                <table className="table m-b-0 table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>位置</th>
                            <th>名称</th>
                            <th>跳转URL</th>
                            <th>状态</th>
                            <th>介绍</th>
                            <th>开始时间</th>
                            <th>结束时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.map((item)=>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.position}</td>
                            <td>{item.name}</td>
                            <td>{item.img_url}</td>
                            <td>{item.can_use}</td>
                            <td>{item.desc}</td>
                            <td>{item.start}</td>
                            <td>{item.end}</td>
                            <td>
                                <button className="btn btn-success-outline" data-id={item.id} onClick={this.releaseBanner}>发布</button>
                                <button className="btn btn-warning-outline" data-id={item.id} onClick={this.putBanner}>修改</button>
                                <button className="btn btn-danger-outline" data-id={item.id} onClick={this.delBanner}>删除</button>
                            </td>
                        </tr>
                    )) }
                    </tbody>
                </table>
            </Card>
        );
    }
}

Banner.propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
}

Banner.defaultProps = {
    items:[]
}

export default connect(state=>{
   const { omg } = state;
   const data = omg[BANNER_LIST] || [];
   return {
       items:data
   }
})(Banner);