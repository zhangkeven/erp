import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/pages/login/login.vue'
import Home from '@/pages/Home/Index.vue'
import main from '@/pages/main/main.vue'
import setColor from '@/pages/setColor.vue'
import Personnel from '@/pages/Personnel/Index.vue'
import PersonnelAdd from '@/pages/Personnel/PersonnelAdd.vue'
import PersonnelEdit from '@/pages/Personnel/PersonnelEdit.vue'
import PersonnelDetails from '@/pages/Personnel/PersonnelDetails.vue'

import Organ from '@/pages/Organ/Index.vue'
import OrganAdd from '@/pages/Organ/OrganAdd.vue'
import OrganEdit from '@/pages/Organ/OrganEdit.vue'
import OrganDetails from '@/pages/Organ/OrganDetails.vue'
import Job from '@/pages/Job/Index.vue'
import JobAdd from '@/pages/Job/JobAdd.vue'
import JobEdit from '@/pages/Job/JobEdit.vue'
import JobDetails from '@/pages/Job/JobDetails.vue'
import UserRole from '@/pages/UserRole/Index.vue'
import UserRoleAdd from '@/pages/UserRole/UserRoleAdd.vue'
import UserRoleEdit from '@/pages/UserRole/UserRoleEdit.vue'
import UserRoleDetails from '@/pages/UserRole/UserRoleDetails.vue'
import User from '@/pages/User/Index.vue'
import UserAdd from '@/pages/User/UserAdd.vue'
import UserEdit from '@/pages/User/UserEdit.vue'
import UserDetails from '@/pages/User/UserDetails.vue'
import globalDataTools from '@/util/globalData/globalDataTools'
import Storage from '@/util/setStorage'
import zlDialog from '@/components/extends/zlDialog'//弹出框

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: login
},
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/main',
        name: 'main',
        component: main,
        children: [
            //主题色
            {
                path: '/setColor',
                name: 'setColor',
                component: setColor
            },
            //人员管理
            {
                path: '/personnel',
                name: 'Personnel',
                component: Personnel
            },
            {
                path: '/personneladd',
                name: 'PersonnelAdd',
                component: PersonnelAdd
            },
            {
                path: '/personneledit',
                name: 'PersonnelEdit',
                component: PersonnelEdit
            },
            {
                path: '/personneldetails',
                name: 'PersonnelDetails',
                component: PersonnelDetails
            },

            //组织架构
            {
                path: '/organ',
                name: 'Organ',
                component: Organ
            },
            {
                path: '/organadd',
                name: 'OrganAdd',
                component: OrganAdd
            },
            {
                path: '/organedit',
                name: 'OrganEdit',
                component: OrganEdit
            },
            {
                path: '/organdetails',
                name: 'OrganDetails',
                component: OrganDetails
            },

            //职位管理
            {
                path: '/job',
                name: 'Job',
                component: Job
            },
            {
                path: '/jobadd',
                name: 'JobAdd',
                component: JobAdd
            },
            {
                path: '/jobedit',
                name: 'JobEdit',
                component: JobEdit
            },
            {
                path: '/jobdetails',
                name: 'JobDetails',
                component: JobDetails
            },
            //用户管理
            {
                path: '/user',
                name: 'User',
                component: User
            },
            {
                path: '/useradd',
                name: 'UserAdd',
                component: UserAdd
            },
            {
                path: '/useredit',
                name: 'UserEdit',
                component: UserEdit
            },
            {
                path: '/userdetails',
                name: 'UserDetails',
                component: UserDetails
            },

            //  用户角色
            {
                path: '/userrole',
                name: 'UserRole',
                component: UserRole
            },
            {
                path: '/userroleadd',
                name: 'UserRoleAdd',
                component: UserRoleAdd
            },
            {
                path: '/userroleedit',
                name: 'UserRoleEdit',
                component: UserRoleEdit
            },
            {
                path: '/userroledetails',
                name: 'UserRoleDetails',
                component: UserRoleDetails
            },
        ]
    },
]

const router = new VueRouter({
    routes
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    next();

    // let storage = new Storage();
    // let token = storage.getItem('Token')
    // if (to.path == '/') {
    //     next();
    // } else {
    //     if (token == false) {
    //         zlDialog({
    //             contentText: '您没有访问权限！请先登录',
    //             cancelText: '确定',
    //             cancel: () => {//关闭弹出框
	// 				next("/");
	// 			}
    //         })
    //     } else {
    //         next();
    //     }
    // }
})

export default router
