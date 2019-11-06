//配置路由相关信息

import VueRouter from 'vue-router'
import Vue from 'vue'

/*import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'*/

//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

//路由懒加载，好处：打包的js文件更小，效率更高
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeMessage = () => import('../components/HomeMessage')
const HomeNews = () => import('../components/HomeNews')
const Profile = () => import('../components/Profile')


//2.创建VueRouter对象
const router = new VueRouter({
    mode: 'history',  //配置为路径显示为history模式，默认为hash模式
    linkActiveClass: 'active', //路由被点击时的默认class名称

    //配置路由和组件之间的关系
    routes: [
        //设置路由默认路径
        {
            path: '',
            redirect: '/home',

        },

        {
            path: '/home',
            component: Home,
            meta: {
                title: '首页'
            },
            children: [
               /* {
                    path: '',
                    redirect: 'news',
                },*/
                {
                    path: 'news',//子路由可以不加/
                    component: HomeNews,
                },
                {
                    path: 'message',//子路由可以不加/
                    component: HomeMessage,
                }
            ]
        },

        {
            path: '/about',
            component: About,
            meta: {
                title: '关于'
            }
        },

        {
            path: '/user/:userId',
            component: User,
            meta: {
                title: '用户'
            }
        },

        {
            path: '/profile',
            component: Profile,
            meta: {
                title: '个人档案'
            }
        }
    ],

})

router.beforeEach((to, from, next) => {
    // console.log(to);
    document.title = to.matched[0].meta.title
    next()
})


//3.将router对象挂载到Vue实例中
export default router

