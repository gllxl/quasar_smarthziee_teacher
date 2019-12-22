<template>
  <div class="q-pa-md">
    <q-card class="my-card-stu">
      <q-card-section>
        <div class="text-h6">题目列表</div>

      </q-card-section>

      <q-markup-table>
        <thead>
        <tr>
          <th class="text-left">题号</th>
          <th class="text-right">题目名称</th>
          <th class="text-right">题目答案</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for = "ques in questions">
          <td class="text-left">{{ques.questionId}}</td>
          <td class="text-right">{{ques.questionDetails}}</td>
          <td class="text-right">{{ques.questionAnswer}}</td>
        </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>

</template>

<script>
  import axios from 'axios'

  const Qs = require('qs')
  export default {
    name: 'QuesInfo',
    data (){
      return {
        questions:[]
      }
    },mounted () {
      this.getQuesinfo(this.$store.state.now_location.id);
    },methods : {
      getQuesinfo (exam_id) {
        let that = this
        axios.post(that.$store.state.url_paths.ques_info, Qs.stringify({
          exam_id: exam_id
        }))
          .then(function (response) {
            console.log(response);
            that.questions = response.data.questionInfo
            console.log(that.students)
          })
          .catch(function (error) {
            that.$q.notify({ message: '获取题目信息失败', position: 'top', color: 'danger' })
          })
      }
    }
  }
</script>
