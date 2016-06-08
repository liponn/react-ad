import React from 'react';
import Link from '../Link';

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
    </div>
  );
}

export default LeftList;
