(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-amd-am"],{"106d":function(t,e,n){var i=n("db79");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("15d3e96c",i,!0,{sourceMap:!1,shadowMode:!1})},"128d":function(t,e,n){var i=n("6a04");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("a9bb3330",i,!0,{sourceMap:!1,shadowMode:!1})},"21d8":function(t,e,n){"use strict";n.r(e);var i,a,o,s={uNotify:n("f567").default},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showPage?n("v-uni-view",{staticClass:"page bg-pink-light"},[n("u-notify",{ref:"uNotify"}),n("v-uni-view",{staticStyle:{width:"88vw"}},[0===t.currentStep?n("StepOne",{attrs:{code:t.code}}):t._e(),1===t.currentStep?n("StepTwo",{attrs:{code:t.code}}):t._e()],1)],1):t._e()},u=[],r=n("f07e"),l=n("c964"),d=(n("caad"),n("2532"),n("14d9"),{uDivider:n("0ced").default,uRadioGroup:n("fe22").default,uRadio:n("2e21").default,uAlert:n("3282").default,uModal:n("b2cf").default,uCheckboxGroup:n("d3b6").default,uCheckbox:n("ba6e").default}),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("u-divider",{attrs:{textSize:"16",text:"若未订阅：必须先订阅个人，再升级"}}),n("u-radio-group",{attrs:{borderBottom:!0,placement:"column",iconPlacement:"right"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.debounce(t.groupChange(t.radiovalue7),600,!0)}},model:{value:t.radiovalue7,callback:function(e){t.radiovalue7=e},expression:"radiovalue7"}},t._l(t.radiolist7,(function(t,e){return n("u-radio",{key:e,attrs:{customStyle:{marginBottom:"8px"},label:t.label,name:t.name}})})),1),n("u-alert",{directives:[{name:"show",rawName:"v-show",value:t.showAlert&&1!==t.radiovalue7,expression:"showAlert && radiovalue7 !== 1"}],staticClass:"animate__animated animate__shakeX",staticStyle:{position:"absolute",top:"135upx",width:"100%"},attrs:{fontSize:"16",title:t.alertTitle,type:"error",effect:"light"}}),n("v-uni-view",{staticClass:"btn"},[1===t.radiovalue7?n("v-uni-view",[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===this.radiovalue7,expression:"this.radiovalue7 === 1"}],staticClass:"explain animate__animated animate__flipInX animate__delay-3s animate__slower",staticStyle:{"font-size":"28upx"}},[t._v("说明：因官方改版，"),n("v-uni-view",{staticClass:"animate__animated animate__shakeY animate__infinite",staticStyle:{color:"red","font-weight":"bolder","font-size":"38upx",display:"inline-block"}},[t._v("必须")]),n("span",[n("span",{staticStyle:{color:"red"}}),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.subscribePersonal.apply(void 0,arguments)}}},[t._v("先开个人")]),t._v("("),n("span",{staticStyle:{"text-decoration":"underline","font-weight":"bolder"}},[n("span",{staticStyle:{color:"red","font-size":"26upx"}},[t._v("是否免费开")]),t._v("，以音乐界面为准。家庭和声控不行")]),t._v(")")]),t._v("，"),n("span",{staticStyle:{color:"red"}},[t._v("第二步")]),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.debounce(t.clickNext,600,!0)}}},[t._v("升级")]),t._v("为5元"),n("v-uni-view",{staticStyle:{color:"red","font-weight":"bolder","font-size":"38upx",display:"inline-block"}},[t._v("必须"),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.subscribePersonal.apply(void 0,arguments)}}},[t._v("先开个人")]),n("span",{staticStyle:{"font-size":"26upx"}},[t._v("，若过期不愿10元开")]),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showRefund=!0}}},[t._v("点此退单")]),n("span",{staticStyle:{"font-size":"26upx"}},[t._v("勿第二步")])])],1),n("v-uni-button",{staticClass:"ui-btn bg-blue round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4 mt-4",staticStyle:{position:"absolute",bottom:"200upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.subscribePersonal.apply(void 0,arguments)}}},[t._v("第一步：打开苹果音乐，开通个人方案")]),n("v-uni-button",{staticClass:"ui-btn bg-blue round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4 mt-4",staticStyle:{position:"absolute",bottom:"-110upx","z-index":"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.debounce(t.clickNext,600,!0)}}},[t._v("第二步：升级为学生方案")]),n("u-alert",{staticStyle:{position:"absolute",bottom:"-170upx",right:"0"},attrs:{fontSize:"10",description:"注意：若未开个人，请勿第二步",type:"success"}})],1):t._e()],1),1!==t.radiovalue7?n("v-uni-button",{staticClass:"ui-btn bg-blue round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4 mt-4",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickNext.apply(void 0,arguments)}}},[t._v(t._s(t.buttonText))]):t._e(),n("u-modal",{attrs:{width:"740upx",title:"退单协议",showCancelButton:!0,closeOnClickOverlay:!0,show:t.showRefund,cancelText:"取消",confirmText:"继续退单",confirmColor:"red"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeRefund.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.closeRefund.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.debounce(t.confirmRefund,600,!0)}}},[n("v-uni-view",{staticStyle:{color:"gray","font-size":"35upx"}},[t._v("由于苹果仅限"),n("v-uni-text",{staticStyle:{color:"red"}},[t._v("订阅中")]),t._v("的用户，才可升级学生套餐，因此过期用户需花10元重开。"),n("u-divider",{attrs:{textColor:"red",textSize:"20",text:"👇 注意！请尊重卖家劳动👇"}}),t._v("若已进行"),n("v-uni-text",{staticStyle:{color:"red"}},[t._v("第二步且成功，还恶意退款")]),t._v("，将登记至同类型店铺，"),n("v-uni-text",{staticStyle:{color:"red","text-decoration":"underline"}},[t._v("终身禁止验证")]),t._v("！"),n("u-checkbox-group",{staticStyle:{"margin-top":"20upx",float:"right"},attrs:{placement:"column"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.debounce(t.checkboxChange,600,!0)}},model:{value:t.checkboxValue1,callback:function(e){t.checkboxValue1=e},expression:"checkboxValue1"}},[n("u-checkbox",{directives:[{name:"show",rawName:"v-show",value:t.showRefundAlert,expression:"showRefundAlert"}],staticClass:"checkbox animate__animated animate__shakeX",attrs:{labelSize:"18",size:"25",label:"确定非恶意退款，继续退单！",name:!0}})],1)],1)],1),n("u-modal",{attrs:{show:t.showBye,title:"好聚好散！",confirmText:"请前往订单发起退款！"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.showBye=!1},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmBye.apply(void 0,arguments)}}},[n("v-uni-view",{staticStyle:{"font-size":"40upx","text-align":"justify"}},[n("v-uni-view",{staticStyle:{color:"red"}},[t._v("退款选：未收到货、协商一致，并说明原因！")])],1)],1)],1)},v=[],f={props:{code:null},data:function(){return{showRefund:!1,showRefundAlert:!0,showBye:!1,checkboxValue1:[!1],showAlert:!0,alertTitle:"👆 没开或已停，选1\n      \n      \n      \n      \n      是否开着苹果音乐套餐？不清楚请选1👆\n      \n      \n      \n      \n      👇 开着，选2\n      ",radiolist7:[{label:"1、未订阅：已过期、已取消、未开通",name:1,disabled:!1},{label:"2、订阅中：试用中、开着10元方案、或学生续期",name:2,disabled:!1}],radiovalue7:0,buttonText:"请选择是否订阅中"}},methods:{subscribePersonal:function(){window.open("musics://music.apple.com/deeplink?app=music&p=subscribe")},closeRefund:function(){this.checkboxValue1=[!1],this.showRefund=!1},checkboxChange:function(t){this.checkboxValue1=t,uni.$u.saveAsyncInfo()},groupChange:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;switch(uni.$u.saveAsyncInfo(),this.showAlert=!1,this.$nextTick((function(){t.showAlert=!0})),e){case 1:this.alertTitle="第二步：开通10元方案后，立即回来\n          选2，立即升级为5元方案👇👇👇",this.buttonText="自己先去开个人方案，开完按情况2升级";break;case 2:this.alertTitle="👆 若未订阅必须选1：先订阅个人，再升级",this.buttonText="已在订阅中，下一步";break}},confirmRefund:function(){var t=this;uni.$u.saveAsyncInfo(),this.checkboxValue1[0]?uni.$u.http.post("/pms/am/c/refund",{},{params:{code:this.code}}).then((function(e){e.success&&(t.showRefund=!1,t.showBye=!0,uni.$emit("addInvalidCode",!1))})):(this.showRefundAlert=!1,this.$nextTick((function(){t.showRefundAlert=!0})))},confirmBye:function(){uni.$emit("addInvalidCode")},clickNext:function(){var t=this;uni.$u.saveAsyncInfo(),this.radiovalue7<1?(this.showAlert=!1,this.$nextTick((function(){t.showAlert=!0}))):1!==this.radiovalue7&&2!==this.radiovalue7||uni.$emit("nextStep")},confirmNext:function(){uni.$emit("nextStep")}}},p=f,b=(n("944e"),n("f0c5")),m=Object(b["a"])(p,h,v,!1,null,"422b8ce6",null,!1,d,i),_=m.exports,y={uGap:n("e383").default,uLink:n("2b11").default,uRow:n("621a6").default,uCol:n("9995").default,uPopup:n("3626").default},w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("img",{staticClass:"animate__animated animate__flipInX",staticStyle:{width:"100%",display:"block",margin:"0 auto",border:"2px solid #ff4c4c","border-radius":"10px"},attrs:{referrer:"no-referrer|origin|unsafe-url",src:"https://article.biliimg.com/bfs/article/11bae270f1ae0184b246147011155450b71e04ae.jpg"}}),n("v-uni-view",{staticClass:"animate__animated animate__bounce animate__repeat-3",staticStyle:{"font-size":"36upx",color:"red","font-weight":"bolder",display:"block","text-align":"center","margin-top":"10upx"}},[t._v("消失就成功"),n("v-uni-view",{staticClass:"animate__animated animate__bounce animate__infinite",staticStyle:{display:"inline-block"}},[t._v("👆")]),t._v("扣费时间不变不显示为明年")],1),n("u-gap",{attrs:{height:"10"}}),n("div",[n("u-link",{attrs:{href:"https://www.yuque.com/docs/share/0c0049b7-96d6-4cbb-a82b-1b8d34c38481",underLine:!0,text:"附：差评师、恶意退款（全网禁拍名单）"}})],1),n("u-gap",{attrs:{height:"30"}}),n("div",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{color:"#ff4c4c",href:"javascript:;",underLine:!0,text:"学生续期，请注意"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPop=!0}}},[t._v("学生续期，必读")])]),n("u-gap",{attrs:{height:"5"}}),n("u-row",{staticClass:"btn",attrs:{gutter:"10"}},[n("u-col",{attrs:{span:"12"}},[n("v-uni-button",{staticClass:"ui-btn bg-orange-gradient round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.debounce(t.clickStart,1200,!0)}}},[t._v("开始验证（ Start verification ）")])],1)],1),n("u-gap",{attrs:{height:"5"}}),n("div",{staticStyle:{"text-align":"center"}},[n("div",{staticClass:"borders border-blue p-2 my-2",staticStyle:{"font-size":"28upx",color:"red",display:"inline-block","border-radius":"12px"}},[t._v("验证完后：到订阅页面，勾上学生方案")]),n("img",{staticStyle:{display:"inline-block",width:"460upx"},attrs:{src:"https://article.biliimg.com/bfs/article/92d7dffc509ae904e536e5c86a8b9dc8fac6f376.png"}})]),n("u-popup",{staticClass:"bg-stripes-grey",attrs:{round:10,show:t.showPop,mode:"bottom",closeable:!0},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closePop.apply(void 0,arguments)},open:function(e){arguments[0]=e=t.$handleEvent(e),t.showPop=!0}}},[n("v-uni-view",{staticStyle:{"font-size":"35upx","text-align":"left"}},[n("v-uni-view",{staticClass:"animate__flipInX p-3 animate__slow"},[n("v-uni-text",{staticStyle:{"font-size":"30upx"}}),n("u-gap",{attrs:{height:"5"}}),n("div",{staticClass:"borders border-blue p-2 my-2",staticStyle:{"font-size":"32upx",color:"red","border-radius":"12px","text-align":"center"}},[t._v("验证完后，订阅页面提醒不消失怎么办？")]),n("div",[t._v("1、由于学生身份不能重叠")]),n("div",[t._v("2、【音乐界面弹窗提醒验证】时，点【我已不是大学生】（新的资格才能刷上去）")]),n("v-uni-view",[t._v("3、弹窗不定时，等着就行，或重装音乐试试👇")]),n("u-gap"),n("u-row",[n("u-col",{attrs:{span:6}},[n("img",{staticStyle:{display:"inline-block"},attrs:{src:"https://article.biliimg.com/bfs/article/6657f2eea811289bc3db0835acf78b3d4e358a2b.jpg"}})]),n("u-col",{attrs:{span:6}},[n("img",{staticClass:"animate__animated animate__pulse animate__infinite",staticStyle:{display:"inline-block"},attrs:{src:"https://article.biliimg.com/bfs/article/0a86ce629469e2aa669525bd03ef0956ab498275.jpg"}})])],1)],1)],1)],1)],1)},x=[],g={props:{code:null},data:function(){return{verifyAddr:null,showAlert:!0,showPop:!1,checkboxValue1:[!1]}},created:function(){var t=this;this.startVerify(),uni.$on("startVerify",(function(){null!=t.verifyAddr&&t.startVerify()}))},methods:{clickNext:function(){uni.$emit("nextStep")},checkboxChange:function(t){uni.$u.saveAsyncInfo()},closePop:function(){this.showPop=!1,this.checkboxValue1=[!1]},clickStart:function(){this.jumpStart()},confirmStart:function(){this.checkboxValue1[0]?this.jumpStart():uni.$emit("showNotify","开始前，请勾选：刷脸不扣钱")},jumpStart:function(){null!=this.verifyAddr&&window.open(this.verifyAddr),this.startVerify(1)},subscribePersonal:function(){window.open("musics://music.apple.com/deeplink?app=music&p=subscribe")},startVerify:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.$u.saveAsyncInfo();var n=uni.$u.getCache("ms"),i={i:uni.$u.encrypt({ip:n.ip,sys:n.sys,type:10,code:this.code,t:(new Date).getTime(),extra:e},!0)};uni.$u.http.post("/c/am/s/"+this.code,{},{header:i}).then((function(e){null!==e&&void 0!==e&&e.success?null==t.verifyAddr&&null!=(null===e||void 0===e?void 0:e.result)&&(t.verifyAddr=decodeURIComponent(uni.$u.decrypt(e.result,!0))):(uni.$emit("addInvalidCode"),location.reload())}))}}},k=g,$=(n("fa06"),Object(b["a"])(k,w,x,!1,null,"4fdb3984",null,!1,y,a)),S=$.exports,C={components:{StepOne:_,StepTwo:S},data:function(){return{showPage:!1,currentStep:1,code:null}},onLoad:function(t){var e=this;this.queryCode(),uni.$on("nextStep",(function(){e.currentStep=++e.currentStep%2,uni.$u.saveAsyncInfo()})),uni.$on("addInvalidCode",(function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.addInvalidCode(t)})),uni.$on("showNotify",this.notify)},methods:{queryCode:function(){var t=this;return Object(l["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.getCode(),null!=t.code){e.next=3;break}return e.abrupt("return");case 3:t.checkAmEnv()&&t.checkCode();case 4:case"end":return e.stop()}}),e)})))()},notify:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$refs.uNotify.show({top:500,type:"error",color:"#fff",bgColor:"#ff4c4c",message:t,duration:3e3,fontSize:25,safeAreaInsetTop:!0})},checkCode:function(){var t,e=this;uni.$u.saveAsyncInfo();var n=null!==(t=uni.$u.getCache("cs"))&&void 0!==t?t:[];if(null!==n&&void 0!==n&&n.includes(this.code))this.checkAmEnv()&&(this.showPage=!0);else{var i=uni.$u.getCache("ms"),a={i:uni.$u.encrypt({ip:i.ip,sys:i.sys,type:10,code:this.code,t:(new Date).getTime()},!0)};uni.$u.http.post("/c/am/q/"+this.code,{},{header:a}).then((function(t){null!==t&&void 0!==t&&t.success?(e.showPage=!0,n.push(e.code),uni.$u.saveRecordIp(e.code,!1),uni.$u.setCache("cs",n,600)):(e.addInvalidCode(),uni.$u.removePage())})).catch((function(t){}))}},getCode:function(){var t,e,n,i=null===(t=this.$Route)||void 0===t||null===(e=t.query)||void 0===e?void 0:e.code,a=null!==(n=uni.$u.getCache("cs1"))&&void 0!==n?n:[];return null==i||null!==a&&void 0!==a&&a.includes(i)?(uni.$u.removePage(),null):(this.code=i,i)},checkAmEnv:function(){var t=uni.$u.checkAmEnv();return t&&uni.setNavigationBarTitle({title:"苹果音乐学生验证"}),t},addInvalidCode:function(){var t,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=null!==(t=uni.$u.getCache("cs1"))&&void 0!==t?t:[];e&&uni.$u.removePage(),n.includes(this.code)||(n.push(this.code),uni.$u.setCache("cs1",n,2592e3))}}},A=C,E=(n("9350"),Object(b["a"])(A,c,u,!1,null,"156d657c",null,!1,s,o));e["default"]=E.exports},"39d0":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page[data-v-156d657c]{display:flex;justify-content:center;height:100vh;align-items:center}',""]),t.exports=e},"3e70":function(t,e,n){var i=n("39d0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3d1439a1",i,!0,{sourceMap:!1,shadowMode:!1})},"6a04":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-422b8ce6]{position:relative;height:%?900?%}.container .explain[data-v-422b8ce6]{position:absolute;top:%?-180?%;color:grey;border:1px dashed red;border-radius:%?10?%}.container .btn[data-v-422b8ce6]{position:absolute;bottom:%?480?%;width:100%}.container .next-btn[data-v-422b8ce6]{position:absolute;bottom:%?50?%}.container img[data-v-422b8ce6]{pointer-events:none}.container[data-v-422b8ce6]  .u-border-bottom:first-child{margin-bottom:%?500?%!important}.container[data-v-422b8ce6]  .u-border-bottom{border-bottom:none!important}',""]),t.exports=e},9350:function(t,e,n){"use strict";var i=n("3e70"),a=n.n(i);a.a},"944e":function(t,e,n){"use strict";var i=n("128d"),a=n.n(i);a.a},db79:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-4fdb3984]{position:relative;height:%?950?%}.container .btn[data-v-4fdb3984]{width:100%;bottom:%?100?%;text-align:right}.container img[data-v-4fdb3984]{pointer-events:none}',""]),t.exports=e},fa06:function(t,e,n){"use strict";var i=n("106d"),a=n.n(i);a.a}}]);