import {
  ACTIVITY_INDEX,
  ACTIVITY_ADD,
  ACTIVITY_DEL,
  ACTIVITY_GROUP_ADD,
  ACTIVITY_GROUP_INFO,
  ACTIVITY_GROUP_LIST,
  ACTIVITY_GROUP_DEL,
  ACTIVITY_INFO,
  ACTIVITY_OFFLINE,
  ACTIVITY_PUT,
  ACTIVITY_RELEASE,
  ACTIVITY_RULE_LIST,
  ACTIVITY_RULE_DEL,

  ACTIVITY_RULE_ADD_BALANCE,
  ACTIVITY_RULE_ADD_RECHARGE,
  ACTIVITY_RULE_ADD_CAST,
  ACTIVITY_RULE_ADD_CHANNEL,
  ACTIVITY_RULE_ADD_FIRSTCAST,
  ACTIVITY_RULE_ADD_INVITE,
  ACTIVITY_RULE_ADD_INVITENUM,
  ACTIVITY_RULE_ADD_REGISTER,
  ACTIVITY_RULE_ADD_USERLEVEL,

  ACTIVITY_AWARD_ADD,
  ACTIVITY_AWARD_DEL,
  ACTIVITY_AWARD_LIST,

  APP_ADD,
  APP_DISABLE,
  APP_ENABLE,
  APP_INFO,
  APP_PUT,
  APP_UPDATE_LOG,

  AWARD_LIST,
  AWARD_ADD,
  AWARD_UPDATE,
  AWARD_DEL,
  AWARD_INFO,
  AWARD_ADD_TO_USER,

  CHANNEL_ADD,
  CHANNEL_DEL,
  CHANNEL_INFO,
  CHANNEL_LIST,
  CHANNEL_PUT,

  ARTICLE_ADD,
  ARTICLE_LIST,
  ARTICLE_DEL,
  ARTICLE_RELEASE,
  ARTICLE_OFFLINE,
  ARTICLE_DETAIL,
  ARTICLE_PUT,
  ARTICLE_UP,
  ARTICLE_DOWN,

  ARTICLE_TYPE_LIST,
  ARTICLE_TYPE_ADD,
  ARTICLE_TYPE_DEL,
  ARTICLE_TYPE_UP,
  ARTICLE_TYPE_DOWN,
  ARTICLE_TYPE_INFO,
  ARTICLE_TYPE_PUT,

  BANNER_LIST,
  BANNER_DEL,
  BANNER_ADD,
  BANNER_PUT,
  BANNER_ENABLE,
  BANNER_DISABLE,
  BANNER_UP,
  BANNER_DOWN,

  ATTACHMENT_ADD,
  ATTACHMENT_LIST,

  ACCOUNT_LOGIN,
  ACCOUNT_PROFILE,
  ACCOUNT_LOGOUT,

  STARTUP_ADD,
  STARTUP_DISABLE,
  STARTUP_ENABLE,
  STARTUP_INFO,
  STARTUP_LIST,
  STARTUP_PUT,
  STARTUP_DEL,
  STARTUP_UP,
  STARTUP_DOWN,

} from '../constants/index.js';

// const apiHost = 'http://api-omg.wanglibao.com/yunying';
const apiHost = 'https://php1.wanglibao.com/yunying';
const apiList = {}

apiList[ACTIVITY_INDEX] = '/activity/index';
apiList[ACTIVITY_GROUP_LIST] = '/activity/group-list';
apiList[ACTIVITY_ADD] = '/activity/add';
apiList[ACTIVITY_DEL] = '/activity/del';
apiList[ACTIVITY_GROUP_ADD] = '/activity/group-add';
apiList[ACTIVITY_GROUP_INFO] = '/activity/group-info';
apiList[ACTIVITY_GROUP_DEL] = '/activity/group-del';
apiList[ACTIVITY_INFO] = '/activity/info';
apiList[ACTIVITY_OFFLINE] = '/activity/offline';
apiList[ACTIVITY_RELEASE] = '/activity/release';
apiList[ACTIVITY_PUT] = '/activity/put';
apiList[ACTIVITY_RULE_LIST] = '/activity/rule-list';
apiList[ACTIVITY_RULE_DEL] = '/activity/rule-del';


