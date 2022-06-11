<template>
  <el-container style="min-height: 100vh;">

    <el-aside width="sideWidth + 'px'" style="background-color: rgb(238, 241, 246);box-shadow: 2px 0 6px rgb(0 21 41/40%)">
      <Aside :isCollapse="isCollapse" :logoTextShow="logoTextShow"/>
    </el-aside>

    <el-container>

      <el-header style="border-bottom: 1px solid #ccc;">
        <Header :collapseBtnClass="collapseBtnClass" :collapse="collapse" :username="user_name"/>
      </el-header>

      <el-main>
        <router-view/>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>

import Header from "@/components/Header";
import Aside from "@/components/Aside";

export default {
  name: 'Manager',
  data() {
    return {
      collapseBtnClass: 'el-icon-s-fold',
      isCollapse: false,
      sideWidth:150,
      logoTextShow:true,
      user_name: "null"
    }
  },

  created() {
    //加载用户名
    this.user_name = this.$route.query
  },
  components:{
    Aside,
    Header,
  },
  methods:{
    collapse(){//点击收缩菜单栏按钮触发
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse){//收缩
        this.sideWidth = 64
        this.collapseBtnClass = 'el-icon-s-unfold'
        this.logoTextShow = false
      }else {//展开
        this.sideWidth = 200
        this.collapseBtnClass = 'el-icon-s-fold'
        this.logoTextShow = true
      }
    },
  }
}
</script>
