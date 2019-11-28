import Vue from 'vue'
import Vuex from 'vuex'

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

      teacher_info: {
        teacher_id: '01',
        teacher_name: 'name',
        teacher_password: null,
        teacher_telephone: null,

      },

      url_paths: {
        check_login: hostname + 'teacherLoginForWeb',
        get_course: hostname + 'getTeacherNameAndCourseByTelephone',
        delete_course: hostname + 'deleteCourseByCourseId'
      }
    },
    mutations: {
      updateCourse (state, courses) {
        state.courses = courses
      },
      updateTeacherName (state, teachername) {
        state.teacher_info.teacher_name = teachername
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
