<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="课程名称"
        lazy-rules
        :rules="[ val => val && val.length > 0 || '请输入课程名称']"
      />

      <q-input
        filled
        v-model="classroom"
        label="上课教室"
        lazy-rules
        :rules="[ val => val && val.length > 0 || '请输入上课教室']"
      />

      <q-input
        filled
        v-model="classtime"
        label="上课时间"
        lazy-rules
        :rules="[ val => val && val.length > 0 || '请输入上课时间']"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
      </div>
    </q-form>

  </div>
</template>


<script>
  import axios from 'axios'

  const Qs = require('qs')
  export default {
    name: 'AddCourse',
    data () {
      return {
        name: null,
        classroom: null,
        classtime: null
      }
    },

    methods: {
      onSubmit () {
        let that = this
        axios.post(that.$store.state.url_paths.add_course, Qs.stringify({
          course_name: that.name,
          course_class: that.classroom,
          course_time: that.classtime,
          teacher_telephone: that.$store.state.teacher_info.teacher_telephone
        }))
          .then(function (response) {
            if (response.data === true) {
              that.$q.notify({ message: '添加课程成功', position: 'top' })
              that.$router.push('/course_manage')
            } else if (response.data === false) {
              that.$q.notify({ message: '添加课程失败', position: 'top', color: 'danger' })
            }
          })
          .catch(function (error) {
            that.$q.notify({ message: '添加课程失败', position: 'top', color: 'danger' })
          })
      },

      onReset () {
        this.name = null
        this.classroom = null
        this.classtime = null
      }
    }
  }
</script>

