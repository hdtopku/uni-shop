(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-test"],{"40c2":function(n,t,i){"use strict";i.r(t);var e,u={uGap:i("e383").default,uButton:i("7e94").default,"u-Input":i("7988").default},a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("u-gap",{attrs:{height:"300"}}),i("u-button",{attrs:{size:"large",type:n.links.length>0?"primary":"info"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.openLink.apply(void 0,arguments)}}},[n._v("去下载"),i("span",{directives:[{name:"show",rawName:"v-show",value:n.links.length>0,expression:"links.length>0"}]},[n._v("（"+n._s(n.links.length)+"条）")])]),i("u-gap"),i("u--input",{attrs:{clearable:!0,border:"surround"},model:{value:n.link,callback:function(t){n.link=t},expression:"link"}})],1)},o=[],s=(i("14d9"),i("ac1f"),i("466d"),i("498a"),i("90ea")),l={data:function(){return{links:[],websock:null}},onReady:function(){s["a"].init()},mounted:function(){var n=this;uni.onSocketMessage((function(t){n.dealResult(t)}))},methods:{preDownload:function(){var n=this;uni.$u.http.post("/c/w/g").then((function(t){n.dealResult(t)}))},dealResult:function(n){if(n.success){var t=uni.$u.decrypt(n.data,!0);this.isLink(t)&&this.links.push(t)}},isLink:function(n){var t=/(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g,i=null===n||void 0===n?void 0:n.trim().match(t);return null!=i},openLink:function(){var n,t;(null===(n=this.links)||void 0===n?void 0:n.length)>0?window.open(null===(t=this.links)||void 0===t?void 0:t.shift()):this.preDownload()}}},r=l,p=i("f0c5"),d=Object(p["a"])(r,a,o,!1,null,null,null,!1,u,e);t["default"]=d.exports},"572c":function(n,t,i){"use strict";var e=i("6787"),u=i.n(e);u.a},"5d92":function(n,t,i){var e=i("24fb");t=e(!1),t.push([n.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-f315b152], uni-scroll-view[data-v-f315b152], uni-swiper-item[data-v-f315b152]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}',""]),n.exports=t},6787:function(n,t,i){var e=i("5d92");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var u=i("4f06").default;u("ef3db814",e,!0,{sourceMap:!1,shadowMode:!1})},e383:function(n,t,i){"use strict";var e;i.r(t);var u,a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"u-gap",style:[n.gapStyle]})},o=[],s=(i("a9e3"),{props:{bgColor:{type:String,default:uni.$u.props.gap.bgColor},height:{type:[String,Number],default:uni.$u.props.gap.height},marginTop:{type:[String,Number],default:uni.$u.props.gap.marginTop},marginBottom:{type:[String,Number],default:uni.$u.props.gap.marginBottom}}}),l={name:"u-gap",mixins:[uni.$u.mpMixin,uni.$u.mixin,s],computed:{gapStyle:function(){var n={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(n,uni.$u.addStyle(this.customStyle))}}},r=l,p=(i("572c"),i("f0c5")),d=Object(p["a"])(r,a,o,!1,null,"f315b152",null,!1,e,u);t["default"]=d.exports}}]);