"use strict";(self["webpackChunkshopping"]=self["webpackChunkshopping"]||[]).push([[399],{4399:function(t,s,r){r.r(s),r.d(s,{default:function(){return d}});r(4114);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("van-nav-bar",{attrs:{fixed:"",title:"商品列表","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("van-search",{attrs:{readonly:"",shape:"round",background:"#ffffff",value:t.querySearch||"搜索商品","show-action":""},on:{click:function(s){return t.$router.push("/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[s("van-icon",{staticClass:"tool",attrs:{name:"apps-o"}})]},proxy:!0}])}),s("div",{staticClass:"sort-btns"},[s("div",{staticClass:"sort-item",class:{active:"all"===t.sortType},on:{click:t.sortAll}},[t._v("综合")]),s("div",{staticClass:"sort-item",class:{active:"sales"===t.sortType},on:{click:t.sortSales}},[t._v("销量")]),s("div",{staticClass:"sort-item",class:{active:"price"===t.sortType},on:{click:t.sortPrices}},[t._v(" 价格 "),s("van-icon",{attrs:{name:"0"===t.sortPrice?"arrow-up":"arrow-down"}})],1)]),s("div",{staticClass:"goods-list"},t._l(t.proList,(function(t){return s("GoodsItem",{key:t.goods_id,attrs:{item:t}})})),1)],1)},o=[],a=r(7658),i=r(7867),c={name:"SearchList",data(){return{page:1,proList:[],sortType:"all",sortPrice:"0"}},created(){this.getProList()},components:{GoodsItem:a.A},computed:{querySearch(){return this.$route.query.search}},methods:{async getProList(){const{data:{list:t}}=await(0,i.Cd)({sortType:this.sortType,sortPrice:this.sortPrice,categoryId:this.$route.query.categoryId,goodsName:this.querySearch,page:this.page});this.proList=t.data},sortAll(){"all"!==this.sortType&&(this.sortType="all",this.getProList())},sortSales(){"sales"!==this.sortType&&(this.sortType="sales",this.getProList())},sortPrices(){this.sortType="price",this.sortPrice="0"===this.sortPrice?"1":"0",this.getProList()}}},n=c,l=r(1656),u=(0,l.A)(n,e,o,!1,null,"01d20912",null),d=u.exports},7867:function(t,s,r){r.d(s,{B7:function(){return a},Cd:function(){return o},Yv:function(){return i}});var e=r(5720);const o=t=>{const{sortType:s,sortPrice:r,categoryId:o,goodsName:a,page:i}=t;return e.A.get("/goods/list",{params:{sortType:s,sortPrice:r,categoryId:o,goodsName:a,page:i}})},a=t=>e.A.get("/goods/detail",{params:{goodsId:t}}),i=(t,s)=>e.A.get("/comment/listRows",{params:{goodsId:t,limit:s}})}}]);
//# sourceMappingURL=399.44f9620b.js.map