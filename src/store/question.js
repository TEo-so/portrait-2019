import { ADD_INDEX,
         REDUCE_INDEX,
         CHOOSED_NUMBER
        }
from './type/mutations'

const initialState = {
    questionIndex:1,
    content:[
        ['中秋即将来临','你最喜欢的月饼口味？'],
        ['在空闲时间，你会选','哪种运动放松自己'],
        ['你最习惯','在哪个时间段睡觉'],
        ['对自己的','人设定位是什么'],
        ['近期热门电影','你最难以忘怀的是？']
    ],
    answer:[
        ['A. 水果月饼','B. 莲蓉蛋黄月饼','C. 五仁月饼','D. 猪肉月饼'],
        [['A. 球类',"./images/2.A.png"],['B. 健身','./images/2.B.png'],
         ['C. 电竞','./images/2.C.png'],['D. 田径','./images/2.D.png']],
        ['A. 10:00之前','B. 10:00-12:00','C. 12:00-2：00','D. 2:00之后'],
        [['A. 技术宅','./images/4.A.png'],['B. 文艺青年','./images/4.B.png'],
         ['C. 佛系代表','./images/4.C.png'],['D. 二次元','./images/4.D.png']],
        ['A. 哪吒之魔童降世','B. 全职高手之巅峰荣耀','C. 速度与激情：特别任务','D. 烈火英雄']
    ],
    choosedNum:null
}

const state = {...initialState}

const mutations = {
    [ADD_INDEX](state){
        state.questionIndex +=1;
        state.choosedNum = null

    },
    [REDUCE_INDEX](state){
        state.questionIndex -=1
    },
    [CHOOSED_NUMBER](state,data){
        state.choosedNum = data
    }
}

const getters = {
    choosedNum(){
        return state.choosedNum
    }
}



export default {
    state,
    mutations,
    getters
}