<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="exam_name"
        label="考试名称"
        lazy-rules
        :rules="[ val => val && val.length > 0 || '请输入考试名称']"
      />
      <q-input
        filled
        v-model="exam_publisher"
        label="监考老师"
        lazy-rules
        :rules="[ val => val && val.length > 0 || '请输入监考老师']"
      />
      <div class="q-pb-sm q-gutter-sm">
        <q-input filled v-model="exam_time_begin">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="exam_time_begin" mask="YYYY-MM-DD HH:mm" />
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="exam_time_begin" mask="YYYY-MM-DD HH:mm" format24h />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input filled v-model="exam_time_end">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="exam_time_end" mask="YYYY-MM-DD HH:mm" />
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="exam_time_end" mask="YYYY-MM-DD HH:mm" format24h />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>


      <div>
        <q-btn label="提交" type="submit" color="primary"/>
        <q-btn label="重置" type="reset" color="primary" flat class="q-ml-sm"/>
      </div>
    </q-form>

  </div>
</template>


<script>
  import axios from 'axios'

  const Qs = require('qs')
  export default {
    name: 'AddExam',
    data () {
      return {
        exam_name: null,
        exam_time_begin: '2019-12-22 21:02',
        exam_time_end: '2019-12-22 21:02',
        exam_publisher: null,

      }
    },

    methods: {
      onSubmit () {

        let that = this
        axios.post(that.$store.state.url_paths.add_exam, Qs.stringify({
          exam_name: that.exam_name,
          exam_time_begin: that.exam_time_begin,
          exam_time_end: that.exam_time_end,
          exam_publisher: that.exam_publisher,
          exma_parent_course: that.$store.state.now_location.id
        }))
          .then(function (response) {
            if (response.data !== 0) {
              that.$q.notify({ message: '添加考试成功', position: 'top' })
              that.reload()
            } else if (response.data === 0) {
              that.$q.notify({ message: '添加考试失败', position: 'top', color: 'danger' })
            }
          })
          .catch(function (error) {
            that.$q.notify({ message: '添加课程失败', position: 'top', color: 'danger' })
          })
      },

      onReset () {
        this.exam_name = null
        this.exam_publisher = null
        this.exma_parent_course = null
      }
    }
  }
</script>

