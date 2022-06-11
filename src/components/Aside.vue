<template>
  <el-menu :default-openeds="['1', '3']" style="min-height: 100%; overflow-x: hidden"
           background-color="rgb(48,65,86)"
           text-color="#fff"
           active-text-color="#ffd04b"
           :collapse-transition="false"
           :collapse="isCollapse"
           router
  >
    <div style="height: 60px; line-height: 60px; text-align: center">
      <img src="../assets/nju.png" alt="" style="width: 20px; position: relative; top: 5px; margin-right: 6px">
      <b style="color: white" v-show="logoTextShow">南大食堂餐品</b>
    </div>

    <el-submenu index="1" style="width: 150px">
      <template slot="title">
        <i class="el-icon-school"></i>
        <span slot="title">鼓楼校区</span>
      </template>

      <el-menu-item index="/main_page1" style="padding-left: 50px" >一食堂</el-menu-item>
      <el-menu-item index="/main_page2" style="padding-left: 50px" >二食堂</el-menu-item>

    </el-submenu>

    <el-submenu index="2" style="width: 150px">
      <template slot="title">
        <i class="el-icon-school"></i>
        <span slot="title">仙林校区</span>
      </template>

      <el-menu-item index="/main_page4" style="padding-left: 50px" >四食堂</el-menu-item>
      <el-menu-item index="/main_page5" style="padding-left: 50px" >五食堂</el-menu-item>
      <el-menu-item index="/main_page6" style="padding-left: 50px" >六食堂</el-menu-item>

    </el-submenu>

  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  props:{
    isCollapse: Boolean,
    logoTextShow: Boolean,
  },
}
</script>

<style scoped>

</style>