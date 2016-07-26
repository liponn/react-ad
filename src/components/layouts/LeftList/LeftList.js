import React from 'react';
import Link from '../../tools/Link';

function LeftList() {
  return (
    <div className="list-group m-x-0" style={{ borderRadius: 0 }}>
      <Link className="list-group-item" to="/activity/1">
        <i className="fa fa-angellist" aria-hidden="true"></i> 活动
      </Link>
      <Link className="list-group-item" to="/award/1">
        <i className="fa fa-gift" aria-hidden="true"></i> 奖励
      </Link>
      <Link className="list-group-item" to="/awardsend">
        <i className="fa fa-gift" aria-hidden="true"></i> 手动发放奖励
      </Link>
      <Link className="list-group-item" to="/banner/1">
        <i className="fa fa-angellist" aria-hidden="true"></i> banner图
      </Link>
      <Link className="list-group-item" to="/startup/1">
        <i className="fa fa-angellist" aria-hidden="true"></i> 启动页
      </Link>
      <Link className="list-group-item" to="/channel">
        <i className="fa fa-futbol-o" aria-hidden="true"></i> 渠道
      </Link>
      <Link className="list-group-item" to="/article">
        <i className="fa fa-paint-brush" aria-hidden="true"></i> 文章
      </Link>
      
    </div>
  );
}

export default LeftList;
