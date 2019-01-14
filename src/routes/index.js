/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../components/layouts/App';

// Child routes
import activity from './activity';
import home from './home';
import content from './content';
import error from './error';
import channel from './channel';
import award from './award';
import article from './article';
import banner from './banner';
import startup from './startup';
import awardsend from './awardsend';
import appupdate from './appupdate';
import feedback from './feedback';
import notice from './notice';
import redeem from './redeem';
import shareconfig from './shareconfig';
import sendawards from './sendawards';
import activityjoins from './activityjoins';
import awardlist from './awardlist';
import admin from './admin';
import idiom from './idiom';
import integral from './integral';
import oneyuan from './oneyuan';
import hongbao from './hongbao';
import privilege from './privilege';
import thread from './thread';
import section from './section';
import reply from './reply';
import bbsuser from './bbsuser';
import bbsconfig from './bbsconfig';
import bbsmessage from './bbsmessage';
import bbsblock from './bbsblock';
import welcome from './welcome';
import jianmianhui from './jianmianhui';
import userattr from './userattr';
import globalattr from './globalattr';
import bbstask from './bbstask';
import feeflowconfig from './feeflowconfig';
import feefloworder from './feefloworder';
import examine from './examine';
import worldcupconfig from './worldcupconfig';
import log from './log';
import ad from './ad';
import infolink from './infolink';
import question from './question';
import category from './category';
import perhundred from './perhundred';
import returncash from './returncash';
import hockey from './hockey';
import prizetype from './prizetype';
import prize from './prize';
import exchange from './exchange';
import weeksguess from './weeksguess';
import newyearamountshare from './newyearamountshare';
export default {

  path: '/',

  children: [
    returncash,
    weeksguess,
    newyearamountshare,
    hockey,
    exchange,
    prize,
    prizetype,
    perhundred,
    category,
    question,
    infolink,
    ad,
    worldcupconfig,
    log,
    examine,
    feefloworder,
    feeflowconfig,
    jianmianhui,
    userattr,
    globalattr,
    welcome,
    bbsblock,
    bbstask,
    bbsmessage,
    bbsconfig,
    bbsuser,
    reply,
    section,
    thread,
    privilege,
    hongbao,
    oneyuan,
    integral,
    idiom,
    admin,
    activityjoins,
    awardlist,
    sendawards,
    shareconfig,
    redeem,
    notice,
    feedback,
    appupdate,
    awardsend,
    startup,
    activity,
    channel,
    award,
    banner,
    article,
    home,
    content,
    error,
  ],

  async action({ next, render, context, path }) {

    const component = await next();
    if (component === undefined) return component;
    return render(
      <App context={context}>{component}</App>
    );
  },

};
