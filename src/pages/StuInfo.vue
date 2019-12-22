<template>
    <div class="q-pa-md">
      <q-card class="my-card-stu">
        <q-card-section>
          <div class="text-h6">学生列表</div>

        </q-card-section>

        <q-markup-table>
          <thead>
          <tr>
            <th class="text-left">学生姓名</th>
            <th class="text-right">学生手机</th>
            <th class="text-right">学生地址</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for = "stu in students">
            <td class="text-left">{{stu.userName}}</td>
            <td class="text-right">{{stu.userTelephone}}</td>
            <td class="text-right">{{stu.userAddress}}</td>
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
   name: 'StuInfo',
  data (){
     return {
       students:[]
     }
  },mounted () {
     this.getUserinfo(this.$store.state.now_location.id);
  },methods : {
     getUserinfo (course_id) {
       let that = this
       axios.post(that.$store.state.url_paths.stu_info, Qs.stringify({
         course_id: course_id
       }))
         .then(function (response) {
           console.log(response);
           that.students = response.data.userInfo
           console.log(that.students)
         })
         .catch(function (error) {
           that.$q.notify({ message: '获取学生信息失败', position: 'top', color: 'danger' })
         })
     }
  }
}
</script>
