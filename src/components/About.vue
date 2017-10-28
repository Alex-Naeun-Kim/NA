<template>
  <section class="about">
  	<ul>
  		<li v-for = "about in abouts">{{ about }}</li>
  	</ul>
  	<router-link to="/cv" tag="button"><a>Download CV</a></router-link>
  </section>
</template>

<script>
export default {
	//props: ['abouts'],
  data () {
    return {
      abouts: [
        'Naeun Kim',
        'Markup developer',
        'HTML, CSS, jQuery, Bootstrap, SASS, Vue.js, Sketch and Git',
        'soo.kim.off@gmail.com'
      ]
    }
  }
}
</script>