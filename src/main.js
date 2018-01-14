// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//导入vant ui组件
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import router from './router'
Vue.config.productionTip = false
Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})