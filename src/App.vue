<template>
  <!-- <Intro v-if="showIntro == true"/> -->
  <router-view></router-view>
  <!-- <Main v-if="showIntro == false"/> -->
</template>

<script>

// import Intro from './components/Intro.vue';

export default {
  name: 'App',
  data(){
    return {
      // showIntro: true,

    }
  },
  components: {
    // Intro :Intro,
    // Main : Main,
  },
  methods:{

  },
  mounted(){
    // setTimeout(() =>{
    //   this.showIntro = false;
    // },2000);
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  font-family: 'Noto Sans KR','Nanum Gothic', sans-serif;
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
  height :100%;
  margin: 0 auto;
  background-color: #eee;
  /* background-image: url('./assets/eee.png'); */
  background-size: 375px, 100vh;
  /* background-attachment: fixed; */
}
html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{ 
  
    max-width: 600px;
    /* height: 100vh; */
    margin:0 auto;

}
p{
  margin:0;
}

</style>
