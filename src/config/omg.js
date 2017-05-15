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
  AWARD_REISSUE,
  AWARD_COUPON_TOTAL,
  AWARD_COUPON_EXPORT,
  AWARD_COUPON_DOWNLOAD,
  AWARD_INVALIDE_COUPON,

  CHANNEL_ADD,
  CHANNEL_DEL,
  CHANNEL_INFO,
  CHANNEL_LIST,
  CHANNEL_PUT,
  CHANNEL_DT_LIST,

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

  ADMIN_ADD,
  ADMIN_LIST,
  ADMIN_UPDATE,
  ADMIN_DEL,

  PRIVILEGE_ADD,
  PRIVILEGE_DEL,
  PRIVILEGE_LIST,
  PRIVILEGE_UPDATE,

  TEMPLATE_HELP,
  TEMPLATE_MEDIA,
  TEMPLATE_DYNAMIC,
  TEMPLATE_NOTICE,
  TEMPLATE_CLASSROOM,

  IDIOM_ADD,
  IDIOM_DEL,
  IDIOM_INFO,
  IDIOM_LIST,
  IDIOM_PUT,

  INTEGRAL_LIST,
  INTEGRAL_OPERATION,
  INTEGRAL_UP,
  INTEGRAL_DOWN,
  INTEGRAL_DEL,
  INTEGRAL_ENABLE,
  INTEGRAL_DISABLE,

  ONEYUAN_LIST,
  ONEYUAN_OPERATION,
  ONEYUAN_ENABLE,
  ONEYUAN_DISABLE,
  ONEYUAN_DEL,
  ONEYUAN_OPEN,
  ONEYUAN_AUTO_OPEN,
  ONEYUAN_ADD_CHANCE,

  HONGBAO_LIST,
  HONGBAO_OPERATION,
  HONGBAO_ENABLE,
  HONGBAO_DISABLE,
  HONGBAO_DEL,

  BBS_THREAD_DT_ADD,
  BBS_THREAD_DT_LIST,
  BBS_THREAD_DT_DEL,
  BBS_THREAD_DT_UPDATE,
  BBS_THREAD_TOGGLE_STATUS,
  BBS_THREAD_UNVERIFY,

  BBS_SECTION_CLOSE,
  BBS_SECTION_DT_ADD,
  BBS_SECTION_DT_DEL,
  BBS_SECTION_DT_LIST,
  BBS_SECTION_DT_UPDATE,
  BBS_SECTION_OPEN,
  BBS_SECTION_LIST,

  BBS_USER_BLOCK,
  BBS_USER_DT_ADD,
  BBS_USER_DT_DEL,
  BBS_USER_DT_LIST,
  BBS_USER_DT_UPDATE,
  BBS_USER_UNBLOCK,
  BBS_USER_ADMIN,
  BBS_USER_UNADMIN,
  BBS_USER_ADMIN_LIST,

  BBS_COMMENT_DT_ADD,
  BBS_COMMENT_DT_DEL,
  BBS_COMMENT_DT_LIST,
  BBS_COMMENT_DT_UPDATE,
  BBS_COMMENT_VERIFY,
  BBS_COMMENT_UNVERIFY,

  BBS_MESSAGE_DT_ADD,
  BBS_MESSAGE_DT_DEL,
  BBS_MESSAGE_DT_LIST,
  BBS_MESSAGE_DT_UPDATE,

  BBS_CONFIG_DT_ADD,
  BBS_CONFIG_DT_DEL,
  BBS_CONFIG_DT_LIST,
  BBS_CONFIG_DT_UPDATE,

  BBS_BLOCK_DT_ADD,
  BBS_BLOCK_DT_DEL,
  BBS_BLOCK_DT_LIST,
  BBS_BLOCK_DT_UPDATE,
  BBS_BLOCK_LIST,

  WELCOME_DT_ADD,
  WELCOME_DT_DEL,
  WELCOME_DT_LIST,
  WELCOME_DT_UPDATE,
  WELCOME_DISABLE,
  WELCOME_ENABLE,

} from '../constants/index.js';

