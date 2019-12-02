import Vue from 'vue'
import axios from 'axios'
const Qs = require('qs')
Vue.prototype.$axios = axios

function checklogin (teacher_telephone, teacher_password, url) {
  console.log(teacher_telephone,teacher_password,url)
}
export {checklogin}
