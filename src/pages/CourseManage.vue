<template>
  <q-page padding>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card v-for="(item,i) in course" :id="item.courseId" class="my-card" @click="course_info(item.courseId)">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          basic
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            {{item.courseName}}
          </div>
        </q-img>
      </q-card>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'CourseManage',
    data () {
      let state = this.$store.state || {}
      return {
        course: state.courses
      }
    }, methods: {
      course_info (courseId) {
        console.log(courseId)
      }
    }
  }
</script>
