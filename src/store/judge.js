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
     
     judgeInformation:{}
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
         state.judgeInformation = data
        
     }
}

const getters = {
    judgeInformation(){
        return state.judgeInformation
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}