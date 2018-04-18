import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from '../../tools/Link';
import cookie from 'react-cookie';
import { ACCOUNT_PROFILE } from '../../../constants';
import { authentication } from '../../../config.js';

class Container extends Component {
  constructor(props) {
    super(props);
    this.toggleFold = this.toggleFold.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
    this.toggleSubFold = this.toggleSubFold.bind(this);
    this.panelHover = this.panelHover.bind(this);
    const isFold = cookie.load('isFold') === 'true';
    const isLock = cookie.load('isLock') === 'true';
    let items = [{
      title: '日常活动',
      isFold: false,
      subItems: [
        {
          title: '活动配置',
          url: '/activity/1',
          tag: 'activity',
          fontClass: 'fa-gamepad',
        },
        {
          title: '奖品配置',
          url: '/award/1',
          tag: 'award',
          fontClass: 'fa-gift',
        },
        {
          title: '奖品补发',
          url: '/sendawards',
          tag: 'award',
          fontClass: 'fa-slack',
        },
        {
          title: '兑换码生成',
          url: '/redeem',
          tag: 'redeem',
          fontClass: 'fa-money',
        },
        {
          title: '渠道',
          url: '/channel',
          tag: 'channel',
          fontClass: 'fa-trello',
        },
      ],
    }, {
      title: '定制化活动',
      isFold: true,
      subItems: [
        {
          title: '见面会',
          url: '/jianmianhui',
          tag: 'Jianmianhui',
          fontClass: 'fa-star',
        },
        {
          title: '积分商城',
          url: '/integral',
          tag: 'integral',
          fontClass: 'fa-diamond',
        },
        {
          title: '瓜分体验金',
          url: '/hongbao',
          tag: 'money',
          fontClass: 'fa-usd',
        },
        {
          title: '一元夺宝',
          url: '/oneyuan',
          tag: 'one',
          fontClass: 'fa-star',
        },
      ],
    }, {
      title: '活动记录',
      isFold: true,
      subItems: [
        {
          title: '活动参与记录',
          url: '/activityjoins',
          tag: 'activity',
          fontClass: 'fa-users',
        },
        {
          title: '奖品发放记录',
          url: '/awardlist',
          tag: 'activity',
          fontClass: 'fa-cubes',
        },
      ],
    }, {
      title: 'APP&PC配置',
      isFold: true,
      subItems: [
        {
          title: '锁屏问候语',
          url: '/welcome',
          tag: 'cms',
          fontClass: 'fa-bullseye',
        },
        {
          title: '成语管理',
          url: '/idiom',
          tag: 'cms',
          fontClass: 'fa-bullseye',
        },
        {
          title: 'banner图',
          url: '/banner/mobile',
          tag: 'img',
          fontClass: 'fa-map',
        },
        {
          title: '分享配置',
          url: '/shareconfig/taojin',
          tag: 'img',
          fontClass: 'fa-share',
        },
        {
          title: '启动页',
          url: '/startup/1',
          tag: 'img',
          fontClass: 'fa-play-circle',
        },
        {
          title: '升级配置',
          url: '/appupdate/1',
          tag: 'app',
          fontClass: 'fa-level-up',
        },
        {
          title: 'ios过审配置',
          url: '/examine',
          tag: 'app',
          fontClass: 'fa-level-up',
        },
      ],
    }, {
      title: 'CMS编辑',
      isFold: true,
      subItems: [
        {
          title: '文章',
          url: '/article',
          tag: 'cms',
          fontClass: 'fa-users',
        },
        {
          title: '公告',
          url: '/notice',
          tag: 'notice',
          fontClass: 'fa-envelope',
        },
      ],
    }, {
      title: '社区',
      isFold: true,
      subItems: [
        {
          title: '帖子管理',
          url: '/thread',
          tag: 'bbs',
          fontClass: 'fa-comment',
        },
        {
          title: '社区评论',
          url: '/reply',
          tag: 'bbs',
          fontClass: 'fa-comments',
        },
        {
          title: '社区用户',
          url: '/bbsuser',
          tag: 'bbs',
          fontClass: 'fa-users',
        },
        {
          title: '社区版块',
          url: '/section',
          tag: 'bbs',
          fontClass: 'fa-qrcode',
        },
        {
          title: '社区消息',
          url: '/bbsmessage',
          tag: 'bbs',
          fontClass: 'fa-rss',
        },
        {
          title: '社区配置',
          url: '/bbsconfig',
          tag: 'bbs',
          fontClass: 'fa-gears',
        },/*
        {
          title: '拒审原因',
          url: '/bbsblock',
          tag: 'bbs',
          fontClass: 'fa-ban',
        },*/
          {
              title: '社区任务',
              url: '/bbstask/1',
              tag: 'admin',
              fontClass: 'fa-tasks',
          },
      ],
    }, {
      title: '其它',
      isFold: true,
      subItems: [
        {
          title: '用户反馈',
          url: '/feedback',
          tag: 'cms',
          fontClass: 'fa-twitch',
        },
        {
          title: '用户属性',
          url: '/userattr',
          tag: 'userattr',
          fontClass: 'fa-gears',
        },
        {
          title: '全局属性',
          url: '/globalattr',
          tag: 'globalattr',
          fontClass: 'fa-gear',
        },
      ],
    },{
      title: '话费流量',
      isFold: true,
      subItems: [
        {
          title: '话费流量类型设置',
          url: '/feeflowconfig/1',
          tag: 'activity',
          fontClass: 'fa-users',
        },
        {
          title: '话费流量订单列表',
          url: '/feefloworder/1',
          tag: 'activity',
          fontClass: 'fa-user-secret',
        },
      ],
    }, {
      title: '后台管理',
      isFold: true,
      subItems: [
        {
          title: '用户组',
          url: '/admin',
          tag: 'admin',
          fontClass: 'fa-users',
        },
        {
          title: '权限组',
          url: '/privilege',
          tag: 'privilege',
          fontClass: 'fa-user-secret',
        },
      ],
    },
    ];
    if (authentication) {
      const privilege = props.profile.privilege || false;
      if (privilege) {
        items = this.initItems(privilege, items);
      }
    }
    this.state = {
      isLock,
      isFold,
      items,
    };
  }

