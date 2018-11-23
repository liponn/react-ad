import React from 'react';
import Hockey from '../../components/pages/Hockey';

export default {
    path: '/Hockey',
    children: [
        {
            path: '/:typeId',
            action(context) {
                const typeId = +context.params.typeId;
                return <Hockey typeId={typeId} page={+context.query.page || 1}/>;
            },
        },
    ],
    async action({ next }) {
        const component = await next();
        return component;
    },
};