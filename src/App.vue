<template>
  <div id="app">
    <router-link to="/" tag="span" class="logo font-effect-neon"><a>NA</a></router-link>
    <!-- <main-menu></main-menu> -->
    <!-- <about :abouts="about"></about> -->
    <!-- <project></project> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import About from './components/About.vue';
import Project from './components/Project.vue';

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    mainMenu: Menu,
    about: About,
    project: Project
  }
}
</script>
