/**
 * Created by Wangli on 2016/6/14.
 */
import React from 'react';
import Banner from '../../components/pages/Banner';

export default {

    path:'/Banner',

    action(){
       return <Banner />;
    },
    children: [
        {
            path: '/:type',
            action() {
                return <Banner />;
            },
        },
    ],
};
