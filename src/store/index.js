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

      teacher_info: {
        teacher_id: '01',
        teacher_name: 'name',
        teacher_password: null,
        teacher_telephone: null,

      },

      url_paths: {
        check_login: hostname + 'teacherLoginForWeb'
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
