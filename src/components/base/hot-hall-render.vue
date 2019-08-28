<template>
  <div class='hot-hall-render'>
    <div class="item1"><img src="@/assets/liangfan0826_18.jpg" alt="会场精选" /></div>
    <div class="item2">
      <a href="http://m.guojimami.com/freetrade.php"><img src="@/assets/liangfan0826_19.jpg" alt="" /></a>
      <a href="http://m.guojimami.com/nature.php"><img src="@/assets/liangfan0826_20.jpg" alt="" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name:"hot-hall-render",
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  .hot-hall-render{
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
