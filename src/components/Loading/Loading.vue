<template>
  <div class="loading">
    <div class="welcome">
      <div class="welcome-wrapper">
        <div class="smile">^_^</div>
        <div class="date">{{date}}</div>
        <div class="test">遇见你，真美好</div>
      </div>
    </div>
    <div class="logo">
      <div class="logo-wrapper">
        <img width="48" height="48" src="./douban-logo.png">
        <div class="logo-desc">
          <span class="title">豆瓣</span>
          <span class="desc">我们的精神角落</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    computed: {
      date() {
        let now = new Date();
        const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        let currentWeek = week[now.getDay()]; // 获取当天星期
        let year = now.getFullYear(); // 当前年
        let month = now.getMonth() + 1; // 月
        let day = now.getDate(); // 日
        return `${year}年${month}月${day}日，${currentWeek}`;
      }
    }
  };
</script>

<style scoped >
  .loading{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: #fff;
  }
    
  .loading  .welcome{
      height: 80%;
      width: 100%;
    }
     
  .loading  .welcome  .welcome-wrapper{
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translate(-50%, 0);
      text-align: center;
      color: #333;
    }
       
  .loading  .welcome  .smile{
      color: #42bd56;
      font-size: 50px;
      white-space: nowrap;
    }
          
  .loading  .welcome  .date{
      margin: 30px 0 20px 0;
      white-space: nowrap;
    }
          
  .loading  .logo{
     height: 20%;
  }
     
  .loading  .logo  .logo-wrapper{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60%;
      margin: 0 auto;
    }
        
  .loading  .logo  img{
       flex: 48px 0 0;
      margin-right: 10px;
    }
         
  .loading  .logo  .logo-desc{
      height: 48px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
          
  .loading  .logo  .title{
       display: inline-block;
      font-size: 22px;
      color: #333;
    }
           
  .loading  .logo  .desc{
      display: inline-block;
      font-size: 14px;
    }
            
</style>