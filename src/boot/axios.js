import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

function checklogin (teacher_telephone, teacher_password, url) {
  console.log(teacher_telephone,teacher_password,url)
}
export {checklogin}
