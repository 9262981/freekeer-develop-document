<template>
  <div class="hello">
  Logo
    <img :src="img">
    <img src='../../assets/anttax/anttaxlogo.001.jpeg' width="100%">
    <img src='../../assets/anttax/anttaxlogo.002.jpeg' width="100%">
    <img src='../../assets/anttax/anttaxlogo.003.jpeg' width="100%">
    <img src='../../assets/anttax/anttaxlogo.004.jpeg' width="100%">
    <img src='../../assets/anttax/anttaxlogo.005.jpeg' width="100%">
    <img src='../../assets/anttax/anttaxlogo.006.jpeg' width="100%">
    <img src='../../assets/anttax/anttaxlogo.007.jpeg' width="100%">
    <img src='../../assets/anttax/anttaxlogo.008.jpeg' width="100%">
  </div>
</template>

<script>
import Logo from '../../assets/logo.png';
export default {
  name: 'UI',

  data() {
    return {
      img:Logo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
