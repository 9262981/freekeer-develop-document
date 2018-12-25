<template>
  <div class="routerview">
      <h3>做订单查询不到注册用户</h3>
      <p>原因:由于某些用户注册完以后没有完善信息,导致在A端管理后台中 简历管理中查询不到该用户账户;</p>
      <p>解决方法:</p>
      <p><img src='../../assets/apanel/notfind1.png' width="65%" preview="1" preview-text=""></p>

      <p> 1.先将该用户踢到简历管理中;<br>未完善简历->查询->找到->建简历;</p>

      <p><img src='../../assets/apanel/notfind2.png' width="95%" preview="1" preview-text=""></p>
      <p><img src='../../assets/apanel/notfind3.png' width="35%" preview="1" preview-text=""></p>
      <p>2.简历建完以后,在简历管理中即可查询到该用户; </p>
      <p><img src='../../assets/apanel/notfind4.png' width="95%" preview="1" preview-text=""></p>
      <p><img src='../../assets/apanel/notfind5.png' width="95%" preview="1" preview-text=""></p>


  </div>
</template>

<script>
export default {
  name: 'PersonNotFind',
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
