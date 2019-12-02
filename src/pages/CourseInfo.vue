<template>
  <q-page padding>
    <q-table
      class="my-sticky-column-table"
      title="课程信息"
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </q-page>
</template>

<script>
  import axios from 'axios'

  const Qs = require('qs')
  export default {
    name: 'CourseInfo',
    data () {
      return {
        columns: [
          {
            name: 'property',
            required: true,
            label: '属性',
            align: 'left',
            field: row => row.name,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'info',
            align: 'center',
            label: '信息',
            field: 'info',
            sortable: true
          }
        ],

        data: [
          {
            name: '课程代码',
            info: 'html',
          }, {
            name: '课程名称',
            info: 'html',
          }, {
            name: '上课教室',
            info: 'html',
          },
          {
            name: '上课时间',
            info: 'html',
          },
          {
            name: '学生人数',
            info: 'html',
          },
        ]
      }
    }, mounted () {
      this.getCourseInfo()
      this.getExams()
    }, methods: {
      getCourseInfo () {
        this.data[0].info = this.$store.state.now_location.data.courseId
        this.data[1].info = this.$store.state.now_location.data.courseName
        this.data[2].info = this.$store.state.now_location.data.courseClass
        this.data[3].info = this.$store.state.now_location.data.courseTime
        this.data[4].info = this.$store.state.now_location.data.courseNumber
      },
      getExams () {
        let that = this
        axios.post(that.$store.state.url_paths.get_exam, Qs.stringify({
          course_id: that.$store.state.now_location.data.courseId
        }))
          .then(function (response) {
            that.$store.commit('updateExam', response.data.ExamInfo)
          })
          .catch(function (error) {
            that.$q.notify({ message: '获取课程信息失败', position: 'top', color: 'danger' })
          })
      }
    }
  }
</script>
