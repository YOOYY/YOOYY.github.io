"use strict";(self["webpackChunkvue_h5_tlate"]=self["webpackChunkvue_h5_tlate"]||[]).push([[2116],{9394:function(t,s,i){i.r(s),i.d(s,{default:function(){return b}});var n=i(5791),a=(i(4823),function(){var t=this,s=t._self._c;return s("div",{staticClass:"buy_contain"},[s("div",{staticClass:"buy_box"},[t._m(0),s("div",{staticClass:"card d_mount"},[s("mp-amount",{attrs:{title:"买入金额",valueTest:t.amount,showBalance:!1,message:t.message,isShow:t.isShow,amountUnit:t.amountUnit},on:{input:t.inputMoney}},[s("div",{attrs:{slot:"buy"},slot:"buy"},[s("div",{staticClass:"d_buy"},[t._v("购买确认日：10-10星期一 ( 以09-30 星期五 净值确认份额 )")])])])],1),s("div",{staticClass:"d_bank card"},[s("div",{staticClass:"bank_title"},[t._m(1),s("div",{staticClass:"confirmed_line"}),s("div",{staticClass:"bank_box"},[s("div",{staticClass:"remind_box"},[s("img",{staticClass:"bank_incon",attrs:{src:i(6731),alt:""}}),s("span",{staticClass:"bank_num"},[t._v(t._s(t.accountNo))])]),s("div",{staticClass:"remind_box row",on:{click:function(s){return s.stopPropagation(),t.changeBank.apply(null,arguments)}}},[s("span",{staticClass:"bank_change"},[t._v("更换银行卡")]),s("img",{staticClass:"row-bt-icon",attrs:{src:i(3577),alt:""}})])])]),s("div",{staticClass:"bank_list"},t._l(t.bankList,(function(n,a){return s("div",{key:a,staticClass:"bank_item row",class:[t.indexActive==a?"bank_item":"bank_item1"],on:{click:function(s){return t.clickBank(a)}}},[s("div",{staticClass:"list_box"},[s("div",{staticClass:"bank_img row"},[s("img",{staticClass:"type_incon",attrs:{src:i(9144),alt:""}}),s("span",{staticClass:"bank_text"},[t._v(t._s(n.type))])]),s("span",{staticClass:"bank_msg"},[t._v(t._s(n.msg))])]),s("div",{staticClass:"bank_cricle"},[s("img",{staticClass:"agreement_icon",attrs:{src:t.indexActive==a?t.agreementIcon1:t.agreementIcon}})])])})),0)]),s("div",{staticClass:"inner_agreement row",on:{click:function(s){return t.clickAgreement()}}},[t.isShowAgreement?t._e():s("img",{staticClass:"agreement_icon",attrs:{src:i(4046),alt:""}}),t.isShowAgreement?s("img",{staticClass:"agreement_icon",attrs:{src:i(7620),alt:""}}):t._e(),s("span",{staticClass:"agreement_msg"},[t._v("我已阅读并同意以下协议")])]),s("div",{staticClass:"agreement"},[t._v("《xxxxxxxxxxx协议》")]),s("div",{staticClass:"agreement"},[t._v("《xxxxxxxxxxx协议》")]),s("div",{staticClass:"bt-div"},[s(n.Z,{attrs:{color:"linear-gradient(to right, rgb(0,199,198), rgb(0,125,252))",disabled:!(t.amount&&t.isShowAgreement)},on:{click:t.clickConfirm}},[t._v("下一步")])],1),s("mp-bank",{attrs:{visible:t.isShowBank,bankList:t.bankList1},on:{"update:visible":function(s){t.isShowBank=s},closeBank:t.closeBank,clickBank:t.clickBank1},model:{value:t.accountNo,callback:function(s){t.accountNo=s},expression:"accountNo"}}),s("mp-agreement",{attrs:{visible:t.isAgreement,isShowMsg:t.isShowMsg,msgArea:t.msgArea,textRead:t.textRead},on:{"update:visible":function(s){t.isAgreement=s},clickOne:t.clickOne,next:t.next,closeIcon:t.closeIcon}})],1)])}),e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"d_title"},[s("span",{staticClass:"d_product"},[t._v("杭银理财-幸福99半年添益理财")]),s("span",{staticClass:"d_name"},[t._v("产品代码：D306")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"hold_remind"},[s("span",{staticClass:"remind_name"},[t._v("支付方式")])])}],c=i(2406),o=i(4755),l=(i(5010),function(){var t=this,s=t._self._c;return s("div",{staticClass:"bank_contain"},[s(o.Z,{style:{height:"50%"},attrs:{value:t.visible,round:"",position:"bottom","close-on-click-overlay":!1},on:{"click-overlay":t.clickOverlay}},[s("div",{staticClass:"box"},[s("div",{staticClass:"box_header"},[s("div",{staticClass:"header"},[s("div",{staticClass:"bank_title"},[s("span",{staticClass:"header_text"},[t._v("选择支付方式")])]),s("div",{staticClass:"bank_img"},[s("img",{staticClass:"delete_icon",attrs:{src:i(9936),alt:""},on:{click:t.close}})])])]),s("div",{staticClass:"confirmed_line"}),s("div",{staticClass:"drop-content"},t._l(t.bankList,(function(n,a){return s("div",{key:a,staticClass:"scroller_box"},[s("div",{staticClass:"bank_box"},[s("div",{staticClass:"remind_box"},[s("img",{staticClass:"bank_incon",attrs:{src:i(6731),alt:""}}),s("span",{staticClass:"bank_num"},[t._v(t._s(n.title))])]),s("div",{staticClass:"bank_cricle",on:{click:function(s){return t.clickBank(n,a)}}},[s("img",{staticClass:"agreement_icon",attrs:{src:t.indexActive==a?t.agreementIcon1:t.agreementIcon}})])]),s("div",{staticClass:"bank_list"},t._l(n.list,(function(i,n){return s("div",{key:n,staticClass:"bank_item"},[s("div",{staticClass:"list_box"},[s("div",{staticClass:"bank_img"},[s("img",{staticClass:"type_incon",attrs:{src:i.icon,alt:""}}),s("span",{staticClass:"bank_text"},[t._v(t._s(i.type))])]),s("span",{staticClass:"bank_msg"},[t._v(t._s(i.msg))])])])})),0)])})),0)])])],1)}),r=[],m={props:{visible:{type:Boolean,default:!1},bankList:{type:Array,default:function(){return[]}}},data:function(){return{isShow:!1,indexActive:0,agreementIcon1:i(7620),agreementIcon:i(4046)}},methods:{clickOverlay:function(){this.$emit("update:visible",!1)},clickList:function(t,s){this.info=t,this.$emit("clickList",t,s)},close:function(){this.$emit("closeBank")},clickBank:function(t,s){this.$emit("clickBank",t,s),this.indexActive=s}}},h=m,u=i(1001),g=(0,u.Z)(h,l,r,!1,null,"4805c5b3",null),k=g.exports,d=i(6549),v=i(4240),_={components:{MpAmount:c.Z,MpBank:k,MpAgreement:d.Z},data:function(){return{amount:"",message:"余额不足",isShow:!1,isShowBank:!1,isShowAgreement:!1,isAgreement:!1,amountUnit:"",indexActive:0,isShowMsg:!1,password:"",showKeyboard:!1,checked:!1,msgArea:"",textRead:"本人已阅读风险揭示，愿意承担投资风险",agreementIcon1:i(7620),agreementIcon:i(4046),bankList:[{type:"银联快捷支付",msg:"单笔限额20万，单日限额20万，当月限额500万"},{type:"通联支付",msg:"单笔限额20万，单日限额20万，当月限额500万"},{type:"转账",msg:"具体限额以银行转账限制为准"}],accountNo:[],bankList1:[{title:"杭州银行(8888*8888)",list:[{type:"银联快捷支付",msg:"单笔限额20万，单日限额20万，当月限额500万",icon:i(9144)},{type:"通联支付",msg:"单笔限额20万，单日限额20万，当月限额500万",icon:i(9144)},{type:"转账",msg:"单笔限额20万，单日限额20万，当月限额500万",icon:i(9144)}]},{title:"杭州银行2(8888*8888)",list:[{type:"银联快捷支付",msg:"单笔限额20万，单日限额20万，当月限额500万",icon:i(9144)},{type:"通联支付",msg:"单笔限额20万，单日限额20万，当月限额500万",icon:i(9144)},{type:"转账",msg:"单笔限额20万，单日限额20万，当月限额500万",icon:i(9144)}]}]}},created:function(){v.QP(),setTimeout((function(){v.Zk()}),2e3),v.d4({title:"购买",isShow:!0}),this.accountNo=this.bankList1[0].title},methods:{onClickLeft:function(){this.$router.go(-1)},inputMoney:function(t){this.amount=t,t.length>=4?(this.isShow=!0,4==t.length?this.amountUnit="千":5==t.length?this.amountUnit="万":6==t.length?this.amountUnit="十万":7==t.length?this.amountUnit="百万":8==t.length?this.amountUnit="千万":9==t.length?this.amountUnit="亿":10==t.length?this.amountUnit="十亿":11==t.length?this.amountUnit="百亿":12==t.length?this.amountUnit="千亿":13==t.length&&(this.amountUnit="亿")):this.isShow=!1},clickBank:function(t){this.indexActive=t},clickBank1:function(t,s){this.isShowBank=!1,this.accountNo=t.title},changeBank:function(){this.isShowBank=!this.isShowBank},closeBank:function(){this.isShowBank=!1},clickConfirm:function(){this.isAgreement=!0},clickOne:function(){this.msgArea=this.textRead,this.isShowMsg=!1},closeIcon:function(){this.isAgreement=!1,this.isShowMsg=!1,this.msgArea=""},clickAgreement:function(){this.isShowAgreement=!this.isShowAgreement},next:function(){var t=this;this.msgArea&&this.msgArea===this.textRead?(this.isShowMsg=!1,this.msgArea="",this.isAgreement=!1,v.Dy().then((function(s){s.psd&&6==s.psd.length&&t.$router.push({name:"result"}),s.type&&1===s.type&&t.$router.push({name:"tradePswReset"})})).catch((function(t){}))):this.isShowMsg=!0}}},A=_,C=(0,u.Z)(A,a,e,!1,null,"394dd16c",null),b=C.exports},9144:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6ElEQVRIie2WTWhcVRiGn/fMGLtJFVKQIMWfTUJr7NhFjSWIC6mEJCtBXQppc0nMJhtXiuM+mFWSSdKV6MIiiGYqlC4qgikWpFN/Kq3QiKQkkVa0WhLJzHldzG3RkFQ75o4b39W55577Pc/lnHPvEcDimeKun39del1iwNCJHcgiUhS+hDnZtmf3m3sPT6xp8Uxx1y+/LZ21XcgEuq2Lvmpra30yf+Pm0mu2C0LRYkZiQaKWBdQmh+nGDNvuun7txhv5aPcDEDT3RP/cSBbgTXmnMn8UzCug/iDoABDxbBPgAAS8AGDRETABwDHEZglYdZZwLpvVfhfJ326Jh86fPFZoBtTRD9/GVj4a/N3Q0gzw5khk9MG5i/xpCvSqgj5sCrUW+wxv/UVA1kqhb+5yM/gXyscOOtY33X8+Bf8L5P9+yJ1jWyMjI10xxv2SVkMI52q1Wg9wXy6X+3JqaurbzARGR0cfSZLkbaAnlSHGaEAA1WqVJEnKkgZLpdKPW9VoeAqKxWLLxsbGB0CPpKqki8D6Lbikq3Un98cY37WtHRVYWVnps30AWA8hdM/MzOwHOiStpALHQwi9kiLwbJIkh3ZUIMb4eNr8fHp6+guA2dnZH4D59P6+Uql0yvaVdFzXjgqEEK4ASHpsaGhoD9SnxfbhtP/q8PDwo5L2pteLW9VpeBHmcrmPY4yrth+QVEmS5PTy8vJTpAcc4GCM8Zzte4HL7e3tn235Io0KTE5OXg8hvASs2n7Q9su2b8Gx/bTtNknfS3qhWCyub1XnX23DUqn0ydjY2L61tbXnbXcCF4HvgGds3w9caG1tfX98fPzmdjXylqrYLcgNyUxMTPwEzG3q/vROzzhyT73BRhB8nfY/14hAY/GRtPFNHnECc8j2i+fnB3eLsCA5kwOqrQCx23YfACG8J/tErlI+NY/pzQK6fXS6MHCkV3Uzq1IeOio8YNwJyugv6SjrErh8YOD4rCTLdjasf5g/AH1yQAKR/A2ZAAAAAElFTkSuQmCC"}}]);