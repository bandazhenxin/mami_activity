<template>
  <div class='discount-render'>
    <div class="item1">
      <a v-for="item in bannerList" :href="item.link">
        <img v-lazy="item.img"  alt="拼团"/>
      </a>
    </div>
    <div class="item2">
      <table>
        <tr>
          <td v-for="goods in goodsList">
            <div class="content">
              <div class="ny2015_germany_body1">
                <div class="goods">
                  <p class="goods_img">
                    <a
                      :href="root + '/' + goods.url"
                      class="good_img"
                    >
                      <img
                        v-lazy="root + '/' + goods.goods_thumb"
                        :alt="goods.goods_name"
                      />
                    </a>
                  </p>
                  <p class="jiesheng">限购{{goods.goods_number}}件</p>
                  <p style="display:block; width:130px; margin-left:4%; margin-top:15px; text-align:left; font-family:'PingFang SC Regular'; font-size:12px; color:#000; word-break:keep-all;  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                    <a
                      :href="root + '/' + goods.url"
                      style="color:#000;"
                    >{{goods.goods_name}}</a>
                  </p>
                  <div class="clear"></div>
                  <div class="price">
                    <span class="fh">&yen;</span>
                    <span class="shop_price2">{{goods.final_price}}</span>
                    <span class="fh1">&yen;</span>
                    <span class="shop_price1"><del>{{goods.market_price}}</del></span>
                  </div>
                  <div class="buy">
                    <a
                      :href="root + '/' + goods.url"
                      style="color:#fff;"
                    >抢购</a>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import basic from '@/config/basic.js'
import request from '@/config/request.js'
import lang from '@/config/lang.js'

export default {
  name:"discount-render",
  props:['route','banner'],
  data () {
    return {
      root: basic.resourcesRoot,
      bannerList:[],
      goodsList:[]
    }
  },
  created: function(){
    let vm = this;

    //banner
    let bannerList = JSON.parse(this.banner);
    let list = [];

    for(let banner of bannerList){
      banner['img'] = basic.resourcesRoot + '/' + banner['img'];
      list.push(banner);
    }
    this.bannerList = list

    //list
    this.$http.get(request.host + '/index.php/' + vm.route).then(function(response){
      let res = response.data;
      if(200 !== res.code){
        vm.$toast(lang['REQUEST_ERROR']);
        return false;
      }

      vm.goodsList = res.data;
    }).catch(function(error){
      console.log(error);
      vm.$toast(lang['NETWORK_ERROR']);
    });
  }
}
</script>

<style lang="scss">
  .discount-render{
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
      padding-bottom: 10px;
      padding-top: 10px;
      -webkit-overflow-scrolling: touch;

      table{
        display: table;
        border-collapse: separate;
        border-spacing: 2px;
        border-color: grey;

          tbody{
            display: table-row-group;
            vertical-align: middle;
            border-color: inherit;

            tr{
              display: table-row;
              vertical-align: inherit;
              border-color: inherit;
            }
          }
      }

      .content{
        width: 100%;
        margin: 0px auto;

        .ny2015_germany_body1{
          width: 100%;
          margin: 0px auto;
        }

        .goods{
          width: 140px;
          height: 209px;
          -moz-border-radius: 8px;
          -webkit-border-radius: 8px;
          overflow: hidden;
          background-color: #fff;
          margin-top: -4px;
          position: relative;
          margin-left: 4px;

          .goods_img img{
            width: 120px;
            height: 120px;
            margin-top: 10px;
            margin-left: 8px;
          }

          .jiesheng{
            position: absolute;
            width: 88%;
            margin: 0px 6%;
            border: 1px solid #ff2837;
            text-align: center;
            font-family: "PingFang SC Regular";
            font-size: 12px;
            color: #ff2837;
            margin-top: -15px;
            border-radius: 80px;
            -moz-border-radius: 80px;
            -webkit-border-radius: 80px;
          }

          .price{
            width: 86px;
            height: 30px;
            font-family: Arial;
            color: #f15bab;
            text-align: center;
            margin-left: 3px;
            float: left;
          }

          .buy{
            width: 46px;
            margin: 5px 5px 5px 0px;
            height: 25px;
            line-height: 25px;
            color: #fff;
            font-family: "PingFang SC Regular";
            font-weight: bold;
            font-size: 12px;
            background-color: #ff2837;
            text-align: center;
            float: right;
            border-radius: 6px;
            -moz-border-radius: 6px;
            -webkit-border-radius: 6px;
          }
        }
      }
    }
  }
</style>
