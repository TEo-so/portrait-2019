<template>
  <div class="loading">
      <img class = "camera"
      src="@/assets/images/camera.png">
      <p> 画像绘制中 ...</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.loading {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url("~@/assets/images/loading.png");
  background-size: cover;
  .camera{
      width: 720px;
      height: 786px;
      position: absolute;
      top:15%;
  }
  p{
      
      font-family: 'themeWord';
      color:#933c16 ;
      position: absolute;
      font-weight: 700;
      font-size: 50px;
      white-space: nowrap;
      letter-spacing: 10px;
      bottom:20%;
      left:50%;
      transform: translateX(-50%)
  }
}
</style>