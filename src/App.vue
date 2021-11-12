<template>
  <Intro/>
</template>

<script>

import Intro from './components/Intro.vue'

export default {
  name: 'App',
  components: {
    Intro,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html{
  margin: 0;
  padding: 0;
}
body{ 
  background-image: url('assets/background.png');
  background-repeat : no-repeat;
  background-size : cover;
  height: 100vh;
}

</style>
