<template>
  <div id="app" >
    <el-container>
      <el-header style="color:#303133;font-size:21px;font-weight:900;"><img alt="FreekeerDevelopDocument" src="./assets/logofreekeer.png" style="width:180px;height:39px;margin-top:10px">-Develop-Document</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
    <!-- <div v-bind:style="styleObject">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
      <img alt="Vue logo" style="" src="./assets/logo.png">
    </div>

    <HelloWorld style="width:80%;float:right" msg="Welcome to Your Vue.js App1"/> -->
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
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
.el-header{
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
}
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
