<template>
  <div class='more-hall-render'>
    <div class="item1">
      <img v-lazy="require('@/assets/liangfan0826_36.jpg')" alt="会场精选" />
    </div>
    <div class="item2">
      <table>
        <tbody>
          <tr>
            <td><div class="pinpai2">
              <a href="http://m.guojimami.com/newborn.php">
                <img v-lazy="require('@/assets/liangfan0826_37.jpg')" alt="">
              </a>
            </div></td>
            <td><div class="pinpai2">
              <a href="http://m.guojimami.com/ricesale.php">
                <img v-lazy="require('@/assets/liangfan0826_38.jpg')" alt="">
              </a>
            </div></td>
            <td><div class="pinpai2">
              <a href="http://m.guojimami.com/ricesale.php">
                <img v-lazy="require('@/assets/liangfan0826_39.jpg')" alt="">
              </a>
            </div></td>
            <td><div class="pinpai2">
              <a href="http://m.guojimami.com/ricesale.php">
                <img v-lazy="require('@/assets/liangfan0826_40.jpg')" alt="">
              </a>
            </div></td>
            <td><div class="pinpai2">
              <a href="http://m.guojimami.com/ricesale.php">
                <img v-lazy="require('@/assets/liangfan0826_41.jpg')" alt="">
              </a>
            </div></td>
            <td><div class="pinpai2">
              <a href="http://m.guojimami.com/ricesale.php">
                <img v-lazy="require('@/assets/liangfan0826_42.jpg')" alt="">
              </a>
            </div></td>
            <td><div class="pinpai2">
              <a href="http://m.guojimami.com/ricesale.php">
                <img v-lazy="require('@/assets/liangfan0826_43.jpg')" alt="">
              </a>
            </div></td>
            <td><div class="pinpai2">
              <a href="http://m.guojimami.com/ricesale.php">
                <img v-lazy="require('@/assets/liangfan0826_44.jpg')" alt="">
              </a>
            </div></td>
            <td><div class="pinpai2">
              <a href="http://m.guojimami.com/ricesale.php">
                <img v-lazy="require('@/assets/liangfan0826_45.jpg')" alt="">
              </a>
            </div></td>
            <td><div class="pinpai2">
              <a href="http://m.guojimami.com/ricesale.php">
                <img v-lazy="require('@/assets/liangfan0826_46.jpg')" alt="">
              </a>
            </div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name:"more-hall-render",
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.more-hall-render{
  img{
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  .item1 img{
    display: block;
    width: 100%;
  }

  .item2{
    width: 100%;
    max-width: 750px;
    overflow: auto;
    padding-bottom: 15px;
    -webkit-overflow-scrolling: touch;

    img{
      height: 125px;
      margin-left: 2px;
    }
  }
}
</style>
