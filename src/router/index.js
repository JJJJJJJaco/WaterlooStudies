import CourseAdvisor from '@/views/CourseAdvisor.vue';
import CoursePrereq from '@/views/CoursePrereq.vue';
import CreditTracker from '@/views/CreditTracker.vue';
import Home from '@/views/Home.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/credit_tracker',
		name: 'CreditTracker',
		component: CreditTracker
	},
	{
		path: '/course_advisor',
		name: 'CourseAdvisor',
		component: CourseAdvisor
	},
	{
		path: '/course_prereq',
		name: 'CoursePreqre',
		component: CoursePrereq
	}
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	// 	children: [
	// 		{
	// 			path: '2',
	// 			component: () => import('../views/About2.vue')
	// 		}
	// 	]
	// }
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router; 
