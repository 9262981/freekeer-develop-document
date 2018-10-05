<template>
  <div class="routerview">
    <h3>项目进度-Version_1.0.0</h3>
    <div style="height: 900px;">
      <el-steps direction="vertical" :active="7">
        <el-step title="LOGO确认" description="LOGO两版设计"></el-step>
        <el-step title="原型设计确认" description="首页/详情页/购物页/个人页/订单页面/"></el-step>
        <el-step title="产品首页" description="前台制作完成-后台制作完成"></el-step>
        <el-step title="产品详情页" description="前台制作完成-后台制作完成"></el-step>
        <el-step title="会员登录" description="前台制作完成-后台制作完成"></el-step>
        <el-step title="订单流程" description="前台制作完成-后台制作完成"></el-step>
        <el-step title="微信申请-支付接口申请" description="服务号支付接口申请/已完成/9/30"></el-step>

        <el-step title="支付接口开发配置" description="需要通过支付接口开发配置"></el-step>
        <el-step title="支付接口未调试" description="需要通过支付接口申请"></el-step>
        <el-step title="购物整套流程" description="购物整套流程前端制作未完成-购物整套流程后端制作未完成"></el-step>
        <el-step title="支付整套流程测试" description="多渠道-多人测试"></el-step>

      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleV100',

  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
