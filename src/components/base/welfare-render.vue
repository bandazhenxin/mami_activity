<template>
  <div class='welfare-render'>
    <div class="item1">
      <a href="http://m.guojimami.com/article.php?id=9368">
        <img src="@/assets/liangfan0826_03.jpg" alt=""/>
      </a>
    </div>
    <div class="item1">
      <a href="http://m.guojimami.com/article.php?id=10526">
        <img src="@/assets/liangfan0826_04.jpg" alt=""/>
      </a>
    </div>
    <div class="item1">
      <a href="http://m.guojimami.com/directmail.php">
        <img src="@/assets/liangfan0826_05.jpg" alt=""/>
      </a>
    </div>
    <div class="item1">
      <a href="http://m.guojimami.com/article.php?id=10536">
        <img src="@/assets/liangfan0826_06.jpg" alt=""/>
      </a>
    </div>
    <div class="item2" >
      <a href="http://m.guojimami.com/sincere.php">
        <img src="@/assets/liangfan0826_07.jpg" alt=""/>
      </a>
    </div>
    <div class="item3" id="part1">
      <a href="http://m.guojimami.com/coupon12.php">
        <img src="@/assets/liangfan0826_08.jpg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"welfare-render",
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  .welfare-render{
    .item1 img{
      margin: 0px;
      padding: 0px;
      display: block;
      width: 25%;
      float: left;
    }
    .item2 img,.item3 img{
      display: block;
      width: 100%;
    }
  }
</style>
