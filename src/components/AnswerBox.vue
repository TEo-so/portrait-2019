<template>
<div class="answer">
    <ul>
        <li v-for = "(item,index) in answer"
        :key = index>{{item}}</li>
    </ul>
</div>
</template>

<script>
export default {
    data(){
        return {
            answer:[
                'A. 水果月饼',
                'B. 莲蓉蛋黄月饼',
                'C. 五仁月饼',
                'D. 猪肉月饼'
            ]
        }
    }
}
</script>
    
<style lang="less" scoped>
.answer{
    margin-top:-30px;
    margin-left:100px;
    font-family: 'themeWord';
    font-size: 55px;
    color:#5d392d;
    
}
.answer li{
    margin-bottom: 60px;
    white-space:nowrap

}

</style>