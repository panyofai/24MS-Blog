import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		component: () => import('@/components/CommentLayout.vue'),
		// 子路由
		children: [{
				path: '',
				name: 'home',
				component: () => import('@/views/Home.vue')
			},
			{
				// path路径对应router标签中to的目标, 且传id值
				path: '/blog-detail/:blogId',
				component: () => import('@/views/BlogDetail.vue')
			},
			{
				path: '/personal',
				name: 'personal',
				component: () => import('@/views/Personal.vue')
			},
			{
				path: '/myblog',
				name: 'myblog',
				component: () => import('@/views/Article.vue')
			},
			{
				path: '/article/edit',
				name: 'ArticleEdit',
				component: () => import('@/views/ArticleEdit.vue')
			},
			{
				path: '/article/edit/:id',
				name: 'ArticleEditId',
				component: () => import('@/views/ArticleEdit.vue')
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/Login.vue')
	},
	{
		path: '/ImproTable/table1',
		name: 'table1',
		component: () => import('@/views/ImproTable/table1.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
