import Vue from 'vue'
import Router from  'vue-router'
import quemsomos from './components/quemsomos'
import mainpage from "./pages/mainpage"
import contato from "./components/contato"
import servicesection from "./components/servicesection"

Vue.use(Router)

export default new Router({
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash,
                offset: {x:0, y:0}
            }
        }
    },
    routes: [
        {
            path: '/',
            component: mainpage,
            name: 'mainpage'
        },
        {
            path: '/servicesection',
            components: mainpage,
            name: 'servicesection'
        },
        {
            path: '/servicesection',
            components: servicesection,
            name: 'servicesection' 
        },
        {
            path: '/habit',
            components: mainpage,
            name: 'habit'
        },
        {
            path: '/middlesection',
            component: mainpage,
            name: 'middlesection'
        },
        {
            path: '/quemsomos',
            component: quemsomos,
            name: 'quemsomos'
        },
        {
            path: '/contato',
            component: contato,
            name: 'contato'
        }
    ]
})