"use strict";(self["webpackChunkvue_h5_template"]=self["webpackChunkvue_h5_template"]||[]).push([[5224],{5224:function(t,s,i){i.r(s),i.d(s,{default:function(){return v}});var e=i(5791),r=(i(4823),i(8521)),a=(i(1963),function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s(r.Z,{attrs:{title:"我的风险等级","left-arrow":"",fixed:"",placeholder:""},on:{"click-left":t.onClickLeft}}),s("div",{staticClass:"home"},["new"==t.status?[s("div",{staticClass:"ft"},[t._v("您尚未做过风险测评，为了更好的为您匹配适合您风险承受能力的产品，请进行风险测评")]),s("div",{staticClass:"bt-div btone"},[s(e.Z,{attrs:{color:"linear-gradient(to right, rgb(0,199,198), rgb(0,125,252))"},on:{click:function(s){return t.mpButtonClick("test")}}},[t._v("风险测评")])],1),s("div",{staticClass:"bt-div2 bttwo"},[s(e.Z,{on:{click:function(s){return t.mpButtonClick("bug")}}},[t._v("购买产品")])],1)]:t._e(),"old"==t.status?[s("div",{staticClass:"ft2"},[t._v("您的风险承受等级为")]),s("div",{staticClass:"ft3"},[t._v(t._s(t.riskLevel))]),s("div",{staticClass:"ft4"},[t._v("适合投资高风险及以下产品")]),s("div",{staticClass:"ft5"},[t._v("测评有效期："+t._s(t.riskTime))]),s("div",{staticClass:"bt-div3 btthree"},[s(e.Z,{attrs:{color:"linear-gradient(to right, rgb(0,199,198), rgb(0,125,252))"},on:{click:function(s){return t.mpButtonClick("test")}}},[t._v("重新测评")])],1),s("div",{staticClass:"ft6"},[t._v("若您的信息发生变化，请及时重新测评")])]:t._e()],2)],1)}),l=[],c={name:"risk",data(){return{status:"old",riskLevel:"R5-激进型",riskTime:"2023-07-05"}},methods:{onClickLeft(){this.$router.go(-1)},mpButtonClick(t){"test"==t?this.$router.push("riskTest"):this.$router.push("")}}},n=c,o=i(1001),u=(0,o.Z)(n,a,l,!1,null,"cc4d0564",null),v=u.exports}}]);