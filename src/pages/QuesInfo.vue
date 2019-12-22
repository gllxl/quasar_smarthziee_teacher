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
        <tr v-for="(value,name,index) in questions">
          <td class="text-left">{{value.questionId}}</td>
          <td class="text-right">{{value.questionDetails}}</td>
          <td class="text-right">{{value.questionAnswer}}</td>
        </tr>
        </tbody>
      </q-markup-table>
    </q-card>
    <div style="padding-top:50px">

    </div>
    <q-card  class="my-card-stu">
      <q-card-section>
        <div class="text-h6">添加题目</div>
      </q-card-section>

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-pa-md"
      >
        <q-input
          filled
          v-model="title"
          label="考试题目"
          lazy-rules
          :rules="[ val => val && val.length > 0 || '请输入考试题目']"
        />

        <q-input
          filled
          v-model="ans"
          label="题目答案"
          lazy-rules
          :rules="[ val => val && val.length > 0 || '请输入题目答案']"
        />

        <div>
          <q-btn label="提交" type="submit" color="primary"/>
          <q-btn label="重置" type="reset" color="primary" flat class="q-ml-sm"/>
        </div>
      </q-form>
    </q-card>
  </div>

</template>

<script>
  import axios from 'axios'

  const Qs = require('qs')
  export default {
    name: 'QuesInfo',
    inject: ['reload'],
    data () {
      return {
        title: null,
        ans: null,
        questions: [],
        isRouterAlive: true
      }
    }, mounted () {
      this.getQuesinfo(this.$store.state.now_location.id)
    }, methods: {
      getQuesinfo (exam_id) {
        let that = this
        axios.post(that.$store.state.url_paths.ques_info, Qs.stringify({
          exam_id: exam_id
        }))
          .then(function (response) {
            console.log(response)
            that.questions = response.data.questionInfo
            console.log(that.students)
          })
          .catch(function (error) {
            that.$q.notify({ message: '获取题目信息失败', position: 'top', color: 'danger' })
          })
      },
      onSubmit () {

        let that = this
        axios.post(that.$store.state.url_paths.add_ques, Qs.stringify({
          question_details: that.title,
          question_answer: that.ans,
          question_parent_exam: that.$store.state.now_location.id
        }))
          .then(function (response) {
            if (response.data !== 0) {
              that.$q.notify({ message: '添加题目成功', position: 'top' })
              that.reload();
            } else if (response.data === 0) {
              that.$q.notify({ message: '添加题目失败', position: 'top', color: 'danger' })
            }
          })
          .catch(function (error) {
            that.$q.notify({ message: '添加课程失败', position: 'top', color: 'danger' })
          })
      },
      onReset () {
        this.title = null
        this.ans = null
      }
    }
  }
</script>
