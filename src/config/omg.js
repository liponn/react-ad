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

  ACTIVITY_INVITE_AWARD_ADD,
  ACTIVITY_INVITE_AWARD_DEL,
  ACTIVITY_INVITE_AWARD_LIST,

  ACTIVITY_REWARD_LIST,
  ACTIVITY_JOINS_LIST,

  APP_ADD,
  APP_DISABLE,
  APP_ENABLE,
  APP_INFO,
  APP_PUT,
  APP_UPDATE_LOG,
  APP_DEL,

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

  FEEDBACK_LIST,

  NOTICE_ADD,
  NOTICE_DEL,
  NOTICE_DETAIL,
  NOTICE_DOWN,
  NOTICE_LIST,
  NOTICE_OFFLINE,
  NOTICE_PUT,
  NOTICE_RELEASE,
  NOTICE_UP,

  REDEEM_ADD,
  REDEEM_CODE_LIST,
  REDEEM_EXPORT,
  REDEEM_LIST,
  REDEEM_DOWNLOAD,

  BATCH_AWARD_LIST,
  BATCH_AWARD,

} from '../constants/index.js';

import { serverApi } from '../config';

// const apiHost = 'http://yunying.dev.wanglibao.com/';
// const apiHost = 'http://api-omg.wanglibao.com/';
const apiHost = serverApi;
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
apiList[ACTIVITY_INVITE_AWARD_ADD] = '/activity/award-invite-add';
apiList[ACTIVITY_INVITE_AWARD_DEL] = '/activity/award-invite-delete';
apiList[ACTIVITY_INVITE_AWARD_LIST] = '/activity/award-invite-list';

apiList[ACTIVITY_REWARD_LIST] = '/activity/send-reward-log-list';
apiList[ACTIVITY_JOINS_LIST] = '/activity/activity-joins-list';

apiList[APP_ADD] = '/app/add';
apiList[APP_DISABLE] = '/app/close';
apiList[APP_ENABLE] = '/app/enable';
apiList[APP_INFO] = '/app/info';
apiList[APP_PUT] = '/app/put';
apiList[APP_UPDATE_LOG] = '/app/update-log';
apiList[APP_DEL] = '/app/del';

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

apiList[FEEDBACK_LIST] = '/cms/content/opinion-list';

apiList[NOTICE_ADD] = '/notice/add';
apiList[NOTICE_DEL] = '/notice/del';
apiList[NOTICE_DETAIL] = '/notice/detail';
apiList[NOTICE_DOWN] = '/notice/down';
apiList[NOTICE_LIST] = '/notice/list';
apiList[NOTICE_OFFLINE] = '/notice/offline';
apiList[NOTICE_PUT] = '/notice/put';
apiList[NOTICE_RELEASE] = '/notice/release';
apiList[NOTICE_UP] = '/notice/up';

apiList[REDEEM_ADD] = '/redeem/add';
apiList[REDEEM_CODE_LIST] = '/redeem/code-list';
apiList[REDEEM_EXPORT] = '/redeem/export';
apiList[REDEEM_LIST] = '/redeem/list';
apiList[REDEEM_DOWNLOAD] = '/redeem/download';

apiList[BATCH_AWARD] = '/award/batch-award';
apiList[BATCH_AWARD_LIST] = '/activity/batch-award-list'


function getApi(type) {
  return apiHost + apiList[type];
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
  0: '不限',
  1: '一天一次',
  2: '仅一次',
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
  // 3: '加息时间段',
  // 4: '加息月数',
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

const discoverTypes = {
  0: '——',
  1: '最热',
}

const popTypes = {
  0: '不跳转',
  1: '理财专区',
  2: '发现页',
  3: '全民淘金',
  4: '发现页',
  5: '其它H5页面',
  6: '体验金',
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
  1: '恭喜您在\'{{sourcename}}\'活动中获得了\'{{awardname}}\'奖励。',
  2: '恭喜您在\'{{sourcename}}\'活动中获得了\'{{awardname}}\'奖励。',
  3: '恭喜您在\'{{sourcename}}\'活动中获得了\'{{awardname}}\'奖励。',
  6: '恭喜您在\'{{sourcename}}\'活动中获得了\'{{awardname}}\'奖励,兑换码为\'{{code}}\'。',
}

const ruleFileds = {
  channels: '渠道',
  min_time: '最小时间',
  max_time: '最大时间',
  min_cast: '最小投资',
  max_cast: '最大投资',
  isfirst: '是否首次',
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
  name: '名称',
  stage_name: '期名',
}

const activityTriggers = {
  0: '主动',
  1: '注册',
  2: '充值',
  3: '首次绑卡',
  4: '投资',
  5: '回款',
  6: '实名',
  7: '微信绑定',
}

const triggerRuleFileds = {
  0: {},
  1: {},
  2: { recharge: '充值金额' },
  3: {},
  4: { cast: '投资金额', castname: '投资标名称' },
  5: { payment: '回款金额' },
  6: {},
  7: {},
}

const ruleTypes = {
  register: '注册时间',
  channel: '用户渠道',
  channelblist: '渠道黑名单',
  invite: '是否被邀请',
  invitenum: '邀请人数',
  userlevel: '用户等级',
  balance: '用户余额',
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
  channel: '渠道落地页',
}

const shareConfigTypes = {
  taojin: '全民淘金',
}

// 启动页类型
const startupTypes = {
  1: 'IOS',
  2: 'Android',
}


const platform = {
  0: '全平台',
  1: 'App',
  2: 'H5',
  3: 'PC端',
}

const redeemStatus = {
  0: '队列中',
  1: '生成中',
  2: '完成',
}

const feedbackPlatformTypes = {
  1: 'ios',
  2: '安卓',
  3: 'PC',
  4: 'H5',
}

const projectDurationTypes = {
  1: '不限',
  2: '月标',
  3: '月及以上标',
  4: '月及以下标',
  5: '日标',
  6: '日及以上标',
  7: '日及以下标',
}

const articlePlatformTypes = {
  0: '全平台',
  1: 'PC端',
  2: '移动端',
}

const platformTypes = {
  0: '全平台',
  1: 'App',
  2: 'h5',
  3: 'pc端',
}

const appUpdateTypes = {
  1: '安卓',
  2: 'IOS',
}

const castTypes = {
  0: '不限',
  1: '首投',
  2: '非首投',
}

const rechargeTypes = {
  0: '不限', 
  1: '首充',
  2: '非首充',
}

const release = {
  0: '未发布',
  1: '已发布',
}

const projectTypes = {
  0: '不限',
  1: '散标',
  2: '月利宝',
  11: '产融通',
  12: '好房赚',
  13: '好车盈',
  14: '银行优选',
  15: '黄金精选',
}

function getAllRuleTypes() {
  const allRuleTypes = {};
  Object.assign(allRuleTypes, ruleTypes);
  Object.keys(triggerRuleFileds).forEach((index) => (
    Object.assign(allRuleTypes, triggerRuleFileds[index])
  ));
  return allRuleTypes;
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
  articlePlatformTypes,
  feedbackPlatformTypes,
  redeemStatus,
  discoverTypes,
  popTypes,
  triggerRuleFileds,
  shareConfigTypes,
  allRuleTypes: getAllRuleTypes(),
  castTypes,
  rechargeTypes,
};

function getConfig(type, key = false) {
  const values = config[type] || undefined;
  if (key === false) {
    return values;
  }
  const value = values[key] || key;
  return value;
}

export { getApi, getConfig };



