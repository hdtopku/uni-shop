(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-amd-am"],{"11a3":function(e,t,i){var n=i("3a16");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("c061").default;a("6411c140",n,!0,{sourceMap:!1,shadowMode:!1})},"13c4":function(e,t,i){var n=i("e092");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("c061").default;a("1e8114da",n,!0,{sourceMap:!1,shadowMode:!1})},"21d8":function(e,t,i){"use strict";i.r(t);var n,a,o,r={uNotify:i("f567").default},s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Page1",[e.showPage?i("v-uni-view",{staticClass:"page bg-pink-light"},[i("u-notify",{ref:"uNotify"}),i("v-uni-view",{staticStyle:{width:"92vw"}},[0===e.currentStep?i("StepOne",{attrs:{code:e.code}}):e._e(),1===e.currentStep?i("StepTwo",{attrs:{code:e.code}}):e._e()],1)],1):e._e()],1)},u=[],c=i("f07e"),l=i("c964"),d=(i("9174"),i("96eb"),i("567c"),{uDivider:i("0ced").default,uRadioGroup:i("fe22").default,uRadio:i("2e21").default,uAlert:i("3282").default,uModal:i("b2cf").default,uCheckboxGroup:i("d3b6").default,uCheckbox:i("ba6e").default}),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("u-divider",{attrs:{textSize:"16",text:"若未订阅：必须先订阅个人，再升级"}}),i("u-radio-group",{attrs:{borderBottom:!0,placement:"column",iconPlacement:"right"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.debounce(e.groupChange(e.radiovalue7),600,!0)}},model:{value:e.radiovalue7,callback:function(t){e.radiovalue7=t},expression:"radiovalue7"}},e._l(e.radiolist7,(function(e,t){return i("u-radio",{key:t,attrs:{customStyle:{marginBottom:"8px"},label:e.label,name:e.name}})})),1),i("u-alert",{directives:[{name:"show",rawName:"v-show",value:e.showAlert&&1!==e.radiovalue7,expression:"showAlert && radiovalue7 !== 1"}],staticClass:"animate__animated animate__shakeX",staticStyle:{position:"absolute",top:"135upx",width:"100%"},attrs:{fontSize:"16",title:e.alertTitle,type:"error",effect:"light"}}),i("v-uni-view",{staticClass:"btn"},[1===e.radiovalue7?i("v-uni-view",[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===this.radiovalue7,expression:"this.radiovalue7 === 1"}],staticClass:"explain animate__animated animate__flipInX animate__delay-3s animate__slower",staticStyle:{"font-size":"28upx"}},[e._v("说明：因官方改版，"),i("v-uni-view",{staticClass:"animate__animated animate__shakeY animate__infinite",staticStyle:{color:"red","font-weight":"bolder","font-size":"38upx",display:"inline-block"}},[e._v("必须")]),i("span",[i("span",{staticStyle:{color:"red"}}),i("a",{attrs:{href:"javascript:;"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.subscribePersonal.apply(void 0,arguments)}}},[e._v("先开个人")]),e._v("("),i("span",{staticStyle:{"text-decoration":"underline","font-weight":"bolder"}},[i("span",{staticStyle:{color:"red","font-size":"26upx"}},[e._v("是否免费开")]),e._v("，以音乐界面为准。家庭和声控不行")]),e._v(")")]),e._v("，"),i("span",{staticStyle:{color:"red"}},[e._v("第二步")]),i("a",{attrs:{href:"javascript:;"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.debounce(e.clickNext,600,!0)}}},[e._v("升级")]),e._v("为5元"),i("v-uni-view",{staticStyle:{color:"red","font-weight":"bolder","font-size":"38upx",display:"inline-block"}},[e._v("必须"),i("a",{attrs:{href:"javascript:;"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.subscribePersonal.apply(void 0,arguments)}}},[e._v("先开个人")]),i("span",{staticStyle:{"font-size":"26upx"}},[e._v("，若过期不愿10元开")]),i("a",{attrs:{href:"javascript:;"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showRefund=!0}}},[e._v("点此退单")]),i("span",{staticStyle:{"font-size":"26upx"}},[e._v("勿第二步")])])],1),i("v-uni-button",{staticClass:"ui-btn bg-blue round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4 mt-4",staticStyle:{position:"absolute",bottom:"200upx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.subscribePersonal.apply(void 0,arguments)}}},[e._v("第一步：打开苹果音乐，开通个人方案")]),i("v-uni-button",{staticClass:"ui-btn bg-blue round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4 mt-4",staticStyle:{position:"absolute",bottom:"-110upx","z-index":"1"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.debounce(e.clickNext,600,!0)}}},[e._v("第二步：升级为学生方案")]),i("u-alert",{staticStyle:{position:"absolute",bottom:"-170upx",right:"0"},attrs:{fontSize:"10",description:"注意：若未开个人，请勿第二步",type:"success"}})],1):e._e()],1),1!==e.radiovalue7?i("v-uni-button",{staticClass:"ui-btn bg-blue round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4 mt-4",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickNext.apply(void 0,arguments)}}},[e._v(e._s(e.buttonText))]):e._e(),i("u-modal",{attrs:{width:"740upx",title:"退单协议",showCancelButton:!0,closeOnClickOverlay:!0,show:e.showRefund,cancelText:"取消",confirmText:"继续退单",confirmColor:"red"},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.closeRefund.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.closeRefund.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.debounce(e.confirmRefund,600,!0)}}},[i("v-uni-view",{staticStyle:{color:"gray","font-size":"35upx"}},[e._v("由于苹果仅限"),i("v-uni-text",{staticStyle:{color:"red"}},[e._v("订阅中")]),e._v("的用户，才可升级学生套餐，因此过期用户需花10元重开。"),i("u-divider",{attrs:{textColor:"red",textSize:"20",text:"👇 注意！请尊重卖家劳动👇"}}),e._v("若已进行"),i("v-uni-text",{staticStyle:{color:"red"}},[e._v("第二步且成功，还恶意退款")]),e._v("，将登记至同类型店铺，"),i("v-uni-text",{staticStyle:{color:"red","text-decoration":"underline"}},[e._v("终身禁止验证")]),e._v("！"),i("u-checkbox-group",{staticStyle:{"margin-top":"20upx",float:"right"},attrs:{placement:"column"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.debounce(e.checkboxChange,600,!0)}},model:{value:e.checkboxValue1,callback:function(t){e.checkboxValue1=t},expression:"checkboxValue1"}},[i("u-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.showRefundAlert,expression:"showRefundAlert"}],staticClass:"checkbox animate__animated animate__shakeX",attrs:{labelSize:"18",size:"25",label:"确定非恶意退款，继续退单！",name:!0}})],1)],1)],1),i("u-modal",{attrs:{show:e.showBye,title:"好聚好散！",confirmText:"请前往订单发起退款！"},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.showBye=!1},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmBye.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{"font-size":"40upx","text-align":"justify"}},[i("v-uni-view",{staticStyle:{color:"red"}},[e._v("退款选：未收到货、协商一致，并说明原因！")])],1)],1)],1)},f=[],v={props:{code:null},data:function(){return{showRefund:!1,showRefundAlert:!0,showBye:!1,checkboxValue1:[!1],showAlert:!0,alertTitle:"👆 没开或已停，选1\n      \n      \n      \n      \n      是否开着苹果音乐套餐？不清楚请选1👆\n      \n      \n      \n      \n      👇 开着，选2\n      ",radiolist7:[{label:"1、未订阅：已过期、已取消、未开通",name:1,disabled:!1},{label:"2、订阅中：试用中、开着10元方案、或学生续期",name:2,disabled:!1}],radiovalue7:0,buttonText:"请选择是否订阅中"}},methods:{subscribePersonal:function(){window.open("musics://music.apple.com/deeplink?app=music&p=subscribe")},closeRefund:function(){this.checkboxValue1=[!1],this.showRefund=!1},checkboxChange:function(e){this.checkboxValue1=e,uni.$u.saveAsyncInfo()},groupChange:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;switch(uni.$u.saveAsyncInfo(),this.showAlert=!1,this.$nextTick((function(){e.showAlert=!0})),t){case 1:this.alertTitle="第二步：开通10元方案后，立即回来\n          选2，立即升级为5元方案👇👇👇",this.buttonText="自己先去开个人方案，开完按情况2升级";break;case 2:this.alertTitle="👆 若未订阅必须选1：先订阅个人，再升级",this.buttonText="已在订阅中，下一步";break}},confirmRefund:function(){var e=this;uni.$u.saveAsyncInfo(),this.checkboxValue1[0]?uni.$u.http.post("/pms/am/c/refund",{},{params:{code:this.code}}).then((function(t){t.success&&(e.showRefund=!1,e.showBye=!0,uni.$emit("addInvalidCode",!1))})):(this.showRefundAlert=!1,this.$nextTick((function(){e.showRefundAlert=!0})))},confirmBye:function(){uni.$emit("addInvalidCode")},clickNext:function(){var e=this;uni.$u.saveAsyncInfo(),this.radiovalue7<1?(this.showAlert=!1,this.$nextTick((function(){e.showAlert=!0}))):1!==this.radiovalue7&&2!==this.radiovalue7||uni.$emit("nextStep")},confirmNext:function(){uni.$emit("nextStep")}}},h=v,w=(i("944e"),i("277d")),_=Object(w["a"])(h,p,f,!1,null,"422b8ce6",null,!1,d,n),m=_.exports,g={uAlert:i("3282").default,uGap:i("e383").default,uRow:i("621a").default,uCol:i("9995").default,uOverlay:i("0c21").default,uPopup:i("3626").default,uSwiper:i("ae0e").default,uLink:i("2b11").default},b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{},[e.isMalai?i("v-uni-view",[i("u-alert",{attrs:{title:"Cara menilai sama ada ia berjaya",type:"danger",description:"buka sistem dan tetapkan > nama anda > langganan > untuk memasuki langganan muzik, (kelayakan pengesahan) segera hilang, dan RM 8.90 / cangkuk bulan, itu adalah kejayaan."}}),i("u-gap",{attrs:{height:"30"}}),i("u-row",{staticClass:"btn",attrs:{gutter:"10"}},[i("u-col",{attrs:{span:"12"}},[i("v-uni-button",{staticClass:"ui-btn bg-orange-gradient round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.debounce(e.clickStart,1200,!0)}}},[e._v("Mulakan pengesahan\n          (Start verification)")])],1)],1)],1):i("v-uni-view",[i("u-overlay",{attrs:{duration:100,show:e.showOverlay,opacity:1},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showOverlay=!1}}},[i("v-uni-view",{staticClass:"warp"},[e.showCode?i("img",{staticStyle:{display:"block",width:"600upx",margin:"0 auto"},attrs:{referrer:"no-referrer|origin|unsafe-url",src:"https://article.biliimg.com/bfs/article/82a132435a7fa60ec58192bfd869124befa14985.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showMpCode.apply(void 0,arguments)}}}):e._e()])],1),e.showCode?i("img",{staticClass:"animate__animated animate__swing animate__infinite",staticStyle:{display:"block",width:"120upx",margin:"0 auto"},attrs:{referrer:"no-referrer|origin|unsafe-url",src:"https://article.biliimg.com/bfs/article/e3c87054f1fa28534b3872128deda16c66f2c486.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showMpCode.apply(void 0,arguments)}}}):e._e(),i("u-gap",{attrs:{height:"15"}}),i("v-uni-view",{staticStyle:{"text-align":"center"}},[i("a",{attrs:{color:"#ff4c4c",href:"javascript:;",underLine:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showSuccessPop=!0}}},[e._v("【所有用户】必读！！")])]),i("u-gap",{attrs:{height:"15"}}),i("div",{staticClass:" animate__delay-2s animate__rubberBand animate__flip animate__repeat-3",staticStyle:{"text-align":"center"}},[i("a",{attrs:{color:"#ff4c4c",href:"javascript:;",underLine:!0,text:"学生续期，请注意"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showPop=!0}}},[e._v("【续期用户】必读！！")])]),i("u-gap",{attrs:{height:"15"}}),i("u-row",{staticClass:"btn",attrs:{gutter:"10"}},[i("u-col",{attrs:{span:"12"}},[i("v-uni-button",{staticClass:"ui-btn bg-orange-gradient round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.debounce(e.clickStart,1200,!0)}}},[e._v("开始验证（ Start verification ）")])],1)],1),i("u-gap",{attrs:{height:"15"}}),i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{display:"inline-block",width:"500upx"},attrs:{referrer:"no-referrer|origin|unsafe-url",src:"https://article.biliimg.com/bfs/article/9f551b5847d473ea5e634ae3d3c79af57608cea0.jpg"}})]),i("u-popup",{staticClass:"bg-stripes-grey",attrs:{round:10,show:e.showPop,mode:"bottom",closeable:!0},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.closePop.apply(void 0,arguments)},open:function(t){arguments[0]=t=e.$handleEvent(t),e.showPop=!0}}},[i("v-uni-view",{staticStyle:{"font-size":"35upx","text-align":"left"}},[i("v-uni-view",{staticClass:"animate__flipInX p-3 animate__slow"},[i("v-uni-text",{staticStyle:{"font-size":"30upx"}}),i("u-gap",{attrs:{height:"5"}}),i("div",{staticClass:"borders border-blue p-2 my-2",staticStyle:{"font-size":"32upx",color:"red","border-radius":"12px","text-align":"center"}},[e._v("学生续期：是去年学生优惠，今年续期的用户。")]),i("div",{staticStyle:{"text-decoration":"underline",color:"red"}},[e._v("由于官方要求：需擦除之前学生身份之后，再验证才能成功。将订阅页面截图，以证明您是续期，客服会补发1条备用")]),i("div",[e._v("1、怎么操作：如下图，【音乐里提醒验证】时，点【我已不是大学生】擦除之前的学生信息之后，再验证才能成功")]),i("v-uni-view",[e._v("2、弹窗不定时，只能等着，或重装音乐试试。如果最后几天还没弹出，可以先取消订阅，到期后再验证。")]),i("u-gap"),i("img",{staticClass:"animate__animated animate__pulse animate__infinite",staticStyle:{display:"block",width:"500upx",margin:"0 auto"},attrs:{referrer:"no-referrer|origin|unsafe-url",src:" https://article.biliimg.com/bfs/article/0a86ce629469e2aa669525bd03ef0956ab498275.jpg"}})],1)],1)],1),i("u-popup",{staticClass:"bg-stripes-grey",attrs:{round:10,show:e.showSuccessPop,mode:"bottom",closeable:!0},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.closePop.apply(void 0,arguments)},open:function(t){arguments[0]=t=e.$handleEvent(t),e.showSuccessPop=!0}}},[i("v-uni-view",{staticStyle:{"font-size":"32upx","text-align":"left"}},[i("v-uni-view",{staticClass:"animate__flipInX p-3 animate__slow"},[i("v-uni-text",{staticStyle:{"font-size":"30upx"}}),i("u-gap",{attrs:{height:"5"}}),i("u-swiper",{attrs:{interval:"3500",duration:"800",height:"350",list:e.list,"img-mode":"scaleToFill"}}),i("div",[i("span",{staticStyle:{"text-decoration":"underline",color:"red"}},[e._v("1、是否成功")]),e._v("：参考上图，点开手机设置>顶部姓名>订阅>【进入音乐的订阅】：【验证资格】提醒消失，且5元/月勾上，即成功。"),i("v-uni-view"),i("div",{staticStyle:{"text-decoration":""}},[i("span",{staticStyle:{"text-decoration":"underline",color:"red"}},[e._v("2、能用多久")]),e._v("：学生验证不改变扣费时间，成功后【扣费日期不显示为明年】，且5元/月自动续1年（不用每个月验证），每年下单续1年")]),e._v("****请仔细阅读，勿反复问"),i("span",{staticStyle:{"text-decoration":"underline",color:"red"}},[e._v("是否成功/能用多久")]),e._v("****")],1),i("u-gap")],1)],1)],1),i("u-gap",{attrs:{height:"10"}}),i("div",{staticStyle:{float:"right"}},[i("u-link",{attrs:{href:"https://www.yuque.com/docs/share/0c0049b7-96d6-4cbb-a82b-1b8d34c38481",underLine:!0,color:"#000",text:"附：差评师、恶意退款（全网禁拍名单）咒"}})],1)],1)],1)},y=[],x=(i("55ca"),{props:{code:null},data:function(){return{isMalai:!1,showCode:!1,showOverlay:!1,verifyAddr:null,showAlert:!0,showPop:!1,showSuccessPop:!1,checkboxValue1:[!1],list:["https://article.biliimg.com/bfs/article/39308d28a6dfb737082efbecef19737fccee1160.jpg","https://article.biliimg.com/bfs/article/d58355cda011c2e9cf1a9ab343e693201705b6b9.jpg","https://article.biliimg.com/bfs/article/d82a50ab4e6b2004e28886d7b429d43d2a623356.jpg"]}},created:function(){var e=this;this.ifMaLai(),uni.$on("showWxCode",(function(t){e.showCode=t})),uni.$emit("ifShowWxCode"),this.startVerify(),uni.$on("startVerify",(function(){null!=e.verifyAddr&&e.startVerify()}))},methods:{ifMaLai:function(){var e,t,i=uni.$u.getCache("ms");(null===i||void 0===i||null===(e=i.ip)||void 0===e||null===(t=e.country)||void 0===t?void 0:t.indexOf("马来西亚"))>=0&&(this.isMalai=!0)},showMpCode:function(){this.showOverlay=!this.showOverlay},clickNext:function(){uni.$emit("nextStep")},checkboxChange:function(e){uni.$u.saveAsyncInfo()},closePop:function(){this.showPop=!1,this.showSuccessPop=!1,this.checkboxValue1=[!1]},clickStart:function(){this.jumpStart()},confirmStart:function(){this.checkboxValue1[0]?this.jumpStart():uni.$emit("showNotify","开始前，请勾选：刷脸不扣钱")},jumpStart:function(){null!=this.verifyAddr&&window.open(this.verifyAddr),this.startVerify(1)},subscribePersonal:function(){window.open("musics://music.apple.com/deeplink?app=music&p=subscribe")},startVerify:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.$u.saveAsyncInfo();var i=uni.$u.getCache("ms"),n={i:uni.$u.encrypt({ip:i.ip,sys:i.sys,type:10,code:this.code,t:(new Date).getTime(),extra:t},!0)};uni.$u.http.post("/c/am/s/"+this.code,{},{header:n}).then((function(t){null!==t&&void 0!==t&&t.success?null==e.verifyAddr&&null!=(null===t||void 0===t?void 0:t.result)&&(e.verifyAddr=decodeURIComponent(uni.$u.decrypt(t.result,!0))):(uni.$emit("addInvalidCode"),location.reload())}))}}}),$=x,S=(i("6728"),Object(w["a"])($,b,y,!1,null,"0dfa7776",null,!1,g,a)),k=S.exports,C=i("a8c3"),I={components:{StepOne:m,StepTwo:k,Page1:C["a"]},data:function(){return{showPage:!1,currentStep:1,code:null}},onLoad:function(e){var t=this;this.queryCode(),uni.$on("nextStep",(function(){t.currentStep=++t.currentStep%2,uni.$u.saveAsyncInfo()})),uni.$on("addInvalidCode",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t.addInvalidCode(e)})),uni.$on("showNotify",this.notify)},methods:{queryCode:function(){var e=this;return Object(l["a"])(Object(c["a"])().mark((function t(){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.getCode(),null!=e.code){t.next=3;break}return t.abrupt("return");case 3:e.checkAmEnv()&&e.checkCode();case 4:case"end":return t.stop()}}),t)})))()},notify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$refs.uNotify.show({top:500,type:"error",color:"#fff",bgColor:"#ff4c4c",message:e,duration:3e3,fontSize:25,safeAreaInsetTop:!0})},checkCode:function(){var e,t=this;uni.$u.saveAsyncInfo();var i=null!==(e=uni.$u.getCache("cs"))&&void 0!==e?e:[];if(null!==i&&void 0!==i&&i.includes(this.code))this.checkAmEnv()&&(this.showPage=!0);else{var n=uni.$u.getCache("ms"),a={i:uni.$u.encrypt({ip:n.ip,sys:n.sys,type:10,code:this.code,t:(new Date).getTime()},!0)};uni.$u.http.post("/c/am/q/"+this.code,{},{header:a}).then((function(e){null!==e&&void 0!==e&&e.success?(t.showPage=!0,i.push(t.code),uni.$u.saveRecordIp(t.code,!1),uni.$u.setCache("cs",i,600)):(t.addInvalidCode(),uni.$u.removePage())})).catch((function(e){}))}},getCode:function(){var e,t,i,n=null===(e=this.$Route)||void 0===e||null===(t=e.query)||void 0===t?void 0:t.code,a=null!==(i=uni.$u.getCache("cs1"))&&void 0!==i?i:[];return null==n||null!==a&&void 0!==a&&a.includes(n)?(uni.$u.removePage(),null):(this.code=n,n)},checkAmEnv:function(){var e=uni.$u.checkAmEnv();return e&&uni.setNavigationBarTitle({title:"苹果音乐学生验证"}),e},addInvalidCode:function(){var e,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=null!==(e=uni.$u.getCache("cs1"))&&void 0!==e?e:[];t&&uni.$u.removePage(),i.includes(this.code)||(i.push(this.code),uni.$u.setCache("cs1",i,2592e3))}}},M=I,A=(i("47ce"),Object(w["a"])(M,s,u,!1,null,"3a91e4a0",null,!1,r,o));t["default"]=A.exports},"292c":function(e,t,i){var n=i("c42c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),e.exports=t},"2e4d":function(e,t,i){var n=i("c42c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-3e37c388], uni-scroll-view[data-v-3e37c388], uni-swiper-item[data-v-3e37c388]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-swiper[data-v-3e37c388]{\ndisplay:flex;\nflex-direction:row;justify-content:center;align-items:center;position:relative;overflow:hidden}.u-swiper__wrapper[data-v-3e37c388]{flex:1}.u-swiper__wrapper__item[data-v-3e37c388]{flex:1}.u-swiper__wrapper__item__wrapper[data-v-3e37c388]{\ndisplay:flex;\nflex-direction:row;position:relative;overflow:hidden;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;flex:1}.u-swiper__wrapper__item__wrapper__image[data-v-3e37c388]{flex:1}.u-swiper__wrapper__item__wrapper__video[data-v-3e37c388]{flex:1}.u-swiper__wrapper__item__wrapper__title[data-v-3e37c388]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;right:0;font-size:%?28?%;padding:%?12?% %?24?%;color:#fff;flex:1}.u-swiper__indicator[data-v-3e37c388]{position:absolute;bottom:10px}',""]),e.exports=t},"3a16":function(e,t,i){var n=i("c42c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-422b8ce6]{position:relative;height:%?900?%}.container .explain[data-v-422b8ce6]{position:absolute;top:%?-180?%;color:grey;border:1px dashed red;border-radius:%?10?%}.container .btn[data-v-422b8ce6]{position:absolute;bottom:%?480?%;width:100%}.container .next-btn[data-v-422b8ce6]{position:absolute;bottom:%?50?%}.container img[data-v-422b8ce6]{pointer-events:none}.container[data-v-422b8ce6]  .u-border-bottom:first-child{margin-bottom:%?500?%!important}.container[data-v-422b8ce6]  .u-border-bottom{border-bottom:none!important}',""]),e.exports=t},"417c":function(e,t,i){"use strict";var n;i.r(t);var a,o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-swiper-indicator"},["line"===e.indicatorMode?i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper",class:["u-swiper-indicator__wrapper--"+e.indicatorMode],style:{width:e.$u.addUnit(e.lineWidth*e.length),backgroundColor:e.indicatorInactiveColor}},[i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper--line__bar",style:[e.lineStyle]})],1):e._e(),"dot"===e.indicatorMode?i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper"},e._l(e.length,(function(t,n){return i("v-uni-view",{key:n,staticClass:"u-swiper-indicator__wrapper__dot",class:[n===e.current&&"u-swiper-indicator__wrapper__dot--active"],style:[e.dotStyle(n)]})})),1):e._e()],1)},r=[],s=(i("f2e6"),{props:{length:{type:[String,Number],default:uni.$u.props.swiperIndicator.length},current:{type:[String,Number],default:uni.$u.props.swiperIndicator.current},indicatorActiveColor:{type:String,default:uni.$u.props.swiperIndicator.indicatorActiveColor},indicatorInactiveColor:{type:String,default:uni.$u.props.swiperIndicator.indicatorInactiveColor},indicatorMode:{type:String,default:uni.$u.props.swiperIndicator.indicatorMode}}}),u={name:"u-swiper-indicator",mixins:[uni.$u.mpMixin,uni.$u.mixin,s],data:function(){return{lineWidth:22}},computed:{lineStyle:function(){var e={};return e.width=uni.$u.addUnit(this.lineWidth),e.transform="translateX(".concat(uni.$u.addUnit(this.current*this.lineWidth),")"),e.backgroundColor=this.indicatorActiveColor,e},dotStyle:function(){var e=this;return function(t){var i={};return i.backgroundColor=t===e.current?e.indicatorActiveColor:e.indicatorInactiveColor,i}}}},c=u,l=(i("b638"),i("277d")),d=Object(l["a"])(c,o,r,!1,null,"20a7f6ea",null,!1,n,a);t["default"]=d.exports},"47ce":function(e,t,i){"use strict";var n=i("b8cd"),a=i.n(n);a.a},"4b82":function(e,t,i){"use strict";var n=i("6f45"),a=i.n(n);a.a},6728:function(e,t,i){"use strict";var n=i("7638"),a=i.n(n);a.a},"6f45":function(e,t,i){var n=i("292c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("c061").default;a("d7c40ef2",n,!0,{sourceMap:!1,shadowMode:!1})},7638:function(e,t,i){var n=i("883b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("c061").default;a("6bc618f8",n,!0,{sourceMap:!1,shadowMode:!1})},"7c7c":function(e,t,i){"use strict";var n=i("eeea"),a=i.n(n);a.a},"883b":function(e,t,i){var n=i("c42c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-0dfa7776]{position:relative;height:%?950?%}.container .btn[data-v-0dfa7776]{width:100%;bottom:%?100?%;text-align:right}.warp[data-v-0dfa7776]{display:flex;align-items:center;justify-content:center;height:100%}',""]),e.exports=t},"944e":function(e,t,i){"use strict";var n=i("11a3"),a=i.n(n);a.a},a8c3:function(e,t,i){"use strict";var n,a={uNotify:i("f567").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("u-notify",{ref:"uNotify"}),e._t("default")],2)},r=[],s=i("f3f3"),u=(i("55ca"),{data:function(){return{}},created:function(e){uni.$on("saveAsyncInfo",this.saveAsyncInfo),uni.$on("showNotify",this.notify),uni.$on("ifShowWxCode",this.ifShowWxCode)},methods:{saveAsyncInfo:function(){null==uni.$u.getInfo("ip")&&uni.$u.saveAsyncInfo()},notify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{bgColor:"#ff4c4c",top:10,duration:3e3};this.$refs.uNotify.show(Object(s["a"])({type:"error",color:"#fff",fontSize:25,safeAreaInsetTop:!0,message:e},t))},ifShowWxCode:function(){var e,t,i,n,a,o,r,s,u,c,l,d,p=uni.$u.getCache("ms");(null===p||void 0===p||null===(e=p.ip)||void 0===e||null===(t=e.country)||void 0===t?void 0:t.indexOf("中国"))>=0&&(null===p||void 0===p||null===(i=p.ip)||void 0===i||null===(n=i.city)||void 0===n?void 0:n.indexOf("杭州"))<0&&(null===p||void 0===p||null===(a=p.ip)||void 0===a||null===(o=a.province)||void 0===o?void 0:o.indexOf("台湾"))<0&&(null===p||void 0===p||null===(r=p.ip)||void 0===r||null===(s=r.province)||void 0===s?void 0:s.indexOf("香港"))<0&&(null===p||void 0===p||null===(u=p.ip)||void 0===u||null===(c=u.province)||void 0===c?void 0:c.indexOf("澳门"))<0&&(null===p||void 0===p||null===(l=p.ip)||void 0===l||null===(d=l.province)||void 0===d?void 0:d.indexOf("香港"))<0&&uni.$emit("showWxCode",!1)}}}),c=u,l=(i("4b82"),i("277d")),d=Object(l["a"])(c,o,r,!1,null,"17bb5de4",null,!1,a,n);t["a"]=d.exports},ae0e:function(e,t,i){"use strict";i.r(t);var n,a={uLoadingIcon:i("4d37").default,uSwiperIndicator:i("417c").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-swiper",style:{backgroundColor:e.bgColor,height:e.$u.addUnit(e.height),borderRadius:e.$u.addUnit(e.radius)}},[e.loading?i("v-uni-view",{staticClass:"u-swiper__loading"},[i("u-loading-icon",{attrs:{mode:"circle"}})],1):i("v-uni-swiper",{staticClass:"u-swiper__wrapper",style:{height:e.$u.addUnit(e.height)},attrs:{circular:e.circular,interval:e.interval,duration:e.duration,autoplay:e.autoplay,current:e.current,currentItemId:e.currentItemId,previousMargin:e.$u.addUnit(e.previousMargin),nextMargin:e.$u.addUnit(e.nextMargin),acceleration:e.acceleration,displayMultipleItems:e.displayMultipleItems,easingFunction:e.easingFunction},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}}},e._l(e.list,(function(t,n){return i("v-uni-swiper-item",{key:n,staticClass:"u-swiper__wrapper__item"},[i("v-uni-view",{staticClass:"u-swiper__wrapper__item__wrapper",style:[e.itemStyle(n)]},["image"===e.getItemType(t)?i("v-uni-image",{staticClass:"u-swiper__wrapper__item__wrapper__image",style:{height:e.$u.addUnit(e.height),borderRadius:e.$u.addUnit(e.radius)},attrs:{src:e.getSource(t),mode:e.imgMode},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickHandler(n)}}}):e._e(),"video"===e.getItemType(t)?i("v-uni-video",{staticClass:"u-swiper__wrapper__item__wrapper__video",style:{height:e.$u.addUnit(e.height)},attrs:{id:"video-"+n,"enable-progress-gesture":!1,src:e.getSource(t),poster:e.getPoster(t),title:e.showTitle&&e.$u.test.object(t)&&t.title?t.title:"",controls:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickHandler(n)}}}):e._e(),e.showTitle&&e.$u.test.object(t)&&t.title&&e.$u.test.image(e.getSource(t))?i("v-uni-text",{staticClass:"u-swiper__wrapper__item__wrapper__title u-line-1"},[e._v(e._s(t.title))]):e._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper__indicator",style:[e.$u.addStyle(e.indicatorStyle)]},[e._t("indicator",[e.loading||!e.indicator||e.showTitle?e._e():i("u-swiper-indicator",{attrs:{indicatorActiveColor:e.indicatorActiveColor,indicatorInactiveColor:e.indicatorInactiveColor,length:e.list.length,current:e.currentIndex,indicatorMode:e.indicatorMode}})])],2)],1)},r=[],s=i("0122"),u=(i("1536"),i("54f7"),i("f2e6"),{props:{list:{type:Array,default:uni.$u.props.swiper.list},indicator:{type:Boolean,default:uni.$u.props.swiper.indicator},indicatorActiveColor:{type:String,default:uni.$u.props.swiper.indicatorActiveColor},indicatorInactiveColor:{type:String,default:uni.$u.props.swiper.indicatorInactiveColor},indicatorStyle:{type:[String,Object],default:uni.$u.props.swiper.indicatorStyle},indicatorMode:{type:String,default:uni.$u.props.swiper.indicatorMode},autoplay:{type:Boolean,default:uni.$u.props.swiper.autoplay},current:{type:[String,Number],default:uni.$u.props.swiper.current},currentItemId:{type:String,default:uni.$u.props.swiper.currentItemId},interval:{type:[String,Number],default:uni.$u.props.swiper.interval},duration:{type:[String,Number],default:uni.$u.props.swiper.duration},circular:{type:Boolean,default:uni.$u.props.swiper.circular},previousMargin:{type:[String,Number],default:uni.$u.props.swiper.previousMargin},nextMargin:{type:[String,Number],default:uni.$u.props.swiper.nextMargin},acceleration:{type:Boolean,default:uni.$u.props.swiper.acceleration},displayMultipleItems:{type:Number,default:uni.$u.props.swiper.displayMultipleItems},easingFunction:{type:String,default:uni.$u.props.swiper.easingFunction},keyName:{type:String,default:uni.$u.props.swiper.keyName},imgMode:{type:String,default:uni.$u.props.swiper.imgMode},height:{type:[String,Number],default:uni.$u.props.swiper.height},bgColor:{type:String,default:uni.$u.props.swiper.bgColor},radius:{type:[String,Number],default:uni.$u.props.swiper.radius},loading:{type:Boolean,default:uni.$u.props.swiper.loading},showTitle:{type:Boolean,default:uni.$u.props.swiper.showTitle}}}),c={name:"u-swiper",mixins:[uni.$u.mpMixin,uni.$u.mixin,u],data:function(){return{currentIndex:0}},watch:{current:function(e,t){e!==t&&(this.currentIndex=e)}},computed:{itemStyle:function(){var e=this;return function(t){var i={};return e.nextMargin&&e.previousMargin&&(i.borderRadius=uni.$u.addUnit(e.radius),t!==e.currentIndex&&(i.transform="scale(0.92)")),i}}},methods:{getItemType:function(e){return"string"===typeof e?uni.$u.test.video(this.getSource(e))?"video":"image":"object"===Object(s["a"])(e)&&this.keyName?e.type?"image"===e.type?"image":"video"===e.type?"video":"image":uni.$u.test.video(this.getSource(e))?"video":"image":void 0},getSource:function(e){return"string"===typeof e?e:"object"===Object(s["a"])(e)&&this.keyName?e[this.keyName]:(uni.$u.error("请按格式传递列表参数"),"")},change:function(e){var t=e.detail.current;this.pauseVideo(this.currentIndex),this.currentIndex=t,this.$emit("change",e.detail)},pauseVideo:function(e){var t=this.getSource(this.list[e]);if(uni.$u.test.video(t)){var i=uni.createVideoContext("video-".concat(e),this);i.pause()}},getPoster:function(e){return"object"===Object(s["a"])(e)&&e.poster?e.poster:""},clickHandler:function(e){this.$emit("click",e)}}},l=c,d=(i("7c7c"),i("277d")),p=Object(d["a"])(l,o,r,!1,null,"3e37c388",null,!1,a,n);t["default"]=p.exports},b638:function(e,t,i){"use strict";var n=i("13c4"),a=i.n(n);a.a},b8cd:function(e,t,i){var n=i("d702");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("c061").default;a("0f052e52",n,!0,{sourceMap:!1,shadowMode:!1})},d702:function(e,t,i){var n=i("c42c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page[data-v-3a91e4a0]{display:flex;justify-content:center;height:100vh;align-items:center}',""]),e.exports=t},e092:function(e,t,i){var n=i("c42c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-20a7f6ea], uni-scroll-view[data-v-20a7f6ea], uni-swiper-item[data-v-20a7f6ea]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-swiper-indicator__wrapper[data-v-20a7f6ea]{\ndisplay:flex;\nflex-direction:row}.u-swiper-indicator__wrapper--line[data-v-20a7f6ea]{border-radius:100px;height:4px}.u-swiper-indicator__wrapper--line__bar[data-v-20a7f6ea]{width:22px;height:4px;border-radius:100px;background-color:#fff;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-swiper-indicator__wrapper__dot[data-v-20a7f6ea]{width:5px;height:5px;border-radius:100px;margin:0 4px}.u-swiper-indicator__wrapper__dot--active[data-v-20a7f6ea]{width:12px}',""]),e.exports=t},eeea:function(e,t,i){var n=i("2e4d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("c061").default;a("834e4dea",n,!0,{sourceMap:!1,shadowMode:!1})}}]);