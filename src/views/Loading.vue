<template>
  <div>
    <div class="loading" :class="{mask:isMask}">
      <img class="camera" src="@/assets/images/camera.png" />
      <p class="loadWords">画像绘制中 ...</p>
      <div class="result">
        <div class="contain">
          <div class="action">
            <div class="testAgain"></div>
            <div class="refresh"></div>
          </div>
          <div ref="screenshot" class="screenshot">
            <div class="nickname">
              <div class="left">
                <input class="name" ref="input" @focus="focus" v-model="model" />
                <p class="motify" v-if="isShow">(点击可修改分享时昵称)</p>
              </div>
              <div class="right">的画像</div>
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
                  <div class="dots">...............</div>
                  <span class="rate">50%</span>
                </li>
                <li>
                  <span class="option">球类</span>
                  <span class="dots">...............</span>
                  <span class="rate">50%</span>
                </li>
                <li>
                  <span class="option">10：00-12：00</span>
                  <span class="dots">...............</span>
                  <span class="rate">50%</span>
                </li>
                <li>
                  <span class="option">佛系代表</span>
                  <span class="dots">...............</span>
                  <span class="rate">50%</span>
                </li>
                <li>
                  <span class="option">哪吒大闹东宫</span>
                  <span class="dots">...............</span>
                  <span class="rate">50%</span>
                </li>
              </ul>
            </div>

            <div class="share">
              <img
                v-if="isShare"
                @click="getImage()"
                src="@/assets/images/share.png"
                crossorigin="anonymous"
              />
              <img v-else src="@/assets/images/QRcode.png" crossorigin="anonymous" />
            </div>

            <p class="end">"邮"你,发现更多可能</p>
          </div>
        </div>
      </div>
    </div>
    <div ref="containshot" class="containshot"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import html2canvas from "html2canvas";
import { setTimeout } from "timers";

export default {
  methods: {
    getImage() {
      this.isShare = false;
      this.isShow = false;
      this.isMask = true;
      this.$nextTick(function() {
        html2canvas(this.$refs.screenshot, {
          backgroundColor: "#f7f0de",
          y: 130,
          useCORS: true
        }).then(canvas => {
          this.$refs.containshot.append(canvas);
          let link = document.createElement("a");
          link.href = canvas.toDataURL();
          link.setAttribute("download", "图片canvas.png");
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
          this.isShare = true;
          this.isShow = true;
          this.isMask = false;
        });
      });
      setTimeout(function() {
        let node = document.getElementsByClassName("containshot")[0];
        node.removeChild(node.childNodes[0]);
      }, 8000);
    },
    focus() {
      this.$refs.input.value = "";
    }
  },
  data() {
    return {
      isShare: true,
      isShow: true,
      isMask: false,
      model: "红岩网校测试长度超过"
    };
  },
  computed: {
    ...mapGetters(["answerBack"])
  },
  watch:{
    model(){
       console.log(this.model)
             
      
    }
  }

};
</script>

<style lang="less" scoped>
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-355px);
  }
}
@keyframes print {
  0% {
    height: 0px;
  }

  100% {
    height: 800px;
  }
}
.containshot {
  width: 605px;
  position: fixed;
  bottom: 40px;
  z-index: 199;
  padding-left: 70px;
}
.mask {
  filter: grayscale(70%);
}
.result {
  position: absolute;
  width: 750px;
  top: 11%;
  overflow: hidden;
  animation: print 3s 1 1.5s;
  animation-fill-mode: forwards;
  .contain {
    position: absolute;
    background: #f5f1ee;
    left: 50%;
    transform: translateX(-50%);
    height: 1500px;
    width: 635px;

    .action {
      display: flex;
      margin-top: 10px;
      margin-left: 60px;
    }

    .testAgain,
    .refresh {
      width: 176px;
      height: 86px;
    }
    .testAgain {
      background: url("~@/assets/images/testAgain.png");
      background-size: 100%;
      margin-right: 160px;
    }
    .refresh {
      background: url("~@/assets/images/refresh.png");
      background-size: 100%;
    }
    .screenshot {
      width: 600px;
      position: relative;
      margin-left: 15px;
    }

    .nickname {
      margin: 0 auto;
      margin-top: 15px;
      width: 450px;
      letter-spacing: 3px;
      text-align: center;
      display: flex;
      .left {
        width: 310px;
        .motify {
          font-size: 25px;
          white-space: nowrap;
          position: relative;
          top: 10px;
        }
        input {
          background: none;
          width: 300px;
          font-family: "themeWord";
          color: #dcbb94;
          font-size: 50px;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
        }
      }
      .right {
        font-family: "themeWord";
        color: #dcbb94;
        font-size: 50px;
        color: #6d5c48;
        white-space: nowrap;
      }
    }

    .portrait {
      font-family: "themeWord";
      width: 530px;
      margin: 0 auto;
      font-size: 30px;
      margin-top: 45px;
      line-height: 45px;
      p {
        white-space: wrap;
      }
    }

    .subtitle {
      color: #3c260c;
      font-family: "themeWord";
      font-size: 40px;
      font-weight: 600;
      margin: 0 auto;
      margin-top: 40px;
      white-space: nowrap;
      width: 300px;
    }

    .analyze {
      font-family: "themeWord";
      color: #3c260c;
      font-size: 40px;
      margin: 0 auto;
      margin-top: 50px;
      width: 500px;
    }
    .analyze li {
      margin-bottom: 45px;
      display: flex;
      .option {
        position: absolute;
        background: #f5f1ee;
        z-index: 2;
      }
      .dots {
        position: relative;
        bottom: 8px;
        letter-spacing: 20px;
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
      padding-bottom: 80px;
      white-space: nowrap;
      color: #565f5e;
    }
  }
}
.loading {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 1800px;
  width: 100%;
  // background: url("~@/assets/images/loading.png");
  background: #fff4d2;
  background-size: cover;
  .camera {
    width: 720px;
    height: 786px;
    position: absolute;
    z-index: 99;
    top: 10%;
    animation: moveUp 3s 1 1.5s;
    animation-fill-mode: forwards;
  }
  .loadWords {
    font-family: "themeWord";
    color: #933c16;
    position: absolute;
    top: 400%;
    font-weight: 700;
    font-size: 50px;
    white-space: nowrap;
    letter-spacing: 10px;
    top: 55%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>