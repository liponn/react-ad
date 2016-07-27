/**
 * Created by Wangli on 2016/6/14.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, Link, Input, Submit, Select } from '../../tools';
import { BANNER_POSITION_LIST } from '../../../constants';
import { commonFetch } from '../../../actions/omg';



class BannerAdd extends Component{
    constructor(props){
        super(props);
        this.addBanner = this.addBanner.bind(this);
    }

   /* componentDidMount() {
        const { dispatch } = this.props;
        dispatch(commonFetch(BANNER_POSITION_LIST));
    }*/


    addBanner(e){
        alert('dadsa');
    }
    render(){
        const btn = (
            <Link
                to="/banner"
                className="btn btn-secondary btn-sm pull-xs-right"
                //onClick={this.showAddRedEnvelopeModal}
            >列表</Link>
        );
        return (
            <Card title="添加Banner图" btn={btn}>
                <form method="post" onSubmit={this.addBanner} className="clearfix">
                    <div className="m-t-1 m-b-0 col-lg-6">
                        <Input labelName="名称" name="name"/>

                        <Input labelName="文件" name="img_path" />
                        <Input labelName="链接" name="img_url" />
                        <Input labelName="开始时间" name="start" />
                        <Input labelName="结束时间" name="end" />
                        <Input labelName="排序" name="sort" />
                        <Submit />
                    </div>
                </form>
            </Card>
        );
    }
}

BannerAdd.propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
}


export default connect(/*state=>{
    const { omg } = state;
    const data = omg[BANNER_POSITION_LIST] || [];
    return {
        items:data
    }
}*/)(BannerAdd);