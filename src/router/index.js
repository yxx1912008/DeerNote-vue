import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import Index from '@/components/Index'
import MyInfo from '@/components/MyInfo'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: '启动页',
		component: Splash
	}, {
		path: '/index',
		name: '主页',
		component: Index
	}, {
		path: '/MyInfo',
		name: '我的个人信息',
		component: MyInfo
	}]
})