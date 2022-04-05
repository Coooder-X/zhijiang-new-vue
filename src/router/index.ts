import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ProjectManage from '@/components/ProjectManage.vue';
import Test from '@/pages/test.vue';
import EditAuthority from '@/pages/EditAuthority.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/Home',
		component: HomePage,
	}, {
		path: '/',
		component: HomePage,
	}, {
		path: '/data',
		component: Test,
	}, {
		path: '/project',
		component: ProjectManage,
	}, {
		path: '/authority',
		component: EditAuthority,
	},
]

const router = createRouter({
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes, // `routes: routes` 的缩写
})

export default router;