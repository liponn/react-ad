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

  AWARD_LIST,
  AWARD_ADD,
  AWARD_UPDATE,
  AWARD_DEL,
  AWARD_INFO,

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

  BANNER_LIST,
  BANNER_DEL,
  BANNER_ADD,
  BANNER_PUT,

  ATTACHMENT_ADD,
  ATTACHMENT_LIST,

} from '../constants/index.js';

// const apiHost = 'http://192.168.10.36:8001';
const apiHost = 'http://api-omg.wanglibao.com';
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


apiList[AWARD_ADD] = '/award/add';
apiList[AWARD_DEL] = '/award/delete';
apiList[AWARD_INFO] = '/award/get-one';
apiList[AWARD_LIST] = '/award/get-list';
apiList[AWARD_UPDATE] = '/award/update';

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

apiList[BANNER_LIST] = '/img/banner-list';
apiList[BANNER_DEL] = '/img/banner-del';
apiList[BANNER_PUT] = '/img/banner-edit';
apiList[BANNER_ADD] = '/img/banner-add';
apiList[ATTACHMENT_ADD] = '/img/img-add';
apiList[ATTACHMENT_LIST] = '/img/img-list';


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
}

const activityTriggers = {
  0: '主动',
  1: '注册',
  2: '首投',
  3: '绑卡',
  4: '投资',
  5: '邀请',
  6: '实名',
}

const redEnvelopeTypes = {
  1: '直抵红包',
  2: '百分比红包',
}

const redEnvelopeTimeTypes = {
  1: '按天数',
  2: '按时间段',
}

const interestTypes = {
  1: '全周期',
  2: '加息天数',
  3: '加息时间段',
}

const interestTimeTypes = {
  1: '有效天数',
  2: '有效时间段',
}

const awardTypes = {
  1: '加息券',
  2: '红包',
  3: '体验金',
  4: '用户积分',
  5: '实物',
  6: '优惠券',
}

const ruleFileds = {
  channels: '渠道',
  min_time: '最小时间',
  max_time: '最大时间',
  min_cast: '最小充值',
  max_cast: '最大充值',
  isfirst: '首次',
}

const ruleTypes = {
  register: '注册',
  channel: '渠道',
  cast: '投资',
  recharge: '充值',
}

const bannerTypes = {
  1: '移动端轮播图',
  2: 'PC端轮播图',
  test: '测试',
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
}

function getConfig(type, value = false) {
  if (typeof config[type] === 'undefined') {
    return [];
  }
  if (value === false) {
    return config[type];
  }
  if(typeof config[type][value] === 'undefined') {
    return value;
  }
  return config[type][value];
}

export { getApi, getConfig, typeList };



