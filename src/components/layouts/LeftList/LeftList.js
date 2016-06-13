import React from 'react';
import Link from '../../tools/Link';

function LeftList() {
  return (
    <div className="list-group m-x-0" style={{ borderRadius: 0 }}>
      <Link className="list-group-item" to="/activity">
        <i className="fa fa-angellist" aria-hidden="true"></i> 活动
      </Link>
      <Link className="list-group-item" to="/banner">
        <i className="fa fa-angellist" aria-hidden="true"></i> banner图
      </Link>
      <Link className="list-group-item" to="/channel">
        <i className="fa fa-futbol-o" aria-hidden="true"></i> 渠道
      </Link>
      <Link className="list-group-item" to="/article">
        <i className="fa fa-paint-brush" aria-hidden="true"></i> 文章
      </Link>
      <Link className="list-group-item" to="/award">
        <i className="fa fa-gift" aria-hidden="true"></i> 红包  
      </Link>
      <Link className="list-group-item" to="/award">
        <i className="fa fa-gift" aria-hidden="true"></i> 加息券  
      </Link>
      <Link className="list-group-item" to="/award">
        <i className="fa fa-gift" aria-hidden="true"></i> 体验金  
      </Link>
      <Link className="list-group-item" to="/award">
        <i className="fa fa-gift" aria-hidden="true"></i> 实物奖  
      </Link>
      <Link className="list-group-item" to="/award">
        <i className="fa fa-gift" aria-hidden="true"></i> 优惠券  
      </Link>
    </div>
  );
}

export default LeftList;
