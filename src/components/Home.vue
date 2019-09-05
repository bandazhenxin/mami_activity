<template>
  <div class='index'>
    <!-- banner图 -->
    <div class='banner' ref='banner'>
      <img v-for="banner in bannerList" :src="banner" alt="" />
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
    <CountDown :gap="gap"></CountDown>
    <div
      v-for="item in navData"
      :id="'display' + item.index"
      :ref="'display' + item.index"
      :style="{background: home_background}"
    >
      <component
        :content="item.content"
        :route="item.route"
        :banner="item.banner"
        :is="item.template"
      ></component>
    </div>

    <!--footer-->
    <div class='basic-render'>
      <div class="item1">
        <a href="http://m.guojimami.com/clearance.php">
          <img v-lazy="require('@/assets/queen38sj_88.jpg')" alt="">
        </a>
      </div>
    </div>

    <talent-notes></talent-notes>
  </div>
</template>

<script>
  import Vue from 'vue'
  import helper from '@/helper/basicHelper.js'
  import request from '@/config/request.js'
  import lang from '@/config/lang.js'


  var preTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  const CountDown = resolve => require(['@/components/base/count-down'], resolve);
  const TalentNotes = resolve => {
    setTimeout(function () {
      require(['@/components/base/talent-notes'], resolve);
    },100);
  }

  export default{
    name: 'Home',
    components: {
      CountDown,
      TalentNotes
    },
    data () {
      return {
        gap: 0,
        navBarFixed: false,
        bannerList:[
          'http://aitamei.guojimami.com/laravel//Uploads/Home/20190903/pinlei0902_01.jpg',
          'http://aitamei.guojimami.com/laravel//Uploads/Home/20190903/pinlei0902_02.jpg'
        ],
        navData: [],
        home_background:'#FFFFFF'
      }
    },
    created:function(){
      let vm = this;

      //render
      this.$http.get(request.homeRender).then(function(response){
        let res = response.data;
        if(200 !== res.code){
          vm.$toast(lang['REQUEST_ERROR']);
          return false;
        }

        //banner
        let banner_arr  = res.data.home_banner;
        let home_banner = [];
        for(let banner of banner_arr){
          home_banner.push(request.host + banner);
        }
        vm.bannerList = home_banner;

        //gap
        let deadline = helper.strtotime(res.data.activity_deadline);
        let diff     = deadline - helper.now();
        vm.gap = diff >= 0 ? diff : 0;

        //style
        vm.home_background = res.data.home_background;
      }).catch(function(error){
        console.log(error);
        vm.$toast(lang['NETWORK_ERROR']);
      });

      //nav list
      this.$http.get(request.navList).then(function(response){
        let res = response.data;
        if(200 !== res.code){
          vm.$toast(lang['REQUEST_ERROR']);
          return false;
        }

        let list  = [];
        let index = 1;
        for(let item of res.data){
          item.index  = index;
          item.active = 1 === index;
          list.push(item);

          //注册组件
          console.log(item.template);
          let component = item.template ? item.template : 'render-item';
          item.template = component;
          Vue.component(component, resolve => {
            setTimeout(function () {
              require(['@/components/base/' + component], resolve);
            },index);
          });

          index++;
        }
        vm.navData = list;
      }).catch(function(error){
        console.log(error);
        vm.$toast(lang['NETWORK_ERROR']);
      });
    },
    mounted: function(){
      window.addEventListener('scroll', this.watchScroll, true) // 事件监听滚动条
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
          sumHeight += this.$refs[idName][0].offsetHeight
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

  img[lazy="loading"]{
    display:block;
    width:160px !important;
    height:160px !important;
    background: url("../assets/lazy.png") no-repeat fixed center;
    margin:0 auto;
  }

  .index{
    .banner{
      min-height: 300px;
    }
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

  .clear {
    clear: both;
  }
</style>
