<template>
  <div class="talent-notes">
    <div class="item1"><img src="@/assets/nianhuo122sj_52.jpg" alt=""></div>

    <div class="daren_left">
      <a href="http://m.guojimami.com/goods.php?id=84"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_01.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=84"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_03.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=84"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_05.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=84"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_07.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=84"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_09.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=84"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_11.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=84"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_13.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=84"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_15.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=84"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_17.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=84"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_19.jpg'" alt=""></a>
    </div>

    <div class="daren_right">
      <a href="http://m.guojimami.com/goods.php?id=429"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_02.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=958"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_04.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=1083"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_06.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=4508"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_08.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=1334"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_10.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=14035"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_12.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=1353"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_14.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=5594"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_16.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=16910"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_18.jpg'" alt=""></a>
      <a href="http://m.guojimami.com/goods.php?id=7006"><img v-lazy="'http://m.guojimami.com/themesmobile/mbts1/images/daren818sj_20.jpg'" alt=""></a>
    </div>
  </div>
</template>

<script>
export default {
  name:"talent-notes",
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  .talent-notes{
    img{
      margin: 0px;
      padding: 0px;
      border: 0px;
    }

    .item1 img{
      display: block;
      width: 100%;
    }

    .daren_left,.daren_right{
      width: 50%;
      float: left;
      a{
        display: block;
        width: 100%;
        img{
          display: block;
          width: 100%;
        }
      }
    }
  }
</style>
