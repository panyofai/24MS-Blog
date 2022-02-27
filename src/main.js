import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/reset.scss'
import '@/assets/scss/common.scss'
import '@/assets/font/iconfont.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import userAction from './common/login.js'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.use(userAction)

// vuex丢失拦截
router.beforeEach((to,from,next)=>{
	let token = 'asd'
	if(token) {
		// 提交vuex的登录事件
		store.commit('changIsSignIn', 1)
	}
	next()
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
