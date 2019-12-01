import Vue from 'vue'
import Vuex from 'vuex'
import da from 'quasar/lang/da'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const hostname = 'http://chinaqwe.top:8081/'

  const Store = new Vuex.Store({

    state: {

      courses: null,
      now_location: {
        location: 'index',
        id: null,
        data: null,
        tab: [{
          name: 'info',
          label: '我的课程',
          icon: 'book'
        }, {
          name: 'add',
          label: '添加课程',
          icon: 'add'
        }]
      },

      teacher_info: {
        teacher_id: '01',
        teacher_name: 'name',
        teacher_password: null,
        teacher_telephone: null,

      },

      url_paths: {
        check_login: hostname + 'teacherLoginForWeb',
        get_course: hostname + 'getTeacherNameAndCourseByTelephone',
        delete_course: hostname + 'deleteCourseByCourseId',
        course_info: hostname + 'teacher/getCourseDetailsByCourseId'
      }
    },
    mutations: {
      updateCourse (state, courses) {
        state.courses = courses
      },
      updateTeacherName (state, teachername) {
        state.teacher_info.teacher_name = teachername
      },
      updateNowCourseLocation (state, location) {
        state.now_location.location = 'course_info'
        state.now_location.id = location
      },
      updateData (state, data) {
        state.now_location.data = data
      },
      updateTabs (state, tab) {
        if (tab === 'index') {
          state.now_location.tab = [{
            name: 'info',
            label: '我的课程',
            icon: 'book'
          }, {
            name: 'add',
            label: '添加课程',
            icon: 'add'
          }]
        } else if (tab === 'course_info') {
          state.now_location.tab = [{
            name: 'info',
            label: '课程信息',
            icon: 'book'
          }, {
            name: 'add',
            label: '学生管理',
            icon: 'add'
          },
            {
              name: 'add',
              label: '考试管理',
              icon: 'add'
            }]
        }

      }
    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })
  return Store
}
