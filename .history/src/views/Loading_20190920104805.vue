<template>
  <div>
    <div class="loading" :class="{mask:isMask}">
      <img class="camera" src="@/assets/images/camera.png" />
      <p class="loadWords">画像绘制中 ...</p>
      <div class="result">
        <div class="contain">
          <div class="empty"></div>
          <div class="action">
            <router-link to="/question">
              <div class="testAgain" @click="testAgain()"></div>
            </router-link>

            <div class="refresh" @click="refresh"></div>
          </div>
          <div ref="screenshot" class="screenshot">
            <div class="nickname">
              <div class="left">
                <input class="name" ref="input" :placeholder="model" />
                <p class="motify" v-if="isShow">(点击可修改分享时昵称)</p>
              </div>
              <div class="right">的画像</div>
            </div>

            <p class="portrait">
              <span>{{answerBack.ratio.description}}</span>
            </p>

            <p class="subtitle">与你相同的邮子</p>

            <div class="analyze">
              <ul>
                <li>
                  <span class="option">{{this.answer[0][answerBack.answer.eat].split('.')[1]}}</span>
                  <div class="dots">...............</div>
                  <span class="rate">{{new Number(answerBack.ratio.EatRatio).toFixed(1)}}%</span>
                </li>
                <li>
                  <span
                    class="option"
                  >{{this.answer[1][answerBack.answer.exercise][0].split('.')[1]}}</span>
                  <span class="dots">...............</span>
                  <span class="rate">{{new Number(answerBack.ratio.ExerciseRatio).toFixed(1)}}%</span>
                </li>
                <li>
                  <span class="option">{{this.answer[2][answerBack.answer.sleep].split('.')[1]}}</span>
                  <span class="dots">...............</span>
                  <span class="rate">{{new Number(answerBack.ratio.SleepRatio).toFixed(1)}}%</span>
                </li>
                <li>
                  <span
                    class="option"
                  >{{this.answer[3][answerBack.answer.people_set][0].split('.')[1]}}</span>
                  <span class="dots">...............</span>
                  <span class="rate">{{new Number(answerBack.ratio.PSRatio).toFixed(1)}}%</span>
                </li>
                <li>
                  <span class="option">{{this.answer[4][answerBack.answer.movie].split('.')[1]}}</span>
                  <span class="dots">...............</span>
                  <span class="rate">{{new Number(answerBack.ratio.MovieRatio).toFixed(1)}}%</span>
                </li>
              </ul>
            </div>

            <div class="share">
              <img
                v-if="isShare"
                @touchstart="getImage()"
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
import { SET_TEST_AGAIN, CHANGE_USER_NAME } from "../store/type/mutations";
import { FETCH_OLD_ANSWER } from "../store/type/actions";
export default {
  methods: {
    getImage() {
      this.isShare = false;
      this.isShow = false;
      this.isMask = true;
      this.$nextTick(function() {
        html2canvas(this.$refs.screenshot, {
          backgroundColor: "#F7F0DE",
          y: 170,
          x: 30,
          useCORS: true
        }).then(canvas => {
          let image = new Image();
          image.width = 320;
          image.src = canvas.toDataURL("image/png");
          image.onload = function() {
            alert("长按图片保存");
          };

          this.$refs.containshot.append(image);
          this.isShare = true;
          this.isShow = true;
          this.isMask = false;
        });
      });

      setTimeout(function() {
        this.isShare = true;
        this.isShow = true;
        this.isMask = false;
        let node = document.getElementsByClassName("containshot")[0];
        let child = node.getElementsByTagName("img")[0];

        console.log(node, child);
        if (child) {
          node.removeChild(child);
        }
      }, 5000);
    },

    testAgain() {
      this.$store.commit(SET_TEST_AGAIN);
    },
    refresh() {
      this.$store.dispatch(FETCH_OLD_ANSWER);
    }
  },
  data() {
    return {
      isShare: true,
      isShow: true,
      isMask: false,
      model: this.$store.state.question.user_name
    };
  },
  computed: {
    ...mapGetters([
      "answerBack",
      "choosedNum",
      "choosedList",
      "questionIndex",
      "answer"
    ])
  },
  watch: {
    model(newValue, oldValue) {
      if (!oldValue) {
        this.$refs.input.value = this.model;
      } else {
        this.$store.commit(CHANGE_USER_NAME, newValue);
      }
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
    transform: translateY(-320px);
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
  width: 660px;
  position: fixed;
  background: #f7f0de;
  bottom: 40px;
  z-index: 199;
  padding-left: 20px;
  margin-left: 50px;
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
    .empty {
      height: 30px;
    }
    .action {
      display: flex;
      margin-top: 30px;
      margin-left: 60px;
      padding-top: 20px;
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
          font-family: "no";
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
      text-align: justify;
      letter-spacing: 2px;
      text-justify: inter-ideograph;
      p span {
        height: 45px;
        line-height: 45px;
        width: 530px;
        text-align: justify;
        display: inline-block;
        letter-spacing: 5px;
        text-justify: inter-ideograph;
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
      width: 550px;
      margin-left: 20px;
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
      width: 300px;
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
    top: 8%;
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