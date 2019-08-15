<template>
 <div class="home">
   <img class="background" src="../assets/images/home.png">
 <router-link to = '/question'>
  <p class="button">开始答题</p>
  </router-link>
     
 </div>

</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.home{
    width: 750px;
    height: auto;
}
.background{
    width: 100%;
}
.button{
   color: #ffffff ;
   position: fixed; 
   top: 1070px;
   left: 610px;   
   writing-mode: vertical-lr;
   font-size:40px;
   font-family: "themeWord"
}


</style>