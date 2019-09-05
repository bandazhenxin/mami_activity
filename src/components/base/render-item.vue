<template>
  <div class='render-item'>
    <div class="item"><img v-for="(item,index) in bannerList" :key="index" v-if="item.show" :src="item.img" alt="会场精选" /></div>
    <div v-html='content'></div>
  </div>
</template>

<script>
import basic from '@/config/basic.js'

export default {
  name:"render-item",
  props:['content', 'banner'],
  data () {
    return {
      bannerList:[]
    }
  },
  created: function(){
    let bannerList = JSON.parse(this.banner);
    let list = [];

    if(!bannerList) return false;

    for(let banner of bannerList){
      if(banner['img']){
        banner['show'] = true;
        banner['img'] = basic.resourcesRoot + '/' + banner['img'];
      }else{
        banner['show'] = false;
      }
      list.push(banner);
    }
    this.bannerList = list
  }
}
</script>

<style lang="scss">
  img{
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  .render-item{
    min-height: 300px;
  }

  .item img{
    display: block;
    width: 100%;
  }
</style>
