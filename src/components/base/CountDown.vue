<template>
  <div class="count-down">
    距结束
    <font>{{day}}</font>天
    <font>{{hour}}</font>时
    <font>{{min}}</font>分
    <font>{{sec}}</font>秒
  </div>
</template>

<script>
export default {
  name:"CountDown",
  props:['gap'],
  data () {
    return {
      gapData: 0,
      day: 0,
      hour: 0,
      min: 0,
      sec: 0
    }
  },
  mounted: function(){
    this.gapData = this.gap;
    this.countTime();
  },
  methods: {
    countTime:function(){
      let gap = this.gapData;
      if (gap >= 0) {
        this.day = Math.floor(gap / 60 / 60 / 24);
        this.hour = Math.floor(gap / 60 / 60 % 24);
        this.min = Math.floor(gap / 60 % 60);
        this.sec = Math.floor(gap % 60);
        this.gapData -= 1;
        setTimeout(this.countTime, 1000);
      }
    }
  },
  watch: {
    gap: function(newVal,oldVal){
       this.gapData = newVal;
    }
  }
}
</script>

<style lang='scss'>
  .count-down{
    text-align: center;
    font-size: 16px;
    font-family: "PingFang SC Regular";
    color: #164676;
    margin: 15px 0;

    font{
      font-size:16px;
      color:#164676;
      font-family:Arial;
      padding:0px 2px;
      background:#b9d7f3;
      padding:5px;
      border-radius:100px;
      -moz-border-radius:100px;
      -webkit-border-radius:100px;
    }
  }
</style>
