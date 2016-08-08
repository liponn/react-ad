import React, { PropTypes } from 'react';
import { analytics } from '../config';

function Html({ title, description, style, script, children, state }) {
  return (
    <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />

        <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/main.css" />
        <link rel="stylesheet" type="text/css" href="/css/picker/default.css" />
        <link rel="stylesheet" type="text/css" href="/css/picker/default.date.css" />
        <link rel="stylesheet" type="text/css" href="/css/picker/default.time.css" />
        <link rel="stylesheet" type="text/css" href="/lib/fancybox/jquery.fancybox.css" />

        <style id="css" dangerouslySetInnerHTML={{ __html: style }} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        <script src="/lib/jquery.min.js" />
        <script src="/lib/tether.min.js" />
        <script src="/lib/bootstrap.min.js" />
        <script src="/lib/picker/picker.js" />
        <script src="/lib/picker/picker.date.js" />
        <script src="/lib/picker/picker.time.js" />
        <script src="/lib/picker/picker.zh_cn.js" />
        <script src="/js/tinymce/tinymce.min.js" />
        <script src="/lib/fancybox/jquery.fancybox.pack.js" />
        <script src="/js/main.js" />
        {script && (
          <script
            id="source"
            src={script}
            data-initial-state={JSON.stringify(state)}
          />
        )}
        {analytics.google.trackingId &&
          <script
            dangerouslySetInnerHTML={{ __html:
            'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
            `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
          />
        }
        {analytics.google.trackingId &&
          <script src="https://www.google-analytics.com/analytics.js" async defer />
        }
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  script: PropTypes.string,
  children: PropTypes.string,
  state: PropTypes.object.isRequired,
};

export default Html;
