<template>
  <q-page padding>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card  class="my-card" v-for="(item,i) in this.$store.state.courses" @click="course_info(item.courseId)">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          basic
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            {{item.courseName}}
          </div>
        </q-img>
      </q-card>
    </div>
  </q-page>
</template>

<script>
  import axios from 'axios'

  const Qs = require('qs')

  export default {
    name: 'CourseManage',

    data () {
      return {}
    }, methods: {
      course_info (course_id) {
        let that = this
        axios.post(that.$store.state.url_paths.course_info, Qs.stringify({
          course_id: course_id
        }))
          .then(function (response) {
            that.$store.commit('updateTabs', 'course_info')
            that.$store.commit('updateNowCourseLocation', course_id)
            that.$store.commit('updateData', response.data.courseDetails)
            that.$router.push('/course_info')
          })
          .catch(function (error) {
            that.$q.notify({ message: '获取课程信息失败', position: 'top', color: 'danger' })
          })
      }
    }
  }
</script>
