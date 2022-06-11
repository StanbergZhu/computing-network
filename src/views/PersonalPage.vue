<template>
  <div>
    <div style="margin-bottom: 20px; height: 10px">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: 'main_page1' }" class="el-icon-s-home">首页</el-breadcrumb-item>
        <el-breadcrumb-item class="el-icon-s-custom"><a href="/">个人界面</a></el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: 'login'}" class="el-icon-switch-button" >退出账户</el-breadcrumb-item>
        <el-breadcrumb-item></el-breadcrumb-item>
      </el-breadcrumb>
    </div>




<!--这里是陈超负责-->







  </div>
</template>

<script>
export default {
  name: "PersonalPage"
}
</script>

<style scoped>

</style>