apiList[ACTIVITY_RULE_ADD_BALANCE] = '/activity/rule-add/balance';
apiList[ACTIVITY_RULE_ADD_RECHARGE] = '/activity/rule-add/recharge';
apiList[ACTIVITY_RULE_ADD_CAST] = '/activity/rule-add/cast';
apiList[ACTIVITY_RULE_ADD_CHANNEL] = '/activity/rule-add/channel';
apiList[ACTIVITY_RULE_ADD_FIRSTCAST] = '/activity/rule-add/firstcast';
apiList[ACTIVITY_RULE_ADD_INVITE] = '/activity/rule-add/invite';
apiList[ACTIVITY_RULE_ADD_INVITENUM] = '/activity/rule-add/invitenum';
apiList[ACTIVITY_RULE_ADD_REGISTER] = '/activity/rule-add/register';
apiList[ACTIVITY_RULE_ADD_USERLEVEL] = '/activity/rule-add/userlevel';
apiList[ACTIVITY_AWARD_ADD] = '/activity/award-add';
apiList[ACTIVITY_AWARD_LIST] = '/activity/award-list';
apiList[ACTIVITY_AWARD_DEL] = '/activity/award-delete';

apiList[APP_ADD] = '/app/add';
apiList[APP_DISABLE] = '/app/close';
apiList[APP_ENABLE] = '/app/enable';
apiList[APP_INFO] = '/app/info';
apiList[APP_PUT] = '/app/put';
apiList[APP_UPDATE_LOG] = '/app/update-log';


apiList[AWARD_ADD] = '/award/add';
apiList[AWARD_DEL] = '/award/delete';
apiList[AWARD_INFO] = '/award/get-one';
apiList[AWARD_LIST] = '/award/get-list';
apiList[AWARD_UPDATE] = '/award/update';
apiList[AWARD_ADD_TO_USER] = '/award/add-award-to-user';

apiList[CHANNEL_ADD] = '/channel/add';
apiList[CHANNEL_INFO] = '/channel/info';
apiList[CHANNEL_LIST] = '/channel/list';
apiList[CHANNEL_PUT] = '/channel/put';
apiList[CHANNEL_DEL] = '/channel/del';


apiList[ARTICLE_ADD] = '/cms/content/add';
apiList[ARTICLE_TYPE_LIST] = '/cms/content/type-list';
apiList[ARTICLE_LIST] = '/cms/content/list';
apiList[ARTICLE_DEL] = '/cms/content/del';
apiList[ARTICLE_RELEASE] = '/cms/content/release';
apiList[ARTICLE_OFFLINE] = '/cms/content/offline';
apiList[ARTICLE_DETAIL] = '/cms/content/detail';
apiList[ARTICLE_PUT] = '/cms/content/put';
apiList[ARTICLE_UP] = '/cms/content/up';
apiList[ARTICLE_DOWN] = '/cms/content/down';

apiList[ARTICLE_TYPE_LIST] = '/cms/content/type-list';
apiList[ARTICLE_TYPE_ADD] = '/cms/content/type-add';
apiList[ARTICLE_TYPE_DEL] = '/cms/content/type-del';
apiList[ARTICLE_TYPE_UP] = '/cms/content/type-up';
apiList[ARTICLE_TYPE_DOWN] = '/cms/content/type-down';
apiList[ARTICLE_TYPE_INFO] = '/cms/content/type-info';
apiList[ARTICLE_TYPE_PUT] = '/cms/content/type-put';

apiList[BANNER_LIST] = '/img/banner-list';
apiList[BANNER_DEL] = '/img/banner-del';
apiList[BANNER_PUT] = '/img/banner-edit';
apiList[BANNER_ADD] = '/img/banner-add';
apiList[BANNER_UP] = '/img/sort-up';
apiList[BANNER_DOWN] = '/img/sort-down';
apiList[BANNER_ENABLE] = '/img/banner-release';
apiList[BANNER_DISABLE] = '/img/banner-offline';

apiList[ATTACHMENT_ADD] = '/img/img-add';
apiList[ATTACHMENT_LIST] = '/img/img-list';

apiList[ACCOUNT_LOGIN] = '/account/login';
apiList[ACCOUNT_PROFILE] = '/account/profile';
apiList[ACCOUNT_LOGOUT] = '/account/logout';

