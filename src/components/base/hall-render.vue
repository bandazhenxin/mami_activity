<template>
  <div class='hall-render'>
    <div class="item1"><img v-lazy="require('@/assets/liangfan0826_09.jpg')" alt="会场精选" /></div>
    <div class="item2" >
      <a href="http://m.guojimami.com/savemoney.php">
        <img v-lazy="require('@/assets/liangfan0826_10.jpg')" alt="" />
      </a>
      <a href="foodsale.php">
        <img v-lazy="require('@/assets/liangfan0826_11.jpg')" alt="" />
      </a>
    </div>
    <div class="item2" >
      <a href="http://m.guojimami.com/savemoney.php">
        <img v-lazy="require('@/assets/liangfan0826_12.jpg')" alt="" />
      </a>
      <a href="http://m.guojimami.com/babysupplies.php">
        <img v-lazy="require('@/assets/liangfan0826_13.jpg')" alt="" />
      </a>
    </div>
    <div class="item2" >
      <a href="http://m.guojimami.com/momhealth.php">
        <img v-lazy="require('@/assets/liangfan0826_14.jpg')" alt="" />
      </a>
      <a href="http://m.guojimami.com/2019summer.php">
        <img v-lazy="require('@/assets/liangfan0826_15.jpg')" alt="" />
      </a>
    </div>
    <div class="item2" >
      <a href="http://m.guojimami.com/makeup.php">
        <img v-lazy="require('@/assets/liangfan0826_16.jpg')" alt="" />
      </a>
      <a href="http://m.guojimami.com/2019summer.php">
        <img v-lazy="require('@/assets/liangfan0826_17.jpg')" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"hall-render",
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  .hall-render{
    img{
      margin: 0px;
      padding: 0px;
      border: 0px;
    }

    .item1 img{
      display: block;
      width: 100%;
    }

    .item2 img{
      display: block;
      width: 50%;
      float: left;
    }
  }
</style>
