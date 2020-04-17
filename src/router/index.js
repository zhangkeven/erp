import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/pages/login/login.vue'
import Home from '@/pages/Home/Index.vue'
import main from '@/pages/main/main.vue'
import Personnel from '@/pages/Personnel/Index.vue'
import PersonnelAdd from '@/pages/Personnel/PersonnelAdd.vue'
import setColor from '@/pages/setColor.vue'
import Organ from '@/pages/Organ/Index.vue'
import OrganAdd from '@/pages/Organ/OrganAdd.vue'
import Job from '@/pages/Job/Index.vue'
import JobAdd from '@/pages/Job/JobAdd.vue'
import UserRole from '@/pages/UserRole/Index.vue'
import UserRoleAdd from '@/pages/UserRole/UserRoleAdd.vue'
import User from '@/pages/User/Index.vue'
import UserAdd from '@/pages/User/UserAdd.vue'
import globalDataTools from '@/util/globalData/globalDataTools'
import  Storage from '@/util/setStorage'
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
		]
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

// // 导航守卫
// // 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
	// let storage = new Storage();
	// 	// const Token = storage.getItem('Token')
	// 	// if(Token==false){
	// 	// 	next('/');
	// 	// 	return
	// 	// }
	next();
});

// // 添加请求拦截器，在请求头中加token
// axios.interceptors.request.use(
// 	config => {
// 	if (localStorage.getItem('Authorization')) {
// 	config.headers.Authorization = localStorage.getItem('Authorization');
// }
//
// return config;
// },
// error => {
// 	return Promise.reject(error);
// });

// localStorage.removeItem('Authorization');
// this.$router.push('/login');

export default router
