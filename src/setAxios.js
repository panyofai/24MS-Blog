// 接口封装
import axios from 'axios';
import store from './store/index.js';
axios.defaults.baseURL = 'http://127.0.0.1:3000/';

export default function setAxios(){
	// 请求拦截
	axios.interceptors.request.use(
		config => {
			// 判断是否有token
			if(store.state.token) {
				config.headers['Authorization'] = `Bearer ${store.state.token}`
			}
			return config
		}
	)
}