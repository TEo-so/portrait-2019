<template>
    <div class="action">
           <div class="back">
               <p>首页</p>
            </div>
           <div class="next"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.action {
  display: flex;
  position: fixed;
  top: 1180px;
  left: 50px;
}
.back,
.next {
  width: 183px;
  height: 85px;
  background-size: 100%;
}
.back {
  background: url("../assets/images/back.png");
  margin-right: 225px;
  display: flex;
  align-items: center;
  background-size: 100%;
  p {
  font-family: "themeWord";
  color: #ffffff;
  font-size: 40px;
  margin-left: 45px;
}
}

.next {
  background: url("../assets/images/next.png");
  background-size: 100%;
}

</style>