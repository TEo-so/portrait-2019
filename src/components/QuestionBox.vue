<template>
    <div class="questionContent">
      <div class="content">
      <p>中秋即将来临，</p>
      <p>你最喜欢的月饼口味？</p>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
 
  .questionContent {
      background: url("../assets/images/questionContent.png") no-repeat;
      background-size: 100%;
      width: 730px;
      height: 370px;
      position: relative;
      bottom: 50px;
      z-index: 3;
    }

 .content{
     font-family: 'themeWord';
     color:#20464e;
     position: absolute;
     top:130px;
     left:60px;
     letter-spacing: 4px;
     font-size:50px;
    }
.content p{
    border-bottom:3px solid #5c9fae;
    margin-bottom:40px;
    width: 570px;
}
</style>