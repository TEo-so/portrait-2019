import {
    FETCH_JUDGEMENT, 
}from './type/actions'

import {
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
        let{data} = await JudgeService.getJudge()
        commit (SET_JUDGEMENT,data)
    },
    
}

const mutations ={
     [SET_JUDGEMENT](state,data){
         state.judgment = data
        
     }
}

const getters = {
    judgment(){
        return state.judgment
    },
   
}

export default {
    state,
    mutations,
    actions,
    getters
}