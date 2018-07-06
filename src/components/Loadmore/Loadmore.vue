<template>
  <div class="loadmore" :class="{'full':fullScreen}">
    <div class="hasmore" v-if="hasmore">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="nomore" v-else>
      没有更多了...
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      hasmore: {
        type: Boolean,
        default: true
      },
      fullScreen: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        sky: 'sky'
      };
    }
  };
</script>

<style scoped>
  .loadmore{
    width: 150px;
    height: 15px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10px;
  }
    
  .loadmore.full{
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
  }
    
  .loadmore .hasmore{
    height: 100%;
  }
    
  .loadmore .hasmore  span{
    display: inline-block;
      width: 15px;
      height: 100%;
      margin-right: 5px;
      background: lightgreen;
      animation: load 1.04s ease infinite;
  }
        
    .loadmore .hasmore  span:nth-child(1){

      animation-delay:0.13s;
    }
    .loadmore .hasmore  span:nth-child(2){
      animation-delay:0.26s;
    }
    .loadmore .hasmore  span:nth-child(3){
      animation-delay:0.39s;
    }
    .loadmore .hasmore  span:nth-child(4){
      animation-delay:0.52s;
    }
    .loadmore .hasmore  span:nth-child(5){
      animation-delay:0.65s;
    }
    .loadmore .hasmore  span:last-child{
      margin-right: 0px
    }
    .loadmore .nomore{
      font-size: 15px;
      color: #aaa;
      padding-bottom: 8px;
    }
  @keyframes load{
    0%{
      opacity: 1;
      transform: scale(1.2)}
    100%{
      opacity: .2;
      transform: scale(.2)}
  }
    
</style>