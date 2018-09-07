<template style="height:100%">
<div id="app" style="height:100%">
  <el-container style="height:100%">
    <el-header height="69px">
      <img alt="FreekeerDevelopDocument" src="./assets/logofreekeer.png" class="logoimg">
        -文档
      </el-header>
      <el-container>
        <el-aside width="200px">
            <div id="mainLeft" class="noprint">
                <nav>
                  <div>
                    <h3 style="margin:6px 0">Links</h3>
                    <ul>
                      <li><a href="index.html">Docs Home</a></li>
                      <li><a href="https://wiki.apache.org/tomcat/FAQ">FAQ</a></li>
                      <li><a href="#comments_section">User Comments</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
      <el-footer height="39px">Copyright © 2018贵州自由客网络技术有限公司版权所有 黔ICP备16000950号</el-footer>

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
  data() {
    return {
      styleObject: {
        width: '20%',
        float: 'left',
        height: document.documentElement.clientHeight + 'px',
        background: 'red',
        overflowY: 'auto',

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

html {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}



.el-header {
  background-color: #F8F3E4;
  background: linear-gradient(to bottom, #ffffff -10%, #F8F3E4 100%);
  /* box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07); */
  opacity: 0.98;
  color: #999;
  font-size: 1rem;
  font-weight: 900;
  color: #333;
  text-align: left;
  line-height: 69px;

  border-bottom: 1px solid #bbb;
  box-shadow: 0 0 7px #aaa;
}

.logoimg {
  width: 160px;
  height: 33px;
  margin-top: 18px;
  margin-right:18px;
}

.el-aside {
  background-color: #F8F3E4;
  color: #333;
  text-align: left;
  border-bottom-right-radius: 1.8rem;
  margin-top: -1px;
  padding-left: 16px;
  padding-right: 14px;
  padding-top: 6px;
  padding-bottom: 15px;
  background-color: #F8F3E4;
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  border-bottom-right-radius: 20px;
  z-index: 999;
  border-top:1px solid #F8F3E4;
}
.el-aside  ul {
  font-size: 1px;

    padding: 0;
    margin: 0;
    list-style-type: none;
}
.el-aside  li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.el-aside  a{
    text-decoration: none
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 555px;
}

.el-footer {
  /* background-color:#eee ; */
  color: #333;
  text-align: center;
  line-height: 39px;
  font-size: .6rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ddd;
  height: 33px;
}
</style>