import { hostname } from '../config.js';
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
apiList[AWARD_REISSUE] = '/award/reissue-award';
apiList[AWARD_COUPON_TOTAL] = '/award/coupon-code-total';
apiList[AWARD_COUPON_EXPORT] = '/award/coupon-export';
apiList[AWARD_COUPON_DOWNLOAD] = '/award/coupon-download';
apiList[AWARD_INVALIDE_COUPON] = '/award/invalid-coupon';

apiList[CHANNEL_ADD] = '/channel/add';
apiList[CHANNEL_INFO] = '/channel/info';
apiList[CHANNEL_LIST] = '/channel/list';
apiList[CHANNEL_PUT] = '/channel/put';
apiList[CHANNEL_DEL] = '/channel/del';
apiList[CHANNEL_DT_LIST] = '/channel/dt-list';

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
apiList[BATCH_AWARD_LIST] = '/activity/batch-award-list';

apiList[ADMIN_ADD] = '/admin/dt-add';
apiList[ADMIN_LIST] = '/admin/dt-list';
apiList[ADMIN_UPDATE] = '/admin/dt-update';
apiList[ADMIN_DEL] = '/admin/dt-delete';

apiList[PRIVILEGE_ADD] = '/privilege/dt-add';
apiList[PRIVILEGE_LIST] = '/privilege/dt-list';
apiList[PRIVILEGE_UPDATE] = '/privilege/dt-update';
apiList[PRIVILEGE_DEL] = '/privilege/dt-delete';

apiList[TEMPLATE_HELP] = '/template/help-list';
apiList[TEMPLATE_NOTICE] = '/template/notice-list';
apiList[TEMPLATE_MEDIA] = '/template/media-list';
apiList[TEMPLATE_DYNAMIC] = '/template/dynamic-list';
apiList[TEMPLATE_CLASSROOM] = '/template/study-list';

apiList[IDIOM_ADD] = '/cms/idiom/add';
apiList[IDIOM_DEL] = '/cms/idiom/del';
apiList[IDIOM_INFO] = '/cms/idiom/info';
apiList[IDIOM_LIST] = '/cms/idiom/list';
apiList[IDIOM_PUT] = '/cms/idiom/put';

apiList[INTEGRAL_LIST] = '/integral/list';
apiList[INTEGRAL_OPERATION] = '/integral/operation';
apiList[INTEGRAL_DOWN] = '/integral/down';
apiList[INTEGRAL_UP] = '/integral/up';
apiList[INTEGRAL_DEL] = '/integral/delete';
apiList[INTEGRAL_ENABLE] = '/integral/up-status';
apiList[INTEGRAL_DISABLE] = '/integral/down-status';

apiList[ONEYUAN_LIST] = '/one/list';
apiList[ONEYUAN_OPERATION] = '/one/operation';
apiList[ONEYUAN_ENABLE] = '/one/up-status';
apiList[ONEYUAN_DISABLE] = '/one/down-status';
apiList[ONEYUAN_DEL] = '/one/delete';
apiList[ONEYUAN_OPEN] = '/one/luck-draw';
apiList[ONEYUAN_AUTO_OPEN] = '/one/auto-luck-draw';
apiList[ONEYUAN_ADD_CHANCE] = '/one/add-one-yuan-num';

apiList[HONGBAO_LIST] = '/money/list';
apiList[HONGBAO_OPERATION] = '/money/operation';
apiList[HONGBAO_ENABLE] = '/money/up-status';
apiList[HONGBAO_DISABLE] = '/money/down-status';
apiList[HONGBAO_DEL] = '/money/delete';

apiList[BBS_THREAD_DT_LIST] = '/bbs/thread/dt-list';
apiList[BBS_THREAD_DT_ADD] = '/bbs/thread/dt-add';
apiList[BBS_THREAD_DT_DEL] = '/bbs/thread/dt-delete';
apiList[BBS_THREAD_DT_UPDATE] = '/bbs/thread/dt-update';
apiList[BBS_THREAD_TOGGLE_STATUS] = '/bbs/thread/toogle-status';
apiList[BBS_THREAD_UNVERIFY] = '/bbs/thread/del';

