import React from 'react';
import ActivityAdd from '../../components/Pages/ActivityAdd';
import { ActivityList, Activity } from '../../components/Pages';

export default {

  path: '/Activity',
  children: [
    {
      path: '/',
      action() {
        return <ActivityList />;
      }
    },{
      path: '/gid/:groupId',
      action(context) {
        return <ActivityAdd groupId={context.params.groupId} />;
      }
    },{
      path: '/id/:activityId',
      action(context) {
        return <Activity id={context.params.activityId} />;
      }
    }
  ],
  async action({ next }) {
    const component = await next();
    return component;
  },
};