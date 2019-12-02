<template>
  <q-page padding>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card v-for="(item,i) in this.$store.state.exams" :id="item.examId" class="my-card"
              @click="course_info(item.courseId)">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          basic
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            {{item.examName}}
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
      exam_info (exam_id) {
        this.$store.commit('updateTabs', 'exam_manage')
      }
    }
  }
</script>
