<template style="height:100%">
<div id="app" style="height:100%">
  <el-container style="height:100%">
    <el-header height="69px">
      <img alt="FreekeerDevelopDocument" src="./assets/logofreekeer.png" class="logoimg">
        (开发文档)
      </el-header>
      <el-container>
        <el-aside width="188px" style="z-index:99999;margin-top:-1px;">
            <div id="mainLeft" class="noprint">
                <nav>
                  <div>
                    <h4 style="margin:0">蜜蜂税服</h4>
                    <ul style="padding:6px 0 0 3px;">
                      <!-- <li><router-link to="/HelloWorld">Go to Foo</router-link></li>
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
                      <li><router-link to="/bar">Go to Bar</router-link></li> -->
                      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="background:#F8F3E4"></el-tree>
                      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="background:#F8F3E4"></el-tree>
                      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="background:#F8F3E4"></el-tree>
                      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="background:#F8F3E4"></el-tree>
                      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="background:#F8F3E4"></el-tree>
                      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="background:#F8F3E4"></el-tree>
                    </ul>
                  </div>

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
      data:[{
        label: '一级 1',
        url:'HelloWorld',
        children: [{
          label: '二级 1-1',
          url:'Bar',
          children: [{
            label: '三级 1-1-1',
            url:'HelloWorld'
          }]
        }]
      },
      // {
      //   label: '一级 2',
      //   children: [{
      //     label: '二级 2-1',
      //     children: [{
      //       label: '三级 2-1-1'
      //     }]
      //   }, {
      //     label: '二级 2-2',
      //     children: [{
      //       label: '三级 2-2-1'
      //     }]
      //   }]
      // },
      {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleNodeClick(data) {
        console.log(data.url);
        this.$router.push({
          name: data.url
        });

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
