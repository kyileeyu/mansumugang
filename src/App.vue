<template>
  <!-- <Intro v-if="showIntro == true"/> -->
  <router-view></router-view>
  <!-- <Main v-if="showIntro == false"/> -->
</template>

<script>

// import Intro from './components/Intro.vue';
// import Main from './components/Main.vue';

export default {
  name: 'App',
  data(){
    return {
      showIntro: true,

    }
  },
  components: {
    // Intro :Intro,
    // Main : Main,
  },
  methods:{

  },
  mounted(){
    setTimeout(() =>{
      this.showIntro = false;
    },2000);
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  font-family: 'Nanum Gothic', sans-serif;
/* max-width: 375px; */
  /* height: 100vh; */
}
h1,h2,h3{
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 375px;
  margin: 0 auto;
  background-color: #eee;
}
html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{ 
  
    max-width: 600px;
    height: 100vh;
    margin:0 auto;

}
p{
  margin:0;
}

</style>
