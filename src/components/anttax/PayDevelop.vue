<template>
<div class="routerview">
  <h3>微信支付-参考文档</h3>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="微信支付开发文档" name="first">
      <br>
      <a href="https://pay.weixin.qq.com/wiki/doc/api/index.html" target="_blank">微信支付接口文档导航页</a>
      <br><br>
      <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=20_1" target="_blank">签名算法/随机数算法/API证书/回调API</a><br>
      <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=20_1" target="_blank">微信支付接口签名校验工具</a>
      <br><br>
      <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1" target="_blank">API列表--->统一下单</a>
      <br><br>
      <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=23_1" target="_blank">支付验收指引</a>
      <br><br>
      <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=10_4" target="_blank">HTTPS服务器配置</a><br>
      <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=11_1" target="_blank">JAVA/PHP/.NET:DEMO</a><br>
    </el-tab-pane>

    <el-tab-pane label="腾讯客服" name="second">
      <a href="http://kf.qq.com/product/wechatpaymentmerchant.html#hid=2804" target="_blank">腾讯客服</a><br>
    </el-tab-pane>

    <el-tab-pane label="公众平台" name="third">
      <a href="https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1445241432" target="_blank">公众平台首页</a><br>
      <a href="https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115" target="_blank">微信JS-SDK说明文档</a><br>

    </el-tab-pane>

    <el-tab-pane label="第三方" name="fouth">
      <a href="https://blog.csdn.net/paymm/article/details/78184317" target="_blank">微信公众号支付开发-JAVA版DEMO</a><br>
      <a href="https://blog.csdn.net/programerxiaoer/article/details/78154902" target="_blank">微信公众号支付开发流程与避坑手册-Java篇</a><br>

    </el-tab-pane>

  </el-tabs>

</div>
</template>

<script>
export default {
  name: 'PayDevelop',

  data() {
    return {
      activeName: 'first'
    };
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .routerview a{
    text-decoration: none;
    color:#409EFF;
    line-height: 1.8rem;
  }
</style>
