(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"1b38":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},3342:function(e,n,t){"use strict";t.r(n);var o=t("1b38"),u=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);n["default"]=u.a},"46c5":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t("f3d3")),u=r(t("2f62"));function r(e){return e&&e.__esModule?e:{default:e}}o.default.use(u.default);var a=new u.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:""},mutations:{login:function(e,n){e.userName=n||"新用户",e.hasLogin=!0},logout:function(e){e.userName="",e.hasLogin=!1},updateUsername:function(e,n){e.username=n}}}),f=a;n.default=f},da05:function(e,n,t){"use strict";var o=t("f7bc"),u=t.n(o);u.a},efad:function(e,n,t){"use strict";t("f4eb");var o=a(t("f3d3")),u=a(t("efdd")),r=a(t("46c5"));function a(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){c(e,n,t[n])})}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}o.default.config.productionTip=!1,o.default.prototype.$store=r.default,u.default.mpType="app";var i=new o.default(f({},u.default));i.$mount()},efdd:function(e,n,t){"use strict";t.r(n);var o=t("3342");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("da05");var r,a,f=t("2877"),c=Object(f["a"])(o["default"],r,a,!1,null,null,null);c.options.__file="App.vue",n["default"]=c.exports},f7bc:function(e,n,t){}},[["efad","common/runtime","common/vendor"]]]);