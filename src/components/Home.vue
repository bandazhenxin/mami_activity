<template>
  <div class='index'>
    <!-- banner图 -->
    <div class='banner' ref='banner'>
      <img src="~@/assets/liangfan0826_01.jpg" alt="">
      <img src="~@/assets/liangfan0826_02.jpg" alt="">
    </div>

    <!-- nav -->
    <div id="top_nav_fix" ref="nav" class="topnav" :class="{navBarWrap: navBarFixed}">
      <div class="tn">
          <div id="nav-smartSetup" class="nav_smart">
              <ul>
                <li v-for="navItem in navData">
                  <a
                    ref="navDom"
                    :class="{cur: navItem.active}"
                    :data-index="navItem.index"
                    @click="scrollTo"
                  >{{navItem.name}}</a>
                </li>
              </ul>
          </div>
          <div class="clear"></div>
      </div>
    </div>

    <div id="display1" ref="display1">
      <CountDown :gap="gap"></CountDown>
    </div>
    <div id="display2" ref="display2">2<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
    <div id="display3" ref="display3">3<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
    <div id="display4" ref="display4">4<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
    <div id="display5" ref="display5">5<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
  </div>
</template>

<script>
  import helper from '@/helper/basicHelper.js'
  import CountDown from '@/components/base/CountDown'
  // import WelfareRender from '@/components/base/welfare-render'

  export default{
    name: 'Home',
    components: {
      CountDown,
      // WelfareRender
    },
    data () {
      return {
        gap: 80000,
        navBarFixed: false,
        navData: [
          {
            name: '钜惠福利',
            active: true,
            index: 1,
          },
          {
            name: '会场直达',
            active: false,
            index: 2
          },
          {
            name: '底价拼团',
            active: false,
            index: 3
          },
          {
            name: '超级优惠',
            active: false,
            index: 4
          },
          {
            name: '精品量贩',
            active: false,
            index: 5
          },
          {
            name: '海外奶粉',
            active: false,
            index: 6
          },
          {
            name: '婴幼营养',
            active: false,
            index: 7
          },
          {
            name: '米粉辅食',
            active: false,
            index: 8
          },
          {
            name: '自营尿裤',
            active: false,
            index: 9
          },
          {
            name: '宝宝洗护',
            active: false,
            index: 10
          },
          {
            name: '奶瓶喂养',
            active: false,
            index: 11
          },
          {
            name: '精品童装',
            active: false,
            index: 12
          },
          {
            name: '护肤美妆',
            active: false,
            index: 13
          },
          {
            name: '妈妈用品',
            active: false,
            index: 14
          },
          {
            name: '家人营养',
            active: false,
            index: 15
          },
          {
            name: '美食生活',
            active: false,
            index: 16
          },
          {
            name: '更多会场',
            active: false,
            index: 17
          }
        ]
      }
    },
    mounted: function(){
      // 事件监听滚动条
      window.addEventListener('scroll', this.watchScroll, true)
    },
    methods: {
      scrollTo: function(event){
        let index = event.target.dataset.index;
        let idName = 'display' + index;
        document.getElementById(idName).scrollIntoView();
        this.activeNav(index);
      },
      activeNav: function(index){
        let newData = [];
        for(let item of this.navData){
          if(index == item.index){
            item.active = true;
          }else{
            item.active = false;
          }
        }
      },
      watchScroll: function(){
        //init
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let height = this.$refs.banner.offsetHeight;

        //fixd
        if (scrollTop > height) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }

        //切换
        let preHeight = height + this.$refs.nav.offsetHeight;
        let sumHeight = preHeight;
        for(let item of this.navData){
          let idName = 'display' + item.index;
          if(scrollTop < sumHeight){
            this.activeNav(item.index);
            break;
          }
          sumHeight += this.$refs[idName].offsetHeight
        }
      }
    }
  }
</script>

<style lang="scss">
  body, div, p, img {
      margin: 0px;
      padding: 0px;
  }

  .navBarWrap {
    position:fixed;
    top:0;
    z-index:999;
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
