import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path:'/',
			component: Home,
		},
		{
			path: '/blog',
			component: () => import('./views/blog.vue')
		},
		{
			path: '/blog/post',
			component: () => import('./views/Post.vue')
		}
	]
})