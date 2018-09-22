<template style="height:100%">
<div id="app" style="height:100%">
  <el-container style="height:100%">
    <el-header height="69px">
      <img alt="FreekeerDevelopDocument-自由职客开发文档" src="./assets/logofreekeer.png" class="logoimg">
    </el-header>
    <el-container>
      <el-aside width="288px" style="z-index:99999;margin-top:-1px;">
        <div id="mainLeft" class="noprint">
          <nav>
            <div>
              <h4 style="margin:0">蚂蚁税服</h4>
              <ul style="padding:3px 0 0 -5px;">
                <el-tree :data="anttax" :props="defaultProps" @node-click="handleNodeClick" style="background:#F8F3E4"></el-tree>
              </ul>
              <h4 style="margin:5px 0">管理A端操作:</h4>
              <ul style="padding:3px 0 0 -5px;">
                <el-tree :data="Apanel" :props="defaultProps" @node-click="handleNodeClick" style="background:#F8F3E4"></el-tree>
              </ul>
              <h4 style="margin:5px 0">附件:</h4>
              <ul style="padding:3px 0 0 -5px;">
                <el-tree :data="Appendix" :props="defaultProps" @node-click="handleNodeClick" style="background:#F8F3E4"></el-tree>
              </ul>
            </div>
          </nav>
        </div>
      </el-aside>
      <el-container>
        <router-view style="padding:28px 66px;"></router-view>
      </el-container>
    </el-container>
    <el-footer height="39px" style="background:rgba(255,255,255,0.8)">Copyright © 2018贵州自由客网络技术有限公司版权所有 黔ICP备16000950号</el-footer>

  </el-container>

</div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      ////////蚂蚁税服////////////
      anttax: [{
          label: '项目简介',
          urlName: 'Introduction'
        }, {
          label: '流程结构',
          urlName: 'FlowStructure'
        }, {
          label: 'UI设计',
          urlName: 'UI',
          children: [{
            label: 'Logo',
            urlName: 'Logo'
          }]
        },
        {
          label: '项目进度',
          urlName: 'Schedule',
        },
        // {
        //   label: '一级 3',
        //   children: [{
        //     label: '二级 3-1',
        //     children: [{
        //       label: '三级 3-1-1'
        //     }]
        //   }, {
        //     label: '二级 3-2',
        //     children: [{
        //       label: '三级 3-2-1'
        //     }]
        //   }]
        // }
      ],
      ////////A端管理////////////
      Apanel: [{
        label: 'SEO官网文章发布注意事项',
        urlName: 'NewsPublish'
      }, ],


      ////////附录////////////
      Appendix: [{
        label: '2018企业架构图',
        urlName: 'OrganizationChart'
      }, {
        label: '2018管理制度',
        urlName: 'RegulatoryRegime'
      }, {
        label: '2018员工通讯录',
        urlName: 'AddressList'
      }, {
        label: '2018公司费用报销管理制度',
        urlName: 'ApplyForReimbursement'
      }, ],

      //
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
      this.$router.push({
        name: data.urlName
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
  /* text-align: center; */
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
  margin-right: 18px;
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
  border-top: 1px solid #F8F3E4;
}

#mainLeft ul {
  font-size: 1px;

  padding: 0;
  margin: 0;
  list-style-type: none;
}

#mainLeft li {
  display: list-item;
  text-align: -webkit-match-parent;
}

#mainLeft a {
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
.el-container .routerview{
  width:100%;
}
.el-container h3 {
  width: 100%;
  display: block;
  font-size: 1.17em;
  line-height: 2em;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #eaeaea;
}
</style>
