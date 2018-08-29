<template>
  <div id="app" >
    <div v-bind:style="styleObject">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
    </div>

    <HelloWorld style="width:80%;float:right" msg="Welcome to Your Vue.js App1"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
      return {
          styleObject: {
            width: '20%',
            float: 'left',
            height:document.documentElement.clientHeight+'px',
            background:'red',
            overflowY:'auto',

          }
      }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html{
  margin:0;
  padding:0;
}
body{
  margin:0;
  padding:0;
}
</style>
