"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();require("./npm/@tarojs/async-await/index.js");var _index=require("./npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("./npm/@tarojs/redux/index.js"),_index4=require("./store/index.js"),_index5=_interopRequireDefault(_index4);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var store=(0,_index5.default)();(0,_index3.setStore)(store),_index3.ReduxContext.Provider&&(_index3.ReduxContext.Provider({store:store}),_index3.ReduxContext.Provider({store:store}));var _App=function(){function a(){var e,t,n;_classCallCheck(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o)))).config={pages:["pages/index/index","pages/scan/scan","pages/login/login","pages/spt-list/spt-list","pages/spt-detail/spt-detail"],window:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#fff",navigationBarTitleText:"WeChat",navigationBarTextStyle:"black"},plugins:{myPlugin:{version:"dev",provider:"wxf4fa9b179dfd7bca"}}},_possibleConstructorReturn(n,t)}return _inherits(a,_index.Component),_createClass(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidShow",value:function(){}},{key:"componentDidHide",value:function(){}},{key:"componentDidCatchError",value:function(){}},{key:"_createData",value:function(){}}]),a}();exports.default=_App,App(require("./npm/@tarojs/taro-weapp/index.js").default.createApp(_App)),_index2.default.initPxTransform({designWidth:750,deviceRatio:{640:1.17,750:1,828:.905}});