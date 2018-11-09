<template>
  <div class="routerview">
    <h3>蚂蚁税服-C端开票业务梳理</h3>
    <p class="h4">立项目的</p>
    实现付费用户,每月申请发票,查看往期发票等线上SAAS功能.<br><br>
    未来C端客户增加,针对贵州方面的会计以及出纳业务会产生大量的报税相关的业务现金流,仅仅通过手动记账方式,将会占用很多的人力成本. <br>
    <br>
    为了解决该问题,针对C端付费用户设计一套申请发票,以及查看发票等业务流程.<br>
    <br>
    对应A端,实现财务可查C端用户开取发票,往期开取发票等业务.<br>
    <p class="h4">系统主要功能及实现</p>
      <h5>C端模块</h5>
      (1)付费展示发票申请页面;<br><br>
      (2)按月份(或季度/业务流程确定再进行修整)申请发票金额;<br><br>
      (3)根据发票金额算取应缴纳税点金额;<br><br>
      (4)根据税点金额形成支付链接-->付款-->付款成功-->列表查看;<br><br>
      (5)列表展示往期申请发票订单列表;<br><br>
      (6)发票申请状态为申请中:对应A端模块(2,3),由出纳会计人员.登录A端进行审核查账操作.<br>
      <h5>A端模块</h5>
      (1)发票申请用户列表:展示所有申请发票用户列表<br><br>
      (2)列表中应清晰展示:<br>&nbsp;&nbsp;&nbsp;&nbsp;用户申请发票的月份(或季度)<br>&nbsp;&nbsp;&nbsp;&nbsp;发票申请用户<br>&nbsp;&nbsp;&nbsp;&nbsp;发票申请金额<br>&nbsp;&nbsp;&nbsp;&nbsp;对应金额税点钱(发票申请金额>3万 收取5.3%的税点钱 ***计算税点钱是否包含3万,待定***)<br>&nbsp;&nbsp;&nbsp;&nbsp;对应的支付订单号码;<br><br>
      (3)根据订单号码在微信支付平台中查看审核税点钱是否已经到账;<br><br>
      (4)税点金额到账,列表中有清晰的流程去标注该用户报账进度(未付款-已付款-申请开票-已开发票-->发票邮寄-->选择快递公司-->录入快递单号)<br><br>
      (4)该快递单号展示到客户后台中.<br><br>
  <p class="h4">项目流程图</p>
    <img src='../../assets/anttax/flowstructrue.jpg' width="100%" preview="1" preview-text="产品流程图">

     
  
    <p class="h4">项目进度-Version_1.0.0</p>
    <div style="height: 900px;">
      <el-steps direction="vertical" :active="12">
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
        <el-step title="一期工作完成" description="一期工作完成"></el-step>

      </el-steps>
    </div>

    <p class="h4">项目演示</p>

     <img src='../../assets/anttax/v1/2.png' width="45%" preview="1" style="margin:2%;border:1px solid blue" preview-text="项目首页">
      <img src='../../assets/anttax/v1/3.png' width="45%" preview="1" style="margin:2%;border:1px solid blue" preview-text="节税场景介绍">
      <img src='../../assets/anttax/v1/4.png' width="45%" preview="1" style="margin:2%;border:1px solid blue" preview-text="公众号分享">
      <img src='../../assets/anttax/v1/9.png' width="45%" preview="1" style="margin:2%;border:1px solid blue" preview-text="公众号分享">

      <img src='../../assets/anttax/v1/5.png' width="45%" preview="1" style="margin:2%;border:1px solid blue" preview-text="节税产品介绍">
      <img src='../../assets/anttax/v1/6.png' width="45%" preview="1" style="margin:2%;border:1px solid blue" preview-text="节税产品介绍">
      <img src='../../assets/anttax/v1/7.png' width="45%" preview="1" style="margin:2%;border:1px solid blue" preview-text="企业背景介绍">
      <img src='../../assets/anttax/v1/8.png' width="45%" preview="1" style="margin:2%;border:1px solid blue" preview-text="产品购买订单">
      <img src='../../assets/anttax/v1/10.png' width="45%" preview="1" style="margin:2%;border:1px solid blue" preview-text="产品支付流程">
  </div>
</template>

<script>
export default {
  name: "DescriptionVC",

  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
