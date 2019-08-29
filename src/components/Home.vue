<template>
  <div class='index'>
    <!-- banner图 -->
    <div class='banner' ref='banner'>
      <img v-for="banner in bannerList" v-lazy="banner.img" alt="" />
    </div>

    <!-- nav -->
    <div id="top_nav_fix" ref="nav" class="topnav" :class="{navBarWrap: navBarFixed}">
      <div class="tn">
          <div id="nav-smartSetup" class="nav_smart">
              <ul>
                <li v-for="navItem in navData">
                  <a
                    ref="navDom"
                    :id="'nav' + navItem.index"
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

    <!-- render -->
    <div id="display1" ref="display1" class='basic-background'>
      <CountDown :gap="gap"></CountDown>
      <welfare-render></welfare-render>
    </div>
    <div id="display2" ref="display2" class='basic-background'>
      <hall-render></hall-render>
      <hot-hall-render></hot-hall-render>
    </div>
    <div id="display3" ref="display3" class='basic-background'>
      <assemble-render></assemble-render>
    </div>
    <div id="display4" ref="display4" class='basic-background'>
      <selected-render></selected-render>
    </div>
    <div id="display5" ref="display5" class='basic-background'>
      <exquisite-foreign-render></exquisite-foreign-render>
    </div>

    <div id="display6" ref="display6" class='basic-background'>
      <overseas-milk-render></overseas-milk-render>
    </div>
    <div id="display7" ref="display7" class='basic-background'>
      <baby-nutrition-render></baby-nutrition-render>
    </div>
    <div id="display8" ref="display8" class='basic-background'>
      <rice-noodles-render></rice-noodles-render>
    </div>
    <div id="display9" ref="display9" class='basic-background'>
      <diaper-render></diaper-render>
    </div>
    <div id="display10" ref="display10" class='basic-background'>
      <wash-care-render></wash-care-render>
    </div>
    <div id="display11" ref="display11" class='basic-background'>
      <feeding-bottle-render></feeding-bottle-render>
    </div>
    <div id="display12" ref="display12" class='basic-background'>
      <wear-render></wear-render>
    </div>
    <div id="display13" ref="display13" class='basic-background'>
      <makeup-render></makeup-render>
    </div>
    <div id="display14" ref="display14" class='basic-background'>
      <mother-use-render></mother-use-render>
    </div>
    <div id="display15" ref="display15" class='basic-background'>
      <nutrition-render></nutrition-render>
    </div>
    <div id="display16" ref="display16" class='basic-background'>
      <life-render></life-render>
    </div>
    <div id="display17" ref="display17" class='basic-background'>
      <more-hall-render></more-hall-render>
    </div>

    <div class='basic-render'>
      <div class="item1">
        <a href="http://m.guojimami.com/clearance.php"><img src="@/assets/queen38sj_88.jpg" alt=""></a>
      </div>
    </div>

    <talent-notes></talent-notes>
  </div>
</template>

