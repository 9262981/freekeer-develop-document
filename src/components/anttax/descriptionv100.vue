<template>
  <div class="routerview">
    <h3>蚂蚁税服一期-微信公众号</h3>
    <p class="h4">立项目的</p>
    蚂蚁税服公众号平台,以简洁友好的公众号形式推出,为了更好的的实现精准营销,数据分析以及快速的品牌传播.<br><br>
    1:精准营销<br>
    微信公众平台可以给关注者推送文字、语音、视频、图片、以及多图文消息，推送的内容可以是重要通知、趣味互动或产品营销等。我们总是转发到朋友圈的文章就是多图文消息。当消息推送出去时，每位关注的用户能收到，这便是微信最大的好处，直指用户，精准营销。<br><br>
    2:数据分析<br>
    微信公众号后台可以对用户数据进行分析。如用户增减数据，用户性别、语言、省份、地理位置、使用的移动终端设备机型等。图文消息的到达率、阅读率、转发收藏率以及消息分析和接口分析等。通过这些数据分析可以更精准营销。<br><br>
    3:品牌传播<br>
    微信公众平台服务用户，可以更好的引导用户了解企业文化，参与品牌的互动活动，扩散信息曝光率。最重要的是大幅度的降低了企业组织的营销成本。同时可以更好的帮助企业实体店实现O2O。<br><br>
    <p class="h4">系统主要功能及实现</p>
      <h5>企宣模块</h5>
      (1)企业宣传页面展示;<br>
      (2)适用产品场景介绍;<br>
      (3)主推产品展示介绍;<br>
      (4)产品网上支付流程;<br>
      (5)产品公众号分享;<br>
      <h5>会员模块</h5>
      (1)会员注册<br>
      (4)会员登录;<br>
      (4)会员微信支付;<br>
      (4)会员后期saas;(后期开发计划)<br>
      (4)产品网上支付流程;<br>
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
  name: 'DescriptionV100',

  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
