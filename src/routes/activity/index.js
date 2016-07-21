import React from 'react';
import Activity from '../../components/pages/Activity';
import ActivityList from '../../components/pages/ActivityList';
import ActivityAdd from '../../components/pages/ActivityAdd';

export default {

  path: '/Activity',
  children: [
    {
      path: '/',
      action() {
        return <ActivityList />;
      },
    }, {
      path: '/gid/:groupId',
      action(context) {
        return <ActivityAdd groupId={context.params.groupId} />;
      },
    }, {
      path: '/id/:activityId',
      action(context) {
        const activityId = +context.params.activityId;
        return <Activity activityId={activityId} />;
      },
    }, {
      path: '/:typeId',
      action(context) {
        const typeId = +context.params.typeId;
        return <ActivityList typeId={typeId} page={+context.query.page || 1} />;
      },
    },
  ],
  async action({ next, context }) {
    context.setTitle('运营后台 | 活动管理');
    const component = await next();
    return component;
  },
};