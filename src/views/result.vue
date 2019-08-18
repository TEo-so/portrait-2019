<template>
  <div class="result">
    <div class="action">
      <div class="testAgain"></div>
      <div class="refresh"></div>
    </div>
    <div ref="containshot" class="containshot"></div>
    <div ref="screenshot" class="screenshot">
      <div class="nickname">
        <p class="name">
          <input />
        </p>
        <p class="rest">的画像</p>
      </div>

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
      <img  v-if = "isShare" @click="getImage()" src="../assets/images/share.png" />
      <img  v-else  src="../assets/images/QRcode.png">
    </div>

    <p class="end">"邮"你,发现更多可能</p>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import { setTimeout } from 'timers';
export default {
  methods: {
    getImage() {
      this.isShare = false;
      this.$nextTick(function(){
        html2canvas(this.$refs.screenshot, {
        backgroundColor: "#f7f0de"
      }).then(canvas => {
        this.$refs.containshot.append(canvas);
        let link = document.createElement("a");
        link.href = canvas.toDataURL();
        link.setAttribute("download", "图片canvas.png");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
      })
      }
      );
    }
  },
  data(){
    return{
      isShare:true,
     
    }
  }
};
</script>

<style lang="less" scoped>
.result {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 1751px;
  width: 100%;
  background: url("../assets/images/result.png");
  background-size: cover;
}
.action {
  display: flex;
  margin-top: 220px;
  margin-left: 120px;
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
.screenshot{
  width: 700px;
  margin: 0 auto;

}
.containshot{
  width: 700px;
  margin-top:20px;
  left:50%;
  transform:translateX(-50%);
  position: absolute;
  z-index: 99;
}

.nickname {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 450px;

  .name {
    width: 316px;
    height: 88px;
    background: url("../assets/images/nickname.png");
    background-size: 100%;
    font-family: "themeWord";
    color: #dcbb94;
    font-size: 40px;
    margin-top: 10px;
    letter-spacing: 3px;
    input {
      background: none;
    }
  }
  .rest {
    color: #3c260c;
    font-family: "themeWord";
    font-size: 55px;
    font-weight: 600;
    white-space: nowrap;
  }
}

.portrait {
  font-family: "themeWord";
  width: 530px;
  margin: 0 auto;
  font-size: 30px;
  margin-top: 50px;
  line-height: 45px;
}

.subtitle {
  color: #3c260c;
  font-family: "themeWord";
  font-size: 40px;
  font-weight: 600;
  margin: 0 auto;
  margin-top: 40px;
  white-space: nowrap;
  width:300px;
  
}

.analyze {
  font-family: "themeWord";
  color: #3c260c;
  font-size: 40px;
  margin: 0 auto;
  margin-top: 50px;
  width:500px;
}
.analyze li {
  margin-bottom: 45px;
  .option {
    position: absolute;
    background: #f5f1ee;
  }
}
.share {
  width: 110px;
  margin: 0 auto;
}
.share img {
  width: 107px;
  height: 103px;
}
.end {
  font-family: "themeWord";
  width: 240px;
  margin: 0 auto;
  margin-top: 10px;
  white-space: nowrap;
  color: #565f5e;
}
</style>