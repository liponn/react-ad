import React from 'react';
import Thread from '../../components/pages/Thread';

export default {

    path: '/thread',

    action() {
        return <Thread />;
    },
    /*path: '/Thread',
    children: [
        {
            path: '/:typeId',
            action(context) {
                const typeId = +context.params.isVerify;
                return <Thread typeId={typeId} />;
            },
        },
    ],
    async action({ next, context }) {
        context.setTitle('运营后台 | 活动管理');
        const component = await next();
        return component;
    },*/
};