<script>
  import helper from '@/helper/basicHelper.js'
  // import CountDown from '@/components/base/CountDown'
  // import WelfareRender from '@/components/base/welfare-render'
  // import HallRender from '@/components/base/hall-render'
  // import HotHallRender from '@/components/base/hot-hall-render'
  // import AssembleRender from '@/components/base/assemble-render'
  // import SelectedRender from '@/components/base/selected-render'
  // import ExquisiteForeignRender from '@/components/base/exquisite-foreign-render'
  // import OverseasMilkRender from '@/components/base/overseas-milk-render'
  // import BabyNutritionRender  from '@/components/base/baby-nutrition-render'
  // import RiceNoodlesRender from '@/components/base/rice-noodles-render'
  // import DiaperRender from '@/components/base/diaper-render'
  // import WashCareRender from '@/components/base/wash-care-render'
  // import FeedingBottleRender from '@/components/base/feeding-bottle-render'
  // import WearRender from '@/components/base/wear-render'
  // import MakeupRender from '@/components/base/makeup-render'
  // import MotherUseRender from '@/components/base/mother-use-render'
  // import NutritionRender from '@/components/base/nutrition-render'
  // import LifeRender from '@/components/base/life-render'
  // import MoreHallRender from '@/components/base/more-hall-render'
  // import TalentNotes from '@/components/base/talent-notes'

  const CountDown = resolve => require(['@/components/base/CountDown'], resolve);
  const WelfareRender = resolve => require(['@/components/base/welfare-render'], resolve);
  const HallRender = resolve => require(['@/components/base/hall-render'], resolve);
  const HotHallRender = resolve => require(['@/components/base/hot-hall-render'], resolve);
  const AssembleRender = resolve => require(['@/components/base/assemble-render'], resolve);
  const SelectedRender = resolve => require(['@/components/base/selected-render'], resolve);
  const ExquisiteForeignRender = resolve => require(['@/components/base/exquisite-foreign-render'], resolve);
  const OverseasMilkRender = resolve => require(['@/components/base/overseas-milk-render'], resolve);
  const BabyNutritionRender = resolve => require(['@/components/base/baby-nutrition-render'], resolve);
  const RiceNoodlesRender = resolve => require(['@/components/base/rice-noodles-render'], resolve);
  const DiaperRender = resolve => require(['@/components/base/diaper-render'], resolve);
  const WashCareRender = resolve => require(['@/components/base/wash-care-render'], resolve);
  const FeedingBottleRender = resolve => require(['@/components/base/feeding-bottle-render'], resolve);
  const WearRender = resolve => require(['@/components/base/wear-render'], resolve);
  const MakeupRender = resolve => require(['@/components/base/makeup-render'], resolve);
  const MotherUseRender = resolve => require(['@/components/base/mother-use-render'], resolve);
  const NutritionRender = resolve => require(['@/components/base/nutrition-render'], resolve);
  const LifeRender = resolve => require(['@/components/base/life-render'], resolve);
  const MoreHallRender = resolve => require(['@/components/base/more-hall-render'], resolve);
  const TalentNotes = resolve => require(['@/components/base/talent-notes'], resolve);

  // const CountDown = () => import('@/components/base/CountDown');
  // const WelfareRender = () => import('@/components/base/welfare-render');
  // const HallRender = () => import('@/components/base/hall-render');
  // const HotHallRender = () => import('@/components/base/hot-hall-render');
  // const AssembleRender = () => import('@/components/base/assemble-render');
  // const SelectedRender = () => import('@/components/base/selected-render');
  // const ExquisiteForeignRender = () => import('@/components/base/exquisite-foreign-render');
  // const OverseasMilkRender = () => import('@/components/base/overseas-milk-render');
  // const BabyNutritionRender = () => import('@/components/base/baby-nutrition-render');
  // const RiceNoodlesRender = () => import('@/components/base/rice-noodles-render');
  // const DiaperRender = () => import('@/components/base/diaper-render');
  // const WashCareRender = () => import('@/components/base/wash-care-render');
  // const FeedingBottleRender = () => import('@/components/base/feeding-bottle-render');
  // const WearRender = () => import('@/components/base/wear-render');
  // const MakeupRender = () => import('@/components/base/makeup-render');
  // const MotherUseRender = () => import('@/components/base/mother-use-render');
  // const NutritionRender = () => import('@/components/base/nutrition-render');
  // const LifeRender = () => import('@/components/base/life-render');
  // const MoreHallRender = () => import('@/components/base/more-hall-render');
  // const TalentNotes = () => import('@/components/base/talent-notes');

  // <?php
  // define('IN_ECS', true);
  // header('Access-Control-Allow-Origin:*');
  // header('Access-Control-Allow-  Methods: GET, POST, PUT,DELETE,OPTIONS,PATCH');
  // header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
  //
  // //reply
  // require('../init.php');
  // require_once(ROOT_PATH . 'includes/cls_json.php');
  // require_once(ROOT_PATH . 'includes/cls_jwt.php');
  //
  // $json = new JSON;
  // $results = array('result'=>true, 'data'=>array(1,1,1,1,1,1,1));
  // exit($json->encode($results));

  var preTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  export default{
    name: 'Home',
    components: {
      CountDown,
      WelfareRender,
      HallRender,
      HotHallRender,
      AssembleRender,
      SelectedRender,
      ExquisiteForeignRender,
      OverseasMilkRender,
      BabyNutritionRender,
      RiceNoodlesRender,
      DiaperRender,
      WashCareRender,
      FeedingBottleRender,
      WearRender,
      MakeupRender,
      MotherUseRender,
      NutritionRender,
      LifeRender,
      MoreHallRender,
      TalentNotes
    },
    data () {
      return {
        gap: 80000,
        navBarFixed: false,
        bannerList:[
          {img:require("@/assets/liangfan0826_01.jpg")},
          {img:require("@/assets/liangfan0826_02.jpg")},
        ],
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

        if(index > 4){
          document.getElementsByClassName('nav_smart')[0].scrollLeft = 68 * (index - 4);
        }else{
          document.getElementsByClassName('nav_smart')[0].scrollLeft = 68 * (index - 4);
        }
      },
      watchScroll: function(){
        //init
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let height = this.$refs.banner.offsetHeight;

        //检测纵向滑动
        if(preTop == scrollTop) return;

        //fixd
        preTop = scrollTop;
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
      }
  }

  .basic-render{
    img{
      margin: 0px;
      padding: 0px;
      border: 0px;
    }

    .item1 img{
      display: block;
      width: 100%;
    }

    .content{
      width: 100%;
      margin: 0px auto;

      .ny2015_germany_body4 {
        width: 100%;
        margin: 0px auto;
      }
      .goods1 {
        width: 47%;
        overflow: hidden;
        margin-left: 2%;
        margin-top: 10px;
        padding-bottom: 10px;
        background-color: #fff;
        float: left;
        text-align: center;
        position: relative;

        .goods_img img{
          width: 160px;
          height: 160px;
          margin-top: 15px;
        }

        .jiaobiao3 img{
          position: absolute;
          top: 0px;
          width: 50px;
          left: 0px;
        }

        .zhuanxiang {
          position: absolute;
          color: #fff;
          padding: 1% 3%;
          margin-top: -30px;
          margin-bottom: 5px;
          border-radius: 0px 80px 80px 0px;
          background: linear-gradient(to right, #f1564a , #f03275);
          opacity: 0.8;
          filter: alpha(opacity=80);
        }

        .zhuanxiang1 {
          position: absolute;
          color: #fff;
          padding: 1% 3%;
          margin-top: -55px;
          margin-bottom: 5px;
          border-radius: 0px 80px 80px 0px;
          background: linear-gradient(to right, #f8863f , #e22926);
          opacity: 0.8;
          filter: alpha(opacity=80);
        }

        .goods_name {
          height: 32px;
          padding: 0 10px;
          text-align: left;
          line-height: 16px;
          overflow: hidden;
          margin-top: 10px;

          a{
            font-family: Arial;
            font-size: 13px;
            color: #141414;
            text-decoration: none;
          }
        }

        .price {
          width: 96%;
          height: 20px;
          padding-left: 4%;
          font-family: Arial;
          color: #ff2837;
          text-align: left;
          margin-top: 4px;
        }

        .buy {
          width: 50px;
          height: 24px;
          text-align: right;
          position: absolute;
          right: 5px;
          bottom: 5px;

          a{
            display: block;
          }

          img{
            display: inline-block;
            width: 75%;
          }
        }
      }
    }
  }

  .basic-background{
    background-color: #DCEAF7;
  }
  .clear {
    clear: both;
  }
</style>