  componentWillReceiveProps(nextProps) {
    
    if (nextProps.type !== 'undefined') {
      this.setState({
        currentType: nextProps.type,
      });
    }
  }

  initItems(privilege, preItems) {
    const defaultPrivilege = privilege.default || false;
    const items = [];
    if (defaultPrivilege) {
      const deny = privilege.deny || [] ;
      for (let i = 0; i < preItems.length; i++) {
        const item = preItems[i];
        const tempSubItems = [];
        for (let j = 0; j < item.subItems.length; j++) {
          const subItem = item.subItems[j];
          const tag = subItem.tag || '';
          if (!this.inArray(deny, tag)) {
            tempSubItems.push(subItem);
          }
        }
        item.subItems = tempSubItems;
        items.push(item);
      }
    } else {
      const allow = privilege.allow || [] ;
      for (let i = 0; i < preItems.length; i++) {
        const item = preItems[i];
        const tempSubItems = [];
        for (let j = 0; j < item.subItems.length; j++) {
          const subItem = item.subItems[j];
          const tag = subItem.tag || '';
          if (this.inArray(allow, tag)) {
            tempSubItems.push(subItem);
          }
        }
        item.subItems = tempSubItems;
        items.push(item);
      }
    }
    return items;
  }
  inArray(arr, val) {
    let i = arr.length;
    while (i--) {
      if (arr[i] === val) {
        return true;
      }
    }
    return false;
  }

  syncCookie() {
    cookie.save('isLock', this.state.isLock, {path: '/', maxAge: 31536000});
    cookie.save('isFold', this.state.isFold, {path: '/', maxAge: 31536000});
  }

  toggleFold() {
    const isFold = !this.state.isFold;
    this.setState({
      isFold,
    }, () => (this.syncCookie()));
  }

  toggleLock() {
    const isLock = !this.state.isLock
    if (!isLock) {
      this.setState({
        isLock,
        isFold: false,
      }, () => (this.syncCookie()));
    } else {
      this.setState({
        isLock,
      }, () => (this.syncCookie()));
    }
  }
  toggleSubFold(e) {
    const index = +e.currentTarget.dataset.index;
    const items = this.state.items;

    for (let i = 0; i < items.length; i++){
      if (i === index) {
        items[i].isFold = !items[i].isFold;
      } else {
        items[i].isFold = true;
      }
    }
    this.setState({
      items,
    });
  }

  panelHover(e) {
    if (this.state.isLock) {
      return;
    }
    if (e.type === 'mouseover') {
      this.setState({
        isFold: true,
      }, () => (this.syncCookie()));
    }
    if (e.type === 'mouseout') {
      this.setState({
        isFold: false,
      }, () => (this.syncCookie()));
    }
  }

  render() {
    const items = this.state.items;
    return (
      <div className={this.state.isFold ? 'left-panel-max' : 'left-panel-mix'}>
        <div onMouseOver={this.panelHover} onMouseOut={this.panelHover} className="left-panel">
          <div onClick={this.toggleFold} className="panel-fold text-md-center">
            <span className={this.state.isFold ? 'fa fa-angle-double-left' : 'fa fa-angle-double-right'} ></span>
          </div>
          <div className="items">
            {items.map((item, index) => {
              if (item.subItems.length === 0) {
                return false;
              }
              return (<div key={`item_${index}`} className={item.isFold ? 'fold' : ''} >
                <div className="item" data-toggle="tooltip" data-placement="right" data-index={index} onClick={this.toggleSubFold} >
                  <span className={item.isFold ? 'fa fa-caret-right' : 'fa fa-caret-down'}></span>
                  <span className="title">{item.title}</span>
                </div>
                <div className="sub-items">
                  {item.subItems.map((subItem, index2) => {
                    return (<div key={`subitem_${index2}`} className="sub-item">
                      <Link to={subItem.url}>
                        <span className={`fa ${subItem.fontClass}`}></span>
                        <span className="title">{subItem.title}</span>
                      </Link>
                    </div>);
                  })}
                </div>
              </div>);
            })}

          </div>
          <div onClick={this.toggleLock} className="lock-fold text-md-center">
            <span className={this.state.isLock ? 'fa fa-lock' : 'fa fa-unlock-alt'}></span>
          </div>
        </div>
        <div className="main-content m-x-1 m-t-1">
          {this.props.children}
        </div>
      </div>
    );
  }
}
Container.propTypes = {
  children: PropTypes.any,
  dispatch: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
}

Container.defaultProps = {
  modal: false,
}

export default connect(state => {
  const { omg } = state;
  const profile = omg[ACCOUNT_PROFILE] || {}
  return {
    profile,
  };
})(Container);
