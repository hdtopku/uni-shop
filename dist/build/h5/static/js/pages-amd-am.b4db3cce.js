(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-amd-am"],{"128d":function(e,t,n){var i=n("6a04");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("a9bb3330",i,!0,{sourceMap:!1,shadowMode:!1})},"21d8":function(e,t,n){"use strict";n.r(t);var i,a,o,s={uNotify:n("f567").default},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showPage?n("v-uni-view",{staticClass:"page bg-pink-light"},[n("u-notify",{ref:"uNotify"}),n("v-uni-view",{staticStyle:{width:"92vw"}},[0===e.currentStep?n("StepOne",{attrs:{code:e.code}}):e._e(),1===e.currentStep?n("StepTwo",{attrs:{code:e.code}}):e._e()],1)],1):e._e()},u=[],r=n("f07e"),l=n("c964"),d=(n("caad"),n("2532"),n("14d9"),{uDivider:n("0ced").default,uRadioGroup:n("fe22").default,uRadio:n("2e21").default,uAlert:n("3282").default,uModal:n("b2cf").default,uCheckboxGroup:n("d3b6").default,uCheckbox:n("ba6e").default}),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("u-divider",{attrs:{textSize:"16",text:"若未订阅：必须先订阅个人，再升级"}}),n("u-radio-group",{attrs:{borderBottom:!0,placement:"column",iconPlacement:"right"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.debounce(e.groupChange(e.radiovalue7),600,!0)}},model:{value:e.radiovalue7,callback:function(t){e.radiovalue7=t},expression:"radiovalue7"}},e._l(e.radiolist7,(function(e,t){return n("u-radio",{key:t,attrs:{customStyle:{marginBottom:"8px"},label:e.label,name:e.name}})})),1),n("u-alert",{directives:[{name:"show",rawName:"v-show",value:e.showAlert&&1!==e.radiovalue7,expression:"showAlert && radiovalue7 !== 1"}],staticClass:"animate__animated animate__shakeX",staticStyle:{position:"absolute",top:"135upx",width:"100%"},attrs:{fontSize:"16",title:e.alertTitle,type:"error",effect:"light"}}),n("v-uni-view",{staticClass:"btn"},[1===e.radiovalue7?n("v-uni-view",[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===this.radiovalue7,expression:"this.radiovalue7 === 1"}],staticClass:"explain animate__animated animate__flipInX animate__delay-3s animate__slower",staticStyle:{"font-size":"28upx"}},[e._v("说明：因官方改版，"),n("v-uni-view",{staticClass:"animate__animated animate__shakeY animate__infinite",staticStyle:{color:"red","font-weight":"bolder","font-size":"38upx",display:"inline-block"}},[e._v("必须")]),n("span",[n("span",{staticStyle:{color:"red"}}),n("a",{attrs:{href:"javascript:;"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.subscribePersonal.apply(void 0,arguments)}}},[e._v("先开个人")]),e._v("("),n("span",{staticStyle:{"text-decoration":"underline","font-weight":"bolder"}},[n("span",{staticStyle:{color:"red","font-size":"26upx"}},[e._v("是否免费开")]),e._v("，以音乐界面为准。家庭和声控不行")]),e._v(")")]),e._v("，"),n("span",{staticStyle:{color:"red"}},[e._v("第二步")]),n("a",{attrs:{href:"javascript:;"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.debounce(e.clickNext,600,!0)}}},[e._v("升级")]),e._v("为5元"),n("v-uni-view",{staticStyle:{color:"red","font-weight":"bolder","font-size":"38upx",display:"inline-block"}},[e._v("必须"),n("a",{attrs:{href:"javascript:;"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.subscribePersonal.apply(void 0,arguments)}}},[e._v("先开个人")]),n("span",{staticStyle:{"font-size":"26upx"}},[e._v("，若过期不愿10元开")]),n("a",{attrs:{href:"javascript:;"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showRefund=!0}}},[e._v("点此退单")]),n("span",{staticStyle:{"font-size":"26upx"}},[e._v("勿第二步")])])],1),n("v-uni-button",{staticClass:"ui-btn bg-blue round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4 mt-4",staticStyle:{position:"absolute",bottom:"200upx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.subscribePersonal.apply(void 0,arguments)}}},[e._v("第一步：打开苹果音乐，开通个人方案")]),n("v-uni-button",{staticClass:"ui-btn bg-blue round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4 mt-4",staticStyle:{position:"absolute",bottom:"-110upx","z-index":"1"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.debounce(e.clickNext,600,!0)}}},[e._v("第二步：升级为学生方案")]),n("u-alert",{staticStyle:{position:"absolute",bottom:"-170upx",right:"0"},attrs:{fontSize:"10",description:"注意：若未开个人，请勿第二步",type:"success"}})],1):e._e()],1),1!==e.radiovalue7?n("v-uni-button",{staticClass:"ui-btn bg-blue round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4 mt-4",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickNext.apply(void 0,arguments)}}},[e._v(e._s(e.buttonText))]):e._e(),n("u-modal",{attrs:{width:"740upx",title:"退单协议",showCancelButton:!0,closeOnClickOverlay:!0,show:e.showRefund,cancelText:"取消",confirmText:"继续退单",confirmColor:"red"},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.closeRefund.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.closeRefund.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.debounce(e.confirmRefund,600,!0)}}},[n("v-uni-view",{staticStyle:{color:"gray","font-size":"35upx"}},[e._v("由于苹果仅限"),n("v-uni-text",{staticStyle:{color:"red"}},[e._v("订阅中")]),e._v("的用户，才可升级学生套餐，因此过期用户需花10元重开。"),n("u-divider",{attrs:{textColor:"red",textSize:"20",text:"👇 注意！请尊重卖家劳动👇"}}),e._v("若已进行"),n("v-uni-text",{staticStyle:{color:"red"}},[e._v("第二步且成功，还恶意退款")]),e._v("，将登记至同类型店铺，"),n("v-uni-text",{staticStyle:{color:"red","text-decoration":"underline"}},[e._v("终身禁止验证")]),e._v("！"),n("u-checkbox-group",{staticStyle:{"margin-top":"20upx",float:"right"},attrs:{placement:"column"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.debounce(e.checkboxChange,600,!0)}},model:{value:e.checkboxValue1,callback:function(t){e.checkboxValue1=t},expression:"checkboxValue1"}},[n("u-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.showRefundAlert,expression:"showRefundAlert"}],staticClass:"checkbox animate__animated animate__shakeX",attrs:{labelSize:"18",size:"25",label:"确定非恶意退款，继续退单！",name:!0}})],1)],1)],1),n("u-modal",{attrs:{show:e.showBye,title:"好聚好散！",confirmText:"请前往订单发起退款！"},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.showBye=!1},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmBye.apply(void 0,arguments)}}},[n("v-uni-view",{staticStyle:{"font-size":"40upx","text-align":"justify"}},[n("v-uni-view",{staticStyle:{color:"red"}},[e._v("退款选：未收到货、协商一致，并说明原因！")])],1)],1)],1)},h=[],v={props:{code:null},data:function(){return{showRefund:!1,showRefundAlert:!0,showBye:!1,checkboxValue1:[!1],showAlert:!0,alertTitle:"👆 没开或已停，选1\n      \n      \n      \n      \n      是否开着苹果音乐套餐？不清楚请选1👆\n      \n      \n      \n      \n      👇 开着，选2\n      ",radiolist7:[{label:"1、未订阅：已过期、已取消、未开通",name:1,disabled:!1},{label:"2、订阅中：试用中、开着10元方案、或学生续期",name:2,disabled:!1}],radiovalue7:0,buttonText:"请选择是否订阅中"}},methods:{subscribePersonal:function(){window.open("musics://music.apple.com/deeplink?app=music&p=subscribe")},closeRefund:function(){this.checkboxValue1=[!1],this.showRefund=!1},checkboxChange:function(e){this.checkboxValue1=e,uni.$u.saveAsyncInfo()},groupChange:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;switch(uni.$u.saveAsyncInfo(),this.showAlert=!1,this.$nextTick((function(){e.showAlert=!0})),t){case 1:this.alertTitle="第二步：开通10元方案后，立即回来\n          选2，立即升级为5元方案👇👇👇",this.buttonText="自己先去开个人方案，开完按情况2升级";break;case 2:this.alertTitle="👆 若未订阅必须选1：先订阅个人，再升级",this.buttonText="已在订阅中，下一步";break}},confirmRefund:function(){var e=this;uni.$u.saveAsyncInfo(),this.checkboxValue1[0]?uni.$u.http.post("/pms/am/c/refund",{},{params:{code:this.code}}).then((function(t){t.success&&(e.showRefund=!1,e.showBye=!0,uni.$emit("addInvalidCode",!1))})):(this.showRefundAlert=!1,this.$nextTick((function(){e.showRefundAlert=!0})))},confirmBye:function(){uni.$emit("addInvalidCode")},clickNext:function(){var e=this;uni.$u.saveAsyncInfo(),this.radiovalue7<1?(this.showAlert=!1,this.$nextTick((function(){e.showAlert=!0}))):1!==this.radiovalue7&&2!==this.radiovalue7||uni.$emit("nextStep")},confirmNext:function(){uni.$emit("nextStep")}}},p=v,b=(n("944e"),n("f0c5")),m=Object(b["a"])(p,f,h,!1,null,"422b8ce6",null,!1,d,i),_=m.exports,y={uGap:n("e383").default,uLink:n("2b11").default,uRow:n("621a6").default,uCol:n("9995").default,uPopup:n("3626").default},w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{},[n("img",{staticClass:"animate__animated animate__flipInX",staticStyle:{width:"100%",display:"block",margin:"0 auto",border:"2px solid #ff4c4c","border-radius":"10px"},attrs:{referrer:"no-referrer|origin|unsafe-url",src:"https://article.biliimg.com/bfs/article/11bae270f1ae0184b246147011155450b71e04ae.jpg"}}),n("v-uni-view",{staticClass:"animate__animate animate__bounce animate__repeat-3",staticStyle:{"font-size":"36upx",color:"red","font-weight":"bolder",display:"block","text-align":"center","margin-top":"10upx"}},[e._v("消失就成功"),n("v-uni-view",{staticClass:"animate__animated animate__bounce animate__infinite",staticStyle:{display:"inline-block"}},[e._v("👆")]),e._v("扣费时间不变不显示为明年")],1),n("u-gap",{attrs:{height:"10"}}),n("div",[n("u-link",{attrs:{href:"https://www.yuque.com/docs/share/0c0049b7-96d6-4cbb-a82b-1b8d34c38481",underLine:!0,text:"附：差评师、恶意退款（全网禁拍名单）"}})],1),n("u-gap",{attrs:{height:"30"}}),n("div",{staticClass:"animate__animated animate__delay-2s animate__rubberBand animate__flip animate__repeat-3",staticStyle:{"text-align":"center"}},[n("a",{attrs:{color:"#ff4c4c",href:"javascript:;",underLine:!0,text:"学生续期，请注意"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showPop=!0}}},[e._v("🔥🎉 学生续期，必读 👩🏼‍💻👨‍💻")])]),n("u-gap",{attrs:{height:"5"}}),n("u-row",{staticClass:"btn",attrs:{gutter:"10"}},[n("u-col",{attrs:{span:"12"}},[n("v-uni-button",{staticClass:"ui-btn bg-orange-gradient round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.debounce(e.clickStart,1200,!0)}}},[e._v("开始验证（ Start verification ）")])],1)],1),n("u-gap",{attrs:{height:"5"}}),n("div",{staticStyle:{"text-align":"center"}},[n("div",{staticClass:"borders border-blue p-2 my-2",staticStyle:{"font-size":"28upx",color:"red",display:"inline-block","border-radius":"12px"}},[e._v("验证完后：到订阅里勾上学生")]),n("img",{staticStyle:{display:"inline-block",width:"460upx"},attrs:{src:"https://article.biliimg.com/bfs/article/92d7dffc509ae904e536e5c86a8b9dc8fac6f376.png"}})]),n("u-popup",{staticClass:"bg-stripes-grey",attrs:{round:10,show:e.showPop,mode:"bottom",closeable:!0},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.closePop.apply(void 0,arguments)},open:function(t){arguments[0]=t=e.$handleEvent(t),e.showPop=!0}}},[n("v-uni-view",{staticStyle:{"font-size":"35upx","text-align":"left"}},[n("v-uni-view",{staticClass:"animate__flipInX p-3 animate__slow"},[n("v-uni-text",{staticStyle:{"font-size":"30upx"}}),n("u-gap",{attrs:{height:"5"}}),n("div",{staticClass:"borders border-blue p-2 my-2",staticStyle:{"font-size":"32upx",color:"red","border-radius":"12px","text-align":"center"}},[e._v("学生续期")]),n("div",[e._v("1、如下图，【音乐里提醒验证】时，点【我已不是大学生】，再验证才能成功"),n("div",{staticStyle:{"text-decoration":"",color:"red"}},[e._v("2、将订阅页面截图，联系客服补发1条备用")])]),n("v-uni-view",[e._v("3、弹窗不定时，只能等着，或重装音乐试试")]),n("u-gap"),n("img",{staticClass:"animate__animated animate__pulse animate__infinite",staticStyle:{display:"block",width:"500upx",margin:"0 auto"},attrs:{src:" https://article.biliimg.com/bfs/article/0a86ce629469e2aa669525bd03ef0956ab498275.jpg"}}),n("u-gap")],1)],1)],1)],1)},x=[],g={props:{code:null},data:function(){return{verifyAddr:null,showAlert:!0,showPop:!1,checkboxValue1:[!1]}},created:function(){var e=this;this.startVerify(),uni.$on("startVerify",(function(){null!=e.verifyAddr&&e.startVerify()}))},methods:{clickNext:function(){uni.$emit("nextStep")},checkboxChange:function(e){uni.$u.saveAsyncInfo()},closePop:function(){this.showPop=!1,this.checkboxValue1=[!1]},clickStart:function(){this.jumpStart()},confirmStart:function(){this.checkboxValue1[0]?this.jumpStart():uni.$emit("showNotify","开始前，请勾选：刷脸不扣钱")},jumpStart:function(){null!=this.verifyAddr&&window.open(this.verifyAddr),this.startVerify(1)},subscribePersonal:function(){window.open("musics://music.apple.com/deeplink?app=music&p=subscribe")},startVerify:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.$u.saveAsyncInfo();var n=uni.$u.getCache("ms"),i={i:uni.$u.encrypt({ip:n.ip,sys:n.sys,type:10,code:this.code,t:(new Date).getTime(),extra:t},!0)};uni.$u.http.post("/c/am/s/"+this.code,{},{header:i}).then((function(t){null!==t&&void 0!==t&&t.success?null==e.verifyAddr&&null!=(null===t||void 0===t?void 0:t.result)&&(e.verifyAddr=decodeURIComponent(uni.$u.decrypt(t.result,!0))):(uni.$emit("addInvalidCode"),location.reload())}))}}},k=g,$=(n("d5b8"),Object(b["a"])(k,w,x,!1,null,"03e6f460",null,!1,y,a)),S=$.exports,C={components:{StepOne:_,StepTwo:S},data:function(){return{showPage:!1,currentStep:1,code:null}},onLoad:function(e){var t=this;this.queryCode(),uni.$on("nextStep",(function(){t.currentStep=++t.currentStep%2,uni.$u.saveAsyncInfo()})),uni.$on("addInvalidCode",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t.addInvalidCode(e)})),uni.$on("showNotify",this.notify)},methods:{queryCode:function(){var e=this;return Object(l["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.getCode(),null!=e.code){t.next=3;break}return t.abrupt("return");case 3:e.checkAmEnv()&&e.checkCode();case 4:case"end":return t.stop()}}),t)})))()},notify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$refs.uNotify.show({top:500,type:"error",color:"#fff",bgColor:"#ff4c4c",message:e,duration:3e3,fontSize:25,safeAreaInsetTop:!0})},checkCode:function(){var e,t=this;uni.$u.saveAsyncInfo();var n=null!==(e=uni.$u.getCache("cs"))&&void 0!==e?e:[];if(null!==n&&void 0!==n&&n.includes(this.code))this.checkAmEnv()&&(this.showPage=!0);else{var i=uni.$u.getCache("ms"),a={i:uni.$u.encrypt({ip:i.ip,sys:i.sys,type:10,code:this.code,t:(new Date).getTime()},!0)};uni.$u.http.post("/c/am/q/"+this.code,{},{header:a}).then((function(e){null!==e&&void 0!==e&&e.success?(t.showPage=!0,n.push(t.code),uni.$u.saveRecordIp(t.code,!1),uni.$u.setCache("cs",n,600)):(t.addInvalidCode(),uni.$u.removePage())})).catch((function(e){}))}},getCode:function(){var e,t,n,i=null===(e=this.$Route)||void 0===e||null===(t=e.query)||void 0===t?void 0:t.code,a=null!==(n=uni.$u.getCache("cs1"))&&void 0!==n?n:[];return null==i||null!==a&&void 0!==a&&a.includes(i)?(uni.$u.removePage(),null):(this.code=i,i)},checkAmEnv:function(){var e=uni.$u.checkAmEnv();return e&&uni.setNavigationBarTitle({title:"苹果音乐学生验证"}),e},addInvalidCode:function(){var e,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=null!==(e=uni.$u.getCache("cs1"))&&void 0!==e?e:[];t&&uni.$u.removePage(),n.includes(this.code)||(n.push(this.code),uni.$u.setCache("cs1",n,2592e3))}}},A=C,E=(n("7030"),Object(b["a"])(A,c,u,!1,null,"a696fc9a",null,!1,s,o));t["default"]=E.exports},3859:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-03e6f460]{position:relative;height:%?950?%}.container .btn[data-v-03e6f460]{width:100%;bottom:%?100?%;text-align:right}.container img[data-v-03e6f460]{pointer-events:none}',""]),e.exports=t},"4f0f":function(e,t,n){var i=n("c7ed");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("73419e32",i,!0,{sourceMap:!1,shadowMode:!1})},"6a04":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-422b8ce6]{position:relative;height:%?900?%}.container .explain[data-v-422b8ce6]{position:absolute;top:%?-180?%;color:grey;border:1px dashed red;border-radius:%?10?%}.container .btn[data-v-422b8ce6]{position:absolute;bottom:%?480?%;width:100%}.container .next-btn[data-v-422b8ce6]{position:absolute;bottom:%?50?%}.container img[data-v-422b8ce6]{pointer-events:none}.container[data-v-422b8ce6]  .u-border-bottom:first-child{margin-bottom:%?500?%!important}.container[data-v-422b8ce6]  .u-border-bottom{border-bottom:none!important}',""]),e.exports=t},7030:function(e,t,n){"use strict";var i=n("4f0f"),a=n.n(i);a.a},"944e":function(e,t,n){"use strict";var i=n("128d"),a=n.n(i);a.a},c7ed:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page[data-v-a696fc9a]{display:flex;justify-content:center;height:98vh;align-items:center}',""]),e.exports=t},d5b8:function(e,t,n){"use strict";var i=n("f9c7"),a=n.n(i);a.a},f9c7:function(e,t,n){var i=n("3859");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("69560b7c",i,!0,{sourceMap:!1,shadowMode:!1})}}]);