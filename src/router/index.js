import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/views/Home.vue')
const Question = () => import('@/views/Question.vue')
const Loading = () => import('@/views/Loading.vue')
const Result = () => import('@/views/result.vue')


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/question',
            name: 'question',
            component: Question
        },
        {
            path: '/loading',
            name: 'loading',
            component: Loading
        },
        {
            path: '/result',
            name: 'resulr',
            component: Result
        },


    ]

})