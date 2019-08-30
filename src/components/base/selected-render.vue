<template>
  <div class='selected-render'>
    <div class="item1">
      <a href="http://m.guojimami.com/SuperSales.php">
        <img v-lazy="require('@/assets/liangfan0826_21.jpg')"  alt="拼团"/>
      </a>
    </div>
    <div class="item2">
      <table>
        <tr>
          <td v-for="item in test">
            <div class="content">
              <div class="ny2015_germany_body1">
                <div class="goods">
                  <p class="goods_img">
                    <a href="http://m.guojimami.com/goods-14711-t858.htm" class="good_img">
                      <img v-lazy="'http://m.guojimami.com/images/201811/thumb_img/14711_thumb_G_1541543137297.jpg'" alt="Mellin 意大利美林三文鱼蔬菜泥2x80g/组 海外本土原版"/>
                    </a>
                  </p>
                  <p class="jiesheng">已团6370件</p>
                  <p style="display:block; width:130px; margin-left:4%; margin-top:15px; text-align:left; font-family:'PingFang SC Regular'; font-size:12px; color:#000; word-break:keep-all;  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                    <a href="http://m.guojimami.com/goods-14711-t858.htm" style="color:#000;" >Mellin 意大利美林三文鱼蔬菜泥2x80g/组 海外本土原版</a>
                  </p>
                  <div class="clear"></div>
                  <div class="price">
                    <span class="fh">&yen;</span>
                    <span class="shop_price2">36</span>
                    <span class="fh1">&yen;</span>
                    <span class="shop_price1"><del>59</del></span>
                  </div>
                  <div class="buy">
                    <a href="http://m.guojimami.com/goods-14711-t858.htm" style="color:#fff;" >去拼团</a>
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
export default {
  name:"selected-render",
  data () {
    return {
      test:[]
    }
  },
  mounted: function(){
    let self = this;
    this.$http.get('http://localhost/mamix/api/activity/test.php').then(function(response){
      console.log(response.data)
      if(response.data.result){
        self.test = response.data;
      }
    });
  }
}
</script>

<style lang="scss">
  .selected-render{
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
