import React from 'react';
import Link from '../../tools/Link';

function LeftList() {
  return (
    <div className="list-group m-x-0" style={{ borderRadius: 0 }}>
      <Link className="list-group-item" to="/activity/1">
        活动
      </Link>
      <Link className="list-group-item" to="/activityjoins">
        活动参与记录
      </Link>
      <Link className="list-group-item" to="/award/1">
        奖品
      </Link>
      <Link className="list-group-item" to="/awardlist">
        奖品发放记录
      </Link>
      <Link className="list-group-item" to="/sendawards">
        批量发放奖品
      </Link>
      <Link className="list-group-item" to="/awardsend">
        手动发放奖品
      </Link>
      <Link className="list-group-item" to="/banner/mobile">
        banner图
      </Link>
      <Link className="list-group-item" to="/shareconfig/taojin">
        分享配置
      </Link>
      <Link className="list-group-item" to="/startup/1">
        启动页
      </Link>
      <Link className="list-group-item" to="/appupdate/1">
        升级配置
      </Link>
      <Link className="list-group-item" to="/channel">
        渠道
      </Link>
      <Link className="list-group-item" to="/article">
        文章
      </Link>
      <Link className="list-group-item" to="/redeem">
        兑换码生成
      </Link>
      <Link className="list-group-item" to="/notice">
        公告
      </Link>
      <Link className="list-group-item" to="/feedback">
        用户反馈
      </Link>
      <Link className="list-group-item" to="/admin">
        权限管理
      </Link>
    </div>
  );
}

export default LeftList;
