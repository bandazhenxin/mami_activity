<template>
  <div class='goods-render basic-render'>
    <div class="item1">
      <a v-for="item in bannerList" :href="item.link">
        <img v-lazy="item.img"  alt="抢购"/>
      </a>
    </div>
    <div class="content">
      <div class="ny2015_germany_body4" v-for="goods in goodsList">
        <div class="goods1">
          <p class="goods_img">
            <a :href="root + '/' + goods.url">
              <img v-lazy="root + '/' + goods.goods_thumb" :alt="goods.goods_name">
            </a>
          </p>
          <p class="jiaobiao3">
            <img v-lazy="root + '/themesmobile/mbts1/images/liangfan0826_jiaobiao.png'">
          </p>
          <p v-if="goods.describe2" class="zhuanxiang">{{goods.describe2}}</p>
          <p v-if="goods.describe1" class="zhuanxiang1">{{goods.describe1}}</p>
          <div class="goods_name">
            <a :href="root + '/' + goods.url">{{goods.goods_style_name ? goods.goods_style_name : goods.goods_name}}</a>
          </div>
          <div class="clear"></div>
          <div class="price">

            <span style="font-family:'PingFang SC Regular'; color:#ff3355; font-size:12px;">活动价：</span>
            <span class="fh">¥</span>
            <span class="shop_price2">{{goods.final_price}}</span>
            <span v-if="goods.goods_gc > 1" style="font-family:'PingFang SC Regular'; font-size:12px;">/件</span>
            <span class="market_price" style="margin-left:1%;">{{goods.market_price}}</span>
          </div>
    			<div class="buy">
            <a :href="root + '/' + goods.url">
              <img v-lazy="root + '/themesmobile/mbts1/images/buy1218.png'">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="item1">
      <a href="http://m.guojimami.com/Supersale.php">
        <img v-lazy="root + '/themesmobile/mbts1/images/liangfan0826_more.jpg'" alt="更多">
      </a>
    </div>
  </div>
</template>

<script>
import basic from '@/config/basic.js'
import request from '@/config/request.js'
import lang from '@/config/lang.js'

export default {
  name:"goods-render",
  props:['route','banner'],
  data () {
    return {
      root: basic.resourcesRoot,
      bannerList:[],
      goodsList:[]
    }
  },
  created: function(){
    let vm = this;

    //banner
    let bannerList = JSON.parse(this.banner);
    let list = [];

    for(let banner of bannerList){
      banner['img'] = basic.resourcesRoot + '/' + banner['img'];
      list.push(banner);
    }
    this.bannerList = list;

    //list
    this.$http.get(request.host + '/index.php/' + vm.route).then(function(response){
      let res = response.data;
      if(200 !== res.code){
        vm.$toast(lang['REQUEST_ERROR']);
        return false;
      }

      vm.goodsList = res.data;
    }).catch(function(error){
      console.log(error);
      vm.$toast(lang['NETWORK_ERROR']);
    });
  }
}
</script>

<style lang="scss">
</style>
