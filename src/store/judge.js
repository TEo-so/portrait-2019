import {
    FETCH_JUDGEMENT, 
}from './type/actions'

import {
    CHANGE_USER_NAME,
    SET_JUDGEMENT
}from './type/mutations'

import {
    JudgeService
}from '../common/service/api'

const initialState = {
    user_name: localStorage.getItem('user_name'),
    judgment:null,

}

const state = {...initialState}

const actions ={
    async[FETCH_JUDGEMENT]({commit}){
        let {data} = await JudgeService.getJudge()
        console.log(data)
        commit (SET_JUDGEMENT,data)
    },
    
}

const mutations ={
     [SET_JUDGEMENT](state,data){
         state.judgment = data
        
     },
     [CHANGE_USER_NAME](state,data){
        state.user_name =data
    }
}

const getters = {
    judgment(){
        return state.judgment.judgment
    },
    user_name(){
        return state.user_name
    }
   
}

export default {
    state,
    mutations,
    actions,
    getters
}