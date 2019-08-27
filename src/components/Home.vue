<template>
  <div class='index'>
    <!-- banner图 -->
    <div class='banner'>
      <img src="~@/assets/liangfan0826_01.jpg" alt="">
      <img src="~@/assets/liangfan0826_02.jpg" alt="">
    </div>

    <!-- nav -->
    <div id="top_nav_fix" class="topnav">
      <div class="tn">
          <div id="nav-smartSetup" class="nav_smart">
              <ul>
                  <li><a class="cur">钜惠福利</a></li>
                  <li><a>会场直达</a></li>
                  <li><a>底价拼团</a></li>
                  <li><a>超级优惠</a></li>
                  <li><a>精品量贩</a></li>
                  <li><a>海外奶粉</a></li>
                  <li><a>婴幼营养</a></li>
                  <li><a>米粉辅食</a></li>
                  <li><a>自营尿裤</a></li>
                  <li><a>宝宝洗护</a></li>
                  <li><a>奶瓶喂养</a></li>
                  <li><a>精品童装</a></li>
                  <li><a>护肤美妆</a></li>
                  <li><a>妈妈用品</a></li>
                  <li><a>家人营养</a></li>
                  <li><a>美食生活</a></li>
                  <li><a>更多会场</a></li>
              </ul>
          </div>
          <div class="clear"></div>
      </div>
    </div>

    <div>1<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
    <div>2<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
    <div>3<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
    <div>4<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
    <div>5<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
  </div>
</template>

<script>
  export default{
    name: 'Home',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
  body, div, p, img {
      margin: 0px;
      padding: 0px;
  }

  .banner{
    img{
      display: block;
      width: 100%;
      border: 0px;
      cursor: auto;
    }
  }

  .topnav{
      width: 100%;
      height: 54px;
      line-height: 44px;
      padding: 0px;
      background-color: #1e62a3;
      font-family: "PingFang SC Regular";
      font-size: 16px;

      .tn{
        position: relative;
        .nav_smart{
          display: -webkit-box;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          width: 100%;
          height: 54px;
          line-height: 44px;
          overflow-x: scroll;
          overflow-y: hidden;
          ul{
            width: 1156px;
            transition-property: -webkit-transform;
            transform-origin: 0px 0px 0px;
            transform: translate(0px, 0px) scale(1) translateZ(0px);
            display: -webkit-box;
            -webkit-box-flex: 0;
            list-style-type: disc;
            -webkit-margin-before: 0em;
            -webkit-margin-after: 1em;
            -webkit-margin-start: 0px;
            -webkit-margin-end: 0px;
            -webkit-padding-start: 0px;
            li{
              list-style: none;
              -webkit-box-flex: 0;
              height: 54px;
              line-height: 44px;
              padding: 5px 10px;
              font-size: 12px;
              color: #fff;
              text-decoration: none;
              outline: none;
              font-family: "PingFang SC Regular";
              text-align: center;
              a{
                    cursor: pointer;
                    display: block;
                    color: #fff;
                    text-decoration: none;
                    -webkit-box-align: center;
                    -webkit-box-pack: center;
              }
              a.cur{
                height: 54px;
                line-height: 44px;
                padding: 5px 10px;
                margin: -5px -10px;
                font-size: 12px;
                background-color: #1e4195;
                text-decoration: none;
                outline: none;
                font-family: "PingFang SC Regular";
                text-align: center;
              }
            }
          }
        }
        .clear {
          clear: both;
        }
      }
  }
</style>
