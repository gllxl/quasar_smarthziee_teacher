<template>
  <q-page padding class="flex content-center justify-center">

    <div style="width: 300px; max-width: 120vw;">
      <div class="text-center text-h4">教师管理系统</div>
      <q-input style="padding-top: 40px" outlined v-model="telephone" label="手机号"/>
      <q-input style="margin-top: 30px" outlined v-model="password" type="password" label="密码"/>
      <q-btn style="margin-top: 30px" color="primary" class="full-width" label="登录" @click="login"/>
    </div>
  </q-page>
</template>

<script>
  import axios from 'axios'

  const Qs = require('qs')
  export default {
    name: 'Login',
    data () {
      return {
        telephone: '',
        password: ''
      }
    }, methods: {
      login: function (e) {
        let that = this
        axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
        axios.post(that.$store.state.url_paths.check_login, Qs.stringify({
          teacherTelephone: that.telephone,
          teacherPassword: that.password
        }))
          .then(function (response) {
            if (response.data === true) {
              axios.post(that.$store.state.url_paths.get_course, Qs.stringify({
                telephone: that.telephone,
              }))
                .then(function (response) {
                  that.$store.commit('updateTeacherName', response.data.teacher)
                  that.$store.commit('updateCourse', response.data.course)
                  that.$router.push('/course_manage')
                })
                .catch(function (error) {
                  console.log(error)
                })
            } else {
              console.log(response.data)
              that.$q.notify({ message: '登录失败', position: 'top', color: 'danger' })
            }
          })
          .catch(function (error) {
            that.$q.notify({ message: '登录失败', position: 'top', color: 'danger' })
          })
      }
    }
  }
</script>
