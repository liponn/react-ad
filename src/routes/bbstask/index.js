import React from 'react';
import BbsTaskList from '../../components/pages/BbsTaskList';
import BbsTask from '../../components/pages/BbsTask';
import Video from '../../components/Tools/Video';

export default {

    path: '/Bbstask',
    children: [
        {
            path: '/video',
            action() {
                return <Video src="https://v.qq.com/iframe/player.html?vid=p0532mc1bvu&tiny=0&auto=0"/>;
            },
        },  {
            path: '/:typeId',
            action(context) {
                const typeId = +context.params.typeId;
                return <BbsTaskList typeId={typeId} page={+context.query.page || 1} />;
            },
        },  {
            path: '/id/:taskId',
            action(context) {
                const taskId = +context.params.taskId;
                return <BbsTask taskId={taskId} />;
            },
        },

    ],
    async action({ next, context }) {
        context.setTitle('运营后台 | 活动管理');
        const component = await next();
        return component;
    },

};