apiList[BBS_SECTION_DT_LIST] = '/bbs/section/dt-list';
apiList[BBS_SECTION_DT_ADD] = '/bbs/section/dt-add';
apiList[BBS_SECTION_DT_DEL] = '/bbs/section/dt-delete';
apiList[BBS_SECTION_DT_UPDATE] = '/bbs/section/dt-update';
apiList[BBS_SECTION_CLOSE] = '/bbs/section/close';
apiList[BBS_SECTION_OPEN] = '/bbs/section/open';
apiList[BBS_SECTION_LIST] = '/bbs/section/list';

apiList[BBS_USER_DT_UPDATE] = '/bbs/user/dt-update';
apiList[BBS_USER_UNBLOCK] = '/bbs/user/to-user';
apiList[BBS_USER_DT_LIST] = '/bbs/user/dt-list';
apiList[BBS_USER_DT_DEL] = '/bbs/user/dt-delete';
apiList[BBS_USER_DT_ADD] = '/bbs/user/dt-add';
apiList[BBS_USER_BLOCK] = '/bbs/user/to-black';
apiList[BBS_USER_ADMIN] = '/bbs/user/add';
apiList[BBS_USER_UNADMIN] = '/bbs/user/del';
apiList[BBS_USER_ADMIN_LIST] = '/bbs/user/list';

apiList[BBS_COMMENT_DT_ADD] = '/bbs/comment/dt-add';
apiList[BBS_COMMENT_DT_UPDATE] = '/bbs/comment/dt-update';
apiList[BBS_COMMENT_DT_DEL] = '/bbs/comment/dt-delete';
apiList[BBS_COMMENT_DT_LIST] = '/bbs/comment/dt-list';
apiList[BBS_COMMENT_VERIFY] = '/bbs/comment/check';
apiList[BBS_COMMENT_UNVERIFY] = '/bbs/comment/check-fail';

apiList[BBS_MESSAGE_DT_DEL] = '/bbs/pm/dt-delete';
apiList[BBS_MESSAGE_DT_UPDATE] = '/bbs/pm/dt-update';
apiList[BBS_MESSAGE_DT_ADD] = '/bbs/pm/dt-add';
apiList[BBS_MESSAGE_DT_LIST] = '/bbs/pm/dt-list';

apiList[BBS_CONFIG_DT_ADD] = '/bbs/global/dt-add';
apiList[BBS_CONFIG_DT_DEL] = '/bbs/global/dt-delete';
apiList[BBS_CONFIG_DT_LIST] = '/bbs/global/dt-list';
apiList[BBS_CONFIG_DT_UPDATE] = '/bbs/global/update';

apiList[BBS_BLOCK_DT_ADD] = '/bbs/replay/dt-add';
apiList[BBS_BLOCK_DT_UPDATE] = '/bbs/replay/dt-update';
apiList[BBS_BLOCK_DT_LIST] = '/bbs/replay/dt-list';
apiList[BBS_BLOCK_DT_DEL] = '/bbs/replay/dt-delete';
apiList[BBS_BLOCK_LIST] = '/bbs/replay/list';

apiList[WELCOME_DT_DEL] = '/cms/welcome/dt-delete';
apiList[WELCOME_DT_ADD] = '/cms/welcome/dt-add';
apiList[WELCOME_DT_UPDATE] = '/cms/welcome/dt-update';
apiList[WELCOME_DT_LIST] = '/cms/welcome/dt-list';
apiList[WELCOME_ENABLE] = '/cms/welcome/online';
apiList[WELCOME_DISABLE] = '/cms/welcome/offline';

