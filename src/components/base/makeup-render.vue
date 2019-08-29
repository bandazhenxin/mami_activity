<template>
  <div class="makeup-render basic-render">
    <div class="item1">
      <a href="http://m.guojimami.com/Supersale.php"><img src="@/assets/liangfan0826_32.jpg"  alt="拼团"/></a>
    </div>
    <div class="content">
      <div class="ny2015_germany_body4" v-for="item in test">
        <div class="goods1">
          <p class="goods_img">
            <a href="http://m.guojimami.com/goods-23405-t2160.htm">
              <img v-lazy="'http://m.guojimami.com/images/201906/thumb_img/23405_thumb_G_1560722307472.jpg'" alt="【4件】HiPP 德国喜宝有机天然苹果味磨牙米饼 海外本土原版">
            </a>
          </p>
          <p class="jiaobiao3">
            <img src="@/assets/liangfan0826_jiaobiao.png">
          </p>
          <p class="zhuanxiang">德国本土原版</p>
          <p class="zhuanxiang1">德国原产直发</p>
          <div class="goods_name">
            <a href="http://m.guojimami.com/goods-23405-t2160.htm">【4件】HiPP 德国喜宝有机天然苹果味磨牙米饼 海外本土原版</a>
          </div>
          <div class="clear"></div>
          <div class="price">
            <span style="font-family:'PingFang SC Regular'; color:#ff3355; font-size:12px;">活动价：</span>
            <span class="fh">¥</span>
            <span class="shop_price2">16</span>
            <span style="font-family:'PingFang SC Regular'; font-size:12px;">/件</span>
            <span class="market_price" style="margin-left:1%;">22</span>
          </div>
    			<div class="buy"><a href="http://m.guojimami.com/goods-23405-t2160.htm"><img src="@/assets/buy1218.png"></a></div>
        </div>
      </div>
    </div>
    <div class="item1">
      <a href="http://m.guojimami.com/Supersale.php"><img src="@/assets/liangfan0826_more.jpg" alt="更多"></a>
    </div>
  </div>
</template>

<script>
export default {
  name:"makeup-render",
  data () {
    return {
      test:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    }
  }
}
</script>

<style lang="scss">

</style>
