import {
  ACTIVITY_INDEX,
  ACTIVITY_ADD,
  ACTIVITY_DEL,
  ACTIVITY_GROUP_ADD,
  ACTIVITY_GROUP_INFO,
  ACTIVITY_GROUP_LIST,
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
  ARTICLE_TYPE_LIST,
} from '../constants/index.js';

const apiHost = 'http://api-omg.wanglibao.com';
const apiList = {}

apiList[ACTIVITY_INDEX] = '/activity/index';
apiList[ACTIVITY_GROUP_LIST] = '/activity/group-list';
apiList[ACTIVITY_ADD] = '/activity/add';
apiList[ACTIVITY_DEL] = '/activity/del';
apiList[ACTIVITY_GROUP_ADD] = '/activity/group-add';
apiList[ACTIVITY_GROUP_INFO] = '/activity/group-info';
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
apiList[ARTICLE_TYPE_LIST]='/cms/content/type-list';

function getApi(type) {
  return apiHost + apiList[type];
}

const typeList = {
  channel : '渠道',
  register : '注册',
  invite: '邀请',
  invitenum: '邀请用户数量',
  userlevel: '用户等级',
  usercredit: '用户积分',
  balance: '用户余额',
  cast: '投资',
  firstcast: '首投',
}

export { getApi, typeList };