function getApi(type) {
  let apiHost = '';
  const host = typeof window !== 'undefined' ? window.location.hostname : hostname;
  switch (host) {
    case 'localhost' :  // 本地开发
      apiHost = 'http://api-omg.wanglibao.com';
      break;
    case '192.168.10.36': // dev环境
      apiHost = 'http://yunying.dev.wanglibao.com';
      break;
    case 'yyadmin.wanglibao.com': // 测试环境
      apiHost = 'https://php1.wanglibao.com/yunying';
      break;
    case 'yyadmin3.wanglibao.com': // 预上线环境
      apiHost = 'https://php3.wanglibao.com/yunying';
      break;
    case 'yunyingadmin.wanglibao.com': // 线上环境
      apiHost = 'https://www.wanglibao.com/yunying';
      break;
    default: // 默认线上
      apiHost = 'https://www.wanglibao.com/yunying';
      break;
  }
  // apiHost = 'https://www.wanglibao.com/yunying';
  return apiHost + apiList[type];
}

const adminTypes = {
  0: '游客',
  1: '超级管理员',
  2: '运营组',
  3: '产品组',
  4: '渠道组',
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
  4: '发现页H5页面',
  5: '其它H5页面',
  6: '体验金',
  7: '投资助手',
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
  // 5: '实物',
  6: '优惠券',
}

const templateTypes = {
  1: '恭喜您在\'{{sourcename}}\'活动中获得\'{{awardname}}\'奖励。',
  2: '恭喜您在\'{{sourcename}}\'活动中获得\'{{awardname}}\'奖励。',
  3: '恭喜您在\'{{sourcename}}\'活动中获得\'{{awardname}}\'奖励。',
  4: '恭喜您在\'{{sourcename}}\'活动中获得\'{{awardname}}\'奖励。',
  6: '恭喜您在\'{{sourcename}}\'活动中获得\'{{awardname}}\'奖励,兑换码为\'{{code}}\'。',
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
  join_max: '参与人数上限',
  type: '类型',
  min_paymentdate: '最小天数 >=',
  max_paymentdate: '最大天数 <',
  min_num: '最小次数 >',
  max_num: '最大次数 <=',
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
  8: '签到',
}

const triggerRuleFileds = {
  0: {},
  1: {},
  2: { recharge: '充值金额' },
  3: {},
  4: { cast: '投资金额', castname: '投资标名称', casttype: '标期限制' },
  5: { payment: '回款金额', paymentdate: '项目天数' },
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
  joinnum: '参与人数上限',
  castnum: '投资次数',
  paymentnum: '回款次数',
}

const bannerTypes = {
  mobile: '移动端轮播图',
  discover: '发现页',
  pc: 'PC端轮播图',
  pop: '活动弹窗',
  cast_finish: '投资完成页',
  memorabilia: '大事记',
  appzichan: '资产页',
  ios_score: 'ios评分页',
  channel: '渠道落地页',
  pc_channel: 'pc渠道落地页',
  annualreport: '运营报告_PC',
  annualreport_app: '运营报告_APP',
}

const channelStatusTypes = {
  0: '正常',
  1: '暂停拉新',
  2: '暂停合作',
  3: '渠道归并',
}

const channelClassTypes = {
  '----': '不限制',
  CPC: '按点击计费',
  CPD: '按天计费',
  CPT: '按时间计费',
  CPA: '按行为计费',
  CPS: '按销售计费',
}

const shareConfigTypes = {
  share: '常规配置',
  taojin: '全民淘金',
}

// 启动页类型
const startupTypes = {
  1: 'IOS',
  2: 'Android',
}

const startupImages = {
  '1:1': '1242x2208',
  '1:2': '750x1334',
  '1:3': '640x1136',
  '1:4': '640x960',
  '2:1': '1080x1920',
  '2:2': '720x1280',
  '2:3': '480x800',
  '2:4': '无',
}


const platform = {
  0: '全平台',
  1: 'App',
  2: 'H5',
  3: 'PC端',
}

const noticePlatforms = {
  0: '全平台',
  1: 'PC端',
  2: '移动端',
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

const castDateTypes = {
  0: '不限',
  1: '天标',
  2: '月标',
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
  startupImages,
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
  adminTypes,
  noticePlatforms,
  castDateTypes,
  channelStatusTypes,
  channelClassTypes,
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



