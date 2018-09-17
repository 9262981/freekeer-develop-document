<template style="height:100%">
<div id="app" style="height:100%">
  <el-container style="height:100%">
    <el-header height="69px">
      <img alt="FreekeerDevelopDocument" src="./assets/logofreekeer.png" class="logoimg">
        (开发文档)
      </el-header>
      <el-container>
        <el-aside width="290px" style="z-index:99999;margin-top:-1px;">
            <div id="mainLeft" class="noprint">
                <nav>
                  <div>
                    <h3 style="margin:0">蜜蜂税服</h3>
                    <ul>
                      <li><router-link to="/HelloWorld">Go to Foo</router-link></li>
                      <li><router-link to="/bar">Go to Bar</router-link></li>
                      <li><router-link to="/HelloWorld">Go to Foo</router-link></li>
                      <li><router-link to="/bar">Go to Bar</router-link></li>
                      <li><router-link to="/HelloWorld">Go to Foo</router-link></li>
                      <li><router-link to="/bar">Go to Bar</router-link></li>
                      <li><router-link to="/HelloWorld">Go to Foo</router-link></li>
                      <li><router-link to="/bar">Go to Bar</router-link></li>
                      <li><router-link to="/HelloWorld">Go to Foo</router-link></li>
                      <li><router-link to="/bar">Go to Bar</router-link></li>
                      <li><router-link to="/HelloWorld">Go to Foo</router-link></li>
                      <li><router-link to="/bar">Go to Bar</router-link></li>
                    </ul>
                  </div>
                  <el-row class="tac">
                    <el-col>
                      <h5>自定义颜色</h5>
                      <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#F8F3E4"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-submenu index="1">
                          <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                          </template>
                          <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                          </el-menu-item-group>
                          <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                          </el-menu-item-group>
                          <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                          </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                          <i class="el-icon-menu"></i>
                          <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                          <i class="el-icon-document"></i>
                          <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                          <i class="el-icon-setting"></i>
                          <span slot="title">导航四</span>
                        </el-menu-item>
                      </el-menu>
                    </el-col>
                  </el-row>
                </nav>
              </div>
        </el-aside>
        <el-container>
          <!-- <el-main><HelloWorld /></el-main> -->
          <router-view style="padding:33px;"></router-view>
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
import Vue from 'vue'

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
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
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

#mainLeft {
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
  z-index: 99999;
  border-top:1px solid #F8F3E4;
}
#mainLeft  ul {
  font-size: 1px;

    padding: 0;
    margin: 0;
    list-style-type: none;
}
#mainLeft  li {
    display: list-item;
    text-align: -webkit-match-parent;
}
#mainLeft  a{
    text-decoration: none
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 0;
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
