
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/course_manage', component: () => import('pages/CourseManage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue')}
    ]
  }
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
