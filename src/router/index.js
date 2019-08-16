import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Question from '@/views/Question.vue'
import Loading from '@/views/Loading.vue'
import Result from '@/views/result.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name:'home',
            component:Home,
        },
        {
            path:'/question',
            name:'question',
            component:Question
        },
        {
            path:'/loading',
            name:'loading',
            component:Loading
        },
        {
            path:'/result',
            name:'resulr',
            component:Result
        },

            
    ]

})