<template>
  <div class="result">
    <div class="action">
      <div class="testAgain"></div>
      <div class="refresh"></div>
    </div>

    <div class="nickname">
      <p>输入您的昵称</p>
    </div>
    <p class="rest">的画像</p>

    <p class="portrait">
      生活中的你随和安静，在超越自己的另一个赛场上，
      延续了你对生活充满阳光，积极向上的心态。
      你所走过人生的一帧一帧都被镌刻在生命里，追求卓越是生活给你的馈赠。
      阶段的转变，学会合理利用时间，规律的作息就显得非常重要，
      你可以在时间规划内高效完成任务。
      “我命由我不由天”，再起航，你的未来邮你定。
    </p>

    <p class="subtitle">与你相同的邮子</p>

    <div class="analyze">
      <ul>
        <li> 
            <span class="option">莲蓉蛋黄</span>
            <span class="dots">。。。。。。。。。。</span>
            <span class="rate">50%</span>
        </li>
        <li>
             <span class="option">球类</span>
            <span class="dots">。。。。。。。。。。</span>
            <span class="rate">50%</span>
        </li>
        <li>
            <span class="option">10：00-12：00</span>
            <span class="dots">。。。。。。。。。。</span>
             <span class="rate">50%</span>
        </li>
        <li>
             <span class="option">佛系代表</span>
             <span class="dots">。。。。。。。。。。</span>
             <span class="rate">50%</span>
        </li>
        <li>
            <span class="option">哪吒大闹东宫</span>
            <span class="dots">。。。。。。。。。。</span>
            <span class="rate">50%</span>
        </li>
      </ul>
    </div>

    <div class="share">
      <img src="../assets/images/share.png" />
    </div>

    <p class="end">"邮"你,发现更多可能</p>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="less" scoped>
.result {
  width: 750px;
  height: 1701px;
  background: url("../assets/images/result.png");
  background-size: 100%;
}
.action {
  display: flex;
  position: absolute;
  top: 220px;
  left: 110px;
}

.testAgain,
.refresh {
  width: 176px;
  height: 86px;
}
.testAgain {
  background: url("../assets/images/testAgain.png");
  background-size: 100%;
  margin-right: 160px;
}
.refresh {
  background: url("../assets/images/refresh.png");
  background-size: 100%;
}

.nickname {
  position: absolute;
  top: 330px;
  left: 90px;
  display: flex;
  width: 316px;
  height: 88px;
  display: flex;
  align-items: center;
  background: url("../assets/images/nickname.png");
  background-size: 100%;
  p {
    font-family: "themeWord";
    color: #dcbb94;
    font-size: 40px;
    margin-left: 45px;
    margin-top: 10px;
    letter-spacing: 3px;
  }
}
.rest {
  color: #3c260c;
  font-family: "themeWord";
  font-size: 55px;
  position: absolute;
  top: 350px;
  left: 430px;
  font-weight: 600;
  white-space: nowrap;
   
}
.portrait {
  font-family: "themeWord";
  width: 530px;
  margin: 0 auto;
  font-size: 30px;
  position: relative;
  top: 460px;
  line-height: 45px;
}

.subtitle {
  color: #3c260c;
  font-family: "themeWord";
  font-size: 40px;
  font-weight: 600;
  position: absolute;
  top: 890px;
  white-space: nowrap;
  margin-left: 230px;
}

.analyze {
  font-family: "themeWord";
  color: #3c260c;
  font-size: 40px;
  position: relative;
  top: 560px;
  left: 90px;
}
.analyze li {
    margin-bottom: 45px;
    .option{
        position:absolute;
        background: #F5F1EE;

    }
 
}
.share {
  position: absolute;
  top: 1420px;
  left:50%;
  transform: translateX(-50%);
}
.share img {
  width: 107px;
  height: 103px;
}
.end {
  font-family: "themeWord";
  position: absolute;
  top: 1550px;
  left:50%;
  transform: translateX(-50%);
  white-space: nowrap;
  color: #565f5e;
}


</style>