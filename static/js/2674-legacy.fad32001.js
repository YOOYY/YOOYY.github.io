"use strict";(self["webpackChunkvue_h5_template"]=self["webpackChunkvue_h5_template"]||[]).push([[2674],{5547:function(t,e,o){o.d(e,{Z:function(){return r}});var n=function(){var t=this,e=t._self._c;return e("div",t._g({staticClass:"mp-button",style:t.btnStyle},t.$listeners),[e("span",{staticClass:"button-txt",style:t.btnTxtStyle},[t._v(t._s(t.title))])])},l=[],a={props:{btnStyle:{type:Object,default:()=>({"background-image":"linear-gradient(to right, rgb(0,199,198), rgb(0,125,252))"})},btnTxtStyle:{type:Object,default:()=>({})},title:{type:String,default:"下一步"}},methods:{}},s=a,c=o(1001),i=(0,c.Z)(s,n,l,!1,null,"17acc158",null),r=i.exports},2674:function(t,e,o){o.r(e),o.d(e,{default:function(){return k}});var n=o(1392),l=(o(3247),o(89)),a=(o(4478),o(4755)),s=(o(5010),o(7221)),c=(o(5292),o(9233)),i=(o(6716),o(960)),r=(o(2268),o(8521)),u=(o(1963),function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-container"},[e(r.Z,{attrs:{title:"重置交易密码","left-arrow":"",fixed:"",placeholder:""},on:{"click-left":function(e){return t.$router.back()}}}),e("div",{staticClass:"container"},[e(i.Z,{ref:"form",staticClass:"box",on:{submit:t.onSubmit}},[e(c.Z,{attrs:{title:"证件类型","is-link":"",value:"身份证"},on:{click:t.handleClick}}),e(s.Z,{attrs:{name:"name",label:"证件姓名",placeholder:"请输入证件姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e(s.Z,{attrs:{name:"code",label:"证件号码",placeholder:"请输入证件号码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),e(s.Z,{attrs:{name:"bankNo",label:"银行卡号",placeholder:"请输入完整银行卡号"},model:{value:t.bankNo,callback:function(e){t.bankNo=e},expression:"bankNo"}}),e(s.Z,{attrs:{name:"phone",label:"预留手机号",placeholder:"请输入预留手机号吗"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),e(s.Z,{attrs:{name:"verifyNo",label:"短信验证码",placeholder:"请输入验证码"},scopedSlots:t._u([{key:"button",fn:function(){return[e("div",{staticClass:"btn",attrs:{slot:"value"},slot:"value"},[t._v("获取验证码")])]},proxy:!0}]),model:{value:t.verifyNo,callback:function(e){t.verifyNo=e},expression:"verifyNo"}})],1),e("MpButton",{staticClass:"submit-btn",on:{click:function(e){return t.$refs.form.submit()}}},[t._v("确认")])],1),e(a.Z,{attrs:{round:"",position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e(l.Z,{attrs:{"show-toolbar":"",columns:t.columns},on:{cancel:function(e){t.show=!1},confirm:t.onConfirm}})],1),e("v-dialog",{attrs:{title:"修改成功",confirmButtonColor:"#007dfc"},model:{value:t.resShow,callback:function(e){t.resShow=e},expression:"resShow"}},[e("div",{staticClass:"dialog-content"},[e(n.Z,{attrs:{"class-prefix":"mp-icon",name:"cancel",size:"40",color:"#007dfc"}})],1)])],1)}),f=[],d=(o(1401),o(1610)),p=o(5547),b={data(){return{type:"id",name:"",code:"",bankNo:"",phone:"",verifyNo:"",show:!1,resShow:!1,columns:["身份证"]}},components:{"v-dialog":d.Z.Component,MpButton:p.Z},methods:{onSubmit(t){this.resShow=!0},handleClick(){this.show=!0},onConfirm(t){this.show=!1,this.type=t}}},m=b,h=o(1001),v=(0,h.Z)(m,u,f,!1,null,"0c9cf92c",null),k=v.exports}}]);