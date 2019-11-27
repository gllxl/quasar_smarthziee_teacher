<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>{{this.$store.state.teacher_info.teacher_name}}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>课程管理</q-item-label>
        <q-item clickable tag="a" target="_blank" @click="course_manage">
          <q-item-section avatar>
            <q-icon name="school"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { checklogin } from '../boot/axios.js'
  import axios from 'axios'

  export default {
    name: 'MyLayout',

    data () {
      return {
        leftDrawerOpen: false
      }
    }, methods: {
      course_manage () {
        let that = this
        axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'  //此处是增加的代码，设置请求头的类型
        return axios.post(that.$store.state.url_paths.check_login, {
          teacherTelephone: 'teacher_telephone',
          teacherPassword: 'teacher_password'
        })
          .then(function (response) {
            console.log(response.data)
            if (response.data === false) {
              that.$router.push('/course_manage')
            }
          })
          .catch(function (error) {
            return error.data
          })

      }
    }
  }
</script>
