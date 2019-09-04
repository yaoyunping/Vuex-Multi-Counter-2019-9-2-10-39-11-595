import Router from 'vue-router';
import Vue from 'vue';
import Welcome from '../components/Welcome.vue';
import CounterGroup from '../components/CounterGroup.vue';
import Login from '../components/login.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            component: Login
        },
        {
            path: "/welcome/:username",
            component: Welcome,
            props: true
        },
        { path: '/welcome/:username', 
        component: Welcome,
        children: [
          {
            path: 'counter',
            component: CounterGroup
          },
        {
            path: "/counter",
            component: CounterGroup
        },
        {
            path: '/todolist', redirect: '/'
        }
    ]
]
})