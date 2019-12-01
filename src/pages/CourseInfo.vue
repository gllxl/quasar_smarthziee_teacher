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
    },mounted(){
      this.getCourseInfo();
    }, methods: {
      getCourseInfo () {
        this.data[0].info = this.$store.state.now_location.data.courseId
        this.data[1].info = this.$store.state.now_location.data.courseName
        this.data[2].info = this.$store.state.now_location.data.courseClass
        this.data[3].info = this.$store.state.now_location.data.courseTime
        this.data[4].info = this.$store.state.now_location.data.courseNumber
      }
    }
  }
</script>
