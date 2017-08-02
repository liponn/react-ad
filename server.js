require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  __webpack_require__(4);
  
  var _path = __webpack_require__(5);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(6);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(7);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(8);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _expressJwt = __webpack_require__(9);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  var _expressGraphql = __webpack_require__(10);
  
  var _expressGraphql2 = _interopRequireDefault(_expressGraphql);
  
  var _jsonwebtoken = __webpack_require__(11);
  
  var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(13);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _Html = __webpack_require__(14);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _ErrorPage = __webpack_require__(17);
  
  var _ErrorPage2 = __webpack_require__(19);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _universalRouter = __webpack_require__(26);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(27);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _schema = __webpack_require__(28);
  
  var _schema2 = _interopRequireDefault(_schema);
  
  var _routes = __webpack_require__(42);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(240);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _configureStore = __webpack_require__(241);
  
  var _configureStore2 = _interopRequireDefault(_configureStore);
  
  var _runtime = __webpack_require__(251);
  
  var _config = __webpack_require__(16);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import passport from './core/passport';
  // import models from './data/models';
  var app = (0, _express2.default)();
  
  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  // eslint-disable-line import/no-unresolved
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
  
  //
  // Authentication
  // -----------------------------------------------------------------------------
  app.use((0, _expressJwt2.default)({
    secret: _config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: function getToken(req) {
      return req.cookies.id_token;
    }
  }));
  // app.use(passport.initialize());
  /*
  
  app.get('/login/facebook',
    passport.authenticate('facebook', { scope: ['email', 'user_location'], session: false })
  );
  app.get('/login/facebook/return',
    passport.authenticate('facebook', { failureRedirect: '/login', session: false }),
    (req, res) => {
      const expiresIn = 60 * 60 * 24 * 180; // 180 days
      const token = jwt.sign(req.user, auth.jwt.secret, { expiresIn });
      res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
      res.redirect('/');
    }
  );
  */
  
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  app.use('/graphql', (0, _expressGraphql2.default)(function (req) {
    return {
      schema: _schema2.default,
      graphiql: true,
      rootValue: { request: req },
      pretty: ("production") !== 'production'
    };
  }));
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  app.get('*', function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
      var css, statusCode, data, store, html;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              css = [];
              statusCode = 200;
              data = { title: '', description: '', style: '', script: _assets2.default.main.js, children: '' };
              store = (0, _configureStore2.default)({}, {
                cookie: req.headers.cookie
              });
  
  
              store.dispatch((0, _runtime.setRuntimeVariable)({
                name: 'initialNow',
                value: Date.now()
              }));
  
              store.dispatch((0, _runtime.setHost)({
                name: 'host',
                value: req.headers.host
              }));
  
              _context.next = 9;
              return _universalRouter2.default.resolve(_routes2.default, {
                path: req.path,
                query: req.query,
                context: {
                  store: store,
                  insertCss: function insertCss() {
                    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                      styles[_key] = arguments[_key];
                    }
  
                    styles.forEach(function (style) {
                      return css.push(style._getCss());
                    }); // eslint-disable-line no-underscore-dangle, max-len
                  },
                  setTitle: function setTitle(value) {
                    return data.title = value;
                  },
                  setMeta: function setMeta(key, value) {
                    return data[key] = value;
                  }
                },
                render: function render(component) {
                  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  
                  css = [];
                  statusCode = status;
                  data.children = _server2.default.renderToString(component);
                  data.style = css.join('');
                  data.state = store.getState();
                  return true;
                }
              });
  
            case 9:
              html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, data));
  
  
              res.status(statusCode);
              res.send('<!doctype html>' + html);
              _context.next = 17;
              break;
  
            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](0);
  
              next(_context.t0);
  
            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 14]]);
    }));
  
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  
  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();
  pe.skipNodeFiles();
  pe.skipPackage('express');
  
  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    var statusCode = err.status || 500;
    var html = _server2.default.renderToStaticMarkup((0, _jsx3.default)(_Html2.default, {
      title: 'Internal Server Error',
      description: err.message,
      style: _ErrorPage3.default._getCss()
    }, void 0, _server2.default.renderToString((0, _jsx3.default)(_ErrorPage.ErrorPage, {
      error: err
    }))));
    res.status(statusCode);
    res.send('<!doctype html>' + html);
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  /* eslint-disable no-console */
  //models.sync().catch(err => console.error(err.stack)).then(() => {
  app.listen(_config.port, function () {
    console.log('The server is running at http://localhost:' + _config.port + '/');
  });
  //});
  /* eslint-enable no-console */

/***/ }),
/* 1 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/jsx");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

  module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

  module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

  module.exports = require("cookie-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

  module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

  module.exports = require("express-jwt");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

  module.exports = require("express-graphql");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

  module.exports = require("react");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

  module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _stringify = __webpack_require__(15);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(16);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref2 = (0, _jsx3.default)('meta', {
    charSet: 'utf-8'
  });
  
  var _ref3 = (0, _jsx3.default)('meta', {
    httpEquiv: 'x-ua-compatible',
    content: 'ie=edge'
  });
  
  var _ref4 = (0, _jsx3.default)('meta', {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  });
  
  var _ref5 = (0, _jsx3.default)('link', {
    rel: 'apple-touch-icon',
    href: 'apple-touch-icon.png'
  });
  
  var _ref6 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: '/css/bootstrap.min.css'
  });
  
  var _ref7 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: '/css/font-awesome.min.css'
  });
  
  var _ref8 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: '/css/main.css'
  });
  
  var _ref9 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: '/css/picker/default.css'
  });
  
  var _ref10 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: '/css/picker/default.date.css'
  });
  
  var _ref11 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: '/css/picker/default.time.css'
  });
  
  var _ref12 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: '/lib/fancybox/jquery.fancybox.css'
  });
  
  var _ref13 = (0, _jsx3.default)('script', {
    src: '/lib/jquery.min.js'
  });
  
  var _ref14 = (0, _jsx3.default)('script', {
    src: '/lib/tether.min.js'
  });
  
  var _ref15 = (0, _jsx3.default)('script', {
    src: '/lib/bootstrap.min.js'
  });
  
  var _ref16 = (0, _jsx3.default)('script', {
    src: '/lib/picker/picker.js'
  });
  
  var _ref17 = (0, _jsx3.default)('script', {
    src: '/lib/picker/picker.date.js'
  });
  
  var _ref18 = (0, _jsx3.default)('script', {
    src: '/lib/picker/picker.time.js'
  });
  
  var _ref19 = (0, _jsx3.default)('script', {
    src: '/lib/picker/picker.zh_cn.js'
  });
  
  var _ref20 = (0, _jsx3.default)('script', {
    src: '/js/tinymce/tinymce.min.js'
  });
  
  var _ref21 = (0, _jsx3.default)('script', {
    src: '/lib/fancybox/jquery.fancybox.pack.js'
  });
  
  var _ref22 = (0, _jsx3.default)('script', {
    src: '/lib/clipboard.min.js'
  });
  
  var _ref23 = (0, _jsx3.default)('script', {
    src: '/js/main.js'
  });
  
  function Html(_ref) {
    var title = _ref.title,
        description = _ref.description,
        style = _ref.style,
        script = _ref.script,
        children = _ref.children,
        state = _ref.state;
  
    return (0, _jsx3.default)('html', {
      className: 'no-js',
      lang: ''
    }, void 0, (0, _jsx3.default)('head', {}, void 0, _ref2, _ref3, (0, _jsx3.default)('title', {}, void 0, title), (0, _jsx3.default)('meta', {
      name: 'description',
      content: description
    }), _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, (0, _jsx3.default)('style', {
      id: 'css',
      dangerouslySetInnerHTML: { __html: style }
    })), (0, _jsx3.default)('body', {}, void 0, (0, _jsx3.default)('div', {
      id: 'app',
      dangerouslySetInnerHTML: { __html: children }
    }), _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23, script && (0, _jsx3.default)('script', {
      id: 'source',
      src: script,
      'data-initial-state': (0, _stringify2.default)(state)
    })));
  }
  
  exports.default = Html;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable max-len */
  
  var port = exports.port = process.env.PORT || 3000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  
  var databaseUrl = exports.databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
  
  var analytics = exports.analytics = {
  
    // https://analytics.google.com/
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID // UA-XXXXX-X
    }
  };
  
  // 是否需要验证登录
  var authentication = exports.authentication = true;
  
  // 当前host,用来区分调用API
  var hostname = exports.hostname = process.env.YYADMIN_HOSTNAME || 'localhost';
  
  var auth = exports.auth = {
  
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },
  
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },
  
    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
  
    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  
  };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  exports.ErrorPage = ErrorPage;
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(19);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function ErrorPage(_ref, context) {
    var error = _ref.error;
  
    var title = 'Error';
    var content = 'Sorry, a critical error occurred on this page.';
    var errorMessage = null;
  
    if (error.status === 404) {
      title = 'Page Not Found';
      content = 'Sorry, the page you were trying to view does not exist.';
    } else if (false) {
      errorMessage = (0, _jsx3.default)('pre', {}, void 0, error.stack);
    }
  
    if (context.setTitle) {
      context.setTitle(title);
    }
  
    return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('h1', {}, void 0, title), (0, _jsx3.default)('p', {}, void 0, content), errorMessage);
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  ErrorPage.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(20);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "*{line-height:1.2;margin:0}html{color:#888;display:table;font-family:sans-serif;height:100%;text-align:center;width:100%}body{display:table-cell;vertical-align:middle;margin:2em auto}h1{color:#555;font-size:2em;font-weight:400}p{margin:0 auto;width:280px}pre{text-align:left;margin-top:32px;margin-top:2rem}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);
  
  // exports


/***/ }),
/* 21 */
/***/ (function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _stringify = __webpack_require__(15);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(24);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(25);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles, options) {
    var _Object$assign = (0, _assign2.default)({
      replace: false,
      prepend: false
    }, options);
  
    var replace = _Object$assign.replace;
    var prepend = _Object$assign.prepend;
  
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4);
  
      var moduleId = _styles$i[0];
      var css = _styles$i[1];
      var media = _styles$i[2];
      var sourceMap = _styles$i[3];
  
      var id = moduleId + '-' + i;
  
      ids.push(id);
  
      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }
  
      inserted[id] = 1;
  
      var elem = document.getElementById(prefix + id);
      var create = false;
  
      if (!elem) {
        create = true;
  
        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;
  
        if (media) {
          elem.setAttribute('media', media);
        }
      }
  
      var cssText = css;
      if (sourceMap) {
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '*/';
      }
  
      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }
  
      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }
  
    return removeCss.bind(null, ids);
  }
  
  module.exports = insertCss;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

  module.exports = require("universal-router");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

  module.exports = require("pretty-error");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(29);
  
  var _me = __webpack_require__(30);
  
  var _me2 = _interopRequireDefault(_me);
  
  var _content = __webpack_require__(32);
  
  var _content2 = _interopRequireDefault(_content);
  
  var _news = __webpack_require__(38);
  
  var _news2 = _interopRequireDefault(_news);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var schema = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
      name: 'Query',
      fields: {
        me: _me2.default,
        content: _content2.default,
        news: _news2.default
      }
    })
  });
  
  exports.default = schema;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

  module.exports = require("graphql");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _UserType = __webpack_require__(31);
  
  var _UserType2 = _interopRequireDefault(_UserType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var me = {
    type: _UserType2.default,
    resolve: function resolve(_ref) {
      var request = _ref.request;
  
      return request.user && {
        id: request.user.id,
        email: request.user.email
      };
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */
  
  exports.default = me;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(29);
  
  var UserType = new _graphql.GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
      email: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = UserType;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getIterator2 = __webpack_require__(25);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var resolveExtension = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path, extension) {
      var fileNameBase, ext, fileName;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fileNameBase = (0, _path.join)(CONTENT_DIR, '' + (path === '/' ? '/index' : path));
              ext = extension;
  
              if (!ext.startsWith('.')) {
                ext = '.' + extension;
              }
  
              fileName = fileNameBase + ext;
              _context.next = 6;
              return fileExists(fileName);
  
            case 6:
              if (_context.sent) {
                _context.next = 9;
                break;
              }
  
              fileNameBase = (0, _path.join)(CONTENT_DIR, path + '/index');
              fileName = fileNameBase + ext;
  
            case 9:
              _context.next = 11;
              return fileExists(fileName);
  
            case 11:
              if (_context.sent) {
                _context.next = 13;
                break;
              }
  
              return _context.abrupt('return', { success: false });
  
            case 13:
              return _context.abrupt('return', { success: true, fileName: fileName });
  
            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  
    return function resolveExtension(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  
  var resolveFileName = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(path) {
      var extensions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, extension, maybeFileName;
  
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              extensions = ['.md', '.html'];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 4;
              _iterator = (0, _getIterator3.default)(extensions);
  
            case 6:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context2.next = 16;
                break;
              }
  
              extension = _step.value;
              _context2.next = 10;
              return resolveExtension(path, extension);
  
            case 10:
              maybeFileName = _context2.sent;
  
              if (!maybeFileName.success) {
                _context2.next = 13;
                break;
              }
  
              return _context2.abrupt('return', { success: true, fileName: maybeFileName.fileName, extension: extension });
  
            case 13:
              _iteratorNormalCompletion = true;
              _context2.next = 6;
              break;
  
            case 16:
              _context2.next = 22;
              break;
  
            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2['catch'](4);
              _didIteratorError = true;
              _iteratorError = _context2.t0;
  
            case 22:
              _context2.prev = 22;
              _context2.prev = 23;
  
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
  
            case 25:
              _context2.prev = 25;
  
              if (!_didIteratorError) {
                _context2.next = 28;
                break;
              }
  
              throw _iteratorError;
  
            case 28:
              return _context2.finish(25);
  
            case 29:
              return _context2.finish(22);
  
            case 30:
              return _context2.abrupt('return', { success: false, fileName: null, extension: null });
  
            case 31:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[4, 18, 22, 30], [23,, 25, 29]]);
    }));
  
    return function resolveFileName(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  
  var _fs = __webpack_require__(33);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var _path = __webpack_require__(5);
  
  var _bluebird = __webpack_require__(34);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _frontMatter = __webpack_require__(35);
  
  var _frontMatter2 = _interopRequireDefault(_frontMatter);
  
  var _markdownIt = __webpack_require__(36);
  
  var _markdownIt2 = _interopRequireDefault(_markdownIt);
  
  var _graphql = __webpack_require__(29);
  
  var _ContentType = __webpack_require__(37);
  
  var _ContentType2 = _interopRequireDefault(_ContentType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var md = new _markdownIt2.default();
  
  // A folder with Markdown/HTML content pages
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var CONTENT_DIR = (0, _path.join)(__dirname, './content');
  
  // Extract 'front matter' metadata and generate HTML
  var parseContent = function parseContent(path, fileContent, extension) {
    var fmContent = (0, _frontMatter2.default)(fileContent);
    var htmlContent = void 0;
    switch (extension) {
      case '.md':
        htmlContent = md.render(fmContent.body);
        break;
      case '.html':
        htmlContent = fmContent.body;
        break;
      default:
        return null;
    }
    return (0, _assign2.default)({ path: path, content: htmlContent }, fmContent.attributes);
  };
  
  var readFile = _bluebird2.default.promisify(_fs2.default.readFile);
  var fileExists = function fileExists(filename) {
    return new _bluebird2.default(function (resolve) {
      _fs2.default.exists(filename, resolve);
    });
  };
  
  var content = {
    type: _ContentType2.default,
    args: {
      path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    },
    resolve: function resolve(_ref3, _ref4) {
      var _this = this;
  
      var request = _ref3.request;
      var path = _ref4.path;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var _ref5, success, fileName, extension, source;
  
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return resolveFileName(path);
  
              case 2:
                _ref5 = _context3.sent;
                success = _ref5.success;
                fileName = _ref5.fileName;
                extension = _ref5.extension;
  
                if (success) {
                  _context3.next = 8;
                  break;
                }
  
                return _context3.abrupt('return', null);
  
              case 8:
                _context3.next = 10;
                return readFile(fileName, { encoding: 'utf8' });
  
              case 10:
                source = _context3.sent;
                return _context3.abrupt('return', parseContent(path, source, extension));
  
              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this);
      }))();
    }
  };
  
  exports.default = content;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

  module.exports = require("fs");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

  module.exports = require("bluebird");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

  module.exports = require("front-matter");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

  module.exports = require("markdown-it");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(29);
  
  var ContentType = new _graphql.GraphQLObjectType({
    name: 'Content',
    fields: {
      path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      component: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = ContentType;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(29);
  
  var _fetch = __webpack_require__(39);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _NewsItemType = __webpack_require__(41);
  
  var _NewsItemType2 = _interopRequireDefault(_NewsItemType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // React.js News Feed (RSS)
  var url = 'http://ajax.googleapis.com/ajax/services/feed/load' + '?v=1.0&num=10&q=https://reactjsnews.com/feed.xml'; /**
                                                                                                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                        *
                                                                                                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                        *
                                                                                                                        * This source code is licensed under the MIT license found in the
                                                                                                                        * LICENSE.txt file in the root directory of this source tree.
                                                                                                                        */
  
  var items = [];
  var lastFetchTask = void 0;
  var lastFetchTime = new Date(1970, 0, 1);
  
  var news = {
    type: new _graphql.GraphQLList(_NewsItemType2.default),
    resolve: function resolve() {
      if (lastFetchTask) {
        return lastFetchTask;
      }
  
      if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
          lastFetchTime = new Date();
          lastFetchTask = (0, _fetch2.default)(url).then(function (response) {
            return response.json();
          }).then(function (data) {
            if (data.responseStatus === 200) {
              items = data.responseData.feed.entries;
            }
  
            return items;
          }).finally(function () {
            lastFetchTask = null;
          });
  
          if (items.length) {
            return items;
          }
  
          return lastFetchTask;
        }
  
      return items;
    }
  };
  
  exports.default = news;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;
  
  var _bluebird = __webpack_require__(34);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _nodeFetch = __webpack_require__(40);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _config = __webpack_require__(16);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _nodeFetch2.default.Promise = _bluebird2.default; /**
                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                     *
                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                     *
                                                     * This source code is licensed under the MIT license found in the
                                                     * LICENSE.txt file in the root directory of this source tree.
                                                     */
  
  _nodeFetch.Response.Promise = _bluebird2.default;
  
  function localUrl(url) {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }
  
    if (url.startsWith('http')) {
      return url;
    }
  
    return 'http://' + _config.host + url;
  }
  
  function localFetch(url, options) {
    return (0, _nodeFetch2.default)(localUrl(url), options);
  }
  
  exports.default = localFetch;
  exports.Request = _nodeFetch.Request;
  exports.Headers = _nodeFetch.Headers;
  exports.Response = _nodeFetch.Response;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

  module.exports = require("node-fetch");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(29);
  
  var NewsItemType = new _graphql.GraphQLObjectType({
    name: 'NewsItem',
    fields: {
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      link: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      author: { type: _graphql.GraphQLString },
      publishedDate: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      contentSnippet: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = NewsItemType;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(43);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _activity = __webpack_require__(101);
  
  var _activity2 = _interopRequireDefault(_activity);
  
  var _home = __webpack_require__(141);
  
  var _home2 = _interopRequireDefault(_home);
  
  var _content = __webpack_require__(145);
  
  var _content2 = _interopRequireDefault(_content);
  
  var _error = __webpack_require__(149);
  
  var _error2 = _interopRequireDefault(_error);
  
  var _channel = __webpack_require__(150);
  
  var _channel2 = _interopRequireDefault(_channel);
  
  var _award = __webpack_require__(152);
  
  var _award2 = _interopRequireDefault(_award);
  
  var _article = __webpack_require__(153);
  
  var _article2 = _interopRequireDefault(_article);
  
  var _banner = __webpack_require__(159);
  
  var _banner2 = _interopRequireDefault(_banner);
  
  var _startup = __webpack_require__(162);
  
  var _startup2 = _interopRequireDefault(_startup);
  
  var _awardsend = __webpack_require__(165);
  
  var _awardsend2 = _interopRequireDefault(_awardsend);
  
  var _appupdate = __webpack_require__(167);
  
  var _appupdate2 = _interopRequireDefault(_appupdate);
  
  var _feedback = __webpack_require__(169);
  
  var _feedback2 = _interopRequireDefault(_feedback);
  
  var _notice = __webpack_require__(171);
  
  var _notice2 = _interopRequireDefault(_notice);
  
  var _redeem = __webpack_require__(174);
  
  var _redeem2 = _interopRequireDefault(_redeem);
  
  var _shareconfig = __webpack_require__(177);
  
  var _shareconfig2 = _interopRequireDefault(_shareconfig);
  
  var _sendawards = __webpack_require__(178);
  
  var _sendawards2 = _interopRequireDefault(_sendawards);
  
  var _activityjoins = __webpack_require__(181);
  
  var _activityjoins2 = _interopRequireDefault(_activityjoins);
  
  var _awardlist = __webpack_require__(183);
  
  var _awardlist2 = _interopRequireDefault(_awardlist);
  
  var _admin = __webpack_require__(185);
  
  var _admin2 = _interopRequireDefault(_admin);
  
  var _idiom = __webpack_require__(187);
  
  var _idiom2 = _interopRequireDefault(_idiom);
  
  var _integral = __webpack_require__(190);
  
  var _integral2 = _interopRequireDefault(_integral);
  
  var _oneyuan = __webpack_require__(193);
  
  var _oneyuan2 = _interopRequireDefault(_oneyuan);
  
  var _hongbao = __webpack_require__(198);
  
  var _hongbao2 = _interopRequireDefault(_hongbao);
  
  var _privilege = __webpack_require__(201);
  
  var _privilege2 = _interopRequireDefault(_privilege);
  
  var _thread = __webpack_require__(203);
  
  var _thread2 = _interopRequireDefault(_thread);
  
  var _section = __webpack_require__(207);
  
  var _section2 = _interopRequireDefault(_section);
  
  var _reply = __webpack_require__(209);
  
  var _reply2 = _interopRequireDefault(_reply);
  
  var _bbsuser = __webpack_require__(212);
  
  var _bbsuser2 = _interopRequireDefault(_bbsuser);
  
  var _bbsconfig = __webpack_require__(214);
  
  var _bbsconfig2 = _interopRequireDefault(_bbsconfig);
  
  var _bbsmessage = __webpack_require__(216);
  
  var _bbsmessage2 = _interopRequireDefault(_bbsmessage);
  
  var _bbsblock = __webpack_require__(218);
  
  var _bbsblock2 = _interopRequireDefault(_bbsblock);
  
  var _welcome = __webpack_require__(220);
  
  var _welcome2 = _interopRequireDefault(_welcome);
  
  var _jianmianhui = __webpack_require__(222);
  
  var _jianmianhui2 = _interopRequireDefault(_jianmianhui);
  
  var _userattr = __webpack_require__(224);
  
  var _userattr2 = _interopRequireDefault(_userattr);
  
  var _globalattr = __webpack_require__(226);
  
  var _globalattr2 = _interopRequireDefault(_globalattr);
  
  var _feeflowconfig = __webpack_require__(228);
  
  var _feeflowconfig2 = _interopRequireDefault(_feeflowconfig);
  
  var _feefloworder = __webpack_require__(231);
  
  var _feefloworder2 = _interopRequireDefault(_feefloworder);
  
  var _bbstask = __webpack_require__(234);
  
  var _bbstask2 = _interopRequireDefault(_bbstask);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Child routes
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = {
  
    path: '/',
  
    children: [_feefloworder2.default, _feeflowconfig2.default, _jianmianhui2.default, _userattr2.default, _globalattr2.default, _welcome2.default, _bbsblock2.default, _bbstask2.default, _bbsmessage2.default, _bbsconfig2.default, _bbsuser2.default, _reply2.default, _section2.default, _thread2.default, _privilege2.default, _hongbao2.default, _oneyuan2.default, _integral2.default, _idiom2.default, _admin2.default, _activityjoins2.default, _awardlist2.default, _sendawards2.default, _shareconfig2.default, _redeem2.default, _notice2.default, _feedback2.default, _appupdate2.default, _awardsend2.default, _startup2.default, _activity2.default, _channel2.default, _award2.default, _banner2.default, _article2.default, _home2.default, _content2.default, _error2.default],
  
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          render = _ref.render,
          context = _ref.context,
          path = _ref.path;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
  
                if (!(component === undefined)) {
                  _context.next = 5;
                  break;
                }
  
                return _context.abrupt('return', component);
  
              case 5:
                return _context.abrupt('return', render((0, _jsx3.default)(_App2.default, {
                  context: context
                }, void 0, component)));
  
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _emptyFunction = __webpack_require__(49);
  
  var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
  
  var _App = __webpack_require__(50);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _reactRedux = __webpack_require__(52);
  
  var _Header = __webpack_require__(53);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Container = __webpack_require__(64);
  
  var _Container2 = _interopRequireDefault(_Container);
  
  var _Modal = __webpack_require__(69);
  
  var _Modal2 = _interopRequireDefault(_Modal);
  
  var _Main = __webpack_require__(71);
  
  var _Main2 = _interopRequireDefault(_Main);
  
  var _Login = __webpack_require__(72);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  var _StatusBar = __webpack_require__(100);
  
  var _StatusBar2 = _interopRequireDefault(_StatusBar);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref = (0, _jsx3.default)(_Login2.default, {});
  
  var _ref2 = (0, _jsx3.default)(_Header2.default, {});
  
  var _ref3 = (0, _jsx3.default)(_Modal2.default, {});
  
  var _ref4 = (0, _jsx3.default)(_StatusBar2.default, {});
  
  var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);
  
    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var context = this.props.context;
        return {
          insertCss: context.insertCss || _emptyFunction2.default,
          setTitle: context.setTitle || _emptyFunction2.default,
          setMeta: context.setMeta || _emptyFunction2.default
        };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _props$context = this.props.context,
            insertCss = _props$context.insertCss,
            store = _props$context.store;
  
        this.removeCss = insertCss(_App2.default);
        // 尝试获取用户信息,用来判断登录
        store.dispatch((0, _omg.fetchAction)({
          type: _constants.ACCOUNT_PROFILE
        }));
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.removeCss();
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.props.error) {
          return this.props.children;
        }
  
        var store = this.props.context.store;
        return (0, _jsx3.default)(_reactRedux.Provider, {
          store: store
        }, void 0, (0, _jsx3.default)('div', {}, void 0, _ref, (0, _jsx3.default)(_Main2.default, {}, void 0, _ref2, (0, _jsx3.default)(_Container2.default, {}, void 0, this.props.children), _ref3), _ref4));
      }
    }]);
    return App;
  }(_react.Component);
  
  App.childContextTypes = {
    insertCss: _react.PropTypes.func.isRequired,
    setTitle: _react.PropTypes.func.isRequired,
    setMeta: _react.PropTypes.func.isRequired
  };
  exports.default = App;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(51);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;line-height:1.375}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:' (' attr(href) ')'}abbr[title]:after{content:' (' attr(title) ')'}a[href^='#']:after,a[href^='javascript:']:after{content:''}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);
  
  // exports


/***/ }),
/* 52 */
/***/ (function(module, exports) {

  module.exports = require("react-redux");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Header = __webpack_require__(54);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('a', {
    className: 'navbar-brand',
    href: '/'
  }, void 0, '\u8FD0\u8425\u7BA1\u7406\u540E\u53F0'); /**
                                                       * React Starter Kit (https://www.reactstarterkit.com/)
                                                       *
                                                       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                       *
                                                       * This source code is licensed under the MIT license found in the
                                                       * LICENSE.txt file in the root directory of this source tree.
                                                       */
  
  var Header = function (_Component) {
    (0, _inherits3.default)(Header, _Component);
  
    function Header(props) {
      (0, _classCallCheck3.default)(this, Header);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));
  
      _this.logout = _this.logout.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(Header, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'logout',
      value: function logout() {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACCOUNT_LOGOUT
        }));
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('nav', {
          id: 'admin-top-navbar',
          className: 'navbar navbar-dark bg-inverse navbar-fixed-top',
          style: { borderRadius: 0 }
        }, void 0, _ref, (0, _jsx3.default)('ul', {
          hidden: !this.props.profile.display_name,
          className: 'nav navbar-nav pull-sm-right'
        }, void 0, (0, _jsx3.default)('li', {
          className: 'nav-item '
        }, void 0, (0, _jsx3.default)('span', {
          className: 'nav-link'
        }, void 0, '\u6B22\u8FCE: ', this.props.profile.display_name)), (0, _jsx3.default)('li', {
          className: 'nav-item '
        }, void 0, (0, _jsx3.default)('a', {
          className: 'nav-link text-info',
          href: 'javascript:;',
          onClick: this.logout
        }, void 0, '\u9000\u51FA'))));
      }
    }]);
    return Header;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var profile = omg[_constants.ACCOUNT_PROFILE] || {};
    return {
      profile: profile
    };
  })((0, _withStyles2.default)(_Header2.default)(Header));

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(55);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, ".qVcP{background:#373277;color:#fff}._22DV{margin:0 auto;padding:20px 0;max-width:1000px}.HHjE{color:#92e5fc;text-decoration:none;font-size:1.75em}._1FTd{margin-left:10px}.DDn6{float:right;margin-top:6px}.t6bN{text-align:center}._2hBs{margin:0;padding:10px;font-weight:400;font-size:4em;line-height:1em}.x6AI{padding:0;color:hsla(0,0%,100%,.5);font-size:1.25em;margin:0}", ""]);
  
  // exports
  exports.locals = {
  	"root": "qVcP",
  	"container": "_22DV",
  	"brand": "HHjE",
  	"brandTxt": "_1FTd",
  	"nav": "DDn6",
  	"banner": "t6bN",
  	"bannerTitle": "_2hBs",
  	"bannerDesc": "x6AI"
  };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  exports.fetchAction = fetchAction;
  exports.commonFetch = commonFetch;
  
  var _fetch = __webpack_require__(39);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _omg = __webpack_require__(58);
  
  var _index = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function fetchRequest(type) {
    return {
      type: type,
      status: _index.FETCH_REQUEST
    };
  }
  
  function fetchSuccess(type, data) {
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  
    return {
      type: type,
      status: _index.FETCH_SUCCESS,
      data: data,
      key: key
    };
  }
  
  function fetchError(type, code, msg) {
    var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  
    return {
      type: type,
      status: _index.FETCH_ERROR,
      msg: msg,
      code: code,
      key: key
    };
  }
  
  function fetchAction(_ref) {
    var type = _ref.type,
        _ref$method = _ref.method,
        method = _ref$method === undefined ? 'GET' : _ref$method,
        _ref$formData = _ref.formData,
        formData = _ref$formData === undefined ? false : _ref$formData,
        _ref$suffix = _ref.suffix,
        suffix = _ref$suffix === undefined ? '' : _ref$suffix,
        _ref$queryObj = _ref.queryObj,
        queryObj = _ref$queryObj === undefined ? {} : _ref$queryObj,
        _ref$key = _ref.key,
        key = _ref$key === undefined ? false : _ref$key;
  
    var requestUri = (0, _omg.getApi)(type);
  
    var keys = (0, _keys2.default)(queryObj);
    var queryArr = keys.map(function (key) {
      return key + '=' + queryObj[key];
    });
    var queryString = queryArr.join('&');
    if (queryString !== '') {
      queryString = '?' + queryString;
    }
    var params = {
      method: method,
      credentials: 'include'
    };
    if (method === 'POST') {
      params.body = formData;
    }
    return function (dispatch) {
      dispatch(fetchRequest(type));
      return (0, _fetch2.default)(requestUri + suffix + queryString, params).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (json.error_code === 0) {
          dispatch(fetchSuccess(type, json.data, key));
        } else {
          dispatch(fetchError(type, json.error_code, json.data.error_msg, key));
        }
        return json;
      });
    };
  }
  
  function commonFetch(type) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var suffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var queryObj = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  
    console.log('commonFetch方法不建议使用,请使用fetchAction方法');
    var requestUri = (0, _omg.getApi)(type);
  
    var keys = (0, _keys2.default)(queryObj);
    var queryArr = keys.map(function (key) {
      return key + '=' + queryObj[key];
    });
    var queryString = queryArr.join('&');
    if (queryString !== '') {
      queryString = '?' + queryString;
    }
    var params = {
      method: method,
      credentials: 'include'
    };
    if (method === 'POST') {
      params.body = formData;
    }
    return function (dispatch) {
      dispatch(fetchRequest(type));
      return (0, _fetch2.default)(requestUri + suffix + queryString, params).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (json.error_code === 0) {
          dispatch(fetchSuccess(type, json.data));
        } else {
          dispatch(fetchError(type, json.error_code, json.data.error_msg));
        }
        return json;
      });
    };
  }

/***/ }),
/* 57 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getConfig = exports.getApi = undefined;
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _index = __webpack_require__(59);
  
  var _config = __webpack_require__(16);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var apiList = {};
  
  apiList[_index.ACTIVITY_INDEX] = '/activity/index';
  apiList[_index.ACTIVITY_GROUP_LIST] = '/activity/group-list';
  apiList[_index.ACTIVITY_ADD] = '/activity/add';
  apiList[_index.ACTIVITY_DEL] = '/activity/del';
  apiList[_index.ACTIVITY_GROUP_ADD] = '/activity/group-add';
  apiList[_index.ACTIVITY_GROUP_INFO] = '/activity/group-info';
  apiList[_index.ACTIVITY_GROUP_DEL] = '/activity/group-del';
  apiList[_index.ACTIVITY_INFO] = '/activity/info';
  apiList[_index.ACTIVITY_OFFLINE] = '/activity/offline';
  apiList[_index.ACTIVITY_RELEASE] = '/activity/release';
  apiList[_index.ACTIVITY_PUT] = '/activity/put';
  apiList[_index.ACTIVITY_RULE_LIST] = '/activity/rule-list';
  apiList[_index.ACTIVITY_RULE_DEL] = '/activity/rule-del';
  
  apiList[_index.ACTIVITY_RULE_ADD] = '/activity/rule-add';
  
  apiList[_index.ACTIVITY_AWARD_ADD] = '/activity/award-add';
  apiList[_index.ACTIVITY_AWARD_LIST] = '/activity/award-list';
  apiList[_index.ACTIVITY_AWARD_DEL] = '/activity/award-delete';
  apiList[_index.ACTIVITY_INVITE_AWARD_ADD] = '/activity/award-invite-add';
  apiList[_index.ACTIVITY_INVITE_AWARD_DEL] = '/activity/award-invite-delete';
  apiList[_index.ACTIVITY_INVITE_AWARD_LIST] = '/activity/award-invite-list';
  
  apiList[_index.ACTIVITY_REWARD_LIST] = '/activity/send-reward-log-list';
  apiList[_index.ACTIVITY_JOINS_LIST] = '/activity/activity-joins-list';
  
  apiList[_index.APP_ADD] = '/app/add';
  apiList[_index.APP_DISABLE] = '/app/close';
  apiList[_index.APP_ENABLE] = '/app/enable';
  apiList[_index.APP_INFO] = '/app/info';
  apiList[_index.APP_PUT] = '/app/put';
  apiList[_index.APP_UPDATE_LOG] = '/app/update-log';
  apiList[_index.APP_DEL] = '/app/del';
  
  apiList[_index.AWARD_ADD] = '/award/add';
  apiList[_index.AWARD_DEL] = '/award/delete';
  apiList[_index.AWARD_INFO] = '/award/get-one';
  apiList[_index.AWARD_LIST] = '/award/get-list';
  apiList[_index.AWARD_UPDATE] = '/award/update';
  apiList[_index.AWARD_ADD_TO_USER] = '/award/add-award-to-user';
  apiList[_index.AWARD_REISSUE] = '/award/reissue-award';
  apiList[_index.AWARD_COUPON_TOTAL] = '/award/coupon-code-total';
  apiList[_index.AWARD_COUPON_EXPORT] = '/award/coupon-export';
  apiList[_index.AWARD_COUPON_DOWNLOAD] = '/award/coupon-download';
  apiList[_index.AWARD_INVALIDE_COUPON] = '/award/invalid-coupon';
  
  apiList[_index.CHANNEL_ADD] = '/channel/add';
  apiList[_index.CHANNEL_INFO] = '/channel/info';
  apiList[_index.CHANNEL_LIST] = '/channel/list';
  apiList[_index.CHANNEL_PUT] = '/channel/put';
  apiList[_index.CHANNEL_DEL] = '/channel/del';
  apiList[_index.CHANNEL_DT_LIST] = '/channel/dt-list';
  
  apiList[_index.ARTICLE_ADD] = '/cms/content/add';
  apiList[_index.ARTICLE_TYPE_LIST] = '/cms/content/type-list';
  apiList[_index.ARTICLE_LIST] = '/cms/content/list';
  apiList[_index.ARTICLE_DEL] = '/cms/content/del';
  apiList[_index.ARTICLE_RELEASE] = '/cms/content/release';
  apiList[_index.ARTICLE_OFFLINE] = '/cms/content/offline';
  apiList[_index.ARTICLE_DETAIL] = '/cms/content/detail';
  apiList[_index.ARTICLE_PUT] = '/cms/content/put';
  apiList[_index.ARTICLE_UP] = '/cms/content/up';
  apiList[_index.ARTICLE_DOWN] = '/cms/content/down';
  
  apiList[_index.ARTICLE_TYPE_LIST] = '/cms/content/type-list';
  apiList[_index.ARTICLE_TYPE_ADD] = '/cms/content/type-add';
  apiList[_index.ARTICLE_TYPE_DEL] = '/cms/content/type-del';
  apiList[_index.ARTICLE_TYPE_UP] = '/cms/content/type-up';
  apiList[_index.ARTICLE_TYPE_DOWN] = '/cms/content/type-down';
  apiList[_index.ARTICLE_TYPE_INFO] = '/cms/content/type-info';
  apiList[_index.ARTICLE_TYPE_PUT] = '/cms/content/type-put';
  
  apiList[_index.BANNER_LIST] = '/img/banner-list';
  apiList[_index.BANNER_DEL] = '/img/banner-del';
  apiList[_index.BANNER_PUT] = '/img/banner-edit';
  apiList[_index.BANNER_ADD] = '/img/banner-add';
  apiList[_index.BANNER_UP] = '/img/sort-up';
  apiList[_index.BANNER_DOWN] = '/img/sort-down';
  apiList[_index.BANNER_ENABLE] = '/img/banner-release';
  apiList[_index.BANNER_DISABLE] = '/img/banner-offline';
  apiList[_index.BANNER_INFO] = '/img/banner-info';
  
  apiList[_index.ATTACHMENT_ADD] = '/img/img-add';
  apiList[_index.ATTACHMENT_LIST] = '/img/img-list';
  
  apiList[_index.ACCOUNT_LOGIN] = '/account/login';
  apiList[_index.ACCOUNT_PROFILE] = '/account/profile';
  apiList[_index.ACCOUNT_LOGOUT] = '/account/logout';
  apiList[_index.ACCOUNT_CAPTCHA] = '/account/captcha';
  
  apiList[_index.STARTUP_ADD] = '/img/app-add';
  apiList[_index.STARTUP_DISABLE] = '/img/app-offline';
  apiList[_index.STARTUP_ENABLE] = '/img/app-online';
  apiList[_index.STARTUP_INFO] = '/img/app-info';
  apiList[_index.STARTUP_LIST] = '/img/app-info-pid';
  apiList[_index.STARTUP_PUT] = '/img/app-put';
  apiList[_index.STARTUP_DEL] = '/img/app-del';
  apiList[_index.STARTUP_UP] = '/img/app-up';
  apiList[_index.STARTUP_DOWN] = '/img/app-down';
  
  apiList[_index.FEEDBACK_LIST] = '/cms/content/opinion-list';
  
  apiList[_index.NOTICE_ADD] = '/notice/add';
  apiList[_index.NOTICE_DEL] = '/notice/del';
  apiList[_index.NOTICE_DETAIL] = '/notice/detail';
  apiList[_index.NOTICE_DOWN] = '/notice/down';
  apiList[_index.NOTICE_LIST] = '/notice/list';
  apiList[_index.NOTICE_OFFLINE] = '/notice/offline';
  apiList[_index.NOTICE_PUT] = '/notice/put';
  apiList[_index.NOTICE_RELEASE] = '/notice/release';
  apiList[_index.NOTICE_UP] = '/notice/up';
  
  apiList[_index.REDEEM_ADD] = '/redeem/add';
  apiList[_index.REDEEM_CODE_LIST] = '/redeem/code-list';
  apiList[_index.REDEEM_EXPORT] = '/redeem/export';
  apiList[_index.REDEEM_LIST] = '/redeem/list';
  apiList[_index.REDEEM_DOWNLOAD] = '/redeem/download';
  
  apiList[_index.BATCH_AWARD] = '/award/batch-award';
  apiList[_index.BATCH_AWARD_LIST] = '/activity/batch-award-list';
  
  apiList[_index.ADMIN_ADD] = '/admin/dt-add';
  apiList[_index.ADMIN_LIST] = '/admin/dt-list';
  apiList[_index.ADMIN_UPDATE] = '/admin/dt-update';
  apiList[_index.ADMIN_DEL] = '/admin/dt-delete';
  
  apiList[_index.PRIVILEGE_ADD] = '/privilege/dt-add';
  apiList[_index.PRIVILEGE_LIST] = '/privilege/dt-list';
  apiList[_index.PRIVILEGE_UPDATE] = '/privilege/dt-update';
  apiList[_index.PRIVILEGE_DEL] = '/privilege/dt-delete';
  
  apiList[_index.TEMPLATE_HELP] = '/template/help-list';
  apiList[_index.TEMPLATE_NOTICE] = '/template/notice-list';
  apiList[_index.TEMPLATE_MEDIA] = '/template/media-list';
  apiList[_index.TEMPLATE_DYNAMIC] = '/template/dynamic-list';
  apiList[_index.TEMPLATE_CLASSROOM] = '/template/study-list';
  
  apiList[_index.IDIOM_ADD] = '/cms/idiom/add';
  apiList[_index.IDIOM_DEL] = '/cms/idiom/del';
  apiList[_index.IDIOM_INFO] = '/cms/idiom/info';
  apiList[_index.IDIOM_LIST] = '/cms/idiom/list';
  apiList[_index.IDIOM_PUT] = '/cms/idiom/put';
  
  apiList[_index.INTEGRAL_LIST] = '/integral/list';
  apiList[_index.INTEGRAL_OPERATION] = '/integral/operation';
  apiList[_index.INTEGRAL_DOWN] = '/integral/down';
  apiList[_index.INTEGRAL_UP] = '/integral/up';
  apiList[_index.INTEGRAL_DEL] = '/integral/delete';
  apiList[_index.INTEGRAL_ENABLE] = '/integral/up-status';
  apiList[_index.INTEGRAL_DISABLE] = '/integral/down-status';
  
  apiList[_index.ONEYUAN_LIST] = '/one/list';
  apiList[_index.ONEYUAN_OPERATION] = '/one/operation';
  apiList[_index.ONEYUAN_ENABLE] = '/one/up-status';
  apiList[_index.ONEYUAN_DISABLE] = '/one/down-status';
  apiList[_index.ONEYUAN_DEL] = '/one/delete';
  apiList[_index.ONEYUAN_OPEN] = '/one/luck-draw';
  apiList[_index.ONEYUAN_AUTO_OPEN] = '/one/auto-luck-draw';
  apiList[_index.ONEYUAN_ADD_CHANCE] = '/one/add-one-yuan-num';
  
  apiList[_index.HONGBAO_LIST] = '/money/list';
  apiList[_index.HONGBAO_OPERATION] = '/money/operation';
  apiList[_index.HONGBAO_ENABLE] = '/money/up-status';
  apiList[_index.HONGBAO_DISABLE] = '/money/down-status';
  apiList[_index.HONGBAO_DEL] = '/money/delete';
  
  apiList[_index.BBS_THREAD_DT_LIST] = '/bbs/thread/dt-list';
  apiList[_index.BBS_THREAD_DT_ADD] = '/bbs/thread/dt-add';
  apiList[_index.BBS_THREAD_DT_DEL] = '/bbs/thread/dt-delete';
  apiList[_index.BBS_THREAD_DT_UPDATE] = '/bbs/thread/dt-update';
  apiList[_index.BBS_THREAD_TOGGLE_STATUS] = '/bbs/thread/toogle-status';
  apiList[_index.BBS_THREAD_UNVERIFY] = '/bbs/thread/del';
  apiList[_index.BBS_THREAD_RESTORE] = '/bbs/thread/restore';
  apiList[_index.BBS_THREAD_VERIFY] = '/bbs/thread/verify-put';
  
  apiList[_index.BBS_SECTION_DT_LIST] = '/bbs/section/dt-list';
  apiList[_index.BBS_SECTION_DT_ADD] = '/bbs/section/dt-add';
  apiList[_index.BBS_SECTION_DT_DEL] = '/bbs/section/dt-delete';
  apiList[_index.BBS_SECTION_DT_UPDATE] = '/bbs/section/dt-update';
  apiList[_index.BBS_SECTION_CLOSE] = '/bbs/section/close';
  apiList[_index.BBS_SECTION_OPEN] = '/bbs/section/open';
  apiList[_index.BBS_SECTION_LIST] = '/bbs/section/list';
  
  apiList[_index.BBS_USER_DT_UPDATE] = '/bbs/user/dt-update';
  apiList[_index.BBS_USER_UNBLOCK] = '/bbs/user/to-user';
  apiList[_index.BBS_USER_DT_LIST] = '/bbs/user/dt-list';
  apiList[_index.BBS_USER_DT_DEL] = '/bbs/user/dt-delete';
  apiList[_index.BBS_USER_DT_ADD] = '/bbs/user/dt-add';
  apiList[_index.BBS_USER_BLOCK] = '/bbs/user/to-black';
  apiList[_index.BBS_USER_ADMIN] = '/bbs/user/add';
  apiList[_index.BBS_USER_UNADMIN] = '/bbs/user/del';
  apiList[_index.BBS_USER_ADMIN_LIST] = '/bbs/user/list';
  
  apiList[_index.BBS_COMMENT_DT_ADD] = '/bbs/comment/dt-add';
  apiList[_index.BBS_COMMENT_DT_UPDATE] = '/bbs/comment/dt-update';
  apiList[_index.BBS_COMMENT_DT_DEL] = '/bbs/comment/dt-delete';
  apiList[_index.BBS_COMMENT_DT_LIST] = '/bbs/comment/dt-list';
  apiList[_index.BBS_COMMENT_VERIFY] = '/bbs/comment/verify-put';
  
  apiList[_index.BBS_MESSAGE_DT_DEL] = '/bbs/pm/dt-delete';
  apiList[_index.BBS_MESSAGE_DT_UPDATE] = '/bbs/pm/dt-update';
  apiList[_index.BBS_MESSAGE_DT_ADD] = '/bbs/pm/dt-add';
  apiList[_index.BBS_MESSAGE_DT_LIST] = '/bbs/pm/dt-list';
  
  apiList[_index.BBS_CONFIG_DT_ADD] = '/bbs/global/dt-add';
  apiList[_index.BBS_CONFIG_DT_DEL] = '/bbs/global/dt-delete';
  apiList[_index.BBS_CONFIG_DT_LIST] = '/bbs/global/dt-list';
  apiList[_index.BBS_CONFIG_DT_UPDATE] = '/bbs/global/update';
  
  apiList[_index.BBS_BLOCK_DT_ADD] = '/bbs/replay/dt-add';
  apiList[_index.BBS_BLOCK_DT_UPDATE] = '/bbs/replay/dt-update';
  apiList[_index.BBS_BLOCK_DT_LIST] = '/bbs/replay/dt-list';
  apiList[_index.BBS_BLOCK_DT_DEL] = '/bbs/replay/dt-delete';
  apiList[_index.BBS_BLOCK_LIST] = '/bbs/replay/list';
  
  apiList[_index.BBS_TASK_DT_LIST] = '/bbs/task/dt-list';
  apiList[_index.BBS_TASK_DT_ADD] = '/bbs/task/dt-add';
  apiList[_index.BBS_TASK_DT_DEL] = '/bbs/task/dt-delete';
  apiList[_index.BBS_TASK_INFO] = '/bbs/task/detail';
  apiList[_index.BBS_TASK_DT_UPDATE] = '/bbs/task/dt-update';
  apiList[_index.BBS_TASK_TRIGGER_TYPES] = '/bbs/task/trigger-type';
  apiList[_index.BBS_GROUP_TASK_LIST] = '/bbs/task/group-list';
  apiList[_index.BBS_GROUP_TASK_ADD] = '/bbs/task/group-add';
  apiList[_index.BBS_GROUP_TASK_DEL] = '/bbs/task/group-del';
  apiList[_index.BBS_GROUP_TASK_PUT] = '/bbs/task/group-put';
  apiList[_index.BBS_GROUP_TASK_INFO] = '/bbs/task/group-info';
  apiList[_index.BBS_TASK_OFFLINE] = '/bbs/task/offline';
  apiList[_index.BBS_TASK_ONLINE] = '/bbs/task/online';
  apiList[_index.BBS_TASK_DEL] = '/bbs/task/dt-delete';
  
  apiList[_index.WELCOME_DT_DEL] = '/cms/welcome/dt-delete';
  apiList[_index.WELCOME_DT_ADD] = '/cms/welcome/dt-add';
  apiList[_index.WELCOME_DT_UPDATE] = '/cms/welcome/dt-update';
  apiList[_index.WELCOME_DT_LIST] = '/cms/welcome/dt-list';
  apiList[_index.WELCOME_ENABLE] = '/cms/welcome/online';
  apiList[_index.WELCOME_DISABLE] = '/cms/welcome/offline';
  
  apiList[_index.GLOBALATTR_DT_LIST] = '/globalattr/dt-list';
  apiList[_index.GLOBALATTR_DT_UPDATE] = '/globalattr/dt-update';
  apiList[_index.GLOBALATTR_DT_DEL] = '/globalattr/dt-delete';
  apiList[_index.GLOBALATTR_DT_ADD] = '/globalattr/dt-add';
  
  apiList[_index.USERATTR_DT_UPDATE] = '/userattr/dt-update';
  apiList[_index.USERATTR_DT_LIST] = '/userattr/dt-list';
  apiList[_index.USERATTR_DT_DEL] = '/userattr/dt-delete';
  apiList[_index.USERATTR_DT_ADD] = '/userattr/dt-add';
  
  apiList[_index.JIANMIANHUI_DT_UPDATE] = '/jianmianhui/dt-update';
  apiList[_index.JIANMIANHUI_DT_LIST] = '/jianmianhui/dt-list';
  apiList[_index.JIANMIANHUI_DT_DEL] = '/jianmianhui/dt-delete';
  apiList[_index.JIANMIANHUI_DT_ADD] = '/jianmianhui/dt-add';
  
  apiList[_index.FEEFLOWCONFIG_ADD] = '/feeflow/add-type';
  apiList[_index.FEEFLOWCONFIG_LIST] = '/feeflow/type-list';
  apiList[_index.FEEFLOWCONFIG_UP_STATUS] = '/feeflow/update-type';
  apiList[_index.FEEFLOWCONFIG_ORDER_LIST] = '/feeflow/order-list';
  apiList[_index.FEEFLOWCONFIG_ORDER_STATUS_UPDATE] = '/feeflow/order-status-update';
  apiList[_index.FEEFLOWCONFIG_ORDER_REPAIR] = '/feeflow/order-repair';
  apiList[_index.FEEFLOWCONFIG_ORDER_EXPORT] = '/feeflow/order-export';
  function getApi(type) {
    var apiHost = '';
    var host = typeof window !== 'undefined' ? window.location.hostname : _config.hostname;
    switch (host) {
      case 'localhost':
        // 本地开发
        apiHost = 'http://api-omg.wanglibao.com';
        break;
      case '192.168.10.36':
        // dev环境
        apiHost = 'http://yunying.dev.wanglibao.com';
        break;
      case 'yyadmin.wanglibao.com':
        // 测试环境
        apiHost = 'https://php1.wanglibao.com/yunying';
        break;
      case 'yyadmin3.wanglibao.com':
        // 预上线环境
        apiHost = 'https://php3.wanglibao.com/yunying';
        break;
      case 'yunyingadmin.wanglibao.com':
        // 线上环境
        apiHost = 'https://www.wanglibao.com/yunying';
        break;
      default:
        // 默认线上
        apiHost = 'https://www.wanglibao.com/yunying';
        break;
    }
    // apiHost = 'https://www.wanglibao.com/yunying';
    return apiHost + apiList[type];
  }
  
  var adminTypes = {
    0: '游客',
    1: '超级管理员',
    2: '运营组',
    3: '产品组',
    4: '渠道组'
  };
  
  var activityTypes = {
    1: '常规活动',
    2: '渠道活动',
    3: '节日活动',
    4: '加急活动'
  };
  
  var taskTypes = {
    1: "每日任务",
    2: "成就任务"
  };
  var sendAwardTypes = {
    1: '全部发放',
    2: '概率发放'
  };
  
  var frequencyTypes = {
    0: '不限',
    1: '一天一次',
    2: '仅一次'
  };
  
  var redEnvelopeTypes = {
    1: '直抵红包',
    2: '百分比红包'
  };
  
  var redEnvelopeTimeTypes = {
    1: '按天数',
    2: '按时间段'
  };
  
  var forceTypes = {
    0: '不强制',
    1: '强制'
  };
  
  var interestTypes = {
    1: '全周期',
    2: '加息天数'
    // 3: '加息时间段',
    // 4: '加息月数',
  };
  
  var userLevels = {
    '-1': '非会员',
    0: 'vip',
    1: 'vip1',
    2: 'vip2',
    3: 'vip3',
    4: 'vip4',
    5: 'vip5'
  };
  
  var discoverTypes = {
    0: '——',
    1: '最热'
  };
  
  var popTypes = {
    0: '不跳转',
    1: '理财专区',
    2: '发现页',
    3: '全民淘金',
    4: '发现页H5页面',
    5: '其它H5页面',
    6: '体验金',
    7: '投资助手'
  };
  
  var interestTimeTypes = {
    1: '有效天数',
    2: '有效时间段'
  };
  
  var awardTypes = {
    1: '加息券',
    2: '红包',
    3: '体验金',
    4: '用户积分',
    // 5: '实物',
    6: '优惠券',
    7: '现金'
  };
  
  var templateTypes = {
    1: '恭喜您在\'{{sourcename}}\'活动中获得\'{{awardname}}\'奖励。',
    2: '恭喜您在\'{{sourcename}}\'活动中获得\'{{awardname}}\'奖励。',
    3: '恭喜您在\'{{sourcename}}\'活动中获得\'{{awardname}}\'奖励。',
    4: '恭喜您在\'{{sourcename}}\'活动中获得\'{{awardname}}\'奖励。',
    6: '恭喜您在\'{{sourcename}}\'活动中获得\'{{awardname}}\'奖励,兑换码为\'{{code}}\'。',
    7: '恭喜您在\'{{sourcename}}\'活动中获得\'{{awardname}}\'奖励。'
  };
  
  var ruleFileds = {
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
    max_num: '最大次数 <='
  };
  
  var activityTriggers = {
    0: '主动',
    1: '注册',
    2: '充值',
    3: '首次绑卡',
    4: '投资',
    5: '回款',
    6: '实名',
    7: '微信绑定',
    8: '签到',
    9: '社区发帖',
    10: '社区点赞',
    11: '社区评论',
    12: '主题加精'
  };
  
  var triggerRuleFileds = {
    0: {},
    1: {},
    2: { recharge: '充值金额' },
    3: {},
    4: { cast: '投资金额', castname: '投资标名称', casttype: '标期限制' },
    5: { payment: '回款金额', paymentdate: '项目天数' },
    6: {},
    7: {},
    9: { postnum: '发帖数量' },
    10: { zannum: '点赞数量', commentzannum: '评论获得点赞数量', threadzannum: '帖子获得点赞数量' },
    11: { greatnum: '加精数量' }
  };
  
  var ruleTypes = {
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
    paymentnum: '回款次数'
  };
  
  var bannerTypes = {
    mobile: '移动端轮播图',
    discover: '发现页',
    discover_feature: '发现页功能区',
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
    jifen: '积分活动'
  };
  
  var channelStatusTypes = {
    0: '正常',
    1: '暂停拉新',
    2: '暂停合作',
    3: '渠道归并'
  };
  
  var channelClassTypes = {
    '----': '不限制',
    CPC: '按点击计费',
    CPD: '按天计费',
    CPT: '按时间计费',
    CPA: '按行为计费',
    CPS: '按销售计费'
  };
  
  var shareConfigTypes = {
    share: '常规配置',
    taojin: '全民淘金'
  
    // 启动页类型
  };var startupTypes = {
    1: 'IOS',
    2: 'Android'
  };
  
  var startupImages = {
    '1:1': '1242x2208',
    '1:2': '750x1334',
    '1:3': '640x1136',
    '1:4': '640x960',
    '2:1': '1080x1920',
    '2:2': '720x1280',
    '2:3': '480x800',
    '2:4': '无'
  };
  
  var platform = {
    0: '全平台',
    1: 'App',
    2: 'H5',
    3: 'PC端'
  };
  
  var noticePlatforms = {
    0: '全平台',
    1: 'PC端',
    2: '移动端'
  };
  
  var redeemStatus = {
    0: '队列中',
    1: '生成中',
    2: '完成'
  };
  
  var feedbackPlatformTypes = {
    1: 'ios',
    2: '安卓',
    3: 'PC',
    4: 'H5'
  };
  
  var projectDurationTypes = {
    1: '不限',
    2: '月标',
    3: '月及以上标',
    4: '月及以下标',
    5: '日标',
    6: '日及以上标',
    7: '日及以下标'
  };
  
  var articlePlatformTypes = {
    0: '全平台',
    1: 'PC端',
    2: '移动端'
  };
  
  var platformTypes = {
    0: '全平台',
    1: 'App',
    2: 'h5',
    3: 'pc端'
  };
  
  var appUpdateTypes = {
    1: '安卓',
    2: 'IOS'
  };
  
  var castTypes = {
    0: '不限',
    1: '首投',
    2: '非首投'
  };
  
  var castDateTypes = {
    0: '不限',
    1: '天标',
    2: '月标'
  };
  
  var rechargeTypes = {
    0: '不限',
    1: '首充',
    2: '非首充'
  };
  
  var release = {
    0: '未发布',
    1: '已发布'
  };
  
  var projectTypes = {
    0: '不限',
    1: '散标',
    2: '月利宝',
    3: '优选投',
    11: '产融通',
    12: '好房赚',
    13: '好车盈',
    14: '银行优选',
    15: '黄金精选'
  };
  
  var feeFlowConfigTypes = {
    1: '充话费',
    2: '充流量'
  };
  var feeFlowConfigChildTypes = {
    1: '话费',
    2: '流量'
  };
  var feeFlowConfigChildOperator = {
    1: '移动',
    2: '联通',
    3: '电信'
  };
  var feeFlowDebitStatus = {
    0: '未扣款',
    1: '已扣款'
  };
  var feeFlowOrderStatus = {
    0: '未充值',
    1: '正在充值',
    2: '充值失败',
    3: '充值成功',
    4: '订单异常'
  };
  var feeFlowOrderRepairStatus = {
    0: '未补单',
    1: '已补单'
  };
  function getAllRuleTypes() {
    var allRuleTypes = {};
    (0, _assign2.default)(allRuleTypes, ruleTypes);
    (0, _keys2.default)(triggerRuleFileds).forEach(function (index) {
      return (0, _assign2.default)(allRuleTypes, triggerRuleFileds[index]);
    });
    return allRuleTypes;
  }
  
  var config = {
    activityTriggers: activityTriggers,
    redEnvelopeTypes: redEnvelopeTypes,
    redEnvelopeTimeTypes: redEnvelopeTimeTypes,
    awardTypes: awardTypes,
    ruleFileds: ruleFileds,
    ruleTypes: ruleTypes,
    interestTypes: interestTypes,
    interestTimeTypes: interestTimeTypes,
    bannerTypes: bannerTypes,
    platform: platform,
    taskTypes: taskTypes,
    release: release,
    activityTypes: activityTypes,
    frequencyTypes: frequencyTypes,
    platformTypes: platformTypes,
    sendAwardTypes: sendAwardTypes,
    startupTypes: startupTypes,
    startupImages: startupImages,
    projectDurationTypes: projectDurationTypes,
    projectTypes: projectTypes,
    forceTypes: forceTypes,
    appUpdateTypes: appUpdateTypes,
    templateTypes: templateTypes,
    userLevels: userLevels,
    articlePlatformTypes: articlePlatformTypes,
    feedbackPlatformTypes: feedbackPlatformTypes,
    redeemStatus: redeemStatus,
    discoverTypes: discoverTypes,
    popTypes: popTypes,
    triggerRuleFileds: triggerRuleFileds,
    shareConfigTypes: shareConfigTypes,
    allRuleTypes: getAllRuleTypes(),
    castTypes: castTypes,
    rechargeTypes: rechargeTypes,
    adminTypes: adminTypes,
    noticePlatforms: noticePlatforms,
    castDateTypes: castDateTypes,
    channelStatusTypes: channelStatusTypes,
    channelClassTypes: channelClassTypes,
    feeFlowConfigTypes: feeFlowConfigTypes,
    feeFlowConfigChildTypes: feeFlowConfigChildTypes,
    feeFlowConfigChildOperator: feeFlowConfigChildOperator,
    feeFlowDebitStatus: feeFlowDebitStatus,
    feeFlowOrderStatus: feeFlowOrderStatus,
    feeFlowOrderRepairStatus: feeFlowOrderRepairStatus
  };
  
  function getConfig(type) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  
    var values = config[type] || undefined;
    if (key === false) {
      return values;
    }
    var value = values[key] || key;
    return value;
  }
  
  exports.getApi = getApi;
  exports.getConfig = getConfig;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var SET_RUNTIME_VARIABLE = exports.SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
  var SET_HOST = exports.SET_HOST = 'SET_HOST';
  
  // 接口请求
  var FETCH_REQUEST = exports.FETCH_REQUEST = 'FETCH_REQUEST';
  var FETCH_SUCCESS = exports.FETCH_SUCCESS = 'FETCH_SUCCESS';
  var FETCH_ERROR = exports.FETCH_ERROR = 'FETCH_ERROR';
  
  // 弹窗
  var MODAL_SHOW = exports.MODAL_SHOW = 'MODAL_SHOW';
  var MODAL_HIDE = exports.MODAL_HIDE = 'MODAL_HIDE';
  
  // 渠道管理
  var CHANNEL_LIST = exports.CHANNEL_LIST = 'CHANNEL_LIST';
  var CHANNEL_ADD = exports.CHANNEL_ADD = 'CHANNEL_ADD';
  var CHANNEL_DEL = exports.CHANNEL_DEL = 'CHANNEL_DEL';
  var CHANNEL_PUT = exports.CHANNEL_PUT = 'CHANNEL_PUT';
  var CHANNEL_INFO = exports.CHANNEL_INFO = 'CHANNEL_INFO';
  var CHANNEL_DT_LIST = exports.CHANNEL_DT_LIST = 'CHANNEL_DT_LIST';
  
  // 升级
  var APP_ADD = exports.APP_ADD = 'APP_ADD';
  var APP_PUT = exports.APP_PUT = 'APP_PUT';
  var APP_UPDATE_LOG = exports.APP_UPDATE_LOG = 'APP_UPDATE_LOG';
  var APP_INFO = exports.APP_INFO = 'APP_INFO';
  var APP_ENABLE = exports.APP_ENABLE = 'APP_ENABLE';
  var APP_DISABLE = exports.APP_DISABLE = 'APP_DISABLE';
  var APP_DEL = exports.APP_DEL = 'APP_DEL';
  
  // 活动
  var ACTIVITY_ADD = exports.ACTIVITY_ADD = 'ACTIVITY_ADD';
  var ACTIVITY_INFO = exports.ACTIVITY_INFO = 'ACTIVITY_INFO';
  var ACTIVITY_INDEX = exports.ACTIVITY_INDEX = 'ACTIVITY_INDEX';
  var ACTIVITY_PUT = exports.ACTIVITY_PUT = 'ACTIVITY_PUT';
  var ACTIVITY_DEL = exports.ACTIVITY_DEL = 'ACTIVITY_DEL';
  var ACTIVITY_RELEASE = exports.ACTIVITY_RELEASE = 'ACTIVITY_RELEASE';
  var ACTIVITY_OFFLINE = exports.ACTIVITY_OFFLINE = 'ACTIVITY_OFFLINE';
  
  var ACTIVITY_GROUP_ADD = exports.ACTIVITY_GROUP_ADD = 'ACTIVITY_GROUP_ADD';
  var ACTIVITY_GROUP_INFO = exports.ACTIVITY_GROUP_INFO = 'ACTIVITY_GROUP_INFO';
  var ACTIVITY_GROUP_LIST = exports.ACTIVITY_GROUP_LIST = 'ACTIVITY_GROUP_LIST';
  var ACTIVITY_GROUP_DEL = exports.ACTIVITY_GROUP_DEL = 'ACTIVITY_GROUP_DEL';
  
  var ACTIVITY_RULE_LIST = exports.ACTIVITY_RULE_LIST = 'ACTIVITY_RULE_LIST';
  var ACTIVITY_RULE_DEL = exports.ACTIVITY_RULE_DEL = 'ACTIVITY_RULE_DEL';
  var ACTIVITY_RULE_ADD = exports.ACTIVITY_RULE_ADD = 'ACTIVITY_RULE_ADD';
  
  var ACTIVITY_JOINS_LIST = exports.ACTIVITY_JOINS_LIST = 'ACTIVITY_JOINS_LIST';
  var ACTIVITY_REWARD_LIST = exports.ACTIVITY_REWARD_LIST = 'ACTIVITY_REWARD_LIST';
  
  // 活动奖品
  var ACTIVITY_AWARD_ADD = exports.ACTIVITY_AWARD_ADD = 'ACTIVITY_AWARD_ADD';
  var ACTIVITY_AWARD_DEL = exports.ACTIVITY_AWARD_DEL = 'ACTIVITY_AWARD_DEL';
  var ACTIVITY_AWARD_LIST = exports.ACTIVITY_AWARD_LIST = 'ACTIVITY_AWARD_LIST';
  
  // 邀请人奖品
  var ACTIVITY_INVITE_AWARD_ADD = exports.ACTIVITY_INVITE_AWARD_ADD = 'ACTIVITY_INVITE_AWARD_ADD';
  var ACTIVITY_INVITE_AWARD_DEL = exports.ACTIVITY_INVITE_AWARD_DEL = 'ACTIVITY_INVITE_AWARD_DEL';
  var ACTIVITY_INVITE_AWARD_LIST = exports.ACTIVITY_INVITE_AWARD_LIST = 'ACTIVITY_INVITE_AWARD_LIST';
  
  // 奖品
  var AWARD_LIST = exports.AWARD_LIST = 'AWARD_LIST';
  var AWARD_ADD = exports.AWARD_ADD = 'AWARD_ADD';
  var AWARD_UPDATE = exports.AWARD_UPDATE = 'AWARD_UPDATE';
  var AWARD_DEL = exports.AWARD_DEL = 'AWARD_DEL';
  var AWARD_INFO = exports.AWARD_INFO = 'AWARD_INFO';
  var AWARD_ADD_TO_USER = exports.AWARD_ADD_TO_USER = 'AWARD_ADD_TO_USER';
  var AWARD_REISSUE = exports.AWARD_REISSUE = 'AWARD_REISSUE';
  var AWARD_COUPON_TOTAL = exports.AWARD_COUPON_TOTAL = 'AWARD_COUPON_TOTAL';
  var AWARD_COUPON_EXPORT = exports.AWARD_COUPON_EXPORT = 'AWARD_COUPON_EXPORT';
  var AWARD_COUPON_DOWNLOAD = exports.AWARD_COUPON_DOWNLOAD = 'AWARD_COUPON_DOWNLOAD';
  var AWARD_INVALIDE_COUPON = exports.AWARD_INVALIDE_COUPON = 'AWARD_INVALIDE_COUPON';
  
  var ARTICLE_TYPE_LIST = exports.ARTICLE_TYPE_LIST = 'ARTICLE_TYPE_LIST';
  var ARTICLE_TYPE_ADD = exports.ARTICLE_TYPE_ADD = 'ARTICLE_TYPE_ADD';
  var ARTICLE_TYPE_DEL = exports.ARTICLE_TYPE_DEL = 'ARTICLE_TYPE_DEL';
  var ARTICLE_TYPE_PUT = exports.ARTICLE_TYPE_PUT = 'ARTICLE_TYPE_PUT';
  var ARTICLE_TYPE_INFO = exports.ARTICLE_TYPE_INFO = 'ARTICLE_TYPE_INFO';
  var ARTICLE_TYPE_UP = exports.ARTICLE_TYPE_UP = 'ARTICLE_TYPE_UP';
  var ARTICLE_TYPE_DOWN = exports.ARTICLE_TYPE_DOWN = 'ARTICLE_TYPE_DOWN';
  
  var ARTICLE_PUT = exports.ARTICLE_PUT = 'ARTICLE_PUT';
  var ARTICLE_ADD = exports.ARTICLE_ADD = 'ARTICLE_ADD';
  var ARTICLE_LIST = exports.ARTICLE_LIST = 'ARTICLE_LIST';
  var ARTICLE_DEL = exports.ARTICLE_DEL = 'ARTICLE_DEL';
  var ARTICLE_DETAIL = exports.ARTICLE_DETAIL = 'ARTICLE_DETAIL';
  var ARTICLE_DETAIL_BY_ALIAS = exports.ARTICLE_DETAIL_BY_ALIAS = 'ARTICLE_DETAIL_BY_ALIAS';
  var ARTICLE_RELEASE = exports.ARTICLE_RELEASE = 'ARTICLE_RELEASE';
  var ARTICLE_OFFLINE = exports.ARTICLE_OFFLINE = 'ARTICLE_OFFLINE';
  var ARTICLE_UP = exports.ARTICLE_UP = 'ARTICLE_UP';
  var ARTICLE_DOWN = exports.ARTICLE_DOWN = 'ARTICLE_DOWN';
  
  var BANNER_LIST = exports.BANNER_LIST = 'BANNER_LIST';
  var BANNER_ADD = exports.BANNER_ADD = 'BANNER_ADD';
  var BANNER_PUT = exports.BANNER_PUT = 'BANNER_PUT';
  var BANNER_DEL = exports.BANNER_DEL = 'BANNER_DEL';
  var BANNER_ENABLE = exports.BANNER_ENABLE = 'BANNER_ENABLE';
  var BANNER_DISABLE = exports.BANNER_DISABLE = 'BANNER_DISABLE';
  var BANNER_UP = exports.BANNER_UP = 'BANNER_UP';
  var BANNER_DOWN = exports.BANNER_DOWN = 'BANNER_DOWN';
  var BANNER_INFO = exports.BANNER_INFO = 'BANNER_INFO';
  
  var ATTACHMENT_ADD = exports.ATTACHMENT_ADD = 'ATTACHMENT_ADD';
  var ATTACHMENT_LIST = exports.ATTACHMENT_LIST = 'ATTACHMENT_LIST';
  
  var ACCOUNT_LOGIN = exports.ACCOUNT_LOGIN = 'ACCOUNT_LOGIN';
  var ACCOUNT_PROFILE = exports.ACCOUNT_PROFILE = 'ACCOUNT_PROFILE';
  var ACCOUNT_LOGOUT = exports.ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT';
  var ACCOUNT_CAPTCHA = exports.ACCOUNT_CAPTCHA = 'ACCOUNT_CAPTCHA';
  
  var FEEDBACK_LIST = exports.FEEDBACK_LIST = 'FEEDBACK_LIST';
  
  var STARTUP_LIST = exports.STARTUP_LIST = 'STARTUP_LIST';
  var STARTUP_ADD = exports.STARTUP_ADD = 'STARTUP_ADD';
  var STARTUP_ENABLE = exports.STARTUP_ENABLE = 'STARTUP_ENABLE';
  var STARTUP_DISABLE = exports.STARTUP_DISABLE = 'STARTUP_DISABLE';
  var STARTUP_PUT = exports.STARTUP_PUT = 'STARTUP_PUT';
  var STARTUP_INFO = exports.STARTUP_INFO = 'STARTUP_INFO';
  var STARTUP_DEL = exports.STARTUP_DEL = 'STARTUP_DEL';
  var STARTUP_UP = exports.STARTUP_UP = 'STARTUP_UP';
  var STARTUP_DOWN = exports.STARTUP_DOWN = 'STARTUP_DOWN';
  
  // 公告
  var NOTICE_ADD = exports.NOTICE_ADD = 'NOTICE_ADD';
  var NOTICE_LIST = exports.NOTICE_LIST = 'NOTICE_LIST';
  var NOTICE_DEL = exports.NOTICE_DEL = 'NOTICE_DEL';
  var NOTICE_PUT = exports.NOTICE_PUT = 'NOTICE_PUT';
  var NOTICE_DETAIL = exports.NOTICE_DETAIL = 'NOTICE_DETAIL';
  var NOTICE_RELEASE = exports.NOTICE_RELEASE = 'NOTICE_RELEASE';
  var NOTICE_OFFLINE = exports.NOTICE_OFFLINE = 'NOTICE_OFFLINE';
  var NOTICE_UP = exports.NOTICE_UP = 'NOTICE_UP';
  var NOTICE_DOWN = exports.NOTICE_DOWN = 'NOTICE_DOWN';
  
  // 兑换码
  var REDEEM_ADD = exports.REDEEM_ADD = 'REDEEM_ADD';
  var REDEEM_CODE_LIST = exports.REDEEM_CODE_LIST = 'REDEEM_CODE_LIST';
  var REDEEM_EXPORT = exports.REDEEM_EXPORT = 'REDEEM_EXPORT';
  var REDEEM_LIST = exports.REDEEM_LIST = 'REDEEM_LIST';
  var REDEEM_DOWNLOAD = exports.REDEEM_DOWNLOAD = 'REDEEM_DOWNLOAD';
  
  // 批量发奖
  var BATCH_AWARD = exports.BATCH_AWARD = 'BATCH_AWARD';
  var BATCH_AWARD_LIST = exports.BATCH_AWARD_LIST = 'BATCH_AWARD_LIST';
  
  // 管理员
  var ADMIN_LIST = exports.ADMIN_LIST = 'ADMIN_LIST';
  var ADMIN_ADD = exports.ADMIN_ADD = 'ADMIN_ADD';
  var ADMIN_UPDATE = exports.ADMIN_UPDATE = 'ADMIN_UPDATE';
  var ADMIN_DEL = exports.ADMIN_DEL = 'ADMIN_DEL';
  // 权限组
  var PRIVILEGE_LIST = exports.PRIVILEGE_LIST = 'PRIVILEGE_LIST';
  var PRIVILEGE_ADD = exports.PRIVILEGE_ADD = 'PRIVILEGE_ADD';
  var PRIVILEGE_UPDATE = exports.PRIVILEGE_UPDATE = 'PRIVILEGE_UPDATE';
  var PRIVILEGE_DEL = exports.PRIVILEGE_DEL = 'PRIVILEGE_DEL';
  
  // 模板生成
  var TEMPLATE_NOTICE = exports.TEMPLATE_NOTICE = 'TEMPLATE_NOTICE';
  var TEMPLATE_HELP = exports.TEMPLATE_HELP = 'TEMPLATE_HELP';
  var TEMPLATE_DYNAMIC = exports.TEMPLATE_DYNAMIC = 'TEMPLATE_DYNAMIC';
  var TEMPLATE_MEDIA = exports.TEMPLATE_MEDIA = 'TEMPLATE_MEDIA';
  var TEMPLATE_CLASSROOM = exports.TEMPLATE_CLASSROOM = 'TEMPLATE_CLASSROOM';
  
  // 成语管理
  var IDIOM_LIST = exports.IDIOM_LIST = 'IDIOM_LIST';
  var IDIOM_ADD = exports.IDIOM_ADD = 'IDIOM_ADD';
  var IDIOM_PUT = exports.IDIOM_PUT = 'IDIOM_PUT';
  var IDIOM_INFO = exports.IDIOM_INFO = 'IDIOM_INFO';
  var IDIOM_DEL = exports.IDIOM_DEL = 'IDIOM_DEL';
  
  // 积分商城
  var INTEGRAL_LIST = exports.INTEGRAL_LIST = 'INTEGRAL_LIST';
  var INTEGRAL_OPERATION = exports.INTEGRAL_OPERATION = 'INTEGRAL_OPERATION';
  var INTEGRAL_UP = exports.INTEGRAL_UP = 'INTEGRAL_UP';
  var INTEGRAL_DOWN = exports.INTEGRAL_DOWN = 'INTEGRAL_DOWN';
  var INTEGRAL_ENABLE = exports.INTEGRAL_ENABLE = 'INTEGRAL_ENABLE';
  var INTEGRAL_DISABLE = exports.INTEGRAL_DISABLE = 'INTEGRAL_DISABLE';
  var INTEGRAL_DEL = exports.INTEGRAL_DEL = 'INTEGRAL_DEL';
  
  // 一元商城
  var ONEYUAN_LIST = exports.ONEYUAN_LIST = 'ONEYUAN_LIST';
  var ONEYUAN_OPERATION = exports.ONEYUAN_OPERATION = 'ONEYUAN_OPERATION';
  var ONEYUAN_ENABLE = exports.ONEYUAN_ENABLE = 'ONEYUAN_ENABLE';
  var ONEYUAN_DISABLE = exports.ONEYUAN_DISABLE = 'ONEYUAN_DISABLE';
  var ONEYUAN_DEL = exports.ONEYUAN_DEL = 'ONEYUAN_DEL';
  var ONEYUAN_OPEN = exports.ONEYUAN_OPEN = 'ONEYUAN_OPEN';
  var ONEYUAN_AUTO_OPEN = exports.ONEYUAN_AUTO_OPEN = 'ONEYUAN_AUTO_OPEN';
  var ONEYUAN_ADD_CHANCE = exports.ONEYUAN_ADD_CHANCE = 'ONEYUAN_ADD_CHANCE';
  
  // 红包分享
  var HONGBAO_LIST = exports.HONGBAO_LIST = 'HONGBAO_LIST';
  var HONGBAO_OPERATION = exports.HONGBAO_OPERATION = 'HONGBAO_OPERATION';
  var HONGBAO_ENABLE = exports.HONGBAO_ENABLE = 'HONGBAO_ENABLE';
  var HONGBAO_DISABLE = exports.HONGBAO_DISABLE = 'HONGBAO_DISABLE';
  var HONGBAO_DEL = exports.HONGBAO_DEL = 'HONGBAO_DEL';
  
  // 论坛#帖子
  var BBS_THREAD_DT_LIST = exports.BBS_THREAD_DT_LIST = 'BBS_THREAD_DT_LIST';
  var BBS_THREAD_DT_DEL = exports.BBS_THREAD_DT_DEL = 'BBS_THREAD_DT_DEL';
  var BBS_THREAD_DT_ADD = exports.BBS_THREAD_DT_ADD = 'BBS_THREAD_DT_ADD';
  var BBS_THREAD_DT_UPDATE = exports.BBS_THREAD_DT_UPDATE = 'BBS_THREAD_DT_UPDATE';
  var BBS_THREAD_TOGGLE_STATUS = exports.BBS_THREAD_TOGGLE_STATUS = 'BBS_THREAD_TOGGLE_STATUS';
  var BBS_THREAD_UNVERIFY = exports.BBS_THREAD_UNVERIFY = 'BBS_THREAD_UNVERIFY';
  var BBS_THREAD_RESTORE = exports.BBS_THREAD_RESTORE = 'BBS_THREAD_RESTORE';
  var BBS_THREAD_VERIFY = exports.BBS_THREAD_VERIFY = 'BBS_THREAD_VERIFY_PUT';
  
  // 论坛#板块
  var BBS_SECTION_DT_LIST = exports.BBS_SECTION_DT_LIST = 'BBS_SECTION_DT_LIST';
  var BBS_SECTION_DT_DEL = exports.BBS_SECTION_DT_DEL = 'BBS_SECTION_DT_DEL';
  var BBS_SECTION_DT_ADD = exports.BBS_SECTION_DT_ADD = 'BBS_SECTION_DT_ADD';
  var BBS_SECTION_DT_UPDATE = exports.BBS_SECTION_DT_UPDATE = 'BBS_SECTION_DT_UPDATE';
  var BBS_SECTION_OPEN = exports.BBS_SECTION_OPEN = 'BBS_SECTION_OPEN';
  var BBS_SECTION_CLOSE = exports.BBS_SECTION_CLOSE = 'BBS_SECTION_CLOSE';
  var BBS_SECTION_LIST = exports.BBS_SECTION_LIST = 'BBS_SECTION_LIST';
  
  // 论坛#用户
  var BBS_USER_DT_LIST = exports.BBS_USER_DT_LIST = 'BBS_USER_DT_LIST';
  var BBS_USER_DT_DEL = exports.BBS_USER_DT_DEL = 'BBS_USER_DT_DEL';
  var BBS_USER_DT_ADD = exports.BBS_USER_DT_ADD = 'BBS_USER_DT_ADD';
  var BBS_USER_DT_UPDATE = exports.BBS_USER_DT_UPDATE = 'BBS_USER_DT_UPDATE';
  var BBS_USER_BLOCK = exports.BBS_USER_BLOCK = 'BBS_USER_BLOCK';
  var BBS_USER_UNBLOCK = exports.BBS_USER_UNBLOCK = 'BBS_USER_UNBLOCK';
  var BBS_USER_ADMIN = exports.BBS_USER_ADMIN = 'BBS_USER_ADMIN';
  var BBS_USER_UNADMIN = exports.BBS_USER_UNADMIN = 'BBS_USER_UNADMIN';
  var BBS_USER_ADMIN_LIST = exports.BBS_USER_ADMIN_LIST = 'BBS_USER_ADMIN_LIST';
  
  // 论坛#评论
  var BBS_COMMENT_DT_LIST = exports.BBS_COMMENT_DT_LIST = 'BBS_COMMENT_DT_LIST';
  var BBS_COMMENT_DT_DEL = exports.BBS_COMMENT_DT_DEL = 'BBS_COMMENT_DT_DEL';
  var BBS_COMMENT_DT_ADD = exports.BBS_COMMENT_DT_ADD = 'BBS_COMMENT_DT_ADD';
  var BBS_COMMENT_DT_UPDATE = exports.BBS_COMMENT_DT_UPDATE = 'BBS_COMMENT_DT_UPDATE';
  var BBS_COMMENT_VERIFY = exports.BBS_COMMENT_VERIFY = 'BBS_COMMENT_VERIFY';
  var BBS_COMMENT_UNVERIFY = exports.BBS_COMMENT_UNVERIFY = 'BBS_COMMENT_UNVERIFY';
  
  // 论坛#消息
  var BBS_MESSAGE_DT_LIST = exports.BBS_MESSAGE_DT_LIST = 'BBS_MESSAGE_DT_LIST';
  var BBS_MESSAGE_DT_DEL = exports.BBS_MESSAGE_DT_DEL = 'BBS_MESSAGE_DT_DEL';
  var BBS_MESSAGE_DT_ADD = exports.BBS_MESSAGE_DT_ADD = 'BBS_MESSAGE_DT_ADD';
  var BBS_MESSAGE_DT_UPDATE = exports.BBS_MESSAGE_DT_UPDATE = 'BBS_MESSAGE_DT_UPDATE';
  
  // 论坛#配置
  var BBS_CONFIG_DT_LIST = exports.BBS_CONFIG_DT_LIST = 'BBS_CONFIG_DT_LIST';
  var BBS_CONFIG_DT_DEL = exports.BBS_CONFIG_DT_DEL = 'BBS_CONFIG_DT_DEL';
  var BBS_CONFIG_DT_ADD = exports.BBS_CONFIG_DT_ADD = 'BBS_CONFIG_DT_ADD';
  var BBS_CONFIG_DT_UPDATE = exports.BBS_CONFIG_DT_UPDATE = 'BBS_CONFIG_DT_UPDATE';
  
  // 论坛#拒审原因
  var BBS_BLOCK_DT_LIST = exports.BBS_BLOCK_DT_LIST = 'BBS_BLOCK_DT_LIST';
  var BBS_BLOCK_DT_DEL = exports.BBS_BLOCK_DT_DEL = 'BBS_BLOCK_DT_DEL';
  var BBS_BLOCK_DT_ADD = exports.BBS_BLOCK_DT_ADD = 'BBS_BLOCK_DT_ADD';
  var BBS_BLOCK_DT_UPDATE = exports.BBS_BLOCK_DT_UPDATE = 'BBS_BLOCK_DT_UPDATE';
  var BBS_BLOCK_LIST = exports.BBS_BLOCK_LIST = 'BBS_BLOCK_LIST';
  
  //论坛#任务
  var BBS_TASK_DT_LIST = exports.BBS_TASK_DT_LIST = 'BBS_TASK_DT_LIST';
  var BBS_TASK_DT_UPDATE = exports.BBS_TASK_DT_UPDATE = 'BBS_TASK_DT_UPDATE';
  var BBS_TASK_DT_ADD = exports.BBS_TASK_DT_ADD = 'BBS_TASK_DT_ADD';
  var BBS_TASK_DT_DEL = exports.BBS_TASK_DT_DEL = 'BBS_TASK_DT_DEL';
  var BBS_TASK_INFO = exports.BBS_TASK_INFO = 'BBS_TASK_INFO';
  var BBS_TASK_TRIGGER_TYPES = exports.BBS_TASK_TRIGGER_TYPES = 'BBS_TASK_TRIGGER_TYPES';
  var BBS_GROUP_TASK_LIST = exports.BBS_GROUP_TASK_LIST = 'BBS_GROUP_TASK_LIST';
  var BBS_GROUP_TASK_ADD = exports.BBS_GROUP_TASK_ADD = 'BBS_GROUP_TASK_ADD';
  var BBS_GROUP_TASK_DEL = exports.BBS_GROUP_TASK_DEL = 'BBS_GROUP_TASK_DEL';
  var BBS_GROUP_TASK_PUT = exports.BBS_GROUP_TASK_PUT = 'BBS_GROUP_TASK_PUT';
  var BBS_GROUP_TASK_INFO = exports.BBS_GROUP_TASK_INFO = 'BBS_GROUP_TASK_INFO';
  var BBS_TASK_OFFLINE = exports.BBS_TASK_OFFLINE = 'BBS_TASK_OFFLINE';
  var BBS_TASK_ONLINE = exports.BBS_TASK_ONLINE = 'BBS_TASK_ONLINE';
  var BBS_TASK_DEL = exports.BBS_TASK_DEL = 'BBS_TASK_ONLINE';
  
  // 锁屏问候语
  var WELCOME_DT_LIST = exports.WELCOME_DT_LIST = 'WELCOME_DT_LIST';
  var WELCOME_DT_DEL = exports.WELCOME_DT_DEL = 'WELCOME_DT_DEL';
  var WELCOME_DT_ADD = exports.WELCOME_DT_ADD = 'WELCOME_DT_ADD';
  var WELCOME_DT_UPDATE = exports.WELCOME_DT_UPDATE = 'WELCOME_DT_UPDATE';
  var WELCOME_ENABLE = exports.WELCOME_ENABLE = 'WELCOME_ENABLE';
  var WELCOME_DISABLE = exports.WELCOME_DISABLE = 'WELCOME_DISABLE';
  
  // 全局属性
  var GLOBALATTR_DT_LIST = exports.GLOBALATTR_DT_LIST = 'GLOBALATTR_DT_LIST';
  var GLOBALATTR_DT_DEL = exports.GLOBALATTR_DT_DEL = 'GLOBALATTR_DT_DEL';
  var GLOBALATTR_DT_ADD = exports.GLOBALATTR_DT_ADD = 'GLOBALATTR_DT_ADD';
  var GLOBALATTR_DT_UPDATE = exports.GLOBALATTR_DT_UPDATE = 'GLOBALATTR_DT_UPDATE';
  
  // 用户属性
  var USERATTR_DT_LIST = exports.USERATTR_DT_LIST = 'USERATTR_DT_LIST';
  var USERATTR_DT_DEL = exports.USERATTR_DT_DEL = 'USERATTR_DT_DEL';
  var USERATTR_DT_ADD = exports.USERATTR_DT_ADD = 'USERATTR_DT_ADD';
  var USERATTR_DT_UPDATE = exports.USERATTR_DT_UPDATE = 'USERATTR_DT_UPDATE';
  
  // 见面会
  var JIANMIANHUI_DT_LIST = exports.JIANMIANHUI_DT_LIST = 'JIANMIANHUI_DT_LIST';
  var JIANMIANHUI_DT_DEL = exports.JIANMIANHUI_DT_DEL = 'JIANMIANHUI_DT_DEL';
  var JIANMIANHUI_DT_ADD = exports.JIANMIANHUI_DT_ADD = 'JIANMIANHUI_DT_ADD';
  var JIANMIANHUI_DT_UPDATE = exports.JIANMIANHUI_DT_UPDATE = 'JIANMIANHUI_DT_UPDATE';
  
  //生活特权
  var FEEFLOWCONFIG_LIST = exports.FEEFLOWCONFIG_LIST = 'FEEFLOWCONFIG_LIST';
  var FEEFLOWCONFIG_ADD = exports.FEEFLOWCONFIG_ADD = 'FEEFLOWCONFIG_ADD';
  var FEEFLOWCONFIG_UP_STATUS = exports.FEEFLOWCONFIG_UP_STATUS = 'FEEFLOWCONFIG_UP_STATUS';
  var FEEFLOWCONFIG_ORDER_LIST = exports.FEEFLOWCONFIG_ORDER_LIST = 'FEEFLOWCONFIG_ORDER_LIST';
  var FEEFLOWCONFIG_ORDER_STATUS_UPDATE = exports.FEEFLOWCONFIG_ORDER_STATUS_UPDATE = 'FEEFLOWCONFIG_ORDER_STATUS_UPDATE';
  var FEEFLOWCONFIG_ORDER_REPAIR = exports.FEEFLOWCONFIG_ORDER_REPAIR = 'FEEFLOWCONFIG_ORDER_REPAIR';
  var FEEFLOWCONFIG_ORDER_EXPORT = exports.FEEFLOWCONFIG_ORDER_EXPORT = 'FEEFLOWCONFIG_ORDER_EXPORT';

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createBrowserHistory = __webpack_require__(61);
  
  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
  
  var _createMemoryHistory = __webpack_require__(62);
  
  var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
  
  var _useQueries = __webpack_require__(63);
  
  var _useQueries2 = _interopRequireDefault(_useQueries);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var history = (0, _useQueries2.default)( false ? _createBrowserHistory2.default : _createMemoryHistory2.default)(); /**
                                                                                                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                    *
                                                                                                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                    *
                                                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                                                    * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                    */
  
  exports.default = history;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _Link = __webpack_require__(65);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _reactCookie = __webpack_require__(68);
  
  var _reactCookie2 = _interopRequireDefault(_reactCookie);
  
  var _constants = __webpack_require__(59);
  
  var _config = __webpack_require__(16);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Container = function (_Component) {
    (0, _inherits3.default)(Container, _Component);
  
    function Container(props) {
      (0, _classCallCheck3.default)(this, Container);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).call(this, props));
  
      _this.toggleFold = _this.toggleFold.bind(_this);
      _this.toggleLock = _this.toggleLock.bind(_this);
      _this.toggleSubFold = _this.toggleSubFold.bind(_this);
      _this.panelHover = _this.panelHover.bind(_this);
      var isFold = _reactCookie2.default.load('isFold') === 'true';
      var isLock = _reactCookie2.default.load('isLock') === 'true';
      var items = [{
        title: '日常活动',
        isFold: false,
        subItems: [{
          title: '活动配置',
          url: '/activity/1',
          tag: 'activity',
          fontClass: 'fa-gamepad'
        }, {
          title: '奖品配置',
          url: '/award/1',
          tag: 'award',
          fontClass: 'fa-gift'
        }, {
          title: '奖品补发',
          url: '/sendawards',
          tag: 'award',
          fontClass: 'fa-slack'
        }, {
          title: '兑换码生成',
          url: '/redeem',
          tag: 'redeem',
          fontClass: 'fa-money'
        }, {
          title: '渠道',
          url: '/channel',
          tag: 'channel',
          fontClass: 'fa-trello'
        }]
      }, {
        title: '定制化活动',
        isFold: true,
        subItems: [{
          title: '见面会',
          url: '/jianmianhui',
          tag: 'Jianmianhui',
          fontClass: 'fa-star'
        }, {
          title: '积分商城',
          url: '/integral',
          tag: 'integral',
          fontClass: 'fa-diamond'
        }, {
          title: '瓜分体验金',
          url: '/hongbao',
          tag: 'money',
          fontClass: 'fa-usd'
        }, {
          title: '一元夺宝',
          url: '/oneyuan',
          tag: 'one',
          fontClass: 'fa-star'
        }]
      }, {
        title: '活动记录',
        isFold: true,
        subItems: [{
          title: '活动参与记录',
          url: '/activityjoins',
          tag: 'activity',
          fontClass: 'fa-users'
        }, {
          title: '奖品发放记录',
          url: '/awardlist',
          tag: 'activity',
          fontClass: 'fa-cubes'
        }]
      }, {
        title: 'APP&PC配置',
        isFold: true,
        subItems: [{
          title: '锁屏问候语',
          url: '/welcome',
          tag: 'cms',
          fontClass: 'fa-bullseye'
        }, {
          title: '成语管理',
          url: '/idiom',
          tag: 'cms',
          fontClass: 'fa-bullseye'
        }, {
          title: 'banner图',
          url: '/banner/mobile',
          tag: 'img',
          fontClass: 'fa-map'
        }, {
          title: '分享配置',
          url: '/shareconfig/taojin',
          tag: 'img',
          fontClass: 'fa-share'
        }, {
          title: '启动页',
          url: '/startup/1',
          tag: 'img',
          fontClass: 'fa-play-circle'
        }, {
          title: '升级配置',
          url: '/appupdate/1',
          tag: 'app',
          fontClass: 'fa-level-up'
        }]
      }, {
        title: 'CMS编辑',
        isFold: true,
        subItems: [{
          title: '文章',
          url: '/article',
          tag: 'cms',
          fontClass: 'fa-users'
        }, {
          title: '公告',
          url: '/notice',
          tag: 'notice',
          fontClass: 'fa-envelope'
        }]
      }, {
        title: '社区',
        isFold: true,
        subItems: [{
          title: '帖子管理',
          url: '/thread',
          tag: 'bbs',
          fontClass: 'fa-comment'
        }, {
          title: '评论',
          url: '/reply',
          tag: 'bbs',
          fontClass: 'fa-comments'
        }, {
          title: '社区用户',
          url: '/bbsuser',
          tag: 'bbs',
          fontClass: 'fa-users'
        }, {
          title: '板块',
          url: '/section',
          tag: 'bbs',
          fontClass: 'fa-qrcode'
        }, {
          title: '社区消息',
          url: '/bbsmessage',
          tag: 'bbs',
          fontClass: 'fa-rss'
        }, {
          title: '社区配置',
          url: '/bbsconfig',
          tag: 'bbs',
          fontClass: 'fa-gears'
        }, {
          title: '拒审原因',
          url: '/bbsblock',
          tag: 'bbs',
          fontClass: 'fa-ban'
        }, {
          title: '社区任务',
          url: '/bbstask/1',
          tag: 'bbs',
          fontClass: 'fa-tasks'
        }]
      }, {
        title: '其它',
        isFold: true,
        subItems: [{
          title: '用户反馈',
          url: '/feedback',
          tag: 'cms',
          fontClass: 'fa-twitch'
        }, {
          title: '用户属性',
          url: '/userattr',
          tag: 'userattr',
          fontClass: 'fa-gears'
        }, {
          title: '全局属性',
          url: '/globalattr',
          tag: 'globalattr',
          fontClass: 'fa-gear'
        }]
      }, {
        title: '后台管理',
        isFold: true,
        subItems: [{
          title: '用户组',
          url: '/admin',
          tag: 'admin',
          fontClass: 'fa-users'
        }, {
          title: '权限组',
          url: '/privilege',
          tag: 'privilege',
          fontClass: 'fa-user-secret'
        }]
      }, {
        title: '话费流量',
        isFold: true,
        subItems: [{
          title: '话费流量类型设置',
          url: '/feeflowconfig/1',
          tag: 'activity',
          fontClass: 'fa-users'
        }, {
          title: '话费流量订单列表',
          url: '/feefloworder/1',
          tag: 'activity',
          fontClass: 'fa-user-secret'
        }]
      }];
      if (_config.authentication) {
        var privilege = props.profile.privilege || false;
        if (privilege) {
          items = _this.initItems(privilege, items);
        }
      }
      _this.state = {
        isLock: isLock,
        isFold: isFold,
        items: items
      };
      return _this;
    }
  
    (0, _createClass3.default)(Container, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.type !== '') {
          this.setState({
            currentType: nextProps.type
          });
        }
      }
    }, {
      key: 'initItems',
      value: function initItems(privilege, preItems) {
        var defaultPrivilege = privilege.default || false;
        var items = [];
        if (defaultPrivilege) {
          var deny = privilege.deny || [];
          for (var i = 0; i < preItems.length; i++) {
            var item = preItems[i];
            var tempSubItems = [];
            for (var j = 0; j < item.subItems.length; j++) {
              var subItem = item.subItems[j];
              var tag = subItem.tag || '';
              if (!this.inArray(deny, tag)) {
                tempSubItems.push(subItem);
              }
            }
            item.subItems = tempSubItems;
            items.push(item);
          }
        } else {
          var allow = privilege.allow || [];
          for (var _i = 0; _i < preItems.length; _i++) {
            var _item = preItems[_i];
            var _tempSubItems = [];
            for (var _j = 0; _j < _item.subItems.length; _j++) {
              var _subItem = _item.subItems[_j];
              var _tag = _subItem.tag || '';
              if (this.inArray(allow, _tag)) {
                _tempSubItems.push(_subItem);
              }
            }
            _item.subItems = _tempSubItems;
            items.push(_item);
          }
        }
        return items;
      }
    }, {
      key: 'inArray',
      value: function inArray(arr, val) {
        var i = arr.length;
        while (i--) {
          if (arr[i] === val) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: 'syncCookie',
      value: function syncCookie() {
        _reactCookie2.default.save('isLock', this.state.isLock, { path: '/', maxAge: 31536000 });
        _reactCookie2.default.save('isFold', this.state.isFold, { path: '/', maxAge: 31536000 });
      }
    }, {
      key: 'toggleFold',
      value: function toggleFold() {
        var _this2 = this;
  
        var isFold = !this.state.isFold;
        this.setState({
          isFold: isFold
        }, function () {
          return _this2.syncCookie();
        });
      }
    }, {
      key: 'toggleLock',
      value: function toggleLock() {
        var _this3 = this;
  
        var isLock = !this.state.isLock;
        if (!isLock) {
          this.setState({
            isLock: isLock,
            isFold: false
          }, function () {
            return _this3.syncCookie();
          });
        } else {
          this.setState({
            isLock: isLock
          }, function () {
            return _this3.syncCookie();
          });
        }
      }
    }, {
      key: 'toggleSubFold',
      value: function toggleSubFold(e) {
        var index = +e.currentTarget.dataset.index;
        var items = this.state.items;
  
        for (var i = 0; i < items.length; i++) {
          if (i === index) {
            items[i].isFold = !items[i].isFold;
          } else {
            items[i].isFold = true;
          }
        }
        this.setState({
          items: items
        });
      }
    }, {
      key: 'panelHover',
      value: function panelHover(e) {
        var _this4 = this;
  
        if (this.state.isLock) {
          return;
        }
        if (e.type === 'mouseover') {
          this.setState({
            isFold: true
          }, function () {
            return _this4.syncCookie();
          });
        }
        if (e.type === 'mouseout') {
          this.setState({
            isFold: false
          }, function () {
            return _this4.syncCookie();
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this5 = this;
  
        var items = this.state.items;
        return (0, _jsx3.default)('div', {
          className: this.state.isFold ? 'left-panel-max' : 'left-panel-mix'
        }, void 0, (0, _jsx3.default)('div', {
          onMouseOver: this.panelHover,
          onMouseOut: this.panelHover,
          className: 'left-panel'
        }, void 0, (0, _jsx3.default)('div', {
          onClick: this.toggleFold,
          className: 'panel-fold text-md-center'
        }, void 0, (0, _jsx3.default)('span', {
          className: this.state.isFold ? 'fa fa-angle-double-left' : 'fa fa-angle-double-right'
        })), (0, _jsx3.default)('div', {
          className: 'items'
        }, void 0, items.map(function (item, index) {
          if (item.subItems.length === 0) {
            return false;
          }
          return (0, _jsx3.default)('div', {
            className: item.isFold ? 'fold' : ''
          }, 'item_' + index, (0, _jsx3.default)('div', {
            className: 'item',
            'data-toggle': 'tooltip',
            'data-placement': 'right',
            'data-index': index,
            onClick: _this5.toggleSubFold
          }, void 0, (0, _jsx3.default)('span', {
            className: item.isFold ? 'fa fa-caret-right' : 'fa fa-caret-down'
          }), (0, _jsx3.default)('span', {
            className: 'title'
          }, void 0, item.title)), (0, _jsx3.default)('div', {
            className: 'sub-items'
          }, void 0, item.subItems.map(function (subItem, index2) {
            return (0, _jsx3.default)('div', {
              className: 'sub-item'
            }, 'subitem_' + index2, (0, _jsx3.default)(_Link2.default, {
              to: subItem.url
            }, void 0, (0, _jsx3.default)('span', {
              className: 'fa ' + subItem.fontClass
            }), (0, _jsx3.default)('span', {
              className: 'title'
            }, void 0, subItem.title)));
          })));
        })), (0, _jsx3.default)('div', {
          onClick: this.toggleLock,
          className: 'lock-fold text-md-center'
        }, void 0, (0, _jsx3.default)('span', {
          className: this.state.isLock ? 'fa fa-lock' : 'fa fa-unlock-alt'
        }))), (0, _jsx3.default)('div', {
          className: 'main-content m-x-1 m-t-1'
        }, void 0, this.props.children));
      }
    }]);
    return Container;
  }(_react.Component);
  
  Container.defaultProps = {
    modal: false
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var profile = omg[_constants.ACCOUNT_PROFILE] || {};
    return {
      profile: profile
    };
  })(Container);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(66);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(67);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = function (_Component) {
    (0, _inherits3.default)(Link, _Component);
  
    function Link() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        var allowTransition = true;
  
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (event.defaultPrevented === true) {
          allowTransition = false;
        }
  
        event.preventDefault();
        // const location = history.getCurrentLocation();
        if (allowTransition) {
          if (_this.props.to) {
            _history2.default.push(_this.props.to);
            // history.push({ ...location, pathname: this.props.to});
          } else {
            _history2.default.push({
              pathname: event.currentTarget.pathname,
              search: event.currentTarget.search
            });
          }
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      // eslint-disable-line react/prefer-stateless-function
  
      value: function render() {
        var _props = this.props,
            to = _props.to,
            props = (0, _objectWithoutProperties3.default)(_props, ['to']); // eslint-disable-line no-use-before-define
  
        return _react2.default.createElement('a', (0, _extends3.default)({ href: _history2.default.createHref(to) }, props, { onClick: this.handleClick }));
      }
    }]);
    return Link;
  }(_react.Component);
  
  exports.default = Link;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

  module.exports = require("react-cookie");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _modal = __webpack_require__(70);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Modal = function (_Component) {
    (0, _inherits3.default)(Modal, _Component);
  
    function Modal(props) {
      (0, _classCallCheck3.default)(this, Modal);
      return (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, props));
    }
  
    (0, _createClass3.default)(Modal, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
  
        $('#modal').on('hidden.bs.modal', function () {
          return _this2.props.dispatch((0, _modal.hideModal)(true));
        });
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this.props.showStatus) {
          $('#modal').modal('show');
        } else {
          $('#modal').modal('hide');
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var modalView = _react2.default.isValidElement(this.props.modalView) ? this.props.modalView : '弹框错误:' + this.props.modalView.toString();
        return (0, _jsx3.default)('div', {
          className: 'modal fade',
          id: 'modal'
        }, void 0, modalView);
      }
    }]);
    return Modal;
  }(_react.Component);
  
  Modal.defaultProps = {
    data: {}
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var modal = state.modal;
    var showStatus = modal.showStatus,
        modalView = modal.modalView,
        data = modal.data;
  
    return {
      showStatus: showStatus,
      modalView: modalView,
      data: data
    };
  })(Modal);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.showModal = showModal;
  exports.hideModal = hideModal;
  
  var _index = __webpack_require__(59);
  
  function showModal(modalView) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
    return {
      type: _index.MODAL_SHOW,
      modalView: modalView,
      data: data
    };
  }
  
  function hideModal() {
    var isClear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  
    return {
      type: _index.MODAL_HIDE,
      isClear: isClear
    };
  }

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _constants = __webpack_require__(59);
  
  var _config = __webpack_require__(16);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Main = function (_Component) {
    (0, _inherits3.default)(Main, _Component);
  
    function Main(props) {
      (0, _classCallCheck3.default)(this, Main);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this, props));
  
      _this.state = {
        fetching: false
      };
      return _this;
    }
  
    (0, _createClass3.default)(Main, [{
      key: 'render',
      value: function render() {
        if (!this.props.profile.id || this.props.fetching) {
          if (_config.authentication) {
            return false;
          }
        }
        return (0, _jsx3.default)('div', {
          id: 'main'
        }, void 0, this.props.children);
      }
    }]);
    return Main;
  }(_react.Component);
  
  Main.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var profile = omg[_constants.ACCOUNT_PROFILE] || {};
    var fetchingList = omg.isFetching || {};
    var fetching = fetchingList[_constants.ACCOUNT_PROFILE] || false;
    return {
      profile: profile,
      fetching: fetching
    };
  })(Main);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  var _config = __webpack_require__(16);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    labelName: '\u624B\u673A\u53F7',
    name: 'username'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    labelName: '\u5BC6\u7801',
    type: 'password',
    name: 'password'
  });
  
  var _ref3 = (0, _jsx3.default)('label', {
    className: 'col-sm-4 form-control-label text-xs-right'
  }, void 0, '\u9A8C\u8BC1\u7801:');
  
  var _ref4 = (0, _jsx3.default)(_tools.Submit, {
    value: '\u767B\u5F55'
  });
  
  var Login = function (_Component) {
    (0, _inherits3.default)(Login, _Component);
  
    function Login(props) {
      (0, _classCallCheck3.default)(this, Login);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));
  
      _this.submit = _this.submit.bind(_this);
      _this.refreshCaptcha = _this.refreshCaptcha.bind(_this);
      _this.state = {
        errorMsg: '',
        fetching: false,
        showCaptcha: false
      };
      return _this;
    }
  
    (0, _createClass3.default)(Login, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.refreshCaptcha();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.profile && !nextProps.profile.id && nextProps.profile.id !== this.props.profile.id) {
          this.refreshCaptcha();
        }
      }
    }, {
      key: 'refreshCaptcha',
      value: function refreshCaptcha() {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACCOUNT_CAPTCHA
        }));
      }
    }, {
      key: 'submit',
      value: function submit(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACCOUNT_LOGIN,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
  
            _this2.setState({
              fetching: true
            });
            _this2.props.dispatch((0, _omg.fetchAction)({
              type: _constants.ACCOUNT_PROFILE
            })).then(function () {
              _this2.setState({
                fetching: false
              });
            });
          } else if (json.error_code === 1002) {
            _this2.refreshCaptcha();
            _this2.setState({
              errorMsg: json.data.error_msg,
              showCaptcha: true
            });
          } else {
            _this2.refreshCaptcha();
            _this2.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        if (!_config.authentication || this.props.profile.id || !this.state.fetching && this.props.fetching) {
          return false;
        }
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
          className: 'row m-t-3',
          hidden: this.props.profile.id || !this.state.fetching && this.props.fetching
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-md-offset-4 col-md-4'
        }, void 0, (0, _jsx3.default)(_tools.Card, {
          title: '\u767B\u5F55'
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.state.errorMsg
        }), (0, _jsx3.default)('form', {
          className: 'm-t-1',
          onSubmit: this.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'img_key',
          value: this.props.captcha.key
        }), _ref, _ref2, (0, _jsx3.default)('div', {
          hidden: !this.state.showCaptcha,
          className: 'form-group row'
        }, void 0, _ref3, (0, _jsx3.default)('div', {
          className: 'col-sm-3'
        }, void 0, (0, _jsx3.default)('input', {
          type: 'text',
          name: this.state.showCaptcha ? 'img_code' : '',
          className: 'form-control'
        })), (0, _jsx3.default)('div', {
          className: 'col-sm-3 p-l-0'
        }, void 0, (0, _jsx3.default)('img', {
          title: '\u70B9\u51FB\u5237\u65B0',
          style: { width: '100%', height: '38px' },
          alt: '\u70B9\u51FB\u5237\u65B0',
          onClick: this.refreshCaptcha,
          src: this.props.captcha.img_src
        }))), _ref4)))));
      }
    }]);
    return Login;
  }(_react.Component);
  
  Login.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var login = omg[_constants.ACCOUNT_LOGIN] || {};
    var captcha = omg[_constants.ACCOUNT_CAPTCHA] || {};
    var profile = omg[_constants.ACCOUNT_PROFILE] || {};
    var fetchingList = omg.isFetching || {};
    var fetching = fetchingList[_constants.ACCOUNT_PROFILE] || false;
    return {
      profile: profile,
      fetching: fetching,
      login: login,
      captcha: captcha
    };
  })(Login);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DataTable = exports.PercentInput = exports.Success = exports.Pagination = exports.Popover = exports.Status = exports.Radio = exports.Editor = exports.ImgBox = exports.AttachmentInput = exports.Text = exports.Textarea = exports.FileInput = exports.Checkbox = exports.Fieldset = exports.DateTimeInput = exports.Select = exports.Submit = exports.ModalHeader = exports.Modal = exports.Link = exports.Input = exports.Card = exports.Alert = undefined;
  
  var _Alert2 = __webpack_require__(74);
  
  var _Alert3 = _interopRequireDefault(_Alert2);
  
  var _Card2 = __webpack_require__(75);
  
  var _Card3 = _interopRequireDefault(_Card2);
  
  var _Input2 = __webpack_require__(76);
  
  var _Input3 = _interopRequireDefault(_Input2);
  
  var _Link2 = __webpack_require__(65);
  
  var _Link3 = _interopRequireDefault(_Link2);
  
  var _Modal2 = __webpack_require__(77);
  
  var _Modal3 = _interopRequireDefault(_Modal2);
  
  var _ModalHeader2 = __webpack_require__(78);
  
  var _ModalHeader3 = _interopRequireDefault(_ModalHeader2);
  
  var _Submit2 = __webpack_require__(79);
  
  var _Submit3 = _interopRequireDefault(_Submit2);
  
  var _Select2 = __webpack_require__(80);
  
  var _Select3 = _interopRequireDefault(_Select2);
  
  var _DateTimeInput2 = __webpack_require__(81);
  
  var _DateTimeInput3 = _interopRequireDefault(_DateTimeInput2);
  
  var _Fieldset2 = __webpack_require__(82);
  
  var _Fieldset3 = _interopRequireDefault(_Fieldset2);
  
  var _Checkbox2 = __webpack_require__(83);
  
  var _Checkbox3 = _interopRequireDefault(_Checkbox2);
  
  var _FileInput2 = __webpack_require__(84);
  
  var _FileInput3 = _interopRequireDefault(_FileInput2);
  
  var _Textarea2 = __webpack_require__(85);
  
  var _Textarea3 = _interopRequireDefault(_Textarea2);
  
  var _Text2 = __webpack_require__(86);
  
  var _Text3 = _interopRequireDefault(_Text2);
  
  var _AttachmentInput2 = __webpack_require__(87);
  
  var _AttachmentInput3 = _interopRequireDefault(_AttachmentInput2);
  
  var _ImgBox2 = __webpack_require__(89);
  
  var _ImgBox3 = _interopRequireDefault(_ImgBox2);
  
  var _Editor2 = __webpack_require__(90);
  
  var _Editor3 = _interopRequireDefault(_Editor2);
  
  var _Radio2 = __webpack_require__(92);
  
  var _Radio3 = _interopRequireDefault(_Radio2);
  
  var _Status2 = __webpack_require__(93);
  
  var _Status3 = _interopRequireDefault(_Status2);
  
  var _Popover2 = __webpack_require__(94);
  
  var _Popover3 = _interopRequireDefault(_Popover2);
  
  var _Pagination2 = __webpack_require__(95);
  
  var _Pagination3 = _interopRequireDefault(_Pagination2);
  
  var _Success2 = __webpack_require__(96);
  
  var _Success3 = _interopRequireDefault(_Success2);
  
  var _PercentInput2 = __webpack_require__(97);
  
  var _PercentInput3 = _interopRequireDefault(_PercentInput2);
  
  var _DataTable2 = __webpack_require__(98);
  
  var _DataTable3 = _interopRequireDefault(_DataTable2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.Alert = _Alert3.default;
  exports.Card = _Card3.default;
  exports.Input = _Input3.default;
  exports.Link = _Link3.default;
  exports.Modal = _Modal3.default;
  exports.ModalHeader = _ModalHeader3.default;
  exports.Submit = _Submit3.default;
  exports.Select = _Select3.default;
  exports.DateTimeInput = _DateTimeInput3.default;
  exports.Fieldset = _Fieldset3.default;
  exports.Checkbox = _Checkbox3.default;
  exports.FileInput = _FileInput3.default;
  exports.Textarea = _Textarea3.default;
  exports.Text = _Text3.default;
  exports.AttachmentInput = _AttachmentInput3.default;
  exports.ImgBox = _ImgBox3.default;
  exports.Editor = _Editor3.default;
  exports.Radio = _Radio3.default;
  exports.Status = _Status3.default;
  exports.Popover = _Popover3.default;
  exports.Pagination = _Pagination3.default;
  exports.Success = _Success3.default;
  exports.PercentInput = _PercentInput3.default;
  exports.DataTable = _DataTable3.default;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Alert = function (_Component) {
    (0, _inherits3.default)(Alert, _Component);
  
    function Alert(props) {
      (0, _classCallCheck3.default)(this, Alert);
      return (0, _possibleConstructorReturn3.default)(this, (Alert.__proto__ || (0, _getPrototypeOf2.default)(Alert)).call(this, props));
    }
  
    (0, _createClass3.default)(Alert, [{
      key: 'render',
      value: function render() {
        var msg = this.props.msg;
        var hidden = false;
        if (typeof msg !== 'string' || msg === '') {
          hidden = true;
        }
        return (0, _jsx3.default)('div', {
          hidden: hidden,
          className: 'row',
          role: 'alert'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-sm-12'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'alert alert-danger'
        }, void 0, msg)));
      }
    }]);
    return Alert;
  }(_react.Component);
  
  Alert.defaultProps = {
    msg: ''
  };
  
  exports.default = Alert;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Card = function (_Component) {
    (0, _inherits3.default)(Card, _Component);
  
    function Card(props) {
      (0, _classCallCheck3.default)(this, Card);
      return (0, _possibleConstructorReturn3.default)(this, (Card.__proto__ || (0, _getPrototypeOf2.default)(Card)).call(this, props));
    }
  
    (0, _createClass3.default)(Card, [{
      key: "render",
      value: function render() {
        return (0, _jsx3.default)("div", {
          className: "card clearfix"
        }, void 0, (0, _jsx3.default)("div", {
          className: "card-header"
        }, void 0, this.props.title, this.props.btn), this.props.children);
      }
    }]);
    return Card;
  }(_react.Component);
  
  Card.defaultProps = {
    title: '',
    btn: false
  };
  
  exports.default = Card;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Input = function (_Component) {
    (0, _inherits3.default)(Input, _Component);
  
    function Input(props) {
      (0, _classCallCheck3.default)(this, Input);
      return (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this, props));
    }
  
    (0, _createClass3.default)(Input, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.value) {
          this.refs.input.value = this.props.value;
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.value && nextProps.value !== this.props.value) {
          this.refs.input.value = nextProps.value;
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.props.hidden) {
          return false;
        }
        return (0, _jsx3.default)("div", {
          className: "form-group row"
        }, void 0, (0, _jsx3.default)("label", {
          className: "col-sm-4 form-control-label text-xs-right"
        }, void 0, this.props.labelName, ":"), (0, _jsx3.default)("div", {
          className: "col-sm-6"
        }, void 0, _react2.default.createElement("input", {
          ref: "input",
          placeholder: this.props.placeholder,
          required: this.props.required,
          type: this.props.type,
          name: this.props.name,
          className: "form-control",
          defaultValue: this.props.defaultValue,
          onChange: this.props.onChange
        })));
      }
    }]);
    return Input;
  }(_react.Component);
  
  Input.defaultProps = {
    required: false,
    type: 'text',
    onChange: function onChange() {}
  };
  
  exports.default = Input;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('button', {
    type: 'button',
    className: 'close',
    'data-dismiss': 'modal'
  }, void 0, (0, _jsx3.default)('span', {}, void 0, '\xD7'));
  
  var Modal = function (_Component) {
    (0, _inherits3.default)(Modal, _Component);
  
    function Modal(props) {
      (0, _classCallCheck3.default)(this, Modal);
      return (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, props));
    }
  
    (0, _createClass3.default)(Modal, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {
          className: this.props.className ? 'modal-dialog ' + this.props.className : 'modal-dialog'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'modal-content'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'modal-header'
        }, void 0, _ref, (0, _jsx3.default)('h4', {
          className: 'modal-title'
        }, void 0, this.props.title)), (0, _jsx3.default)('div', {
          className: 'modal-body'
        }, void 0, this.props.children)));
      }
    }]);
    return Modal;
  }(_react.Component);
  
  exports.default = Modal;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal"
  }, void 0, (0, _jsx3.default)("span", {}, void 0, "\xD7"));
  
  var ModalHeader = function (_Component) {
    (0, _inherits3.default)(ModalHeader, _Component);
  
    function ModalHeader(props) {
      (0, _classCallCheck3.default)(this, ModalHeader);
      return (0, _possibleConstructorReturn3.default)(this, (ModalHeader.__proto__ || (0, _getPrototypeOf2.default)(ModalHeader)).call(this, props));
    }
  
    (0, _createClass3.default)(ModalHeader, [{
      key: "render",
      value: function render() {
        return (0, _jsx3.default)("div", {
          className: "modal-header"
        }, void 0, _ref, (0, _jsx3.default)("h4", {
          className: "modal-title"
        }, void 0, this.props.title));
      }
    }]);
    return ModalHeader;
  }(_react.Component);
  
  exports.default = ModalHeader;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Submit = function (_Component) {
    (0, _inherits3.default)(Submit, _Component);
  
    function Submit(props) {
      (0, _classCallCheck3.default)(this, Submit);
      return (0, _possibleConstructorReturn3.default)(this, (Submit.__proto__ || (0, _getPrototypeOf2.default)(Submit)).call(this, props));
    }
  
    (0, _createClass3.default)(Submit, [{
      key: "render",
      value: function render() {
        return (0, _jsx3.default)("div", {
          className: "form-group row"
        }, void 0, (0, _jsx3.default)("div", {
          className: "col-sm-offset-4 col-sm-8 col-md-6"
        }, void 0, (0, _jsx3.default)("button", {
          type: "submit",
          className: "btn btn-primary"
        }, void 0, this.props.value)));
      }
    }]);
    return Submit;
  }(_react.Component);
  
  Submit.defaultProps = {
    value: '保存'
  };
  
  exports.default = Submit;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Select = function (_Component) {
    (0, _inherits3.default)(Select, _Component);
  
    function Select(props) {
      (0, _classCallCheck3.default)(this, Select);
      return (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, props));
    }
  
    (0, _createClass3.default)(Select, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.value && nextProps.value !== this.props.value) {
          this.refs.select.value = nextProps.value;
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _props = this.props,
            options = _props.options,
            onChange = _props.onChange;
  
        var keys = (0, _keys2.default)(options);
        return (0, _jsx3.default)("div", {
          className: "form-group row"
        }, void 0, (0, _jsx3.default)("label", {
          className: "col-sm-4 form-control-label text-xs-right"
        }, void 0, this.props.labelName, ":"), (0, _jsx3.default)("div", {
          className: "col-sm-6"
        }, void 0, _react2.default.createElement(
          "select",
          { ref: "select", onChange: onChange, name: this.props.name, className: "form-control c-select", defaultValue: this.props.defaultValue },
          keys.map(function (key) {
            return (0, _jsx3.default)("option", {
              value: key
            }, key, options[key]);
          })
        )));
      }
    }]);
    return Select;
  }(_react.Component);
  
  Select.defaultProps = {
    options: [],
    onChange: function onChange() {}
  };
  
  exports.default = Select;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var DateTimeInput = function (_Component) {
    (0, _inherits3.default)(DateTimeInput, _Component);
  
    function DateTimeInput(props) {
      (0, _classCallCheck3.default)(this, DateTimeInput);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (DateTimeInput.__proto__ || (0, _getPrototypeOf2.default)(DateTimeInput)).call(this, props));
  
      _this.limitChange = _this.limitChange.bind(_this);
      _this.dateChange = _this.dateChange.bind(_this);
      _this.timeChange = _this.timeChange.bind(_this);
      var date = '';
      var time = '00:00:00';
      if (props.defaultValue) {
        var arr = props.defaultValue.split(' ');
        if (arr.length === 2) {
          date = arr[0];
          time = arr[1];
        }
      }
      _this.state = {
        disabled: false,
        date: date,
        time: time
      };
      return _this;
    }
  
    (0, _createClass3.default)(DateTimeInput, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var dateChange = this.dateChange;
        var timeChange = this.timeChange;
        $(this.refs.datePicker).pickadate({
          format: 'yyyy-mm-dd',
          onSet: dateChange
        });
        $(this.refs.timePicker).pickatime({
          format: 'HH:i:00',
          onSet: timeChange
        });
      }
    }, {
      key: 'limitChange',
      value: function limitChange(e) {
        if (e.target.checked) {
          this.setState({
            disabled: true,
            date: '',
            time: ''
          });
        } else {
          var dateValue = this.refs.datePicker.value;
          var timeValue = this.refs.timePicker.value;
          this.setState({
            disabled: false,
            date: dateValue,
            time: timeValue
          });
        }
      }
    }, {
      key: 'dateChange',
      value: function dateChange() {
        var value = this.refs.datePicker.value;
        this.setState({
          date: value
        });
      }
    }, {
      key: 'timeChange',
      value: function timeChange() {
        var value = this.refs.timePicker.value;
        this.setState({
          time: value
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var dateTime = '';
  
        if (this.state.date && this.state.time) {
          dateTime = this.state.date + ' ' + this.state.time;
        }
        return (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: this.props.name,
          value: dateTime
        }), (0, _jsx3.default)('label', {
          className: 'col-sm-4 form-control-label text-xs-right'
        }, void 0, this.props.labelName, ':'), (0, _jsx3.default)('div', {
          className: 'col-sm-3'
        }, void 0, _react2.default.createElement('input', {
          required: this.props.required,
          onChange: this.dateChange,
          disabled: this.state.disabled,
          ref: 'datePicker',
          type: 'text',
          defaultValue: this.state.date,
          className: 'form-control',
          placeholder: 'YYYY-MM-DD'
        })), (0, _jsx3.default)('div', {
          className: 'col-sm-3'
        }, void 0, _react2.default.createElement('input', {
          required: this.props.required,
          onChange: this.timeChange,
          disabled: this.state.disabled,
          ref: 'timePicker',
          type: 'text',
          defaultValue: this.state.time,
          className: 'form-control',
          placeholder: 'hh:mm:ss'
        })), (0, _jsx3.default)('div', {
          hidden: !this.props.limit,
          className: 'col-sm-2 p-x-0'
        }, void 0, (0, _jsx3.default)('label', {
          className: 'form-control-label'
        }, void 0, (0, _jsx3.default)('input', {
          type: 'checkbox',
          onChange: this.limitChange
        }), '\u4E0D\u9650\u5236')));
      }
    }]);
    return DateTimeInput;
  }(_react.Component);
  
  DateTimeInput.defaultProps = {
    required: false,
    limit: false
  };
  
  exports.default = DateTimeInput;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Filedset = function (_Component) {
    (0, _inherits3.default)(Filedset, _Component);
  
    function Filedset(props) {
      (0, _classCallCheck3.default)(this, Filedset);
      return (0, _possibleConstructorReturn3.default)(this, (Filedset.__proto__ || (0, _getPrototypeOf2.default)(Filedset)).call(this, props));
    }
  
    (0, _createClass3.default)(Filedset, [{
      key: 'render',
      value: function render() {
  
        return (0, _jsx3.default)('div', {
          style: { backgroundColor: '#f7f7f7' }
        }, void 0, this.props.children);
      }
    }]);
    return Filedset;
  }(_react.Component);
  
  exports.default = Filedset;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)("span", {
    className: "c-indicator"
  });
  
  var Checkbox = function (_Component) {
    (0, _inherits3.default)(Checkbox, _Component);
  
    function Checkbox(props) {
      (0, _classCallCheck3.default)(this, Checkbox);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call(this, props));
  
      _this.checkChange = _this.checkChange.bind(_this);
      _this.state = {
        checked: props.checked
      };
      return _this;
    }
  
    (0, _createClass3.default)(Checkbox, [{
      key: "checkChange",
      value: function checkChange(e) {
        this.setState({
          checked: e.target.checked
        });
      }
    }, {
      key: "render",
      value: function render() {
        var value = this.state.checked ? this.props.true : this.props.false;
        return (0, _jsx3.default)("div", {
          className: "form-group row"
        }, void 0, (0, _jsx3.default)("div", {
          className: "col-sm-offset-4 col-sm-6"
        }, void 0, (0, _jsx3.default)("input", {
          type: "hidden",
          name: this.props.name,
          value: value
        }), (0, _jsx3.default)("label", {
          className: "c-input c-checkbox"
        }, void 0, (0, _jsx3.default)("input", {
          type: "checkbox",
          checked: this.state.checked,
          onChange: this.checkChange
        }), _ref, this.props.labelName)));
      }
    }]);
    return Checkbox;
  }(_react.Component);
  
  Checkbox.defaultProps = {
    checked: false,
    true: 1,
    false: 0,
    value: 'on'
  };
  exports.default = Checkbox;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('label', {
    className: 'col-sm-4 form-control-label text-sm-right'
  }, void 0, '\u6587\u4EF6:');
  
  var _ref2 = (0, _jsx3.default)('span', {
    className: 'file-custom'
  });
  
  var Input = function (_Component) {
    (0, _inherits3.default)(Input, _Component);
  
    function Input(props) {
      (0, _classCallCheck3.default)(this, Input);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this, props));
  
      _this.fileChange = _this.fileChange.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(Input, [{
      key: 'fileChange',
      value: function fileChange(e) {
        var filename = e.target.value.split('\\').pop();
        var s = document.createElement('style');
        s.innerText = 'html .file-custom:after{content:\'' + filename + '\'}';
        this.refs.fileInput.appendChild(s);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { ref: 'fileInput', className: 'form-group row' },
          _ref,
          (0, _jsx3.default)('div', {
            className: 'col-sm-6'
          }, void 0, (0, _jsx3.default)('label', {
            className: 'file'
          }, void 0, (0, _jsx3.default)('input', {
            type: 'file',
            name: 'file',
            id: 'coupon-file',
            onChange: this.fileChange
          }), _ref2))
        );
      }
    }]);
    return Input;
  }(_react.Component);
  
  Input.defaultProps = {
    required: false
  };
  
  exports.default = Input;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Textarea = function (_Component) {
    (0, _inherits3.default)(Textarea, _Component);
  
    function Textarea(props) {
      (0, _classCallCheck3.default)(this, Textarea);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Textarea.__proto__ || (0, _getPrototypeOf2.default)(Textarea)).call(this, props));
  
      _this.valueChange = _this.valueChange.bind(_this);
      _this.state = {
        value: props.value
      };
      return _this;
    }
  
    (0, _createClass3.default)(Textarea, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
        if (typeof props.value !== 'undefined') {
          this.setState({
            value: props.value
          });
        }
      }
    }, {
      key: 'valueChange',
      value: function valueChange(e) {
        var value = e.target.value;
        this.setState({
          value: value
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, (0, _jsx3.default)('label', {
          className: 'col-sm-4 form-control-label text-xs-right'
        }, void 0, this.props.labelName, ':'), (0, _jsx3.default)('div', {
          className: 'col-sm-8 col-md-6'
        }, void 0, (0, _jsx3.default)('textarea', {
          name: this.props.name,
          className: 'form-control',
          value: this.state.value,
          defaultValue: this.props.defaultValue,
          onChange: this.valueChange
        }, void 0)));
      }
    }]);
    return Textarea;
  }(_react.Component);
  
  Textarea.defaultProps = {
    required: false
  };
  
  exports.default = Textarea;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Text = function (_Component) {
    (0, _inherits3.default)(Text, _Component);
  
    function Text(props) {
      (0, _classCallCheck3.default)(this, Text);
      return (0, _possibleConstructorReturn3.default)(this, (Text.__proto__ || (0, _getPrototypeOf2.default)(Text)).call(this, props));
    }
  
    (0, _createClass3.default)(Text, [{
      key: "render",
      value: function render() {
        return (0, _jsx3.default)("div", {
          className: "col-sm-6"
        }, void 0, (0, _jsx3.default)("div", {
          className: "row"
        }, void 0, (0, _jsx3.default)("div", {
          className: "col-sm-4 p-l-0 m-t-1 text-xs-right"
        }, void 0, this.props.name, ":"), (0, _jsx3.default)("div", {
          className: "col-sm-8 p-l-0 m-t-1"
        }, void 0, this.props.value)));
      }
    }]);
    return Text;
  }(_react.Component);
  
  Text.defaultProps = {
    value: ''
  };
  
  exports.default = Text;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _UploadBtn = __webpack_require__(88);
  
  var _UploadBtn2 = _interopRequireDefault(_UploadBtn);
  
  var _Alert = __webpack_require__(74);
  
  var _Alert2 = _interopRequireDefault(_Alert);
  
  var _ImgBox = __webpack_require__(89);
  
  var _ImgBox2 = _interopRequireDefault(_ImgBox);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {}, void 0);
  
  var AttachmentInput = function (_Component) {
    (0, _inherits3.default)(AttachmentInput, _Component);
  
    function AttachmentInput(props) {
      (0, _classCallCheck3.default)(this, AttachmentInput);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (AttachmentInput.__proto__ || (0, _getPrototypeOf2.default)(AttachmentInput)).call(this, props));
  
      _this.imgUpload = _this.imgUpload.bind(_this);
      _this.state = {
        errorMsg: '',
        type: 'test',
        value: '',
        src: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(AttachmentInput, [{
      key: 'imgUpload',
      value: function imgUpload(res) {
        if (res.error_code === 0) {
          this.setState({
            value: res.data.url
          });
          this.refs.hiddenInput.value = res.data.url;
        } else {
          this.setState({
            errorMsg: res.data.error_msg
          });
        }
      }
    }, {
      key: 'showImgSelect',
      value: function showImgSelect() {}
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Alert2.default, {
          msg: this.state.errorMsg
        }), (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, _react2.default.createElement('input', { type: 'hidden', ref: 'hiddenInput', name: this.props.name, defaultValue: this.props.defaultValue }), (0, _jsx3.default)('label', {
          className: 'col-sm-4 form-control-label text-xs-right'
        }, void 0, this.props.labelName, ':'), (0, _jsx3.default)('div', {
          className: 'col-sm-3'
        }, void 0, (0, _jsx3.default)(_ImgBox2.default, {
          src: this.state.value || this.props.defaultValue
        })), (0, _jsx3.default)('div', {
          className: 'col-sm-3'
        }, void 0, (0, _jsx3.default)(_UploadBtn2.default, {
          callback: this.imgUpload,
          position: this.props.position
        }), (0, _jsx3.default)('button', {
          hidden: true,
          className: 'btn btn-sm btn-info',
          onCick: this.showImgSelect,
          type: 'button'
        }, void 0, '\u9009\u62E9'))), _ref);
      }
    }]);
    return AttachmentInput;
  }(_react.Component);
  
  AttachmentInput.defaultProps = {
    required: false,
    type: 'text'
  };
  
  exports.default = (0, _reactRedux.connect)()(AttachmentInput);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('input', {
    type: 'hidden',
    name: 'position',
    value: 'test'
  });
  
  var UploadBtn = function (_Component) {
    (0, _inherits3.default)(UploadBtn, _Component);
  
    function UploadBtn(props) {
      (0, _classCallCheck3.default)(this, UploadBtn);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (UploadBtn.__proto__ || (0, _getPrototypeOf2.default)(UploadBtn)).call(this, props));
  
      _this.imgUpload = _this.imgUpload.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(UploadBtn, [{
      key: 'imgUpload',
      value: function imgUpload() {
        var _this2 = this;
  
        var uploadForm = this.refs.imgUploadForm;
        var formData = new FormData(uploadForm);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ATTACHMENT_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          return _this2.props.callback(json);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'form',
          { className: 'btn btn-sm btn-info btn-file', ref: 'imgUploadForm', method: 'post' },
          _ref,
          (0, _jsx3.default)('span', {}, void 0, this.props.labelName),
          (0, _jsx3.default)('input', {
            type: 'file',
            name: 'img_path',
            onChange: this.imgUpload
          })
        );
      }
    }]);
    return UploadBtn;
  }(_react.Component);
  
  UploadBtn.defaultProps = {
    labelName: '上传'
  };
  
  exports.default = (0, _reactRedux.connect)()(UploadBtn);

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('span', {}, void 0, '\u2014');
  
  var ImgBox = function (_Component) {
    (0, _inherits3.default)(ImgBox, _Component);
  
    function ImgBox(props) {
      (0, _classCallCheck3.default)(this, ImgBox);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ImgBox.__proto__ || (0, _getPrototypeOf2.default)(ImgBox)).call(this, props));
  
      _this.getSize = _this.getSize.bind(_this);
      _this.state = {
        width: 0,
        height: 0
      };
      return _this;
    }
  
    (0, _createClass3.default)(ImgBox, [{
      key: 'getSize',
      value: function getSize() {
        var img = new Image();
        var setState = this.setState.bind(this);
        var state = this.state;
        var src = this.url(this.props.src);
        if (!src) return;
        img.src = src;
        img.onload = function () {
          if (img.width === state.width && img.height === state.height) {
            return;
          }
          setState({
            width: img.width,
            height: img.height
          });
        };
      }
    }, {
      key: 'url',
      value: function url(path) {
        return path;
      }
    }, {
      key: 'render',
      value: function render() {
        this.getSize();
        if (!this.props.src || this.props.src === '') {
          return _ref;
        }
        return (0, _jsx3.default)('div', {
          className: 'img-pop',
          title: '\u70B9\u51FB\u67E5\u770B\u5927\u56FE',
          'data-url': this.url(this.props.src),
          style: { background: '#f5f5f5 center center no-repeat', backgroundImage: 'url("' + this.url(this.props.src) + '")', backgroundSize: 'contain' }
        }, void 0, (0, _jsx3.default)('div', {
          style: { paddingTop: '75%' }
        }, void 0), (0, _jsx3.default)('span', {
          className: 'img-pop-size'
        }, void 0, this.state.width, ' X ', this.state.height));
      }
    }]);
    return ImgBox;
  }(_react.Component);
  
  exports.default = ImgBox;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _reactTinymce = __webpack_require__(91);
  
  var _reactTinymce2 = _interopRequireDefault(_reactTinymce);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Editor = function (_Component) {
    (0, _inherits3.default)(Editor, _Component);
  
    function Editor(props) {
      (0, _classCallCheck3.default)(this, Editor);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Editor.__proto__ || (0, _getPrototypeOf2.default)(Editor)).call(this, props));
  
      _this.valueChange = _this.valueChange.bind(_this);
      _this.imgUpload = _this.imgUpload.bind(_this);
      _this.imgUploadClick = _this.imgUploadClick.bind(_this);
      _this.state = {
        value: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(Editor, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
        this.setState({
          value: props.value
        });
      }
    }, {
      key: 'valueChange',
      value: function valueChange(e) {
        var value = e.target.getContent();
        this.refs.hiddeninput.value = value;
      }
    }, {
      key: 'imgUploadClick',
      value: function imgUploadClick(fieldName) {
        var imgUploadForm = this.refs.imgUploadForm;
        this.fieldName = fieldName;
        $(imgUploadForm).find('input:file').click();
      }
    }, {
      key: 'imgUpload',
      value: function imgUpload() {
        var _this2 = this;
  
        var uploadForm = this.refs.imgUploadForm;
        var formData = new FormData(uploadForm);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ATTACHMENT_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            if (_this2.fieldName) {
              $('#' + _this2.fieldName).val(json.data.url);
            }
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var imgUploadClick = this.imgUploadClick;
        console.log('aa');
        return (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-sm-12'
        }, void 0, (0, _jsx3.default)(_reactTinymce2.default, {
          config: {
            height: 500,
            plugins: ['advlist autolink lists link image charmap preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table contextmenu paste code textcolor'],
            toolbar: 'forecolor backcolor | fontsizeselect | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            language: 'zh_CN',
            fontsize_formats: '12px 14px 16px 18px 24px 36px',
            image_dimensions: false,
            file_browser_callback_types: 'image',
            file_browser_callback: function file_browser_callback(fieldName) {
              imgUploadClick(fieldName);
            }
          },
          content: this.props.defaultValue,
          onChange: this.valueChange
        }), _react2.default.createElement('input', { type: 'hidden', name: this.props.name, ref: 'hiddeninput', defaultValue: this.props.defaultValue }), _react2.default.createElement(
          'form',
          { hidden: true, className: 'btn btn-sm btn-info btn-file', ref: 'imgUploadForm', method: 'post' },
          (0, _jsx3.default)('input', {
            type: 'hidden',
            name: 'position',
            value: this.props.position || 'default'
          }),
          (0, _jsx3.default)('input', {
            type: 'file',
            name: 'img_path',
            onChange: this.imgUpload
          })
        )));
      }
    }]);
    return Editor;
  }(_react.Component);
  
  Editor.defaultProps = {
    required: false
  };
  
  exports.default = (0, _reactRedux.connect)()(Editor);

/***/ }),
/* 91 */
/***/ (function(module, exports) {

  module.exports = require("react-tinymce");

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)("span", {
    className: "c-indicator"
  });
  
  var Radio = function (_Component) {
    (0, _inherits3.default)(Radio, _Component);
  
    function Radio(props) {
      (0, _classCallCheck3.default)(this, Radio);
      return (0, _possibleConstructorReturn3.default)(this, (Radio.__proto__ || (0, _getPrototypeOf2.default)(Radio)).call(this, props));
    }
  
    (0, _createClass3.default)(Radio, [{
      key: "render",
      value: function render() {
        return (0, _jsx3.default)("label", {
          className: "c-input c-radio"
        }, void 0, (0, _jsx3.default)("input", {
          checked: this.props.checked,
          name: this.props.name,
          value: this.props.value,
          type: "radio",
          onChange: this.props.onChange
        }), _ref, this.props.labelName);
      }
    }]);
    return Radio;
  }(_react.Component);
  
  Radio.defaultProps = {
    checked: false,
    onChange: false
  };
  
  exports.default = Radio;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Status = function (_Component) {
    (0, _inherits3.default)(Status, _Component);
  
    function Status(props) {
      (0, _classCallCheck3.default)(this, Status);
      return (0, _possibleConstructorReturn3.default)(this, (Status.__proto__ || (0, _getPrototypeOf2.default)(Status)).call(this, props));
    }
  
    (0, _createClass3.default)(Status, [{
      key: 'render',
      value: function render() {
        var status = this.props.status;
        var className = 'text-warning';
        var des = '下线';
        if (status) {
          className = 'text-success';
          des = '上线';
        }
        return (0, _jsx3.default)('span', {
          className: className
        }, void 0, des);
      }
    }]);
    return Status;
  }(_react.Component);
  
  exports.default = Status;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Popover = function (_Component) {
    (0, _inherits3.default)(Popover, _Component);
  
    function Popover(props) {
      (0, _classCallCheck3.default)(this, Popover);
      return (0, _possibleConstructorReturn3.default)(this, (Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call(this, props));
    }
  
    (0, _createClass3.default)(Popover, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        $(this.refs.popover).popover({
          html: true,
          placement: 'top'
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'button',
          {
            ref: 'popover',
            title: this.props.title,
            'data-content': this.props.content + ' ',
            className: 'btn btn-sm btn-info-outline'
          },
          this.props.name
        );
      }
    }]);
    return Popover;
  }(_react.Component);
  
  Popover.defaultProps = {
    name: '查看'
  };
  
  exports.default = Popover;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _extends2 = __webpack_require__(66);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('span', {
    className: 'sr-only'
  }, void 0, 'Previous');
  
  var _ref2 = (0, _jsx3.default)('span', {
    className: 'sr-only'
  }, void 0, 'Next');
  
  var Pagination = function (_Component) {
    (0, _inherits3.default)(Pagination, _Component);
  
    function Pagination(props) {
      (0, _classCallCheck3.default)(this, Pagination);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Pagination.__proto__ || (0, _getPrototypeOf2.default)(Pagination)).call(this, props));
  
      _this.jump = _this.jump.bind(_this);
      _this.state = {
        currentPage: _this.props.currentPage,
        lastPage: _this.props.lastPage
      };
      return _this;
    }
  
    (0, _createClass3.default)(Pagination, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.currentPage !== this.state.currentPage) {
          this.setState({
            currentPage: nextProps.currentPage
          });
        }
        if (nextProps.lastPage !== this.state.lastPage) {
          this.setState({
            lastPage: nextProps.lastPage
          });
        }
      }
    }, {
      key: 'jump',
      value: function jump(e) {
        var page = e.target.dataset.page;
        if (this.props.unurl) {
          return this.props.onClick(page);
        }
        var location = _history2.default.getCurrentLocation();
        _history2.default.push((0, _extends3.default)({}, location, { query: (0, _assign2.default)({}, location.query, { page: page }) }));
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        if (!this.state.currentPage || !this.state.lastPage || this.state.lastPage <= 1) {
          return false;
        }
        var _state = this.state,
            currentPage = _state.currentPage,
            lastPage = _state.lastPage;
  
        var arr = [];
        for (var i = 0; i < lastPage; i++) {
          if (i < currentPage - 3 && i !== 0 || i > currentPage + 1 && i !== lastPage - 1) {
            continue;
          }
          arr.push(i + 1);
        }
        return (0, _jsx3.default)('nav', {}, void 0, (0, _jsx3.default)('ul', {
          className: 'pagination pagination-sm'
        }, void 0, (0, _jsx3.default)('li', {
          className: 'page-item'
        }, void 0, (0, _jsx3.default)('button', {
          className: 'page-link',
          onClick: this.jump,
          'data-page': currentPage > 1 ? currentPage - 1 : 1,
          'aria-label': 'Previous'
        }, void 0, (0, _jsx3.default)('span', {
          'aria-hidden': 'true',
          'data-page': currentPage > 1 ? currentPage - 1 : 1
        }, void 0, '\xAB'), _ref)), arr.map(function (index) {
          return (0, _jsx3.default)('li', {
            className: currentPage === index ? 'page-item active' : 'page-item'
          }, void 0, (0, _jsx3.default)('button', {
            onClick: _this2.jump,
            className: 'page-link',
            'data-page': index
          }, void 0, index));
        }), (0, _jsx3.default)('li', {
          className: 'page-item'
        }, void 0, (0, _jsx3.default)('button', {
          className: 'page-link',
          onClick: this.jump,
          'data-page': currentPage < lastPage ? currentPage + 1 : lastPage,
          'aria-label': 'Next'
        }, void 0, (0, _jsx3.default)('span', {
          'aria-hidden': 'true',
          'data-page': currentPage < lastPage ? currentPage + 1 : lastPage
        }, void 0, '\xBB'), _ref2))));
      }
    }]);
    return Pagination;
  }(_react.Component);
  
  Pagination.defaultProps = {
    unurl: false
  };
  
  exports.default = Pagination;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Success = function (_Component) {
    (0, _inherits3.default)(Success, _Component);
  
    function Success(props) {
      (0, _classCallCheck3.default)(this, Success);
      return (0, _possibleConstructorReturn3.default)(this, (Success.__proto__ || (0, _getPrototypeOf2.default)(Success)).call(this, props));
    }
  
    (0, _createClass3.default)(Success, [{
      key: 'render',
      value: function render() {
        var msg = this.props.msg;
        var hidden = false;
        if (typeof msg !== 'string' || msg === '') {
          hidden = true;
        }
        return (0, _jsx3.default)('div', {
          hidden: hidden,
          className: 'row',
          role: 'alert'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-sm-12'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'alert alert-success'
        }, void 0, msg)));
      }
    }]);
    return Success;
  }(_react.Component);
  
  Success.defaultProps = {
    msg: ''
  };
  
  exports.default = Success;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)("div", {
    className: "input-group-addon"
  }, void 0, "%");
  
  var PercentInput = function (_Component) {
    (0, _inherits3.default)(PercentInput, _Component);
  
    function PercentInput(props) {
      (0, _classCallCheck3.default)(this, PercentInput);
      return (0, _possibleConstructorReturn3.default)(this, (PercentInput.__proto__ || (0, _getPrototypeOf2.default)(PercentInput)).call(this, props));
    }
  
    (0, _createClass3.default)(PercentInput, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.value) {
          this.refs.input.value = this.props.value;
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.value && nextProps.value !== this.props.value) {
          this.refs.input.value = nextProps.value;
        }
      }
    }, {
      key: "render",
      value: function render() {
        return (0, _jsx3.default)("div", {
          className: "form-group row"
        }, void 0, (0, _jsx3.default)("label", {
          className: "col-sm-4 form-control-label text-xs-right"
        }, void 0, this.props.labelName, ":"), (0, _jsx3.default)("div", {
          className: "col-sm-6 input-group"
        }, void 0, _react2.default.createElement("input", {
          ref: "input",
          placeholder: this.props.placeholder,
          required: this.props.required,
          name: this.props.name,
          type: this.props.type,
          className: "form-control",
          defaultValue: this.props.defaultValue
        }), _ref));
      }
    }]);
    return PercentInput;
  }(_react.Component);
  
  PercentInput.defaultProps = {
    required: false,
    type: 'text'
  };
  
  exports.default = PercentInput;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _tools = __webpack_require__(73);
  
  var _AddModal = __webpack_require__(99);
  
  var _AddModal2 = _interopRequireDefault(_AddModal);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('option', {
    value: '20'
  }, void 0, '20');
  
  var _ref2 = (0, _jsx3.default)('option', {
    value: '50'
  }, void 0, '50');
  
  var _ref3 = (0, _jsx3.default)('option', {
    value: '80'
  }, void 0, '80');
  
  var _ref4 = (0, _jsx3.default)('i', {
    className: 'fa fa-plus'
  }, void 0, '\u6DFB\u52A0');
  
  var _ref5 = (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C');
  
  var DataTable = function (_Component) {
    (0, _inherits3.default)(DataTable, _Component);
  
    function DataTable(props) {
      (0, _classCallCheck3.default)(this, DataTable);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (DataTable.__proto__ || (0, _getPrototypeOf2.default)(DataTable)).call(this, props));
  
      _this.list = _this.list.bind(_this);
      _this.changePage = _this.changePage.bind(_this);
      _this.changeLength = _this.changeLength.bind(_this);
      _this.searchFocus = _this.searchFocus.bind(_this);
      _this.changeSearch = _this.changeSearch.bind(_this);
      _this.showUpdateModel = _this.showUpdateModel.bind(_this);
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.searchChange = _this.searchChange.bind(_this);
      _this.changeOrder = _this.changeOrder.bind(_this);
      _this.delete = _this.delete.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.state = _this.initState(props);
      return _this;
    }
  
    (0, _createClass3.default)(DataTable, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.list();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;
  
        if (nextProps.config.timeStamp !== this.props.config.timeStamp) {
          this.setState(this.initState(nextProps), function () {
            _this2.list();
          });
        }
      }
    }, {
      key: 'initState',
      value: function initState(props) {
        return (0, _assign2.default)({
          draw: 0
        }, props.config);
      }
    }, {
      key: 'list',
      value: function list() {
        var queryObj = {};
        var columns = this.state.columns;
        var order = this.state.order;
        var draw = this.state.draw + 1;
        var customSearch = this.state.customSearch || false;
        var onlyTrashed = this.state.onlyTrashed || false;
        var withs = this.state.withs || false;
        queryObj.draw = draw;
        for (var i = 0; i < columns.length; i++) {
          queryObj['columns[' + i + '][data]'] = columns[i].name;
          queryObj['columns[' + i + '][name]'] = columns[i].name;
          queryObj['columns[' + i + '][searchable]'] = columns[i].searchable.toString();
          queryObj['columns[' + i + '][orderable]'] = columns[i].orderable.toString();
          queryObj['columns[' + i + '][search][value]'] = columns[i].search.value;
          queryObj['columns[' + i + '][search][regex]'] = columns[i].search.regex.toString();
        }
        if (customSearch) {
          queryObj['customSearch[name]'] = customSearch.name;
          queryObj['customSearch[pattern]'] = customSearch.pattern;
          queryObj['customSearch[value]'] = customSearch.value;
        }
        if (onlyTrashed) {
          queryObj.onlyTrashed = 1;
        }
        if (withs) {
          for (var _i = 0; _i < withs.length; _i++) {
            queryObj['withs[' + _i + ']'] = withs[_i];
          }
        }
        queryObj['order[0][column]'] = order.column;
        queryObj['order[0][dir]'] = order.dir;
        queryObj.start = this.state.start;
        queryObj.length = this.state.length;
        queryObj['search[value]'] = this.state.search.value;
        queryObj['search[regex]'] = this.state.search.regex.toString();
        queryObj._ = new Date().getTime();
  
        this.setState({
          draw: draw
        });
        var request = {
          type: this.state.listType,
          queryObj: queryObj
        };
        if (typeof this.state.identify !== 'undefined') {
          request.key = this.state.identify;
        }
        this.props.dispatch((0, _omg.fetchAction)(request));
      }
    }, {
      key: 'changePage',
      value: function changePage(page) {
        var _this3 = this;
  
        var preState = this.state;
        this.setState({
          start: preState.length * (page - 1)
        }, function () {
          return _this3.list();
        });
      }
    }, {
      key: 'changeLength',
      value: function changeLength(e) {
        var _this4 = this;
  
        var length = e.currentTarget.value;
        this.setState({
          length: length,
          start: 0
        }, function () {
          return _this4.list();
        });
      }
    }, {
      key: 'searchFocus',
      value: function searchFocus(e) {
        e.currentTarget.focus();
        e.currentTarget.select();
      }
    }, {
      key: 'searchChange',
      value: function searchChange(e) {
        e.preventDefault();
        var search = this.state.search;
        var value = e.target.value;
        search.value = value;
        this.setState({
          search: search,
          start: 0
        });
      }
    }, {
      key: 'changeOrder',
      value: function changeOrder(e) {
        var _this5 = this;
  
        var index = +e.currentTarget.dataset.index;
        var order = this.state.order;
        if (order.column === index) {
          order.dir = order.dir === 'asc' ? 'desc' : 'asc';
        } else {
          order.column = index;
          order.dir = 'desc';
        }
        this.setState({
          order: order
        }, function () {
          _this5.list();
        });
      }
    }, {
      key: 'changeSearch',
      value: function changeSearch(e) {
        e.preventDefault();
        this.list();
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          submit: this.add,
          columns: this.state.columns,
          errorMsg: this.state.addErrorMsg
        })));
      }
    }, {
      key: 'showUpdateModel',
      value: function showUpdateModel(e) {
        var index = e.target.dataset.index;
        var omg = this.props.omg;
  
        var dtList = {};
        if (typeof this.state.identify === 'undefined') {
          dtList = omg[this.state.listType] || {};
        } else {
          var tempDtList = omg[this.state.listType] || [];
          dtList = tempDtList[this.state.identify] || {};
        }
        var items = dtList.data || [];
        var preItem = items[index] || {};
        var columns = this.state.columns;
        var item = {};
        for (var i = 0; i < columns.length; i++) {
          item[columns[i].name] = preItem[i];
        }
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          update: true,
          item: item,
          columns: this.state.columns,
          submit: this.update,
          errorMsg: this.state.addErrorMsg
        })));
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this6 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: this.state.addType,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this6.list();
            _this6.props.dispatch((0, _modal.hideModal)(true));
          } else {
            _this6.list();
            _this6.setState({
              addErrorMsg: json.data.error_msg
            });
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this7 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: this.state.updateType,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this7.props.dispatch((0, _modal.hideModal)(true));
            _this7.list();
          } else {
            _this7.props.dispatch((0, _modal.hideModal)(true));
            _this7.list();
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'delete',
      value: function _delete(e) {
        var _this8 = this;
  
        var id = e.currentTarget.dataset.id;
        if (!confirm('\u786E\u8BA4\u5220\u9664 ID:' + id + ' \u5417?')) {
          return;
        }
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: this.state.deleteType,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this8.list();
          } else {
            _this8.setState({ errorMsg: json.error_msg });
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this9 = this;
  
        var omg = this.props.omg;
        var dtList = {};
        if (typeof this.state.identify === 'undefined') {
          dtList = omg[this.state.listType] || {};
        } else {
          var tempDtList = omg[this.state.listType] || [];
          dtList = tempDtList[this.state.identify] || {};
        }
        var items = dtList.data || [];
        var filterNum = dtList.recordsFiltered || 0;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
          className: 'card clearfix'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'card-block clearfix'
        }, void 0, (0, _jsx3.default)('h4', {
          className: 'card-title'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'pull-left'
        }, void 0, this.state.title, (0, _jsx3.default)('span', {
          className: 'total'
        }, void 0, '(', this.state.start + items.length, '/', filterNum, ')')), (0, _jsx3.default)('div', {
          hidden: filterNum <= this.state.length,
          className: 'pull-left m-l-1'
        }, void 0, (0, _jsx3.default)('select', {
          className: 'custom-select',
          defaultValue: this.state.length,
          onChange: this.changeLength
        }, void 0, _ref, _ref2, _ref3)), (0, _jsx3.default)('div', {
          className: 'pull-left'
        }, void 0, (0, _jsx3.default)(_tools.Pagination, {
          onClick: this.changePage,
          currentPage: parseInt(this.state.start / this.state.length, 10) + 1,
          lastPage: Math.ceil(filterNum / this.state.length),
          unurl: true
        })), (0, _jsx3.default)('button', {
          onClick: this.showAddModal,
          className: 'btn btn-sm btn-info pull-right'
        }, void 0, _ref4), (0, _jsx3.default)('form', {
          className: 'form-inline m-x-1 pull-right',
          onSubmit: this.changeSearch
        }, void 0, (0, _jsx3.default)('input', {
          className: 'form-control form-control-sm mr-sm-2',
          type: 'text',
          value: this.state.search.value,
          onChange: this.searchChange,
          onClick: this.searchFocus,
          onBlur: this.changeSearch,
          placeholder: '\u641C\u7D22 \u21AB'
        })))), (0, _jsx3.default)('table', {
          className: 'table table-bordered m-b-0 table-hover data-table'
        }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, this.state.columns.map(function (item, index) {
          return (0, _jsx3.default)('th', {
            'data-index': index,
            onClick: _this9.changeOrder
          }, 'th_' + index, item.cname, (0, _jsx3.default)('span', {
            className: 'pull-right arrow',
            disabled: !(_this9.state.order.column === index && _this9.state.order.dir === 'asc')
          }, void 0, '\u2191'), (0, _jsx3.default)('span', {
            disabled: !(_this9.state.order.column === index && _this9.state.order.dir === 'desc'),
            className: 'pull-right arrow'
          }, void 0, '\u2193'));
        }), _ref5)), (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          var tempItem = {};
          return (0, _jsx3.default)('tr', {}, 'item_' + index, item.map(function (value, index2) {
            var columns = _this9.state.columns[index2] || {};
            tempItem[columns.name] = value;
            switch (columns.tableType) {
              case 'img_box':
                return (0, _jsx3.default)('td', {}, 'fileld_' + index + '_' + index2, (0, _jsx3.default)(_tools.ImgBox, {
                  src: value
                }));
              case 'object':
                return (0, _jsx3.default)('td', {}, 'fileld_' + index + '_' + index2, columns.tableShow && columns.tableShow(value));
              default:
                return (0, _jsx3.default)('td', {}, 'fileld_' + index + '_' + index2, value);
            }
          }), (0, _jsx3.default)('td', {}, void 0, typeof _this9.state.getBtns === 'undefined' ? false : _this9.state.getBtns(tempItem, _this9.list), (0, _jsx3.default)('button', {
            className: 'btn btn-info-outline btn-sm',
            hidden: _this9.state.forbiddenDefaultBtns || false,
            'data-index': index,
            onClick: _this9.showUpdateModel
          }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
            className: 'btn btn-danger-outline btn-sm',
            hidden: _this9.state.forbiddenDefaultBtns || _this9.state.noDelete || false,
            'data-index': index,
            'data-id': item[0],
            onClick: _this9.delete
          }, void 0, '\u5220\u9664')));
        })))));
      }
    }]);
    return DataTable;
  }(_react.Component);
  
  DataTable.defaultProps = {
    title: '列表'
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    return {
      omg: omg
    };
  })(DataTable);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {
    className: 'form-group row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-sm-offset-4 col-sm-8 col-md-6'
  }, void 0, (0, _jsx3.default)('button', {
    type: 'submit',
    className: 'btn btn-primary'
  }, void 0, '\u63D0\u4EA4')));
  
  var AddModal = function (_Component) {
    (0, _inherits3.default)(AddModal, _Component);
  
    function AddModal(props) {
      (0, _classCallCheck3.default)(this, AddModal);
      return (0, _possibleConstructorReturn3.default)(this, (AddModal.__proto__ || (0, _getPrototypeOf2.default)(AddModal)).call(this, props));
    }
  
    (0, _createClass3.default)(AddModal, [{
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        return (0, _jsx3.default)(_tools.Modal, {
          title: this.props.update ? '编辑' : '添加'
        }, void 0, (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, this.props.columns.map(function (filed, index) {
          var ret = false;
          var type = 'none';
          if (_this2.props.update && filed.updateType) {
            type = filed.updateType;
          } else {
            type = filed.type;
          }
          switch (type) {
            case 'hidden':
              ret = (0, _jsx3.default)('input', {
                type: 'hidden',
                name: filed.name,
                defaultValue: _this2.props.item[filed.name] || ''
              }, 'filed_' + index);
              break;
            case 'text':
              ret = (0, _jsx3.default)(_tools.Input, {
                labelName: filed.cname,
                name: filed.name,
                defaultValue: _this2.props.item[filed.name] || ''
              }, 'filed_' + index);
              break;
            case 'textarea':
              ret = (0, _jsx3.default)(_tools.Textarea, {
                labelName: filed.cname,
                name: filed.name,
                defaultValue: _this2.props.item[filed.name] || ''
              }, 'filed_' + index);
              break;
            case 'attachment':
              ret = (0, _jsx3.default)(_tools.AttachmentInput, {
                labelName: filed.cname,
                name: filed.name,
                defaultValue: _this2.props.item[filed.name] || ''
              }, 'filed_' + index);
              break;
            case 'select':
              ret = (0, _jsx3.default)(_tools.Select, {
                labelName: filed.cname,
                name: filed.name,
                options: filed.getOptions(),
                defaultValue: _this2.props.item[filed.name] || ''
              }, 'filed_' + index);
              break;
            case 'check':
              ret = (0, _jsx3.default)(_tools.Checkbox, {
                labelName: filed.cname,
                name: filed.name,
                checked: _this2.props.item[filed.name] || ''
              }, 'filed_' + index);
              break;
            default:
              break;
          }
          return ret;
        }), _ref));
      }
    }]);
    return AddModal;
  }(_react.Component);
  
  AddModal.defaultProps = {
    item: {},
    update: false
  };
  
  exports.default = (0, _reactRedux.connect)()(AddModal);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var StatusBar = function (_Component) {
    (0, _inherits3.default)(StatusBar, _Component);
  
    function StatusBar(props) {
      (0, _classCallCheck3.default)(this, StatusBar);
      return (0, _possibleConstructorReturn3.default)(this, (StatusBar.__proto__ || (0, _getPrototypeOf2.default)(StatusBar)).call(this, props));
    }
  
    (0, _createClass3.default)(StatusBar, [{
      key: 'render',
      value: function render() {
        var action = this.props.action || {};
        return (0, _jsx3.default)('div', {
          id: 'status-bar',
          hidden: !action || action.status === _constants.FETCH_SUCCESS
        }, void 0, (0, _jsx3.default)('span', {
          hidden: action.status !== _constants.FETCH_REQUEST
        }, void 0, '\u8BF7\u6C42\u4E2D:', action.type), (0, _jsx3.default)('span', {
          className: 'bg-danger',
          hidden: action.status !== _constants.FETCH_ERROR
        }, void 0, '[', action.type, ']:', action.msg));
      }
    }]);
    return StatusBar;
  }(_react.Component);
  
  StatusBar.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var logs = omg.logs || [];
    var action = omg.lastAction || {};
    return {
      logs: logs,
      action: action
    };
  })(StatusBar);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Activity = __webpack_require__(102);
  
  var _Activity2 = _interopRequireDefault(_Activity);
  
  var _ActivityList = __webpack_require__(139);
  
  var _ActivityList2 = _interopRequireDefault(_ActivityList);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_ActivityList2.default, {});
  
  exports.default = {
  
    path: '/Activity',
    children: [{
      path: '/',
      action: function action() {
        return _ref;
      }
    }, {
      path: '/id/:activityId',
      action: function action(context) {
        var activityId = +context.params.activityId;
        return (0, _jsx3.default)(_Activity2.default, {
          activityId: activityId
        });
      }
    }, {
      path: '/:typeId',
      action: function action(context) {
        var typeId = +context.params.typeId;
        return (0, _jsx3.default)(_ActivityList2.default, {
          typeId: typeId,
          page: +context.query.page || 1
        });
      }
    }],
    action: function action(_ref2) {
      var _this = this;
  
      var next = _ref2.next,
          context = _ref2.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.setTitle('运营后台 | 活动管理');
                _context.next = 3;
                return next();
  
              case 3:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _constants = __webpack_require__(59);
  
  var _RuleAddModal = __webpack_require__(103);
  
  var _RuleAddModal2 = _interopRequireDefault(_RuleAddModal);
  
  var _tools = __webpack_require__(73);
  
  var _ActivityAddModal = __webpack_require__(122);
  
  var _ActivityAddModal2 = _interopRequireDefault(_ActivityAddModal);
  
  var _AwardAddModal = __webpack_require__(123);
  
  var _AwardAddModal2 = _interopRequireDefault(_AwardAddModal);
  
  var _InviteAwardAddModal = __webpack_require__(138);
  
  var _InviteAwardAddModal2 = _interopRequireDefault(_InviteAwardAddModal);
  
  var _omg2 = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('i', {
    className: 'fa fa-edit'
  }, void 0, '\u7F16\u8F91');
  
  var _ref2 = (0, _jsx3.default)('i', {
    className: 'fa fa-plus'
  }, void 0, '\u89C4\u5219');
  
  var _ref3 = (0, _jsx3.default)('i', {
    className: 'fa fa-plus'
  }, void 0, '\u5956\u54C1');
  
  var _ref4 = (0, _jsx3.default)('i', {
    className: 'fa fa-plus'
  }, void 0, '\u5956\u54C1');
  
  var _ref5 = (0, _jsx3.default)('li', {
    className: 'breadcrumb-item'
  }, void 0, (0, _jsx3.default)(_tools.Link, {
    to: '/'
  }, void 0, '\u9996\u9875'));
  
  var _ref6 = (0, _jsx3.default)('li', {
    className: 'breadcrumb-item'
  }, void 0, (0, _jsx3.default)(_tools.Link, {
    to: '/activity/1'
  }, void 0, '\u6D3B\u52A8\u5217\u8868'));
  
  var _ref7 = (0, _jsx3.default)('div', {
    className: 'm-b-1 clearfix'
  });
  
  var _ref8 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '\u89C4\u5219\u7C7B\u578B'), (0, _jsx3.default)('th', {}, void 0, '\u89C4\u5219\u8BE6\u60C5'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var _ref9 = (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1\u7C7B\u578B');
  
  var _ref10 = (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1ID');
  
  var _ref11 = (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1\u540D\u79F0');
  
  var _ref12 = (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C');
  
  var _ref13 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1\u7C7B\u578B'), (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1ID'), (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var Activity = function (_Component) {
    (0, _inherits3.default)(Activity, _Component);
  
    function Activity(props) {
      (0, _classCallCheck3.default)(this, Activity);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Activity.__proto__ || (0, _getPrototypeOf2.default)(Activity)).call(this, props));
  
      _this.showAddRuleModal = _this.showAddRuleModal.bind(_this);
      _this.showAddAwardModal = _this.showAddAwardModal.bind(_this);
      _this.showAddInviteAwardModal = _this.showAddInviteAwardModal.bind(_this);
      _this.showUpdateActivity = _this.showUpdateActivity.bind(_this);
      _this.freshRuleList = _this.freshRuleList.bind(_this);
      _this.freshAwardList = _this.freshAwardList.bind(_this);
      _this.freshActivityInfo = _this.freshActivityInfo.bind(_this);
      _this.ruleDel = _this.ruleDel.bind(_this);
      _this.awardDel = _this.awardDel.bind(_this);
      _this.inviteAwardDel = _this.inviteAwardDel.bind(_this);
      _this.addAward = _this.addAward.bind(_this);
      _this.addInviteAward = _this.addInviteAward.bind(_this);
      _this.handleRule = _this.handleRule.bind(_this);
      _this.updateActivity = _this.updateActivity.bind(_this);
  
      var awardTypes = (0, _omg2.getConfig)('awardTypes');
      var activityTriggers = (0, _omg2.getConfig)('activityTriggers');
      var frequencyTypes = (0, _omg2.getConfig)('frequencyTypes');
      var ruleTypes = (0, _omg2.getConfig)('ruleTypes');
      var ruleFileds = (0, _omg2.getConfig)('ruleFileds');
      _this.state = {
        awardTypes: awardTypes,
        activityTriggers: activityTriggers,
        frequencyTypes: frequencyTypes,
        ruleTypes: ruleTypes,
        ruleFileds: ruleFileds,
        addAwardErrorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(Activity, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.freshRuleList();
        this.freshActivityInfo();
        this.freshAwardList();
        this.freshInviteAwardList();
      }
      // 刷新活动信息
  
    }, {
      key: 'freshActivityInfo',
      value: function freshActivityInfo() {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACTIVITY_INFO,
          suffix: '/' + this.props.activityId,
          key: this.props.activityId
        }));
      }
      // 刷新规则
  
    }, {
      key: 'freshRuleList',
      value: function freshRuleList() {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACTIVITY_RULE_LIST,
          suffix: '/' + this.props.activityId,
          key: this.props.activityId
        }));
      }
      // 刷新奖品
  
    }, {
      key: 'freshAwardList',
      value: function freshAwardList() {
        var formData = new FormData();
        formData.append('activity_id', this.props.activityId);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACTIVITY_AWARD_LIST,
          formData: formData,
          method: 'POST',
          key: this.props.activityId
        }));
      }
      // 刷新邀请人奖品
  
    }, {
      key: 'freshInviteAwardList',
      value: function freshInviteAwardList() {
        var formData = new FormData();
        formData.append('activity_id', this.props.activityId);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACTIVITY_INVITE_AWARD_LIST,
          formData: formData,
          method: 'POST',
          key: this.props.activityId
        }));
      }
      // 更新活动
  
    }, {
      key: 'updateActivity',
      value: function updateActivity(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACTIVITY_PUT,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.props.dispatch((0, _modal.hideModal)(true));
            _this2.freshActivityInfo();
          }
        });
      }
      // 更新活动
  
    }, {
      key: 'showUpdateActivity',
      value: function showUpdateActivity() {
        if (!this.activity || !this.activity.id) {
          alert('获取活动详情失败');
          return;
        }
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_ActivityAddModal2.default, {
          item: this.activity,
          update: true,
          submit: this.updateActivity
        })));
      }
      // 显示添加规则
  
    }, {
      key: 'showAddRuleModal',
      value: function showAddRuleModal() {
        if (!this.activity || !this.activity.id) {
          alert('获取活动详情失败');
          return;
        }
        var ruleAddModal = (0, _jsx3.default)(_RuleAddModal2.default, {
          item: this.activity,
          callback: this.freshRuleList
        });
        this.props.dispatch((0, _modal.showModal)(ruleAddModal));
      }
      // 显示添加奖品
  
    }, {
      key: 'showAddAwardModal',
      value: function showAddAwardModal(e) {
        if (!this.activity || !this.activity.id) {
          alert('获取活动详情失败');
          return;
        }
        var awardView = (0, _jsx3.default)(_AwardAddModal2.default, {
          submit: this.addAward,
          item: this.activity
        });
        this.props.dispatch((0, _modal.showModal)(awardView));
      }
  
      // 显示添加邀请人奖品
  
    }, {
      key: 'showAddInviteAwardModal',
      value: function showAddInviteAwardModal(e) {
        var awardRule = e.target.dataset.awardRule;
        var awardView = (0, _jsx3.default)(_InviteAwardAddModal2.default, {
          submit: this.addInviteAward,
          awardRule: awardRule,
          activityId: this.props.activityId
        });
        this.props.dispatch((0, _modal.showModal)(awardView));
      }
      // 删除规则
  
    }, {
      key: 'ruleDel',
      value: function ruleDel(e) {
        var _this3 = this;
  
        var id = $(e.target).data('id');
        if (!confirm('\u786E\u8BA4\u5220\u9664ID: ' + id + '\u5417?')) {
          return;
        }
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.commonFetch)(_constants.ACTIVITY_RULE_DEL, 'POST', formData)).then(function () {
          return _this3.freshRuleList();
        });
      }
      // 删除奖品
  
    }, {
      key: 'awardDel',
      value: function awardDel(e) {
        var _this4 = this;
  
        var id = $(e.target).data('id');
        if (!confirm('\u786E\u8BA4\u5220\u9664ID: ' + id + '\u5417?')) {
          return;
        }
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.commonFetch)(_constants.ACTIVITY_AWARD_DEL, 'POST', formData)).then(function () {
          return _this4.freshAwardList();
        });
      }
      // 删除邀请人奖品
  
    }, {
      key: 'inviteAwardDel',
      value: function inviteAwardDel(e) {
        var _this5 = this;
  
        var id = $(e.target).data('id');
        if (!confirm('\u786E\u8BA4\u5220\u9664ID: ' + id + '\u5417?')) {
          return;
        }
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.commonFetch)(_constants.ACTIVITY_INVITE_AWARD_DEL, 'POST', formData)).then(function () {
          return _this5.freshInviteAwardList();
        });
      }
      // 添加奖品
  
    }, {
      key: 'addAward',
      value: function addAward(e) {
        var _this6 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACTIVITY_AWARD_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this6.props.dispatch((0, _modal.hideModal)());
            _this6.freshAwardList();
          }
        });
      }
      // 添加邀请人奖品
  
    }, {
      key: 'addInviteAward',
      value: function addInviteAward(e) {
        var _this7 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
  
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACTIVITY_INVITE_AWARD_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this7.props.dispatch((0, _modal.hideModal)());
            _this7.freshInviteAwardList();
          }
        });
      }
      // 优化规则显示
  
    }, {
      key: 'handleRule',
      value: function handleRule(type, value) {
        switch (type) {
          case 'isfirst':
            if (+value === 0) {
              return '不限';
            } else if (+value === 1) {
              return '首次';
            } else if (+value === 2) {
              return '非首次';
            }
          case 'is_invite':
            return +value === 1 ? '是' : '否';
          case 'type':
            return (0, _omg2.getConfig)('castDateTypes', +value);
          case 'min_payment':
          case 'max_payment':
          case 'min_recharge':
          case 'max_recharge':
          case 'min_cast':
          case 'max_cast':
          case 'min_recharge_all':
          case 'max_recharge_all':
          case 'min_cast_all':
          case 'max_cast_all':
            return value + ' \u5143';
          case 'user_level':
            return (0, _omg2.getConfig)('userLevels', value);
          default:
            return value;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this8 = this;
  
        var activity = this.props.activityList[this.props.activityId] || {};
        this.activity = activity;
  
        var awards = this.props.awardList[this.props.activityId] || [];
        var totalPriority = awards.reduce(function (previous, current) {
          return { priority: previous.priority + current.priority };
        }, { priority: 0 });
        var inviteAwards = this.props.inviteAwardList[this.props.activityId] || [];
        var rules = this.props.ruleList[this.props.activityId] || [];
        var updateActivityBtn = (0, _jsx3.default)('button', {
          onClick: this.showUpdateActivity,
          className: 'btn btn-sm btn-info pull-right'
        }, void 0, _ref);
        var addRuleBtn = (0, _jsx3.default)('button', {
          onClick: this.showAddRuleModal,
          className: 'btn btn-sm btn-info pull-right'
        }, void 0, _ref2);
        var addAwardBtn = (0, _jsx3.default)('button', {
          type: 'button',
          onClick: this.showAddAwardModal,
          className: 'btn btn-sm btn-info pull-right'
        }, void 0, _ref3);
        var addInviteAwardBtn = (0, _jsx3.default)('button', {
          type: 'button',
          onClick: this.showAddInviteAwardModal,
          className: 'btn btn-sm btn-info pull-right'
        }, void 0, _ref4);
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('ol', {
          className: 'breadcrumb'
        }, void 0, _ref5, _ref6, (0, _jsx3.default)('li', {
          className: 'breadcrumb-item active'
        }, void 0, activity.name || '—')), (0, _jsx3.default)(_tools.Card, {
          title: '\u6D3B\u52A8\u8BE6\u60C5',
          btn: updateActivityBtn
        }, void 0, (0, _jsx3.default)(_tools.Text, {
          name: '\u540D\u79F0',
          value: activity.name
        }), (0, _jsx3.default)(_tools.Text, {
          name: '\u522B\u540D',
          value: activity.alias_name || '—'
        }), (0, _jsx3.default)(_tools.Text, {
          name: 'ID',
          value: activity.id
        }), (0, _jsx3.default)(_tools.Text, {
          name: '\u72B6\u6001',
          value: +activity.enable ? '上线' : '下线'
        }), (0, _jsx3.default)(_tools.Text, {
          name: '\u53D1\u5956\u9891\u6B21',
          value: this.state.frequencyTypes[activity.frequency]
        }), (0, _jsx3.default)(_tools.Text, {
          name: '\u53D1\u5956\u89C4\u5219',
          value: (0, _omg2.getConfig)('sendAwardTypes', activity.award_rule || '—')
        }), (0, _jsx3.default)(_tools.Text, {
          name: '\u5F00\u59CB\u65F6\u95F4',
          value: activity.start_at || '不限'
        }), (0, _jsx3.default)(_tools.Text, {
          name: '\u7ED3\u675F\u65F6\u95F4',
          value: activity.end_at || '不限'
        }), (0, _jsx3.default)(_tools.Text, {
          name: '\u89E6\u53D1\u7C7B\u578B',
          value: this.state.activityTriggers[activity.trigger_type]
        }), (0, _jsx3.default)(_tools.Text, {
          name: '\u6D3B\u52A8\u8BF4\u660E',
          value: activity.des || '—'
        }), (0, _jsx3.default)(_tools.Text, {
          name: '\u5F53\u524D\u53C2\u4E0E\u4EBA\u6570',
          value: activity.join_num || '—'
        }), _ref7), (0, _jsx3.default)(_tools.Card, {
          title: '\u6D3B\u52A8\u89C4\u5219',
          btn: addRuleBtn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, _ref8, (0, _jsx3.default)('tbody', {}, void 0, rules.map(function (rule) {
          return (0, _jsx3.default)('tr', {}, rule.id, (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('allRuleTypes', rule.rule_type)), (0, _jsx3.default)('td', {}, void 0, (0, _keys2.default)(rule.rule_info).map(function (key) {
            return (0, _jsx3.default)('div', {}, 'filed-' + key, (0, _omg2.getConfig)('ruleFileds', key), ': ', _this8.handleRule(key, rule.rule_info[key]));
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            'data-id': rule.id,
            type: 'button',
            onClick: _this8.ruleDel,
            className: 'btn btn-sm btn-danger-outline'
          }, void 0, '\u5220\u9664')));
        })))), (0, _jsx3.default)(_tools.Card, {
          title: '\u6D3B\u52A8\u5956\u54C1',
          btn: addAwardBtn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, _ref9, _ref10, _ref11, (0, _jsx3.default)('th', {
          hidden: activity.award_rule !== 2
        }, void 0, '\u6743\u91CD'), _ref12)), (0, _jsx3.default)('tbody', {}, void 0, awards.map(function (award) {
          return (0, _jsx3.default)('tr', {}, award.id, (0, _jsx3.default)('td', {}, void 0, _this8.state.awardTypes[award.award_type]), (0, _jsx3.default)('td', {}, void 0, award.award_id), (0, _jsx3.default)('td', {}, void 0, award.name), (0, _jsx3.default)('td', {
            hidden: activity.award_rule !== 2
          }, void 0, award.priority, '(', (award.priority / totalPriority.priority * 100 || 0).toFixed(2), '%)'), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            'data-id': award.id,
            type: 'button',
            onClick: _this8.awardDel,
            className: 'btn btn-sm btn-danger-outline'
          }, void 0, '\u5220\u9664')));
        })))), (0, _jsx3.default)(_tools.Card, {
          title: '\u9080\u8BF7\u4EBA\u5956\u54C1',
          btn: addInviteAwardBtn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, _ref13, (0, _jsx3.default)('tbody', {}, void 0, inviteAwards.map(function (award) {
          return (0, _jsx3.default)('tr', {}, award.id, (0, _jsx3.default)('td', {}, void 0, _this8.state.awardTypes[award.award_type]), (0, _jsx3.default)('td', {}, void 0, award.award_id), (0, _jsx3.default)('td', {}, void 0, award.name), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            'data-id': award.id,
            type: 'button',
            onClick: _this8.inviteAwardDel,
            className: 'btn btn-sm btn-danger-outline'
          }, void 0, '\u5220\u9664')));
        })))));
      }
    }]);
    return Activity;
  }(_react.Component);
  
  Activity.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var activityList = omg[_constants.ACTIVITY_INFO] || {};
    var ruleList = omg[_constants.ACTIVITY_RULE_LIST] || {};
    var awardList = omg[_constants.ACTIVITY_AWARD_LIST] || {};
    var inviteAwardList = omg[_constants.ACTIVITY_INVITE_AWARD_LIST] || {};
    return {
      activityList: activityList,
      ruleList: ruleList,
      awardList: awardList,
      inviteAwardList: inviteAwardList
    };
  })(Activity);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _constants = __webpack_require__(59);
  
  var _omg2 = __webpack_require__(58);
  
  var _tools = __webpack_require__(73);
  
  var _ChannelRule = __webpack_require__(104);
  
  var _ChannelRule2 = _interopRequireDefault(_ChannelRule);
  
  var _RegisterRule = __webpack_require__(105);
  
  var _RegisterRule2 = _interopRequireDefault(_RegisterRule);
  
  var _CastRule = __webpack_require__(106);
  
  var _CastRule2 = _interopRequireDefault(_CastRule);
  
  var _RechargeRule = __webpack_require__(107);
  
  var _RechargeRule2 = _interopRequireDefault(_RechargeRule);
  
  var _InviteRule = __webpack_require__(108);
  
  var _InviteRule2 = _interopRequireDefault(_InviteRule);
  
  var _InviteNumRule = __webpack_require__(109);
  
  var _InviteNumRule2 = _interopRequireDefault(_InviteNumRule);
  
  var _UserLevelRule = __webpack_require__(110);
  
  var _UserLevelRule2 = _interopRequireDefault(_UserLevelRule);
  
  var _BalanceRule = __webpack_require__(111);
  
  var _BalanceRule2 = _interopRequireDefault(_BalanceRule);
  
  var _PaymentRule = __webpack_require__(112);
  
  var _PaymentRule2 = _interopRequireDefault(_PaymentRule);
  
  var _CastAllRule = __webpack_require__(113);
  
  var _CastAllRule2 = _interopRequireDefault(_CastAllRule);
  
  var _RechargeAllRule = __webpack_require__(114);
  
  var _RechargeAllRule2 = _interopRequireDefault(_RechargeAllRule);
  
  var _CastName = __webpack_require__(115);
  
  var _CastName2 = _interopRequireDefault(_CastName);
  
  var _ChannelBlist = __webpack_require__(116);
  
  var _ChannelBlist2 = _interopRequireDefault(_ChannelBlist);
  
  var _CastType = __webpack_require__(117);
  
  var _CastType2 = _interopRequireDefault(_CastType);
  
  var _JoinNum = __webpack_require__(118);
  
  var _JoinNum2 = _interopRequireDefault(_JoinNum);
  
  var _PaymentDate = __webpack_require__(119);
  
  var _PaymentDate2 = _interopRequireDefault(_PaymentDate);
  
  var _PaymentNum = __webpack_require__(120);
  
  var _PaymentNum2 = _interopRequireDefault(_PaymentNum);
  
  var _CastNum = __webpack_require__(121);
  
  var _CastNum2 = _interopRequireDefault(_CastNum);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /*import PostNum from '../../rules/PostNum';
  import ZanNum from '../../rules/ZanNum';
  import GreatNum from '../../rules/GreatNum';
  import CommentZanNum from '../../rules/CommentZanNum';
  import ThreadZanNum from '../../rules/ThreadZanNum';*/
  
  var _ref = (0, _jsx3.default)('span', {
    className: 'c-indicator'
  });
  
  var _ref2 = (0, _jsx3.default)('span', {
    className: 'c-indicator'
  });
  
  var _ref3 = (0, _jsx3.default)('hr', {});
  
  var RuleAddModal = function (_Component) {
    (0, _inherits3.default)(RuleAddModal, _Component);
  
    function RuleAddModal(props) {
      (0, _classCallCheck3.default)(this, RuleAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (RuleAddModal.__proto__ || (0, _getPrototypeOf2.default)(RuleAddModal)).call(this, props));
  
      _this.submit = _this.submit.bind(_this);
      _this.selectRule = _this.selectRule.bind(_this);
      var ruleTypes = (0, _omg2.getConfig)('ruleTypes');
      _this.state = {
        currentRule: 'register',
        ruleTypes: ruleTypes,
        errorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(RuleAddModal, [{
      key: 'submit',
      value: function submit(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACTIVITY_RULE_ADD,
          method: 'POST',
          suffix: '/' + this.state.currentRule.toLowerCase(),
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.props.dispatch((0, _modal.hideModal)(true));
            _this2.props.callback();
          } else {
            _this2.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'selectRule',
      value: function selectRule(e) {
        var ruleName = e.target.value;
        this.setState({
          errorMsg: '',
          currentRule: ruleName
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;
  
        var ruleTypes = this.state.ruleTypes;
  
        var triggerType = this.props.item.trigger_type;
        var externalRuleTypes = (0, _omg2.getConfig)('triggerRuleFileds', triggerType) || {};
  
        var ruleView = '';
        switch (this.state.currentRule) {
          case 'channel':
            ruleView = (0, _jsx3.default)(_ChannelRule2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'register':
            ruleView = (0, _jsx3.default)(_RegisterRule2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'cast':
            ruleView = (0, _jsx3.default)(_CastRule2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'recharge':
            ruleView = (0, _jsx3.default)(_RechargeRule2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'invite':
            ruleView = (0, _jsx3.default)(_InviteRule2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'invitenum':
            ruleView = (0, _jsx3.default)(_InviteNumRule2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'userlevel':
            ruleView = (0, _jsx3.default)(_UserLevelRule2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'balance':
            ruleView = (0, _jsx3.default)(_BalanceRule2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'payment':
            ruleView = (0, _jsx3.default)(_PaymentRule2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'castall':
            ruleView = (0, _jsx3.default)(_CastAllRule2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'rechargeall':
            ruleView = (0, _jsx3.default)(_RechargeAllRule2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'castname':
            ruleView = (0, _jsx3.default)(_CastName2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'channelblist':
            ruleView = (0, _jsx3.default)(_ChannelBlist2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'casttype':
            ruleView = (0, _jsx3.default)(_CastType2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'joinnum':
            ruleView = (0, _jsx3.default)(_JoinNum2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'paymentdate':
            ruleView = (0, _jsx3.default)(_PaymentDate2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'paymentnum':
            ruleView = (0, _jsx3.default)(_PaymentNum2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          case 'castnum':
            ruleView = (0, _jsx3.default)(_CastNum2.default, {
              submit: this.submit,
              activityId: this.props.item.id
            });
            break;
          /* case 'postnum':
             ruleView = <PostNum submit={this.submit} astivityId={this.props.item.id}/>;
             break;
           case 'zannum':
             ruleView = <ZanNum submit={this.submit} astivityId={this.props.item.id}/>;
             break;
           case 'greatnum':
             ruleView = <GreatNum submit={this.submit} astivityId={this.props.item.id}/>;
             break;
           case 'commentzannum':
             ruleView = <CommentZanNum submit={this.submit} astivityId={this.props.item.id}/>;
             break;
           case 'threadzannum':
             ruleView = <ThreadZanNum submit={this.submit} astivityId={this.props.item.id}/>;
             break;*/
          default:
            ruleView = this.state.currentRule;
        }
  
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u6DFB\u52A0\u89C4\u5219'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'clearfix'
        }, void 0, (0, _keys2.default)(ruleTypes).map(function (key) {
          return (0, _jsx3.default)('div', {
            className: 'pull-left m-r-1'
          }, void 0, (0, _jsx3.default)('label', {
            className: 'c-input c-radio'
          }, key, (0, _jsx3.default)('input', {
            name: 'rule-add',
            checked: key === _this3.state.currentRule,
            value: key,
            type: 'radio',
            onChange: _this3.selectRule
          }), _ref, ruleTypes[key]));
        }), (0, _keys2.default)(externalRuleTypes).map(function (key) {
          return (0, _jsx3.default)('div', {
            className: 'pull-left m-r-1'
          }, void 0, (0, _jsx3.default)('label', {
            className: 'c-input c-radio text-info'
          }, key, (0, _jsx3.default)('input', {
            name: 'rule-add',
            checked: key === _this3.state.currentRule,
            value: key,
            type: 'radio',
            onChange: _this3.selectRule
          }), _ref2, externalRuleTypes[key]));
        })), _ref3, (0, _jsx3.default)(_tools.Alert, {
          msg: this.state.errorMsg
        }), ruleView);
      }
    }]);
    return RuleAddModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(RuleAddModal);

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('label', {
    className: 'col-sm-2 text-xs-right'
  }, void 0, '\u6E20\u9053:');
  
  var _ref2 = (0, _jsx3.default)(_tools.Submit, {});
  
  var _ref3 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, '\u82F1\u6587\u540D'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var ChannelRule = function (_Component) {
    (0, _inherits3.default)(ChannelRule, _Component);
  
    function ChannelRule(props) {
      (0, _classCallCheck3.default)(this, ChannelRule);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ChannelRule.__proto__ || (0, _getPrototypeOf2.default)(ChannelRule)).call(this, props));
  
      _this.channelAdd = _this.channelAdd.bind(_this);
      _this.channelDel = _this.channelDel.bind(_this);
      _this.changeChannel = _this.changeChannel.bind(_this);
      _this.state = {
        channels: []
      };
      return _this;
    }
  
    (0, _createClass3.default)(ChannelRule, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.props.dispatch((0, _omg.commonFetch)(_constants.CHANNEL_LIST));
      }
      // 添加渠道到规则
  
    }, {
      key: 'channelAdd',
      value: function channelAdd(e) {
        var name = $(e.target).data('name').toString();
        var channels = this.state.channels;
  
        if (!channels.find(function (value) {
          return value === name;
        })) {
          channels.push(name);
        }
        this.setState({
          channels: channels
        });
      }
  
      // 删除渠道从规则
  
    }, {
      key: 'channelDel',
      value: function channelDel(e) {
        var name = $(e.target).data('name').toString();
        var channels = this.state.channels;
  
        var index = channels.findIndex(function (value) {
          return value === name;
        });
        if (index > -1) {
          channels.splice(index, 1);
        }
        this.setState({
          channels: channels
        });
      }
      // 人工修改渠道规则
  
    }, {
      key: 'changeChannel',
      value: function changeChannel(e) {
        var value = $(e.target).val().toString();
        var channels = value === '' ? [] : value.split(/;+/);
        this.setState({
          channels: channels
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        var items = this.props.items;
  
        var channelStr = this.state.channels.join(';');
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('form', {
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, _ref, (0, _jsx3.default)('div', {
          className: 'col-sm-6'
        }, void 0, (0, _jsx3.default)('textarea', {
          required: true,
          name: 'channels',
          value: channelStr,
          onChange: this.changeChannel,
          className: 'form-control'
        }))), _ref2), (0, _jsx3.default)(_tools.Card, {
          title: '\u6DFB\u52A0\u6E20\u9053'
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table table-bordered m-b-0 table-hover'
        }, void 0, _ref3, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item) {
          var alias_name = item.alias_name;
  
          var added = false;
          if (_this2.state.channels.find(function (value) {
            return alias_name === value;
          })) {
            added = true;
          }
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, item.alias_name), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: added,
            className: 'btn btn-sm btn-info-outline',
            'data-name': item.alias_name,
            onClick: _this2.channelAdd
          }, void 0, '\u6DFB\u52A0'), (0, _jsx3.default)('button', {
            hidden: !added,
            className: 'btn btn-sm btn-danger-outline',
            'data-name': item.alias_name,
            onClick: _this2.channelDel
          }, void 0, '\u5220\u9664')));
        })))));
      }
    }]);
    return ChannelRule;
  }(_react.Component);
  
  ChannelRule.defaultProps = {
    items: []
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var _ref4 = omg[_constants.CHANNEL_LIST] || [],
        data = _ref4.data;
  
    return {
      items: data
    };
  })(ChannelRule);

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.DateTimeInput, {
    required: true,
    limit: true,
    labelName: '\u5F00\u59CB\u65F6\u95F4',
    name: 'min_time'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.DateTimeInput, {
    required: true,
    limit: true,
    labelName: '\u7ED3\u675F\u65F6\u95F4',
    name: 'max_time'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var RegisterRule = function (_Component) {
    (0, _inherits3.default)(RegisterRule, _Component);
  
    function RegisterRule(props) {
      (0, _classCallCheck3.default)(this, RegisterRule);
      return (0, _possibleConstructorReturn3.default)(this, (RegisterRule.__proto__ || (0, _getPrototypeOf2.default)(RegisterRule)).call(this, props));
    }
  
    (0, _createClass3.default)(RegisterRule, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          name: 'activity_id',
          type: 'hidden',
          value: this.props.activityId
        }), _ref, _ref2, _ref3);
      }
    }]);
    return RegisterRule;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(RegisterRule);

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    required: true,
    limit: true,
    labelName: '\u6700\u5C0F\u91D1\u989D',
    name: 'min_cast',
    defaultValue: '0'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    required: true,
    limit: true,
    labelName: '\u6700\u5927\u91D1\u989D',
    name: 'max_cast',
    defaultValue: '99999999'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var CastRule = function (_Component) {
    (0, _inherits3.default)(CastRule, _Component);
  
    function CastRule(props) {
      (0, _classCallCheck3.default)(this, CastRule);
      return (0, _possibleConstructorReturn3.default)(this, (CastRule.__proto__ || (0, _getPrototypeOf2.default)(CastRule)).call(this, props));
    }
  
    (0, _createClass3.default)(CastRule, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          name: 'activity_id',
          type: 'hidden',
          value: this.props.activityId
        }), _ref, _ref2, (0, _jsx3.default)(_tools.Select, {
          labelName: '\u662F\u5426\u9996\u6295',
          options: (0, _omg.getConfig)('castTypes'),
          name: 'isfirst'
        }), _ref3);
      }
    }]);
    return CastRule;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(CastRule);

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    required: true,
    limit: true,
    labelName: '\u6700\u5C0F\u91D1\u989D',
    name: 'min_recharge',
    defaultValue: '0'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    required: true,
    limit: true,
    labelName: '\u6700\u5927\u91D1\u989D',
    name: 'max_recharge',
    defaultValue: '99999999'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var RechargeRule = function (_Component) {
    (0, _inherits3.default)(RechargeRule, _Component);
  
    function RechargeRule(props) {
      (0, _classCallCheck3.default)(this, RechargeRule);
      return (0, _possibleConstructorReturn3.default)(this, (RechargeRule.__proto__ || (0, _getPrototypeOf2.default)(RechargeRule)).call(this, props));
    }
  
    (0, _createClass3.default)(RechargeRule, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          name: 'activity_id',
          type: 'hidden',
          value: this.props.activityId
        }), _ref, _ref2, (0, _jsx3.default)(_tools.Select, {
          labelName: '\u662F\u5426\u9996\u5145',
          options: (0, _omg.getConfig)('rechargeTypes'),
          name: 'isfirst'
        }), _ref3);
      }
    }]);
    return RechargeRule;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(RechargeRule);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Checkbox, {
    labelName: '\u662F\u5426\u88AB\u9080\u8BF7',
    name: 'is_invite'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Submit, {});
  
  var InviteRule = function (_Component) {
    (0, _inherits3.default)(InviteRule, _Component);
  
    function InviteRule(props) {
      (0, _classCallCheck3.default)(this, InviteRule);
      return (0, _possibleConstructorReturn3.default)(this, (InviteRule.__proto__ || (0, _getPrototypeOf2.default)(InviteRule)).call(this, props));
    }
  
    (0, _createClass3.default)(InviteRule, [{
      key: 'render',
      value: function render() {
        console.dir(this.props.activityId);
        return (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), _ref, _ref2);
      }
    }]);
    return InviteRule;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(InviteRule);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    labelName: '\u6700\u5C0F\u9080\u8BF7\u4EBA\u6570',
    type: 'number',
    name: 'min_invitenum'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    labelName: '\u6700\u5927\u9080\u8BF7\u4EBA\u6570',
    type: 'number',
    name: 'max_invitenum'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var InviteRule = function (_Component) {
    (0, _inherits3.default)(InviteRule, _Component);
  
    function InviteRule(props) {
      (0, _classCallCheck3.default)(this, InviteRule);
      return (0, _possibleConstructorReturn3.default)(this, (InviteRule.__proto__ || (0, _getPrototypeOf2.default)(InviteRule)).call(this, props));
    }
  
    (0, _createClass3.default)(InviteRule, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), _ref, _ref2, _ref3);
      }
    }]);
    return InviteRule;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(InviteRule);

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {});
  
  var InviteRule = function (_Component) {
    (0, _inherits3.default)(InviteRule, _Component);
  
    function InviteRule(props) {
      (0, _classCallCheck3.default)(this, InviteRule);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (InviteRule.__proto__ || (0, _getPrototypeOf2.default)(InviteRule)).call(this, props));
  
      var userLevels = (0, _omg.getConfig)('userLevels');
      _this.state = {
        userLevels: userLevels
      };
      return _this;
    }
  
    (0, _createClass3.default)(InviteRule, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), (0, _jsx3.default)(_tools.Select, {
          labelName: '\u6700\u5C0F\u7528\u6237\u7B49\u7EA7',
          name: 'min_level',
          options: this.state.userLevels
        }), (0, _jsx3.default)(_tools.Select, {
          labelName: '\u6700\u5927\u7528\u6237\u7B49\u7EA7',
          name: 'max_level',
          options: this.state.userLevels
        }), _ref);
      }
    }]);
    return InviteRule;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(InviteRule);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'min_balance',
    labelName: '\u6700\u5C0F\u4F59\u989D'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'max_balance',
    labelName: '\u6700\u5927\u4F59\u989D'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var BalanceRule = function (_Component) {
    (0, _inherits3.default)(BalanceRule, _Component);
  
    function BalanceRule(props) {
      (0, _classCallCheck3.default)(this, BalanceRule);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (BalanceRule.__proto__ || (0, _getPrototypeOf2.default)(BalanceRule)).call(this, props));
  
      var userLevels = (0, _omg.getConfig)('userLevels');
      _this.state = {
        userLevels: userLevels
      };
      return _this;
    }
  
    (0, _createClass3.default)(BalanceRule, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), _ref, _ref2, _ref3);
      }
    }]);
    return BalanceRule;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(BalanceRule);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'min_payment',
    labelName: '\u6700\u5C0F\u56DE\u6B3E\u989D'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'max_payment',
    labelName: '\u6700\u5927\u56DE\u6B3E\u989D'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var PaymentRule = function (_Component) {
    (0, _inherits3.default)(PaymentRule, _Component);
  
    function PaymentRule(props) {
      (0, _classCallCheck3.default)(this, PaymentRule);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (PaymentRule.__proto__ || (0, _getPrototypeOf2.default)(PaymentRule)).call(this, props));
  
      var userLevels = (0, _omg.getConfig)('userLevels');
      _this.state = {
        userLevels: userLevels
      };
      return _this;
    }
  
    (0, _createClass3.default)(PaymentRule, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), _ref, _ref2, _ref3);
      }
    }]);
    return PaymentRule;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(PaymentRule);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'min_cast_all',
    labelName: '\u6700\u5C0F\u6295\u8D44\u989D'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'max_cast_all',
    labelName: '\u6700\u5927\u6295\u8D44\u989D'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.DateTimeInput, {
    required: true,
    labelName: '\u8D77\u59CB\u65F6\u95F4',
    name: 'start_time'
  });
  
  var _ref4 = (0, _jsx3.default)(_tools.DateTimeInput, {
    required: true,
    labelName: '\u7ED3\u675F\u65F6\u95F4',
    name: 'end_time'
  });
  
  var _ref5 = (0, _jsx3.default)(_tools.Submit, {});
  
  var CastAllRule = function (_Component) {
    (0, _inherits3.default)(CastAllRule, _Component);
  
    function CastAllRule(props) {
      (0, _classCallCheck3.default)(this, CastAllRule);
      return (0, _possibleConstructorReturn3.default)(this, (CastAllRule.__proto__ || (0, _getPrototypeOf2.default)(CastAllRule)).call(this, props));
    }
  
    (0, _createClass3.default)(CastAllRule, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), _ref, _ref2, _ref3, _ref4, _ref5);
      }
    }]);
    return CastAllRule;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(CastAllRule);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'min_recharge_all',
    labelName: '\u6700\u5C0F\u5145\u503C\u989D'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'max_recharge_all',
    labelName: '\u6700\u5927\u5145\u503C\u989D'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.DateTimeInput, {
    required: true,
    labelName: '\u8D77\u59CB\u65F6\u95F4',
    name: 'start_time'
  });
  
  var _ref4 = (0, _jsx3.default)(_tools.DateTimeInput, {
    required: true,
    labelName: '\u7ED3\u675F\u65F6\u95F4',
    name: 'end_time'
  });
  
  var _ref5 = (0, _jsx3.default)(_tools.Submit, {});
  
  var RechargeAllRule = function (_Component) {
    (0, _inherits3.default)(RechargeAllRule, _Component);
  
    function RechargeAllRule(props) {
      (0, _classCallCheck3.default)(this, RechargeAllRule);
      return (0, _possibleConstructorReturn3.default)(this, (RechargeAllRule.__proto__ || (0, _getPrototypeOf2.default)(RechargeAllRule)).call(this, props));
    }
  
    (0, _createClass3.default)(RechargeAllRule, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), _ref, _ref2, _ref3, _ref4, _ref5);
      }
    }]);
    return RechargeAllRule;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(RechargeAllRule);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    required: true,
    labelName: '\u6807\u540D\u79F0',
    name: 'name'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    labelName: '\u671F\u540D',
    name: 'stage_name',
    placeholder: '\u4E0D\u586B\u5219\u4E0D\u9650\u5236'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var CastName = function (_Component) {
    (0, _inherits3.default)(CastName, _Component);
  
    function CastName(props) {
      (0, _classCallCheck3.default)(this, CastName);
      return (0, _possibleConstructorReturn3.default)(this, (CastName.__proto__ || (0, _getPrototypeOf2.default)(CastName)).call(this, props));
    }
  
    (0, _createClass3.default)(CastName, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          name: 'activity_id',
          type: 'hidden',
          value: this.props.activityId
        }), _ref, _ref2, _ref3);
      }
    }]);
    return CastName;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(CastName);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('label', {
    className: 'col-sm-2 text-xs-right'
  }, void 0, '\u6E20\u9053:');
  
  var _ref2 = (0, _jsx3.default)(_tools.Submit, {});
  
  var _ref3 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, '\u82F1\u6587\u540D'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var ChannelBlist = function (_Component) {
    (0, _inherits3.default)(ChannelBlist, _Component);
  
    function ChannelBlist(props) {
      (0, _classCallCheck3.default)(this, ChannelBlist);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ChannelBlist.__proto__ || (0, _getPrototypeOf2.default)(ChannelBlist)).call(this, props));
  
      _this.channelAdd = _this.channelAdd.bind(_this);
      _this.channelDel = _this.channelDel.bind(_this);
      _this.changeChannel = _this.changeChannel.bind(_this);
      _this.state = {
        channels: []
      };
      return _this;
    }
  
    (0, _createClass3.default)(ChannelBlist, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.props.dispatch((0, _omg.commonFetch)(_constants.CHANNEL_LIST));
      }
      // 添加渠道到规则
  
    }, {
      key: 'channelAdd',
      value: function channelAdd(e) {
        var name = $(e.target).data('name').toString();
        var channels = this.state.channels;
  
        if (!channels.find(function (value) {
          return value === name;
        })) {
          channels.push(name);
        }
        this.setState({
          channels: channels
        });
      }
  
      // 删除渠道从规则
  
    }, {
      key: 'channelDel',
      value: function channelDel(e) {
        var name = $(e.target).data('name').toString();
        var channels = this.state.channels;
  
        var index = channels.findIndex(function (value) {
          return value === name;
        });
        if (index > -1) {
          channels.splice(index, 1);
        }
        this.setState({
          channels: channels
        });
      }
      // 人工修改渠道规则
  
    }, {
      key: 'changeChannel',
      value: function changeChannel(e) {
        var value = $(e.target).val().toString();
        var channels = value === '' ? [] : value.split(/;+/);
        this.setState({
          channels: channels
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        var items = this.props.items;
  
        var channelStr = this.state.channels.join(';');
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('form', {
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, _ref, (0, _jsx3.default)('div', {
          className: 'col-sm-6'
        }, void 0, (0, _jsx3.default)('textarea', {
          required: true,
          name: 'channels',
          value: channelStr,
          onChange: this.changeChannel,
          className: 'form-control'
        }))), _ref2), (0, _jsx3.default)(_tools.Card, {
          title: '\u6DFB\u52A0\u6E20\u9053'
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table table-bordered m-b-0 table-hover'
        }, void 0, _ref3, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item) {
          var alias_name = item.alias_name;
  
          var added = false;
          if (_this2.state.channels.find(function (value) {
            return alias_name === value;
          })) {
            added = true;
          }
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, item.alias_name), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: added,
            className: 'btn btn-sm btn-info-outline',
            'data-name': item.alias_name,
            onClick: _this2.channelAdd
          }, void 0, '\u6DFB\u52A0'), (0, _jsx3.default)('button', {
            hidden: !added,
            className: 'btn btn-sm btn-danger-outline',
            'data-name': item.alias_name,
            onClick: _this2.channelDel
          }, void 0, '\u5220\u9664')));
        })))));
      }
    }]);
    return ChannelBlist;
  }(_react.Component);
  
  ChannelBlist.defaultProps = {
    items: []
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var _ref4 = omg[_constants.CHANNEL_LIST] || [],
        data = _ref4.data;
  
    return {
      items: data
    };
  })(ChannelBlist);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {});
  
  var CastType = function (_Component) {
    (0, _inherits3.default)(CastType, _Component);
  
    function CastType(props) {
      (0, _classCallCheck3.default)(this, CastType);
      return (0, _possibleConstructorReturn3.default)(this, (CastType.__proto__ || (0, _getPrototypeOf2.default)(CastType)).call(this, props));
    }
  
    (0, _createClass3.default)(CastType, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          name: 'activity_id',
          type: 'hidden',
          value: this.props.activityId
        }), (0, _jsx3.default)(_tools.Select, {
          labelName: '\u6807\u671F\u9650\u7C7B\u578B',
          options: (0, _omg.getConfig)('castDateTypes'),
          name: 'type'
        }), _ref);
      }
    }]);
    return CastType;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(CastType);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'join_max',
    labelName: '\u53C2\u4E0E\u4EBA\u6570\u4E0A\u9650'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Submit, {});
  
  var JoinNum = function (_Component) {
    (0, _inherits3.default)(JoinNum, _Component);
  
    function JoinNum(props) {
      (0, _classCallCheck3.default)(this, JoinNum);
      return (0, _possibleConstructorReturn3.default)(this, (JoinNum.__proto__ || (0, _getPrototypeOf2.default)(JoinNum)).call(this, props));
    }
  
    (0, _createClass3.default)(JoinNum, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), _ref, _ref2);
      }
    }]);
    return JoinNum;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(JoinNum);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'min_paymentdate',
    labelName: '\u9879\u76EE\u5929\u6570 >='
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'max_paymentdate',
    labelName: '\u9879\u76EE\u5929\u6570 <'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var PaymentDate = function (_Component) {
    (0, _inherits3.default)(PaymentDate, _Component);
  
    function PaymentDate(props) {
      (0, _classCallCheck3.default)(this, PaymentDate);
      return (0, _possibleConstructorReturn3.default)(this, (PaymentDate.__proto__ || (0, _getPrototypeOf2.default)(PaymentDate)).call(this, props));
    }
  
    (0, _createClass3.default)(PaymentDate, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), _ref, _ref2, _ref3);
      }
    }]);
    return PaymentDate;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(PaymentDate);

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'min_num',
    labelName: '\u56DE\u6B3E\u6B21\u6570 >'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'max_num',
    labelName: '\u56DE\u6B3E\u6B21\u6570 <='
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var PaymentNum = function (_Component) {
    (0, _inherits3.default)(PaymentNum, _Component);
  
    function PaymentNum(props) {
      (0, _classCallCheck3.default)(this, PaymentNum);
      return (0, _possibleConstructorReturn3.default)(this, (PaymentNum.__proto__ || (0, _getPrototypeOf2.default)(PaymentNum)).call(this, props));
    }
  
    (0, _createClass3.default)(PaymentNum, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), _ref, _ref2, _ref3);
      }
    }]);
    return PaymentNum;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(PaymentNum);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'min_num',
    labelName: '\u6295\u8D44\u6B21\u6570 >'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'max_num',
    labelName: '\u6295\u8D44\u6B21\u6570 <='
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var CastNum = function (_Component) {
    (0, _inherits3.default)(CastNum, _Component);
  
    function CastNum(props) {
      (0, _classCallCheck3.default)(this, CastNum);
      return (0, _possibleConstructorReturn3.default)(this, (CastNum.__proto__ || (0, _getPrototypeOf2.default)(CastNum)).call(this, props));
    }
  
    (0, _createClass3.default)(CastNum, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), _ref, _ref2, _ref3);
      }
    }]);
    return CastNum;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(CastNum);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('input', {
    type: 'hidden',
    name: 'trigger_index',
    value: '1'
  });
  
  var _ref2 = (0, _jsx3.default)('label', {
    className: 'col-sm-4 text-xs-right'
  }, void 0, '\u8BF4\u660E:');
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var ActivityAddModal = function (_Component) {
    (0, _inherits3.default)(ActivityAddModal, _Component);
  
    function ActivityAddModal(props) {
      (0, _classCallCheck3.default)(this, ActivityAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ActivityAddModal.__proto__ || (0, _getPrototypeOf2.default)(ActivityAddModal)).call(this, props));
  
      var activityTriggers = (0, _omg.getConfig)('activityTriggers');
      var frequencyTypes = (0, _omg.getConfig)('frequencyTypes');
      var sendAwardTypes = (0, _omg.getConfig)('sendAwardTypes');
      _this.state = {
        activityTriggers: activityTriggers,
        frequencyTypes: frequencyTypes,
        sendAwardTypes: sendAwardTypes
      };
      return _this;
    }
  
    (0, _createClass3.default)(ActivityAddModal, [{
      key: 'render',
      value: function render() {
        var item = this.props.item || {};
        return (0, _jsx3.default)(_tools.Modal, {
          title: this.props.update ? '编辑活动' : '添加活动'
        }, void 0, (0, _jsx3.default)('form', {
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.props.errorMsg
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'id',
          value: item.id
        }), (0, _jsx3.default)('input', {
          name: 'group_id',
          type: 'hidden',
          value: item.group_id || this.props.groupId,
          className: 'form-control'
        }), (0, _jsx3.default)(_tools.Input, {
          required: true,
          labelName: '\u6D3B\u52A8\u540D\u79F0',
          name: 'name',
          defaultValue: item.name
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u82F1\u6587\u522B\u540D',
          name: 'alias_name',
          placeholder: '\u53EF\u4E3A\u7A7A',
          defaultValue: item.alias_name
        }), (0, _jsx3.default)(_tools.DateTimeInput, {
          required: true,
          limit: true,
          labelName: '\u5F00\u59CB\u65F6\u95F4',
          name: 'start_at',
          defaultValue: item.start_at
        }), (0, _jsx3.default)(_tools.DateTimeInput, {
          required: true,
          limit: true,
          labelName: '\u7ED3\u675F\u65F6\u95F4',
          name: 'end_at',
          defaultValue: item.end_at
        }), (0, _jsx3.default)(_tools.Select, {
          labelName: '\u89E6\u53D1\u6761\u4EF6',
          name: 'trigger_type',
          options: this.state.activityTriggers,
          defaultValue: item.trigger_type
        }), (0, _jsx3.default)(_tools.Select, {
          labelName: '\u53D1\u5956\u9891\u6B21',
          name: 'frequency',
          options: this.state.frequencyTypes,
          defaultValue: item.frequency
        }), (0, _jsx3.default)(_tools.Select, {
          labelName: '\u53D1\u5956\u89C4\u5219',
          name: 'award_rule',
          options: this.state.sendAwardTypes,
          defaultValue: item.award_rule
        }), _ref, (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, _ref2, (0, _jsx3.default)('div', {
          className: 'col-sm-6'
        }, void 0, (0, _jsx3.default)('textarea', {
          name: 'des',
          className: 'form-control',
          defaultValue: item.des
        }))), _ref3));
      }
    }]);
    return ActivityAddModal;
  }(_react.Component);
  
  ActivityAddModal.defaultProps = {
    errorMsg: ''
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var errorMsg = omg.errorMsg[_constants.ACTIVITY_ADD] || '';
    return {
      errorMsg: errorMsg
    };
  })(ActivityAddModal);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _Award = __webpack_require__(124);
  
  var _Award2 = _interopRequireDefault(_Award);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {
    value: '\u6DFB\u52A0'
  });
  
  var AwardAddModal = function (_Component) {
    (0, _inherits3.default)(AwardAddModal, _Component);
  
    function AwardAddModal(props) {
      (0, _classCallCheck3.default)(this, AwardAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (AwardAddModal.__proto__ || (0, _getPrototypeOf2.default)(AwardAddModal)).call(this, props));
  
      _this.addAward = _this.addAward.bind(_this);
      _this.showAward = _this.showAward.bind(_this);
      _this.changeSelect = _this.changeSelect.bind(_this);
      _this.state = {
        awardType: '1',
        awardId: '',
        awardHidden: true
      };
      return _this;
    }
  
    (0, _createClass3.default)(AwardAddModal, [{
      key: 'addAward',
      value: function addAward(e) {
        this.setState({
          awardHidden: true,
          awardType: e.target.dataset.type,
          awardId: e.target.dataset.id
        });
      }
    }, {
      key: 'showAward',
      value: function showAward() {
        this.setState({
          awardHidden: false
        });
      }
    }, {
      key: 'changeSelect',
      value: function changeSelect(e) {
        this.setState({
          awardType: e.target.value
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var item = this.props.item;
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u6DFB\u52A0\u5956\u54C1',
          className: 'modal-lg'
        }, void 0, (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: item.id
        }), (0, _jsx3.default)(_tools.Select, {
          onChange: this.changeSelect,
          name: 'award_type',
          labelName: '\u5956\u54C1\u7C7B\u578B',
          options: (0, _omg.getConfig)('awardTypes'),
          value: this.state.awardType
        }), (0, _jsx3.default)(_tools.Input, {
          name: 'award_id',
          labelName: '\u5956\u54C1Id',
          value: this.state.awardId
        }), (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-sm-offset-4 col-sm-8 col-md-6'
        }, void 0, (0, _jsx3.default)('a', {
          className: 'btn btn-info-outline',
          onClick: this.showAward
        }, void 0, '\u9009\u62E9\u5956\u54C1'))), (0, _jsx3.default)(_tools.Input, {
          hidden: item.award_rule !== 2,
          name: 'priority',
          labelName: '\u5956\u54C1\u6743\u91CD',
          type: 'number',
          defaultValue: '0'
        }), _ref), (0, _jsx3.default)('div', {
          hidden: this.state.awardHidden
        }, void 0, (0, _jsx3.default)('hr', {
          style: { borderStyle: 'dashed' }
        }), (0, _jsx3.default)(_Award2.default, {
          modal: true,
          addAward: this.addAward,
          type: this.state.awardType
        })));
      }
    }]);
    return AwardAddModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(AwardAddModal);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _extends2 = __webpack_require__(66);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _RedEnvelope = __webpack_require__(125);
  
  var _RedEnvelope2 = _interopRequireDefault(_RedEnvelope);
  
  var _Interest = __webpack_require__(128);
  
  var _Interest2 = _interopRequireDefault(_Interest);
  
  var _Coupon = __webpack_require__(130);
  
  var _Coupon2 = _interopRequireDefault(_Coupon);
  
  var _Experience = __webpack_require__(132);
  
  var _Experience2 = _interopRequireDefault(_Experience);
  
  var _Point = __webpack_require__(134);
  
  var _Point2 = _interopRequireDefault(_Point);
  
  var _Cash = __webpack_require__(136);
  
  var _Cash2 = _interopRequireDefault(_Cash);
  
  var _omg2 = __webpack_require__(58);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('span', {
    className: 'c-indicator'
  });
  
  var _ref2 = (0, _jsx3.default)('hr', {});
  
  var Award = function (_Component) {
    (0, _inherits3.default)(Award, _Component);
  
    function Award(props) {
      (0, _classCallCheck3.default)(this, Award);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Award.__proto__ || (0, _getPrototypeOf2.default)(Award)).call(this, props));
  
      _this.onSubmit = _this.onSubmit.bind(_this);
      _this.selectAward = _this.selectAward.bind(_this);
      var currentType = props.type;
      var awardTypes = (0, _omg2.getConfig)('awardTypes');
      _this.state = {
        currentType: currentType,
        awardTypes: awardTypes
      };
      return _this;
    }
  
    (0, _createClass3.default)(Award, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.type !== '') {
          this.setState({
            currentType: nextProps.type
          });
        }
      }
    }, {
      key: 'onSubmit',
      value: function onSubmit(e) {
        e.preventDefault();
        var form = e.target;
        var formData = new FormData(form);
        var dispatch = this.props.dispatch;
  
        dispatch((0, _omg.commonFetch)(_constants.ACTIVITY_GROUP_ADD, 'POST', formData)).then(function (code) {
          if (code === 0) {
            dispatch((0, _modal.hideModal)());
            dispatch((0, _omg.commonFetch)(_constants.ACTIVITY_GROUP_LIST));
          }
        });
      }
    }, {
      key: 'selectAward',
      value: function selectAward(e) {
        var type = e.target.value;
        if (!this.props.modal) {
          _history2.default.push('/award/' + type);
        } else {
          this.setState({
            currentType: type
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        var awardView = '类型未找到';
        switch (this.state.currentType) {
          case '1':
            awardView = _react2.default.createElement(_Interest2.default, (0, _extends3.default)({}, this.props, { type: this.state.currentType }));
            break;
          case '2':
            awardView = _react2.default.createElement(_RedEnvelope2.default, (0, _extends3.default)({}, this.props, { type: this.state.currentType }));
            break;
          case '3':
            awardView = _react2.default.createElement(_Experience2.default, (0, _extends3.default)({}, this.props, { type: this.state.currentType }));
            break;
          case '4':
            awardView = _react2.default.createElement(_Point2.default, (0, _extends3.default)({}, this.props, { type: this.state.currentType }));
            break;
          case '6':
            awardView = _react2.default.createElement(_Coupon2.default, (0, _extends3.default)({}, this.props, { type: this.state.currentType }));
            break;
          case '7':
            awardView = _react2.default.createElement(_Cash2.default, (0, _extends3.default)({}, this.props, { type: this.state.currentType }));
            break;
          default:
            awardView = this.state.currentType;
        }
        var _state = this.state,
            awardTypes = _state.awardTypes,
            currentType = _state.currentType;
  
        return (0, _jsx3.default)('div', {}, void 0, (0, _keys2.default)(awardTypes).map(function (key) {
          return (0, _jsx3.default)('label', {
            className: 'c-input c-radio'
          }, 'redio-' + key, (0, _jsx3.default)('input', {
            checked: key === currentType,
            name: 'award-add',
            value: key,
            type: 'radio',
            onChange: _this2.selectAward
          }), _ref, awardTypes[key]);
        }), _ref2, awardView);
      }
    }]);
    return Award;
  }(_react.Component);
  
  Award.defaultProps = {
    modal: false
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var errorMsg = omg.errorMsg[_constants.ACTIVITY_GROUP_ADD] || '';
    return {
      errorMsg: errorMsg
    };
  })(Award);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  var _omg = __webpack_require__(56);
  
  var _RedEnvelopeAddModal = __webpack_require__(126);
  
  var _RedEnvelopeAddModal2 = _interopRequireDefault(_RedEnvelopeAddModal);
  
  var _omg2 = __webpack_require__(58);
  
  var _modal = __webpack_require__(70);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'id'), (0, _jsx3.default)('th', {}, void 0, '\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, '\u91D1\u989D'), (0, _jsx3.default)('th', {}, void 0, '\u7C7B\u578B'), (0, _jsx3.default)('th', {}, void 0, '\u6709\u6548\u671F'), (0, _jsx3.default)('th', {}, void 0, '\u6295\u8D44\u95E8\u69DB'), (0, _jsx3.default)('th', {}, void 0, '\u9879\u76EE\u7C7B\u578B'), (0, _jsx3.default)('th', {}, void 0, '\u9879\u76EE\u671F\u9650'), (0, _jsx3.default)('th', {}, void 0, '\u4EA7\u54C1ID'), (0, _jsx3.default)('th', {}, void 0, '\u5E73\u53F0\u9650\u5236'), (0, _jsx3.default)('th', {}, void 0, '\u9650\u5236\u8BF4\u660E'), (0, _jsx3.default)('th', {}, void 0, '\u6D88\u606F\u6A21\u677F'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var _ref2 = (0, _jsx3.default)('br', {});
  
  var RedEnvelope = function (_Component) {
    (0, _inherits3.default)(RedEnvelope, _Component);
  
    function RedEnvelope(props) {
      (0, _classCallCheck3.default)(this, RedEnvelope);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (RedEnvelope.__proto__ || (0, _getPrototypeOf2.default)(RedEnvelope)).call(this, props));
  
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.showUpdateModal = _this.showUpdateModal.bind(_this);
      _this.pageSelect = _this.pageSelect.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.del = _this.del.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      var page = props.page || 1;
      _this.state = {
        page: page
      };
      return _this;
    }
  
    (0, _createClass3.default)(RedEnvelope, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.setState({
            page: nextProps.page
          });
          this.list(nextProps.page);
        }
      }
    }, {
      key: 'del',
      value: function del(e) {
        var _this2 = this;
  
        var name = e.target.dataset.name;
        var id = +e.target.dataset.id;
        var formData = new FormData();
        formData.append('award_type', this.props.type);
        formData.append('award_id', id);
        if (!confirm('\u4F60\u786E\u5B9A\u5220\u9664:' + name + '\u5417\uFF1F\u8BE5\u64CD\u4F5C\u4E0D\u53EF\u9006')) {
          return;
        }
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_DEL,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this3 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this3.props.dispatch((0, _modal.hideModal)(true));
            _this3.fresh();
          } else {
            _this3.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this4 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_UPDATE,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this4.props.dispatch((0, _modal.hideModal)(true));
            _this4.fresh();
          } else {
            _this4.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.state.page);
      }
    }, {
      key: 'list',
      value: function list(page) {
        var formData = new FormData();
        formData.append('award_type', this.props.type);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_LIST,
          method: 'POST',
          queryObj: { page: page },
          formData: formData,
          key: this.props.type + '_' + page
        }));
      }
    }, {
      key: 'pageSelect',
      value: function pageSelect(page) {
        this.setState({
          page: page
        });
        this.list(page);
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_RedEnvelopeAddModal2.default, {
          submit: this.add
        })));
      }
    }, {
      key: 'showUpdateModal',
      value: function showUpdateModal(e) {
        var index = e.target.dataset.index;
        var id = +e.target.dataset.id;
        var item = this.items[index] || {};
        if (item.id !== id) {
          alert('获取奖品信息失败,请刷新重试');
          return;
        }
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_RedEnvelopeAddModal2.default, {
          item: item,
          update: true,
          submit: this.update
        })));
      }
    }, {
      key: 'render',
      value: function render() {
        var _this5 = this;
  
        var btn = (0, _jsx3.default)('button', {
          hidden: this.props.modal,
          className: 'btn btn-info btn-sm pull-xs-right',
          onClick: this.showAddModal
        }, void 0, '\u6DFB\u52A0');
        var _props = this.props,
            modal = _props.modal,
            _props$addAward = _props.addAward,
            addAward = _props$addAward === undefined ? false : _props$addAward;
  
        var key = this.props.type + '_' + this.state.page;
        var awardList = this.props.awardList || {};
        var award = awardList[key] || {};
        var items = award.data || [];
        this.items = items;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Card, {
          title: '\u7EA2\u5305',
          btn: btn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, _ref, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          var addAwardBtn = false;
          if (modal) {
            addAwardBtn = (0, _jsx3.default)('button', {
              'data-type': _this5.props.type,
              'data-id': item.id,
              hidden: !modal,
              className: 'btn btn-info btn-sm',
              onClick: addAward
            }, void 0, '\u6DFB\u52A0');
          }
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, item.red_money, '\u5143'), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('redEnvelopeTypes', item.red_type || '-'), item.red_type === 2 ? '(' + (item.percentage * 100).toFixed(1) + '%)' : ''), (0, _jsx3.default)('td', {}, void 0, item.effective_time_type === 1 ? item.effective_time_day + '\u5929' : ['\u5F00\u59CB: ' + item.effective_time_start, _ref2, '\u7ED3\u675F: ' + item.effective_time_end]), (0, _jsx3.default)('td', {}, void 0, item.investment_threshold ? item.investment_threshold + '\u5143' : '不限制'), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('projectTypes', item.project_type)), (0, _jsx3.default)('td', {}, void 0, '' + (item.project_duration_type === 1 ? '' : item.project_duration_time) + (0, _omg2.getConfig)('projectDurationTypes', item.project_duration_type || '-')), (0, _jsx3.default)('td', {}, void 0, item.product_id === '' ? '不限制' : item.product_id), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('platformTypes', item.platform_type || '-')), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Popover, {
            title: '\u9650\u5236\u8BF4\u660E',
            content: item.limit_desc === '' ? '无' : item.limit_desc + ' '
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Popover, {
            name: '\u7AD9\u5185\u4FE1',
            title: '\u7AD9\u5185\u4FE1',
            content: !item.mail ? '无' : item.mail + ' '
          }), (0, _jsx3.default)(_tools.Popover, {
            name: '\u77ED\u4FE1',
            title: '\u77ED\u4FE1',
            content: !item.message ? '无' : item.message + ' '
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: modal,
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            'data-index': index,
            onClick: _this5.showUpdateModal
          }, void 0, '\u7F16\u8F91'), addAwardBtn, (0, _jsx3.default)('button', {
            hidden: true || modal,
            className: 'btn btn-danger-outline btn-sm',
            'data-id': item.id,
            'data-name': item.name,
            onClick: _this5.del
          }, void 0, '\u5220\u9664')));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: award.current_page,
          lastPage: award.last_page,
          onClick: this.pageSelect,
          unurl: modal
        }));
      }
    }]);
    return RedEnvelope;
  }(_react.Component);
  
  RedEnvelope.defaultProps = {
    modal: false
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var awardList = omg[_constants.AWARD_LIST] || {};
    return {
      awardList: awardList
    };
  })(RedEnvelope);

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(127);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _jsx3 = __webpack_require__(1);
  
  var _jsx4 = _interopRequireDefault(_jsx3);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(58);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx4.default)(_tools.Submit, {});
  
  var RedEnvelopeAddModal = function (_Component) {
    (0, _inherits3.default)(RedEnvelopeAddModal, _Component);
  
    function RedEnvelopeAddModal(props) {
      (0, _classCallCheck3.default)(this, RedEnvelopeAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (RedEnvelopeAddModal.__proto__ || (0, _getPrototypeOf2.default)(RedEnvelopeAddModal)).call(this, props));
  
      _this.redTypeChange = _this.redTypeChange.bind(_this);
      _this.effectiveTimeTypeChange = _this.effectiveTimeTypeChange.bind(_this);
      _this.durationTypeChange = _this.durationTypeChange.bind(_this);
      _this.initLimitDes = _this.initLimitDes.bind(_this);
      var redEnvelopeTypes = (0, _omg.getConfig)('redEnvelopeTypes');
      var redEnvelopeTimeTypes = (0, _omg.getConfig)('redEnvelopeTimeTypes');
      var projectTypes = (0, _omg.getConfig)('projectTypes');
      var platformTypes = (0, _omg.getConfig)('platformTypes');
      var projectDurationTypes = (0, _omg.getConfig)('projectDurationTypes');
      var item = _this.props.item || {};
      _this.state = {
        errorMsg: '',
        redType: item.red_type || 1,
        type: 2,
        effectiveTimeType: item.effective_time_type || 1,
        durationType: item.project_duration_type || 1,
        projectTypes: projectTypes,
        platformTypes: platformTypes,
        projectDurationTypes: projectDurationTypes,
        redEnvelopeTypes: redEnvelopeTypes,
        redEnvelopeTimeTypes: redEnvelopeTimeTypes,
        limitDes: item.limit_desc || ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(RedEnvelopeAddModal, [{
      key: 'durationTypeChange',
      value: function durationTypeChange(e) {
        var value = e.target.value;
        this.setState({
          durationType: +value
        });
        this.initLimitDes();
      }
    }, {
      key: 'redTypeChange',
      value: function redTypeChange(e) {
        var value = $(e.target).val();
        this.setState({
          redType: +value
        });
      }
    }, {
      key: 'effectiveTimeTypeChange',
      value: function effectiveTimeTypeChange(e) {
        var value = $(e.target).val();
        this.setState({
          effectiveTimeType: +value
        });
      }
    }, {
      key: 'initLimitDes',
      value: function initLimitDes() {
        var formData = new FormData(this.refs.form);
        var limitDesArr = [];
        var investmentThreshold = formData.get('investment_threshold') || 0;
        var projectDurationType = formData.get('project_duration_type') || 0;
        var projectDurationTime = formData.get('project_duration_time') || 0;
        var projectType = formData.get('project_type') || 0;
        var platformType = formData.get('platform_type') || 0;
        var productId = formData.get('product_id') || '';
        // 投资门槛
        if (+investmentThreshold !== 0) {
          limitDesArr.push(investmentThreshold + '\u5143\u8D77\u6295');
        }
        // 项目时间限制
        if (+projectDurationType !== 1) {
          limitDesArr.push('\u9650' + projectDurationTime + (0, _omg.getConfig)('projectDurationTypes', projectDurationType));
        }
        // 项目类型限制
        if (+projectType !== 0) {
          limitDesArr.push((0, _omg.getConfig)('projectTypes', projectType) + '\u4E13\u4EAB');
        }
        // 平台限制
        if (+platformType !== 0) {
          limitDesArr.push((0, _omg.getConfig)('platformTypes', platformType) + '\u4E13\u4EAB');
        }
        // 标限制
        if (productId) {
          limitDesArr.push('限特定标使用');
        }
        this.setState({
          limitDes: limitDesArr.join('，')
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _jsx2;
  
        var typeFileds = false;
        var timeTypeFileds = false;
        var durationTypeFileds = false;
        var item = this.props.item || {};
  
        // 根据红包类型显示字段
        switch (this.state.redType) {
          case 1:
            typeFileds = [(0, _jsx4.default)(_tools.Input, {
              required: true,
              type: 'number',
              labelName: '\u7EA2\u5305\u91D1\u989D',
              defaultValue: item.red_money,
              name: 'red_money'
            }, '1')];
            break;
          case 2:
            typeFileds = [(0, _jsx4.default)(_tools.Input, (_jsx2 = {
              required: true,
              type: 'number',
              labelName: '\u7EA2\u5305\u6700\u9AD8\u91D1\u989D'
            }, (0, _defineProperty3.default)(_jsx2, 'type', 'number'), (0, _defineProperty3.default)(_jsx2, 'defaultValue', item.red_money), (0, _defineProperty3.default)(_jsx2, 'name', 'red_max_money'), _jsx2), '2'), (0, _jsx4.default)(_tools.PercentInput, {
              required: true,
              placeholder: '\u8BF7\u8F93\u5165\u5C0F\u6570,\u4F8B:2.5\u4E3A2.5%',
              labelName: '\u7EA2\u5305\u767E\u5206\u6BD4',
              defaultValue: item.percentage && (item.percentage * 100).toFixed(1),
              name: 'percentage'
            }, '3')];
            break;
          default:
        }
        // 根绝有效期类型显示相应字段
        switch (this.state.effectiveTimeType) {
          case 1:
            timeTypeFileds = [(0, _jsx4.default)(_tools.Input, {
              required: true,
              type: 'number',
              labelName: '\u6709\u6548\u671F\u5929\u6570',
              defaultValue: item.effective_time_day || 0,
              onChange: this.initLimitDes,
              name: 'effective_time_day'
            }, '1')];
            break;
          case 2:
            timeTypeFileds = [(0, _jsx4.default)(_tools.DateTimeInput, {
              required: true,
              labelName: '\u6709\u6548\u671F\u5F00\u59CB\u65F6\u95F4',
              defaultValue: item.effective_time_start,
              name: 'effective_time_start'
            }, '2'), (0, _jsx4.default)(_tools.DateTimeInput, {
              required: true,
              labelName: '\u6709\u6548\u671F\u7ED3\u675F\u65F6\u95F4',
              defaultValue: item.effective_time_end,
              name: 'effective_time_end'
            }, '3')];
            break;
          default:
        }
        if (this.state.durationType > 1) {
          durationTypeFileds = (0, _jsx4.default)(_tools.Input, {
            type: 'number',
            labelName: '\u9879\u76EE\u671F\u9650\u65F6\u957F',
            defaultValue: item.project_duration_time || 0,
            onChange: this.initLimitDes,
            name: 'project_duration_time'
          });
        }
  
        return (0, _jsx4.default)(_tools.Modal, {
          title: '\u6DFB\u52A0\u7EA2\u5305'
        }, void 0, _react2.default.createElement(
          'form',
          { method: 'post', ref: 'form', onSubmit: this.props.submit },
          (0, _jsx4.default)(_tools.Alert, {
            msg: this.state.errorMsg
          }),
          (0, _jsx4.default)('input', {
            type: 'hidden',
            name: 'award_type',
            defaultValue: this.state.type
          }),
          (0, _jsx4.default)('input', {
            type: 'hidden',
            name: 'award_id',
            defaultValue: item.id
          }),
          (0, _jsx4.default)(_tools.Input, {
            labelName: '\u540D\u79F0',
            name: 'name',
            defaultValue: item.name
          }),
          (0, _jsx4.default)(_tools.Fieldset, {}, void 0, (0, _jsx4.default)(_tools.Select, {
            labelName: '\u7EA2\u5305\u7C7B\u578B',
            name: 'red_type',
            defaultValue: item.red_type,
            options: this.state.redEnvelopeTypes,
            onChange: this.redTypeChange
          }), typeFileds),
          (0, _jsx4.default)(_tools.Fieldset, {}, void 0, (0, _jsx4.default)(_tools.Select, {
            labelName: '\u6709\u6548\u671F\u7C7B\u578B',
            name: 'effective_time_type',
            defaultValue: item.effective_time_type,
            options: this.state.redEnvelopeTimeTypes,
            onChange: this.effectiveTimeTypeChange
          }), timeTypeFileds),
          (0, _jsx4.default)('hr', {
            style: { borderStyle: 'dashed' }
          }),
          (0, _jsx4.default)(_tools.Input, {
            type: 'number',
            onChange: this.initLimitDes,
            required: true,
            labelName: '\u6295\u8D44\u95E8\u69DB',
            defaultValue: item.investment_threshold || 0,
            name: 'investment_threshold',
            placeholder: '0\u4E3A\u4E0D\u9650\u5236'
          }),
          (0, _jsx4.default)(_tools.Select, {
            labelName: '\u9879\u76EE\u7C7B\u578B',
            name: 'project_type',
            onChange: this.initLimitDes,
            defaultValue: item.project_type,
            options: this.state.projectTypes
          }),
          (0, _jsx4.default)(_tools.Fieldset, {}, void 0, durationTypeFileds, (0, _jsx4.default)(_tools.Select, {
            labelName: '\u9879\u76EE\u671F\u9650\u7C7B\u578B',
            name: 'project_duration_type',
            defaultValue: item.project_duration_type,
            onChange: this.durationTypeChange,
            options: this.state.projectDurationTypes
          })),
          (0, _jsx4.default)(_tools.Input, {
            labelName: '\u4EA7\u54C1ID',
            name: 'product_id',
            defaultValue: item.product_id,
            onChange: this.initLimitDes,
            placeholder: '\u591A\u4E2A\u7528(,)\u5206\u5272,\u4E0D\u586B\u5219\u4E0D\u9650\u5236,'
          }),
          (0, _jsx4.default)(_tools.Select, {
            labelName: '\u5E73\u53F0\u9650\u5236',
            name: 'platform_type',
            defaultValue: item.platform_type,
            onChange: this.initLimitDes,
            options: this.state.platformTypes
          }),
          (0, _jsx4.default)(_tools.Textarea, {
            labelName: '\u9650\u5236\u8BF4\u660E',
            name: 'limit_desc',
            value: this.state.limitDes
          }),
          (0, _jsx4.default)('hr', {
            style: { borderStyle: 'dashed' }
          }),
          (0, _jsx4.default)(_tools.Textarea, {
            labelName: '\u7AD9\u5185\u4FE1\u6A21\u677F',
            defaultValue: typeof item.mail !== 'undefined' ? item.mail : (0, _omg.getConfig)('templateTypes', this.state.type),
            name: 'mail'
          }),
          (0, _jsx4.default)(_tools.Textarea, {
            labelName: '\u77ED\u4FE1\u6A21\u677F',
            name: 'message',
            defaultValue: item.message
          }),
          _ref
        ));
      }
    }]);
    return RedEnvelopeAddModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(RedEnvelopeAddModal);

/***/ }),
/* 127 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  var _omg = __webpack_require__(56);
  
  var _InterestAddModal = __webpack_require__(129);
  
  var _InterestAddModal2 = _interopRequireDefault(_InterestAddModal);
  
  var _omg2 = __webpack_require__(58);
  
  var _modal = __webpack_require__(70);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'id'), (0, _jsx3.default)('th', {}, void 0, '\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, '\u52A0\u606F\u503C'), (0, _jsx3.default)('th', {}, void 0, '\u52A0\u606F\u65F6\u957F'), (0, _jsx3.default)('th', {}, void 0, '\u6709\u6548\u671F'), (0, _jsx3.default)('th', {}, void 0, '\u6295\u8D44\u95E8\u69DB'), (0, _jsx3.default)('th', {}, void 0, '\u9879\u76EE\u7C7B\u578B'), (0, _jsx3.default)('th', {}, void 0, '\u9879\u76EE\u671F\u9650'), (0, _jsx3.default)('th', {}, void 0, '\u4EA7\u54C1ID'), (0, _jsx3.default)('th', {}, void 0, '\u5E73\u53F0\u9650\u5236'), (0, _jsx3.default)('th', {}, void 0, '\u9650\u5236\u8BF4\u660E'), (0, _jsx3.default)('th', {}, void 0, '\u6D88\u606F\u6A21\u677F'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var _ref2 = (0, _jsx3.default)('br', {}, 'filed_br');
  
  var _ref3 = (0, _jsx3.default)('br', {}, 'filed_br2');
  
  var Interest = function (_Component) {
    (0, _inherits3.default)(Interest, _Component);
  
    function Interest(props) {
      (0, _classCallCheck3.default)(this, Interest);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Interest.__proto__ || (0, _getPrototypeOf2.default)(Interest)).call(this, props));
  
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.showUpdateModal = _this.showUpdateModal.bind(_this);
      _this.pageSelect = _this.pageSelect.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      _this.list = _this.list.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.del = _this.del.bind(_this);
      _this.update = _this.update.bind(_this);
      var types = (0, _omg2.getConfig)('interestTypes');
      var timeTypes = (0, _omg2.getConfig)('interestTimeTypes');
      var page = props.page || 1;
      _this.state = {
        page: page,
        types: types,
        timeTypes: timeTypes
      };
      return _this;
    }
  
    (0, _createClass3.default)(Interest, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.setState({
            page: nextProps.page
          });
          this.list(nextProps.page);
        }
      }
    }, {
      key: 'del',
      value: function del(e) {
        var _this2 = this;
  
        var name = e.target.dataset.name;
        var id = +e.target.dataset.id;
        var formData = new FormData();
        formData.append('award_type', this.props.type);
        formData.append('award_id', id);
        if (!confirm('\u4F60\u786E\u5B9A\u5220\u9664:' + name + '\u5417\uFF1F\u8BE5\u64CD\u4F5C\u4E0D\u53EF\u9006')) {
          return;
        }
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_DEL,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this3 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this3.props.dispatch((0, _modal.hideModal)(true));
            _this3.fresh();
          } else {
            _this3.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this4 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_UPDATE,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this4.props.dispatch((0, _modal.hideModal)(true));
            _this4.fresh();
          } else {
            _this4.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.state.page);
      }
    }, {
      key: 'list',
      value: function list(page) {
        var formData = new FormData();
        formData.append('award_type', this.props.type);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_LIST,
          method: 'POST',
          queryObj: { page: page },
          formData: formData,
          key: this.props.type + '_' + page
        }));
      }
    }, {
      key: 'pageSelect',
      value: function pageSelect(page) {
        this.setState({
          page: page
        });
        this.list(page);
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_InterestAddModal2.default, {
          submit: this.add
        })));
      }
    }, {
      key: 'showUpdateModal',
      value: function showUpdateModal(e) {
        var index = e.target.dataset.index;
        var id = +e.target.dataset.id;
        var item = this.items[index] || {};
        if (item.id !== id) {
          alert('获取奖品信息失败,请刷新重试');
          return;
        }
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_InterestAddModal2.default, {
          item: item,
          update: true,
          submit: this.update
        })));
      }
    }, {
      key: 'render',
      value: function render() {
        var _this5 = this;
  
        var btn = (0, _jsx3.default)('button', {
          hidden: this.props.modal,
          className: 'btn btn-info btn-sm pull-xs-right',
          onClick: this.showAddModal
        }, void 0, '\u6DFB\u52A0');
        var _props = this.props,
            modal = _props.modal,
            _props$addAward = _props.addAward,
            addAward = _props$addAward === undefined ? false : _props$addAward;
  
        var key = this.props.type + '_' + this.state.page;
        var awardList = this.props.awardList || {};
        var award = awardList[key] || {};
        var items = award.data || [];
        this.items = items;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Card, {
          title: '\u52A0\u606F\u5238',
          btn: btn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, _ref, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          var addAwardBtn = false;
          if (modal) {
            addAwardBtn = (0, _jsx3.default)('button', {
              'data-type': _this5.props.type,
              'data-id': item.id,
              hidden: !modal,
              className: 'btn btn-info btn-sm',
              onClick: addAward
            }, void 0, '\u6DFB\u52A0');
          }
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, (item.rate_increases * 100).toFixed(2) + '%'), (0, _jsx3.default)('td', {}, void 0, item.rate_increases_type === 1 ? '全周期' : item.rate_increases_type === 2 ? item.rate_increases_time + '\u5929' : item.rate_increases_type === 3 ? [(0, _jsx3.default)('span', {}, 'filed_start', '\u5F00\u59CB: ', item.rate_increases_start), _ref2, (0, _jsx3.default)('span', {}, 'filed_end', '\u7ED3\u675F: ', item.rate_increases_end)] : item.rate_increases_type === 4 ? item.rate_increases_time + '\u6708' : '未知'), (0, _jsx3.default)('td', {}, void 0, +item.effective_time_type === 1 ? item.effective_time_day + '\u5929' : [(0, _jsx3.default)('span', {}, 'filed_start2', '\u5F00\u59CB: ', item.effective_time_start), _ref3, (0, _jsx3.default)('span', {}, 'filed_end2', '\u7ED3\u675F: ', item.effective_time_end)]), (0, _jsx3.default)('td', {}, void 0, item.investment_threshold ? item.investment_threshold + '\u5143' : '不限'), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('projectTypes', item.project_type)), (0, _jsx3.default)('td', {}, void 0, '' + (item.project_duration_type === 1 ? '' : item.project_duration_time) + (0, _omg2.getConfig)('projectDurationTypes', item.project_duration_type)), (0, _jsx3.default)('td', {}, void 0, item.product_id === '' ? '不限' : item.product_id), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('platformTypes', item.platform_type)), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Popover, {
            title: '\u9650\u5236\u8BF4\u660E',
            content: item.limit_desc === '' ? '无' : item.limit_desc + ' '
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Popover, {
            name: '\u7AD9\u5185\u4FE1',
            title: '\u7AD9\u5185\u4FE1',
            content: !item.mail ? '无' : item.mail + ' '
          }), (0, _jsx3.default)(_tools.Popover, {
            name: '\u77ED\u4FE1',
            title: '\u77ED\u4FE1',
            content: !item.message ? '无' : item.message + ' '
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: modal,
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            'data-index': index,
            onClick: _this5.showUpdateModal
          }, void 0, '\u7F16\u8F91'), addAwardBtn, (0, _jsx3.default)('button', {
            hidden: true || modal,
            className: 'btn btn-danger-outline btn-sm',
            'data-id': item.id,
            'data-name': item.name,
            onClick: _this5.del
          }, void 0, '\u5220\u9664')));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: award.current_page,
          lastPage: award.last_page,
          onClick: this.pageSelect,
          unurl: modal
        }));
      }
    }]);
    return Interest;
  }(_react.Component);
  
  Interest.defaultProps = {
    modal: false
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var awardList = omg[_constants.AWARD_LIST] || {};
    return {
      awardList: awardList
    };
  })(Interest);

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(58);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {});
  
  var InterestAddModal = function (_Component) {
    (0, _inherits3.default)(InterestAddModal, _Component);
  
    function InterestAddModal(props) {
      (0, _classCallCheck3.default)(this, InterestAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (InterestAddModal.__proto__ || (0, _getPrototypeOf2.default)(InterestAddModal)).call(this, props));
  
      _this.typeChange = _this.typeChange.bind(_this);
      _this.timeTypeChange = _this.timeTypeChange.bind(_this);
      _this.durationTypeChange = _this.durationTypeChange.bind(_this);
      _this.initLimitDes = _this.initLimitDes.bind(_this);
      var types = (0, _omg.getConfig)('interestTypes');
      var timeTypes = (0, _omg.getConfig)('interestTimeTypes');
      var projectTypes = (0, _omg.getConfig)('projectTypes');
      var platformTypes = (0, _omg.getConfig)('platformTypes');
      var projectDurationTypes = (0, _omg.getConfig)('projectDurationTypes');
      var item = props.item || {};
      _this.state = {
        errorMsg: '',
        awardType: 1,
        projectTypes: projectTypes,
        platformTypes: platformTypes,
        projectDurationTypes: projectDurationTypes,
        type: item.rate_increases_type ? item.rate_increases_type : 1,
        timeType: item.effective_time_type ? item.effective_time_type : 1,
        durationType: item.project_duration_type ? item.project_duration_type : 1,
        types: types,
        timeTypes: timeTypes,
        limitDes: item.limit_desc || ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(InterestAddModal, [{
      key: 'durationTypeChange',
      value: function durationTypeChange(e) {
        var value = e.target.value;
        this.setState({
          durationType: +value
        });
        this.initLimitDes();
      }
    }, {
      key: 'typeChange',
      value: function typeChange(e) {
        var value = e.target.value;
        this.setState({
          type: +value
        });
        this.initLimitDes();
      }
    }, {
      key: 'timeTypeChange',
      value: function timeTypeChange(e) {
        var value = e.target.value;
        this.setState({
          timeType: +value
        });
      }
    }, {
      key: 'initLimitDes',
      value: function initLimitDes() {
        var formData = new FormData(this.refs.form);
  
        var limitDesArr = [];
        var investmentThreshold = formData.get('investment_threshold') || 0;
        var projectDurationType = formData.get('project_duration_type') || 0;
        var projectDurationTime = formData.get('project_duration_time') || 0;
        var projectType = formData.get('project_type') || 0;
        var platformType = formData.get('platform_type') || 0;
        var productId = formData.get('product_id') || '';
        var rateIncreasesType = formData.get('rate_increases_type') || 0;
        var rateIncreasesTime = formData.get('rate_increases_time') || 0;
        // 投资门槛
        if (+investmentThreshold !== 0) {
          limitDesArr.push(investmentThreshold + '\u5143\u8D77\u6295');
        }
        // 项目时间限制
        if (+projectDurationType !== 1) {
          limitDesArr.push('\u9650' + projectDurationTime + (0, _omg.getConfig)('projectDurationTypes', projectDurationType));
        }
        // 项目类型限制
        if (+projectType !== 0) {
          limitDesArr.push((0, _omg.getConfig)('projectTypes', projectType) + '\u4E13\u4EAB');
        }
        // 加息时长
        console.dir(rateIncreasesType);
        if (+rateIncreasesType === 2) {
          limitDesArr.push('\u52A0\u606F' + rateIncreasesTime + '\u5929');
        }
        // 平台限制
        if (+platformType !== 0) {
          limitDesArr.push((0, _omg.getConfig)('platformTypes', platformType) + '\u4E13\u4EAB');
        }
        // 标限制
        if (productId) {
          limitDesArr.push('限特定标使用');
        }
        this.setState({
          limitDes: limitDesArr.join('，')
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var typeFileds = false;
        var timeTypeFileds = false;
        var durationTypeFileds = false;
        var item = this.props.item || {};
  
        // 根据红包类型显示字段
        switch (this.state.type) {
          case 1:
            typeFileds = false;
            break;
          case 2:
            typeFileds = [(0, _jsx3.default)(_tools.Input, {
              required: true,
              defaultValue: item.rate_increases_time,
              onChange: this.initLimitDes,
              type: 'number',
              labelName: '\u52A0\u606F\u5929\u6570',
              name: 'rate_increases_time'
            }, '1')];
            break;
          default:
        }
        // 根绝有效期类型显示相应字段
        switch (this.state.timeType) {
          case 1:
            timeTypeFileds = [(0, _jsx3.default)(_tools.Input, {
              required: true,
              type: 'number',
              defaultValue: item.effective_time_day,
              labelName: '\u6709\u6548\u671F\u5929\u6570',
              name: 'effective_time_day'
            }, '1')];
            break;
          case 2:
            timeTypeFileds = [(0, _jsx3.default)(_tools.DateTimeInput, {
              required: true,
              labelName: '\u6709\u6548\u671F\u5F00\u59CB\u65F6\u95F4',
              defaultValue: item.effective_time_start,
              name: 'effective_time_start'
            }, '2'), (0, _jsx3.default)(_tools.DateTimeInput, {
              required: true,
              labelName: '\u6709\u6548\u671F\u7ED3\u675F\u65F6\u95F4',
              defaultValue: item.effective_time_end,
              name: 'effective_time_end'
            }, '3')];
            break;
          default:
        }
        if (this.state.durationType > 1) {
          durationTypeFileds = (0, _jsx3.default)(_tools.Input, {
            type: 'number',
            labelName: '\u9879\u76EE\u671F\u9650\u65F6\u957F',
            onChange: this.initLimitDes,
            defaultValue: item.project_duration_time,
            name: 'project_duration_time'
          });
        }
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u6DFB\u52A0\u52A0\u606F\u5238'
        }, void 0, _react2.default.createElement(
          'form',
          { method: 'post', ref: 'form', onSubmit: this.props.submit },
          (0, _jsx3.default)(_tools.Alert, {
            msg: this.state.errorMsg
          }),
          (0, _jsx3.default)('input', {
            type: 'hidden',
            name: 'award_type',
            value: this.state.awardType
          }),
          (0, _jsx3.default)('input', {
            type: 'hidden',
            name: 'award_id',
            value: item.id
          }),
          (0, _jsx3.default)(_tools.Input, {
            labelName: '\u540D\u79F0',
            name: 'name',
            defaultValue: item.name
          }),
          (0, _jsx3.default)(_tools.PercentInput, {
            labelName: '\u52A0\u606F\u503C',
            name: 'rate_increases',
            defaultValue: item.rate_increases && (item.rate_increases * 100).toFixed(2),
            placeholder: '\u4F8B:2.5\u4EE3\u8868\u52A0\u606F2.5%'
          }),
          (0, _jsx3.default)(_tools.Fieldset, {}, void 0, (0, _jsx3.default)(_tools.Select, {
            labelName: '\u52A0\u606F\u65F6\u957F\u7C7B\u578B',
            name: 'rate_increases_type',
            defaultValue: item.rate_increases_type,
            options: this.state.types,
            onChange: this.typeChange
          }), typeFileds),
          (0, _jsx3.default)(_tools.Fieldset, {}, void 0, (0, _jsx3.default)(_tools.Select, {
            labelName: '\u6709\u6548\u671F\u7C7B\u578B',
            name: 'effective_time_type',
            defaultValue: item.effective_time_type,
            options: this.state.timeTypes,
            onChange: this.timeTypeChange
          }), timeTypeFileds),
          (0, _jsx3.default)('hr', {
            style: { borderStyle: 'dashed' }
          }),
          (0, _jsx3.default)(_tools.Input, {
            type: 'number',
            required: true,
            labelName: '\u6295\u8D44\u95E8\u69DB',
            onChange: this.initLimitDes,
            defaultValue: item.investment_threshold || 0,
            name: 'investment_threshold',
            placeholder: '0\u4E3A\u4E0D\u9650\u5236'
          }),
          (0, _jsx3.default)(_tools.Select, {
            labelName: '\u9879\u76EE\u7C7B\u578B',
            name: 'project_type',
            onChange: this.initLimitDes,
            defaultValue: item.project_type,
            options: this.state.projectTypes
          }),
          (0, _jsx3.default)(_tools.Fieldset, {}, void 0, durationTypeFileds, (0, _jsx3.default)(_tools.Select, {
            labelName: '\u9879\u76EE\u671F\u9650\u7C7B\u578B',
            name: 'project_duration_type',
            defaultValue: item.project_duration_type,
            onChange: this.durationTypeChange,
            options: this.state.projectDurationTypes
          })),
          (0, _jsx3.default)(_tools.Input, {
            labelName: '\u4EA7\u54C1ID',
            name: 'product_id',
            onChange: this.initLimitDes,
            defaultValue: item.product_id,
            placeholder: '\u4E0D\u586B\u5219\u4E0D\u9650\u5236'
          }),
          (0, _jsx3.default)(_tools.Select, {
            labelName: '\u5E73\u53F0\u9650\u5236',
            name: 'platform_type',
            onChange: this.initLimitDes,
            defaultValue: item.platform_type,
            options: this.state.platformTypes
          }),
          (0, _jsx3.default)(_tools.Textarea, {
            labelName: '\u9650\u5236\u8BF4\u660E',
            name: 'limit_desc',
            value: this.state.limitDes
          }),
          (0, _jsx3.default)('hr', {
            style: { borderStyle: 'dashed' }
          }),
          (0, _jsx3.default)(_tools.Textarea, {
            labelName: '\u7AD9\u5185\u4FE1\u6A21\u677F',
            name: 'mail',
            defaultValue: typeof item.mail !== 'undefined' ? item.mail : (0, _omg.getConfig)('templateTypes', this.state.awardType)
          }),
          (0, _jsx3.default)(_tools.Textarea, {
            labelName: '\u77ED\u4FE1\u6A21\u677F',
            name: 'message',
            defaultValue: item.message || ''
          }),
          _ref
        ));
      }
    }]);
    return InterestAddModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(InterestAddModal);

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  var _omg = __webpack_require__(56);
  
  var _CouponAddModal = __webpack_require__(131);
  
  var _CouponAddModal2 = _interopRequireDefault(_CouponAddModal);
  
  var _modal = __webpack_require__(70);
  
  var _omg2 = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('th', {}, void 0, 'id');
  
  var _ref2 = (0, _jsx3.default)('th', {}, void 0, '\u540D\u79F0');
  
  var _ref3 = (0, _jsx3.default)('th', {}, void 0, '\u5BFC\u5165\u72B6\u6001');
  
  var _ref4 = (0, _jsx3.default)('td', {}, void 0, '\u6D88\u606F\u6A21\u677F');
  
  var _ref5 = (0, _jsx3.default)('td', {}, void 0, '\u64CD\u4F5C');
  
  var Coupon = function (_Component) {
    (0, _inherits3.default)(Coupon, _Component);
  
    function Coupon(props) {
      (0, _classCallCheck3.default)(this, Coupon);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Coupon.__proto__ || (0, _getPrototypeOf2.default)(Coupon)).call(this, props));
  
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.showUpdateModal = _this.showUpdateModal.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      _this.list = _this.list.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.showNum = _this.showNum.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.export = _this.export.bind(_this);
      _this.disable = _this.disable.bind(_this);
      var page = props.page || 1;
      _this.state = {
        page: page
      };
      return _this;
    }
  
    (0, _createClass3.default)(Coupon, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.setState({
            page: nextProps.page
          });
          this.list(nextProps.page);
        }
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.props.dispatch((0, _modal.hideModal)(true));
            _this2.fresh();
          } else {
            _this2.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'showNum',
      value: function showNum(e) {
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('coupon_id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_COUPON_TOTAL,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            alert('\u672A\u9001\u51FA: ' + (json.data.notUse || 0) + ' \u4E2A,\u5DF2\u9001\u51FA: ' + (json.data.use || 0) + ' \u4E2A');
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this3 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_UPDATE,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this3.props.dispatch((0, _modal.hideModal)(true));
            _this3.fresh();
          } else {
            _this3.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.state.page);
      }
    }, {
      key: 'list',
      value: function list(page) {
        var formData = new FormData();
        formData.append('award_type', this.props.type);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_LIST,
          method: 'POST',
          queryObj: { page: page },
          formData: formData,
          key: this.props.type + '_' + page
        }));
      }
    }, {
      key: 'pageSelect',
      value: function pageSelect(page) {
        this.setState({
          page: page
        });
        this.list(page);
      }
    }, {
      key: 'showUpdateModal',
      value: function showUpdateModal(e) {
        var index = e.target.dataset.index;
        var id = +e.target.dataset.id;
        var item = this.items[index] || {};
        if (item.id !== id) {
          return alert('获取奖品信息失败,请刷新重试');
        }
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_CouponAddModal2.default, {
          item: item,
          update: true,
          submit: this.update
        })));
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_CouponAddModal2.default, {
          submit: this.add
        })));
      }
    }, {
      key: 'export',
      value: function _export(e) {
        var _this4 = this;
  
        var id = e.target.dataset.id;
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_COUPON_EXPORT,
          method: 'GET',
          queryObj: { id: id }
        })).then(function (json) {
          if (json.error_code === 0) {
            _this4.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'getDownloadUrl',
      value: function getDownloadUrl(file) {
        var requestUrl = (0, _omg2.getApi)(_constants.AWARD_COUPON_DOWNLOAD);
        return requestUrl + '?file=' + file;
      }
    }, {
      key: 'disable',
      value: function disable(e) {
        var _this5 = this;
  
        var index = e.target.dataset.index;
        var item = this.items[index];
        if (!confirm('\u672C\u6761\u5956\u54C1\u5C06\u4E0D\u80FD\u518D\u4F7F\u7528,\u4F60\u786E\u5B9A\u7981\u7528: ' + item.name + ' \u5417\u3002')) {
          return;
        }
        var id = e.target.dataset.id;
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_INVALIDE_COUPON,
          method: 'POST',
          queryObj: { id: id }
        })).then(function (json) {
          if (json.error_code === 0) {
            _this5.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this6 = this;
  
        var btn = (0, _jsx3.default)('button', {
          hidden: this.props.modal,
          className: 'btn btn-info btn-sm pull-xs-right',
          onClick: this.showAddModal
        }, void 0, '\u6DFB\u52A0');
        var _props = this.props,
            modal = _props.modal,
            _props$addAward = _props.addAward,
            addAward = _props$addAward === undefined ? false : _props$addAward;
  
        var key = this.props.type + '_' + this.state.page;
        var awardList = this.props.awardList || {};
        var award = awardList[key] || {};
        var items = award.data || [];
        this.items = items;
        return (0, _jsx3.default)(_tools.Card, {
          title: '\u4F18\u60E0\u5238',
          btn: btn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, _ref, _ref2, _ref3, _ref4, (0, _jsx3.default)('td', {
          hidden: modal
        }, void 0, '\u5BFC\u51FA'), _ref5)), (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          var addAwardBtn = false;
          if (modal) {
            addAwardBtn = (0, _jsx3.default)('button', {
              'data-type': _this6.props.type,
              'data-id': item.id,
              hidden: !modal || item.is_del,
              className: 'btn btn-info btn-sm',
              onClick: addAward
            }, void 0, '\u6DFB\u52A0');
          }
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, item.import_status === 2 ? '成功' : '导入中'), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Popover, {
            name: '\u7AD9\u5185\u4FE1',
            title: '\u7AD9\u5185\u4FE1',
            content: !item.mail ? '无' : item.mail + ' '
          }), (0, _jsx3.default)(_tools.Popover, {
            name: '\u77ED\u4FE1',
            title: '\u77ED\u4FE1',
            content: !item.message ? '无' : item.message + ' '
          })), (0, _jsx3.default)('td', {
            hidden: modal
          }, void 0, (0, _jsx3.default)('button', {
            hidden: item.export_status !== 0,
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            onClick: _this6.export
          }, void 0, '生成导出文件'), (0, _jsx3.default)('button', {
            hidden: item.export_status !== 1,
            className: 'btn btn-sm',
            disabled: true,
            'data-id': item.id
          }, void 0, '生成中...'), (0, _jsx3.default)('button', {
            hidden: item.export_status !== 1,
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            onClick: _this6.fresh
          }, void 0, '刷新'), (0, _jsx3.default)('button', {
            hidden: item.export_status !== 2,
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            onClick: _this6.export
          }, void 0, '重新生成'), (0, _jsx3.default)('a', {
            hidden: item.export_status !== 2,
            href: _this6.getDownloadUrl(item.file),
            target: '_blank'
          }, void 0, '\u4E0B\u8F7D')), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            className: 'btn btn-info-outline btn-sm',
            'data-id': item.id,
            onClick: _this6.showNum
          }, void 0, '\u67E5\u770B\u6570\u91CF'), (0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            'data-index': index,
            onClick: _this6.showUpdateModal
          }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
            hidden: !item.is_del,
            className: 'btn btn-danger btn-sm',
            disabled: true
          }, void 0, '\u5DF2\u7981\u7528'), (0, _jsx3.default)('button', {
            hidden: modal || item.is_del,
            className: 'btn btn-danger-outline btn-sm',
            'data-id': item.id,
            'data-index': index,
            onClick: _this6.disable
          }, void 0, '\u7981\u7528'), addAwardBtn));
        }))));
      }
    }]);
    return Coupon;
  }(_react.Component);
  
  Coupon.defaultProps = {
    awards: {},
    modal: false
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var awardList = omg[_constants.AWARD_LIST] || {};
    return {
      awardList: awardList
    };
  })(Coupon);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.FileInput, {
    labelName: '\u4F18\u60E0\u5238\u6587\u4EF6',
    name: 'file'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Submit, {});
  
  var CouponAddModal = function (_Component) {
    (0, _inherits3.default)(CouponAddModal, _Component);
  
    function CouponAddModal(props) {
      (0, _classCallCheck3.default)(this, CouponAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (CouponAddModal.__proto__ || (0, _getPrototypeOf2.default)(CouponAddModal)).call(this, props));
  
      _this.state = {
        errorMsg: '',
        type: 6
      };
      return _this;
    }
  
    (0, _createClass3.default)(CouponAddModal, [{
      key: 'render',
      value: function render() {
        var item = this.props.item || {};
        return (0, _jsx3.default)(_tools.Modal, {
          title: this.props.update ? '编辑优惠券' : '添加优惠券'
        }, void 0, (0, _jsx3.default)('form', {
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.state.errorMsg
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'award_type',
          value: this.state.type
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'award_id',
          value: item.id
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u4F18\u60E0\u5238\u540D\u79F0',
          name: 'name',
          defaultValue: item.name
        }), (0, _jsx3.default)('div', {
          hidden: this.props.update
        }, void 0, _ref), (0, _jsx3.default)(_tools.Textarea, {
          labelName: '\u4F18\u60E0\u5238\u4ECB\u7ECD',
          name: 'desc',
          defaultValue: item.desc
        }), (0, _jsx3.default)('hr', {
          style: { borderStyle: 'dashed' }
        }), (0, _jsx3.default)(_tools.Textarea, {
          labelName: '\u7AD9\u5185\u4FE1\u6A21\u677F',
          defaultValue: typeof item.mail !== 'undefined' ? item.mail : (0, _omg.getConfig)('templateTypes', this.state.type),
          name: 'mail'
        }), (0, _jsx3.default)(_tools.Textarea, {
          labelName: '\u77ED\u4FE1\u6A21\u677F',
          name: 'message',
          defaultValue: item.message
        }), _ref2));
      }
    }]);
    return CouponAddModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(CouponAddModal);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  var _omg = __webpack_require__(56);
  
  var _omg2 = __webpack_require__(58);
  
  var _ExperienceAddModal = __webpack_require__(133);
  
  var _ExperienceAddModal2 = _interopRequireDefault(_ExperienceAddModal);
  
  var _modal = __webpack_require__(70);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'id'), (0, _jsx3.default)('th', {}, void 0, '\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, '\u91D1\u989D'), (0, _jsx3.default)('th', {}, void 0, '\u6709\u6548\u671F'), (0, _jsx3.default)('th', {}, void 0, '\u6D88\u606F\u6A21\u677F'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var _ref2 = (0, _jsx3.default)('br', {});
  
  var Experience = function (_Component) {
    (0, _inherits3.default)(Experience, _Component);
  
    function Experience(props) {
      (0, _classCallCheck3.default)(this, Experience);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Experience.__proto__ || (0, _getPrototypeOf2.default)(Experience)).call(this, props));
  
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.showUpdateModal = _this.showUpdateModal.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      _this.list = _this.list.bind(_this);
      _this.del = _this.del.bind(_this);
      var page = props.page || 1;
      _this.state = {
        page: page
      };
      return _this;
    }
  
    (0, _createClass3.default)(Experience, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.setState({
            page: nextProps.page
          });
          this.list(nextProps.page);
        }
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.props.dispatch((0, _modal.hideModal)(true));
            _this2.fresh();
          } else {
            _this2.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'del',
      value: function del(e) {
        var _this3 = this;
  
        var name = e.target.dataset.name;
        var id = +e.target.dataset.id;
        var formData = new FormData();
        formData.append('award_type', this.props.type);
        formData.append('award_id', id);
        if (!confirm('\u4F60\u786E\u5B9A\u5220\u9664:' + name + '\u5417\uFF1F\u8BE5\u64CD\u4F5C\u4E0D\u53EF\u9006')) {
          return;
        }
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_DEL,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this3.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this4 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_UPDATE,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this4.props.dispatch((0, _modal.hideModal)(true));
            _this4.fresh();
          } else {
            _this4.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.state.page);
      }
    }, {
      key: 'list',
      value: function list(page) {
        var formData = new FormData();
        formData.append('award_type', this.props.type);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_LIST,
          method: 'POST',
          queryObj: { page: page },
          formData: formData,
          key: this.props.type + '_' + page
        }));
      }
    }, {
      key: 'pageSelect',
      value: function pageSelect(page) {
        this.setState({
          page: page
        });
        this.list(page);
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_ExperienceAddModal2.default, {
          submit: this.add
        })));
      }
    }, {
      key: 'showUpdateModal',
      value: function showUpdateModal(e) {
        var index = e.target.dataset.index;
        var id = +e.target.dataset.id;
        var item = this.items[index] || {};
        if (item.id !== id) {
          alert('获取奖品信息失败,请刷新重试');
          return;
        }
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_ExperienceAddModal2.default, {
          item: item,
          update: true,
          submit: this.update
        })));
      }
    }, {
      key: 'render',
      value: function render() {
        var _this5 = this;
  
        var btn = (0, _jsx3.default)('button', {
          hidden: this.props.modal,
          className: 'btn btn-info btn-sm pull-xs-right',
          onClick: this.showAddModal
        }, void 0, '\u6DFB\u52A0');
        var _props = this.props,
            modal = _props.modal,
            _props$addAward = _props.addAward,
            addAward = _props$addAward === undefined ? false : _props$addAward;
  
        var key = this.props.type + '_' + this.state.page;
        var awardList = this.props.awardList || {};
        var award = awardList[key] || {};
        var items = award.data || [];
        this.items = items;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Card, {
          title: '\u4F53\u9A8C\u91D1',
          btn: btn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, _ref, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          var addAwardBtn = false;
          if (modal) {
            addAwardBtn = (0, _jsx3.default)('button', {
              'data-type': _this5.props.type,
              'data-id': item.id,
              hidden: !modal,
              className: 'btn btn-info btn-sm',
              onClick: addAward
            }, void 0, '\u6DFB\u52A0');
          }
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, item.experience_amount_money), (0, _jsx3.default)('td', {}, void 0, +item.effective_time_type === 1 ? item.effective_time_day + '\u5929' : ['\u5F00\u59CB: ' + item.effective_time_start, _ref2, '\u7ED3\u675F: ' + item.effective_time_end]), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Popover, {
            name: '\u7AD9\u5185\u4FE1',
            title: '\u7AD9\u5185\u4FE1',
            content: !item.mail ? '无' : item.mail + ' '
          }), (0, _jsx3.default)(_tools.Popover, {
            name: '\u77ED\u4FE1',
            title: '\u77ED\u4FE1',
            content: !item.message ? '无' : item.message + ' '
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: modal,
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            'data-index': index,
            onClick: _this5.showUpdateModal
          }, void 0, '\u7F16\u8F91'), addAwardBtn, (0, _jsx3.default)('button', {
            hidden: true || modal,
            className: 'btn btn-danger-outline btn-sm',
            'data-id': item.id,
            'data-name': item.name,
            onClick: _this5.del
          }, void 0, '\u5220\u9664')));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: award.current_page,
          lastPage: award.last_page,
          onClick: this.pageSelect,
          unurl: modal
        }));
      }
    }]);
    return Experience;
  }(_react.Component);
  
  Experience.defaultProps = {
    awards: {},
    modal: false
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var awardList = omg[_constants.AWARD_LIST] || {};
    return {
      awardList: awardList
    };
  })(Experience);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(58);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('input', {
    type: 'hidden',
    name: 'platform_type',
    value: '0'
  });
  
  var _ref2 = (0, _jsx3.default)('input', {
    type: 'hidden',
    name: 'limit_desc',
    value: ''
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var ExperienceAddModal = function (_Component) {
    (0, _inherits3.default)(ExperienceAddModal, _Component);
  
    function ExperienceAddModal(props) {
      (0, _classCallCheck3.default)(this, ExperienceAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ExperienceAddModal.__proto__ || (0, _getPrototypeOf2.default)(ExperienceAddModal)).call(this, props));
  
      _this.timeTypeChange = _this.timeTypeChange.bind(_this);
      var types = (0, _omg.getConfig)('interestTypes');
      var timeTypes = (0, _omg.getConfig)('interestTimeTypes');
      var platformTypes = (0, _omg.getConfig)('platformTypes');
      var item = props.item || {};
      _this.state = {
        errorMsg: '',
        awardType: 3,
        type: 3,
        timeType: item.effective_time_type || 1,
        types: types,
        timeTypes: timeTypes,
        platformTypes: platformTypes
      };
      return _this;
    }
  
    (0, _createClass3.default)(ExperienceAddModal, [{
      key: 'timeTypeChange',
      value: function timeTypeChange(e) {
        var value = $(e.target).val();
        this.setState({
          timeType: +value
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var item = this.props.item || {};
        var timeTypeFileds = false;
        // 根绝有效期类型显示相应字段
        switch (this.state.timeType) {
          case 1:
            timeTypeFileds = [(0, _jsx3.default)(_tools.Input, {
              required: true,
              type: 'number',
              labelName: '\u6709\u6548\u671F\u5929\u6570',
              defaultValue: item.effective_time_day,
              name: 'effective_time_day'
            }, '1')];
            break;
          case 2:
            timeTypeFileds = [(0, _jsx3.default)(_tools.DateTimeInput, {
              required: true,
              labelName: '\u6709\u6548\u671F\u5F00\u59CB\u65F6\u95F4',
              defaultValue: item.effective_time_start,
              name: 'effective_time_start'
            }, '2'), (0, _jsx3.default)(_tools.DateTimeInput, {
              required: true,
              labelName: '\u6709\u6548\u671F\u7ED3\u675F\u65F6\u95F4',
              defaultValue: item.effective_time_end,
              name: 'effective_time_end'
            }, '3')];
            break;
          default:
        }
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u6DFB\u52A0\u4F53\u9A8C\u91D1'
        }, void 0, (0, _jsx3.default)('form', {
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.state.errorMsg
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'award_type',
          value: this.state.awardType
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'award_id',
          defaultValue: item.id
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u540D\u79F0',
          name: 'name',
          defaultValue: item.name
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u4F53\u9A8C\u91D1\u989D',
          type: 'number',
          name: 'experience_amount_money',
          defaultValue: item.experience_amount_money
        }), (0, _jsx3.default)(_tools.Fieldset, {}, void 0, (0, _jsx3.default)(_tools.Select, {
          labelName: '\u6709\u6548\u671F\u7C7B\u578B',
          name: 'effective_time_type',
          defaultValue: item.effective_time_type,
          options: this.state.timeTypes,
          onChange: this.timeTypeChange
        }), timeTypeFileds), _ref, _ref2, (0, _jsx3.default)('hr', {
          style: { borderStyle: 'dashed' }
        }), (0, _jsx3.default)(_tools.Textarea, {
          labelName: '\u7AD9\u5185\u4FE1\u6A21\u677F',
          defaultValue: item.mail || (0, _omg.getConfig)('templateTypes', this.state.type),
          name: 'mail'
        }), (0, _jsx3.default)(_tools.Textarea, {
          labelName: '\u77ED\u4FE1\u6A21\u677F',
          name: 'message',
          defaultValue: item.message
        }), _ref3));
      }
    }]);
    return ExperienceAddModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(ExperienceAddModal);

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  var _omg = __webpack_require__(56);
  
  var _AddModal = __webpack_require__(135);
  
  var _AddModal2 = _interopRequireDefault(_AddModal);
  
  var _modal = __webpack_require__(70);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'id'), (0, _jsx3.default)('th', {}, void 0, '\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, '\u79EF\u5206\u503C'), (0, _jsx3.default)('th', {}, void 0, '\u6D88\u606F\u6A21\u677F'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var Point = function (_Component) {
    (0, _inherits3.default)(Point, _Component);
  
    function Point(props) {
      (0, _classCallCheck3.default)(this, Point);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Point.__proto__ || (0, _getPrototypeOf2.default)(Point)).call(this, props));
  
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.showUpdateModal = _this.showUpdateModal.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      _this.list = _this.list.bind(_this);
      var page = props.page || 1;
      _this.state = {
        page: page
      };
      return _this;
    }
  
    (0, _createClass3.default)(Point, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.setState({
            page: nextProps.page
          });
          this.list(nextProps.page);
        }
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.props.dispatch((0, _modal.hideModal)(true));
            _this2.fresh();
          } else {
            _this2.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this3 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_UPDATE,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this3.props.dispatch((0, _modal.hideModal)(true));
            _this3.fresh();
          } else {
            _this3.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.state.page);
      }
    }, {
      key: 'list',
      value: function list(page) {
        var formData = new FormData();
        formData.append('award_type', this.props.type);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_LIST,
          method: 'POST',
          queryObj: { page: page },
          formData: formData,
          key: this.props.type + '_' + page
        }));
      }
    }, {
      key: 'pageSelect',
      value: function pageSelect(page) {
        this.setState({
          page: page
        });
        this.list(page);
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          submit: this.add
        })));
      }
    }, {
      key: 'showUpdateModal',
      value: function showUpdateModal(e) {
        var index = e.target.dataset.index;
        var id = +e.target.dataset.id;
        var item = this.items[index] || {};
        if (item.id !== id) {
          return alert('获取奖品信息失败,请刷新重试');
        }
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          item: item,
          update: true,
          submit: this.update
        })));
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;
  
        var btn = (0, _jsx3.default)('button', {
          hidden: this.props.modal,
          className: 'btn btn-info btn-sm pull-xs-right',
          onClick: this.showAddModal
        }, void 0, '\u6DFB\u52A0');
        var _props = this.props,
            modal = _props.modal,
            _props$addAward = _props.addAward,
            addAward = _props$addAward === undefined ? false : _props$addAward;
  
        var key = this.props.type + '_' + this.state.page;
        var awardList = this.props.awardList || {};
        var award = awardList[key] || {};
        var items = award.data || [];
        this.items = items;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Card, {
          title: '\u4F53\u9A8C\u91D1',
          btn: btn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, _ref, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          var addAwardBtn = false;
          if (modal) {
            addAwardBtn = (0, _jsx3.default)('button', {
              'data-type': _this4.props.type,
              'data-id': item.id,
              hidden: !modal,
              className: 'btn btn-info btn-sm',
              onClick: addAward
            }, void 0, '\u6DFB\u52A0');
          }
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, item.integral), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Popover, {
            name: '\u7AD9\u5185\u4FE1',
            title: '\u7AD9\u5185\u4FE1',
            content: !item.mail ? '无' : item.mail + ' '
          }), (0, _jsx3.default)(_tools.Popover, {
            name: '\u77ED\u4FE1',
            title: '\u77ED\u4FE1',
            content: !item.message ? '无' : item.message + ' '
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: modal,
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            'data-index': index,
            onClick: _this4.showUpdateModal
          }, void 0, '\u7F16\u8F91'), addAwardBtn));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: award.current_page,
          lastPage: award.last_page,
          onClick: this.pageSelect,
          unurl: modal
        }));
      }
    }]);
    return Point;
  }(_react.Component);
  
  Point.defaultProps = {
    awards: {},
    modal: false
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var awardList = omg[_constants.AWARD_LIST] || {};
    return {
      awardList: awardList
    };
  })(Point);

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(58);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {});
  
  var AddModal = function (_Component) {
    (0, _inherits3.default)(AddModal, _Component);
  
    function AddModal(props) {
      (0, _classCallCheck3.default)(this, AddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (AddModal.__proto__ || (0, _getPrototypeOf2.default)(AddModal)).call(this, props));
  
      _this.timeTypeChange = _this.timeTypeChange.bind(_this);
      var types = (0, _omg.getConfig)('interestTypes');
      var timeTypes = (0, _omg.getConfig)('interestTimeTypes');
      var platformTypes = (0, _omg.getConfig)('platformTypes');
      var item = props.item || {};
      _this.state = {
        errorMsg: '',
        awardType: 4,
        type: 4,
        timeType: item.effective_time_type || 1,
        types: types,
        timeTypes: timeTypes,
        platformTypes: platformTypes
      };
      return _this;
    }
  
    (0, _createClass3.default)(AddModal, [{
      key: 'timeTypeChange',
      value: function timeTypeChange(e) {
        var value = $(e.target).val();
        this.setState({
          timeType: +value
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var item = this.props.item || {};
        var timeTypeFileds = false;
        // 根绝有效期类型显示相应字段
        switch (this.state.timeType) {
          case 1:
            timeTypeFileds = [(0, _jsx3.default)(_tools.Input, {
              required: true,
              type: 'number',
              labelName: '\u6709\u6548\u671F\u5929\u6570',
              defaultValue: item.effective_time_day,
              name: 'effective_time_day'
            }, '1')];
            break;
          case 2:
            timeTypeFileds = [(0, _jsx3.default)(_tools.DateTimeInput, {
              required: true,
              labelName: '\u6709\u6548\u671F\u5F00\u59CB\u65F6\u95F4',
              defaultValue: item.effective_time_start,
              name: 'effective_time_start'
            }, '2'), (0, _jsx3.default)(_tools.DateTimeInput, {
              required: true,
              labelName: '\u6709\u6548\u671F\u7ED3\u675F\u65F6\u95F4',
              defaultValue: item.effective_time_end,
              name: 'effective_time_end'
            }, '3')];
            break;
          default:
        }
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u6DFB\u52A0\u4F53\u9A8C\u91D1'
        }, void 0, (0, _jsx3.default)('form', {
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.state.errorMsg
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'award_type',
          value: this.state.awardType
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'award_id',
          defaultValue: item.id
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u540D\u79F0',
          name: 'name',
          defaultValue: item.name
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u79EF\u5206\u503C',
          type: 'number',
          name: 'integral',
          defaultValue: item.integral
        }), (0, _jsx3.default)('hr', {
          style: { borderStyle: 'dashed' }
        }), (0, _jsx3.default)(_tools.Textarea, {
          labelName: '\u7AD9\u5185\u4FE1\u6A21\u677F',
          defaultValue: item.mail || (0, _omg.getConfig)('templateTypes', this.state.type),
          name: 'mail'
        }), (0, _jsx3.default)(_tools.Textarea, {
          labelName: '\u77ED\u4FE1\u6A21\u677F',
          name: 'message',
          defaultValue: item.message
        }), _ref));
      }
    }]);
    return AddModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(AddModal);

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  var _omg = __webpack_require__(56);
  
  var _AddModal = __webpack_require__(137);
  
  var _AddModal2 = _interopRequireDefault(_AddModal);
  
  var _modal = __webpack_require__(70);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'id'), (0, _jsx3.default)('th', {}, void 0, '\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, '\u91D1\u989D'), (0, _jsx3.default)('th', {}, void 0, '\u4EA4\u6613\u7C7B\u578B'), (0, _jsx3.default)('th', {}, void 0, '\u6D88\u606F\u6A21\u677F'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var Cash = function (_Component) {
    (0, _inherits3.default)(Cash, _Component);
  
    function Cash(props) {
      (0, _classCallCheck3.default)(this, Cash);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Cash.__proto__ || (0, _getPrototypeOf2.default)(Cash)).call(this, props));
  
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.showUpdateModal = _this.showUpdateModal.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      _this.list = _this.list.bind(_this);
      var page = props.page || 1;
      _this.state = {
        page: page
      };
      return _this;
    }
  
    (0, _createClass3.default)(Cash, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.setState({
            page: nextProps.page
          });
          this.list(nextProps.page);
        }
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.props.dispatch((0, _modal.hideModal)(true));
            _this2.fresh();
          } else {
            _this2.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this3 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_UPDATE,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this3.props.dispatch((0, _modal.hideModal)(true));
            _this3.fresh();
          } else {
            _this3.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.state.page);
      }
    }, {
      key: 'list',
      value: function list(page) {
        var formData = new FormData();
        formData.append('award_type', this.props.type);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_LIST,
          method: 'POST',
          queryObj: { page: page },
          formData: formData,
          key: this.props.type + '_' + page
        }));
      }
    }, {
      key: 'pageSelect',
      value: function pageSelect(page) {
        this.setState({
          page: page
        });
        this.list(page);
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          submit: this.add
        })));
      }
    }, {
      key: 'showUpdateModal',
      value: function showUpdateModal(e) {
        var index = e.target.dataset.index;
        var id = +e.target.dataset.id;
        var item = this.items[index] || {};
        if (item.id !== id) {
          return alert('获取奖品信息失败,请刷新重试');
        }
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          item: item,
          update: true,
          submit: this.update
        })));
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;
  
        var btn = (0, _jsx3.default)('button', {
          hidden: this.props.modal,
          className: 'btn btn-info btn-sm pull-xs-right',
          onClick: this.showAddModal
        }, void 0, '\u6DFB\u52A0');
        var _props = this.props,
            modal = _props.modal,
            _props$addAward = _props.addAward,
            addAward = _props$addAward === undefined ? false : _props$addAward;
  
        var key = this.props.type + '_' + this.state.page;
        var awardList = this.props.awardList || {};
        var award = awardList[key] || {};
        var items = award.data || [];
        this.items = items;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Card, {
          title: '\u73B0\u91D1',
          btn: btn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, _ref, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          var addAwardBtn = false;
          if (modal) {
            addAwardBtn = (0, _jsx3.default)('button', {
              'data-type': _this4.props.type,
              'data-id': item.id,
              hidden: !modal,
              className: 'btn btn-info btn-sm',
              onClick: addAward
            }, void 0, '\u6DFB\u52A0');
          }
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, item.money), (0, _jsx3.default)('td', {}, void 0, item.type), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Popover, {
            name: '\u7AD9\u5185\u4FE1',
            title: '\u7AD9\u5185\u4FE1',
            content: !item.mail ? '无' : item.mail + ' '
          }), (0, _jsx3.default)(_tools.Popover, {
            name: '\u77ED\u4FE1',
            title: '\u77ED\u4FE1',
            content: !item.message ? '无' : item.message + ' '
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: modal,
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            'data-index': index,
            onClick: _this4.showUpdateModal
          }, void 0, '\u7F16\u8F91'), addAwardBtn));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: award.current_page,
          lastPage: award.last_page,
          onClick: this.pageSelect,
          unurl: modal
        }));
      }
    }]);
    return Cash;
  }(_react.Component);
  
  Cash.defaultProps = {
    awards: {},
    modal: false
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var awardList = omg[_constants.AWARD_LIST] || {};
    return {
      awardList: awardList
    };
  })(Cash);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(58);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {});
  
  var AddModal = function (_Component) {
    (0, _inherits3.default)(AddModal, _Component);
  
    function AddModal(props) {
      (0, _classCallCheck3.default)(this, AddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (AddModal.__proto__ || (0, _getPrototypeOf2.default)(AddModal)).call(this, props));
  
      _this.timeTypeChange = _this.timeTypeChange.bind(_this);
      var types = (0, _omg.getConfig)('interestTypes');
      var timeTypes = (0, _omg.getConfig)('interestTimeTypes');
      var platformTypes = (0, _omg.getConfig)('platformTypes');
      var item = props.item || {};
      _this.state = {
        errorMsg: '',
        awardType: 7,
        type: 7,
        timeType: item.effective_time_type || 1,
        types: types,
        timeTypes: timeTypes,
        platformTypes: platformTypes
      };
      return _this;
    }
  
    (0, _createClass3.default)(AddModal, [{
      key: 'timeTypeChange',
      value: function timeTypeChange(e) {
        var value = $(e.target).val();
        this.setState({
          timeType: +value
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var item = this.props.item || {};
        return (0, _jsx3.default)(_tools.Modal, {
          title: this.props.update ? "编辑现金" : "添加现金"
        }, void 0, (0, _jsx3.default)('form', {
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.state.errorMsg
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'award_type',
          value: this.state.awardType
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'award_id',
          defaultValue: item.id
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u540D\u79F0',
          name: 'name',
          defaultValue: item.name
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u91D1\u989D',
          type: 'text',
          name: 'money',
          defaultValue: item.money
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u4EA4\u6613\u7C7B\u578B',
          type: 'text',
          name: 'type',
          defaultValue: item.type
        }), (0, _jsx3.default)('hr', {
          style: { borderStyle: 'dashed' }
        }), (0, _jsx3.default)(_tools.Textarea, {
          labelName: '\u7AD9\u5185\u4FE1\u6A21\u677F',
          defaultValue: item.mail || (0, _omg.getConfig)('templateTypes', this.state.type),
          name: 'mail'
        }), (0, _jsx3.default)(_tools.Textarea, {
          labelName: '\u77ED\u4FE1\u6A21\u677F',
          name: 'message',
          defaultValue: item.message
        }), _ref));
      }
    }]);
    return AddModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(AddModal);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _Award = __webpack_require__(124);
  
  var _Award2 = _interopRequireDefault(_Award);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // 添加邀请人奖品弹窗
  var _ref = (0, _jsx3.default)(_tools.Submit, {
    value: '\u6DFB\u52A0'
  });
  
  var InviteAwardAddModal = function (_Component) {
    (0, _inherits3.default)(InviteAwardAddModal, _Component);
  
    function InviteAwardAddModal(props) {
      (0, _classCallCheck3.default)(this, InviteAwardAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (InviteAwardAddModal.__proto__ || (0, _getPrototypeOf2.default)(InviteAwardAddModal)).call(this, props));
  
      _this.addAward = _this.addAward.bind(_this);
      _this.showAward = _this.showAward.bind(_this);
      _this.changeSelect = _this.changeSelect.bind(_this);
      _this.state = {
        awardType: '1',
        awardId: '',
        awardHidden: true
      };
      return _this;
    }
  
    (0, _createClass3.default)(InviteAwardAddModal, [{
      key: 'addAward',
      value: function addAward(e) {
        this.setState({
          awardHidden: true,
          awardType: e.target.dataset.type,
          awardId: e.target.dataset.id
        });
      }
    }, {
      key: 'showAward',
      value: function showAward() {
        this.setState({
          awardHidden: false
        });
      }
    }, {
      key: 'changeSelect',
      value: function changeSelect(e) {
        this.setState({
          awardType: e.target.value
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u6DFB\u52A0\u5956\u54C1',
          className: 'modal-lg'
        }, void 0, (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'activity_id',
          value: this.props.activityId
        }), (0, _jsx3.default)(_tools.Select, {
          onChange: this.changeSelect,
          name: 'award_type',
          labelName: '\u5956\u54C1\u7C7B\u578B',
          options: (0, _omg.getConfig)('awardTypes'),
          value: this.state.awardType
        }), (0, _jsx3.default)(_tools.Input, {
          name: 'award_id',
          labelName: '\u5956\u54C1Id',
          value: this.state.awardId
        }), (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-sm-offset-4 col-sm-8 col-md-6'
        }, void 0, (0, _jsx3.default)('a', {
          className: 'btn btn-info-outline',
          onClick: this.showAward
        }, void 0, '\u9009\u62E9\u5956\u54C1'))), _ref), (0, _jsx3.default)('div', {
          hidden: this.state.awardHidden
        }, void 0, (0, _jsx3.default)('hr', {
          style: { borderStyle: 'dashed' }
        }), (0, _jsx3.default)(_Award2.default, {
          modal: true,
          addAward: this.addAward,
          type: this.state.awardType
        })));
      }
    }]);
    return InviteAwardAddModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(InviteAwardAddModal);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _defineProperty2 = __webpack_require__(127);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _omg2 = __webpack_require__(58);
  
  var _ActivityGroupAddModal = __webpack_require__(140);
  
  var _ActivityGroupAddModal2 = _interopRequireDefault(_ActivityGroupAddModal);
  
  var _ActivityAddModal = __webpack_require__(122);
  
  var _ActivityAddModal2 = _interopRequireDefault(_ActivityAddModal);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('i', {
    className: 'fa fa-plus'
  }, void 0, '\u6D3B\u52A8');
  
  var _ref2 = (0, _jsx3.default)('hr', {});
  
  var _ref3 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '\u6D3B\u52A8\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, 'ID'), (0, _jsx3.default)('th', {}, void 0, '\u6D3B\u52A8\u522B\u540D'), (0, _jsx3.default)('th', {}, void 0, '\u89E6\u53D1\u7C7B\u578B'), (0, _jsx3.default)('th', {}, void 0, '\u5F00\u59CB\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u7ED3\u675F\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var _ref4 = (0, _jsx3.default)('td', {}, void 0, '\u2014');
  
  var _ref5 = (0, _jsx3.default)('td', {}, void 0, '\u2014');
  
  var _ref6 = (0, _jsx3.default)('td', {}, void 0, '\u2014');
  
  var _ref7 = (0, _jsx3.default)('td', {}, void 0, '\u2014');
  
  var _ref8 = (0, _jsx3.default)('td', {}, void 0, '\u2014');
  
  var _ref9 = (0, _jsx3.default)('td', {}, void 0, '\u2014');
  
  var ActivityList = function (_Component) {
    (0, _inherits3.default)(ActivityList, _Component);
  
    function ActivityList(props) {
      (0, _classCallCheck3.default)(this, ActivityList);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ActivityList.__proto__ || (0, _getPrototypeOf2.default)(ActivityList)).call(this, props));
  
      _this.showModal = _this.showModal.bind(_this);
      _this.activityRelease = _this.activityRelease.bind(_this);
      _this.activityOffline = _this.activityOffline.bind(_this);
      _this.activityDelete = _this.activityDelete.bind(_this);
      _this.groupDelete = _this.groupDelete.bind(_this);
      _this.showActivityAddModal = _this.showActivityAddModal.bind(_this);
      _this.typeChange = _this.typeChange.bind(_this);
      _this.getGroupList = _this.getGroupList.bind(_this);
      _this.freshGroupList = _this.freshGroupList.bind(_this);
      _this.saveActivity = _this.saveActivity.bind(_this);
      _this.groupClick = _this.groupClick.bind(_this);
      var types = (0, _omg2.getConfig)('activityTypes');
      _this.state = {
        types: types,
        group: {}
      };
      return _this;
    }
  
    (0, _createClass3.default)(ActivityList, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.getGroupList(this.props.typeId, this.props.page);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.typeId !== this.props.typeId || nextProps.page !== this.props.page) {
          this.getGroupList(nextProps.typeId, nextProps.page);
        }
      }
    }, {
      key: 'getGroupList',
      value: function getGroupList(typeId, page) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACTIVITY_GROUP_LIST,
          queryObj: {
            // 'data[filter][status]': 0,
            'data[filter][type_id]': typeId,
            page: page
          },
          key: typeId + '_' + page
        }));
      }
    }, {
      key: 'freshGroupList',
      value: function freshGroupList() {
        this.getGroupList(this.props.typeId, this.props.page);
      }
    }, {
      key: 'showModal',
      value: function showModal() {
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_ActivityGroupAddModal2.default, {
          callback: this.freshGroupList,
          typeId: this.props.typeId
        })));
      }
    }, {
      key: 'saveActivity',
      value: function saveActivity(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.commonFetch)(_constants.ACTIVITY_ADD, 'POST', formData)).then(function (json) {
          if (json.error_code === 0) {
            _this2.props.dispatch((0, _modal.hideModal)());
            _history2.default.push('/activity/id/' + json.data.insert_id);
          }
        });
      }
    }, {
      key: 'activityRelease',
      value: function activityRelease(e) {
        var _this3 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.commonFetch)(_constants.ACTIVITY_RELEASE, 'POST', formData)).then(function () {
          return _this3.freshGroupList();
        });
      }
    }, {
      key: 'activityOffline',
      value: function activityOffline(e) {
        var _this4 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.commonFetch)(_constants.ACTIVITY_OFFLINE, 'POST', formData)).then(function () {
          return _this4.freshGroupList();
        });
      }
    }, {
      key: 'activityDelete',
      value: function activityDelete(e) {
        var _this5 = this;
  
        if (!confirm('确定删除吗')) {
          return;
        }
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.commonFetch)(_constants.ACTIVITY_DEL, 'POST', formData)).then(function () {
          return _this5.freshGroupList();
        });
      }
    }, {
      key: 'groupDelete',
      value: function groupDelete(e) {
        var _this6 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.commonFetch)(_constants.ACTIVITY_GROUP_DEL, 'POST', formData)).then(function () {
          return _this6.freshGroupList();
        });
      }
    }, {
      key: 'showActivityAddModal',
      value: function showActivityAddModal(e) {
        var id = +$(e.target).data('id');
        var modalView = (0, _jsx3.default)(_ActivityAddModal2.default, {
          submit: this.saveActivity,
          groupId: id
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'typeChange',
      value: function typeChange(e) {
        var value = e.target.value;
        _history2.default.push('/activity/' + value);
      }
    }, {
      key: 'groupClick',
      value: function groupClick(e) {
        var id = $(e.target).data('id');
        if (this.state.group[id]) {
          this.setState({
            group: (0, _assign2.default)({}, this.state.group, (0, _defineProperty3.default)({}, id, false))
          });
        } else {
          this.setState({
            group: (0, _assign2.default)({}, this.state.group, (0, _defineProperty3.default)({}, id, true))
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this7 = this;
  
        var groupList = this.props.groupList || {};
        var key = this.props.typeId + '_' + this.props.page;
        var groups = groupList[key] || {};
        var items = groups.data || [];
  
        var addBtn = (0, _jsx3.default)('button', {
          type: 'button',
          onClick: this.showModal,
          className: 'btn btn-sm btn-info action-add pull-right'
        }, void 0, _ref);
        return (0, _jsx3.default)('div', {}, void 0, (0, _keys2.default)(this.state.types).map(function (key) {
          return (0, _jsx3.default)(_tools.Radio, {
            name: 'activity-type',
            checked: +key === _this7.props.typeId,
            labelName: _this7.state.types[key],
            value: key,
            onChange: _this7.typeChange
          }, key);
        }), _ref2, (0, _jsx3.default)(_tools.Card, {
          title: '\u6D3B\u52A8\u5217\u8868',
          btn: addBtn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-hover'
        }, void 0, _ref3, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item) {
          var trArr = [(0, _jsx3.default)('tr', {
            style: { 'fontWeight': 'bold' },
            title: item.des
          }, 'group-' + item.id, (0, _jsx3.default)('td', {
            onClick: _this7.groupClick,
            'data-id': item.id
          }, void 0, (0, _jsx3.default)('i', {
            'data-id': item.id,
            hidden: _this7.state.group[item.id] !== false,
            className: 'fa fa-plus-square-o'
          }), (0, _jsx3.default)('i', {
            'data-id': item.id,
            hidden: _this7.state.group[item.id] === false,
            className: 'fa fa-minus-square-o'
          }), item.name, ' (', item.activities.length, ')'), _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            'data-id': item.id,
            onClick: _this7.showActivityAddModal,
            className: 'btn btn-sm btn-info-outline'
          }, void 0, (0, _jsx3.default)('i', {
            'data-id': item.id,
            className: 'fa fa-plus'
          }), '\u5B50\u6D3B\u52A8'), (0, _jsx3.default)('button', {
            hidden: item.activities.length,
            'data-id': item.id,
            onClick: _this7.groupDelete,
            className: 'btn btn-sm btn-danger-outline'
          }, void 0, '\u5220\u9664')))];
          var children = item.activities.map(function (activity) {
            return (0, _jsx3.default)('tr', {
              hidden: _this7.state.group[item.id] === false,
              title: activity.des
            }, 'activity' + activity.id, (0, _jsx3.default)('td', {}, void 0, '\xA0\xA0', activity.name), (0, _jsx3.default)('td', {}, void 0, activity.id ? activity.id : '—'), (0, _jsx3.default)('td', {}, void 0, activity.alias_name ? activity.alias_name : '—'), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('activityTriggers', activity.trigger_type)), (0, _jsx3.default)('td', {}, void 0, activity.start_at ? activity.start_at : '不限制'), (0, _jsx3.default)('td', {}, void 0, activity.end_at ? activity.end_at : '不限制'), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('span', {
              className: 'text-success',
              hidden: !+activity.enable
            }, void 0, '\u4E0A\u7EBF'), (0, _jsx3.default)('span', {
              className: 'text-warning',
              hidden: +activity.enable
            }, void 0, '\u4E0B\u7EBF')), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
              'data-id': activity.id,
              hidden: !+activity.enable,
              onClick: _this7.activityOffline,
              className: 'btn btn-sm btn-warning-outline'
            }, void 0, '\u4E0B\u7EBF'), (0, _jsx3.default)('button', {
              'data-id': activity.id,
              hidden: +activity.enable,
              onClick: _this7.activityRelease,
              className: 'btn btn-sm btn-success-outline'
            }, void 0, '\u4E0A\u7EBF'), (0, _jsx3.default)(_tools.Link, {
              className: 'btn btn-sm btn-info-outline',
              to: '/activity/id/' + activity.id
            }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
              hidden: activity.enable,
              'data-id': activity.id,
              onClick: _this7.activityDelete,
              className: 'btn btn-sm btn-danger-outline'
            }, void 0, '\u5220\u9664')));
          });
          trArr.push(children);
          return trArr;
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: groups.current_page,
          lastPage: groups.last_page
        }));
      }
    }]);
    return ActivityList;
  }(_react.Component);
  
  ActivityList.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var groupList = omg[_constants.ACTIVITY_GROUP_LIST] || {};
    return {
      groupList: groupList
    };
  })(ActivityList);

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _Alert = __webpack_require__(74);
  
  var _Alert2 = _interopRequireDefault(_Alert);
  
  var _Input = __webpack_require__(76);
  
  var _Input2 = _interopRequireDefault(_Input);
  
  var _ModalHeader = __webpack_require__(78);
  
  var _ModalHeader2 = _interopRequireDefault(_ModalHeader);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref2 = (0, _jsx3.default)(_ModalHeader2.default, {
    title: '\u6DFB\u52A0\u6D3B\u52A8'
  });
  
  var _ref3 = (0, _jsx3.default)(_Input2.default, {
    labelName: '\u6D3B\u52A8\u540D\u79F0',
    name: 'name'
  });
  
  var _ref4 = (0, _jsx3.default)('div', {
    className: 'form-group row'
  }, void 0, (0, _jsx3.default)('label', {
    className: 'col-sm-4 form-control-label text-xs-right'
  }, void 0, '\u8BF4\u660E:'), (0, _jsx3.default)('div', {
    className: 'col-sm-8 col-md-6'
  }, void 0, (0, _jsx3.default)('textarea', {
    name: 'des',
    className: 'form-control'
  })));
  
  var _ref5 = (0, _jsx3.default)('div', {
    className: 'form-group row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-sm-offset-4 col-sm-8'
  }, void 0, (0, _jsx3.default)('button', {
    type: 'submit',
    className: 'btn btn-primary'
  }, void 0, '\u4FDD\u5B58')));
  
  var ActivityAddModal = function (_Component) {
    (0, _inherits3.default)(ActivityAddModal, _Component);
  
    function ActivityAddModal(props) {
      (0, _classCallCheck3.default)(this, ActivityAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ActivityAddModal.__proto__ || (0, _getPrototypeOf2.default)(ActivityAddModal)).call(this, props));
  
      _this.onSubmit = _this.onSubmit.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(ActivityAddModal, [{
      key: 'onSubmit',
      value: function onSubmit(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.commonFetch)(_constants.ACTIVITY_GROUP_ADD, 'POST', formData)).then(function (_ref) {
          var error_code = _ref.error_code;
  
          if (error_code === 0) {
            _this2.props.dispatch((0, _modal.hideModal)());
            _this2.props.callback();
          } else {
            _this2.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {
          className: 'modal-dialog'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'modal-content'
        }, void 0, _ref2, (0, _jsx3.default)('div', {
          className: 'modal-body'
        }, void 0, (0, _jsx3.default)('form', {
          id: 'add-activity-form',
          method: 'post',
          onSubmit: this.onSubmit
        }, void 0, (0, _jsx3.default)(_Alert2.default, {
          msg: this.props.errorMsg
        }), _ref3, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'type_id',
          value: this.props.typeId
        }), _ref4, _ref5))));
      }
    }]);
    return ActivityAddModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(ActivityAddModal);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Home = __webpack_require__(142);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _fetch = __webpack_require__(39);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/',
  
    action: function action() {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /*
                const resp = await fetch('/graphql', {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    query: '{news{title,link,contentSnippet}}',
                  }),
                  credentials: 'include',
                });
                */
                //const { data } = await resp.json();
                data = { news: [] };
                //if (!data || !data.news) throw new Error('Failed to load the news feed.');
  
                return _context.abrupt('return', (0, _jsx3.default)(_Home2.default, {
                  news: data.news
                }));
  
              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Home = __webpack_require__(143);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = '运营管理平台 '; /**
                          * React Starter Kit (https://www.reactstarterkit.com/)
                          *
                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                          *
                          * This source code is licensed under the MIT license found in the
                          * LICENSE.txt file in the root directory of this source tree.
                          */
  
  function Home(_ref, context) {
    var news = _ref.news;
  
    context.setTitle(title);
    return (0, _jsx3.default)('div', {
      className: _Home2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Home2.default.container
    }, void 0, (0, _jsx3.default)('h1', {
      className: _Home2.default.title
    }, void 0, '\u8FD0\u8425\u7BA1\u7406\u540E\u53F0'), (0, _jsx3.default)('ul', {
      className: _Home2.default.news
    }, void 0, news.map(function (item, index) {
      return (0, _jsx3.default)('li', {
        className: _Home2.default.newsItem
      }, index, (0, _jsx3.default)('a', {
        href: item.link,
        className: _Home2.default.newsTitle
      }, void 0, item.title), (0, _jsx3.default)('span', {
        className: _Home2.default.newsDesc,
        dangerouslySetInnerHTML: { __html: item.contentSnippet }
      }));
    }))));
  }
  
  Home.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(144);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "._3mfp{padding-left:20px;padding-right:20px}._2ac9{margin:0 auto;padding:0 0 40px;max-width:1000px}._1G-y{padding:0}._3n-W{list-style-type:none;padding-bottom:6px}.Pdod{font-size:1.125em}._1JFU,.Pdod{display:block}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_3mfp",
  	"container": "_2ac9",
  	"news": "_1G-y",
  	"newsItem": "_3n-W",
  	"newsTitle": "Pdod",
  	"newsDesc": "_1JFU"
  };

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _stringify = __webpack_require__(15);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Content = __webpack_require__(146);
  
  var _Content2 = _interopRequireDefault(_Content);
  
  var _fetch = __webpack_require__(39);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '*',
  
    action: function action(_ref) {
      var _this = this;
  
      var path = _ref.path;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, _ref2, data;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('/graphql', {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    query: '{content(path:"' + path + '"){path,title,content,component}}'
                  }),
                  credentials: 'include'
                });
  
              case 2:
                resp = _context.sent;
  
                if (!(resp.status !== 200)) {
                  _context.next = 5;
                  break;
                }
  
                throw new Error(resp.statusText);
  
              case 5:
                _context.next = 7;
                return resp.json();
  
              case 7:
                _ref2 = _context.sent;
                data = _ref2.data;
  
                if (!(!data || !data.content)) {
                  _context.next = 11;
                  break;
                }
  
                return _context.abrupt('return', undefined);
  
              case 11:
                return _context.abrupt('return', _react2.default.createElement(_Content2.default, data.content));
  
              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Content = __webpack_require__(147);
  
  var _Content2 = _interopRequireDefault(_Content);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Content = function (_Component) {
    (0, _inherits3.default)(Content, _Component);
  
    function Content() {
      (0, _classCallCheck3.default)(this, Content);
      return (0, _possibleConstructorReturn3.default)(this, (Content.__proto__ || (0, _getPrototypeOf2.default)(Content)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Content, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(this.props.title);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.context.setTitle(nextProps.title);
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {
          className: _Content2.default.root
        }, void 0, (0, _jsx3.default)('div', {
          className: _Content2.default.container
        }, void 0, this.props.path === '/' ? null : (0, _jsx3.default)('h1', {}, void 0, this.props.title), (0, _jsx3.default)('div', {
          dangerouslySetInnerHTML: { __html: this.props.content || '' }
        })));
      }
    }]);
    return Content;
  }(_react.Component); /**
                        * React Starter Kit (https://www.reactstarterkit.com/)
                        *
                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                        *
                        * This source code is licensed under the MIT license found in the
                        * LICENSE.txt file in the root directory of this source tree.
                        */
  
  Content.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(_Content2.default)(Content);

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(148);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "._2X05{padding-left:20px;padding-right:20px}._20Tb{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_2X05",
  	"container": "_20Tb"
  };

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(43);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _ErrorPage = __webpack_require__(17);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/error',
  
    action: function action(_ref) {
      var render = _ref.render,
          context = _ref.context,
          error = _ref.error;
  
      return render((0, _jsx3.default)(_App2.default, {
        context: context,
        error: error
      }, void 0, (0, _jsx3.default)(_ErrorPage2.default, {
        error: error
      })), error.status || 500);
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Channel = __webpack_require__(151);
  
  var _Channel2 = _interopRequireDefault(_Channel);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/channel',
  
    action: function action(context) {
      return (0, _jsx3.default)(_Channel2.default, {
        page: +context.query.page || 1
      });
    }
  };

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Channel = function (_Component) {
    (0, _inherits3.default)(Channel, _Component);
  
    function Channel(props) {
      (0, _classCallCheck3.default)(this, Channel);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Channel.__proto__ || (0, _getPrototypeOf2.default)(Channel)).call(this, props));
  
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: '',
        dataTable: {
          title: '渠道',
          listType: _constants.CHANNEL_DT_LIST,
          updateType: _constants.CHANNEL_PUT,
          addType: _constants.CHANNEL_ADD,
          deleteType: _constants.CHANNEL_DEL,
          order: {
            column: 0,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          idColumn: 0,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'name',
            cname: '备注名称',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'alias_name',
            cname: '渠道名称',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'created_at',
            cname: '创建时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(Channel, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return Channel;
  }(_react.Component);
  
  Channel.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function () {})(Channel);

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Award = __webpack_require__(124);
  
  var _Award2 = _interopRequireDefault(_Award);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/Award',
    children: [{
      path: '/:type',
      action: function action(context) {
        return (0, _jsx3.default)(_Award2.default, {
          type: context.params.type,
          page: +context.query.page || 1
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Article = __webpack_require__(154);
  
  var _Article2 = _interopRequireDefault(_Article);
  
  var _ArticleType = __webpack_require__(156);
  
  var _ArticleType2 = _interopRequireDefault(_ArticleType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Article2.default, {});
  
  var _ref2 = (0, _jsx3.default)(_ArticleType2.default, {});
  
  exports.default = {
  
    path: '/Article',
    children: [{
      path: '/',
      action: function action() {
        return _ref;
      }
    }, {
      path: '/Type',
      action: function action() {
        return _ref2;
      }
    }, {
      path: '/:firId',
      action: function action(context) {
        return (0, _jsx3.default)(_Article2.default, {
          firId: +context.params.firId,
          page: +context.query.page || 1
        });
      }
    }, {
      path: '/:firId/:secId',
      action: function action(context) {
        return (0, _jsx3.default)(_Article2.default, {
          firId: +context.params.firId,
          page: +context.query.page || 1,
          secId: +context.params.secId
        });
      }
    }],
    action: function action(_ref3) {
      var _this = this;
  
      var next = _ref3.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _omg2 = __webpack_require__(58);
  
  var _tools = __webpack_require__(73);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _modal = __webpack_require__(70);
  
  var _ArticleAddModal = __webpack_require__(155);
  
  var _ArticleAddModal2 = _interopRequireDefault(_ArticleAddModal);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Link, {
    className: 'btn btn-sm  btn-info-outline pull-right',
    to: '/article/type'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-pencil'
  }, void 0, '\u7C7B\u578B\u7BA1\u7406'));
  
  var _ref2 = (0, _jsx3.default)('hr', {});
  
  var _ref3 = (0, _jsx3.default)('th', {}, void 0, 'id');
  
  var _ref4 = (0, _jsx3.default)('th', {}, void 0, '\u6807\u9898');
  
  var _ref5 = (0, _jsx3.default)('th', {}, void 0, '\u914D\u56FE');
  
  var _ref6 = (0, _jsx3.default)('th', {}, void 0, '\u5185\u5BB9');
  
  var _ref7 = (0, _jsx3.default)('th', {}, void 0, '\u53D1\u5E03\u72B6\u6001');
  
  var _ref8 = (0, _jsx3.default)('th', {}, void 0, '\u5E38\u89C1\u95EE\u9898');
  
  var _ref9 = (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C');
  
  var Article = function (_Component) {
    (0, _inherits3.default)(Article, _Component);
  
    function Article(props) {
      (0, _classCallCheck3.default)(this, Article);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).call(this, props));
  
      _this.showModal = _this.showModal.bind(_this);
      _this.delArticle = _this.delArticle.bind(_this);
      _this.releaseArticle = _this.releaseArticle.bind(_this);
      _this.offLineArticle = _this.offLineArticle.bind(_this);
      _this.upArticle = _this.upArticle.bind(_this);
      _this.downArticle = _this.downArticle.bind(_this);
      _this.typeChange = _this.typeChange.bind(_this);
      _this.getType = _this.getType.bind(_this);
      _this.getArticle = _this.getArticle.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.showUpdate = _this.showUpdate.bind(_this);
      _this.templateDynamic = _this.templateDynamic.bind(_this);
      _this.templateHelp = _this.templateHelp.bind(_this);
      _this.templateMedia = _this.templateMedia.bind(_this);
      _this.templateClass = _this.templateClass.bind(_this);
      var currentId = _this.props.secId || _this.props.firId || 0;
      _this.state = {
        currentId: currentId,
        aliasname: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(Article, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.getType(0);
        if (this.props.firId !== undefined) {
          this.getType(this.props.firId);
        }
        this.fresh();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.getArticle(this.state.currentId, nextProps.page);
        }
      }
    }, {
      key: 'templateMedia',
      value: function templateMedia() {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.TEMPLATE_MEDIA,
          method: 'POST'
        })).then(function () {
          alert('媒体报道页生成完成');
        });
      }
    }, {
      key: 'templateDynamic',
      value: function templateDynamic() {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.TEMPLATE_DYNAMIC,
          method: 'POST'
        })).then(function () {
          alert('pc网利动态成完成');
        });
      }
    }, {
      key: 'templateHelp',
      value: function templateHelp() {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.TEMPLATE_HELP,
          method: 'POST'
        })).then(function () {
          alert('pc帮助中心生成完成');
        });
      }
    }, {
      key: 'templateClass',
      value: function templateClass() {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.TEMPLATE_CLASSROOM,
          method: 'POST'
        })).then(function () {
          alert('理财课堂页生成完成');
        });
      }
    }, {
      key: 'showModal',
      value: function showModal(e) {
        var aliasName = e.target.dataset.alias;
        var modalView = (0, _jsx3.default)(_ArticleAddModal2.default, {
          aliasName: aliasName,
          typeId: this.state.currentId,
          submit: this.add
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        var dispatch = this.props.dispatch;
  
        dispatch((0, _omg.fetchAction)({
          type: _constants.ARTICLE_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            dispatch((0, _modal.hideModal)(true));
            _this2.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'hideModal',
      value: function hideModal() {
        this.props.dispatch((0, _modal.hideModal)());
      }
    }, {
      key: 'getType',
      value: function getType(typeId) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ARTICLE_TYPE_LIST,
          method: 'GET',
          suffix: '/' + typeId,
          key: typeId
        }));
      }
    }, {
      key: 'getArticle',
      value: function getArticle(typeId, page) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ARTICLE_LIST,
          method: 'GET',
          queryObj: { page: page },
          suffix: '/' + typeId + '/30',
          key: typeId + '_' + page
        }));
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.getArticle(this.state.currentId, this.props.page);
      }
    }, {
      key: 'typeChange',
      value: function typeChange(e) {
        var value = e.target.value;
        var name = e.target.name;
  
        if (name === 'firId') {
          _history2.default.push('/article/' + value);
          this.getType(value);
        }
        if (name === 'secId') {
          _history2.default.push('/article/' + this.props.firId + '/' + value);
        }
        this.setState({
          currentId: +value
        });
        this.getArticle(value, this.props.page);
      }
    }, {
      key: 'delArticle',
      value: function delArticle(e) {
        var _this3 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        var type_id = $('.focus').data('id');
        this.props.dispatch((0, _omg.commonFetch)(_constants.ARTICLE_DEL, 'POST', formData)).then(function () {
          return _this3.fresh();
        });
      }
    }, {
      key: 'releaseArticle',
      value: function releaseArticle(e) {
        var _this4 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ARTICLE_RELEASE,
          method: 'POST',
          formData: formData
        })).then(function () {
          return _this4.fresh();
        });
      }
    }, {
      key: 'offLineArticle',
      value: function offLineArticle(e) {
        var _this5 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ARTICLE_OFFLINE,
          method: 'POST',
          formData: formData
        })).then(function () {
          return _this5.fresh();
        });
      }
    }, {
      key: 'upArticle',
      value: function upArticle(e) {
        var _this6 = this;
  
        var id = $(e.target).data('id');
        this.props.dispatch((0, _omg.commonFetch)(_constants.ARTICLE_UP, 'GET', false, "/" + id)).then(function () {
          return _this6.fresh();
        });
      }
    }, {
      key: 'downArticle',
      value: function downArticle(e) {
        var _this7 = this;
  
        var id = $(e.target).data('id');
        this.props.dispatch((0, _omg.commonFetch)(_constants.ARTICLE_DOWN, 'GET', false, "/" + id)).then(function () {
          return _this7.fresh();
        });
      }
    }, {
      key: 'showUpdate',
      value: function showUpdate(e) {
        var id = e.target.dataset.id;
        var index = e.target.dataset.index;
        var item = this.articles[index] || {};
        var aliasName = e.target.dataset.alias;
        if (item.id !== +id) {
          this.setState({
            errorMsg: '编辑信息不匹配,请刷新重试'
          });
          return;
        }
        var modalView = (0, _jsx3.default)(_ArticleAddModal2.default, {
          update: true,
          aliasName: aliasName,
          typeId: this.state.currentId,
          item: item,
          submit: this.update
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this8 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        var dispatch = this.props.dispatch;
  
        dispatch((0, _omg.fetchAction)({
          type: _constants.ARTICLE_PUT,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            dispatch((0, _modal.hideModal)(true));
            _this8.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this9 = this;
  
        var typeItems = this.props.typeItems || {};
        var fatherItems = typeItems[0] || [];
        var subItems = typeItems[this.props.firId] || [];
        var key = this.state.currentId + '_' + this.props.page;
        var articlesObj = this.props.articleList[key] || {};
        var articles = articlesObj.data || [];
        var aliasName = '';
        this.articles = articles;
        for (var i = 0; i < fatherItems.length; i++) {
          if (fatherItems[i].id === this.props.firId) {
            aliasName = fatherItems[i].alias_name;
          }
        }
        return (0, _jsx3.default)('div', {}, void 0, fatherItems.map(function (item) {
          return (0, _jsx3.default)(_tools.Radio, {
            labelName: item.name,
            name: 'firId',
            value: item.id,
            checked: item.id === _this9.props.firId,
            onChange: _this9.typeChange
          }, item.id);
        }), _ref, _ref2, subItems.map(function (item) {
          return (0, _jsx3.default)(_tools.Radio, {
            labelName: item.name,
            name: 'secId',
            value: item.id,
            checked: item.id === _this9.props.secId,
            onChange: _this9.typeChange
          }, item.id);
        }), (0, _jsx3.default)('hr', {
          hidden: subItems.length === 0
        }), (0, _jsx3.default)(_tools.Alert, {
          msg: this.state.errorMsg
        }), (0, _jsx3.default)('div', {
          className: 'card'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'card-header clearfix'
        }, void 0, '\u6587\u7AE0', (0, _jsx3.default)('button', {
          type: 'button',
          className: 'btn btn-sm  btn-info pull-right',
          'data-alias': aliasName,
          onClick: this.showModal
        }, void 0, (0, _jsx3.default)('i', {
          id: 'articleAdd',
          'data-alias': aliasName,
          className: 'fa fa-plus'
        }, void 0, ' \u6DFB\u52A0')), (0, _jsx3.default)('button', {
          type: 'button',
          className: 'btn btn-sm  btn-success pull-right',
          hidden: aliasName !== 'trends',
          onClick: this.templateDynamic
        }, void 0, '\u751F\u6210\u7F51\u5229\u52A8\u6001\u9875'), (0, _jsx3.default)('button', {
          type: 'button',
          className: 'btn btn-sm  btn-success pull-right',
          hidden: aliasName !== 'questions',
          onClick: this.templateHelp
        }, void 0, '\u751F\u6210\u5E2E\u52A9\u4E2D\u5FC3\u9875'), (0, _jsx3.default)('button', {
          type: 'button',
          className: 'btn btn-sm  btn-success pull-right',
          hidden: aliasName !== 'report',
          onClick: this.templateMedia
        }, void 0, '\u751F\u6210\u5A92\u4F53\u62A5\u9053\u9875'), (0, _jsx3.default)('button', {
          type: 'button',
          className: 'btn btn-sm  btn-success pull-right',
          hidden: aliasName !== 'classroom',
          onClick: this.templateClass
        }, void 0, '\u751F\u6210\u7406\u8D22\u8BFE\u5802\u9875')), (0, _jsx3.default)('table', {
          className: 'table table-bordered m-b-0 table-hover'
        }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, _ref3, _ref4, _ref5, _ref6, _ref7, aliasName === 'questions' || aliasName === 'pc_questions' ? [_ref8] : false, _ref9)), (0, _jsx3.default)('tbody', {}, void 0, articles.map(function (item, index) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.title), (0, _jsx3.default)('td', {}, void 0, item.cover ? (0, _jsx3.default)(_tools.ImgBox, {
            src: item.cover
          }) : '—'), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Popover, {
            title: item.title,
            content: item.content
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Status, {
            status: +item.release
          })), aliasName === 'questions' || aliasName === 'pc_questions' ? [(0, _jsx3.default)('td', {}, void 0, item.platform === 1 ? '√️' : '—')] : false, (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            hidden: +item.release === 1,
            'data-id': item.id,
            onClick: _this9.releaseArticle
          }, void 0, '\u53D1\u5E03'), (0, _jsx3.default)('button', {
            className: 'btn btn-warning-outline btn-sm',
            hidden: +item.release === 0,
            'data-id': item.id,
            onClick: _this9.offLineArticle
          }, void 0, '\u4E0B\u7EBF'), (0, _jsx3.default)('button', {
            className: 'btn btn-info-outline btn-sm',
            'data-id': item.id,
            onClick: _this9.upArticle
          }, void 0, '\u4E0A\u79FB'), (0, _jsx3.default)('button', {
            className: 'btn btn-info-outline btn-sm',
            'data-id': item.id,
            onClick: _this9.downArticle
          }, void 0, '\u4E0B\u79FB'), (0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            'data-alias': aliasName,
            'data-index': index,
            'data-id': item.id,
            onClick: _this9.showUpdate
          }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
            className: 'btn btn-danger-outline btn-sm',
            'data-id': item.id,
            onClick: _this9.delArticle
          }, void 0, '\u5220\u9664')));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: articlesObj.current_page,
          lastPage: articlesObj.last_page
        }));
      }
    }]);
    return Article;
  }(_react.Component);
  
  Article.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var articleList = omg[_constants.ARTICLE_LIST] || {};
    var typeItems = omg[_constants.ARTICLE_TYPE_LIST] || {};
    return {
      articleList: articleList,
      typeItems: typeItems
    };
  })(Article);

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {});
  
  var ArticleAddModal = function (_Component) {
    (0, _inherits3.default)(ArticleAddModal, _Component);
  
    function ArticleAddModal(props) {
      (0, _classCallCheck3.default)(this, ArticleAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ArticleAddModal.__proto__ || (0, _getPrototypeOf2.default)(ArticleAddModal)).call(this, props));
  
      _this.state = {
        errorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(ArticleAddModal, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_tools.Modal, {
          className: 'modal-lg',
          title: this.props.update ? '编辑文章' : '添加文章'
        }, void 0, (0, _jsx3.default)('form', {
          id: 'add-article-form',
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.state.errorMsg
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'id',
          value: this.props.item.id
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'type_id',
          defaultValue: this.props.typeId
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u6807\u9898',
          name: 'title',
          defaultValue: this.props.item.title
        }), (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.AttachmentInput, {
          labelName: '\u5C01\u9762',
          defaultValue: this.props.item.cover,
          position: 'article_' + this.props.typeId,
          name: 'cover'
        })), (0, _jsx3.default)('div', {
          hidden: this.props.aliasName !== 'questions' && this.props.aliasName !== 'pc_questions'
        }, void 0, (0, _jsx3.default)(_tools.Checkbox, {
          labelName: '\u5E38\u89C1\u95EE\u9898',
          name: 'platform',
          value: '1',
          checked: this.props.item.platform
        })), (0, _jsx3.default)(_tools.Editor, {
          name: 'content',
          defaultValue: this.props.item.content
        }), _ref));
      }
    }]);
    return ArticleAddModal;
  }(_react.Component);
  
  ArticleAddModal.defaultProps = {
    item: {},
    aliasName: ''
  };
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var errorMsg = omg.errorMsg[_constants.ARTICLE_ADD] || '';
    return {
      errorMsg: errorMsg
    };
  })(ArticleAddModal);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _constants = __webpack_require__(59);
  
  var _ArticleTypeAddModal = __webpack_require__(157);
  
  var _ArticleTypeAddModal2 = _interopRequireDefault(_ArticleTypeAddModal);
  
  var _ArticleTypePutModal = __webpack_require__(158);
  
  var _ArticleTypePutModal2 = _interopRequireDefault(_ArticleTypePutModal);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('i', {
    className: 'fa fa-plus',
    'data-toggle': 'modal',
    'data-id': '0',
    'data-target': '#cahnnel-add-modal'
  }, void 0, '\u6DFB\u52A0');
  
  var _ref2 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'id'), (0, _jsx3.default)('th', {}, void 0, '\u5206\u7C7B\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, '\u522B\u540D'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var ArticleType = function (_Component) {
    (0, _inherits3.default)(ArticleType, _Component);
  
    function ArticleType(props) {
      (0, _classCallCheck3.default)(this, ArticleType);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ArticleType.__proto__ || (0, _getPrototypeOf2.default)(ArticleType)).call(this, props));
  
      _this.delType = _this.delType.bind(_this);
      _this.upType = _this.upType.bind(_this);
      _this.downType = _this.downType.bind(_this);
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.showPutTypeModal = _this.showPutTypeModal.bind(_this);
      _this.freshData = _this.freshData.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(ArticleType, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.freshData();
      }
    }, {
      key: 'freshData',
      value: function freshData() {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ARTICLE_TYPE_LIST,
          method: 'GET',
          suffix: '/0',
          key: 'articleType'
        }));
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal(e) {
        var id = $(e.target).data('id');
        var modalView = (0, _jsx3.default)(_ArticleTypeAddModal2.default, {
          callback: this.freshData,
          parentId: id
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'showPutTypeModal',
      value: function showPutTypeModal(e) {
        var id = $(e.target).data('id');
        var modalView = (0, _jsx3.default)(_ArticleTypePutModal2.default, {
          callback: this.freshData,
          id: id
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'hideModal',
      value: function hideModal() {
        this.props.dispatch((0, _modal.hideModal)());
      }
    }, {
      key: 'delType',
      value: function delType(e) {
        var _this2 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.commonFetch)(_constants.ARTICLE_TYPE_DEL, 'POST', formData)).then(function () {
          return _this2.props.dispatch((0, _omg.fetchAction)({ type: _constants.ARTICLE_TYPE_LIST, method: 'GET', suffix: '/0', key: "articleType" }));
        });
      }
    }, {
      key: 'upType',
      value: function upType(e) {
        var _this3 = this;
  
        var id = $(e.target).data('id');
        this.props.dispatch((0, _omg.commonFetch)(_constants.ARTICLE_TYPE_UP, 'GET', false, "/" + id)).then(function () {
          return _this3.props.dispatch((0, _omg.fetchAction)({ type: _constants.ARTICLE_TYPE_LIST, method: 'GET', suffix: '/0', key: "articleType" }));
        });
      }
    }, {
      key: 'downType',
      value: function downType(e) {
        var _this4 = this;
  
        var id = $(e.target).data('id');
        this.props.dispatch((0, _omg.commonFetch)(_constants.ARTICLE_TYPE_DOWN, 'GET', false, "/" + id)).then(function () {
          return _this4.props.dispatch((0, _omg.fetchAction)({ type: _constants.ARTICLE_TYPE_LIST, method: 'GET', suffix: '/0', key: "articleType" }));
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this5 = this;
  
        var items = this.props.items['articleType'] || [];
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
          className: 'card'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'card-header clearfix'
        }, void 0, '\u6587\u7AE0\u7C7B\u578B', (0, _jsx3.default)('button', {
          type: 'button',
          className: 'btn btn-sm  btn-info pull-right',
          'data-toggle': 'modal',
          'data-id': '0',
          'data-target': '#channel-add-modal',
          onClick: this.showAddModal
        }, void 0, _ref)), (0, _jsx3.default)('table', {
          className: 'table table-bordered m-b-0 table-hover'
        }, void 0, _ref2, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item) {
          var trArr = [(0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, item.alias_name), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            className: 'btn btn-sm btn-info-outline',
            'data-id': item.id,
            onClick: _this5.showAddModal
          }, void 0, (0, _jsx3.default)('i', {
            className: 'fa fa-plus',
            'data-id': item.id
          }), '\u5B50\u7C7B\u578B'), (0, _jsx3.default)('button', {
            className: 'btn btn-danger-outline btn-sm',
            'data-id': item.id,
            onClick: _this5.delType
          }, void 0, '\u5220\u9664'), (0, _jsx3.default)('button', {
            className: 'btn btn-primary-outline btn-sm',
            'data-id': item.id,
            onClick: _this5.showPutTypeModal
          }, void 0, '\u4FEE\u6539'), (0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            onClick: _this5.upType
          }, void 0, '\u4E0A\u79FB'), (0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            onClick: _this5.downType
          }, void 0, '\u4E0B\u79FB')))];
          var children = item.childrens.map(function (subType) {
            return (0, _jsx3.default)('tr', {}, subType.id, (0, _jsx3.default)('td', {
              style: { textAlign: "center" }
            }, void 0, subType.id), (0, _jsx3.default)('td', {}, void 0, subType.name), (0, _jsx3.default)('td', {}, void 0, subType.alias_name), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
              className: 'btn btn-danger-outline btn-sm',
              'data-id': subType.id,
              onClick: _this5.delType
            }, void 0, '\u5220\u9664'), (0, _jsx3.default)('button', {
              className: 'btn btn-primary-outline btn-sm',
              'data-id': subType.id,
              onClick: _this5.showPutTypeModal
            }, void 0, '\u4FEE\u6539'), (0, _jsx3.default)('button', {
              className: 'btn btn-success-outline btn-sm',
              'data-id': subType.id,
              onClick: _this5.upType
            }, void 0, '\u4E0A\u79FB'), (0, _jsx3.default)('button', {
              className: 'btn btn-success-outline btn-sm',
              'data-id': subType.id,
              onClick: _this5.downType
            }, void 0, '\u4E0B\u79FB')));
          });
          trArr.push(children);
          return trArr;
        })))));
      }
    }]);
    return ArticleType;
  }(_react.Component);
  
  ArticleType.defaultProps = {
    items: []
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var items = omg[_constants.ARTICLE_TYPE_LIST] || [];
    return {
      items: items
    };
  })(ArticleType);

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.ModalHeader, {
    title: '\u6DFB\u52A0\u6587\u7AE0\u5206\u7C7B'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    labelName: '\u5206\u7C7B\u540D\u79F0',
    name: 'name'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Input, {
    labelName: '\u522B\u540D',
    name: 'alias_name'
  });
  
  var _ref4 = (0, _jsx3.default)('div', {
    className: 'form-group row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-sm-offset-4 col-sm-8'
  }, void 0, (0, _jsx3.default)('button', {
    type: 'submit',
    className: 'btn btn-primary'
  }, void 0, '\u4FDD\u5B58')));
  
  var ArticleTypeAddModal = function (_Component) {
    (0, _inherits3.default)(ArticleTypeAddModal, _Component);
  
    function ArticleTypeAddModal(props) {
      (0, _classCallCheck3.default)(this, ArticleTypeAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ArticleTypeAddModal.__proto__ || (0, _getPrototypeOf2.default)(ArticleTypeAddModal)).call(this, props));
  
      _this.onSubmit = _this.onSubmit.bind(_this);
      _this.state = {
        errorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(ArticleTypeAddModal, [{
      key: 'onSubmit',
      value: function onSubmit(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        var dispatch = this.props.dispatch;
  
        dispatch((0, _omg.commonFetch)(_constants.ARTICLE_TYPE_ADD, 'POST', formData)).then(function (json) {
          if (json.error_code === 0) {
            dispatch((0, _modal.hideModal)(true));
            _this2.props.callback();
          } else {
            _this2.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var parentId = this.props.parentId;
        return (0, _jsx3.default)('div', {
          className: 'modal-dialog'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'modal-content'
        }, void 0, _ref, (0, _jsx3.default)('div', {
          className: 'modal-body'
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.state.errorMsg
        }), (0, _jsx3.default)('form', {
          id: 'add-articleType-form',
          method: 'post',
          onSubmit: this.onSubmit
        }, void 0, (0, _jsx3.default)('input', {
          hidden: true,
          name: 'parent_id',
          value: parentId
        }), _ref2, _ref3, _ref4))));
      }
    }]);
    return ArticleTypeAddModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(ArticleTypeAddModal);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.ModalHeader, {
    title: '\u4FEE\u6539\u6587\u7AE0\u5206\u7C7B'
  });
  
  var _ref2 = (0, _jsx3.default)('div', {
    className: 'form-group row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-sm-offset-4 col-sm-8'
  }, void 0, (0, _jsx3.default)('button', {
    type: 'submit',
    className: 'btn btn-primary'
  }, void 0, '\u4FDD\u5B58')));
  
  var ArticleTypePutModal = function (_Component) {
    (0, _inherits3.default)(ArticleTypePutModal, _Component);
  
    function ArticleTypePutModal(props) {
      (0, _classCallCheck3.default)(this, ArticleTypePutModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ArticleTypePutModal.__proto__ || (0, _getPrototypeOf2.default)(ArticleTypePutModal)).call(this, props));
  
      _this.onSubmit = _this.onSubmit.bind(_this);
      _this.getTypeInfo = _this.getTypeInfo.bind(_this);
      _this.state = {
        errorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(ArticleTypePutModal, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.getTypeInfo(this.props.id);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
          this.getTypeInfo(nextProps.id);
        }
      }
    }, {
      key: 'getTypeInfo',
      value: function getTypeInfo(id) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ARTICLE_TYPE_INFO,
          method: 'GET',
          suffix: '/' + id,
          key: id
        }));
      }
    }, {
      key: 'onSubmit',
      value: function onSubmit(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        var dispatch = this.props.dispatch;
  
        dispatch((0, _omg.commonFetch)(_constants.ARTICLE_TYPE_PUT, 'POST', formData)).then(function (json) {
          if (json.error_code === 0) {
            dispatch((0, _modal.hideModal)());
            _this2.props.callback();
          } else {
            _this2.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var typeInfo = this.props.typeInfoList[this.props.id] || {};
        return (0, _jsx3.default)('div', {
          className: 'modal-dialog'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'modal-content'
        }, void 0, _ref, (0, _jsx3.default)('div', {
          className: 'modal-body'
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.state.errorMsg
        }), (0, _jsx3.default)('form', {
          method: 'post',
          onSubmit: this.onSubmit
        }, void 0, (0, _jsx3.default)('input', {
          hidden: true,
          name: 'id',
          value: this.props.id
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u5206\u7C7B\u540D\u79F0',
          name: 'name',
          value: typeInfo.name
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u522B\u540D',
          name: 'alias_name',
          value: typeInfo.alias_name
        }), _ref2))));
      }
    }]);
    return ArticleTypePutModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var typeInfoList = omg[_constants.ARTICLE_TYPE_INFO] || {};
    return {
      typeInfoList: typeInfoList
    };
  })(ArticleTypePutModal);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Banner = __webpack_require__(160);
  
  var _Banner2 = _interopRequireDefault(_Banner);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Created by Wangli on 2016/6/14.
   */
  exports.default = {
  
    path: '/Banner',
  
    children: [{
      path: '/:type',
      action: function action(context) {
        return (0, _jsx3.default)(_Banner2.default, {
          path: 'Banner',
          type: context.params.type
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  var _modal = __webpack_require__(70);
  
  var _omg = __webpack_require__(56);
  
  var _omg2 = __webpack_require__(58);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _AddModal = __webpack_require__(161);
  
  var _AddModal2 = _interopRequireDefault(_AddModal);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('span', {
    className: 'c-indicator'
  });
  
  var _ref2 = (0, _jsx3.default)('hr', {});
  
  var _ref3 = (0, _jsx3.default)('th', {}, void 0, 'ID');
  
  var _ref4 = (0, _jsx3.default)('td', {}, void 0, '\u57CB\u70B9\u8BF4\u660E');
  
  var _ref5 = (0, _jsx3.default)('th', {}, void 0, 'tag');
  
  var _ref6 = (0, _jsx3.default)('th', {}, void 0, '\u6807\u9898');
  
  var _ref7 = (0, _jsx3.default)('th', {}, void 0, '\u5206\u4EAB\u5185\u5BB9');
  
  var _ref8 = (0, _jsx3.default)('th', {}, void 0, '\u5206\u4EAB\u65F6\u8BF4\u660E');
  
  var _ref9 = (0, _jsx3.default)('th', {}, void 0, '\u6807\u9898');
  
  var _ref10 = (0, _jsx3.default)('th', {}, void 0, '\u540D\u79F0');
  
  var _ref11 = (0, _jsx3.default)('th', {}, void 0, '\u9644\u6807\u9898');
  
  var _ref12 = (0, _jsx3.default)('th', {}, void 0, '\u56FE\u7247\u9884\u89C8');
  
  var _ref13 = (0, _jsx3.default)('th', {}, void 0, '\u8DF3\u8F6C\u7C7B\u578B');
  
  var _ref14 = (0, _jsx3.default)('th', {}, void 0, '\u8DF3\u8F6C\u7C7B\u578B');
  
  var _ref15 = (0, _jsx3.default)('th', {}, void 0, 'tag');
  
  var _ref16 = (0, _jsx3.default)('th', {}, void 0, '\u6E20\u9053');
  
  var _ref17 = (0, _jsx3.default)('th', {}, void 0, '\u6E20\u9053');
  
  var _ref18 = (0, _jsx3.default)('th', {}, void 0, '\u8DF3\u8F6CURL');
  
  var _ref19 = (0, _jsx3.default)('th', {}, void 0, '\u72B6\u6001');
  
  var _ref20 = (0, _jsx3.default)('th', {}, void 0, '\u5F00\u59CB\u65F6\u95F4');
  
  var _ref21 = (0, _jsx3.default)('th', {}, void 0, '\u7ED3\u675F\u65F6\u95F4');
  
  var _ref22 = (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C');
  
  var Banner = function (_Component) {
    (0, _inherits3.default)(Banner, _Component);
  
    function Banner(props) {
      (0, _classCallCheck3.default)(this, Banner);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Banner.__proto__ || (0, _getPrototypeOf2.default)(Banner)).call(this, props));
  
      _this.enable = _this.enable.bind(_this);
      _this.disable = _this.disable.bind(_this);
      _this.up = _this.up.bind(_this);
      _this.down = _this.down.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.freshData = _this.freshData.bind(_this);
      _this.del = _this.del.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.showAdd = _this.showAdd.bind(_this);
      _this.showUpdate = _this.showUpdate.bind(_this);
      _this.selectChange = _this.selectChange.bind(_this);
      var bannerTypes = props.path === 'Banner' ? (0, _omg2.getConfig)('bannerTypes') : (0, _omg2.getConfig)('shareConfigTypes');
      _this.state = {
        bannerTypes: bannerTypes
      };
      return _this;
    }
  
    (0, _createClass3.default)(Banner, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.freshData(this.props.type);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.type !== nextProps.type) {
          this.freshData(nextProps.type);
        }
        if (this.props.type !== nextProps.type) {
          var bannerTypes = nextProps.path === 'Banner' ? (0, _omg2.getConfig)('bannerTypes') : (0, _omg2.getConfig)('shareConfigTypes');
          this.setState({
            bannerTypes: bannerTypes
          });
        }
      }
    }, {
      key: 'freshData',
      value: function freshData(type) {
        var queryObj = { position: type };
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BANNER_LIST,
          key: type,
          queryObj: queryObj
        }));
      }
    }, {
      key: 'showAdd',
      value: function showAdd() {
        var modalView = (0, _jsx3.default)(_AddModal2.default, {
          type: this.props.type,
          submit: this.add
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'enable',
      value: function enable(e) {
        var _this2 = this;
  
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BANNER_ENABLE,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this2.freshData(_this2.props.type);
        });
      }
    }, {
      key: 'disable',
      value: function disable(e) {
        var _this3 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BANNER_DISABLE,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this3.freshData(_this3.props.type);
        });
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this4 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BANNER_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this4.props.dispatch((0, _modal.hideModal)(true));
            _this4.freshData(_this4.props.type);
          } else {
            _this4.setState({
              addErrorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'up',
      value: function up(e) {
        var _this5 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        formData.append('position', this.props.type);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BANNER_UP,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this5.freshData(_this5.props.type);
        });
      }
    }, {
      key: 'down',
      value: function down(e) {
        var _this6 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        formData.append('position', this.props.type);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BANNER_DOWN,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this6.freshData(_this6.props.type);
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this7 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BANNER_PUT,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this7.props.dispatch((0, _modal.hideModal)(true));
            _this7.freshData(_this7.props.type);
          } else {
            _this7.setState({
              addErrorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'showUpdate',
      value: function showUpdate(e) {
        var id = e.target.dataset.id;
        var index = e.target.dataset.index;
        var item = this.items[index] || {};
        var modalView = (0, _jsx3.default)(_AddModal2.default, {
          type: this.props.type,
          item: item,
          id: id,
          submit: this.update
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'del',
      value: function del(e) {
        var _this8 = this;
  
        var id = $(e.target).data('id');
        if (!confirm('\u786E\u8BA4\u5220\u9664 ID:' + id + ' \u5417?')) {
          return;
        }
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BANNER_DEL,
          method: 'POST',
          formData: formData
        })).then(function () {
          return _this8.freshData(_this8.props.type);
        });
      }
    }, {
      key: 'selectChange',
      value: function selectChange(e) {
        var value = e.target.value;
        if (this.props.path === 'ShareConfig') {
          _history2.default.push('/shareconfig/' + value);
        } else {
          _history2.default.push('/banner/' + value);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this9 = this;
  
        var _props = this.props,
            banners = _props.banners,
            type = _props.type;
        var bannerTypes = this.state.bannerTypes;
  
        var btn = (0, _jsx3.default)('button', {
          className: 'btn btn-info btn-sm pull-xs-right',
          onClick: this.showAdd
        }, void 0, '\u6DFB\u52A0');
        var banner = banners[type] || {};
        var items = banner.data || [];
        this.items = items;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _keys2.default)(bannerTypes).map(function (key) {
          return (0, _jsx3.default)('label', {
            className: 'c-input c-radio'
          }, 'redio-' + key, (0, _jsx3.default)('input', {
            checked: key === type,
            name: 'banner-type',
            value: key,
            type: 'radio',
            onChange: _this9.selectChange
          }), _ref, bannerTypes[key]);
        })), _ref2, (0, _jsx3.default)(_tools.Card, {
          title: this.props.path === 'Banner' ? 'banner图' : '分享配置',
          btn: btn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, _ref3, this.props.path !== 'ShareConfig' && this.props.type !== 'pop' && this.props.type !== 'discover_feature' && _ref4, this.props.path === 'ShareConfig' && this.props.type === 'share' && _ref5, this.props.path === 'ShareConfig' && _ref6, this.props.path === 'ShareConfig' && _ref7, this.props.path === 'ShareConfig' && _ref8, this.props.type === 'pop' && _ref9, this.props.type === 'discover_feature' && _ref10, this.props.type === 'pop' && _ref11, _ref12, this.props.type === 'cast_finish' && _ref13, this.props.type === 'pop' && _ref14, this.props.type === 'discover' && _ref15, this.props.type === 'channel' && _ref16, this.props.type === 'pc_channel' && _ref17, _ref18, _ref19, _ref20, _ref21, _ref22)), (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), _this9.props.path !== 'ShareConfig' && _this9.props.type !== 'pop' && (0, _jsx3.default)('td', {}, void 0, item.name), _this9.props.path === 'ShareConfig' && _this9.props.type === 'share' && (0, _jsx3.default)('td', {}, void 0, item.tag), _this9.props.path === 'ShareConfig' && (0, _jsx3.default)('td', {}, void 0, item.name), _this9.props.path === 'ShareConfig' && (0, _jsx3.default)('td', {}, void 0, item.desc), _this9.props.path === 'ShareConfig' && (0, _jsx3.default)('td', {}, void 0, item.short_desc), _this9.props.type === 'pop' && (0, _jsx3.default)('td', {}, void 0, item.name), _this9.props.type === 'pop' && (0, _jsx3.default)('td', {}, void 0, item.short_desc), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.ImgBox, {
            src: item.img_path
          })), _this9.props.type === 'discover' && (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('discoverTypes', item.type) || '——'), _this9.props.type === 'cast_finish' && (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('popTypes', item.type) || '不跳转'), _this9.props.type === 'pop' && (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('popTypes', item.type) || '不跳转'), _this9.props.type === 'channel' && (0, _jsx3.default)('td', {}, void 0, item.name), _this9.props.type === 'pc_channel' && (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('a', {
            hidden: !item.url,
            title: item.url,
            href: item.url,
            target: '_blank'
          }, void 0, '\u67E5\u770B')), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Status, {
            status: +item.can_use
          })), (0, _jsx3.default)('td', {}, void 0, item.start === null ? '不限制' : item.start), (0, _jsx3.default)('td', {}, void 0, item.end === null ? '不限制' : item.end), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: +item.can_use === 1,
            className: 'btn btn-sm btn-success-outline',
            'data-id': item.id,
            onClick: _this9.enable
          }, void 0, '\u4E0A\u7EBF'), (0, _jsx3.default)('button', {
            hidden: +item.can_use === 0,
            className: 'btn btn-sm btn-warning-outline',
            'data-id': item.id,
            onClick: _this9.disable
          }, void 0, '\u4E0B\u7EBF'), (0, _jsx3.default)('button', {
            hidden: !item.can_use || _this9.props.type === 'share',
            className: 'btn btn-sm btn-info-outline',
            'data-id': item.id,
            onClick: _this9.up
          }, void 0, '\u4E0A\u79FB'), (0, _jsx3.default)('button', {
            hidden: !item.can_use || _this9.props.type === 'share',
            className: 'btn btn-sm btn-info-outline',
            'data-id': item.id,
            onClick: _this9.down
          }, void 0, '\u4E0B\u79FB'), (0, _jsx3.default)('button', {
            className: 'btn btn-sm btn-success-outline',
            'data-id': item.id,
            'data-index': index,
            onClick: _this9.showUpdate
          }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
            className: 'btn btn-sm btn-danger-outline',
            'data-id': item.id,
            onClick: _this9.del
          }, void 0, '\u5220\u9664')));
        })))));
      }
    }]);
    return Banner;
  }(_react.Component);
  
  Banner.items = [];
  
  
  Banner.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var banners = omg[_constants.BANNER_LIST] || {};
    return {
      banners: banners
    };
  })(Banner);

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {});
  
  var AddModal = function (_Component) {
    (0, _inherits3.default)(AddModal, _Component);
  
    function AddModal(props) {
      (0, _classCallCheck3.default)(this, AddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (AddModal.__proto__ || (0, _getPrototypeOf2.default)(AddModal)).call(this, props));
  
      var discoverTypes = (0, _omg.getConfig)('discoverTypes');
      var popTypes = (0, _omg.getConfig)('popTypes');
      _this.state = {
        discoverTypes: discoverTypes,
        popTypes: popTypes
      };
      return _this;
    }
  
    (0, _createClass3.default)(AddModal, [{
      key: 'render',
      value: function render() {
        var fileds = [];
        switch (this.props.type) {
          case 'channel':
          case 'pc_channel':
            fileds.push((0, _jsx3.default)(_tools.Input, {
              name: 'name',
              labelName: '\u6E20\u9053\u540D',
              placeholder: '\u4E0D\u586B\u5219\u4E3A\u9ED8\u8BA4\u6E20\u9053',
              defaultValue: this.props.item.name
            }, 'share_name'));
            break;
          case 'discover':
            fileds.push((0, _jsx3.default)(_tools.Input, {
              name: 'name',
              labelName: '\u57CB\u70B9\u8BF4\u660E',
              defaultValue: this.props.item.name
            }, 'share_name'));
            fileds.push((0, _jsx3.default)(_tools.Select, {
              labelName: 'tag',
              name: 'type',
              defaultValue: this.props.item.type,
              options: this.state.discoverTypes
            }, 'discover_tag'));
            break;
          case 'discover_feature':
            fileds.push((0, _jsx3.default)(_tools.Input, {
              name: 'name',
              labelName: '\u540D\u79F0',
              defaultValue: this.props.item.name
            }, 'share_name'));
            break;
          case 'pop':
            fileds.push((0, _jsx3.default)(_tools.Input, {
              name: 'name',
              labelName: '\u6807\u9898',
              defaultValue: this.props.item.name
            }, 'name'));
            fileds.push((0, _jsx3.default)(_tools.Input, {
              name: 'short_desc',
              labelName: '\u526F\u6807\u9898',
              defaultValue: this.props.item.short_desc
            }, 'share_name'));
            fileds.push((0, _jsx3.default)(_tools.Select, {
              labelName: '\u8DF3\u8F6C\u7C7B\u578B',
              name: 'type',
              defaultValue: this.props.item.type,
              options: this.state.popTypes
            }, 'pop_type'));
            break;
          case 'cast_finish':
            fileds.push((0, _jsx3.default)(_tools.Input, {
              name: 'name',
              labelName: '\u57CB\u70B9\u8BF4\u660E',
              defaultValue: this.props.item.name
            }, 'share_name'));
            fileds.push((0, _jsx3.default)(_tools.Select, {
              labelName: '\u8DF3\u8F6C\u7C7B\u578B',
              name: 'type',
              defaultValue: this.props.item.type,
              options: this.state.popTypes
            }, 'pop_type'));
            break;
          case 'share':
            fileds.push((0, _jsx3.default)(_tools.Input, {
              name: 'tag',
              labelName: 'tag',
              defaultValue: this.props.item.tag
            }, 'tag'));
          case 'taojin':
            fileds.push((0, _jsx3.default)(_tools.Input, {
              name: 'name',
              labelName: '\u6807\u9898',
              defaultValue: this.props.item.name
            }, 'share_name'));
            fileds.push((0, _jsx3.default)(_tools.Textarea, {
              name: 'desc',
              labelName: '\u5185\u5BB9',
              defaultValue: this.props.item.desc
            }, 'share_desc'));
            fileds.push((0, _jsx3.default)(_tools.Input, {
              name: 'short_desc',
              labelName: '\u5206\u4EAB\u65F6\u8BF4\u660E',
              defaultValue: this.props.item.short_desc
            }, 'share_short_des'));
          default:
            fileds.push((0, _jsx3.default)(_tools.Input, {
              name: 'name',
              labelName: '\u57CB\u70B9\u8BF4\u660E',
              defaultValue: this.props.item.name
            }, 'share_name'));
        }
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u6DFB\u52A0'
        }, void 0, (0, _jsx3.default)('form', {
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.props.errorMsg
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'id',
          value: this.props.item.id
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'position',
          value: this.props.item.position || this.props.type
        }), fileds, (0, _jsx3.default)(_tools.AttachmentInput, {
          labelName: 'banner\u56FE\u7247',
          position: 'banner_' + this.props.item.position,
          name: 'img_path',
          defaultValue: this.props.item.img_path
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u8DF3\u8F6C\u94FE\u63A5',
          name: 'url',
          defaultValue: this.props.item.url
        }), (0, _jsx3.default)(_tools.DateTimeInput, {
          labelName: '\u5F00\u59CB\u65F6\u95F4',
          name: 'start',
          defaultValue: this.props.item.start
        }), (0, _jsx3.default)(_tools.DateTimeInput, {
          labelName: '\u7ED3\u675F\u65F6\u95F4',
          name: 'end',
          defaultValue: this.props.item.end
        }), _ref));
      }
    }]);
    return AddModal;
  }(_react.Component);
  
  AddModal.defaultProps = {
    item: {}
  };
  exports.default = (0, _reactRedux.connect)()(AddModal);

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Startup = __webpack_require__(163);
  
  var _Startup2 = _interopRequireDefault(_Startup);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Created by Wangli on 2016/6/14.
   */
  exports.default = {
  
    path: '/Startup',
  
    children: [{
      path: '/:type',
      action: function action(context) {
        return (0, _jsx3.default)(_Startup2.default, {
          type: context.params.type
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          context = _ref.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.setTitle('运营平台 | 启动页管理');
                _context.next = 3;
                return next();
  
              case 3:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _modal = __webpack_require__(70);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  var _StartupAddModal = __webpack_require__(164);
  
  var _StartupAddModal2 = _interopRequireDefault(_StartupAddModal);
  
  var _omg2 = __webpack_require__(58);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('hr', {});
  
  var _ref2 = (0, _jsx3.default)('th', {}, void 0, 'ID');
  
  var _ref3 = (0, _jsx3.default)('th', {}, void 0, '\u540D\u79F0');
  
  var _ref4 = (0, _jsx3.default)('th', {
    hidden: true
  }, void 0, '\u8DF3\u8F6CURL');
  
  var _ref5 = (0, _jsx3.default)('th', {}, void 0, '\u5F00\u59CB\u65F6\u95F4');
  
  var _ref6 = (0, _jsx3.default)('th', {}, void 0, '\u7ED3\u675F\u65F6\u95F4');
  
  var _ref7 = (0, _jsx3.default)('th', {}, void 0, '\u72B6\u6001');
  
  var _ref8 = (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C');
  
  var Startup = function (_Component) {
    (0, _inherits3.default)(Startup, _Component);
  
    function Startup(props) {
      (0, _classCallCheck3.default)(this, Startup);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Startup.__proto__ || (0, _getPrototypeOf2.default)(Startup)).call(this, props));
  
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.showUpdateModal = _this.showUpdateModal.bind(_this);
      _this.enable = _this.enable.bind(_this);
      _this.disable = _this.disable.bind(_this);
      _this.up = _this.up.bind(_this);
      _this.down = _this.down.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.list = _this.list.bind(_this);
      _this.del = _this.del.bind(_this);
      var types = (0, _omg2.getConfig)('startupTypes');
      _this.state = {
        types: types
      };
      return _this;
    }
  
    (0, _createClass3.default)(Startup, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.type !== nextProps.type) {
          this.list(nextProps.type);
        }
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        var modalView = (0, _jsx3.default)(_StartupAddModal2.default, {
          type: this.props.type,
          submit: this.add
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'showUpdateModal',
      value: function showUpdateModal(e) {
        var index = e.target.dataset.index;
        var item = this.items[index];
        var modalView = (0, _jsx3.default)(_StartupAddModal2.default, {
          update: true,
          item: item,
          type: this.props.type,
          submit: this.update
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.STARTUP_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.props.dispatch((0, _modal.hideModal)(true));
            _this2.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this3 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.STARTUP_PUT,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this3.props.dispatch((0, _modal.hideModal)(true));
            _this3.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'disable',
      value: function disable(e) {
        var _this4 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.STARTUP_DISABLE,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this4.freshData(_this4.props.type);
        });
      }
    }, {
      key: 'enable',
      value: function enable(e) {
        var _this5 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.STARTUP_ENABLE,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this5.freshData(_this5.props.type);
        });
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.props.type);
      }
    }, {
      key: 'list',
      value: function list(type) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.STARTUP_LIST,
          suffix: '/' + type,
          key: type
        }));
      }
    }, {
      key: 'up',
      value: function up(e) {
        var _this6 = this;
  
        var id = $(e.target).data('id');
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.STARTUP_UP,
          suffix: '/' + id
        })).then(function () {
          _this6.freshData(_this6.props.type);
        });
      }
    }, {
      key: 'down',
      value: function down(e) {
        var _this7 = this;
  
        var id = $(e.target).data('id');
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.STARTUP_DOWN,
          suffix: '/' + id
        })).then(function () {
          _this7.freshData(_this7.props.type);
        });
      }
    }, {
      key: 'del',
      value: function del(e) {
        var _this8 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.STARTUP_DEL,
          method: 'POST',
          formData: formData
        })).then(function () {
          return _this8.freshData(_this8.props.type);
        });
      }
    }, {
      key: 'selectChange',
      value: function selectChange(e) {
        var value = e.target.value;
        _history2.default.push('/startup/' + value);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this9 = this;
  
        var _props = this.props,
            startups = _props.startups,
            type = _props.type;
        var types = this.state.types;
  
        var btn = (0, _jsx3.default)('button', {
          className: 'btn btn-info btn-sm pull-xs-right',
          onClick: this.showAddModal
        }, void 0, '\u6DFB\u52A0');
        var items = startups[type] || [];
        this.items = items;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _keys2.default)(types).map(function (key) {
          return (0, _jsx3.default)(_tools.Radio, {
            checked: key === type,
            labelName: types[key],
            value: key,
            onChange: _this9.selectChange,
            name: 'banner-type'
          }, 'redio-' + key);
        })), _ref, (0, _jsx3.default)(_tools.Card, {
          title: '\u542F\u52A8\u56FE',
          btn: btn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, _ref2, _ref3, _ref4, (0, _jsx3.default)('th', {}, void 0, (0, _omg2.getConfig)('startupImages', this.props.type + ':1')), (0, _jsx3.default)('th', {}, void 0, (0, _omg2.getConfig)('startupImages', this.props.type + ':2')), (0, _jsx3.default)('th', {}, void 0, (0, _omg2.getConfig)('startupImages', this.props.type + ':3')), (0, _jsx3.default)('th', {}, void 0, (0, _omg2.getConfig)('startupImages', this.props.type + ':4')), _ref5, _ref6, _ref7, _ref8)), (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {
            hidden: true
          }, void 0, (0, _jsx3.default)('a', {
            title: item.target_url,
            href: item.target_url,
            target: '_blank'
          }, void 0, '\u67E5\u770B')), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.ImgBox, {
            src: item.img1
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.ImgBox, {
            src: item.img2
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.ImgBox, {
            src: item.img3
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.ImgBox, {
            src: item.img4
          })), (0, _jsx3.default)('td', {}, void 0, item.online_time), (0, _jsx3.default)('td', {}, void 0, item.offline_time), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Status, {
            status: +item.enable
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: +item.enable === 1,
            className: 'btn btn-sm btn-success-outline',
            'data-id': item.id,
            onClick: _this9.enable
          }, void 0, '\u4E0A\u7EBF'), (0, _jsx3.default)('button', {
            hidden: +item.enable === 0,
            className: 'btn btn-sm btn-warning-outline',
            'data-id': item.id,
            onClick: _this9.disable
          }, void 0, '\u4E0B\u7EBF'), (0, _jsx3.default)('button', {
            className: 'btn btn-sm btn-info-outline',
            'data-id': item.id,
            onClick: _this9.up
          }, void 0, '\u4E0A\u79FB'), (0, _jsx3.default)('button', {
            className: 'btn btn-sm btn-info-outline',
            'data-id': item.id,
            onClick: _this9.down
          }, void 0, '\u4E0B\u79FB'), (0, _jsx3.default)('button', {
            className: 'btn btn-sm btn-success-outline',
            'data-id': item.id,
            'data-index': index,
            onClick: _this9.showUpdateModal
          }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
            className: 'btn btn-sm btn-danger-outline',
            'data-id': item.id,
            onClick: _this9.del
          }, void 0, '\u5220\u9664')));
        })))));
      }
    }]);
    return Startup;
  }(_react.Component);
  
  Startup.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var startups = omg[_constants.STARTUP_LIST] || {};
    return {
      startups: startups
    };
  })(Startup);

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {});
  
  var StartupAddModal = function (_Component) {
    (0, _inherits3.default)(StartupAddModal, _Component);
  
    function StartupAddModal(props) {
      (0, _classCallCheck3.default)(this, StartupAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (StartupAddModal.__proto__ || (0, _getPrototypeOf2.default)(StartupAddModal)).call(this, props));
  
      _this.state = {
        errorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(StartupAddModal, [{
      key: 'render',
      value: function render() {
        var item = this.props.item || {};
        return (0, _jsx3.default)(_tools.Modal, {
          title: this.props.update ? '修改启动图' : '添加启动图'
        }, void 0, _react2.default.createElement(
          'form',
          { method: 'post', ref: 'addForm', onSubmit: this.props.submit },
          (0, _jsx3.default)(_tools.Alert, {
            msg: this.state.errorMsg
          }),
          (0, _jsx3.default)('input', {
            type: 'hidden',
            name: 'platform',
            value: item.platform || this.props.type
          }),
          (0, _jsx3.default)(_tools.Input, {
            labelName: '\u542F\u52A8\u9875\u540D\u79F0',
            name: 'name',
            defaultValue: item.name
          }),
          (0, _jsx3.default)('input', {
            type: 'hidden',
            name: 'id',
            defaultValue: item.id
          }),
          (0, _jsx3.default)(_tools.AttachmentInput, {
            labelName: (0, _omg.getConfig)('startupImages', this.props.type + ':1'),
            name: 'img1',
            defaultValue: item.img1 || ''
          }),
          (0, _jsx3.default)(_tools.AttachmentInput, {
            labelName: (0, _omg.getConfig)('startupImages', this.props.type + ':2'),
            name: 'img2',
            defaultValue: item.img2 || ''
          }),
          (0, _jsx3.default)(_tools.AttachmentInput, {
            labelName: (0, _omg.getConfig)('startupImages', this.props.type + ':3'),
            name: 'img3',
            defaultValue: item.img3 || ''
          }),
          (0, _jsx3.default)(_tools.AttachmentInput, {
            labelName: (0, _omg.getConfig)('startupImages', this.props.type + ':4'),
            name: 'img4',
            defaultValue: item.img4 || ''
          }),
          (0, _jsx3.default)(_tools.Input, {
            hidden: true,
            labelName: '\u56FE\u7247\u8DF3\u8F6C\u94FE\u63A5',
            name: 'target_url',
            defaultVlaue: item.target_url
          }),
          (0, _jsx3.default)(_tools.DateTimeInput, {
            labelName: '\u5F00\u59CB\u65F6\u95F4',
            defaultValue: item.online_time,
            name: 'online_time'
          }),
          (0, _jsx3.default)(_tools.DateTimeInput, {
            labelName: '\u7ED3\u675F\u65F6\u95F4',
            defaultValue: item.offline_time,
            name: 'offline_time'
          }),
          _ref
        ));
      }
    }]);
    return StartupAddModal;
  }(_react.Component);
  
  StartupAddModal.defaultProps = {
    item: []
  };
  
  exports.default = (0, _reactRedux.connect)()(StartupAddModal);

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _AwardSend = __webpack_require__(166);
  
  var _AwardSend2 = _interopRequireDefault(_AwardSend);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_AwardSend2.default, {});
  
  exports.default = {
    path: '/AwardSend',
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _modal = __webpack_require__(70);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  var _omg = __webpack_require__(56);
  
  var _Award = __webpack_require__(124);
  
  var _Award2 = _interopRequireDefault(_Award);
  
  var _omg2 = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    name: 'userId',
    labelName: '\u7528\u6237ID'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    name: 'sourceName',
    labelName: '\u5956\u54C1\u6765\u6E90',
    value: '\u624B\u52A8\u6DFB\u52A0'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {
    value: '\u53D1\u9001'
  });
  
  var AwardSend = function (_Component) {
    (0, _inherits3.default)(AwardSend, _Component);
  
    function AwardSend(props) {
      (0, _classCallCheck3.default)(this, AwardSend);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (AwardSend.__proto__ || (0, _getPrototypeOf2.default)(AwardSend)).call(this, props));
  
      _this.addAward = _this.addAward.bind(_this);
      _this.selectAward = _this.selectAward.bind(_this);
      _this.changeSelect = _this.changeSelect.bind(_this);
      _this.submit = _this.submit.bind(_this);
      _this.state = {
        awardType: '1',
        awardId: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(AwardSend, [{
      key: 'addAward',
      value: function addAward(e) {
        var awardType = e.target.dataset.type;
        var awardId = e.target.dataset.id;
        this.setState({
          awardType: awardType,
          awardId: awardId
        });
        this.props.dispatch((0, _modal.hideModal)());
      }
    }, {
      key: 'selectAward',
      value: function selectAward() {
        var awardView = (0, _jsx3.default)(_tools.Modal, {
          title: '\u6DFB\u52A0\u5956\u54C1',
          className: 'modal-lg'
        }, void 0, (0, _jsx3.default)(_Award2.default, {
          modal: true,
          addAward: this.addAward,
          type: this.state.awardType
        }));
        this.props.dispatch((0, _modal.showModal)(awardView));
      }
    }, {
      key: 'submit',
      value: function submit(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_ADD_TO_USER,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            var date = new Date();
            var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            if (!json.data.status) {
              _this2.setState({
                successMsg: '',
                errorMsg: '"' + json.data.award_name + '"\u4E8E' + time + '\u53D1\u9001' + (json.data.status ? '成功' : '失败') + '!'
              });
              return;
            }
            _this2.setState({
              errorMsg: '',
              successMsg: '"' + json.data.award_name + '"\u4E8E' + time + '\u53D1\u9001' + (json.data.status ? '成功' : '失败') + '!'
            });
          } else {
            _this2.setState({
              successMsg: '',
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'changeSelect',
      value: function changeSelect(e) {
        this.setState({
          awardType: e.target.value
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Card, {
          title: '\u624B\u52A8\u53D1\u653E\u5956\u54C1'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'p-t-1 p-x-1'
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.state.errorMsg
        }), (0, _jsx3.default)(_tools.Success, {
          msg: this.state.successMsg
        })), (0, _jsx3.default)('form', {
          className: 'm-t-1',
          onSubmit: this.submit
        }, void 0, _ref, (0, _jsx3.default)(_tools.Select, {
          onChange: this.changeSelect,
          name: 'awardType',
          labelName: '\u5956\u54C1\u7C7B\u578B',
          options: (0, _omg2.getConfig)('awardTypes'),
          value: this.state.awardType
        }), (0, _jsx3.default)(_tools.Input, {
          name: 'awardId',
          labelName: '\u5956\u54C1Id',
          value: this.state.awardId
        }), (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-sm-offset-4 col-sm-8 col-md-6'
        }, void 0, (0, _jsx3.default)('a', {
          className: 'btn btn-info-outline',
          onClick: this.selectAward
        }, void 0, '\u9009\u62E9\u5956\u54C1'))), _ref2, _ref3)));
      }
    }]);
    return AwardSend;
  }(_react.Component);
  
  AwardSend.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)()(AwardSend);

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _AppUpdate = __webpack_require__(168);
  
  var _AppUpdate2 = _interopRequireDefault(_AppUpdate);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Created by Wangli on 2016/6/14.
   */
  exports.default = {
  
    path: '/appupdate',
  
    children: [{
      path: '/:type',
      action: function action(context) {
        return (0, _jsx3.default)(_AppUpdate2.default, {
          type: +context.params.type
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          context = _ref.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.setTitle('运营平台 | app升级配置');
                _context.next = 3;
                return next();
  
              case 3:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _modal = __webpack_require__(70);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  var _omg2 = __webpack_require__(58);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('hr', {});
  
  var _ref2 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'ID'), (0, _jsx3.default)('th', {}, void 0, '\u7248\u672C\u53F7'), (0, _jsx3.default)('th', {}, void 0, '\u5F3A\u5236\u5347\u7EA7'), (0, _jsx3.default)('th', {}, void 0, '\u66F4\u65B0\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u4E0B\u8F7D\u94FE\u63A5'), (0, _jsx3.default)('th', {}, void 0, '\u5B89\u88C5\u5305\u5927\u5C0F'), (0, _jsx3.default)('th', {}, void 0, '\u5347\u7EA7\u63CF\u8FF0'), (0, _jsx3.default)('td', {}, void 0, '\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var AppUpdate = function (_Component) {
    (0, _inherits3.default)(AppUpdate, _Component);
  
    function AppUpdate(props) {
      (0, _classCallCheck3.default)(this, AppUpdate);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (AppUpdate.__proto__ || (0, _getPrototypeOf2.default)(AppUpdate)).call(this, props));
  
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.showUpdateModal = _this.showUpdateModal.bind(_this);
      _this.enable = _this.enable.bind(_this);
      _this.disable = _this.disable.bind(_this);
      _this.freshData = _this.freshData.bind(_this);
      _this.del = _this.del.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.update = _this.update.bind(_this);
      var types = (0, _omg2.getConfig)('appUpdateTypes');
      _this.state = {
        types: types,
        errorMsg: '',
        addErrorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(AppUpdate, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.freshData(this.props.type);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.type !== nextProps.type) {
          this.freshData(nextProps.type);
        }
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        var modalView = (0, _jsx3.default)(AppUpdateAddModal, {
          submit: this.add,
          errorMsg: this.state.addErrorMsg,
          type: this.props.type,
          callback: this.freshData
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'showUpdateModal',
      value: function showUpdateModal(e) {
        var index = e.target.dataset.index;
        var item = this.items[index];
        var modalView = (0, _jsx3.default)(AppUpdateAddModal, {
          submit: this.update,
          errorMsg: this.state.addErrorMsg,
          type: this.props.type,
          item: item,
          update: true,
          callback: this.freshData
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'disable',
      value: function disable(e) {
        var _this2 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.APP_DISABLE,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this2.freshData(_this2.props.type);
        });
      }
    }, {
      key: 'enable',
      value: function enable(e) {
        var _this3 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.APP_ENABLE,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this3.freshData(_this3.props.type);
        });
      }
    }, {
      key: 'freshData',
      value: function freshData(type) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.APP_UPDATE_LOG,
          suffix: '/' + type,
          key: type
        }));
      }
    }, {
      key: 'del',
      value: function del(e) {
        var _this4 = this;
  
        var id = $(e.target).data('id');
        if (!confirm('确认删除吗?')) {
          return;
        }
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.APP_DEL,
          method: 'POST',
          formData: formData
        })).then(function () {
          return _this4.freshData(_this4.props.type);
        });
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this5 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.APP_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this5.props.dispatch((0, _modal.hideModal)(true));
            _this5.freshData(_this5.props.type);
          } else {
            _this5.setState({
              addErrorMsg: json.data.error_msg
            });
            _this5.showAddModal();
          }
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this6 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.APP_PUT,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this6.props.dispatch((0, _modal.hideModal)(true));
            _this6.freshData(_this6.props.type);
          } else {
            _this6.setState({
              addErrorMsg: json.data.error_msg
            });
            _this6.showAddModal();
          }
        });
      }
    }, {
      key: 'selectChange',
      value: function selectChange(e) {
        var value = e.target.value;
        _history2.default.push('/appupdate/' + value);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this7 = this;
  
        var _props = this.props,
            updates = _props.updates,
            type = _props.type;
        var types = this.state.types;
  
        var btn = (0, _jsx3.default)('button', {
          className: 'btn btn-info btn-sm pull-xs-right',
          onClick: this.showAddModal
        }, void 0, '\u6DFB\u52A0');
        var updatesList = updates[type] || {};
        var items = updatesList.data || [];
        this.items = items;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _keys2.default)(types).map(function (key) {
          return (0, _jsx3.default)(_tools.Radio, {
            checked: +key === type,
            labelName: types[key],
            value: key,
            onChange: _this7.selectChange,
            name: 'banner-type'
          }, 'redio-' + key);
        })), _ref, (0, _jsx3.default)(_tools.Card, {
          title: '\u5347\u7EA7\u914D\u7F6E\u5217\u8868',
          btn: btn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, _ref2, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.version), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('forceTypes', item.force)), (0, _jsx3.default)('td', {}, void 0, item.update_time), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('a', {
            title: item.url,
            href: item.url,
            target: '_blank'
          }, void 0, '\u67E5\u770B')), (0, _jsx3.default)('td', {}, void 0, item.size), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Popover, {
            title: '\u5347\u7EA7\u63CF\u8FF0',
            content: item.description + ' '
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Status, {
            status: +item.toggle
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: +item.toggle === 1,
            className: 'btn btn-sm btn-success-outline',
            'data-id': item.id,
            onClick: _this7.enable
          }, void 0, '\u4E0A\u7EBF'), (0, _jsx3.default)('button', {
            hidden: +item.toggle === 0,
            className: 'btn btn-sm btn-warning-outline',
            'data-id': item.id,
            onClick: _this7.disable
          }, void 0, '\u4E0B\u7EBF'), (0, _jsx3.default)('button', {
            'data-index': index,
            className: 'btn btn-sm btn-success-outline',
            'data-id': item.id,
            onClick: _this7.showUpdateModal
          }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
            className: 'btn btn-sm btn-danger-outline',
            'data-id': item.id,
            onClick: _this7.del
          }, void 0, '\u5220\u9664')));
        })))));
      }
    }]);
    return AppUpdate;
  }(_react.Component);
  
  AppUpdate.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var updates = omg[_constants.APP_UPDATE_LOG] || {};
    return {
      updates: updates
    };
  })(AppUpdate);
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var AppUpdateAddModal = function (_Component2) {
    (0, _inherits3.default)(AppUpdateAddModal, _Component2);
  
    function AppUpdateAddModal(props) {
      (0, _classCallCheck3.default)(this, AppUpdateAddModal);
  
      var _this8 = (0, _possibleConstructorReturn3.default)(this, (AppUpdateAddModal.__proto__ || (0, _getPrototypeOf2.default)(AppUpdateAddModal)).call(this, props));
  
      var forceTypes = (0, _omg2.getConfig)('forceTypes');
      _this8.state = {
        forceTypes: forceTypes
      };
      return _this8;
    }
  
    (0, _createClass3.default)(AppUpdateAddModal, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_tools.Modal, {
          title: this.props.update ? '更新升级配置' : '添加升级配置'
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.props.errorMsg
        }), _react2.default.createElement(
          'form',
          { method: 'post', ref: 'addForm', onSubmit: this.props.submit },
          (0, _jsx3.default)('input', {
            type: 'hidden',
            name: 'platform',
            value: this.props.type
          }),
          (0, _jsx3.default)('input', {
            type: 'hidden',
            name: 'id',
            value: this.props.item.id || ''
          }),
          (0, _jsx3.default)(_tools.Input, {
            labelName: '\u7248\u672C\u53F7',
            name: 'version',
            defaultValue: this.props.item.version || ''
          }),
          (0, _jsx3.default)(_tools.Select, {
            labelName: '\u5F3A\u5236\u5347\u7EA7',
            name: 'force',
            options: this.state.forceTypes,
            defaultValue: this.props.item.force || ''
          }),
          (0, _jsx3.default)(_tools.Input, {
            labelName: '\u66F4\u65B0\u65F6\u95F4',
            placeholder: 'YYYY-MM-DD',
            name: 'update_time',
            defaultValue: this.props.item.update_time || ''
          }),
          this.props.type === 2 ? false : (0, _jsx3.default)(_tools.Input, {
            labelName: '\u4E0B\u8F7D\u94FE\u63A5',
            name: 'url',
            defaultValue: this.props.item.url || ''
          }),
          (0, _jsx3.default)(_tools.Input, {
            labelName: '\u5B89\u88C5\u5305\u5927\u5C0F',
            name: 'size',
            defaultValue: this.props.item.size || ''
          }),
          (0, _jsx3.default)(_tools.Textarea, {
            labelName: '\u5347\u7EA7\u63CF\u8FF0',
            name: 'description',
            defaultValue: this.props.item.description || ''
          }),
          _ref3
        ));
      }
    }]);
    return AppUpdateAddModal;
  }(_react.Component);
  
  AppUpdateAddModal.defaultProps = {
    item: {}
  };

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Feedback = __webpack_require__(170);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/Feedback',
    children: [{
      path: '/',
      action: function action(context) {
        return (0, _jsx3.default)(_Feedback2.default, {
          page: +context.query.page || 1
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          context = _ref.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.setTitle('运营后台 | 用户反馈');
                _context.next = 3;
                return next();
  
              case 3:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  var _omg2 = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'ID'), (0, _jsx3.default)('th', {}, void 0, '\u7528\u6237ID'), (0, _jsx3.default)('th', {}, void 0, '\u5185\u5BB9'), (0, _jsx3.default)('th', {}, void 0, '\u5E73\u53F0'), (0, _jsx3.default)('th', {}, void 0, '\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, 'UA')));
  
  var Feedback = function (_Component) {
    (0, _inherits3.default)(Feedback, _Component);
  
    function Feedback(props) {
      (0, _classCallCheck3.default)(this, Feedback);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Feedback.__proto__ || (0, _getPrototypeOf2.default)(Feedback)).call(this, props));
  
      _this.fresh = _this.fresh.bind(_this);
      _this.state = {
        errorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(Feedback, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh(this.props.page);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.fresh(nextProps.page);
        }
      }
    }, {
      key: 'fresh',
      value: function fresh(page) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.FEEDBACK_LIST,
          queryObj: { page: page },
          key: page
        }));
      }
    }, {
      key: 'render',
      value: function render() {
        var feedback = this.props.feedbackList[this.props.page] || {};
        var items = feedback.data || [];
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Card, {
          title: '\u7528\u6237\u53CD\u9988\u5217\u8868'
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, _ref, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.user_id), (0, _jsx3.default)('td', {}, void 0, item.content), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('feedbackPlatformTypes', item.platform)), (0, _jsx3.default)('td', {}, void 0, item.created_at), (0, _jsx3.default)('td', {}, void 0, item.user_agent));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: feedback.current_page,
          lastPage: feedback.last_page
        }));
      }
    }]);
    return Feedback;
  }(_react.Component);
  
  Feedback.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var feedbackList = omg[_constants.FEEDBACK_LIST] || {};
    return {
      feedbackList: feedbackList
    };
  })(Feedback);

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Notice = __webpack_require__(172);
  
  var _Notice2 = _interopRequireDefault(_Notice);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/Notice',
    children: [{
      path: '/',
      action: function action(context) {
        return (0, _jsx3.default)(_Notice2.default, {
          page: +context.query.page || 1
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          context = _ref.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.setTitle('运营后台 | 公告管理');
                _context.next = 3;
                return next();
  
              case 3:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _omg2 = __webpack_require__(58);
  
  var _tools = __webpack_require__(73);
  
  var _modal = __webpack_require__(70);
  
  var _NoticeAddModal = __webpack_require__(173);
  
  var _NoticeAddModal2 = _interopRequireDefault(_NoticeAddModal);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('i', {
    className: 'fa fa-plus'
  }, void 0, ' \u6DFB\u52A0');
  
  var _ref2 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'id'), (0, _jsx3.default)('th', {}, void 0, '\u6807\u9898'), (0, _jsx3.default)('th', {}, void 0, '\u5185\u5BB9'), (0, _jsx3.default)('th', {}, void 0, '\u53D1\u5E03\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u53D1\u5E03\u5E73\u53F0'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var Notice = function (_Component) {
    (0, _inherits3.default)(Notice, _Component);
  
    function Notice(props) {
      (0, _classCallCheck3.default)(this, Notice);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Notice.__proto__ || (0, _getPrototypeOf2.default)(Notice)).call(this, props));
  
      _this.showModal = _this.showModal.bind(_this);
      _this.del = _this.del.bind(_this);
      _this.release = _this.release.bind(_this);
      _this.offLine = _this.offLine.bind(_this);
      _this.up = _this.up.bind(_this);
      _this.down = _this.down.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.showUpdate = _this.showUpdate.bind(_this);
      _this.list = _this.list.bind(_this);
      _this.template = _this.template.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(Notice, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.list(this.props.page);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.list(nextProps.page);
        }
      }
    }, {
      key: 'showModal',
      value: function showModal() {
        var modalView = (0, _jsx3.default)(_NoticeAddModal2.default, {
          submit: this.add
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        var dispatch = this.props.dispatch;
  
        dispatch((0, _omg.fetchAction)({
          type: _constants.NOTICE_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            dispatch((0, _modal.hideModal)(true));
            _this2.fresh(_this2.props.page);
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'hideModal',
      value: function hideModal() {
        this.props.dispatch((0, _modal.hideModal)());
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.props.page);
      }
    }, {
      key: 'list',
      value: function list(page) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.NOTICE_LIST,
          method: 'GET',
          queryObj: { page: page },
          key: page
        }));
      }
    }, {
      key: 'template',
      value: function template() {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.TEMPLATE_NOTICE,
          method: 'POST'
        })).then(function () {
          alert('pc公告页生成完成');
        });
      }
    }, {
      key: 'del',
      value: function del(e) {
        var _this3 = this;
  
        var id = $(e.target).data('id');
        var formData = new FormData();
        formData.append('id', id);
        var type_id = $('.focus').data('id');
        this.props.dispatch((0, _omg.commonFetch)(_constants.NOTICE_DEL, 'POST', formData)).then(function () {
          return _this3.fresh();
        });
      }
    }, {
      key: 'release',
      value: function release(e) {
        var _this4 = this;
  
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.NOTICE_RELEASE,
          method: 'POST',
          formData: formData
        })).then(function () {
          return _this4.fresh();
        });
      }
    }, {
      key: 'offLine',
      value: function offLine(e) {
        var _this5 = this;
  
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.NOTICE_OFFLINE,
          method: 'POST',
          formData: formData
        })).then(function () {
          return _this5.fresh(_this5.props.page);
        });
      }
    }, {
      key: 'up',
      value: function up(e) {
        var _this6 = this;
  
        var id = e.target.dataset.id;
        this.props.dispatch((0, _omg.commonFetch)(_constants.NOTICE_UP, 'GET', false, "/" + id)).then(function () {
          return _this6.fresh();
        });
      }
    }, {
      key: 'down',
      value: function down(e) {
        var _this7 = this;
  
        var id = e.target.dataset.id;
        this.props.dispatch((0, _omg.commonFetch)(_constants.NOTICE_DOWN, 'GET', false, "/" + id)).then(function () {
          return _this7.fresh();
        });
      }
    }, {
      key: 'showUpdate',
      value: function showUpdate(e) {
        var id = e.target.dataset.id;
        var index = e.target.dataset.index;
        var item = this.items[index] || {};
        if (item.id !== +id) {
          this.setState({
            errorMsg: '编辑信息不匹配,请刷新重试'
          });
          return;
        }
        var modalView = (0, _jsx3.default)(_NoticeAddModal2.default, {
          update: true,
          item: item,
          submit: this.update
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this8 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        var dispatch = this.props.dispatch;
  
        dispatch((0, _omg.fetchAction)({
          type: _constants.NOTICE_PUT,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            dispatch((0, _modal.hideModal)(true));
            _this8.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this9 = this;
  
        var notice = this.props.noticeList[this.props.page] || {};
        var items = notice.data || [];
        this.items = items;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
          className: 'card'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'card-header clearfix'
        }, void 0, '\u516C\u544A\u5217\u8868', (0, _jsx3.default)('button', {
          type: 'button',
          className: 'btn btn-sm  btn-info pull-right',
          'data-toggle': 'modal',
          'data-target': '#channel-add-modal',
          onClick: this.showModal
        }, void 0, _ref), (0, _jsx3.default)('button', {
          type: 'button',
          className: 'btn btn-sm btn-success pull-right',
          'data-toggle': 'modal',
          'data-target': '#channel-add-modal',
          onClick: this.template
        }, void 0, '\u540C\u6B65pc\u516C\u544A\u9875')), (0, _jsx3.default)('table', {
          className: 'table table-bordered m-b-0 table-hover'
        }, void 0, _ref2, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.title), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Popover, {
            title: item.title,
            content: item.content
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Status, {
            status: +item.release
          })), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('noticePlatforms', item.platform)), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            hidden: +item.release === 1,
            'data-id': item.id,
            onClick: _this9.release
          }, void 0, '\u53D1\u5E03'), (0, _jsx3.default)('button', {
            className: 'btn btn-warning-outline btn-sm',
            hidden: +item.release === 0,
            'data-id': item.id,
            onClick: _this9.offLine
          }, void 0, '\u4E0B\u7EBF'), (0, _jsx3.default)('button', {
            className: 'btn btn-info-outline btn-sm',
            'data-id': item.id,
            onClick: _this9.up
          }, void 0, '\u4E0A\u79FB'), (0, _jsx3.default)('button', {
            className: 'btn btn-info-outline btn-sm',
            'data-id': item.id,
            onClick: _this9.down
          }, void 0, '\u4E0B\u79FB'), (0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            'data-index': index,
            'data-id': item.id,
            onClick: _this9.showUpdate
          }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
            className: 'btn btn-danger-outline btn-sm',
            'data-id': item.id,
            onClick: _this9.del
          }, void 0, '\u5220\u9664')));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: notice.current_page,
          lastPage: notice.last_page
        }));
      }
    }]);
    return Notice;
  }(_react.Component);
  
  Notice.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var noticeList = omg[_constants.NOTICE_LIST] || {};
    return {
      noticeList: noticeList
    };
  })(Notice);

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {});
  
  var NoticeAddModal = function (_Component) {
    (0, _inherits3.default)(NoticeAddModal, _Component);
  
    function NoticeAddModal(props) {
      (0, _classCallCheck3.default)(this, NoticeAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (NoticeAddModal.__proto__ || (0, _getPrototypeOf2.default)(NoticeAddModal)).call(this, props));
  
      _this.state = {
        errorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(NoticeAddModal, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_tools.Modal, {
          title: this.props.update ? '编辑公告' : '添加公告'
        }, void 0, (0, _jsx3.default)('form', {
          id: 'add-article-form',
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.state.errorMsg
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'id',
          value: this.props.item.id
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u6807\u9898',
          name: 'title',
          defaultValue: this.props.item.title
        }), (0, _jsx3.default)(_tools.Select, {
          labelName: '\u5E73\u53F0',
          name: 'platform',
          options: (0, _omg.getConfig)('noticePlatforms'),
          defaultValue: this.props.item.platform
        }), (0, _jsx3.default)(_tools.Editor, {
          name: 'content',
          defaultValue: this.props.item.content
        }), _ref));
      }
    }]);
    return NoticeAddModal;
  }(_react.Component);
  
  NoticeAddModal.defaultProps = {
    item: {}
  };
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var errorMsg = omg.errorMsg[_constants.NOTICE_ADD] || '';
    return {
      errorMsg: errorMsg
    };
  })(NoticeAddModal);

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Redeem = __webpack_require__(175);
  
  var _Redeem2 = _interopRequireDefault(_Redeem);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/Redeem',
    children: [{
      path: '/',
      action: function action(context) {
        return (0, _jsx3.default)(_Redeem2.default, {
          page: +context.query.page || 1
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          context = _ref.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.setTitle('运营后台 | 兑换码');
                _context.next = 3;
                return next();
  
              case 3:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  var _RedeemAddModal = __webpack_require__(176);
  
  var _RedeemAddModal2 = _interopRequireDefault(_RedeemAddModal);
  
  var _modal = __webpack_require__(70);
  
  var _omg2 = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'ID'), (0, _jsx3.default)('th', {}, void 0, '\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1\u7C7B\u578B'), (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1ID'), (0, _jsx3.default)('th', {}, void 0, '\u6570\u91CF'), (0, _jsx3.default)('th', {}, void 0, '\u5151\u6362\u7801\u6587\u4EF6'), (0, _jsx3.default)('th', {}, void 0, '\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u8FC7\u671F\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var Redeem = function (_Component) {
    (0, _inherits3.default)(Redeem, _Component);
  
    function Redeem(props) {
      (0, _classCallCheck3.default)(this, Redeem);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Redeem.__proto__ || (0, _getPrototypeOf2.default)(Redeem)).call(this, props));
  
      _this.fresh = _this.fresh.bind(_this);
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.list = _this.list.bind(_this);
      _this.export = _this.export.bind(_this);
      _this.state = {
        errorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(Redeem, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh(this.props.page);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.list(nextProps.page);
        }
      }
    }, {
      key: 'list',
      value: function list(page) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.REDEEM_LIST,
          queryObj: { page: page },
          key: page
        }));
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.props.page);
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.REDEEM_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.props.dispatch((0, _modal.hideModal)(true));
            _this2.fresh();
          }
        });
      }
    }, {
      key: 'export',
      value: function _export(e) {
        var _this3 = this;
  
        var id = e.target.dataset.id;
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.REDEEM_EXPORT,
          queryObj: { id: id }
        })).then(function () {
          return _this3.fresh();
        });
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        var modalView = (0, _jsx3.default)(_RedeemAddModal2.default, {
          submit: this.add
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;
  
        var redeem = this.props.redeemList[this.props.page] || {};
        var items = redeem.data || [];
        var btn = (0, _jsx3.default)('button', {
          className: 'btn btn-info btn-sm pull-xs-right',
          onClick: this.showAddModal
        }, void 0, '\u6DFB\u52A0');
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Card, {
          title: '\u5151\u6362\u7801\u5217\u8868',
          btn: btn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, _ref, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('awardTypes', item.award_type)), (0, _jsx3.default)('td', {}, void 0, item.award_id), (0, _jsx3.default)('td', {}, void 0, item.number), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('span', {
            hidden: item.export_status !== 1
          }, void 0, '\u751F\u6210\u4E2D'), (0, _jsx3.default)('a', {
            hidden: item.file_name === '' || item.export_status === 1,
            href: (0, _omg2.getApi)(_constants.REDEEM_DOWNLOAD) + '?file=' + item.file_name,
            target: '_blank'
          }, void 0, '\u4E0B\u8F7D')), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('redeemStatus', item.status)), (0, _jsx3.default)('td', {}, void 0, item.expire_time), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: item.export_status === 1 || item.status !== 2,
            className: 'btn btn-sm btn-primary-outline',
            'data-id': item.id,
            onClick: _this4.export
          }, void 0, item.export_status === 0 ? '生成下载文件' : '重新生成下载文件'), (0, _jsx3.default)('button', {
            className: 'btn btn-sm btn-info-outline',
            'data-id': item.id,
            onClick: _this4.fresh
          }, void 0, '\u5237\u65B0')));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: redeem.current_page,
          lastPage: redeem.last_page
        }));
      }
    }]);
    return Redeem;
  }(_react.Component);
  
  Redeem.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var redeemList = omg[_constants.REDEEM_LIST] || {};
    return {
      redeemList: redeemList
    };
  })(Redeem);

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _Award = __webpack_require__(124);
  
  var _Award2 = _interopRequireDefault(_Award);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // 添加兑换码弹窗
  var _ref = (0, _jsx3.default)(_tools.Input, {
    name: 'name',
    labelName: '\u5151\u6362\u7801\u540D\u79F0'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    type: 'number',
    name: 'number',
    labelName: '\u751F\u6210\u6570\u91CF'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.DateTimeInput, {
    name: 'expire_time',
    labelName: '\u8FC7\u671F\u65F6\u95F4'
  });
  
  var _ref4 = (0, _jsx3.default)(_tools.Submit, {
    value: '\u6DFB\u52A0'
  });
  
  var RedeemAddModal = function (_Component) {
    (0, _inherits3.default)(RedeemAddModal, _Component);
  
    function RedeemAddModal(props) {
      (0, _classCallCheck3.default)(this, RedeemAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (RedeemAddModal.__proto__ || (0, _getPrototypeOf2.default)(RedeemAddModal)).call(this, props));
  
      _this.addAward = _this.addAward.bind(_this);
      _this.showAward = _this.showAward.bind(_this);
      _this.changeSelect = _this.changeSelect.bind(_this);
      _this.state = {
        awardType: '1',
        awardId: '',
        awardHidden: true
      };
      return _this;
    }
  
    (0, _createClass3.default)(RedeemAddModal, [{
      key: 'addAward',
      value: function addAward(e) {
        this.setState({
          awardHidden: true,
          awardType: e.target.dataset.type,
          awardId: e.target.dataset.id
        });
      }
    }, {
      key: 'showAward',
      value: function showAward() {
        this.setState({
          awardHidden: false
        });
      }
    }, {
      key: 'changeSelect',
      value: function changeSelect(e) {
        this.setState({
          awardType: e.target.value
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u6DFB\u52A0\u5151\u6362\u7801',
          className: 'modal-lg'
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.props.addErrorMsg
        }), (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, _ref, (0, _jsx3.default)(_tools.Select, {
          onChange: this.changeSelect,
          name: 'award_type',
          labelName: '\u5956\u54C1\u7C7B\u578B',
          options: (0, _omg.getConfig)('awardTypes'),
          value: this.state.awardType
        }), (0, _jsx3.default)(_tools.Input, {
          name: 'award_id',
          labelName: '\u5956\u54C1Id',
          value: this.state.awardId
        }), (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-sm-offset-4 col-sm-8 col-md-6'
        }, void 0, (0, _jsx3.default)('a', {
          className: 'btn btn-info-outline',
          onClick: this.showAward
        }, void 0, '\u9009\u62E9\u5956\u54C1'))), _ref2, _ref3, _ref4), (0, _jsx3.default)('div', {
          hidden: this.state.awardHidden
        }, void 0, (0, _jsx3.default)('hr', {
          style: { borderStyle: 'dashed' }
        }), (0, _jsx3.default)(_Award2.default, {
          modal: true,
          addAward: this.addAward,
          type: this.state.awardType
        })));
      }
    }]);
    return RedeemAddModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    return {};
  })(RedeemAddModal);

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Banner = __webpack_require__(160);
  
  var _Banner2 = _interopRequireDefault(_Banner);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Created by Wangli on 2016/6/14.
   */
  exports.default = {
  
    path: '/ShareConfig',
  
    children: [{
      path: '/:type',
      action: function action(context) {
        return (0, _jsx3.default)(_Banner2.default, {
          path: 'ShareConfig',
          type: context.params.type
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _SendAwards = __webpack_require__(179);
  
  var _SendAwards2 = _interopRequireDefault(_SendAwards);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/SendAwards',
    children: [{
      path: '/',
      action: function action(context) {
        return (0, _jsx3.default)(_SendAwards2.default, {
          page: +context.query.page || 1
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          context = _ref.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.setTitle('运营后台 | 批量发送奖品');
                _context.next = 3;
                return next();
  
              case 3:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _omg2 = __webpack_require__(58);
  
  var _tools = __webpack_require__(73);
  
  var _modal = __webpack_require__(70);
  
  var _AwardsAddModal = __webpack_require__(180);
  
  var _AwardsAddModal2 = _interopRequireDefault(_AwardsAddModal);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('i', {
    className: 'fa fa-plus'
  }, void 0, ' \u6DFB\u52A0');
  
  var _ref2 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'id'), (0, _jsx3.default)('th', {}, void 0, '\u7528\u6237id'), (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1\u7C7B\u578B'), (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1id'), (0, _jsx3.default)('th', {}, void 0, '\u6765\u6E90\u540D'), (0, _jsx3.default)('th', {}, void 0, '\u53D1\u9001\u6570\u91CF'), (0, _jsx3.default)('th', {}, void 0, '\u53D1\u9001\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u5907\u6CE8')));
  
  var SendAwards = function (_Component) {
    (0, _inherits3.default)(SendAwards, _Component);
  
    function SendAwards(props) {
      (0, _classCallCheck3.default)(this, SendAwards);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (SendAwards.__proto__ || (0, _getPrototypeOf2.default)(SendAwards)).call(this, props));
  
      _this.showModal = _this.showModal.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      _this.list = _this.list.bind(_this);
      _this.add = _this.add.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(SendAwards, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.list(this.props.page);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.list(nextProps.page);
        }
      }
    }, {
      key: 'showModal',
      value: function showModal() {
        var modalView = (0, _jsx3.default)(_AwardsAddModal2.default, {
          submit: this.add
        });
        this.props.dispatch((0, _modal.showModal)(modalView));
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.props.page);
      }
    }, {
      key: 'list',
      value: function list(page) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BATCH_AWARD_LIST,
          method: 'GET',
          queryObj: {
  
            page: page
          },
          key: page
        }));
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BATCH_AWARD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.props.dispatch((0, _modal.hideModal)());
            _this2.fresh();
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;
  
        var batch = this.props.batchList[this.props.page] || {};
        var items = batch.data || [];
        this.items = items;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
          className: 'card'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'card-header clearfix'
        }, void 0, '\u6279\u91CF\u53D1\u9001\u5956\u54C1', (0, _jsx3.default)('button', {
          type: 'button',
          className: 'btn btn-sm  btn-info pull-right',
          'data-toggle': 'modal',
          'data-target': '#channel-add-modal',
          onClick: this.showModal
        }, void 0, _ref)), (0, _jsx3.default)('table', {
          className: 'table table-bordered m-b-0 table-hover'
        }, void 0, _ref2, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('div', {
            style: { 'wordBreak': 'break-all' }
          }, void 0, item.uids)), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('awardTypes', item.award_type)), (0, _jsx3.default)('td', {}, void 0, item.award_id), (0, _jsx3.default)('td', {}, void 0, item.source_name), (0, _jsx3.default)('td', {}, void 0, item.send_num || '—'), (0, _jsx3.default)('td', {}, void 0, item.status !== 2 ? '发送中' : '发送完成'), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            className: 'btn btn-info-outline btn-sm',
            onClick: _this3.fresh
          }, void 0, '\u5237\u65B0')));
        }))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: batch.current_page,
          lastPage: batch.last_page
        })));
      }
    }]);
    return SendAwards;
  }(_react.Component);
  
  SendAwards.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var batchList = omg[_constants.BATCH_AWARD_LIST] || {};
    return {
      batchList: batchList
    };
  })(SendAwards);

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  var _omg = __webpack_require__(58);
  
  var _omg2 = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _Award = __webpack_require__(124);
  
  var _Award2 = _interopRequireDefault(_Award);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Textarea, {
    name: 'uids',
    labelName: '\u624B\u673A\u53F7/ID'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    name: 'source_name',
    labelName: '\u5956\u54C1\u6765\u6E90',
    value: '\u624B\u52A8\u6DFB\u52A0'
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Checkbox, {
    labelName: '\u5176\u5B83\u8D39\u7528',
    name: 'is_other'
  });
  
  var _ref4 = (0, _jsx3.default)(_tools.Submit, {
    value: '\u53D1\u9001'
  });
  
  var AwardsAddModal = function (_Component) {
    (0, _inherits3.default)(AwardsAddModal, _Component);
  
    function AwardsAddModal(props) {
      (0, _classCallCheck3.default)(this, AwardsAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (AwardsAddModal.__proto__ || (0, _getPrototypeOf2.default)(AwardsAddModal)).call(this, props));
  
      _this.addAward = _this.addAward.bind(_this);
      _this.showAward = _this.showAward.bind(_this);
      _this.selectAward = _this.selectAward.bind(_this);
      _this.changeSelect = _this.changeSelect.bind(_this);
      _this.state = {
        awardType: '1',
        awardId: '',
        awardHidden: true
      };
      return _this;
    }
  
    (0, _createClass3.default)(AwardsAddModal, [{
      key: 'addAward',
      value: function addAward(e) {
        this.setState({
          awardHidden: true,
          awardType: e.target.dataset.type,
          awardId: e.target.dataset.id
        });
      }
    }, {
      key: 'showAward',
      value: function showAward() {
        this.setState({
          awardHidden: false
        });
      }
    }, {
      key: 'selectAward',
      value: function selectAward() {
        var awardView = (0, _jsx3.default)(_tools.Modal, {
          title: '\u6DFB\u52A0\u5956\u54C1',
          className: 'modal-lg'
        }, void 0, (0, _jsx3.default)(_Award2.default, {
          modal: true,
          addAward: this.addAward,
          type: this.state.awardType
        }));
        this.props.dispatch((0, _modal.showModal)(awardView));
      }
    }, {
      key: 'changeSelect',
      value: function changeSelect(e) {
        this.setState({
          awardType: e.target.value
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_tools.Modal, {
          title: this.props.update ? '' : '批量发送奖品',
          className: 'modal-lg'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'p-t-1 p-x-1'
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.state.errorMsg
        }), (0, _jsx3.default)(_tools.Success, {
          msg: this.state.successMsg
        })), (0, _jsx3.default)('form', {
          className: 'm-t-1',
          onSubmit: this.props.submit
        }, void 0, _ref, (0, _jsx3.default)(_tools.Select, {
          onChange: this.changeSelect,
          name: 'award_type',
          labelName: '\u5956\u54C1\u7C7B\u578B',
          options: (0, _omg.getConfig)('awardTypes'),
          value: this.state.awardType
        }), (0, _jsx3.default)(_tools.Input, {
          name: 'award_id',
          labelName: '\u5956\u54C1Id',
          value: this.state.awardId
        }), (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-sm-offset-4 col-sm-8 col-md-6'
        }, void 0, (0, _jsx3.default)('a', {
          className: 'btn btn-info-outline',
          onClick: this.showAward
        }, void 0, '\u9009\u62E9\u5956\u54C1'))), _ref2, _ref3, _ref4), (0, _jsx3.default)('div', {
          hidden: this.state.awardHidden
        }, void 0, (0, _jsx3.default)('hr', {
          style: { borderStyle: 'dashed' }
        }), (0, _jsx3.default)(_Award2.default, {
          modal: true,
          addAward: this.addAward,
          type: this.state.awardType
        })));
      }
    }]);
    return AwardsAddModal;
  }(_react.Component);
  
  AwardsAddModal.defaultProps = {
    item: {}
  };
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var errorMsg = omg.errorMsg[_constants.BATCH_AWARD] || '';
    return {
      errorMsg: errorMsg
    };
  })(AwardsAddModal);

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ActivityJoins = __webpack_require__(182);
  
  var _ActivityJoins2 = _interopRequireDefault(_ActivityJoins);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/ActivityJoins',
    children: [{
      path: '/',
      action: function action(context) {
        return (0, _jsx3.default)(_ActivityJoins2.default, {
          page: +context.query.page || 1
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          context = _ref.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.setTitle('运营后台 | 活动参与记录');
                _context.next = 3;
                return next();
  
              case 3:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _stringify = __webpack_require__(15);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _extends2 = __webpack_require__(66);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _omg2 = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {
    className: 'form-group'
  }, void 0, (0, _jsx3.default)('input', {
    type: 'number',
    name: 'user_id',
    className: 'form-control',
    placeholder: '\u7528\u6237Id'
  }));
  
  var _ref2 = (0, _jsx3.default)('div', {
    className: 'form-group'
  }, void 0, (0, _jsx3.default)('input', {
    type: 'number',
    name: 'activity_id',
    className: 'form-control',
    placeholder: '\u6D3B\u52A8Id'
  }));
  
  var _ref3 = (0, _jsx3.default)('div', {
    className: 'form-group'
  }, void 0, (0, _jsx3.default)('select', {
    name: 'status',
    className: 'form-control'
  }, void 0, (0, _jsx3.default)('option', {
    value: ''
  }, void 0, '\u72B6\u6001'), (0, _jsx3.default)('option', {
    value: '1'
  }, void 0, '\u9891\u6B21\u9A8C\u8BC1\u4E0D\u901A\u8FC7'), (0, _jsx3.default)('option', {
    value: '2'
  }, void 0, '\u89C4\u5219\u9A8C\u8BC1\u4E0D\u901A\u8FC7'), (0, _jsx3.default)('option', {
    value: '3'
  }, void 0, '\u6210\u529F')));
  
  var _ref4 = (0, _jsx3.default)('button', {
    type: 'submit',
    className: 'btn btn-primary'
  }, void 0, '\u67E5\u8BE2');
  
  var _ref5 = (0, _jsx3.default)('input', {
    type: 'reset',
    className: 'btn btn-info',
    value: '\u91CD\u7F6E'
  });
  
  var _ref6 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'ID'), (0, _jsx3.default)('th', {}, void 0, '\u6D3B\u52A8id'), (0, _jsx3.default)('th', {}, void 0, '\u7528\u6237ID'), (0, _jsx3.default)('th', {}, void 0, '\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u521B\u5EFA\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u9080\u8BF7\u4EBA\u5956\u54C1'), (0, _jsx3.default)('th', {}, void 0, '\u9644\u52A0\u4FE1\u606F')));
  
  var Feedback = function (_Component) {
    (0, _inherits3.default)(Feedback, _Component);
  
    function Feedback(props) {
      (0, _classCallCheck3.default)(this, Feedback);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Feedback.__proto__ || (0, _getPrototypeOf2.default)(Feedback)).call(this, props));
  
      _this.fresh = _this.fresh.bind(_this);
      _this.search = _this.search.bind(_this);
      _this.reset = _this.reset.bind(_this);
      _this.state = {
        errorMsg: '',
        searchObj: {}
      };
      return _this;
    }
  
    (0, _createClass3.default)(Feedback, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh(this.props.page);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.fresh(nextProps.page);
        }
      }
    }, {
      key: 'fresh',
      value: function fresh(page, searchObj) {
        var queryObj = searchObj || this.state.searchObj;
        queryObj.page = page;
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACTIVITY_JOINS_LIST,
          queryObj: queryObj,
          key: page
        }));
      }
    }, {
      key: 'search',
      value: function search(e) {
        e.preventDefault();
        var formData = new FormData(e.target);
        var searchObj = {};
        var userId = formData.get('user_id');
        var activityId = formData.get('activity_id');
        var status = formData.get('status');
        if (userId) {
          searchObj['data[filter][user_id]'] = userId;
        }
        if (activityId) {
          searchObj['data[filter][activity_id]'] = activityId;
        }
        if (status) {
          searchObj['data[filter][status]'] = status;
        }
        var location = _history2.default.getCurrentLocation();
        _history2.default.push((0, _extends3.default)({}, location, { query: (0, _assign2.default)({}, location.query, { page: 1 }) }));
        this.setState({
          searchObj: searchObj
        });
        this.fresh(this.props.page, searchObj);
      }
    }, {
      key: 'reset',
      value: function reset() {
        this.setState({
          searchObj: {}
        });
        this.fresh(this.props.page, {});
      }
    }, {
      key: 'render',
      value: function render() {
        var join = this.props.activityJoinList[this.props.page] || {};
        var items = join.data || [];
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('form', {
          className: 'form-inline m-b-1',
          onSubmit: this.search,
          onReset: this.reset
        }, void 0, _ref, '\xA0', _ref2, '\xA0', _ref3, '\xA0', _ref4, _ref5), (0, _jsx3.default)(_tools.Card, {
          title: '\u6D3B\u52A8\u53C2\u4E0E\u8868'
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, _ref6, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.activity_id), (0, _jsx3.default)('td', {}, void 0, item.user_id), (0, _jsx3.default)('td', {}, void 0, item.status === 1 && '频次验证不通过', item.status === 2 && '规则不通过', item.status === 3 && '成功'), (0, _jsx3.default)('td', {}, void 0, item.created_at), (0, _jsx3.default)('td', {}, void 0, (0, _stringify2.default)(JSON.parse(item.invite_remark || '{}'))), (0, _jsx3.default)('td', {}, void 0, (0, _stringify2.default)(JSON.parse(item.remark || '{}'))));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: join.current_page,
          lastPage: join.last_page
        }));
      }
    }]);
    return Feedback;
  }(_react.Component);
  
  Feedback.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var activityJoinList = omg[_constants.ACTIVITY_JOINS_LIST] || {};
    return {
      activityJoinList: activityJoinList
    };
  })(Feedback);

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _AwardList = __webpack_require__(184);
  
  var _AwardList2 = _interopRequireDefault(_AwardList);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/AwardList',
    children: [{
      path: '/',
      action: function action(context) {
        return (0, _jsx3.default)(_AwardList2.default, {
          page: +context.query.page || 1
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          context = _ref.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.setTitle('运营后台 | 奖品发放记录');
                _context.next = 3;
                return next();
  
              case 3:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _stringify = __webpack_require__(15);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _extends2 = __webpack_require__(66);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _omg2 = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('option', {
    value: ''
  }, void 0, '\u5956\u54C1\u7C7B\u578B');
  
  var _ref2 = (0, _jsx3.default)('div', {
    className: 'form-group'
  }, void 0, (0, _jsx3.default)('select', {
    name: 'status',
    className: 'form-control'
  }, void 0, (0, _jsx3.default)('option', {
    value: ''
  }, void 0, '\u53D1\u9001\u72B6\u6001'), (0, _jsx3.default)('option', {
    value: '0'
  }, void 0, '\u5931\u8D25'), (0, _jsx3.default)('option', {
    value: '1'
  }, void 0, '\u6210\u529F'), (0, _jsx3.default)('option', {
    value: '2'
  }, void 0, '\u8865\u53D1\u6210\u529F')));
  
  var _ref3 = (0, _jsx3.default)('div', {
    className: 'form-group'
  }, void 0, (0, _jsx3.default)('select', {
    name: 'mail_status',
    className: 'form-control'
  }, void 0, (0, _jsx3.default)('option', {
    value: ''
  }, void 0, '\u7AD9\u5185\u4FE1\u72B6\u6001'), (0, _jsx3.default)('option', {
    value: '0'
  }, void 0, '\u65E0\u7AD9\u5185\u4FE1'), (0, _jsx3.default)('option', {
    value: '1'
  }, void 0, '\u5931\u8D25'), (0, _jsx3.default)('option', {
    value: '2'
  }, void 0, '\u6210\u529F')));
  
  var _ref4 = (0, _jsx3.default)('div', {
    className: 'form-group'
  }, void 0, (0, _jsx3.default)('select', {
    name: 'message_status',
    className: 'form-control'
  }, void 0, (0, _jsx3.default)('option', {
    value: ''
  }, void 0, '\u77ED\u4FE1\u72B6\u6001'), (0, _jsx3.default)('option', {
    value: '0'
  }, void 0, '\u65E0\u77ED\u4FE1'), (0, _jsx3.default)('option', {
    value: '1'
  }, void 0, '\u5931\u8D25'), (0, _jsx3.default)('option', {
    value: '2'
  }, void 0, '\u6210\u529F')));
  
  var _ref5 = (0, _jsx3.default)('button', {
    type: 'submit',
    className: 'btn btn-primary'
  }, void 0, '\u67E5\u8BE2');
  
  var _ref6 = (0, _jsx3.default)('input', {
    type: 'reset',
    className: 'btn btn-info',
    value: '\u91CD\u7F6E'
  });
  
  var _ref7 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'ID'), (0, _jsx3.default)('th', {}, void 0, '\u6D3B\u52A8ID'), (0, _jsx3.default)('th', {}, void 0, '\u7528\u6237ID'), (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1\u7C7B\u578B'), (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1ID'), (0, _jsx3.default)('th', {}, void 0, '\u7AD9\u5185\u4FE1\u53D1\u9001\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u77ED\u4FE1\u53D1\u9001\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1\u53D1\u9001\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u521B\u5EFA\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u5907\u6CE8')));
  
  var AwardList = function (_Component) {
    (0, _inherits3.default)(AwardList, _Component);
  
    function AwardList(props) {
      (0, _classCallCheck3.default)(this, AwardList);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (AwardList.__proto__ || (0, _getPrototypeOf2.default)(AwardList)).call(this, props));
  
      _this.fresh = _this.fresh.bind(_this);
      _this.search = _this.search.bind(_this);
      _this.reset = _this.reset.bind(_this);
      _this.awardReissue = _this.awardReissue.bind(_this);
      _this.state = {
        errorMsg: '',
        searchObj: {}
      };
      return _this;
    }
  
    (0, _createClass3.default)(AwardList, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh(this.props.page);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.fresh(nextProps.page);
        }
      }
    }, {
      key: 'awardReissue',
      value: function awardReissue() {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.AWARD_REISSUE,
          method: 'POST'
        })).then(function () {
          alert('奖品正在补发,请稍等。。。');
        });
      }
    }, {
      key: 'fresh',
      value: function fresh(page, searchObj) {
        var queryObj = searchObj || this.state.searchObj;
        queryObj.page = page;
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ACTIVITY_REWARD_LIST,
          queryObj: queryObj,
          key: page
        }));
      }
    }, {
      key: 'search',
      value: function search(e) {
        e.preventDefault();
        var formData = new FormData(e.target);
        var searchObj = {};
  
        var userId = formData.get('user_id');
        var activityId = formData.get('activity_id');
        var awardType = formData.get('award_type');
        var awardId = formData.get('award_id');
        var status = formData.get('status');
        var mailStatus = formData.get('mail_status');
        var messageStatus = formData.get('message_status');
        if (userId) {
          searchObj['data[filter][user_id]'] = userId;
        }
        if (activityId) {
          searchObj['data[filter][activity_id]'] = activityId;
        }
        if (awardType) {
          searchObj['data[filter][award_type]'] = awardType;
        }
        if (awardId) {
          searchObj['data[filter][award_id]'] = awardId;
        }
        if (status) {
          searchObj['data[filter][status]'] = status;
        }
        if (mailStatus) {
          searchObj['data[filter][mail_status]'] = mailStatus;
        }
        if (messageStatus) {
          searchObj['data[filter][message_status]'] = messageStatus;
        }
        var location = _history2.default.getCurrentLocation();
        _history2.default.push((0, _extends3.default)({}, location, { query: (0, _assign2.default)({}, location.query, { page: 1 }) }));
        this.setState({
          searchObj: searchObj
        });
        this.fresh(this.props.page, searchObj);
      }
    }, {
      key: 'reset',
      value: function reset() {
        this.setState({
          searchObj: {}
        });
        this.fresh(this.props.page, {});
      }
    }, {
      key: 'render',
      value: function render() {
        var award = this.props.awardList[this.props.page] || {};
        var items = award.data || [];
        var btn = [(0, _jsx3.default)('button', {
          type: 'button',
          className: 'btn btn-sm btn-success pull-right',
          'data-toggle': 'modal',
          'data-target': '#channel-add-modal',
          onClick: this.awardReissue
        }, void 0, '\u8865\u53D1\u5956\u54C1'), (0, _jsx3.default)('div', {
          className: 'pull-right row',
          hidden: true
        }, void 0, _react2.default.createElement(
          'form',
          { ref: 'searchForm' },
          (0, _jsx3.default)('div', {
            className: 'pull-left'
          }, void 0, (0, _jsx3.default)(_tools.Input, {
            labelName: 'userId',
            onChange: this.searchChange
          })),
          (0, _jsx3.default)('div', {
            className: 'pull-left'
          }, void 0, (0, _jsx3.default)(_tools.Input, {
            labelName: '\u5956\u54C1\u53D1\u9001\u72B6\u6001',
            onChange: this.searchChange
          }))
        ))];
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('form', {
          className: 'form-inline m-b-1',
          onSubmit: this.search,
          onReset: this.reset
        }, void 0, (0, _jsx3.default)('div', {
          className: 'form-group'
        }, void 0, (0, _jsx3.default)('input', {
          type: 'number',
          style: { width: '100px' },
          name: 'user_id',
          className: 'form-control',
          placeholder: '\u7528\u6237Id'
        })), '\xA0', (0, _jsx3.default)('div', {
          className: 'form-group'
        }, void 0, (0, _jsx3.default)('input', {
          type: 'number',
          style: { width: '100px' },
          name: 'activity_id',
          className: 'form-control',
          placeholder: '\u6D3B\u52A8Id'
        })), '\xA0', (0, _jsx3.default)('div', {
          className: 'form-group'
        }, void 0, (0, _jsx3.default)('select', {
          name: 'award_type',
          className: 'form-control'
        }, void 0, _ref, (0, _keys2.default)((0, _omg2.getConfig)('awardTypes')).map(function (key) {
          return (0, _jsx3.default)('option', {
            value: key
          }, void 0, (0, _omg2.getConfig)('awardTypes', key));
        }))), '\xA0', (0, _jsx3.default)('div', {
          className: 'form-group'
        }, void 0, (0, _jsx3.default)('input', {
          type: 'number',
          style: { width: '100px' },
          name: 'award_id',
          className: 'form-control',
          placeholder: '\u5956\u54C1Id'
        })), '\xA0', _ref2, '\xA0', _ref3, '\xA0', _ref4, '\xA0', _ref5, '\xA0', _ref6), (0, _jsx3.default)(_tools.Card, {
          title: '\u5956\u54C1\u53D1\u653E\u8BB0\u5F55(' + award.total + ')',
          btn: btn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table m-b-0 table-bordered'
        }, void 0, _ref7, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.activity_id), (0, _jsx3.default)('td', {}, void 0, item.user_id), (0, _jsx3.default)('td', {}, void 0, item.award_type), (0, _jsx3.default)('td', {}, void 0, item.award_id), (0, _jsx3.default)('td', {}, void 0, item.mail_status), (0, _jsx3.default)('td', {}, void 0, item.message_status), (0, _jsx3.default)('td', {}, void 0, item.status), (0, _jsx3.default)('td', {}, void 0, item.created_at), (0, _jsx3.default)('td', {}, void 0, (0, _stringify2.default)(JSON.parse(item.remark || '{}'))));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: award.current_page,
          lastPage: award.last_page
        }));
      }
    }]);
    return AwardList;
  }(_react.Component);
  
  AwardList.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var awardList = omg[_constants.ACTIVITY_REWARD_LIST] || {};
    return {
      awardList: awardList
    };
  })(AwardList);

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Admin = __webpack_require__(186);
  
  var _Admin2 = _interopRequireDefault(_Admin);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/Admin',
    children: [{
      path: '/',
      action: function action(context) {
        return (0, _jsx3.default)(_Admin2.default, {
          page: +context.query.page || 1
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          context = _ref.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.setTitle('运营后台 | 权限管理');
                _context.next = 3;
                return next();
  
              case 3:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Admin = function (_Component) {
    (0, _inherits3.default)(Admin, _Component);
  
    function Admin(props) {
      (0, _classCallCheck3.default)(this, Admin);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Admin.__proto__ || (0, _getPrototypeOf2.default)(Admin)).call(this, props));
  
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: '',
        dataTable: {
          title: "用户组",
          listType: _constants.ADMIN_LIST,
          updateType: _constants.ADMIN_UPDATE,
          addType: _constants.ADMIN_ADD,
          deleteType: _constants.ADMIN_DEL,
          order: {
            column: 0,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          idColumn: 0,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'name',
            cname: '姓名',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'mobile',
            cname: '手机号',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'privilege_id',
            cname: '权限组ID',
            type: 'text',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'last_login',
            cname: '上次登录',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'updated_at',
            cname: '更新时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(Admin, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return Admin;
  }(_react.Component);
  
  Admin.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function () {
    return {};
  })(Admin);

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Idiom = __webpack_require__(188);
  
  var _Idiom2 = _interopRequireDefault(_Idiom);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/idiom',
  
    action: function action(context) {
      return (0, _jsx3.default)(_Idiom2.default, {
        page: +context.query.page || 1
      });
    }
  };

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _defineProperty2 = __webpack_require__(127);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  var _AddModal = __webpack_require__(189);
  
  var _AddModal2 = _interopRequireDefault(_AddModal);
  
  var _omg2 = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('i', {
    className: 'fa fa-plus'
  }, void 0, '\u6210\u8BED');
  
  var _ref2 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'id'), (0, _jsx3.default)('th', {}, void 0, '\u6807\u9898'), (0, _jsx3.default)('th', {}, void 0, '\u5185\u5BB9'), (0, _jsx3.default)('th', {}, void 0, '\u4F18\u5148\u7EA7'), (0, _jsx3.default)('th', {}, void 0, '\u5F00\u59CB\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u7ED3\u675F\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var Idiom = function (_Component) {
    (0, _inherits3.default)(Idiom, _Component);
  
    function Idiom(props) {
      (0, _classCallCheck3.default)(this, Idiom);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Idiom.__proto__ || (0, _getPrototypeOf2.default)(Idiom)).call(this, props));
  
      _this.handleChange = _this.handleChange.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      _this.list = _this.list.bind(_this);
      _this.del = _this.del.bind(_this);
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.showUpdateModal = _this.showUpdateModal.bind(_this);
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(Idiom, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.list(nextProps.page);
        }
      }
    }, {
      key: 'handleChange',
      value: function handleChange(e) {
        var target = e.target;
        this.setState((0, _defineProperty3.default)({
          errorMsg: ''
        }, target.name, target.value));
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.props.page);
      }
    }, {
      key: 'list',
      value: function list(page) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.IDIOM_LIST,
          queryObj: { page: page },
          key: page
        }));
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.IDIOM_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.fresh();
            _this2.props.dispatch((0, _modal.hideModal)(true));
          } else {
            _this2.setState({
              addErrorMsg: json.data.error_msg
            });
            _this2.showAddModal();
          }
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this3 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.IDIOM_PUT,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this3.props.dispatch((0, _modal.hideModal)(true));
            _this3.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          submit: this.add,
          errorMsg: this.state.addErrorMsg
        })));
      }
    }, {
      key: 'showUpdateModal',
      value: function showUpdateModal(e) {
        var index = e.target.dataset.index;
        console.dir(index);
        var item = this.items[index];
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          update: true,
          item: item,
          submit: this.update,
          errorMsg: this.state.addErrorMsg
        })));
      }
    }, {
      key: 'del',
      value: function del(e) {
        var _this4 = this;
  
        if (!confirm('确认删除吗?')) {
          return false;
        }
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.IDIOM_DEL,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this4.fresh();
          } else {
            _this4.setState({ errorMsg: res.data.error_msg });
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this5 = this;
  
        var itemObj = this.props.itemList[this.props.page] || {};
        var items = itemObj.data || [];
        this.items = items;
        var addBtn = (0, _jsx3.default)('button', {
          onClick: this.showAddModal,
          className: 'btn btn-sm btn-info pull-right'
        }, void 0, _ref);
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Card, {
          title: '\u6210\u8BED\u5217\u8868',
          btn: addBtn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table table-bordered m-b-0 table-hover'
        }, void 0, _ref2, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.title), (0, _jsx3.default)('td', {}, void 0, item.contents), (0, _jsx3.default)('td', {}, void 0, item.priority), (0, _jsx3.default)('td', {}, void 0, item.start_at), (0, _jsx3.default)('td', {}, void 0, item.end_at), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            className: 'btn btn-info-outline btn-sm',
            'data-id': item.id,
            'data-index': index,
            onClick: _this5.showUpdateModal
          }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
            className: 'btn btn-danger-outline btn-sm',
            'data-id': item.id,
            onClick: _this5.del
          }, void 0, '\u5220\u9664')));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: itemObj.current_page,
          lastPage: itemObj.last_page
        }));
      }
    }]);
    return Idiom;
  }(_react.Component);
  
  Idiom.defaultProps = {
    itemList: {}
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var itemList = omg[_constants.IDIOM_LIST] || {};
    return {
      itemList: itemList
    };
  })(Idiom);

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {});
  
  var AddModal = function (_Component) {
    (0, _inherits3.default)(AddModal, _Component);
  
    function AddModal(props) {
      (0, _classCallCheck3.default)(this, AddModal);
      return (0, _possibleConstructorReturn3.default)(this, (AddModal.__proto__ || (0, _getPrototypeOf2.default)(AddModal)).call(this, props));
    }
  
    (0, _createClass3.default)(AddModal, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_tools.Modal, {
          title: this.props.update ? '编辑成语' : '添加成语'
        }, void 0, (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'id',
          defaultValue: this.props.item.id || ''
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u6807\u9898',
          name: 'title',
          defaultValue: this.props.item.title || ''
        }), (0, _jsx3.default)(_tools.Textarea, {
          labelName: '\u5185\u5BB9',
          name: 'contents',
          defaultValue: this.props.item.contents
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u4F18\u5148\u7EA7',
          type: 'number',
          name: 'priority',
          defaultValue: this.props.item.priority || ''
        }), (0, _jsx3.default)(_tools.DateTimeInput, {
          required: true,
          labelName: '\u5F00\u59CB\u65F6\u95F4',
          name: 'start_at',
          defaultValue: this.props.item.start_at
        }), (0, _jsx3.default)(_tools.DateTimeInput, {
          required: true,
          labelName: '\u7ED3\u675F\u65F6\u95F4',
          name: 'end_at',
          defaultValue: this.props.item.end_at
        }), _ref));
      }
    }]);
    return AddModal;
  }(_react.Component);
  
  AddModal.defaultProps = {
    item: {}
  };
  
  exports.default = (0, _reactRedux.connect)()(AddModal);

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Integral = __webpack_require__(191);
  
  var _Integral2 = _interopRequireDefault(_Integral);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/Integral',
  
    action: function action(context) {
      return (0, _jsx3.default)(_Integral2.default, {
        page: +context.query.page || 1
      });
    }
  };

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _defineProperty2 = __webpack_require__(127);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  var _AddModal = __webpack_require__(192);
  
  var _AddModal2 = _interopRequireDefault(_AddModal);
  
  var _omg2 = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('i', {
    className: 'fa fa-plus'
  }, void 0, '\u5546\u54C1');
  
  var _ref2 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'id'), (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, '\u79EF\u5206'), (0, _jsx3.default)('th', {}, void 0, '\u5355\u7528\u6237\u5151\u6362\u4E0A\u9650'), (0, _jsx3.default)('th', {}, void 0, '\u914D\u56FE'), (0, _jsx3.default)('th', {}, void 0, '\u914D\u56FE(\u5C0F)'), (0, _jsx3.default)('th', {}, void 0, '\u603B\u91CF'), (0, _jsx3.default)('th', {}, void 0, '\u5F00\u59CB\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u7ED3\u675F\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var Integral = function (_Component) {
    (0, _inherits3.default)(Integral, _Component);
  
    function Integral(props) {
      (0, _classCallCheck3.default)(this, Integral);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Integral.__proto__ || (0, _getPrototypeOf2.default)(Integral)).call(this, props));
  
      _this.handleChange = _this.handleChange.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      _this.list = _this.list.bind(_this);
      _this.del = _this.del.bind(_this);
      _this.up = _this.up.bind(_this);
      _this.down = _this.down.bind(_this);
      _this.enable = _this.enable.bind(_this);
      _this.disable = _this.disable.bind(_this);
  
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.showUpdateModal = _this.showUpdateModal.bind(_this);
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(Integral, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.list(nextProps.page);
        }
      }
    }, {
      key: 'handleChange',
      value: function handleChange(e) {
        var target = e.target;
        this.setState((0, _defineProperty3.default)({
          errorMsg: ''
        }, target.name, target.value));
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.props.page);
      }
    }, {
      key: 'list',
      value: function list(page) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.INTEGRAL_LIST,
          queryObj: { page: page },
          key: page
        }));
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.INTEGRAL_OPERATION,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.fresh();
            _this2.props.dispatch((0, _modal.hideModal)(true));
          } else {
            _this2.setState({
              addErrorMsg: json.data.error_msg
            });
            _this2.showAddModal();
          }
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this3 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.INTEGRAL_OPERATION,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this3.props.dispatch((0, _modal.hideModal)(true));
            _this3.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          submit: this.add,
          errorMsg: this.state.addErrorMsg
        })));
      }
    }, {
      key: 'showUpdateModal',
      value: function showUpdateModal(e) {
        var index = e.target.dataset.index;
        var item = this.items[index];
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          update: true,
          item: item,
          submit: this.update,
          errorMsg: this.state.addErrorMsg
        })));
      }
    }, {
      key: 'up',
      value: function up(e) {
        var _this4 = this;
  
        var id = e.target.dataset.id;
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.INTEGRAL_UP,
          method: 'GET',
          suffix: '/' + id
        })).then(function () {
          _this4.fresh();
        });
      }
    }, {
      key: 'down',
      value: function down(e) {
        var _this5 = this;
  
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.INTEGRAL_DOWN,
          method: 'GET',
          suffix: '/' + id
        })).then(function () {
          _this5.fresh();
        });
      }
    }, {
      key: 'enable',
      value: function enable(e) {
        var _this6 = this;
  
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.INTEGRAL_ENABLE,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this6.fresh();
        });
      }
    }, {
      key: 'disable',
      value: function disable(e) {
        var _this7 = this;
  
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.INTEGRAL_DISABLE,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this7.fresh();
        });
      }
    }, {
      key: 'del',
      value: function del(e) {
        var _this8 = this;
  
        if (!confirm('确认删除吗?')) {
          return;
        }
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.INTEGRAL_DEL,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this8.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this9 = this;
  
        var itemObj = this.props.itemList[this.props.page] || {};
        var items = itemObj.data || [];
        this.items = items;
        var addBtn = (0, _jsx3.default)('button', {
          onClick: this.showAddModal,
          className: 'btn btn-sm btn-info pull-right'
        }, void 0, _ref);
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Card, {
          title: '\u79EF\u5206\u5546\u57CE',
          btn: addBtn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table table-bordered m-b-0 table-hover'
        }, void 0, _ref2, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, item.integral), (0, _jsx3.default)('td', {}, void 0, item.user_quantity || '不限'), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.ImgBox, {
            src: item.photo
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.ImgBox, {
            src: item.photo_min
          })), (0, _jsx3.default)('td', {}, void 0, item.send_quantity, '/', item.total_quantity), (0, _jsx3.default)('td', {}, void 0, item.start_time), (0, _jsx3.default)('td', {}, void 0, item.end_time), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Status, {
            status: +item.status
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: +item.status === 1,
            className: 'btn btn-sm btn-success-outline',
            'data-id': item.id,
            onClick: _this9.enable
          }, void 0, '\u4E0A\u7EBF'), (0, _jsx3.default)('button', {
            hidden: +item.status === 0,
            className: 'btn btn-sm btn-warning-outline',
            'data-id': item.id,
            onClick: _this9.disable
          }, void 0, '\u4E0B\u7EBF'), (0, _jsx3.default)('button', {
            hidden: !item.status,
            className: 'btn btn-sm btn-info-outline',
            'data-id': item.id,
            onClick: _this9.up
          }, void 0, '\u4E0A\u79FB'), (0, _jsx3.default)('button', {
            hidden: !item.status,
            className: 'btn btn-sm btn-info-outline',
            'data-id': item.id,
            onClick: _this9.down
          }, void 0, '\u4E0B\u79FB'), (0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            'data-index': index,
            onClick: _this9.showUpdateModal
          }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
            className: 'btn btn-danger-outline btn-sm',
            'data-id': item.id,
            onClick: _this9.del
          }, void 0, '\u5220\u9664')));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: itemObj.current_page,
          lastPage: itemObj.last_page
        }));
      }
    }]);
    return Integral;
  }(_react.Component);
  
  Integral.defaultProps = {
    itemList: {}
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var itemList = omg[_constants.INTEGRAL_LIST] || {};
    return {
      itemList: itemList
    };
  })(Integral);

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {});
  
  var AddModal = function (_Component) {
    (0, _inherits3.default)(AddModal, _Component);
  
    function AddModal(props) {
      (0, _classCallCheck3.default)(this, AddModal);
      return (0, _possibleConstructorReturn3.default)(this, (AddModal.__proto__ || (0, _getPrototypeOf2.default)(AddModal)).call(this, props));
    }
  
    (0, _createClass3.default)(AddModal, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_tools.Modal, {
          title: this.props.update ? '编辑商品' : '添加商品'
        }, void 0, (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'id',
          defaultValue: this.props.item.id || ''
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'groups',
          defaultValue: this.props.item.groups || 'default'
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u79EF\u5206\u503C',
          name: 'integral',
          required: true,
          defaultValue: this.props.item.integral || ''
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u5546\u54C1\u6570\u91CF',
          name: 'total_quantity',
          type: 'number',
          required: true,
          defaultValue: this.props.item.total_quantity || ''
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u5355\u7528\u6237\u5151\u6362\u4E0A\u9650',
          name: 'user_quantity',
          type: 'number',
          required: true,
          defaultValue: this.props.item.user_quantity || 0
        }), (0, _jsx3.default)(_tools.Select, {
          labelName: '\u5956\u54C1\u7C7B\u578B',
          name: 'award_type',
          options: (0, _omg.getConfig)('awardTypes'),
          defaultValue: this.props.item.award_type || 1
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u5956\u54C1ID',
          name: 'award_id',
          type: 'number',
          required: true,
          defaultValue: this.props.item.award_id || ''
        }), (0, _jsx3.default)(_tools.DateTimeInput, {
          required: true,
          limit: true,
          labelName: '\u5F00\u59CB\u65F6\u95F4',
          name: 'start_time',
          defaultValue: this.props.item.start_time
        }), (0, _jsx3.default)(_tools.DateTimeInput, {
          required: true,
          limit: true,
          labelName: '\u7ED3\u675F\u65F6\u95F4',
          name: 'end_time',
          defaultValue: this.props.item.end_time
        }), (0, _jsx3.default)(_tools.AttachmentInput, {
          labelName: '\u914D\u56FE',
          name: 'photo',
          position: 'banner_' + this.props.item.photo,
          defaultValue: this.props.item.photo
        }), (0, _jsx3.default)(_tools.AttachmentInput, {
          labelName: '\u914D\u56FE(\u5C0F)',
          name: 'photo_min',
          position: 'banner_' + this.props.item.photo,
          defaultValue: this.props.item.photo_min
        }), (0, _jsx3.default)(_tools.Textarea, {
          labelName: '\u5546\u54C1\u8BF4\u660E',
          name: 'desc',
          defaultValue: this.props.item.desc || ''
        }), _ref));
      }
    }]);
    return AddModal;
  }(_react.Component);
  
  AddModal.defaultProps = {
    item: {},
    update: false
  };
  
  exports.default = (0, _reactRedux.connect)()(AddModal);

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _OneYuan = __webpack_require__(194);
  
  var _OneYuan2 = _interopRequireDefault(_OneYuan);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/OneYuan',
  
    action: function action(context) {
      return (0, _jsx3.default)(_OneYuan2.default, {
        page: +context.query.page || 1
      });
    }
  };

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _defineProperty2 = __webpack_require__(127);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  var _AddModal = __webpack_require__(195);
  
  var _AddModal2 = _interopRequireDefault(_AddModal);
  
  var _OpenModal = __webpack_require__(196);
  
  var _OpenModal2 = _interopRequireDefault(_OpenModal);
  
  var _AddChanceModal = __webpack_require__(197);
  
  var _AddChanceModal2 = _interopRequireDefault(_AddChanceModal);
  
  var _omg2 = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('i', {
    className: 'fa fa-plus'
  }, void 0, '\u5546\u54C1');
  
  var _ref2 = (0, _jsx3.default)('i', {
    className: 'fa fa-plus'
  }, void 0, '\u62BD\u5956\u6B21\u6570');
  
  var _ref3 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'id'), (0, _jsx3.default)('th', {}, void 0, '\u5546\u54C1'), (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1\u914D\u56FE'), (0, _jsx3.default)('th', {}, void 0, '\u603B\u91CF'), (0, _jsx3.default)('th', {}, void 0, '\u5DF2\u8D2D\u4E70'), (0, _jsx3.default)('th', {}, void 0, '\u65F6\u65F6\u5F69'), (0, _jsx3.default)('th', {}, void 0, '\u4E2D\u5956\u7801'), (0, _jsx3.default)('th', {}, void 0, '\u4E2D\u5956\u7528\u6237'), (0, _jsx3.default)('th', {}, void 0, '\u5F00\u59CB\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u7ED3\u675F\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var OneYuan = function (_Component) {
    (0, _inherits3.default)(OneYuan, _Component);
  
    function OneYuan(props) {
      (0, _classCallCheck3.default)(this, OneYuan);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (OneYuan.__proto__ || (0, _getPrototypeOf2.default)(OneYuan)).call(this, props));
  
      _this.handleChange = _this.handleChange.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      _this.list = _this.list.bind(_this);
      _this.del = _this.del.bind(_this);
      _this.enable = _this.enable.bind(_this);
      _this.disable = _this.disable.bind(_this);
      _this.open = _this.open.bind(_this);
      _this.autoOpen = _this.autoOpen.bind(_this);
      _this.addChance = _this.addChance.bind(_this);
      _this.showOpenModal = _this.showOpenModal.bind(_this);
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.showAddChanceModal = _this.showAddChanceModal.bind(_this);
      _this.showUpdateModal = _this.showUpdateModal.bind(_this);
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(OneYuan, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.list(nextProps.page);
        }
      }
    }, {
      key: 'handleChange',
      value: function handleChange(e) {
        var target = e.target;
        this.setState((0, _defineProperty3.default)({
          errorMsg: ''
        }, target.name, target.value));
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.props.page);
      }
    }, {
      key: 'list',
      value: function list(page) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ONEYUAN_LIST,
          queryObj: { page: page },
          key: page
        }));
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ONEYUAN_OPERATION,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.fresh();
            _this2.props.dispatch((0, _modal.hideModal)(true));
          } else {
            _this2.setState({
              addErrorMsg: json.data.error_msg
            });
            _this2.showAddModal();
          }
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this3 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ONEYUAN_OPERATION,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this3.props.dispatch((0, _modal.hideModal)(true));
            _this3.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'showAddChanceModal',
      value: function showAddChanceModal() {
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddChanceModal2.default, {
          submit: this.addChance,
          errorMsg: this.state.addErrorMsg
        })));
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          submit: this.add,
          errorMsg: this.state.addErrorMsg
        })));
      }
    }, {
      key: 'showOpenModal',
      value: function showOpenModal(e) {
        var id = e.target.dataset.id;
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_OpenModal2.default, {
          id: id,
          submit: this.open,
          errorMsg: this.state.addErrorMsg
        })));
      }
    }, {
      key: 'showUpdateModal',
      value: function showUpdateModal(e) {
        var index = e.target.dataset.index;
        var item = this.items[index];
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          update: true,
          item: item,
          submit: this.update,
          errorMsg: this.state.addErrorMsg
        })));
      }
    }, {
      key: 'addChance',
      value: function addChance(e) {
        var _this4 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ONEYUAN_ADD_CHANCE,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          _this4.props.dispatch((0, _modal.hideModal)(true));
          _this4.fresh();
          alert(json.data.error_msg);
        });
      }
    }, {
      key: 'open',
      value: function open(e) {
        var _this5 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ONEYUAN_OPEN,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          _this5.props.dispatch((0, _modal.hideModal)(true));
          _this5.fresh();
          alert(json.data.error_msg);
        });
      }
    }, {
      key: 'autoOpen',
      value: function autoOpen(e) {
        var _this6 = this;
  
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ONEYUAN_AUTO_OPEN,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          _this6.props.dispatch((0, _modal.hideModal)(true));
          _this6.fresh();
          alert(json.data.error_msg);
        });
      }
    }, {
      key: 'enable',
      value: function enable(e) {
        var _this7 = this;
  
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ONEYUAN_ENABLE,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this7.fresh();
        });
      }
    }, {
      key: 'disable',
      value: function disable(e) {
        var _this8 = this;
  
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ONEYUAN_DISABLE,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this8.fresh();
        });
      }
    }, {
      key: 'del',
      value: function del(e) {
        var _this9 = this;
  
        if (!confirm('确认删除吗?')) {
          return;
        }
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.ONEYUAN_DEL,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this9.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this10 = this;
  
        var itemObj = this.props.itemList[this.props.page] || {};
        var items = itemObj.data || [];
        this.items = items;
        var addBtn = [(0, _jsx3.default)('button', {
          onClick: this.showAddModal,
          className: 'btn btn-sm btn-info pull-right'
        }, void 0, _ref), (0, _jsx3.default)('button', {
          onClick: this.showAddChanceModal,
          className: 'btn btn-sm btn-info pull-right'
        }, void 0, _ref2)];
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Card, {
          title: '\u4E00\u5143\u593A\u5B9D',
          btn: addBtn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table table-bordered m-b-0 table-hover'
        }, void 0, _ref3, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.ImgBox, {
            src: item.photo
          })), (0, _jsx3.default)('td', {}, void 0, item.total_num), (0, _jsx3.default)('td', {}, void 0, item.buy_num), (0, _jsx3.default)('td', {}, void 0, item.code ? item.code : item.total_num === item.buy_num ? '' : '-', (0, _jsx3.default)('button', {
            hidden: item.code || item.total_num !== item.buy_num,
            className: 'btn btn-sm btn-success-outline',
            'data-id': item.id,
            onClick: _this10.autoOpen
          }, void 0, '\u81EA\u52A8\u5F00\u5956'), (0, _jsx3.default)('button', {
            hidden: item.code || item.total_num !== item.buy_num,
            className: 'btn btn-sm btn-success-outline',
            'data-id': item.id,
            onClick: _this10.showOpenModal
          }, void 0, '\u4EBA\u5DE5\u5F00\u5956')), (0, _jsx3.default)('td', {}, void 0, item.luck_code ? item.luck_code : '—'), (0, _jsx3.default)('td', {}, void 0, item.user_id ? item.user_id : '—'), (0, _jsx3.default)('td', {}, void 0, item.start_time), (0, _jsx3.default)('td', {}, void 0, item.end_time), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Status, {
            status: +item.status
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: +item.status === 1,
            className: 'btn btn-sm btn-success-outline',
            'data-id': item.id,
            onClick: _this10.enable
          }, void 0, '\u4E0A\u7EBF'), (0, _jsx3.default)('button', {
            hidden: +item.status === 0,
            className: 'btn btn-sm btn-warning-outline',
            'data-id': item.id,
            onClick: _this10.disable
          }, void 0, '\u4E0B\u7EBF'), (0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            'data-index': index,
            onClick: _this10.showUpdateModal
          }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
            className: 'btn btn-danger-outline btn-sm',
            'data-id': item.id,
            onClick: _this10.del
          }, void 0, '\u5220\u9664')));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: itemObj.current_page,
          lastPage: itemObj.last_page
        }));
      }
    }]);
    return OneYuan;
  }(_react.Component);
  
  OneYuan.defaultProps = {
    itemList: {}
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var itemList = omg[_constants.ONEYUAN_LIST] || {};
    return {
      itemList: itemList
    };
  })(OneYuan);

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {});
  
  var AddModal = function (_Component) {
    (0, _inherits3.default)(AddModal, _Component);
  
    function AddModal(props) {
      (0, _classCallCheck3.default)(this, AddModal);
      return (0, _possibleConstructorReturn3.default)(this, (AddModal.__proto__ || (0, _getPrototypeOf2.default)(AddModal)).call(this, props));
    }
  
    (0, _createClass3.default)(AddModal, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_tools.Modal, {
          title: this.props.update ? '编辑商品' : '添加商品'
        }, void 0, (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'id',
          defaultValue: this.props.item.id || ''
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u5546\u54C1\u540D',
          name: 'name',
          type: 'text',
          required: true,
          defaultValue: this.props.item.name || ''
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u5546\u54C1\u6570\u91CF',
          name: 'total_num',
          type: 'number',
          required: true,
          defaultValue: this.props.item.total_num || ''
        }), (0, _jsx3.default)(_tools.DateTimeInput, {
          required: true,
          labelName: '\u5F00\u59CB\u65F6\u95F4',
          name: 'start_time',
          defaultValue: this.props.item.start_time
        }), (0, _jsx3.default)(_tools.DateTimeInput, {
          required: true,
          labelName: '\u7ED3\u675F\u65F6\u95F4',
          name: 'end_time',
          defaultValue: this.props.item.end_time
        }), (0, _jsx3.default)(_tools.AttachmentInput, {
          labelName: '\u914D\u56FE',
          name: 'photo',
          position: 'banner_' + this.props.item.photo,
          defaultValue: this.props.item.photo
        }), (0, _jsx3.default)(_tools.Textarea, {
          labelName: '\u5546\u54C1\u8BF4\u660E',
          name: 'desc',
          defaultValue: this.props.item.desc || ''
        }), _ref));
      }
    }]);
    return AddModal;
  }(_react.Component);
  
  AddModal.defaultProps = {
    item: {},
    update: false
  };
  
  exports.default = (0, _reactRedux.connect)()(AddModal);

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    labelName: '\u65F6\u65F6\u5F69\u671F\u6570',
    placeholder: '11\u4F4D\u6570\u5B57\u4F8B:20161124059',
    name: 'expect',
    type: 'number',
    required: true
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    labelName: '\u65F6\u65F6\u5F69\u53F7\u7801',
    placeholder: '1-5\u4F4D\u6570\u5B57,\u65E0\u524D\u7F6E0',
    name: 'code',
    type: 'number',
    required: true
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var OpenModal = function (_Component) {
    (0, _inherits3.default)(OpenModal, _Component);
  
    function OpenModal(props) {
      (0, _classCallCheck3.default)(this, OpenModal);
      return (0, _possibleConstructorReturn3.default)(this, (OpenModal.__proto__ || (0, _getPrototypeOf2.default)(OpenModal)).call(this, props));
    }
  
    (0, _createClass3.default)(OpenModal, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u5F00\u5956'
        }, void 0, (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'id',
          defaultValue: this.props.id
        }), _ref, _ref2, _ref3));
      }
    }]);
    return OpenModal;
  }(_react.Component);
  
  OpenModal.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)()(OpenModal);

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Input, {
    labelName: '\u624B\u673A\u53F7',
    name: 'phone',
    type: 'number',
    required: true
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Input, {
    labelName: '\u62BD\u5956\u6B21\u6570',
    name: 'num',
    type: 'number',
    required: true
  });
  
  var _ref3 = (0, _jsx3.default)(_tools.Submit, {});
  
  var AddChanceModal = function (_Component) {
    (0, _inherits3.default)(AddChanceModal, _Component);
  
    function AddChanceModal(props) {
      (0, _classCallCheck3.default)(this, AddChanceModal);
      return (0, _possibleConstructorReturn3.default)(this, (AddChanceModal.__proto__ || (0, _getPrototypeOf2.default)(AddChanceModal)).call(this, props));
    }
  
    (0, _createClass3.default)(AddChanceModal, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u6DFB\u52A0\u62BD\u5956\u6B21\u6570'
        }, void 0, (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, _ref, _ref2, _ref3));
      }
    }]);
    return AddChanceModal;
  }(_react.Component);
  
  AddChanceModal.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)()(AddChanceModal);

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _HongBao = __webpack_require__(199);
  
  var _HongBao2 = _interopRequireDefault(_HongBao);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/HongBao',
  
    action: function action(context) {
      return (0, _jsx3.default)(_HongBao2.default, {
        page: +context.query.page || 1
      });
    }
  };

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _defineProperty2 = __webpack_require__(127);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  var _AddModal = __webpack_require__(200);
  
  var _AddModal2 = _interopRequireDefault(_AddModal);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('i', {
    className: 'fa fa-plus'
  }, void 0, '\u7EA2\u5305');
  
  var _ref2 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'id'), (0, _jsx3.default)('th', {}, void 0, '\u7528\u6237ID'), (0, _jsx3.default)('th', {}, void 0, '\u53D1\u9001\u8005'), (0, _jsx3.default)('th', {}, void 0, '\u6807\u8BC6'), (0, _jsx3.default)('th', {}, void 0, '\u5956\u54C1ID'), (0, _jsx3.default)('th', {}, void 0, '\u603B\u989D'), (0, _jsx3.default)('th', {}, void 0, '\u4E2A\u6570'), (0, _jsx3.default)('th', {}, void 0, '\u533A\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u5F00\u59CB\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u7ED3\u675F\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u795D\u798F\u8BED'), (0, _jsx3.default)('th', {}, void 0, '\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var HongBao = function (_Component) {
    (0, _inherits3.default)(HongBao, _Component);
  
    function HongBao(props) {
      (0, _classCallCheck3.default)(this, HongBao);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (HongBao.__proto__ || (0, _getPrototypeOf2.default)(HongBao)).call(this, props));
  
      _this.handleChange = _this.handleChange.bind(_this);
      _this.add = _this.add.bind(_this);
      _this.update = _this.update.bind(_this);
      _this.fresh = _this.fresh.bind(_this);
      _this.list = _this.list.bind(_this);
      _this.del = _this.del.bind(_this);
      _this.enable = _this.enable.bind(_this);
      _this.disable = _this.disable.bind(_this);
      _this.showAddModal = _this.showAddModal.bind(_this);
      _this.showUpdateModal = _this.showUpdateModal.bind(_this);
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(HongBao, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fresh();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
          this.list(nextProps.page);
        }
      }
    }, {
      key: 'handleChange',
      value: function handleChange(e) {
        var target = e.target;
        this.setState((0, _defineProperty3.default)({
          errorMsg: ''
        }, target.name, target.value));
      }
    }, {
      key: 'fresh',
      value: function fresh() {
        this.list(this.props.page);
      }
    }, {
      key: 'list',
      value: function list(page) {
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.HONGBAO_LIST,
          queryObj: { page: page },
          key: page
        }));
      }
    }, {
      key: 'add',
      value: function add(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.HONGBAO_OPERATION,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.fresh();
            _this2.props.dispatch((0, _modal.hideModal)(true));
          } else {
            _this2.setState({
              addErrorMsg: json.data.error_msg
            });
            _this2.showAddModal();
          }
        });
      }
    }, {
      key: 'update',
      value: function update(e) {
        var _this3 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.HONGBAO_OPERATION,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this3.props.dispatch((0, _modal.hideModal)(true));
            _this3.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'showAddModal',
      value: function showAddModal() {
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          submit: this.add,
          errorMsg: this.state.addErrorMsg
        })));
      }
    }, {
      key: 'showUpdateModal',
      value: function showUpdateModal(e) {
        var index = e.target.dataset.index;
        var item = this.items[index];
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_AddModal2.default, {
          update: true,
          item: item,
          submit: this.update,
          errorMsg: this.state.addErrorMsg
        })));
      }
    }, {
      key: 'enable',
      value: function enable(e) {
        var _this4 = this;
  
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.HONGBAO_ENABLE,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this4.fresh();
        });
      }
    }, {
      key: 'disable',
      value: function disable(e) {
        var _this5 = this;
  
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.HONGBAO_DISABLE,
          method: 'POST',
          formData: formData
        })).then(function () {
          _this5.fresh();
        });
      }
    }, {
      key: 'del',
      value: function del(e) {
        var _this6 = this;
  
        if (!confirm('确认删除吗?')) {
          return;
        }
        var id = e.target.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.HONGBAO_DEL,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this6.fresh();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this7 = this;
  
        var itemObj = this.props.itemList[this.props.page] || {};
        var items = itemObj.data || [];
        this.items = items;
        var addBtn = [(0, _jsx3.default)('button', {
          onClick: this.showAddModal,
          className: 'btn btn-sm btn-info pull-right'
        }, void 0, _ref)];
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Card, {
          title: '\u7EA2\u5305\u5206\u4EAB',
          btn: addBtn
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table table-bordered m-b-0 table-hover'
        }, void 0, _ref2, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
          return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.user_id ? item.user_id : '--'), (0, _jsx3.default)('td', {}, void 0, item.user_name ? item.user_name : '--'), (0, _jsx3.default)('td', {}, void 0, item.identify, (0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm clipboard',
            'data-clipboard-text': item.identify
          }, void 0, '\u590D\u5236')), (0, _jsx3.default)('td', {}, void 0, item.award_id), (0, _jsx3.default)('td', {}, void 0, item.use_money, '/', item.total_money), (0, _jsx3.default)('td', {}, void 0, item.receive_num, '/', item.total_num), (0, _jsx3.default)('td', {}, void 0, item.min, '-', item.max), (0, _jsx3.default)('td', {}, void 0, item.start_time), (0, _jsx3.default)('td', {}, void 0, item.end_time), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Popover, {
            title: '\u795D\u798F\u8BED',
            content: item.blessing || ''
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)(_tools.Status, {
            status: +item.status
          })), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
            hidden: +item.status === 1,
            className: 'btn btn-sm btn-success-outline',
            'data-id': item.id,
            onClick: _this7.enable
          }, void 0, '\u4E0A\u7EBF'), (0, _jsx3.default)('button', {
            hidden: +item.status === 0,
            className: 'btn btn-sm btn-warning-outline',
            'data-id': item.id,
            onClick: _this7.disable
          }, void 0, '\u4E0B\u7EBF'), (0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            'data-index': index,
            onClick: _this7.showUpdateModal
          }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
            className: 'btn btn-danger-outline btn-sm',
            'data-id': item.id,
            onClick: _this7.del
          }, void 0, '\u5220\u9664')));
        })))), (0, _jsx3.default)(_tools.Pagination, {
          currentPage: itemObj.current_page,
          lastPage: itemObj.last_page
        }));
      }
    }]);
    return HongBao;
  }(_react.Component);
  
  HongBao.defaultProps = {
    itemList: {}
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var itemList = omg[_constants.HONGBAO_LIST] || {};
    return {
      itemList: itemList
    };
  })(HongBao);

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('input', {
    type: 'hidden',
    name: 'award_type',
    value: '3'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Submit, {});
  
  var AddModal = function (_Component) {
    (0, _inherits3.default)(AddModal, _Component);
  
    function AddModal(props) {
      (0, _classCallCheck3.default)(this, AddModal);
      return (0, _possibleConstructorReturn3.default)(this, (AddModal.__proto__ || (0, _getPrototypeOf2.default)(AddModal)).call(this, props));
    }
  
    (0, _createClass3.default)(AddModal, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_tools.Modal, {
          title: this.props.update ? '编辑红包' : '添加红包'
        }, void 0, (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'id',
          defaultValue: this.props.item.id || ''
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u53D1\u9001\u8005\u540D\u79F0',
          name: 'user_name',
          type: 'text',
          required: true,
          defaultValue: this.props.item.user_name || ''
        }), _ref, (0, _jsx3.default)(_tools.Input, {
          labelName: '\u4F53\u9A8C\u91D1\u5956\u54C1ID',
          name: 'award_id',
          type: 'number',
          placeholder: '\u4F53\u9A8C\u91D1id,\u91D1\u989D\u4E3A0',
          required: true,
          defaultValue: this.props.item.award_id || ''
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u603B\u91D1\u989D',
          name: 'total_money',
          type: 'number',
          required: true,
          defaultValue: this.props.item.total_money || ''
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u603B\u6570\u91CF',
          name: 'total_num',
          type: 'number',
          required: true,
          defaultValue: this.props.item.total_num || ''
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u6700\u5C0F\u503C',
          name: 'min',
          type: 'number',
          required: true,
          defaultValue: this.props.item.min || 1
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u6700\u5927\u503C',
          name: 'max',
          type: 'number',
          required: true,
          defaultValue: this.props.item.max || ''
        }), (0, _jsx3.default)(_tools.DateTimeInput, {
          required: true,
          labelName: '\u5F00\u59CB\u65F6\u95F4',
          name: 'start_time',
          defaultValue: this.props.item.start_time
        }), (0, _jsx3.default)(_tools.DateTimeInput, {
          required: true,
          labelName: '\u7ED3\u675F\u65F6\u95F4',
          name: 'end_time',
          defaultValue: this.props.item.end_time
        }), (0, _jsx3.default)(_tools.Textarea, {
          labelName: '\u795D\u798F\u8BED',
          name: 'blessing',
          defaultValue: this.props.item.blessing || ''
        }), _ref2));
      }
    }]);
    return AddModal;
  }(_react.Component);
  
  AddModal.defaultProps = {
    item: {},
    update: false
  };
  
  exports.default = (0, _reactRedux.connect)()(AddModal);

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Privilege = __webpack_require__(202);
  
  var _Privilege2 = _interopRequireDefault(_Privilege);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Privilege2.default, {});
  
  exports.default = {
  
    path: '/privilege',
  
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Privilege = function (_Component) {
    (0, _inherits3.default)(Privilege, _Component);
  
    function Privilege(props) {
      (0, _classCallCheck3.default)(this, Privilege);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Privilege.__proto__ || (0, _getPrototypeOf2.default)(Privilege)).call(this, props));
  
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: '',
        dataTable: {
          title: '权限',
          listType: _constants.PRIVILEGE_LIST,
          updateType: _constants.PRIVILEGE_UPDATE,
          addType: _constants.PRIVILEGE_ADD,
          deleteType: _constants.PRIVILEGE_DEL,
          order: {
            column: 0,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          idColumn: 0,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'name',
            cname: '组名称',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'privilege',
            cname: '权限',
            type: 'textarea',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'updated_at',
            cname: '更新时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(Privilege, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return Privilege;
  }(_react.Component);
  
  Privilege.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function () {
    return {};
  })(Privilege);

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Thread = __webpack_require__(204);
  
  var _Thread2 = _interopRequireDefault(_Thread);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Thread2.default, {});
  
  exports.default = {
  
    path: '/thread',
  
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  var _UnVerifyModal = __webpack_require__(205);
  
  var _UnVerifyModal2 = _interopRequireDefault(_UnVerifyModal);
  
  var _ReplayModal = __webpack_require__(206);
  
  var _ReplayModal2 = _interopRequireDefault(_ReplayModal);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('hr', {});
  
  var Thread = function (_Component) {
    (0, _inherits3.default)(Thread, _Component);
  
    function Thread(props) {
      (0, _classCallCheck3.default)(this, Thread);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Thread.__proto__ || (0, _getPrototypeOf2.default)(Thread)).call(this, props));
  
      _this.typeChange = _this.typeChange.bind(_this);
      _this.verify = _this.verify.bind(_this);
      _this.toggleStatus = _this.toggleStatus.bind(_this);
      _this.getBtns = _this.getBtns.bind(_this);
      _this.getSections = _this.getSections.bind(_this);
      _this.fetchSections = _this.fetchSections.bind(_this);
      _this.getAdmins = _this.getAdmins.bind(_this);
      _this.fetchAdmins = _this.fetchAdmins.bind(_this);
      _this.unVerify = _this.unVerify.bind(_this);
      _this.restore = _this.restore.bind(_this);
      _this.showUnVerifyModal = _this.showUnVerifyModal.bind(_this);
      _this.showReplayModal = _this.showReplayModal.bind(_this);
      _this.replay = _this.replay.bind(_this);
      _this.verifyReplay = _this.verifyReplay.bind(_this);
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        admins: {},
        sections: {},
        addErrorMsg: '',
        dataTable: {
          title: '帖子管理',
          listType: _constants.BBS_THREAD_DT_LIST,
          updateType: _constants.BBS_THREAD_DT_UPDATE,
          addType: _constants.BBS_THREAD_DT_ADD,
          deleteType: _constants.BBS_THREAD_DT_DEL,
          timeStamp: new Date().getTime(),
          getBtns: _this.getBtns,
          forbiddenDefaultBtns: false,
          noDelete: true,
          onlyTrashed: false,
          identify: 0,
          withs: ['section', 'user'],
          order: {
            column: 0,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          customSearch: {
            name: 'isverify',
            pattern: 'equal',
            value: 0
          },
          idColumn: 0,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'user_id',
            cname: '用户ID',
            type: 'select',
            updateType: 'text',
            getOptions: _this.getAdmins,
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'title',
            cname: '帖子标题',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'content',
            cname: '帖子内容',
            type: 'textarea',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'type_id',
            cname: '板块id',
            type: 'select',
            getOptions: _this.getSections,
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'url',
            cname: '跳转地址',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'cover',
            cname: '封面',
            tableType: 'img_box',
            type: 'attachment',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'video_code',
            cname: '视频代码',
            type: 'textarea',
            searchable: false,
            orderable: false,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'created_at',
            cname: '创建时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'istop',
            cname: '置顶',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'isgreat',
            cname: '加精',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'ishot',
            cname: '最热',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'isverify',
            cname: '审核',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'comment_num',
            cname: '评论',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'section',
            cname: '板块',
            type: 'none',
            tableType: 'object',
            tableShow: function tableShow(object) {
              return object && object.name;
            },
            searchable: false,
            orderable: false,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'user',
            cname: '用户',
            type: 'none',
            tableType: 'object',
            tableShow: function tableShow(object) {
              return object && object.nickname;
            },
            searchable: false,
            orderable: false,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(Thread, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fetchAdmins();
        this.fetchSections();
      }
    }, {
      key: 'getBtns',
      value: function getBtns(item, callback) {
        if (!this.list) {
          this.list = callback;
        }
        if (this.state.dataTable.onlyTrashed) {
          return [(0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            onClick: this.restore
          }, 'btn-', '\u6062\u590D')];
        }
        if (this.state.dataTable.customSearch.value === 2) {
          return [(0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            'data-type': 'isverify',
            'data-tvalue': 1,
            onClick: this.verify
          }, 'btn-verify', '\u6062\u590D')];
        }
        if (!this.state.dataTable.customSearch.value) {
          return [(0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            'data-type': 'isverify',
            'data-tvalue': 1,
            onClick: this.verify
          }, 'btn-verify', '\u901A\u8FC7'), (0, _jsx3.default)('button', {
            className: 'btn btn-warning-outline btn-sm',
            'data-id': item.id,
            'data-type': 'isverify',
            'data-tvalue': 2,
            onClick: this.verify
          }, 'btn-unverify', '\u62D2\u7EDD')];
        }
  
        return [(0, _jsx3.default)('button', {
          className: 'btn btn-success-outline btn-sm',
          'data-id': item.id,
          onClick: this.showReplayModal
        }, 'btn-replay', '\u56DE\u590D'), (0, _jsx3.default)('button', {
          className: 'btn ' + (item.istop ? 'btn-warning-outline' : 'btn-success-outline') + ' btn-sm',
          'data-id': item.id,
          'data-type': 'istop',
          'data-tvalue': item.istop ? 0 : 1,
          onClick: this.toggleStatus
        }, 'btn-top', '\u7F6E\u9876'), (0, _jsx3.default)('button', {
          className: 'btn ' + (item.isgreat ? 'btn-warning-outline' : 'btn-success-outline') + ' btn-sm',
          'data-id': item.id,
          'data-type': 'isgreat',
          'data-tvalue': item.isgreat ? 0 : 1,
          onClick: this.toggleStatus
        }, 'btn-great', '\u52A0\u7CBE'), (0, _jsx3.default)('button', {
          className: 'btn ' + (item.ishot ? 'btn-warning-outline' : 'btn-success-outline') + ' btn-sm',
          'data-id': item.id,
          'data-type': 'ishot',
          'data-tvalue': item.ishot ? 0 : 1,
          onClick: this.toggleStatus
        }, 'btn-hot', '\u6700\u70ED'), (0, _jsx3.default)('button', {
          className: 'btn btn-warning-outline btn-sm',
          'data-id': item.id,
          'data-type': 'isverify',
          'data-tvalue': 2,
          onClick: this.verify
        }, 'btn-unverify', '\u62D2\u7EDD')];
      }
    }, {
      key: 'getAdmins',
      value: function getAdmins() {
        return this.state.admins;
      }
    }, {
      key: 'getSections',
      value: function getSections() {
        return this.state.sections;
      }
    }, {
      key: 'fetchAdmins',
      value: function fetchAdmins() {
        var _this2 = this;
  
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BBS_USER_ADMIN_LIST,
          method: 'GET'
        })).then(function (json) {
          if (json.error_code === 0) {
            var admins = {};
            for (var i = 0; i < json.data.length; i++) {
              admins[json.data[i].user_id] = json.data[i].nickname;
            }
            _this2.setState({
              admins: admins
            });
          } else {
            alert(json.error_msg);
          }
        });
      }
    }, {
      key: 'fetchSections',
      value: function fetchSections() {
        var _this3 = this;
  
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BBS_SECTION_LIST,
          method: 'GET'
        })).then(function (json) {
          if (json.error_code === 0) {
            var sections = {};
            for (var i = 0; i < json.data.length; i++) {
              sections[json.data[i].id] = json.data[i].name;
            }
            _this3.setState({
              sections: sections
            });
          } else {
            alert(json.error_msg);
          }
        });
      }
    }, {
      key: 'restore',
      value: function restore(e) {
        var _this4 = this;
  
        var id = e.currentTarget.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BBS_THREAD_RESTORE,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this4.list();
          } else {
            alert(json.error_msg);
          }
        });
      }
    }, {
      key: 'verify',
      value: function verify(e) {
        var _this5 = this;
  
        var id = e.currentTarget.dataset.id;
        var type = e.currentTarget.dataset.type;
        var typeValue = +e.currentTarget.dataset.tvalue;
        var formData = new FormData();
        formData.append('id', id);
        formData.append(type, typeValue);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BBS_THREAD_VERIFY,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this5.list();
          } else {
            alert(json.error_msg);
          }
        });
      }
    }, {
      key: 'toggleStatus',
      value: function toggleStatus(e) {
        var _this6 = this;
  
        var id = e.currentTarget.dataset.id;
        var type = e.currentTarget.dataset.type;
        var typeValue = +e.currentTarget.dataset.tvalue;
        var formData = new FormData();
        formData.append('id', id);
        formData.append(type, typeValue);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BBS_THREAD_TOGGLE_STATUS,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this6.list();
          } else {
            alert(json.error_msg);
          }
        });
      }
    }, {
      key: 'showReplayModal',
      value: function showReplayModal(e) {
        var id = e.currentTarget.dataset.id;
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_ReplayModal2.default, {
          submit: this.replay,
          getAdmins: this.getAdmins,
          id: id
        })));
      }
    }, {
      key: 'replay',
      value: function replay(e) {
        var _this7 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BBS_COMMENT_DT_ADD,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this7.props.dispatch((0, _modal.hideModal)(true));
            if (json.data.id) {
              _this7.verifyReplay(json.data.id);
            }
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'verifyReplay',
      value: function verifyReplay(id) {
        var _this8 = this;
  
        var formData = new FormData();
        formData.append('id', id);
        formData.append('isverify', 1);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BBS_COMMENT_VERIFY,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this8.list();
          } else {
            alert(json.error_msg);
          }
        });
      }
    }, {
      key: 'showUnVerifyModal',
      value: function showUnVerifyModal(e) {
        var id = e.currentTarget.dataset.id;
        this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_UnVerifyModal2.default, {
          submit: this.unVerify,
          id: id
        })));
      }
    }, {
      key: 'unVerify',
      value: function unVerify(e) {
        var _this9 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BBS_THREAD_UNVERIFY,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this9.props.dispatch((0, _modal.hideModal)(true));
            _this9.list();
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'typeChange',
      value: function typeChange(e) {
        var value = +e.currentTarget.value;
        var dataTable = {};
        if (value !== 3) {
          var customSearch = (0, _assign2.default)({}, this.state.dataTable.customSearch, {
            name: 'isverify',
            pattern: 'equal',
            value: value
          });
          dataTable = (0, _assign2.default)({}, this.state.dataTable, {
            forbiddenDefaultBtns: false,
            customSearch: customSearch,
            onlyTrashed: false,
            identify: value,
            timeStamp: new Date().getTime()
          });
        } else {
          dataTable = (0, _assign2.default)({}, this.state.dataTable, {
            forbiddenDefaultBtns: true,
            customSearch: false,
            onlyTrashed: true,
            identify: value,
            timeStamp: new Date().getTime()
          });
        }
  
        this.setState({
          dataTable: dataTable
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var customSearch = this.state.dataTable.customSearch;
        var onlyTrashed = this.state.dataTable.onlyTrashed;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Radio, {
          labelName: '\u672A\u5BA1\u6838',
          name: 'isVerify',
          value: '0',
          checked: customSearch.value === 0,
          onChange: this.typeChange
        }), (0, _jsx3.default)(_tools.Radio, {
          labelName: '\u5DF2\u5BA1\u6838',
          name: 'isVerify',
          value: '1',
          checked: customSearch.value === 1,
          onChange: this.typeChange
        }), (0, _jsx3.default)(_tools.Radio, {
          labelName: '\u5DF2\u62D2\u7EDD',
          name: 'isVerify',
          value: '2',
          checked: customSearch.value === 2,
          onChange: this.typeChange
        }), _ref, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return Thread;
  }(_react.Component);
  
  Thread.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)()(Thread);

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('span', {
    className: 'c-indicator'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Submit, {
    value: '\u786E\u8BA4'
  });
  
  var UnVerifyModal = function (_Component) {
    (0, _inherits3.default)(UnVerifyModal, _Component);
  
    function UnVerifyModal(props) {
      (0, _classCallCheck3.default)(this, UnVerifyModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (UnVerifyModal.__proto__ || (0, _getPrototypeOf2.default)(UnVerifyModal)).call(this, props));
  
      _this.list = _this.list.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(UnVerifyModal, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.list();
      }
    }, {
      key: 'list',
      value: function list() {
        var _this2 = this;
  
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BBS_BLOCK_LIST,
          method: 'GET'
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.props.dispatch(hideModal(true));
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var blocks = this.props.blocks || [];
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u9009\u62E9\u62D2\u5BA1\u539F\u56E0'
        }, void 0, (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'id',
          value: this.props.id
        }), blocks.map(function (item, index) {
          return (0, _jsx3.default)('label', {
            className: 'c-input c-radio'
          }, 'redio-' + index, (0, _jsx3.default)('input', {
            name: 'cid',
            value: item.id,
            type: 'radio'
          }), _ref, item.name);
        }), _ref2));
      }
    }]);
    return UnVerifyModal;
  }(_react.Component);
  
  UnVerifyModal.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var blocks = omg[_constants.BBS_BLOCK_LIST] || [];
    return {
      blocks: blocks
    };
  })(UnVerifyModal);

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Textarea, {
    labelName: '\u5185\u5BB9',
    name: 'content',
    defaultValue: ''
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Submit, {
    value: '\u786E\u8BA4'
  });
  
  var UnVerifyModal = function (_Component) {
    (0, _inherits3.default)(UnVerifyModal, _Component);
  
    function UnVerifyModal(props) {
      (0, _classCallCheck3.default)(this, UnVerifyModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (UnVerifyModal.__proto__ || (0, _getPrototypeOf2.default)(UnVerifyModal)).call(this, props));
  
      _this.list = _this.list.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(UnVerifyModal, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.list();
      }
    }, {
      key: 'list',
      value: function list() {
        var _this2 = this;
  
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BBS_BLOCK_LIST,
          method: 'GET'
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.props.dispatch(hideModal(true));
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u8BC4\u8BBA'
        }, void 0, (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'tid',
          value: this.props.id
        }), (0, _jsx3.default)(_tools.Select, {
          labelName: '\u9A6C\u7532',
          name: 'user_id',
          options: this.props.getAdmins() || []
        }), _ref, _ref2));
      }
    }]);
    return UnVerifyModal;
  }(_react.Component);
  
  UnVerifyModal.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var blocks = omg[_constants.BBS_BLOCK_LIST] || [];
    return {
      blocks: blocks
    };
  })(UnVerifyModal);

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Section = __webpack_require__(208);
  
  var _Section2 = _interopRequireDefault(_Section);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Section2.default, {});
  
  exports.default = {
  
    path: '/section',
  
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Section = function (_Component) {
    (0, _inherits3.default)(Section, _Component);
  
    function Section(props) {
      (0, _classCallCheck3.default)(this, Section);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Section.__proto__ || (0, _getPrototypeOf2.default)(Section)).call(this, props));
  
      _this.toggleEnable = _this.toggleEnable.bind(_this);
      _this.getBtns = _this.getBtns.bind(_this);
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: '',
        dataTable: {
          title: '板块',
          listType: _constants.BBS_SECTION_DT_LIST,
          updateType: _constants.BBS_SECTION_DT_UPDATE,
          addType: _constants.BBS_SECTION_DT_ADD,
          deleteType: _constants.BBS_SECTION_DT_DEL,
          timeStamp: new Date().getTime(),
          getBtns: _this.getBtns,
          order: {
            column: 5,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          customSearch: false,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'name',
            cname: '名称',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'description',
            cname: '描述',
            type: 'textarea',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'isuse',
            cname: '是否可用',
            type: 'none',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'created_at',
            cname: '创建时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'sort',
            cname: '权重',
            type: 'text',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'isban',
            cname: '禁止发帖',
            type: 'check',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(Section, [{
      key: 'getBtns',
      value: function getBtns(item, callback) {
        if (!this.list) {
          this.list = callback;
        }
        return [(0, _jsx3.default)('button', {
          className: 'btn ' + (item.isuse ? 'btn-warning-outline' : 'btn-success-outline') + ' btn-sm',
          'data-id': item.id,
          'data-type': 'isuse',
          'data-tvalue': item.isuse ? 0 : 1,
          onClick: this.toggleEnable
        }, 'btn-verify', '\u901A\u8FC7')];
      }
    }, {
      key: 'toggleEnable',
      value: function toggleEnable(e) {
        var _this2 = this;
  
        var id = e.currentTarget.dataset.id;
        var typeValue = +e.currentTarget.dataset.tvalue;
        var formData = new FormData();
        var type = typeValue ? _constants.BBS_SECTION_OPEN : _constants.BBS_SECTION_CLOSE;
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: type,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.list();
          } else {
            alert(json.error_msg);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var customSearch = this.state.dataTable.customSearch;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return Section;
  }(_react.Component);
  
  Section.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)()(Section);

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Reply = __webpack_require__(210);
  
  var _Reply2 = _interopRequireDefault(_Reply);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Reply2.default, {});
  
  exports.default = {
  
    path: '/reply',
  
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  var _UnVerifyModal = __webpack_require__(211);
  
  var _UnVerifyModal2 = _interopRequireDefault(_UnVerifyModal);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('hr', {});
  
  var Reply = function (_Component) {
    (0, _inherits3.default)(Reply, _Component);
  
    function Reply(props) {
      (0, _classCallCheck3.default)(this, Reply);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Reply.__proto__ || (0, _getPrototypeOf2.default)(Reply)).call(this, props));
  
      _this.typeChange = _this.typeChange.bind(_this);
      _this.verify = _this.verify.bind(_this);
      _this.getBtns = _this.getBtns.bind(_this);
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: '',
        dataTable: {
          title: '评论',
          listType: _constants.BBS_COMMENT_DT_LIST,
          updateType: _constants.BBS_COMMENT_DT_UPDATE,
          addType: _constants.BBS_COMMENT_DT_ADD,
          deleteType: _constants.BBS_COMMENT_DT_DEL,
          timeStamp: new Date().getTime(),
          noDelete: true,
          getBtns: _this.getBtns,
          withs: ['thread'],
          identify: 0,
          order: {
            column: 0,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          customSearch: {
            name: 'isverify',
            pattern: 'equal',
            value: 0
          },
          idColumn: 0,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'user_id',
            cname: '用户ID',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'tid',
            cname: '帖子ID',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'content',
            cname: '内容',
            type: 'textarea',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'isverify',
            cname: '审核',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'created_at',
            cname: '创建时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'thread',
            cname: '帖子详情',
            type: 'none',
            tableType: 'object',
            tableShow: function tableShow(object) {
              return object && (0, _jsx3.default)('div', {
                title: object.content,
                className: 'ellipsis'
              }, void 0, object.content.substring(0, 100), object.content.length > 100 ? '...' : '');
            },
            searchable: false,
            orderable: false,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(Reply, [{
      key: 'getBtns',
      value: function getBtns(item, callback) {
        if (!this.list) {
          this.list = callback;
        }
        if (this.state.dataTable.customSearch.value === 1) {
          return [(0, _jsx3.default)('button', {
            className: 'btn btn-warning-outline btn-sm',
            'data-id': item.id,
            'data-type': 'isverify',
            'data-tvalue': 2,
            onClick: this.verify
          }, 'btn-unverify', '\u62D2\u7EDD')];
        }
        if (this.state.dataTable.customSearch.value === 2) {
          return [(0, _jsx3.default)('button', {
            className: 'btn btn-success-outline btn-sm',
            'data-id': item.id,
            'data-type': 'isverify',
            'data-tvalue': 1,
            onClick: this.verify
          }, 'btn-verify', '\u6062\u590D')];
        }
        return [(0, _jsx3.default)('button', {
          className: 'btn btn-success-outline btn-sm',
          'data-id': item.id,
          'data-type': 'isverify',
          'data-tvalue': 1,
          onClick: this.verify
        }, 'btn-verify', '\u901A\u8FC7'), (0, _jsx3.default)('button', {
          className: 'btn btn-warning-outline btn-sm',
          'data-id': item.id,
          'data-type': 'isverify',
          'data-tvalue': 2,
          onClick: this.verify
        }, 'btn-unverify', '\u62D2\u7EDD')];
      }
    }, {
      key: 'verify',
      value: function verify(e) {
        var _this2 = this;
  
        var id = e.currentTarget.dataset.id;
        var formData = new FormData();
        var typeValue = +e.currentTarget.dataset.tvalue;
        formData.append('id', id);
        formData.append('isverify', typeValue);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BBS_COMMENT_VERIFY,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.list();
          } else {
            alert(json.error_msg);
          }
        });
      }
    }, {
      key: 'typeChange',
      value: function typeChange(e) {
        var value = +e.currentTarget.value;
        var customSearch = (0, _assign2.default)({}, this.state.dataTable.customSearch, { value: value });
        var dataTable = (0, _assign2.default)({}, this.state.dataTable, {
          customSearch: customSearch,
          identify: value,
          timeStamp: new Date().getTime()
        });
        this.setState({
          dataTable: dataTable
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var customSearch = this.state.dataTable.customSearch;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Radio, {
          labelName: '\u672A\u5BA1\u6838',
          name: 'isVerify',
          value: '0',
          checked: customSearch.value === 0,
          onChange: this.typeChange
        }), (0, _jsx3.default)(_tools.Radio, {
          labelName: '\u5DF2\u5BA1\u6838',
          name: 'isVerify',
          value: '1',
          checked: customSearch.value === 1,
          onChange: this.typeChange
        }), (0, _jsx3.default)(_tools.Radio, {
          labelName: '\u5DF2\u62D2\u7EDD',
          name: 'isVerify',
          value: '2',
          checked: customSearch.value === 2,
          onChange: this.typeChange
        }), _ref, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return Reply;
  }(_react.Component);
  
  Reply.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)()(Reply);

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('span', {
    className: 'c-indicator'
  });
  
  var _ref2 = (0, _jsx3.default)(_tools.Submit, {
    value: '\u786E\u8BA4'
  });
  
  var UnVerifyModal = function (_Component) {
    (0, _inherits3.default)(UnVerifyModal, _Component);
  
    function UnVerifyModal(props) {
      (0, _classCallCheck3.default)(this, UnVerifyModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (UnVerifyModal.__proto__ || (0, _getPrototypeOf2.default)(UnVerifyModal)).call(this, props));
  
      _this.list = _this.list.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(UnVerifyModal, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.list();
      }
    }, {
      key: 'list',
      value: function list() {
        var _this2 = this;
  
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.BBS_BLOCK_LIST,
          method: 'GET'
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.props.dispatch(hideModal(true));
          } else {
            alert(json.data.error_msg);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var blocks = this.props.blocks || [];
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u9009\u62E9\u62D2\u5BA1\u539F\u56E0'
        }, void 0, (0, _jsx3.default)('form', {
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'id',
          value: this.props.id
        }), blocks.map(function (item, index) {
          return (0, _jsx3.default)('label', {
            className: 'c-input c-radio'
          }, 'redio-' + index, (0, _jsx3.default)('input', {
            name: 'cid',
            value: item.id,
            type: 'radio'
          }), _ref, item.name);
        }), _ref2));
      }
    }]);
    return UnVerifyModal;
  }(_react.Component);
  
  UnVerifyModal.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var blocks = omg[_constants.BBS_BLOCK_LIST] || [];
    return {
      blocks: blocks
    };
  })(UnVerifyModal);

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Bbsuser = __webpack_require__(213);
  
  var _Bbsuser2 = _interopRequireDefault(_Bbsuser);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Bbsuser2.default, {});
  
  exports.default = {
  
    path: '/bbsuser',
  
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('hr', {});
  
  var Bbsuser = function (_Component) {
    (0, _inherits3.default)(Bbsuser, _Component);
  
    function Bbsuser(props) {
      (0, _classCallCheck3.default)(this, Bbsuser);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Bbsuser.__proto__ || (0, _getPrototypeOf2.default)(Bbsuser)).call(this, props));
  
      _this.typeChange = _this.typeChange.bind(_this);
      _this.toggleBlock = _this.toggleBlock.bind(_this);
      _this.toggleAdmin = _this.toggleAdmin.bind(_this);
      _this.getBtns = _this.getBtns.bind(_this);
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: '',
        dataTable: {
          title: '论坛用户',
          identify: 0,
          listType: _constants.BBS_USER_DT_LIST,
          updateType: _constants.BBS_USER_DT_UPDATE,
          addType: _constants.BBS_USER_DT_ADD,
          deleteType: _constants.BBS_USER_DT_DEL,
          timeStamp: new Date().getTime(),
          getBtns: _this.getBtns,
          order: {
            column: 0,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          customSearch: false,
          idColumn: 0,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'user_id',
            cname: '用户ID',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'head_img',
            cname: '头像',
            type: 'attachment',
            tableType: 'img_box',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'phone',
            cname: '手机号',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'nickname',
            cname: '昵称',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'isblack',
            cname: '是否拉黑',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'created_at',
            cname: '创建时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'isadmin',
            cname: '是否马甲',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(Bbsuser, [{
      key: 'getBtns',
      value: function getBtns(item, callback) {
        if (!this.list) {
          this.list = callback;
        }
        return [(0, _jsx3.default)('button', {
          className: 'btn ' + (item.isblack ? 'btn-warning-outline' : 'btn-success-outline') + ' btn-sm',
          'data-id': item.id,
          'data-type': 'isblack',
          'data-tvalue': item.isblack ? 0 : 1,
          onClick: this.toggleBlock
        }, 'btn-block', '\u62C9\u9ED1'), (0, _jsx3.default)('button', {
          className: 'btn ' + (item.isadmin ? 'btn-warning-outline' : 'btn-success-outline') + ' btn-sm',
          'data-id': item.id,
          'data-type': 'isblack',
          'data-tvalue': item.isadmin ? 0 : 1,
          onClick: this.toggleAdmin
        }, 'btn-admin', '\u9A6C\u7532')];
      }
    }, {
      key: 'toggleBlock',
      value: function toggleBlock(e) {
        var _this2 = this;
  
        var id = e.currentTarget.dataset.id;
        var typeValue = +e.currentTarget.dataset.tvalue;
        var formData = new FormData();
        var type = typeValue ? _constants.BBS_USER_BLOCK : _constants.BBS_USER_UNBLOCK;
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: type,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.list();
          } else {
            alert(json.error_msg);
          }
        });
      }
    }, {
      key: 'toggleAdmin',
      value: function toggleAdmin(e) {
        var _this3 = this;
  
        var id = e.currentTarget.dataset.id;
        var typeValue = +e.currentTarget.dataset.tvalue;
        var formData = new FormData();
        var type = typeValue ? _constants.BBS_USER_ADMIN : _constants.BBS_USER_UNADMIN;
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: type,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this3.list();
          } else {
            alert(json.error_msg);
          }
        });
      }
    }, {
      key: 'typeChange',
      value: function typeChange(e) {
        var value = e.currentTarget.value;
        var customSearch = {};
        var identify = 0;
        switch (value) {
          case 'all':
            customSearch = false;
            identify = 0;
            break;
          case 'admin':
            customSearch = (0, _assign2.default)({}, this.state.dataTable.customSearch, {
              name: 'isadmin',
              pattern: 'equal',
              value: 1
            });
            identify = 1;
            break;
          case 'black':
            customSearch = (0, _assign2.default)({}, this.state.dataTable.customSearch, {
              name: 'isblack',
              pattern: 'equal',
              value: 1
            });
            identify = 2;
            break;
          default:
            identify = 0;
            customSearch = false;
            break;
        }
        var dataTable = (0, _assign2.default)({}, this.state.dataTable, {
          customSearch: customSearch,
          identify: identify,
          timeStamp: new Date().getTime()
        });
        this.setState({
          dataTable: dataTable
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var customSearch = this.state.dataTable.customSearch;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.Radio, {
          labelName: '\u5168\u90E8',
          name: 'userfilter',
          value: 'all',
          checked: !customSearch,
          onChange: this.typeChange
        }), (0, _jsx3.default)(_tools.Radio, {
          labelName: '\u9A6C\u7532',
          name: 'userfilter',
          value: 'admin',
          checked: customSearch && customSearch.name === 'isadmin',
          onChange: this.typeChange
        }), (0, _jsx3.default)(_tools.Radio, {
          labelName: '\u5DF2\u62C9\u9ED1',
          name: 'userfilter',
          value: 'black',
          checked: customSearch && customSearch.name === 'isblack',
          onChange: this.typeChange
        }), _ref, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return Bbsuser;
  }(_react.Component);
  
  Bbsuser.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)()(Bbsuser);

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _BbsConfig = __webpack_require__(215);
  
  var _BbsConfig2 = _interopRequireDefault(_BbsConfig);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_BbsConfig2.default, {});
  
  exports.default = {
  
    path: '/bbsconfig',
  
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var BbsConfig = function (_Component) {
    (0, _inherits3.default)(BbsConfig, _Component);
  
    function BbsConfig(props) {
      (0, _classCallCheck3.default)(this, BbsConfig);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (BbsConfig.__proto__ || (0, _getPrototypeOf2.default)(BbsConfig)).call(this, props));
  
      _this.verify = _this.verify.bind(_this);
      _this.getBtns = _this.getBtns.bind(_this);
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: '',
        dataTable: {
          title: '社区配置',
          listType: _constants.BBS_CONFIG_DT_LIST,
          updateType: _constants.BBS_CONFIG_DT_UPDATE,
          addType: _constants.BBS_CONFIG_DT_ADD,
          deleteType: _constants.BBS_CONFIG_DT_DEL,
          timeStamp: new Date().getTime(),
          getBtns: _this.getBtns,
          order: {
            column: 0,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          customSearch: false,
          idColumn: 0,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'remark',
            cname: '名称',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'key',
            cname: '标识',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'val',
            cname: '值',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(BbsConfig, [{
      key: 'getBtns',
      value: function getBtns(item, callback) {
        if (!this.list) {
          this.list = callback;
        }
        return [];
      }
    }, {
      key: 'verify',
      value: function verify(e) {
        var _this2 = this;
  
        var id = e.currentTarget.dataset.id;
        var type = e.currentTarget.dataset.type;
        var typeValue = +e.currentTarget.dataset.tvalue;
        var formData = new FormData();
        formData.append('id', id);
        formData.append(type, typeValue);
        this.props.dispatch((0, _omg.fetchAction)({
          type: BBS_TOGGLE_STATUS,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.list();
          } else {
            alert(json.error_msg);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var customSearch = this.state.dataTable.customSearch;
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return BbsConfig;
  }(_react.Component);
  
  BbsConfig.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)()(BbsConfig);

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _BbsMessage = __webpack_require__(217);
  
  var _BbsMessage2 = _interopRequireDefault(_BbsMessage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_BbsMessage2.default, {});
  
  exports.default = {
  
    path: '/bbsmessage',
  
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var BbsMessage = function (_Component) {
    (0, _inherits3.default)(BbsMessage, _Component);
  
    function BbsMessage(props) {
      (0, _classCallCheck3.default)(this, BbsMessage);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (BbsMessage.__proto__ || (0, _getPrototypeOf2.default)(BbsMessage)).call(this, props));
  
      _this.getBtns = _this.getBtns.bind(_this);
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: '',
        dataTable: {
          title: '社区消息',
          listType: _constants.BBS_MESSAGE_DT_LIST,
          updateType: _constants.BBS_MESSAGE_DT_UPDATE,
          addType: _constants.BBS_MESSAGE_DT_ADD,
          deleteType: _constants.BBS_MESSAGE_DT_DEL,
          timeStamp: new Date().getTime(),
          getBtns: _this.getBtns,
          order: {
            column: 0,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          customSearch: false,
          idColumn: 0,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'user_id',
            cname: '用户ID',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'from_user_id',
            cname: '来源用户ID',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'tid',
            cname: '帖子ID',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'cid',
            cname: '评论ID',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'content',
            cname: '内容',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'created_at',
            cname: '创建时间',
            type: 'text',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'isread',
            cname: '是否已读',
            type: 'text',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(BbsMessage, [{
      key: 'getBtns',
      value: function getBtns(item, callback) {
        if (!this.list) {
          this.list = callback;
        }
        return [];
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return BbsMessage;
  }(_react.Component);
  
  BbsMessage.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)()(BbsMessage);

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _BbsBlock = __webpack_require__(219);
  
  var _BbsBlock2 = _interopRequireDefault(_BbsBlock);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_BbsBlock2.default, {});
  
  exports.default = {
  
    path: '/bbsblock',
  
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var BbsBlock = function (_Component) {
    (0, _inherits3.default)(BbsBlock, _Component);
  
    function BbsBlock(props) {
      (0, _classCallCheck3.default)(this, BbsBlock);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (BbsBlock.__proto__ || (0, _getPrototypeOf2.default)(BbsBlock)).call(this, props));
  
      _this.getBtns = _this.getBtns.bind(_this);
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: '',
        dataTable: {
          title: '拒审原因',
          listType: _constants.BBS_BLOCK_DT_LIST,
          updateType: _constants.BBS_BLOCK_DT_UPDATE,
          addType: _constants.BBS_BLOCK_DT_ADD,
          deleteType: _constants.BBS_BLOCK_DT_DEL,
          timeStamp: new Date().getTime(),
          getBtns: _this.getBtns,
          order: {
            column: 0,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          customSearch: false,
          idColumn: 0,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'name',
            cname: '名称',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'description',
            cname: '描述',
            type: 'textarea',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'created_at',
            cname: '创建时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(BbsBlock, [{
      key: 'getBtns',
      value: function getBtns(item, callback) {
        if (!this.list) {
          this.list = callback;
        }
        return [];
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return BbsBlock;
  }(_react.Component);
  
  BbsBlock.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)()(BbsBlock);

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Welcome = __webpack_require__(221);
  
  var _Welcome2 = _interopRequireDefault(_Welcome);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Welcome2.default, {});
  
  exports.default = {
  
    path: '/welcome',
  
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Welcome = function (_Component) {
    (0, _inherits3.default)(Welcome, _Component);
  
    function Welcome(props) {
      (0, _classCallCheck3.default)(this, Welcome);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Welcome.__proto__ || (0, _getPrototypeOf2.default)(Welcome)).call(this, props));
  
      _this.enable = _this.enable.bind(_this);
      _this.disable = _this.disable.bind(_this);
      _this.getBtns = _this.getBtns.bind(_this);
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        admins: {},
        addErrorMsg: '',
        dataTable: {
          title: '解锁页欢迎语',
          listType: _constants.WELCOME_DT_LIST,
          updateType: _constants.WELCOME_DT_UPDATE,
          addType: _constants.WELCOME_DT_ADD,
          deleteType: _constants.WELCOME_DT_DEL,
          timeStamp: new Date().getTime(),
          getBtns: _this.getBtns,
          order: {
            column: 2,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          customSearch: false,
          idColumn: 0,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'content',
            cname: '内容',
            type: 'textarea',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'enable',
            cname: '是否可用',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'updated_at',
            cname: '更新时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'created_at',
            cname: '创建时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(Welcome, [{
      key: 'getBtns',
      value: function getBtns(item, callback) {
        if (!this.list) {
          this.list = callback;
        }
  
        return [(0, _jsx3.default)('button', {
          hidden: !item.enable,
          className: 'btn btn-danger-outline btn-sm',
          'data-id': item.id,
          onClick: this.disable
        }, 'btn-disable', '\u7981\u7528'), (0, _jsx3.default)('button', {
          hidden: item.enable,
          className: 'btn btn-success-outline btn-sm',
          'data-id': item.id,
          onClick: this.enable
        }, 'btn-enable', '\u542F\u7528')];
      }
    }, {
      key: 'disable',
      value: function disable(e) {
        var _this2 = this;
  
        var id = e.currentTarget.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.WELCOME_DISABLE,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this2.list();
          } else {
            alert(json.error_msg);
          }
        });
      }
    }, {
      key: 'enable',
      value: function enable(e) {
        var _this3 = this;
  
        var id = e.currentTarget.dataset.id;
        var formData = new FormData();
        formData.append('id', id);
        this.props.dispatch((0, _omg.fetchAction)({
          type: _constants.WELCOME_ENABLE,
          method: 'POST',
          formData: formData
        })).then(function (json) {
          if (json.error_code === 0) {
            _this3.list();
          } else {
            alert(json.error_msg);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return Welcome;
  }(_react.Component);
  
  Welcome.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)()(Welcome);

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Jianmianhui = __webpack_require__(223);
  
  var _Jianmianhui2 = _interopRequireDefault(_Jianmianhui);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Jianmianhui2.default, {});
  
  exports.default = {
  
    path: '/jianmianhui',
  
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Jianmianhui = function (_Component) {
    (0, _inherits3.default)(Jianmianhui, _Component);
  
    function Jianmianhui(props) {
      (0, _classCallCheck3.default)(this, Jianmianhui);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Jianmianhui.__proto__ || (0, _getPrototypeOf2.default)(Jianmianhui)).call(this, props));
  
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: '',
        dataTable: {
          title: '见面会',
          listType: _constants.JIANMIANHUI_DT_LIST,
          updateType: _constants.JIANMIANHUI_DT_UPDATE,
          addType: _constants.JIANMIANHUI_DT_ADD,
          deleteType: _constants.JIANMIANHUI_DT_DEL,
          order: {
            column: 0,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          idColumn: 0,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'openid',
            cname: 'openid',
            type: 'none',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'nick_name',
            cname: '昵称',
            type: 'none',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'headimgurl',
            cname: '头像',
            type: 'none',
            tableType: 'img_box',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'iswin',
            cname: '是否中奖',
            type: 'check',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'isdefault',
            cname: '场内人员',
            type: 'check',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'created_at',
            cname: '创建时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'updated_at',
            cname: '更新时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(Jianmianhui, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return Jianmianhui;
  }(_react.Component);
  
  Jianmianhui.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function () {})(Jianmianhui);

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _UserAttr = __webpack_require__(225);
  
  var _UserAttr2 = _interopRequireDefault(_UserAttr);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_UserAttr2.default, {});
  
  exports.default = {
  
    path: '/userattr',
  
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var UserAttr = function (_Component) {
    (0, _inherits3.default)(UserAttr, _Component);
  
    function UserAttr(props) {
      (0, _classCallCheck3.default)(this, UserAttr);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (UserAttr.__proto__ || (0, _getPrototypeOf2.default)(UserAttr)).call(this, props));
  
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: '',
        dataTable: {
          title: '用户属性',
          listType: _constants.USERATTR_DT_LIST,
          updateType: _constants.USERATTR_DT_UPDATE,
          addType: _constants.USERATTR_DT_ADD,
          deleteType: _constants.USERATTR_DT_DEL,
          order: {
            column: 0,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          idColumn: 0,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'user_id',
            cname: '用户id',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'key',
            cname: 'key',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'number',
            cname: 'number',
            type: 'text',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'string',
            cname: 'string',
            type: 'text',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'text',
            cname: 'textarea',
            type: 'text',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'created_at',
            cname: '创建时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'updated_at',
            cname: '更新时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(UserAttr, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return UserAttr;
  }(_react.Component);
  
  UserAttr.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function () {})(UserAttr);

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _GlobalAttr = __webpack_require__(227);
  
  var _GlobalAttr2 = _interopRequireDefault(_GlobalAttr);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_GlobalAttr2.default, {});
  
  exports.default = {
  
    path: '/globalattr',
  
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var GlobalAttr = function (_Component) {
    (0, _inherits3.default)(GlobalAttr, _Component);
  
    function GlobalAttr(props) {
      (0, _classCallCheck3.default)(this, GlobalAttr);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (GlobalAttr.__proto__ || (0, _getPrototypeOf2.default)(GlobalAttr)).call(this, props));
  
      _this.state = {
        name: '',
        alias_name: '',
        pre: '',
        errorMsg: '',
        addErrorMsg: '',
        dataTable: {
          title: '全局属性',
          listType: _constants.GLOBALATTR_DT_LIST,
          updateType: _constants.GLOBALATTR_DT_UPDATE,
          addType: _constants.GLOBALATTR_DT_ADD,
          deleteType: _constants.GLOBALATTR_DT_DEL,
          order: {
            column: 0,
            dir: 'desc'
          },
          start: 0,
          length: 20,
          search: {
            value: '',
            regex: false
          },
          idColumn: 0,
          columns: [{
            name: 'id',
            cname: 'id',
            type: 'hidden',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'key',
            cname: 'key',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'number',
            cname: 'number',
            type: 'text',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'string',
            cname: 'string',
            type: 'text',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'text',
            cname: 'text',
            type: 'textarea',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'created_at',
            cname: '创建时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }, {
            name: 'updated_at',
            cname: '更新时间',
            type: 'none',
            searchable: false,
            orderable: true,
            search: {
              value: '',
              regex: false
            }
          }]
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(GlobalAttr, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_tools.DataTable, {
          config: this.state.dataTable
        }));
      }
    }]);
    return GlobalAttr;
  }(_react.Component);
  
  GlobalAttr.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function () {})(GlobalAttr);

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Feeflowconfig = __webpack_require__(229);
  
  var _Feeflowconfig2 = _interopRequireDefault(_Feeflowconfig);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/Feeflowconfig',
    children: [{
      path: '/:type',
      action: function action(context) {
        return (0, _jsx3.default)(_Feeflowconfig2.default, {
          type: context.params.type,
          page: +context.query.page || 1
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  var _modal = __webpack_require__(70);
  
  var _omg = __webpack_require__(56);
  
  var _omg2 = __webpack_require__(58);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _AddModal = __webpack_require__(230);
  
  var _AddModal2 = _interopRequireDefault(_AddModal);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('span', {
      className: 'c-indicator'
  });
  
  var _ref2 = (0, _jsx3.default)('hr', {});
  
  var _ref3 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '\u5E8F\u53F7'), (0, _jsx3.default)('th', {}, void 0, '\u5546\u54C1\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, '\u5546\u54C1\u7C7B\u578B'), (0, _jsx3.default)('th', {}, void 0, '\u8FD0\u8425\u5546\u7C7B\u578B'), (0, _jsx3.default)('th', {}, void 0, '\u51FA\u552E\u4EF7\u683C'), (0, _jsx3.default)('th', {}, void 0, '\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var Feeflowconfig = function (_Component) {
      (0, _inherits3.default)(Feeflowconfig, _Component);
  
      function Feeflowconfig(props) {
          (0, _classCallCheck3.default)(this, Feeflowconfig);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (Feeflowconfig.__proto__ || (0, _getPrototypeOf2.default)(Feeflowconfig)).call(this, props));
  
          _this.freshData = _this.freshData.bind(_this);
          _this.add = _this.add.bind(_this);
          _this.update = _this.update.bind(_this);
          _this.showAdd = _this.showAdd.bind(_this);
          _this.showUpdate = _this.showUpdate.bind(_this);
          _this.selectChange = _this.selectChange.bind(_this);
          _this.upStatus = _this.upStatus.bind(_this);
          _this.pageSelect = _this.pageSelect.bind(_this);
          var feeFlowConfigTypes = (0, _omg2.getConfig)('feeFlowConfigTypes');
          var page = props.page || 1;
          _this.state = {
              feeFlowConfigTypes: feeFlowConfigTypes,
              page: page
          };
          return _this;
      }
  
      (0, _createClass3.default)(Feeflowconfig, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.freshData(this.props.type, this.props.page);
          }
      }, {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
              if (this.props.type !== nextProps.type || nextProps.page !== this.props.page) {
                  this.setState({
                      page: nextProps.page
                  });
                  this.freshData(nextProps.type, nextProps.page);
              }
          }
      }, {
          key: 'freshData',
          value: function freshData(type, page) {
              var queryObj = { type: type, page: page };
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.FEEFLOWCONFIG_LIST,
                  key: type + '_' + page,
                  queryObj: queryObj
              }));
          }
      }, {
          key: 'showAdd',
          value: function showAdd() {
              var modalView = (0, _jsx3.default)(_AddModal2.default, {
                  type: this.props.type,
                  submit: this.add
              });
              this.props.dispatch((0, _modal.showModal)(modalView));
          }
      }, {
          key: 'add',
          value: function add(e) {
              var _this2 = this;
  
              e.preventDefault();
              var formData = new FormData(e.target);
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.FEEFLOWCONFIG_ADD,
                  method: 'POST',
                  formData: formData
              })).then(function (json) {
                  if (json.error_code === 0) {
                      _this2.props.dispatch((0, _modal.hideModal)(true));
                      _history2.default.push('/feeflowconfig/' + formData.get('type'));
                      _this2.freshData(formData.get('type'), _this2.props.page);
                  } else {
                      _this2.setState({
                          addErrorMsg: json.data.error_msg
                      });
                  }
              });
          }
      }, {
          key: 'update',
          value: function update(e) {
              var _this3 = this;
  
              e.preventDefault();
              var formData = new FormData(e.target);
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.FEEFLOWCONFIG_ADD,
                  method: 'POST',
                  formData: formData
              })).then(function (json) {
                  if (json.error_code === 0) {
                      _this3.props.dispatch((0, _modal.hideModal)(true));
                      _this3.freshData(_this3.props.type, _this3.props.page);
                  } else {
                      _this3.setState({
                          addErrorMsg: json.data.error_msg
                      });
                  }
              });
          }
      }, {
          key: 'showUpdate',
          value: function showUpdate(e) {
              var id = e.target.dataset.id;
              var index = e.target.dataset.index;
              var item = this.items[index] || {};
              var modalView = (0, _jsx3.default)(_AddModal2.default, {
                  type: this.props.type,
                  item: item,
                  id: id,
                  submit: this.update
              });
              this.props.dispatch((0, _modal.showModal)(modalView));
          }
      }, {
          key: 'upStatus',
          value: function upStatus(e) {
              var _this4 = this;
  
              var id = $(e.target).data('id');
              var thisType = $(e.target).data('status');
              var formData = new FormData();
              formData.append('id', id);
              formData.append('type', thisType);
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.FEEFLOWCONFIG_UP_STATUS,
                  method: 'POST',
                  formData: formData
              })).then(function () {
                  _this4.freshData(_this4.props.type, _this4.props.page);
              });
          }
      }, {
          key: 'selectChange',
          value: function selectChange(e) {
              var value = e.target.value;
              _history2.default.push('/feeflowconfig/' + value);
          }
      }, {
          key: 'pageSelect',
          value: function pageSelect(page) {
              this.setState({
                  page: page
              });
              this.freshData(this.props.type, page);
          }
      }, {
          key: 'render',
          value: function render() {
              var _this5 = this;
  
              var _props = this.props,
                  feeConfigs = _props.feeConfigs,
                  type = _props.type;
              var feeFlowConfigTypes = this.state.feeFlowConfigTypes;
  
              var btn = (0, _jsx3.default)('button', {
                  className: 'btn btn-info btn-sm pull-xs-right',
                  onClick: this.showAdd
              }, void 0, '\u6DFB\u52A0');
              var key = type + '_' + this.state.page;
              console.log(key);
              var feeconfiglist = feeConfigs[key] || {};
              var items = feeconfiglist.data || [];
              console.log(feeconfiglist);
              this.items = items;
              return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _keys2.default)(feeFlowConfigTypes).map(function (key) {
                  return (0, _jsx3.default)('label', {
                      className: 'c-input c-radio'
                  }, 'redio-' + key, (0, _jsx3.default)('input', {
                      checked: key === type,
                      name: 'main_type',
                      value: key,
                      type: 'radio',
                      onChange: _this5.selectChange
                  }), _ref, feeFlowConfigTypes[key]);
              })), _ref2, (0, _jsx3.default)(_tools.Card, {
                  title: '\u5206\u4EAB\u914D\u7F6E',
                  btn: btn
              }, void 0, (0, _jsx3.default)('table', {
                  className: 'table m-b-0 table-bordered'
              }, void 0, _ref3, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
                  return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('feeFlowConfigChildTypes', item.type)), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('feeFlowConfigChildOperator', item.operator_type)), (0, _jsx3.default)('td', {}, void 0, item.price), (0, _jsx3.default)('td', {}, void 0, item.status === 1 ? '已上线' : '已下线'), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
                      hidden: +item.status === 1,
                      className: 'btn btn-sm btn-success-outline',
                      'data-id': item.id,
                      'data-status': '1',
                      onClick: _this5.upStatus
                  }, void 0, '\u4E0A\u7EBF'), (0, _jsx3.default)('button', {
                      hidden: +item.status == 0,
                      className: 'btn btn-sm btn-warning-outline',
                      'data-id': item.id,
                      'data-status': '2',
                      onClick: _this5.upStatus
                  }, void 0, '\u4E0B\u7EBF'), (0, _jsx3.default)('button', {
                      className: 'btn btn-sm btn-success-outline',
                      'data-id': item.id,
                      'data-index': index,
                      onClick: _this5.showUpdate
                  }, void 0, '\u7F16\u8F91')));
              })))), (0, _jsx3.default)(_tools.Pagination, {
                  currentPage: feeconfiglist.current_page,
                  lastPage: feeconfiglist.last_page,
                  onClick: this.pageSelect,
                  unurl: true
              }));
          }
      }]);
      return Feeflowconfig;
  }(_react.Component);
  
  Feeflowconfig.items = [];
  
  
  Feeflowconfig.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
      var omg = state.omg;
  
      var feeConfigs = omg[_constants.FEEFLOWCONFIG_LIST] || {};
      return {
          feeConfigs: feeConfigs
      };
  })(Feeflowconfig);

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_tools.Submit, {});
  
  var AddModal = function (_Component) {
    (0, _inherits3.default)(AddModal, _Component);
  
    function AddModal(props) {
      (0, _classCallCheck3.default)(this, AddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (AddModal.__proto__ || (0, _getPrototypeOf2.default)(AddModal)).call(this, props));
  
      _this.typeChange = _this.typeChange.bind(_this);
      var feeFlowConfigChildTypes = (0, _omg.getConfig)('feeFlowConfigChildTypes');
      var feeFlowConfigChildOperator = (0, _omg.getConfig)('feeFlowConfigChildOperator');
      var item = _this.props.item || {};
      _this.state = {
        type: item.type || 1,
        feeFlowConfigChildTypes: feeFlowConfigChildTypes,
        feeFlowConfigChildOperator: feeFlowConfigChildOperator
      };
      return _this;
    }
  
    (0, _createClass3.default)(AddModal, [{
      key: 'typeChange',
      value: function typeChange(e) {
        var value = $(e.target).val();
        this.setState({
          type: +value
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var item = this.props.item || {};
        var operatorTypeFileds = [(0, _jsx3.default)(_tools.Fieldset, {}, void 0, (0, _jsx3.default)(_tools.Select, {
          labelName: '\u8FD0\u8425\u5546\u7C7B\u578B',
          name: 'operator_type',
          defaultValue: item.operator_type,
          options: this.state.feeFlowConfigChildOperator
        }))];
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u6DFB\u52A0'
        }, void 0, _react2.default.createElement(
          'form',
          { method: 'post', ref: 'form', onSubmit: this.props.submit },
          (0, _jsx3.default)(_tools.Alert, {
            msg: this.state.errorMsg
          }),
          (0, _jsx3.default)('input', {
            type: 'hidden',
            name: 'id',
            defaultValue: item.id
          }),
          (0, _jsx3.default)(_tools.Input, {
            labelName: '\u5546\u54C1\u540D\u79F0',
            name: 'name',
            defaultValue: item.name
          }),
          (0, _jsx3.default)(_tools.Input, {
            labelName: '\u51FA\u552E\u4EF7\u683C',
            name: 'price',
            defaultValue: item.price
          }),
          (0, _jsx3.default)(_tools.Fieldset, {}, void 0, (0, _jsx3.default)(_tools.Select, {
            labelName: '\u5546\u54C1\u7C7B\u578B',
            name: 'type',
            defaultValue: this.props.type,
            options: this.state.feeFlowConfigChildTypes,
            onChange: this.typeChange
          })),
          operatorTypeFileds,
          _ref
        ));
      }
    }]);
    return AddModal;
  }(_react.Component);
  
  AddModal.defaultProps = {
    dispatch: _react.PropTypes.func.isRequired,
    submit: _react.PropTypes.func.isRequired,
    item: {}
  };
  exports.default = (0, _reactRedux.connect)()(AddModal);

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Feefloworder = __webpack_require__(232);
  
  var _Feefloworder2 = _interopRequireDefault(_Feefloworder);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/Feefloworder',
    children: [{
      path: '/:type',
      action: function action(context) {
        return (0, _jsx3.default)(_Feefloworder2.default, {
          type: context.params.type,
          page: +context.query.page || 1
        });
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _extends2 = __webpack_require__(66);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _constants = __webpack_require__(59);
  
  var _modal = __webpack_require__(70);
  
  var _omg = __webpack_require__(56);
  
  var _omg2 = __webpack_require__(58);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _UpdateModal = __webpack_require__(233);
  
  var _UpdateModal2 = _interopRequireDefault(_UpdateModal);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('span', {
      className: 'c-indicator'
  });
  
  var _ref2 = (0, _jsx3.default)('hr', {});
  
  var _ref3 = (0, _jsx3.default)('div', {
      className: 'form-group'
  }, void 0, (0, _jsx3.default)(_tools.DateTimeInput, {
      labelName: '\u5F00\u59CB\u65F6\u95F4',
      name: 'start_time'
  }), (0, _jsx3.default)(_tools.DateTimeInput, {
      labelName: '\u7ED3\u675F\u65F6\u95F4',
      name: 'end_time'
  }));
  
  var _ref4 = (0, _jsx3.default)('br', {});
  
  var _ref5 = (0, _jsx3.default)('br', {});
  
  var _ref6 = (0, _jsx3.default)('div', {
      className: 'form-group'
  }, void 0, (0, _jsx3.default)('input', {
      type: 'number',
      name: 'user_id',
      className: 'form-control',
      placeholder: '\u7528\u6237ID'
  }));
  
  var _ref7 = (0, _jsx3.default)('div', {
      className: 'form-group'
  }, void 0, (0, _jsx3.default)('input', {
      name: 'order_id',
      className: 'form-control',
      placeholder: '\u8BA2\u5355ID'
  }));
  
  var _ref8 = (0, _jsx3.default)('div', {
      className: 'form-group'
  }, void 0, (0, _jsx3.default)('input', {
      type: 'number',
      name: 'phone',
      className: 'form-control',
      placeholder: '\u624B\u673A\u53F7'
  }));
  
  var _ref9 = (0, _jsx3.default)('div', {
      className: 'form-group'
  }, void 0, (0, _jsx3.default)('select', {
      name: 'debit_status',
      className: 'form-control'
  }, void 0, (0, _jsx3.default)('option', {
      value: '-1'
  }, void 0, '\u6263\u6B3E\u72B6\u6001'), (0, _jsx3.default)('option', {
      value: '0'
  }, void 0, '\u672A\u6263\u6B3E'), (0, _jsx3.default)('option', {
      value: '1'
  }, void 0, '\u5DF2\u6263\u6B3E')));
  
  var _ref10 = (0, _jsx3.default)('div', {
      className: 'form-group'
  }, void 0, (0, _jsx3.default)('select', {
      name: 'order_status',
      className: 'form-control'
  }, void 0, (0, _jsx3.default)('option', {
      value: '-1'
  }, void 0, '\u8BA2\u5355\u72B6\u6001'), (0, _jsx3.default)('option', {
      value: '0'
  }, void 0, '\u672A\u5145\u503C'), (0, _jsx3.default)('option', {
      value: '1'
  }, void 0, '\u6B63\u5728\u5145\u503C'), (0, _jsx3.default)('option', {
      value: '2'
  }, void 0, '\u5145\u503C\u5931\u8D25'), (0, _jsx3.default)('option', {
      value: '3'
  }, void 0, '\u5145\u503C\u6210\u529F'), (0, _jsx3.default)('option', {
      value: '4'
  }, void 0, '\u8BA2\u5355\u5F02\u5E38')));
  
  var _ref11 = (0, _jsx3.default)('div', {
      className: 'form-group'
  }, void 0, (0, _jsx3.default)('select', {
      name: 'repair_status',
      className: 'form-control'
  }, void 0, (0, _jsx3.default)('option', {
      value: '-1'
  }, void 0, '\u8865\u5355\u72B6\u6001'), (0, _jsx3.default)('option', {
      value: '0'
  }, void 0, '\u672A\u8865\u5355'), (0, _jsx3.default)('option', {
      value: '1'
  }, void 0, '\u5DF2\u8865\u5355')));
  
  var _ref12 = (0, _jsx3.default)('button', {
      type: 'submit',
      className: 'btn btn-primary'
  }, void 0, '\u67E5\u8BE2');
  
  var _ref13 = (0, _jsx3.default)('input', {
      type: 'reset',
      className: 'btn btn-info',
      value: '\u91CD\u7F6E'
  });
  
  var _ref14 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '\u5E8F\u53F7'), (0, _jsx3.default)('th', {}, void 0, '\u8BA2\u5355ID'), (0, _jsx3.default)('th', {}, void 0, '\u7528\u6237ID'), (0, _jsx3.default)('th', {}, void 0, '\u5546\u54C1\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, '\u5145\u503C\u624B\u673A\u53F7'), (0, _jsx3.default)('th', {}, void 0, '\u6263\u6B3E\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u8BA2\u5355\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u8865\u5355\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u7528\u6237\u6263\u6B3E\u91D1\u989D'), (0, _jsx3.default)('th', {}, void 0, '\u8BA2\u5355\u91D1\u989D'), (0, _jsx3.default)('th', {}, void 0, '\u8865\u5355\u91D1\u989D'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var Feefloworder = function (_Component) {
      (0, _inherits3.default)(Feefloworder, _Component);
  
      function Feefloworder(props) {
          (0, _classCallCheck3.default)(this, Feefloworder);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (Feefloworder.__proto__ || (0, _getPrototypeOf2.default)(Feefloworder)).call(this, props));
  
          _this.freshData = _this.freshData.bind(_this);
          _this.search = _this.search.bind(_this);
          _this.update = _this.update.bind(_this);
          _this.showUpdate = _this.showUpdate.bind(_this);
          _this.pageSelect = _this.pageSelect.bind(_this);
          _this.OrderRepair = _this.OrderRepair.bind(_this);
          _this.exports = _this.exports.bind(_this);
          _this.reset = _this.reset.bind(_this);
          var feeFlowConfigTypes = (0, _omg2.getConfig)('feeFlowConfigTypes');
          var page = props.page || 1;
          _this.state = {
              feeFlowConfigTypes: feeFlowConfigTypes,
              page: page,
              searchObj: {}
          };
          return _this;
      }
  
      (0, _createClass3.default)(Feefloworder, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.freshData(this.props.type, this.props.page);
          }
      }, {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
              if (this.props.type !== nextProps.type || nextProps.page !== this.props.page) {
                  this.setState({
                      page: nextProps.page
                  });
                  this.freshData(nextProps.type, nextProps.page);
              }
          }
      }, {
          key: 'freshData',
          value: function freshData(type, page, searchObj) {
              var queryObj = searchObj || this.state.searchObj;
              queryObj.page = page;
              queryObj.type = type;
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.FEEFLOWCONFIG_ORDER_LIST,
                  key: type + '_' + page,
                  queryObj: queryObj
              }));
          }
      }, {
          key: 'search',
          value: function search(e) {
              e.preventDefault();
              var formData = new FormData(e.target);
              var searchObj = {};
              searchObj.start_time = formData.get('start_time');
              searchObj.end_time = formData.get('end_time');
              searchObj.user_id = formData.get('user_id');
              searchObj.order_id = formData.get('order_id');
              searchObj.phone = formData.get('phone');
              searchObj.debit_status = formData.get('debit_status');
              searchObj.order_status = formData.get('order_status');
              searchObj.repair_status = formData.get('repair_status');
  
              var location = _history2.default.getCurrentLocation();
              _history2.default.push((0, _extends3.default)({}, location, { query: (0, _assign2.default)({}, location.query, { page: 1 }) }));
              this.setState({
                  searchObj: searchObj
              });
              this.freshData(this.props.type, this.props.page, searchObj);
          }
      }, {
          key: 'update',
          value: function update(e) {
              var _this2 = this;
  
              e.preventDefault();
              var formData = new FormData(e.target);
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.FEEFLOWCONFIG_ORDER_STATUS_UPDATE,
                  method: 'POST',
                  formData: formData
              })).then(function (json) {
                  if (json.error_code === 0) {
                      _this2.props.dispatch((0, _modal.hideModal)(true));
                      _this2.freshData(_this2.props.type, _this2.props.page);
                  } else {
                      _this2.setState({
                          addErrorMsg: json.data.error_msg
                      });
                  }
              });
          }
      }, {
          key: 'showUpdate',
          value: function showUpdate(e) {
              var id = e.target.dataset.id;
              var index = e.target.dataset.index;
              var item = this.items[index] || {};
              var modalView = (0, _jsx3.default)(_UpdateModal2.default, {
                  type: this.props.type,
                  item: item,
                  id: id,
                  submit: this.update
              });
              this.props.dispatch((0, _modal.showModal)(modalView));
          }
      }, {
          key: 'selectChange',
          value: function selectChange(e) {
              var value = e.target.value;
              _history2.default.push('/feefloworder/' + value);
          }
      }, {
          key: 'OrderRepair',
          value: function OrderRepair(e) {
              var _this3 = this;
  
              var id = $(e.target).data('id');
              console.log(id);
              var queryObj = { id: id };
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.FEEFLOWCONFIG_ORDER_REPAIR,
                  method: 'POST',
                  queryObj: queryObj
              })).then(function () {
                  _this3.freshData(_this3.props.type, _this3.props.page);
              });
          }
      }, {
          key: 'exports',
          value: function exports() {
              var _this4 = this;
  
              var queryObj = this.state.searchObj;
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.FEEFLOWCONFIG_ORDER_EXPORT,
                  key: this.props.type,
                  queryObj: queryObj
              })).then(function (json) {
                  if (json.error_code === 0) {
                      var url = json.data.url;
                      window.open(url);
                  } else {
                      _this4.setState({
                          addErrorMsg: json.data.error_msg
                      });
                  }
              });
          }
      }, {
          key: 'pageSelect',
          value: function pageSelect(page) {
              this.setState({
                  page: page
              });
              this.freshData(this.props.type, page);
          }
      }, {
          key: 'reset',
          value: function reset() {
              this.setState({
                  searchObj: {}
              });
              this.freshData(this.props.type, this.props.page, {});
          }
      }, {
          key: 'render',
          value: function render() {
              var _this5 = this;
  
              var _props = this.props,
                  feeOrders = _props.feeOrders,
                  type = _props.type;
              var feeFlowConfigTypes = this.state.feeFlowConfigTypes;
  
              var key = type + '_' + this.state.page;
              var feeorderlist = feeOrders[key] || {};
              var items = feeorderlist.data || [];
              this.items = items;
              return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _keys2.default)(feeFlowConfigTypes).map(function (key) {
                  return (0, _jsx3.default)('label', {
                      className: 'c-input c-radio'
                  }, 'redio-' + key, (0, _jsx3.default)('input', {
                      checked: key === type,
                      name: 'main_type',
                      value: key,
                      type: 'radio',
                      onChange: _this5.selectChange
                  }), _ref, feeFlowConfigTypes[key]);
              })), _ref2, (0, _jsx3.default)('form', {
                  className: 'form-inline m-b-1',
                  onSubmit: this.search,
                  onReset: this.reset
              }, void 0, _ref3, _ref4, _ref5, _ref6, '\xA0', _ref7, '\xA0', _ref8, '\xA0', _ref9, '\xA0', _ref10, '\xA0', _ref11, '\xA0', _ref12, (0, _jsx3.default)('button', {
                  type: 'button',
                  onClick: this.exports,
                  className: 'btn btn-primary'
              }, void 0, '\u5BFC\u51FA'), _ref13), (0, _jsx3.default)(_tools.Card, {
                  title: '\u8BDD\u8D39\u6D41\u91CF\u8BA2\u5355\u5217\u8868'
              }, void 0, (0, _jsx3.default)('table', {
                  className: 'table m-b-0 table-bordered'
              }, void 0, _ref14, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
                  return (0, _jsx3.default)('tr', {}, item.id, (0, _jsx3.default)('td', {}, void 0, item.id), (0, _jsx3.default)('td', {}, void 0, item.order_id), (0, _jsx3.default)('td', {}, void 0, item.user_id), (0, _jsx3.default)('td', {}, void 0, item.name), (0, _jsx3.default)('td', {}, void 0, item.phone), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('feeFlowDebitStatus', item.debit_status)), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('feeFlowOrderStatus', item.order_status)), (0, _jsx3.default)('td', {}, void 0, (0, _omg2.getConfig)('feeFlowOrderRepairStatus', item.repair_status)), (0, _jsx3.default)('td', {}, void 0, item.amount), (0, _jsx3.default)('td', {}, void 0, item.amount_of), (0, _jsx3.default)('td', {}, void 0, item.amount_of), (0, _jsx3.default)('td', {}, void 0, item.created_at), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
                      className: 'btn btn-sm btn-success-outline',
                      'data-id': item.id,
                      'data-index': index,
                      onClick: _this5.showUpdate
                  }, void 0, '\u4FEE\u6539\u72B6\u6001'), (0, _jsx3.default)('button', {
                      className: 'btn btn-sm btn-success-outline',
                      'data-id': item.id,
                      'data-index': index,
                      onClick: _this5.OrderRepair
                  }, void 0, '\u8865\u5355')));
              })))), (0, _jsx3.default)(_tools.Pagination, {
                  currentPage: feeorderlist.current_page,
                  lastPage: feeorderlist.last_page,
                  onClick: this.pageSelect,
                  unurl: true
              }));
          }
      }]);
      return Feefloworder;
  }(_react.Component);
  
  Feefloworder.items = [];
  
  
  Feefloworder.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
      var omg = state.omg;
  
      var feeOrders = omg[_constants.FEEFLOWCONFIG_ORDER_LIST] || {};
      var exports = omg[_constants.FEEFLOWCONFIG_ORDER_EXPORT] || {};
      return {
          feeOrders: feeOrders,
          exports: exports
      };
  })(Feefloworder);

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('br', {});
  
  var _ref2 = (0, _jsx3.default)('br', {});
  
  var _ref3 = (0, _jsx3.default)('br', {});
  
  var _ref4 = (0, _jsx3.default)('br', {});
  
  var _ref5 = (0, _jsx3.default)('br', {});
  
  var _ref6 = (0, _jsx3.default)(_tools.Submit, {});
  
  var UpdateModal = function (_Component) {
    (0, _inherits3.default)(UpdateModal, _Component);
  
    function UpdateModal(props) {
      (0, _classCallCheck3.default)(this, UpdateModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (UpdateModal.__proto__ || (0, _getPrototypeOf2.default)(UpdateModal)).call(this, props));
  
      var feeFlowDebitStatus = (0, _omg.getConfig)('feeFlowDebitStatus');
      var feeFlowOrderStatus = (0, _omg.getConfig)('feeFlowOrderStatus');
      var item = _this.props.item || {};
      _this.state = {
        type: item.type || 1,
        feeFlowDebitStatus: feeFlowDebitStatus,
        feeFlowOrderStatus: feeFlowOrderStatus
      };
      return _this;
    }
  
    (0, _createClass3.default)(UpdateModal, [{
      key: 'render',
      value: function render() {
        var item = this.props.item || {};
        return (0, _jsx3.default)(_tools.Modal, {
          title: '\u4FEE\u6539\u72B6\u6001'
        }, void 0, _react2.default.createElement(
          'form',
          { method: 'post', ref: 'form', onSubmit: this.props.submit },
          (0, _jsx3.default)(_tools.Alert, {
            msg: this.state.errorMsg
          }),
          (0, _jsx3.default)('input', {
            type: 'hidden',
            name: 'id',
            defaultValue: item.id
          }),
          '\u5E8F\u53F7\uFF1A',
          item.id,
          _ref,
          '\u7528\u6237ID\uFF1A',
          item.user_id,
          _ref2,
          '\u8BA2\u5355ID\uFF1A',
          item.order_id,
          _ref3,
          '\u624B\u673A\u53F7\uFF1A',
          item.phone,
          _ref4,
          '\u5546\u54C1\u540D\u79F0\uFF1A',
          item.name,
          _ref5,
          (0, _jsx3.default)(_tools.Fieldset, {}, void 0, (0, _jsx3.default)(_tools.Select, {
            labelName: '\u6263\u6B3E\u72B6\u6001',
            name: 'debit_status',
            defaultValue: item.debit_status,
            options: this.state.feeFlowDebitStatus
          })),
          (0, _jsx3.default)(_tools.Fieldset, {}, void 0, (0, _jsx3.default)(_tools.Select, {
            labelName: '\u8BA2\u5355\u72B6\u6001',
            name: 'order_status',
            defaultValue: item.order_status,
            options: this.state.feeFlowOrderStatus
          })),
          _ref6
        ));
      }
    }]);
    return UpdateModal;
  }(_react.Component);
  
  UpdateModal.defaultProps = {
    dispatch: _react.PropTypes.func.isRequired,
    submit: _react.PropTypes.func.isRequired,
    item: {}
  };
  exports.default = (0, _reactRedux.connect)()(UpdateModal);

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _BbsTaskList = __webpack_require__(235);
  
  var _BbsTaskList2 = _interopRequireDefault(_BbsTaskList);
  
  var _BbsTask = __webpack_require__(239);
  
  var _BbsTask2 = _interopRequireDefault(_BbsTask);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
      path: '/Bbstask',
      children: [{
          path: '/',
          action: function action() {
              return "ok";
          }
      }, {
          path: '/:typeId',
          action: function action(context) {
              var typeId = +context.params.typeId;
              return (0, _jsx3.default)(_BbsTaskList2.default, {
                  typeId: typeId,
                  page: +context.query.page || 1
              });
          }
      }, {
          path: '/id/:taskId',
          action: function action(context) {
              var taskId = +context.params.taskId;
              return (0, _jsx3.default)(_BbsTask2.default, {
                  taskId: taskId
              });
          }
      }],
      action: function action(_ref) {
          var _this = this;
  
          var next = _ref.next,
              context = _ref.context;
          return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
              var component;
              return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                      switch (_context.prev = _context.next) {
                          case 0:
                              context.setTitle('运营后台 | 活动管理');
                              _context.next = 3;
                              return next();
  
                          case 3:
                              component = _context.sent;
                              return _context.abrupt('return', component);
  
                          case 5:
                          case 'end':
                              return _context.stop();
                      }
                  }
              }, _callee, _this);
          }))();
      }
  };

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _keys = __webpack_require__(57);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _defineProperty2 = __webpack_require__(127);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  var _history = __webpack_require__(60);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _omg2 = __webpack_require__(58);
  
  var _TaskGroupAddModal = __webpack_require__(236);
  
  var _TaskGroupAddModal2 = _interopRequireDefault(_TaskGroupAddModal);
  
  var _TaskGroupUpdateModal = __webpack_require__(237);
  
  var _TaskGroupUpdateModal2 = _interopRequireDefault(_TaskGroupUpdateModal);
  
  var _TaskAddModal = __webpack_require__(238);
  
  var _TaskAddModal2 = _interopRequireDefault(_TaskAddModal);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('i', {
      className: 'fa fa-plus'
  }, void 0, '\u4EFB\u52A1');
  
  var _ref2 = (0, _jsx3.default)('hr', {});
  
  var _ref3 = (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '\u4EFB\u52A1\u540D\u79F0'), (0, _jsx3.default)('th', {}, void 0, 'ID'), (0, _jsx3.default)('th', {}, void 0, '\u4EFB\u52A1\u522B\u540D'), (0, _jsx3.default)('th', {}, void 0, 'TIP'), (0, _jsx3.default)('th', {}, void 0, '\u521B\u5EFA\u65F6\u95F4'), (0, _jsx3.default)('th', {}, void 0, '\u72B6\u6001'), (0, _jsx3.default)('th', {}, void 0, '\u64CD\u4F5C')));
  
  var _ref4 = (0, _jsx3.default)('td', {}, void 0, '\u2014');
  
  var _ref5 = (0, _jsx3.default)('td', {}, void 0, '\u2014');
  
  var _ref6 = (0, _jsx3.default)('td', {}, void 0, '\u2014');
  
  var _ref7 = (0, _jsx3.default)('td', {}, void 0, '\u2014');
  
  var BbsTaskList = function (_Component) {
      (0, _inherits3.default)(BbsTaskList, _Component);
  
      function BbsTaskList(props) {
          (0, _classCallCheck3.default)(this, BbsTaskList);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (BbsTaskList.__proto__ || (0, _getPrototypeOf2.default)(BbsTaskList)).call(this, props));
  
          _this.getGroupTaskList = _this.getGroupTaskList.bind(_this);
          _this.freshGroupTaskList = _this.freshGroupTaskList.bind(_this);
          _this.componentDidMount = _this.componentDidMount.bind(_this);
          _this.groupDelete = _this.groupDelete.bind(_this);
          _this.groupUpdate = _this.groupUpdate.bind(_this);
          _this.taskOffline = _this.taskOffline.bind(_this);
          _this.taskOnline = _this.taskOnline.bind(_this);
          _this.taskDelete = _this.taskDelete.bind(_this);
          _this.groupClick = _this.groupClick.bind(_this);
          _this.saveTask = _this.saveTask.bind(_this);
          _this.showTaskAddModal = _this.showTaskAddModal.bind(_this);
          _this.freshTaskGroupInfo = _this.freshTaskGroupInfo.bind(_this);
          _this.componentWillReceiveProps = _this.componentWillReceiveProps.bind(_this);
          _this.typeChange = _this.typeChange.bind(_this);
          _this.showModal = _this.showModal.bind(_this);
          var taskTypes = (0, _omg2.getConfig)('taskTypes');
  
          _this.state = {
              taskTypes: taskTypes,
              group: {}
          };
          return _this;
      }
  
      (0, _createClass3.default)(BbsTaskList, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.getGroupTaskList(this.props.typeId, this.props.page);
              this.getTaskTriggerTypes();
          }
      }, {
          key: 'freshGroupTaskList',
          value: function freshGroupTaskList() {
              this.getGroupTaskList(this.props.typeId, this.props.page);
          }
      }, {
          key: 'getTaskTriggerTypes',
          value: function getTaskTriggerTypes() {
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.BBS_TASK_TRIGGER_TYPES
              }));
          }
      }, {
          key: 'showModal',
          value: function showModal() {
              this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_TaskGroupAddModal2.default, {
                  callback: this.freshGroupTaskList,
                  typeId: this.props.typeId
              })));
          }
      }, {
          key: 'typeChange',
          value: function typeChange(e) {
              var value = e.target.value;
              _history2.default.push('/bbstask/' + value);
          }
  
          // 刷新活动信息
  
      }, {
          key: 'freshTaskGroupInfo',
          value: function freshTaskGroupInfo(id) {
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.BBS_GROUP_TASK_INFO,
                  suffix: '/' + id,
                  key: id
              }));
          }
      }, {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
              if (nextProps.typeId !== this.props.typeId || nextProps.page !== this.props.page) {
                  this.getGroupTaskList(nextProps.typeId, nextProps.page);
              }
          }
      }, {
          key: 'saveTask',
          value: function saveTask(e) {
              var _this2 = this;
  
              e.preventDefault();
              var formData = new FormData(e.target);
              this.props.dispatch((0, _omg.commonFetch)(_constants.BBS_TASK_DT_ADD, 'POST', formData)).then(function (json) {
                  if (json.error_code === 0) {
                      _this2.props.dispatch((0, _modal.hideModal)());
                      _history2.default.push('/bbstask/id/' + json.data.id);
                  }
              });
          }
      }, {
          key: 'getGroupTaskList',
          value: function getGroupTaskList(typeId, page) {
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.BBS_GROUP_TASK_LIST,
                  queryObj: {
                      'data[filter][type_id]': typeId,
                      page: page
                  },
                  key: typeId + '_' + page
              }));
          }
      }, {
          key: 'showTaskAddModal',
          value: function showTaskAddModal(e) {
              var id = +$(e.target).data('id');
              var modalView = (0, _jsx3.default)(_TaskAddModal2.default, {
                  submit: this.saveTask,
                  types: this.props.taskTriggerTypes,
                  groupId: id
              });
              this.props.dispatch((0, _modal.showModal)(modalView));
          }
      }, {
          key: 'taskDelete',
          value: function taskDelete(e) {
              var _this3 = this;
  
              var id = $(e.target).data('id');
              if (!confirm('确定删除ID:' + id + '的任务吗？')) {
                  return;
              }
              var formData = new FormData();
              formData.append('id', id);
              this.props.dispatch((0, _omg.commonFetch)(_constants.BBS_TASK_DEL, 'POST', formData)).then(function () {
                  return _this3.freshGroupTaskList();
              });
          }
      }, {
          key: 'taskOnline',
          value: function taskOnline(e) {
              var _this4 = this;
  
              var id = $(e.target).data('id');
              var formData = new FormData();
              formData.append('id', id);
              this.props.dispatch((0, _omg.commonFetch)(_constants.BBS_TASK_ONLINE, 'POST', formData)).then(function () {
                  return _this4.freshGroupTaskList();
              });
          }
      }, {
          key: 'taskOffline',
          value: function taskOffline(e) {
              var _this5 = this;
  
              var id = $(e.target).data('id');
              var formData = new FormData();
              formData.append('id', id);
              this.props.dispatch((0, _omg.commonFetch)(_constants.BBS_TASK_OFFLINE, 'POST', formData)).then(function () {
                  return _this5.freshGroupTaskList();
              });
          }
      }, {
          key: 'groupDelete',
          value: function groupDelete(e) {
              var _this6 = this;
  
              var id = $(e.target).data('id');
              if (!confirm('确定删除ID:' + id + '的任务组及子任务吗？')) {
                  return;
              }
              var formData = new FormData();
              formData.append('id', id);
              this.props.dispatch((0, _omg.commonFetch)(_constants.BBS_TASK_DT_DEL, 'POST', formData)).then(function () {
                  return _this6.freshGroupTaskList();
              });
          }
      }, {
          key: 'groupUpdate',
          value: function groupUpdate(e) {
              var index = $(e.target).data('index');
              var item = this.taskGroupInfo[index];
              this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_TaskGroupUpdateModal2.default, {
                  item: item,
                  callback: this.freshGroupTaskList
              })));
          }
      }, {
          key: 'groupClick',
          value: function groupClick(e) {
              var id = $(e.target).data('id');
              if (this.state.group[id]) {
                  this.setState({
                      group: (0, _assign2.default)({}, this.state.group, (0, _defineProperty3.default)({}, id, false))
                  });
              } else {
                  this.setState({
                      group: (0, _assign2.default)({}, this.state.group, (0, _defineProperty3.default)({}, id, true))
                  });
              }
          }
      }, {
          key: 'render',
          value: function render() {
              var _this7 = this;
  
              var groupTaskList = this.props.groupTaskList || {};
              var key = this.props.typeId + '_' + this.props.page;
              var groups = groupTaskList[key] || {};
              var items = groups.data || [];
              this.taskTriggerTypes = this.props.taskTriggerTypes || {};
              this.taskGroupInfo = items;
              var addBtn = (0, _jsx3.default)('button', {
                  type: 'button',
                  onClick: this.showModal,
                  className: 'btn btn-sm btn-info action-add pull-right'
              }, void 0, _ref);
              return (0, _jsx3.default)('div', {}, void 0, (0, _keys2.default)(this.state.taskTypes).map(function (key) {
                  return (0, _jsx3.default)(_tools.Radio, {
                      name: 'activity-type',
                      checked: +key === _this7.props.typeId,
                      labelName: _this7.state.taskTypes[key],
                      value: key,
                      onChange: _this7.typeChange
                  }, key);
              }), _ref2, (0, _jsx3.default)(_tools.Card, {
                  title: '\u4EFB\u52A1\u5217\u8868',
                  btn: addBtn
              }, void 0, (0, _jsx3.default)('table', {
                  className: 'table m-b-0 table-hover'
              }, void 0, _ref3, (0, _jsx3.default)('tbody', {}, void 0, items.map(function (item, index) {
                  var trArr = [(0, _jsx3.default)('tr', {
                      style: { 'fontWeight': 'bold' },
                      title: item.name
                  }, 'group-' + item.id, (0, _jsx3.default)('td', {
                      onClick: _this7.groupClick,
                      'data-id': item.id
                  }, void 0, (0, _jsx3.default)('i', {
                      'data-id': item.id,
                      hidden: _this7.state.group[item.id] !== false,
                      className: 'fa fa-plus-square-o'
                  }), (0, _jsx3.default)('i', {
                      'data-id': item.id,
                      hidden: _this7.state.group[item.id] === false,
                      className: 'fa fa-minus-square-o'
                  }), item.name, ' (', item.tasks.length, ')'), (0, _jsx3.default)('td', {}, void 0, item.id), _ref4, (0, _jsx3.default)('td', {}, void 0, item.tip), _ref5, _ref6, (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
                      'data-id': item.id,
                      onClick: _this7.showTaskAddModal,
                      className: 'btn btn-sm btn-info-outline'
                  }, void 0, (0, _jsx3.default)('i', {
                      'data-id': item.id,
                      className: 'fa fa-plus'
                  }), '\u5B50\u4EFB\u52A1'), (0, _jsx3.default)('button', {
                      hidden: item.tasks.length,
                      'data-id': item.id,
                      'data-index': index,
                      onClick: _this7.groupUpdate,
                      className: 'btn btn-sm btn-warning-outline'
                  }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
                      hidden: item.tasks.length,
                      'data-id': item.id,
                      onClick: _this7.groupDelete,
                      className: 'btn btn-sm btn-danger-outline'
                  }, void 0, '\u5220\u9664')))];
                  var children = item.tasks.map(function (task) {
                      return (0, _jsx3.default)('tr', {
                          hidden: _this7.state.group[item.id] === false,
                          title: task.name
                      }, 'activity' + task.id, (0, _jsx3.default)('td', {}, void 0, '\xA0\xA0', task.name), (0, _jsx3.default)('td', {}, void 0, task.id ? task.id : '—'), (0, _jsx3.default)('td', {}, void 0, task.alias_name ? task.alias_name : '—'), _ref7, (0, _jsx3.default)('td', {}, void 0, task.created_at), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('span', {
                          className: 'text-success',
                          hidden: !+task.enable
                      }, void 0, '\u4E0A\u7EBF'), (0, _jsx3.default)('span', {
                          className: 'text-warning',
                          hidden: +task.enable
                      }, void 0, '\u4E0B\u7EBF')), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('button', {
                          'data-id': task.id,
                          hidden: !+task.enable,
                          onClick: _this7.taskOffline,
                          className: 'btn btn-sm btn-warning-outline'
                      }, void 0, '\u4E0B\u7EBF'), (0, _jsx3.default)('button', {
                          'data-id': task.id,
                          hidden: +task.enable,
                          onClick: _this7.taskOnline,
                          className: 'btn btn-sm btn-success-outline'
                      }, void 0, '\u4E0A\u7EBF'), (0, _jsx3.default)(_tools.Link, {
                          className: 'btn btn-sm btn-info-outline',
                          to: '/bbstask/id/' + task.id
                      }, void 0, '\u7F16\u8F91'), (0, _jsx3.default)('button', {
                          hidden: task.enable,
                          'data-id': task.id,
                          onClick: _this7.taskDelete,
                          className: 'btn btn-sm btn-danger-outline'
                      }, void 0, '\u5220\u9664')));
                  });
                  trArr.push(children);
                  return trArr;
              })))));
          }
      }]);
      return BbsTaskList;
  }(_react.Component);
  
  BbsTaskList.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
      var omg = state.omg;
  
      var groupTaskList = omg[_constants.BBS_GROUP_TASK_LIST] || {};
      var groupTaskInfo = omg[_constants.BBS_GROUP_TASK_INFO] || {};
      var taskTriggerTypes = omg[_constants.BBS_TASK_TRIGGER_TYPES] || {};
  
      return {
          groupTaskList: groupTaskList,
          groupTaskInfo: groupTaskInfo,
          taskTriggerTypes: taskTriggerTypes
      };
  })(BbsTaskList);

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _Alert = __webpack_require__(74);
  
  var _Alert2 = _interopRequireDefault(_Alert);
  
  var _Input = __webpack_require__(76);
  
  var _Input2 = _interopRequireDefault(_Input);
  
  var _ModalHeader = __webpack_require__(78);
  
  var _ModalHeader2 = _interopRequireDefault(_ModalHeader);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref2 = (0, _jsx3.default)(_ModalHeader2.default, {
    title: '\u6DFB\u52A0\u4EFB\u52A1'
  });
  
  var _ref3 = (0, _jsx3.default)(_Input2.default, {
    labelName: '\u4EFB\u52A1\u540D\u79F0',
    name: 'name'
  });
  
  var _ref4 = (0, _jsx3.default)(_Input2.default, {
    labelName: '\u4EFB\u52A1\u522B\u540D',
    name: 'alias_name'
  });
  
  var _ref5 = (0, _jsx3.default)('div', {
    className: 'form-group row'
  }, void 0, (0, _jsx3.default)('label', {
    className: 'col-sm-4 form-control-label text-xs-right'
  }, void 0, 'TIP:'), (0, _jsx3.default)('div', {
    className: 'col-sm-8 col-md-6'
  }, void 0, (0, _jsx3.default)('textarea', {
    name: 'tip',
    className: 'form-control'
  })));
  
  var _ref6 = (0, _jsx3.default)('div', {
    className: 'form-group row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-sm-offset-4 col-sm-8'
  }, void 0, (0, _jsx3.default)('button', {
    type: 'submit',
    className: 'btn btn-primary'
  }, void 0, '\u4FDD\u5B58')));
  
  var TaskGroupAddModal = function (_Component) {
    (0, _inherits3.default)(TaskGroupAddModal, _Component);
  
    function TaskGroupAddModal(props) {
      (0, _classCallCheck3.default)(this, TaskGroupAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (TaskGroupAddModal.__proto__ || (0, _getPrototypeOf2.default)(TaskGroupAddModal)).call(this, props));
  
      _this.onSubmit = _this.onSubmit.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(TaskGroupAddModal, [{
      key: 'onSubmit',
      value: function onSubmit(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.commonFetch)(_constants.BBS_GROUP_TASK_ADD, 'POST', formData)).then(function (_ref) {
          var error_code = _ref.error_code;
  
          if (error_code === 0) {
            _this2.props.dispatch((0, _modal.hideModal)());
            _this2.props.callback();
          } else {
            _this2.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {
          className: 'modal-dialog'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'modal-content'
        }, void 0, _ref2, (0, _jsx3.default)('div', {
          className: 'modal-body'
        }, void 0, (0, _jsx3.default)('form', {
          id: 'add-activity-form',
          method: 'post',
          onSubmit: this.onSubmit
        }, void 0, (0, _jsx3.default)(_Alert2.default, {
          msg: this.props.errorMsg
        }), _ref3, _ref4, (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'type_id',
          value: this.props.typeId
        }), _ref5, _ref6))));
      }
    }]);
    return TaskGroupAddModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(TaskGroupAddModal);

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _Alert = __webpack_require__(74);
  
  var _Alert2 = _interopRequireDefault(_Alert);
  
  var _Input = __webpack_require__(76);
  
  var _Input2 = _interopRequireDefault(_Input);
  
  var _ModalHeader = __webpack_require__(78);
  
  var _ModalHeader2 = _interopRequireDefault(_ModalHeader);
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref2 = (0, _jsx3.default)(_ModalHeader2.default, {
    title: '\u7F16\u8F91\u4EFB\u52A1'
  });
  
  var _ref3 = (0, _jsx3.default)('label', {
    className: 'col-sm-4 form-control-label text-xs-right'
  }, void 0, 'TIP:');
  
  var _ref4 = (0, _jsx3.default)('div', {
    className: 'form-group row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-sm-offset-4 col-sm-8'
  }, void 0, (0, _jsx3.default)('button', {
    type: 'submit',
    className: 'btn btn-primary'
  }, void 0, '\u4FDD\u5B58')));
  
  var TaskGroupUpdateModal = function (_Component) {
    (0, _inherits3.default)(TaskGroupUpdateModal, _Component);
  
    function TaskGroupUpdateModal(props) {
      (0, _classCallCheck3.default)(this, TaskGroupUpdateModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (TaskGroupUpdateModal.__proto__ || (0, _getPrototypeOf2.default)(TaskGroupUpdateModal)).call(this, props));
  
      _this.onSubmit = _this.onSubmit.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(TaskGroupUpdateModal, [{
      key: 'onSubmit',
      value: function onSubmit(e) {
        var _this2 = this;
  
        e.preventDefault();
        var formData = new FormData(e.target);
        this.props.dispatch((0, _omg.commonFetch)(_constants.BBS_GROUP_TASK_PUT, 'POST', formData)).then(function (_ref) {
          var error_code = _ref.error_code;
  
          if (error_code === 0) {
            _this2.props.dispatch((0, _modal.hideModal)());
            _this2.props.callback();
          } else {
            _this2.setState({
              errorMsg: json.data.error_msg
            });
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var item = this.props.item || {};
        return (0, _jsx3.default)('div', {
          className: 'modal-dialog'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'modal-content'
        }, void 0, _ref2, (0, _jsx3.default)('div', {
          className: 'modal-body'
        }, void 0, (0, _jsx3.default)('form', {
          id: 'add-activity-form',
          method: 'post',
          onSubmit: this.onSubmit
        }, void 0, (0, _jsx3.default)(_Alert2.default, {
          msg: this.props.errorMsg
        }), (0, _jsx3.default)(_Input2.default, {
          labelName: '\u4EFB\u52A1\u540D\u79F0',
          name: 'name',
          defaultValue: item.name
        }), (0, _jsx3.default)(_Input2.default, {
          labelName: '\u4EFB\u52A1\u522B\u540D',
          name: 'alias_name',
          defaultValue: item.alias_name
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'id',
          value: item.id
        }), (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, _ref3, (0, _jsx3.default)('div', {
          className: 'col-sm-8 col-md-6'
        }, void 0, (0, _jsx3.default)('textarea', {
          name: 'tip',
          className: 'form-control',
          defaultValue: item.tip
        }))), _ref4))));
      }
    }]);
    return TaskGroupUpdateModal;
  }(_react.Component);
  
  exports.default = (0, _reactRedux.connect)()(TaskGroupUpdateModal);

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _tools = __webpack_require__(73);
  
  var _omg = __webpack_require__(58);
  
  var _constants = __webpack_require__(59);
  
  var _omg2 = __webpack_require__(56);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('label', {
    className: 'col-sm-4 text-xs-right'
  }, void 0, '\u8BF4\u660E:');
  
  var _ref2 = (0, _jsx3.default)(_tools.Submit, {});
  
  var TaskAddModal = function (_Component) {
    (0, _inherits3.default)(TaskAddModal, _Component);
  
    function TaskAddModal(props) {
      (0, _classCallCheck3.default)(this, TaskAddModal);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (TaskAddModal.__proto__ || (0, _getPrototypeOf2.default)(TaskAddModal)).call(this, props));
  
      var frequencyTypes = (0, _omg.getConfig)('frequencyTypes');
      var awardTypes = (0, _omg.getConfig)('awardTypes');
      _this.state = {
        frequencyTypes: frequencyTypes,
        awardTypes: awardTypes
      };
      return _this;
    }
  
    (0, _createClass3.default)(TaskAddModal, [{
      key: 'render',
      value: function render() {
        var item = this.props.item || {};
        var types = this.props.types || {};
        return (0, _jsx3.default)(_tools.Modal, {
          title: this.props.update ? '编辑子任务' : '添加子任务'
        }, void 0, (0, _jsx3.default)('form', {
          method: 'post',
          onSubmit: this.props.submit
        }, void 0, (0, _jsx3.default)(_tools.Alert, {
          msg: this.props.errorMsg
        }), (0, _jsx3.default)('input', {
          type: 'hidden',
          name: 'id',
          value: item.id
        }), (0, _jsx3.default)('input', {
          name: 'group_id',
          type: 'hidden',
          value: item.group_id || this.props.groupId,
          className: 'form-control'
        }), (0, _jsx3.default)(_tools.Input, {
          required: true,
          labelName: '\u4EFB\u52A1\u540D\u79F0',
          name: 'name',
          defaultValue: item.name
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u4EFB\u52A1\u6807\u8BC6',
          name: 'task_mark',
          placeholder: '\u552F\u4E00',
          defaultValue: item.task_mark
        }), (0, _jsx3.default)(_tools.Select, {
          labelName: '\u89E6\u53D1\u7C7B\u578B',
          name: 'trigger_type',
          options: types,
          defaultValue: item.trigger_type
        }), (0, _jsx3.default)(_tools.Input, {
          name: 'number',
          labelName: '\u89E6\u53D1\u6761\u4EF6',
          defaultValue: item.number
        }), (0, _jsx3.default)(_tools.Select, {
          labelName: '\u5956\u54C1\u7C7B\u578B',
          name: 'award_type',
          options: this.state.awardTypes,
          defaultValue: item.award_type
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u5956\u54C1\u6570\u91CF',
          name: 'award',
          placeholder: '\u5956\u54C1\u6570\u91CF',
          defaultValue: item.award
        }), (0, _jsx3.default)(_tools.Select, {
          labelName: '\u53D1\u5956\u9891\u6B21',
          name: 'frequency',
          options: this.state.frequencyTypes,
          defaultValue: item.frequency
        }), (0, _jsx3.default)(_tools.Input, {
          labelName: '\u5956\u54C1\u6709\u6548\u671F',
          name: 'exp_day',
          placeholder: '\u5956\u54C1\u6709\u6548\u671F(\u5929)',
          defaultValue: item.exp_day
        }), (0, _jsx3.default)('div', {
          className: 'form-group row'
        }, void 0, _ref, (0, _jsx3.default)('div', {
          className: 'col-sm-6'
        }, void 0, (0, _jsx3.default)('textarea', {
          name: 'remark',
          className: 'form-control',
          defaultValue: item.remark
        }))), _ref2));
      }
    }]);
    return TaskAddModal;
  }(_react.Component);
  
  TaskAddModal.defaultProps = {
    errorMsg: ''
  };
  
  exports.default = (0, _reactRedux.connect)(function (state) {
    var omg = state.omg;
  
    var errorMsg = omg.errorMsg[_constants.BBS_TASK_DT_ADD] || '';
    return {
      errorMsg: errorMsg
    };
  })(TaskAddModal);

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(44);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(45);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(46);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(48);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(52);
  
  var _omg = __webpack_require__(56);
  
  var _modal = __webpack_require__(70);
  
  var _constants = __webpack_require__(59);
  
  var _tools = __webpack_require__(73);
  
  var _TaskAddModal = __webpack_require__(238);
  
  var _TaskAddModal2 = _interopRequireDefault(_TaskAddModal);
  
  var _omg2 = __webpack_require__(58);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('i', {
      className: 'fa fa-edit'
  }, void 0, '\u7F16\u8F91');
  
  var _ref2 = (0, _jsx3.default)('li', {
      className: 'breadcrumb-item'
  }, void 0, (0, _jsx3.default)(_tools.Link, {
      to: '/'
  }, void 0, '\u9996\u9875'));
  
  var _ref3 = (0, _jsx3.default)('li', {
      className: 'breadcrumb-item'
  }, void 0, (0, _jsx3.default)(_tools.Link, {
      to: '/bbstask/1'
  }, void 0, '\u4EFB\u52A1\u5217\u8868'));
  
  var _ref4 = (0, _jsx3.default)('div', {
      className: 'm-b-1 clearfix'
  });
  
  var BbsTask = function (_Component) {
      (0, _inherits3.default)(BbsTask, _Component);
  
      function BbsTask(props) {
          (0, _classCallCheck3.default)(this, BbsTask);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (BbsTask.__proto__ || (0, _getPrototypeOf2.default)(BbsTask)).call(this, props));
  
          _this.showUpdateTask = _this.showUpdateTask.bind(_this);
          _this.freshTaskInfo = _this.freshTaskInfo.bind(_this);
          _this.getTaskTriggerTypes = _this.getTaskTriggerTypes.bind(_this);
          _this.updateTask = _this.updateTask.bind(_this);
  
          var awardTypes = (0, _omg2.getConfig)('awardTypes');
          var frequencyTypes = (0, _omg2.getConfig)('frequencyTypes');
  
          _this.state = {
              awardTypes: awardTypes,
              frequencyTypes: frequencyTypes,
              addAwardErrorMsg: ''
          };
          return _this;
      }
  
      (0, _createClass3.default)(BbsTask, [{
          key: 'getTaskTriggerTypes',
          value: function getTaskTriggerTypes() {
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.BBS_TASK_TRIGGER_TYPES
              }));
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.freshTaskInfo();
              this.getTaskTriggerTypes();
          }
          // 刷新活动信息
  
      }, {
          key: 'freshTaskInfo',
          value: function freshTaskInfo() {
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.BBS_TASK_INFO,
                  suffix: '/' + this.props.taskId,
                  key: this.props.taskId
              }));
          }
  
          // 更新活动
  
      }, {
          key: 'updateTask',
          value: function updateTask(e) {
              var _this2 = this;
  
              e.preventDefault();
              var formData = new FormData(e.target);
              this.props.dispatch((0, _omg.fetchAction)({
                  type: _constants.BBS_TASK_DT_UPDATE,
                  method: 'POST',
                  formData: formData
              })).then(function (json) {
                  if (json.error_code === 0) {
                      _this2.props.dispatch((0, _modal.hideModal)(true));
                      _this2.freshTaskInfo();
                  }
              });
          }
          // 更新活动
  
      }, {
          key: 'showUpdateTask',
          value: function showUpdateTask() {
              if (!this.task || !this.task.id) {
                  alert('获取任务详情失败');
                  return;
              }
              this.props.dispatch((0, _modal.showModal)((0, _jsx3.default)(_TaskAddModal2.default, {
                  item: this.task,
                  types: this.taskTriggerTypes,
                  update: true,
                  submit: this.updateTask
              })));
          }
      }, {
          key: 'render',
          value: function render() {
              var task = this.props.tasks[this.props.taskId] || {};
              this.task = task;
  
              this.taskTriggerTypes = this.props.taskTriggerTypes || {};
              var updateTaskyBtn = (0, _jsx3.default)('button', {
                  onClick: this.showUpdateTask,
                  className: 'btn btn-sm btn-info pull-right'
              }, void 0, _ref);
  
              return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('ol', {
                  className: 'breadcrumb'
              }, void 0, _ref2, _ref3, (0, _jsx3.default)('li', {
                  className: 'breadcrumb-item active'
              }, void 0, task.name || '—')), (0, _jsx3.default)(_tools.Card, {
                  title: '\u4EFB\u52A1\u8BE6\u60C5',
                  btn: updateTaskyBtn
              }, void 0, (0, _jsx3.default)(_tools.Text, {
                  name: '\u4EFB\u52A1\u540D\u79F0',
                  value: task.name
              }), (0, _jsx3.default)(_tools.Text, {
                  name: '\u4EFB\u52A1\u6807\u8BC6',
                  value: task.task_mark || '—'
              }), (0, _jsx3.default)(_tools.Text, {
                  name: 'ID',
                  value: task.id
              }), (0, _jsx3.default)(_tools.Text, {
                  name: '\u72B6\u6001',
                  value: +task.enable ? '上线' : '下线'
              }), (0, _jsx3.default)(_tools.Text, {
                  name: '\u89E6\u53D1\u7C7B\u578B',
                  value: this.taskTriggerTypes[task.trigger_type]
              }), (0, _jsx3.default)(_tools.Text, {
                  name: '\u89E6\u53D1\u6761\u4EF6',
                  value: task.number
              }), (0, _jsx3.default)(_tools.Text, {
                  name: '\u5956\u54C1\u7C7B\u578B',
                  value: this.state.awardTypes[task.award_type]
              }), (0, _jsx3.default)(_tools.Text, {
                  name: '\u5956\u54C1\u6570\u91CF',
                  value: task.award
              }), (0, _jsx3.default)(_tools.Text, {
                  name: '\u53D1\u5956\u9891\u6B21',
                  value: this.state.frequencyTypes[task.frequency]
              }), (0, _jsx3.default)(_tools.Text, {
                  name: '\u5956\u54C1\u6709\u6548\u671F',
                  value: task.exp_day
              }), (0, _jsx3.default)(_tools.Text, {
                  name: '\u6D3B\u52A8\u8BF4\u660E',
                  value: task.remark || '—'
              }), _ref4));
          }
      }]);
      return BbsTask;
  }(_react.Component);
  
  BbsTask.defaultProps = {};
  
  exports.default = (0, _reactRedux.connect)(function (state) {
      var omg = state.omg;
  
      var tasks = omg[_constants.BBS_TASK_INFO] || {};
      var taskTriggerTypes = omg[_constants.BBS_TASK_TRIGGER_TYPES] || {};
      return {
          tasks: tasks,
          taskTriggerTypes: taskTriggerTypes
      };
  })(BbsTask);

/***/ }),
/* 240 */
/***/ (function(module, exports) {

  module.exports = require("./assets");

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = configureStore;
  
  var _redux = __webpack_require__(242);
  
  var _reduxThunk = __webpack_require__(243);
  
  var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
  
  var _reducers = __webpack_require__(244);
  
  var _reducers2 = _interopRequireDefault(_reducers);
  
  var _createHelpers = __webpack_require__(248);
  
  var _createHelpers2 = _interopRequireDefault(_createHelpers);
  
  var _logger = __webpack_require__(249);
  
  var _logger2 = _interopRequireDefault(_logger);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function configureStore(initialState, helpersConfig) {
    var helpers = (0, _createHelpers2.default)(helpersConfig);
    var middleware = [_reduxThunk2.default.withExtraArgument(helpers)];
  
    var enhancer = void 0;
  
    if (false) {
      middleware.push((0, _logger2.default)());
  
      // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
      var devToolsExtension = function devToolsExtension(f) {
        return f;
      };
      if (process.env.BROWSER && window.devToolsExtension) {
        devToolsExtension = window.devToolsExtension();
      }
  
      enhancer = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), devToolsExtension);
    } else {
      enhancer = _redux.applyMiddleware.apply(undefined, middleware);
    }
  
    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
  
    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (false) {
      module.hot.accept('../reducers', function () {
        return store.replaceReducer(require('../reducers').default);
      } // eslint-disable-line global-require
      );
    }
  
    return store;
  }

/***/ }),
/* 242 */
/***/ (function(module, exports) {

  module.exports = require("redux");

/***/ }),
/* 243 */
/***/ (function(module, exports) {

  module.exports = require("redux-thunk");

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _redux = __webpack_require__(242);
  
  var _runtime = __webpack_require__(245);
  
  var _runtime2 = _interopRequireDefault(_runtime);
  
  var _omg = __webpack_require__(246);
  
  var _omg2 = _interopRequireDefault(_omg);
  
  var _modal = __webpack_require__(247);
  
  var _modal2 = _interopRequireDefault(_modal);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = (0, _redux.combineReducers)({
    omg: _omg2.default,
    modal: _modal2.default,
    runtime: _runtime2.default
  });

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(127);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _extends4 = __webpack_require__(66);
  
  var _extends5 = _interopRequireDefault(_extends4);
  
  exports.default = runtime;
  
  var _constants = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function runtime() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];
  
    switch (action.type) {
      case _constants.SET_RUNTIME_VARIABLE:
        return (0, _extends5.default)({}, state, (0, _defineProperty3.default)({}, action.payload.name, action.payload.value));
      case _constants.SET_HOST:
        return (0, _extends5.default)({}, state, (0, _defineProperty3.default)({}, action.payload.name, action.payload.value));
      default:
        return state;
    }
  }

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(127);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  exports.default = omg;
  
  var _index = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function initState() {
    return {
      initialNow: Date.now(),
      isFetching: {},
      errorMsg: {},
      logs: [],
      lastAction: {}
    };
  }
  function omg() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];
  
    if (state === null) {
      return initState();
    }
    var nextState = {};
    if (action.status) {
      var logs = state.logs;
      nextState.logs = logs;
      nextState.statues = action.status;
      nextState.lastAction = action;
    }
    switch (action.status) {
      case _index.FETCH_REQUEST:
        {
          nextState.isFetching = (0, _assign2.default)({}, state.isFetching, (0, _defineProperty3.default)({}, action.type, true));
          nextState.lastRequest = action.type;
          return (0, _assign2.default)({}, state, nextState);
        }
      case _index.FETCH_SUCCESS:
        {
          // 根据type特殊处理
          switch (action.type) {
            case _index.ACCOUNT_LOGOUT:
              return initState();
            default:
          }
          nextState.isFetching = (0, _assign2.default)({}, state.isFetching, (0, _defineProperty3.default)({}, action.type, false));
          nextState.errorMsg = (0, _assign2.default)({}, state.error_msg, (0, _defineProperty3.default)({}, action.type, ''));
          if (action.key !== false) {
            if (typeof state[action.type] === 'undefined') {
              nextState[action.type] = (0, _defineProperty3.default)({}, action.key, action.data);
            } else {
              nextState[action.type] = (0, _assign2.default)({}, state[action.type], (0, _defineProperty3.default)({}, action.key, action.data));
            }
          } else {
            nextState[action.type] = action.data;
          }
          nextState.status = 0;
  
          return (0, _assign2.default)({}, state, nextState);
        }
      case _index.FETCH_ERROR:
        {
          // 根据code特殊处理
          switch (action.code) {
            case '11002':
              // 需重新登录
              return initState();
            default:
          }
          nextState.isFetching = (0, _assign2.default)({}, state.isFetching, (0, _defineProperty3.default)({}, action.type, false));
          nextState.errorMsg = (0, _assign2.default)({}, state.error_msg, (0, _defineProperty3.default)({}, action.type, action.msg));
          nextState.lastErrorMsg = action.msg;
          nextState.status = 2;
          return (0, _assign2.default)({}, state, nextState);
        }
      default:
        {
          return state;
        }
    }
  }

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  exports.default = modal;
  
  var _index = __webpack_require__(59);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function modal() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];
  
    if (state === null) {
      return {
        showStatus: false,
        title: '确认',
        initialNow: Date.now(),
        modalView: {}
      };
    }
    switch (action.type) {
      case _index.MODAL_SHOW:
        {
          return (0, _assign2.default)({}, state, {
            showStatus: true,
            modalView: action.modalView,
            data: action.data
          });
        }
      case _index.MODAL_HIDE:
        {
          if (action.isClear) {
            return (0, _assign2.default)({}, state, {
              showStatus: false,
              modalView: false
            });
          }
  
          return (0, _assign2.default)({}, state, {
            showStatus: false
          });
        }
      default:
        {
          return state;
        }
    }
  }

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(66);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _stringify = __webpack_require__(15);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(3);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  exports.default = createHelpers;
  
  var _fetch = __webpack_require__(39);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function createGraphqlRequest(fetchKnowingCookie) {
    return function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(query, variables) {
        var fetchConfig, resp;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetchConfig = {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({ query: query, variables: variables }),
                  credentials: 'include'
                };
                _context.next = 3;
                return fetchKnowingCookie('/graphql', fetchConfig);
  
              case 3:
                resp = _context.sent;
  
                if (!(resp.status !== 200)) {
                  _context.next = 6;
                  break;
                }
  
                throw new Error(resp.statusText);
  
              case 6:
                _context.next = 8;
                return resp.json();
  
              case 8:
                return _context.abrupt('return', _context.sent);
  
              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
  
      function graphqlRequest(_x, _x2) {
        return _ref.apply(this, arguments);
      }
  
      return graphqlRequest;
    }();
  }
  
  function createFetchKnowingCookie(_ref2) {
    var cookie = _ref2.cookie;
  
    if (true) {
      return function (url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        var isLocalUrl = /^\/($|[^\/])/.test(url);
  
        // pass cookie only for itself.
        // We can't know cookies for other sites BTW
        if (isLocalUrl && options.credentials === 'include') {
          var headers = (0, _extends3.default)({}, options.headers, {
            cookie: cookie
          });
          return (0, _fetch2.default)(url, (0, _extends3.default)({}, options, { headers: headers }));
        }
  
        return (0, _fetch2.default)(url, options);
      };
    }
  
    return _fetch2.default;
  }
  
  function createHelpers(config) {
    var fetchKnowingCookie = createFetchKnowingCookie(config);
    var graphqlRequest = createGraphqlRequest(fetchKnowingCookie);
  
    return {
      fetch: fetchKnowingCookie,
      graphqlRequest: graphqlRequest
    };
  }

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createLogger;
  
  var _util = __webpack_require__(250);
  
  // Server side redux action logger
  function createLogger() {
    return function (store) {
      return function (next) {
        return function (action) {
          // eslint-disable-line no-unused-vars
          var formattedPayload = (0, _util.inspect)(action.payload, {
            colors: true
          });
          console.log(' * ' + action.type + ': ' + formattedPayload); // eslint-disable-line no-console
          return next(action);
        };
      };
    };
  }

/***/ }),
/* 250 */
/***/ (function(module, exports) {

  module.exports = require("util");

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setRuntimeVariable = setRuntimeVariable;
  exports.setHost = setHost;
  
  var _constants = __webpack_require__(59);
  
  function setRuntimeVariable(_ref) {
    var name = _ref.name,
        value = _ref.value;
  
    return {
      type: _constants.SET_RUNTIME_VARIABLE,
      payload: {
        name: name,
        value: value
      }
    };
  }
  
  function setHost(_ref2) {
    var name = _ref2.name,
        value = _ref2.value;
  
    return {
      type: _constants.SET_HOST,
      payload: {
        name: name,
        value: value
      }
    };
  }

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map