apiList[STARTUP_ADD] = '/img/app-add';
apiList[STARTUP_DISABLE] = '/img/app-offline';
apiList[STARTUP_ENABLE] = '/img/app-online';
apiList[STARTUP_INFO] = '/img/app-info';
apiList[STARTUP_LIST] = '/img/app-info-pid';
apiList[STARTUP_PUT] = '/img/app-put';
apiList[STARTUP_DEL] = '/img/app-del';
apiList[STARTUP_UP] = '/img/app-up';
apiList[STARTUP_DOWN] = '/img/app-down';


function getApi(type) {
  return apiHost + apiList[type];
}

const typeList = {
  channel: '渠道',
  register: '注册',
  invite: '邀请',
  invitenum: '邀请用户数量',
  userlevel: '用户等级',
  usercredit: '用户积分',
  balance: '用户余额',
  cast: '投资',
  firstcast: '首投',
  recharge: '充值',
}

const activityTypes = {
  1: '常规活动',
  2: '渠道活动',
  3: '节日活动',
  4: '加急活动',
}

const sendAwardTypes = {
  1: '全部发放',
  2: '概率发放',
}

const frequencyTypes = {
  0: '不限制',
  1: '一天一次',
  2: '仅一次',
}

const activityTriggers = {
  0: '主动',
  1: '注册',
  2: '首投',
  3: '绑卡',
  4: '投资',
  5: '邀请',
  6: '实名',
  7: '回款',
}

const redEnvelopeTypes = {
  1: '直抵红包',
  2: '百分比红包',
}

const redEnvelopeTimeTypes = {
  1: '按天数',
  2: '按时间段',
}

const forceTypes = {
  0: '不强制',
  1: '强制',
}

const interestTypes = {
  1: '全周期',
  2: '加息天数',
  3: '加息时间段',
  4: '加息月数',
}

const interestTimeTypes = {
  1: '有效天数',
  2: '有效时间段',
}

const awardTypes = {
  1: '加息券',
  2: '红包',
  3: '体验金',
  //4: '用户积分',
  //5: '实物',
  6: '优惠券',
}

const ruleFileds = {
  channels: '渠道',
  min_time: '最小时间',
  max_time: '最大时间',
  min_cast: '最小投资(元)',
  max_cast: '最大投资(元)',
  isfirst: '首次',
  min_recharge: '最小充值(元)',
  max_recharge: '最大充值(元)',
}

const ruleTypes = {
  channel: '渠道',
  register: '注册',
  invite: '邀请',
  invitenum: '邀请用户数量',
  userlevel: '用户等级',
  usercredit: '用户积分',
  balance: '用户余额',
  cast: '投资',
  recharge: '充值',
}

const bannerTypes = {
  mobile: '移动端轮播图',
  pc: 'PC端轮播图',
  pop: '活动弹窗',
  discover: '发现页',
  memorabilia: '大事记',
  appzichan: 'app资产页',
  ios_score: 'ios评分页',
}

// 启动页类型
const startupTypes = {
  1: 'IOS',
  2: 'Android',
}


const platform = {
  0: '全平台',
  1: '移动端',
  2: 'H5',
  3: 'PC端',
}

const projectDurationTypes = {
  1: '不限',
  2: '月标',
  3: '月标及以上',
  4: '月标及以下',
  5: '日标',
  6: '日标及以上',
  7: '日标及以下',
}

const platformTypes = {
  0: '全平台',
  1: '移动端',
  2: 'h5',
  3: 'pc端',
}

const appUpdateTypes = {
  1: '安卓',
  2: 'IOS',
}

const release = {
  0: '未发布',
  1: '已发布',
}

const projectTypes = {
  0: '不限制',
  1: '好车盈',
  2: '艺品贷',
  3: '产融通',
  4: '银行优选',
  10: '月利宝',
}


const config = {
  activityTriggers,
  redEnvelopeTypes,
  redEnvelopeTimeTypes,
  awardTypes,
  ruleFileds,
  ruleTypes,
  interestTypes,
  interestTimeTypes,
  bannerTypes,
  platform,
  release,
  activityTypes,
  frequencyTypes,
  platformTypes,
  sendAwardTypes,
  startupTypes,
  projectDurationTypes,
  projectTypes,
  forceTypes,
  appUpdateTypes,
}

function getConfig(type, value = false) {
  if (typeof config[type] === 'undefined') {
    return {};
  }
  if (value === false) {
    return config[type];
  }
  if (typeof config[type][value] === 'undefined') {
    return value;
  }
  return config[type][value];
}

export { getApi, getConfig, typeList };



