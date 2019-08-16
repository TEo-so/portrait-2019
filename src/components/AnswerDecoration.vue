<template>
    <div class="decoration">
        <img src = "../assets/images/mooncake.png">
    </div>
</template>

<script>
export default {
    data(){
        return{
            src:[
                '../assets/images/mooncake.png',
                '../assets/images/pillow.png',
                '../assets/images/movie.png'
            ]
        }
    }
    
}
</script>

<style lang="less" scoped>
.decoration{
    position: absolute;
    top:920px;
    left:450px;
    img{
      width: 211px;
      height: 146px;
    }
  
    
}
</style>