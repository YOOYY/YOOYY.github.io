"use strict";(self["webpackChunkvue_h5_tlate"]=self["webpackChunkvue_h5_tlate"]||[]).push([[3539],{2533:function(t,e,s){s.d(e,{Z:function(){return u}});var i=s(89),c=(s(4478),s(4755)),a=(s(5010),function(){var t=this,e=t._self._c;return e("div",{staticClass:"contain"},[e(c.Z,{attrs:{round:"",position:"bottom","close-on-click-overlay":!1},on:{"click-overlay":t.clickOverlay},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e(i.Z,{attrs:{"show-toolbar":"",columns:t.columns},on:{confirm:t.onConfirm,cancel:t.onCancel,change:t.onChange}})],1)],1)}),n=[],l={props:{visible:{type:Boolean,default:!1},columns:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{clickOverlay:function(){this.$emit("update:visible",!1)},onConfirm:function(t){this.$emit("confirm",t)},onCancel:function(){this.$emit("cancel")},onChange:function(t,e){this.$emit("change",t,e)}}},o=l,A=s(1001),r=(0,A.Z)(o,a,n,!1,null,"7a5cebe8",null),u=r.exports},3539:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var i=s(2533),c=s(5791),a=(s(4823),s(7221)),n=(s(1453),s(9233)),l=(s(6716),function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"home"},[e("div",{staticClass:"box-content"},[e("div",{staticClass:"content_name mgtp20"},[t._v("持卡人："+t._s(t.username))]),e("div",{staticClass:"content-common mgtp20"},[e(a.Z,{attrs:{label:"银行卡",placeholder:"请输入银行借记卡一类卡卡号",center:"",clearable:"","label-class":"labelClass"},model:{value:t.bankNum,callback:function(e){t.bankNum=e},expression:"bankNum"}})],1),e("div",{staticClass:"content-tip mgtp20"},[t._v("为保证后续赎回产品时款项顺利到账,请勿绑定银行二类账户。")]),e("div",{staticClass:"content-common mgtp20"},[e(n.Z,{attrs:{title:"开户所在地","title-class":"titleClass"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("div",{staticClass:"right_div",on:{click:t.selectAddress}},[t.bankAddress?t._e():e("div",{staticClass:"right_tip"},[t._v("请选择")]),t.bankAddress?e("div",{staticClass:"right_text"},[t._v(t._s(t.bankAddress))]):t._e(),e("img",{staticClass:"right_img2",attrs:{src:t.right_img}})])]},proxy:!0}])}),e(n.Z,{attrs:{title:"开户银行","title-class":"titleClass"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("div",{staticClass:"right_div"},[t.bankName?t._e():e("div",{staticClass:"right_tip",on:{click:t.selectBank}},[t._v("请选择")]),t.bankName?e("div",{staticClass:"right_text",on:{click:t.selectBank}},[t._v(t._s(t.bankName))]):t._e(),e("img",{staticClass:"right_img",attrs:{src:t.tip_img}})])]},proxy:!0}])})],1),e("div",{staticClass:"content-common mgtp20"},[e(a.Z,{attrs:{label:"银行预留手机",type:"number",maxlength:"11",placeholder:"请输入银行预留手机",center:"",clearable:"","label-class":"labelClass"},model:{value:t.phoneNum,callback:function(e){t.phoneNum=e},expression:"phoneNum"}}),e(a.Z,{attrs:{label:"短信验证码",type:"number",maxlength:"6",placeholder:"请输入验证码",center:"",clearable:"","label-class":"labelClass"},scopedSlots:t._u([{key:"button",fn:function(){return[e("div",{staticClass:"sms_ft"},[t._v("获取验证码")])]},proxy:!0}]),model:{value:t.smsNum,callback:function(e){t.smsNum=e},expression:"smsNum"}}),e(a.Z,{attrs:{label:"交易密码",placeholder:"请输入交易密码",center:"",clearable:"","label-class":"labelClass"},model:{value:t.psw,callback:function(e){t.psw=e},expression:"psw"}})],1),e("div",{staticClass:"content-agree",on:{click:t.selectAgree}},[t.selectFg?e("img",{staticClass:"select-img",attrs:{src:t.selectImg}}):t._e(),t.selectFg?t._e():e("img",{staticClass:"select-img",attrs:{src:t.noselectImg}}),e("div",{staticClass:"content-agree-ft"},[t._v("我已阅读并同意以下协议")])]),t._m(0)]),e("div",{staticClass:"bt-div"},[e(c.Z,{attrs:{color:"linear-gradient(to right, rgb(0,199,198), rgb(0,125,252))"},on:{click:t.mpButtonClick}},[t._v("下一步")])],1)]),e(i.Z,{attrs:{visible:t.isShowPicker,columns:t.timeList},on:{"update:visible":function(e){t.isShowPicker=e},confirm:t.confirm,cancel:t.cancel,change:t.change}})],1)}),o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-book"},[e("div",{staticClass:"content-book-ft"},[t._v("《xxxxxxxxxxx协议》")])])}],A=s(4240),r={name:"openBank",data:function(){return{right_img:s(9602),tip_img:s(6019),username:"名字",bankNum:"",bankAddress:"",bankName:"",phoneNum:"",smsNum:"",psw:"",selectFg:!1,selectImg:s(9004),noselectImg:s(6890),isShowPicker:!1,timeList:["杭州","宁波","温州","绍兴","湖州","嘉兴","金华","衢州"]}},mounted:function(){A.d4({title:"添加银行卡",isShow:!0})},methods:{onClickLeft:function(){this.$router.go(-1)},selectAddress:function(){this.isShowPicker=!0},confirm:function(){this.isShowPicker=!1},cancel:function(){this.isShowPicker=!1},change:function(){},selectBank:function(){this.$router.push("/bankSelect")},selectAgree:function(){this.selectFg=!this.selectFg},mpButtonClick:function(){this.$router.push("/openPsw")}}},u=r,m=s(1001),g=(0,m.Z)(u,l,o,!1,null,"14d5fb7a",null),d=g.exports},9602:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAACXBIWXMAAAsTAAALEwEAmpwYAAACOUlEQVQ4jZWVvYsTQRiHf2/iGRIkiI3ddSlSpMjMIFZyCmJjI8qJnnKHiBYX0cKTkzsUQdQ7LVTQ4jgRBSEoiCJaiKIQy/lIk85/wMLGQkLM7muR3TAX4+7mrXZ+s88zHzvskDFmkZlvATCFQuFErVb7gQkqF8FlAPt7vV5Laz09kYCIdNxg5gqAlnOukllQKpVmich42XQQBC2tdS2ToFqt/iyXywcAfPPy3QC+ttvtPakCAKhUKr8AHALw0evb1e/3PznnZpIE5Dc6nc72brfbZOYjXtzN5/NH6/X6h1QBADBz3lr7lJlPe/EfAHNKqVdjl7DFSBQIIeaJ6LEXTxFR01p7JlUQSVhKuQhgzZtZjpk3tdYXUwVxKaWWiWjFkxCA+9ba1eFgSYK4jDENAA8jQTzLu1LKK5kEkWSBmTcB5D3JamZBJFlh5pue4HviHozAewFcHom/ZJqBtXYfM79n5h1e/LZYLM6mCpxzB4MgeAOgFGdE9FIIMUdE/cQlGGMOh2H4zocBPBdCnCSiPpBwDqy1x5j5NTMXvJE3pJQLRBTE2ViBMeZUGIZNAFMe/EBKeZ6I2H/3H4HW+iyAZ/C+N4A7UspL4wbbIjDGNIhog5n9/LpS6uo4GPCOsjFmiZnXR/qXlFL3/gcPBVrrawBuDMPBOi9IKR8lwQBAWutlALc9OCSic0KIJ2kwAGwjogbzcGMDAPNCiBdZYGBwsXyOnn/ncrnjUsrMMIDBn8Y5N+Oc2zkRGNVf6SbkBtjUZkYAAAAASUVORK5CYII="},6890:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9UlEQVRYhc2XTWvbWBSGn3MjK1cIYghMkE2yqzcVzCqFbLvtQCDr+RezDXQRyDb/IutAoOtsA0NWg7txdzG20IDBAeFbS9aZRS2jpi0VSezOuxXc59X9OOc9QkP1+33fOfcWOFbV10BXRLoAqjoCRiLyEbi21t7EcTxvsq40AEez2ew98Cew09DvA3AZBMFZHMfJkwwMBoPt6XR6KiJ/qWoI4Ps+YRhircXzPLa2tgBYLBYURYFzjizLmM+//LyIZKp60W63z3u93ufGBvr9fuScu1LVI4AwDNnd3aXVajX4ecjznMlkQpZllZFba+3J93bjGwN3d3e/q+oHYN/zPPb29rDWNgI/lnOONE0pigJgCLw7PDz854cGluf9N7BvrSWKIowxT4JXKsuSJElwzgEMgyB4U9+J1eqDwWDbOXdVwTudzrPhAMYYOp1OtYv7zrmrwWCw/Y2B6XR6qqpHnucRRREiP30gjSUiRFGE53mo6tF0Oj1dfYPVpfukqmG3233ymf9MzjlGoxEikllrX8VxnBiA2Wz2XlXD6omtS9ZawjBEVcNlbUH6/b4/m83+BXYODg4aP7WnKs9z7u/vAR6CIPjNLMvrju/7a4cDtFotfN8H2HHOvTXAMXwpNptSjXVslo1lrWf/WBVLVV8boAvged7GDNRYXVO11KqxbEIVS0S6zy91z5CqqlmGCRaLxcbANdbYACOg6lgbUY01MssYVXWrjahiichHA1wDq/CwCdVY18ZaewM8zOdz8jxfOzzP8yqyPVhrb8wyvV4CTCaTtRuoMS7jOJ4bgCAIzkQky7JsrXehCq0ikgVBcAbLQBLHcaKqFwBpmlKW5YvDy7IkTVMAVPWiimWrQtRut89F5LYoCpIkQVVfDK6qJElCURSIyG273T6vvq0M9Hq9z9baE2DonGM8Hr/ITpRlyXg8XoVSa+1JfUb4qhTHcZyIyB+VieFw+Kw78WiNIfDu8Wzw/xtMKv3S0ayuXzacfsfIWsbz/wBBJb4fNIpO9AAAAABJRU5ErkJggg=="},9004:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1UlEQVRIic2XS2hTURCGv5kUHxsFRcFAV75d6CK4aLG6UMSilVKV2oqufC2kWrvRhXotWldBcSEIKj7QorRSC4rgQkWQIr4QRLGoi0gCpaIE0Vq8Z1zc1jRNYlJN0Fldzsw938w5l3/mCoWYZwpU4lwtZhFEwkB4yBvHLI7IE1S7gId44vJtKXmAE/BdE0ILZtMLSlKkDyNKSE/iycDYwQdtHeaOg5UXBMzcOoZoM63Smc2rGStmwiH/KOZ3/DkUwMoxvyPYyzIKTF8wEw65dszq/xyYxUSuclgbELHhpfSKPXek6FAAs3o8dyQtl19PB21dcLwlNAmtH77zABx8vW/+7k4LIscI6Rw8GQiO2ndNpYBOLIPuRqWrYfhGrTxggeKZIrQUGzouBJ0blZp5wut+SzmEFjzTQJEKFYcCrUyhfYNSPUc499Sx/84IcMCqVJyrLSZUBS7UCXULhPYXjm03DBsd5FytYhYpFlSA02uFxoVK1ytjy3XDZVABs4gOCX5R7ES1sDWi3O416q85fuRqFSJhJdVl/sqOrRCaKpR77426dseg/9vwcKZWD9nDrUp3ozJ5fH7ogWXCvqVKT8youez49iPPC4YpEM/me5owauYJPduV2VNy77G3UmhdrjxLGNWXHF8G8yeKkFDMsoJ33TR233LMngqPdigrZ2bG7FwsRFcpL/uMlRccn3N231FmFldEnuTyn+wxVl10GHBrs7KnIiXtWxYJp9YIvR+NFecd/V8LhAKoPBY8W4LvP/hd3Kwp0L1JmT8tEIS77+B8nfAhCVVnHLHkGKAAoVCV4JniXCKfek0aD1fWK6vnBlXHk8bSs463n8YIFelDdYbiicOI5otPfoe1Vxxt9x3PE8HxjhkKYETxxP3jtujJAKLNpYUCos3Dk2dKQFqlE5W2kkFV2kZOnP/JsCdiHNaGolau0jYaCv9woP8Pf2HSEyj6T9tPIqBFAi6BTtMAAAAASUVORK5CYII="},6019:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXUlEQVRIiaWWzW8bVRTFf/dpYuys2FVxpDYRC9pEAcYzgIiEV2xJQrIj/wEr1G0i0UW6j1h0w7rZpVjZsmtopBbPjMFyWomFS6MkAq9AkFiW5l0Wfg6m8sc4PdJI83HuOfe9uTP3ChlQq9X8NE1XVbUMzIpIUVUVOAdOReSxMabi+35tnJaMehjH8Ya1dge4DSAix6r6EjhzlKKIzKnqgrt+ISJbQRA8msgwSZI5a+2eqn4CNIFdoBKG4atB/Gq1ehNYA74G5kXkyBiz6fv+y7GGcRyXrbX7IlIAtvP5/IPFxcXOsIz70Wg0cu12+ytgB7gANoIgOBxqGMdxWVV/oPtuVoIg+CWL0euIoug94ACYAT7rN70yTJJkLk3Tn0Tkn1wu9/HS0tLv1zHroV6v3+h0Ok+BaWPMR73tNT2CtXbPbePKKLOTk5NCFEXPoih6liTJ28N4TmMFmLbWPuzdN9CtRlcg2+O2sdVqfaiqvePzUVynta2qy1EUfXFlaK29DzTz+fyDUQIAIvJX79xa2x7Hd5pN4D6AqdVqPvAusJulGkWk1Xd5Po7vNHdV9U4cx++bNE1X3bPKuGCAqampiQz7tVV1zahqWUSOh33UQzL+cxLDMAxficgxUPaAWVX9NWOmQHdbVZUwDC+yxqhqE3jHiEgxa6Z9aF0j5hwoehMG9RuOrdBB8FT1DChOEqSqfwB/T+hVBM48uv1sbpJIY0zLWpubJMZ5nBoReayqC67FZIKqNkUkc6FVq9WbrmceesaYSpqm39DtZ99mEQiC4LusZg5rACJSEZfBc+CtQqFwO2vvy4pGo5G7vLx8ISLtIAgWPOe8par7rnnujhJIkmTZWrsHYIz50vf9o1F8pzkPrIP7eQdB8EhEjoAd1zyHIk3Te6p6S1VvpWl6bxTXae0AT4Ig+P7K0GW7SXcsOKjX6zeGiYhIc9D563AaB8CF0+Z/hq4jbwAznU7n6bCVep53V0S2RGTL87y7w1bmuv2Mqq6XSqXfrpIcQP4U2AemecMhSlXXwzD8sZ8zakx8qKrLXGNMBJ4YYzb7VzbSsIcoitaBHVW9A1eDcJP/ftwzIjLfG4RF5Dmw1SuQQRhp2EOSJB9Ya1eBsqrO0h3/AM5E5BQ4FJFKqVT6eZzWvwa6pCeIx4yIAAAAAElFTkSuQmCC"}}]);