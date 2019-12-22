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
            name: '考试名称',
            info: 'html',
          }, {
            name: '考试详情',
            info: 'html',
          }, {
            name: '监考老师',
            info: 'html',
          },
          {
            name: '考试开始时间',
            info: 'html',
          },
          {
            name: '考试结束时间',
            info: 'html',
          },
        ]
      }
    }, mounted () {
      this.$emit('getMessage', "传给父组件的值");
      this.getExamInfo()
    }, methods: {
      getExamInfo () {
        this.data[0].info = this.$store.state.now_location.data.examName
        this.data[1].info = this.$store.state.now_location.data.examDetails
        this.data[2].info = this.$store.state.now_location.data.examPublisher
        this.data[3].info = this.$store.state.now_location.data.examTimeBegin
        this.data[4].info = this.$store.state.now_location.data.examTimeEnd
      },
    }
  }
</script>
