(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-test"],{"10b3":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-3d261906], uni-scroll-view[data-v-3d261906], uni-swiper-item[data-v-3d261906]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-button[data-v-3d261906]{width:100%}.u-button__text[data-v-3d261906]{white-space:nowrap;line-height:1}.u-button[data-v-3d261906]:before{position:absolute;top:50%;left:50%;width:100%;height:100%;border:inherit;border-radius:inherit;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;content:" ";background-color:#000;border-color:#000}.u-button--active[data-v-3d261906]:before{opacity:.15}.u-button__icon + .u-button__text[data-v-3d261906]:not(:empty), .u-button__loading-text[data-v-3d261906]{margin-left:4px}.u-button--plain.u-button--primary[data-v-3d261906]{color:#3c9cff}.u-button--plain.u-button--info[data-v-3d261906]{color:#909399}.u-button--plain.u-button--success[data-v-3d261906]{color:#5ac725}.u-button--plain.u-button--error[data-v-3d261906]{color:#f56c6c}.u-button--plain.u-button--warning[data-v-3d261906]{color:#f56c6c}.u-button[data-v-3d261906]{height:40px;position:relative;align-items:center;justify-content:center;\ndisplay:flex;\nflex-direction:row;box-sizing:border-box;flex-direction:row}.u-button__text[data-v-3d261906]{font-size:15px}.u-button__loading-text[data-v-3d261906]{font-size:15px;margin-left:4px}.u-button--large[data-v-3d261906]{width:100%;height:50px;padding:0 15px}.u-button--normal[data-v-3d261906]{padding:0 12px;font-size:14px}.u-button--small[data-v-3d261906]{min-width:60px;height:30px;padding:0 8px;font-size:12px}.u-button--mini[data-v-3d261906]{height:22px;font-size:10px;min-width:50px;padding:0 8px}.u-button--disabled[data-v-3d261906]{opacity:.5}.u-button--info[data-v-3d261906]{color:#323233;background-color:#fff;border-color:#ebedf0;border-width:1px;border-style:solid}.u-button--success[data-v-3d261906]{color:#fff;background-color:#5ac725;border-color:#5ac725;border-width:1px;border-style:solid}.u-button--primary[data-v-3d261906]{color:#fff;background-color:#3c9cff;border-color:#3c9cff;border-width:1px;border-style:solid}.u-button--error[data-v-3d261906]{color:#fff;background-color:#f56c6c;border-color:#f56c6c;border-width:1px;border-style:solid}.u-button--warning[data-v-3d261906]{color:#fff;background-color:#f9ae3d;border-color:#f9ae3d;border-width:1px;border-style:solid}.u-button--block[data-v-3d261906]{\ndisplay:flex;\nflex-direction:row;width:100%}.u-button--circle[data-v-3d261906]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px}.u-button--square[data-v-3d261906]{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px}.u-button__icon[data-v-3d261906]{min-width:1em;line-height:inherit!important;vertical-align:top}.u-button--plain[data-v-3d261906]{background-color:#fff}.u-button--hairline[data-v-3d261906]{border-width:.5px!important}',""]),t.exports=e},"40c2":function(t,e,o){"use strict";o.r(e);var n,i={uGap:o("e383").default,uButton:o("7e94").default},a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("u-gap",{attrs:{height:"200"}}),o("u-button",{attrs:{size:"large",type:t.links.length>0?"primary":"info"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.debounce(t.openLink,500,!0)}}},[t._v("去下载"),o("span",{directives:[{name:"show",rawName:"v-show",value:t.links.length>0,expression:"links.length>0"}]},[t._v("（"+t._s(t.links.length)+"条）")])]),o("u-gap")],1)},r=[],u=(o("d3b7"),o("159b"),o("c975"),o("14d9"),o("ac1f"),o("466d"),o("498a"),o("90ea")),s={data:function(){return{links:[],websock:null}},onReady:function(){this.preDownload(),uni.$on("preDownload",this.preDownload),u["a"].init()},mounted:function(){var t=this;uni.onSocketMessage((function(e){t.dealResult(uni.$u.decrypt(null===e||void 0===e?void 0:e.data,!0))}))},methods:{preDownload:function(){var t,e=this;(null===(t=this.links)||void 0===t?void 0:t.length)<1&&uni.$u.http.post("/c/w/g").then((function(t){if(null!==t&&void 0!==t&&t.success){var o=JSON.parse(decodeURIComponent(uni.$u.decrypt(null===t||void 0===t?void 0:t.result,!0)));(null===o||void 0===o?void 0:o.length)>0&&o.forEach((function(t){e.dealResult(t)}))}}))},dealResult:function(t){if(null!=t){var e=decodeURIComponent(t);this.isLink(e)&&this.links.indexOf(e)<0&&this.links.push(e)}},isLink:function(t){var e=/(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g,o=null===t||void 0===t?void 0:t.trim().match(e);return null!=o},openLink:function(){var t,e;(null===(t=this.links)||void 0===t?void 0:t.length)>0?window.open("javascript:window.name;",'<script>location.replace("'+(null===(e=this.links)||void 0===e?void 0:e.shift())+'")<\/script>'):this.preDownload()}}},l=s,d=o("f0c5"),p=Object(d["a"])(l,a,r,!1,null,null,null,!1,i,n);e["default"]=p.exports},"572c":function(t,e,o){"use strict";var n=o("6787"),i=o.n(n);i.a},"5d92":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-f315b152], uni-scroll-view[data-v-f315b152], uni-swiper-item[data-v-f315b152]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}',""]),t.exports=e},6787:function(t,e,o){var n=o("5d92");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("ef3db814",n,!0,{sourceMap:!1,shadowMode:!1})},"7e94":function(t,e,o){"use strict";o.r(e);var n,i={uLoadingIcon:o("4d37").default,uIcon:o("ece6").default},a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-button",{staticClass:"u-button u-reset-button",class:t.bemClass,style:[t.baseColor,t.$u.addStyle(t.customStyle)],attrs:{"hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":t.sendMessagePath,lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.disabled||t.loading?"":"u-button--active"},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t.loading?[o("u-loading-icon",{attrs:{mode:t.loadingMode,size:1.15*t.textSize,color:t.loadingColor}}),o("v-uni-text",{staticClass:"u-button__loading-text",style:[{fontSize:t.textSize+"px"}]},[t._v(t._s(t.loadingText||t.text))])]:[t.icon?o("u-icon",{attrs:{name:t.icon,color:t.iconColorCom,size:1.35*t.textSize,customStyle:{marginRight:"2px"}}}):t._e(),t._t("default",[o("v-uni-text",{staticClass:"u-button__text",style:[{fontSize:t.textSize+"px"}]},[t._v(t._s(t.text))])])]],2)},r=[],u=(o("c975"),Boolean,o("a9e3"),{props:{hairline:{type:Boolean,default:uni.$u.props.button.hairline},type:{type:String,default:uni.$u.props.button.type},size:{type:String,default:uni.$u.props.button.size},shape:{type:String,default:uni.$u.props.button.shape},plain:{type:Boolean,default:uni.$u.props.button.plain},disabled:{type:Boolean,default:uni.$u.props.button.disabled},loading:{type:Boolean,default:uni.$u.props.button.loading},loadingText:{type:[String,Number],default:uni.$u.props.button.loadingText},loadingMode:{type:String,default:uni.$u.props.button.loadingMode},loadingSize:{type:[String,Number],default:uni.$u.props.button.loadingSize},openType:{type:String,default:uni.$u.props.button.openType},formType:{type:String,default:uni.$u.props.button.formType},appParameter:{type:String,default:uni.$u.props.button.appParameter},hoverStopPropagation:{type:Boolean,default:uni.$u.props.button.hoverStopPropagation},lang:{type:String,default:uni.$u.props.button.lang},sessionFrom:{type:String,default:uni.$u.props.button.sessionFrom},sendMessageTitle:{type:String,default:uni.$u.props.button.sendMessageTitle},sendMessagePath:{type:String,default:uni.$u.props.button.sendMessagePath},sendMessageImg:{type:String,default:uni.$u.props.button.sendMessageImg},showMessageCard:{type:Boolean,default:uni.$u.props.button.showMessageCard},dataName:{type:String,default:uni.$u.props.button.dataName},throttleTime:{type:[String,Number],default:uni.$u.props.button.throttleTime},hoverStartTime:{type:[String,Number],default:uni.$u.props.button.hoverStartTime},hoverStayTime:{type:[String,Number],default:uni.$u.props.button.hoverStayTime},text:{type:[String,Number],default:uni.$u.props.button.text},icon:{type:String,default:uni.$u.props.button.icon},iconColor:{type:String,default:uni.$u.props.button.icon},color:{type:String,default:uni.$u.props.button.color}}}),s={name:"u-button",mixins:[uni.$u.mpMixin,uni.$u.mixin,u],data:function(){return{}},computed:{bemClass:function(){return this.color?this.bem("button",["shape","size"],["disabled","plain","hairline"]):this.bem("button",["type","shape","size"],["disabled","plain","hairline"])},loadingColor:function(){return this.plain?this.color?this.color:uni.$u.config.color["u-".concat(this.type)]:"info"===this.type?"#c9c9c9":"rgb(200, 200, 200)"},iconColorCom:function(){return this.iconColor?this.iconColor:this.plain?this.color?this.color:this.type:"info"===this.type?"#000000":"#ffffff"},baseColor:function(){var t={};return this.color&&(t.color=this.plain?this.color:"white",this.plain||(t["background-color"]=this.color),-1!==this.color.indexOf("gradient")?(t.borderTopWidth=0,t.borderRightWidth=0,t.borderBottomWidth=0,t.borderLeftWidth=0,this.plain||(t.backgroundImage=this.color)):(t.borderColor=this.color,t.borderWidth="1px",t.borderStyle="solid")),t},nvueTextStyle:function(){var t={};return"info"===this.type&&(t.color="#323233"),this.color&&(t.color=this.plain?this.color:"white"),t.fontSize=this.textSize+"px",t},textSize:function(){var t=14,e=this.size;return"large"===e&&(t=16),"normal"===e&&(t=14),"small"===e&&(t=12),"mini"===e&&(t=10),t}},methods:{clickHandler:function(){var t=this;this.disabled||this.loading||uni.$u.throttle((function(){t.$emit("click")}),this.throttleTime)},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}},l=s,d=(o("c88c"),o("f0c5")),p=Object(d["a"])(l,a,r,!1,null,"3d261906",null,!1,i,n);e["default"]=p.exports},c88c:function(t,e,o){"use strict";var n=o("dac4"),i=o.n(n);i.a},dac4:function(t,e,o){var n=o("10b3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("247f176c",n,!0,{sourceMap:!1,shadowMode:!1})},e383:function(t,e,o){"use strict";var n;o.r(e);var i,a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"u-gap",style:[t.gapStyle]})},r=[],u=(o("a9e3"),{props:{bgColor:{type:String,default:uni.$u.props.gap.bgColor},height:{type:[String,Number],default:uni.$u.props.gap.height},marginTop:{type:[String,Number],default:uni.$u.props.gap.marginTop},marginBottom:{type:[String,Number],default:uni.$u.props.gap.marginBottom}}}),s={name:"u-gap",mixins:[uni.$u.mpMixin,uni.$u.mixin,u],computed:{gapStyle:function(){var t={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}},l=s,d=(o("572c"),o("f0c5")),p=Object(d["a"])(l,a,r,!1,null,"f315b152",null,!1,n,i);e["default"]=p.exports}}]);