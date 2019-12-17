const routes = [
  {
    path: '/index',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/course_manage', component: () => import('pages/CourseManage.vue') },
      { path: '/course_info', component: () => import('pages/CourseInfo.vue') },
      { path: '/add_course', component: () => import('pages/AddCourse.vue') },
      { path: '/exam_manage', component: () => import('pages/ExamManage.vue') },
      { path: '/exam_info', component: () => import('pages/ExamInfo.vue') },
      { path: '/add_exam', component: () => import('pages/AddExam.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
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
