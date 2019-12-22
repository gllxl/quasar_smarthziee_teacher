<template>
  <q-page padding>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card v-for="(item,i) in this.$store.state.exams" :id="item.examId" class="my-card"
              @click="exam_info(item.examId)">
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
        this.$emit('getMessage', "传给父组件的值");
        let that = this
        axios.post(that.$store.state.url_paths.exam_info, Qs.stringify({
          exam_id: exam_id
        }))
          .then(function (response) {
            console.log(response);
            that.$store.commit('updateTabs', 'exam_info')
            that.$store.commit('updateNowExamLocation', exam_id)
            that.$store.commit('updateData', response.data.ExamDetails);
            that.$router.push('/exam_info')
          })
          .catch(function (error) {
            that.$q.notify({ message: '获取考试信息失败', position: 'top', color: 'danger' })
          })
        this.$store.commit('updateTabs', 'exam_manage')
      }
    }
  }
</script>
