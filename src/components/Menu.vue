<template>
  <section class="menu">
  <!-- <span class="logo font-effect-neon">NA</span> -->
    <!-- <span class="icon-close_white" @click="showMenu = !showMenu"></span>
    <ul v-if="showMenu">
      <li><a href="">About</a></li>
      <li><a href="">Projects</a></li>
    </ul> -->

    <!-- <span class="icon-close_white" @click="hideMenu"></span> -->
    <ul ref="menus">
      <router-link to="/about" tag="li"><a @click="hideMenu">About</a></router-link>
      <router-link to="/project" tag="li"><a>Project</a></router-link>
    </ul>
    <!-- <ul>
      <li :el="index" ref="menus" v-for="(menu, index) in menus"><a href="">{{ menu }}</a></li>
    </ul> -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      //showMenu: true
      menus: {
        menu1: 'About',
        menu2: 'Projects'
      }
    }
  },
  methods: {
    hideMenu() {
      return this.className = this.classList + 'slideOut';
      //this.$refs.menus[index].classList.toggle('slideOut');
      //const menus = this.$el.querySelectorAll('li');
      //const close = document.querySelector('.icon-close_white');
        // for(var i = 0; i < menus.length; i++){
        //   menus[i].className = menus[i].classList + 'slideOut';
        // }
      // setTimeout(function(){ 
      // //const menus = this.$el.querySelectorAll('li');
      // //const close = document.querySelector('.icon-close_white');
      //  //  for(var i = 0; i < menus.length; i++){
      //  //    menus[i].className = menus[i].classList + 'slideOut';
      //  //  }
      //   window.location.href = this.href;
      // }, 3000);
      
      //close.classList.toggle('hidden');
    }
  }
}
</script>
