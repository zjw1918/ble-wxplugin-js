"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("./index.js"),_index4=require("../../mega-utils/index.js"),_api=require("../../service/api.js"),_api2=_interopRequireDefault(_api);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var defaultState={devices:[],device:{},user:null};exports.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:defaultState,t=arguments[1];switch(t.type){case _index3.constants.ACTION_DEVICES_FOUND:var r=[].concat(_toConsumableArray(e.devices));return t.data.devices.forEach(function(e){var t=_index4.utils.inArray(r,"deviceId",e.deviceId);-1===t?r.push(e):r[t]=e}),_extends({},e,{devices:r});case _index3.constants.ACTION_CLEAR:return _extends({},e,{devices:[]});case _index3.constants.ACTION_DEVICE_INFO:return _extends({},e,{device:t.data?_extends({},e.device,t.data):{}});case _index3.constants.ACTION_UPLOAD_SPT_DATA:var n=_index2.default.arrayBufferToBase64(new Uint8Array(t.data));return _api2.default.post("/classes/SptData",{data:n,userId:e.user.objectId}).then(function(e){console.log("spt data upload ok")}).catch(function(e){return console.error(e)}),e;case _index3.constants.ACTION_UPDATE_TOKEN:return _api2.default.put("/users/"+e.user.objectId,{sptToken:t.data},{"X-LC-Session":e.user.sessionToken}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}),e;case _index3.constants.ACTION_LOGIN_SUCCESS:return{user:t.data};case _index3.constants.ACTION_LOGOUT:return{user:null};default:return e}};