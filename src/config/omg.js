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

  ACTIVITY_RULE_ADD,

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
  BANNER_INFO,

  ATTACHMENT_ADD,
  ATTACHMENT_LIST,

  ACCOUNT_LOGIN,
  ACCOUNT_PROFILE,
  ACCOUNT_LOGOUT,
  ACCOUNT_CAPTCHA,

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

apiList[ACTIVITY_RULE_ADD] = '/activity/rule-add';

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
apiList[BANNER_INFO] = '/img/banner-info';

apiList[ATTACHMENT_ADD] = '/img/img-add';
apiList[ATTACHMENT_LIST] = '/img/img-list';

apiList[ACCOUNT_LOGIN] = '/account/login';
apiList[ACCOUNT_PROFILE] = '/account/profile';
apiList[ACCOUNT_LOGOUT] = '/account/logout';
apiList[ACCOUNT_CAPTCHA] = '/account/captcha';

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
  register: '注册时间',
  channel: '用户渠道',
  invite: '是否被邀请',
  inviteNum: '邀请人数',
  userLevel: '用户等级',
  userCredit: '用户积分',
  balance: '用户余额',
  cast: '投资金额',
  reCharge: '充值金额',
  payment: '回款金额',
  castAll: '投资总金额',
  rechargeAll: '充值总金额',
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
  2: '充值',
  3: '绑卡',
  4: '投资',
  5: '回款',
  6: '实名',
  7: '微信绑定',
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

const userLevels = {
  '-1': '非会员',
  0: 'vip',
  1: 'vip1',
  2: 'vip2',
  3: 'vip3',
  4: 'vip4',
  5: 'vip5',
}

const interestTimeTypes = {
  1: '有效天数',
  2: '有效时间段',
}

const awardTypes = {
  1: '加息券',
  2: '红包',
  3: '体验金',
  // 4: '用户积分',
  // 5: '实物',
  6: '优惠券',
}

const templateTypes = {
  1: '恭喜你在{{sourceName}}活动中获得了{{awardName}}奖励,请在我的奖励中查看。',
  2: '恭喜你在{{sourceName}}活动中获得了{{awardName}}奖励,请在我的奖励中查看。',
  3: '恭喜你在{{sourceName}}活动中获得了{{awardName}}奖励,请在我的奖励中查看。',
  6: '恭喜你在{{sourceName}}活动中获得了{{awardName}}奖励,请在我的奖励中查看。',
}

const ruleFileds = {
  channels: '渠道',
  min_time: '最小时间',
  max_time: '最大时间',
  min_cast: '最小投资',
  max_cast: '最大投资',
  isfirst: '首次',
  min_recharge: '最小充值',
  max_recharge: '最大充值',
  is_invite: '是否被邀请',
  invite_num: '邀请人数',
  user_level: '用户等级',
  min_balance: '最小余额',
  max_balance: '最大余额',
  min_payment: '最小回款',
  max_payment: '最大回款',
  start_time: '起始时间',
  end_time: '结束时间',
  min_recharge_all: '最小充值金额',
  max_recharge_all: '最大充值金额',
  min_cast_all: '最小投资金额',
  max_cast_all: '最大投资金额',
}

const ruleTypes = {
  register: '注册时间',
  channel: '用户渠道',
  invite: '是否被邀请',
  invitenum: '邀请人数',
  userlevel: '用户等级',
  balance: '用户余额',
  cast: '投资金额',
  recharge: '充值金额',
  payment: '回款金额',
  castall: '投资总金额',
  rechargeall: '充值总金额',
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
  1: '测试',
  2: '白银',
  3: '黄金',
  4: '原油',
  5: 'test',
  6: '古董',
  7: '专用',
  8: '月利宝',
  9: '房贷',
  10: '旧机动车抵押',
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
  templateTypes,
  userLevels,
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



