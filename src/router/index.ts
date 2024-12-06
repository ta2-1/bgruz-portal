import { createRouter, createWebHistory } from 'vue-router';

const index = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			redirect(to) {
				return { name: 'Partner' };
			},
		},
		{
			path: '/partner',
			name: 'Partner',
			component: () => import('../views/partner/index.vue'),
		},
		{
			path: '/products',
			name: 'Products',
			component: () => import('../views/products/index.vue'),
		},
		{
			path: '/auth/login',
			name: 'Login',
			component: () => import('../views/auth/login.vue'),
		},
	],
});

export default index;
