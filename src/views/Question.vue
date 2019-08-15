<template>
   <div class="question">
       <div class="questionIndex">
           <p class="number">NO.1</p>
       </div> 

       <div class="questionbox"></div>
      

       <div class="action">
           <div class="back">
               <p>首页</p>
            </div>
           <div class="next"></div>
       </div>
       
   </div> 
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
.question{
    width: 750px;
    height: 1334px;
    background: url('../assets/images/question-background.png') no-repeat
}

.questionIndex{
        width:245px;
        height:134px;
        background:url('../assets/images/questionIndex.png');
        position: relative;
        top:165px;
        left:30px;
        display: flex;
        align-items: center;
        z-index: 3
    }

.number{
    font-family: "themeWord";
    font-size: 60px;
    margin-left: 80px;
    font-weight: 500
}

.action{
    display: flex;
    position: fixed;
    top:1180px;
    left:50px;

}
.back ,.next {
    width: 183px;
    height: 85px;
}
.back{
    background: url('../assets/images/back.png');
    margin-right:225px;
    display: flex;
    align-items: center;
    
}
.back p{
    font-family: 'themeWord';
    color: #ffffff;
    font-size: 40px;
    margin-left:45px;
}
.next{
    background: url('../assets/images/next.png')
}

.questionbox{
     width: 730px;
     height: 370px;
     background:url('../assets/images/questionBox.png');
     position: relative;
     top: 120px
    
 }
</style>