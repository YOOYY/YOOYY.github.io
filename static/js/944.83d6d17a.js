"use strict";(self["webpackChunkvue_h5_template"]=self["webpackChunkvue_h5_template"]||[]).push([[944],{944:function(t,e,i){i.r(e),i.d(e,{default:function(){return l}});var s=i(8521),o=(i(1963),function(){var t=this,e=t._self._c;return e("div",{staticClass:"contain"},[e(s.Z,{attrs:{title:"分红明细","left-arrow":"",fixed:"",placeholder:""},on:{"click-left":t.onClickLeft}}),e("div",{staticClass:"box"},[e("div",{staticClass:"r_title"},[e("span",{staticClass:"r_status"},[t._v("状态")]),e("div",{staticClass:"r_title_right row",on:{click:t.choiceType}},[e("span",{staticClass:"r_time"},[t._v("交易时间")]),e("img",{staticClass:"ricon",attrs:{src:i(3057),alt:""}})])]),e("div",{staticClass:"drop-content"},t._l(t.productList,(function(i,s){return e("div",{key:s,staticClass:"r_itemBox",on:{click:function(e){return t.showDetail(i)}}},[e("div",{staticClass:"cell_left"},[e("div",{staticClass:"r_type"},[e("span",{staticClass:"r_accept"},[t._v(t._s(i.type))])]),e("div",[e("div",{staticClass:"r_product"},[t._v(t._s(i.product))]),e("div",{staticClass:"r_year"},[t._v(t._s(i.money)+"元")])])]),e("span",{staticClass:"r_product1 top20"},[t._v(t._s(i.time))])])})),0)]),t._m(0),e("mp-picker",{attrs:{visible:t.isShowPicker,columns:t.timeList},on:{"update:visible":function(e){t.isShowPicker=e},confirm:t.confirm,cancel:t.cancel,change:t.change}})],1)}),c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("span",{staticClass:"footer_text"},[t._v("暂无更多数据")])])}],r={data(){return{isShowPicker:!1,productList:[{type:"现金分红",product:"幸福99半年添益理财1",time:"2022-07-12 08:00:00",money:"8888.88"},{type:"现金分红",product:"xxxx理财产品2",time:"2022-07-12 08:00:00",money:"8888.88"},{type:"现金分红",product:"xxxx理财产品3",time:"2022-07-12 08:00:00",money:"8888.88"},{type:"现金分红",product:"xxxx理财产品4",time:"2022-07-12 08:00:00",money:"8888.88"},{type:"现金分红",product:"xxxx理财产品5",time:"2022-07-12 08:00:00",money:"8888.88"},{type:"现金分红",product:"xxxx理财产品5",time:"2022-07-12 08:00:00",money:"8888.88"},{type:"现金分红",product:"xxxx理财产品5",time:"2022-07-12 08:00:00",money:"8888.88"},{type:"现金分红",product:"xxxx理财产品5",time:"2022-07-12 08:00:00",money:"8888.88"},{type:"现金分红",product:"xxxx理财产品5",time:"2022-07-12 08:00:00",money:"8888.88"},{type:"现金分红",product:"xxxx理财产品5",time:"2022-07-12 08:00:00",money:"8888.88"},{type:"现金分红",product:"xxxx理财产品5",time:"2022-07-12 08:00:00",money:"8888.88"},{type:"现金分红",product:"xxxx理财产品5",time:"2022-07-12 08:00:00",money:"8888.88"},{type:"现金分红",product:"xxxx理财产品5",time:"2022-07-12 08:00:00",money:"8888.88"},{type:"现金分红",product:"xxxx理财产品5",time:"2022-07-12 08:00:00",money:"8888.88"}],timeList:[{id:1,text:"近一个月"},{id:2,text:"近半年"},{id:3,text:"近一年"}]}},methods:{onClickLeft(){this.$router.go(-1)},choiceType(){this.isShowPicker=!this.isShowPicker},confirm(t){this.isShowPicker=!1},cancel(){this.isShowPicker=!1},change(t){},showDetail(t){this.$router.push({name:"recordDetail"})}}},a=r,n=i(1001),p=(0,n.Z)(a,o,c,!1,null,"c15f97a0",null),l=p.exports},3057:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAQCAYAAAAFzx/vAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVQ4ja2UzWsTURTFz33JxFYk4gdUNIRSDIK0GeZl1q01RBF0paA7F4IL/wIX/h8KrroSF4quFK3GuFJ4M9NJmAZJESwqtCpascLMNLluEnmdpm2qPct7zz2/d998kOd5lXa7fZuIlgBcLZVKC9hFzc3NHVtbW7sPYFwIcZOUUi4Aq9v/mMlkporF4vvdgDUajZEwDGsATnRLK4KI5jVPLoqiqud5o/8Lazabh8IwnNVgICJHZLPZGwDeat58p9OpKqXy/wpTSu1fXV19BmBcgzWJ6IooFAo/AZwlItVrMvMogKrv+7mdwoIg2EdETwFIDbbAzGUp5RfqFev1+oEoimYTxhYRnZJSfh5ws71E9ISZJ7WMD8w8adv2IgCIXqNYLH4fHh6uEJGvbVrodDovgyA4sh2s1WrtAfAoAftkGMbpHgwAKDmolDoMoIr19z+fTqenTdNc3mQzg4geMvN5rbxkGMaUaZrvdK9IzMK27a+GYZT1t5eZT8Zx/KJ7mHVi5hQR3UvAvgGoJGF9gQBgmuby0NBQGYA+ME5Es0EQHNRgwnXdGWa+qPlWAJyxbbvRL3vDlepyXfcoM79i5oJW9jKZTHliYuKH4zh3AVz7G0b0C0ClVCq92SxzSyAA+L6fi+O4BmBMC1YAXGa+rll/CyHOSSlfb5W3LRAAlFJ5Iqp1v8+NIUShEOKCZVnPt8vq+wyTsm17UQgxDWCxTzsGcGkQGDDghj3V6/WxKIpqAHp/oLYQ4rKU8sGgGTsCAoDjOMcB3GHmkVQqdcuyrMc7mf8DkNntDoBAklAAAAAASUVORK5CYII="}}]);