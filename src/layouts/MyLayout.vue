<template>
  <q-layout view="lHh lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>{{this.$store.state.teacher_info.teacher_name}}</div>
      </q-toolbar>

      <q-tabs
        v-model="tab"
        inline-label
        align="left"
      >
        <q-tab v-for="(item,i) in this.$store.state.now_location.tab" :icon="item.icon"
               :name="$store.state.now_location.tab[i].name" :label="item.label" @click="TabA(item.label)"/>

      </q-tabs>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >

      <q-list bordered padding class="rounded-borders text-primary">
        <q-item
          clickable
          v-ripple
          :active="link === 'course'"
          @click="goCourse"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="inbox"/>
          </q-item-section>

          <q-item-section>课程管理</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'student'"
          @click="goStudent"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="send"/>
          </q-item-section>

          <q-item-section>学生管理</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'exam'"
          @click="goExam"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="delete"/>
          </q-item-section>

          <q-item-section>考试管理</q-item-section>
        </q-item>

        <q-separator spaced/>

        <q-item
          clickable
          v-ripple
          :active="link === 'settings'"
          @click="link = 'settings'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="settings"/>
          </q-item-section>

          <q-item-section>设置</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'help'"
          @click="link = 'help'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="help"/>
          </q-item-section>

          <q-item-section>帮助</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { checklogin } from '../boot/axios.js'
  import axios from 'axios'

  export default {
    name: 'MyLayout',
    data () {
      return {
        tab: this.$store.state.now_location.tab[0].name,
        link: 'course',
        leftDrawerOpen: true
      }
    }, methods: {
      getTab () {
        this.tab = this.$store.state.now_location.tab[0].name
      },
      goCourse () {
        this.link = 'course'
        this.$store.commit('updateTabs', 'index')
        console.log(this.$store.state.now_location)
        this.getTab()
        this.$router.push('/course_manage')
      },
      goStudent () {
        this.link = 'student'
      },
      goExam () {
        this.link = 'exam'
      },
      TabA (e) {
        if (e === '添加课程') {
          this.$router.push('/add_course')
        } else if (e === '考试管理') {
          this.$router.push('/exam_manage')
          this.getTab()
        } else if (e === '我的课程') {
          this.$router.push('/course_manage')
          this.getTab()
        }
      }
    }
  }
</script>
