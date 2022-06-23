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

      <el-menu-item @click="choose1" style="padding-left: 50px" >一食堂</el-menu-item>
      <el-menu-item @click="choose2" style="padding-left: 50px" >二食堂</el-menu-item>

    </el-submenu>

    <el-submenu index="2" style="width: 150px">
      <template slot="title">
        <i class="el-icon-school"></i>
        <span slot="title">仙林校区</span>
      </template>

      <el-menu-item @click="choose4" style="padding-left: 50px" >四食堂</el-menu-item>
      <el-menu-item @click="choose5" style="padding-left: 50px" >五食堂</el-menu-item>
      <el-menu-item @click="choose6" style="padding-left: 50px" >六食堂</el-menu-item>

    </el-submenu>

  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  data(){
    return{
      address: 1
    }
  },
  props:{
    isCollapse: Boolean,
    logoTextShow: Boolean,
  },
  methods:{
    choose1(){
      console.log("to 1")
      this.address = 1;
      this.$emit('chooseAdd',this.address)
    },
    choose2(){
      console.log("to 2")
      this.address = 2;
      this.$emit('chooseAdd',this.address)
    },
    choose4(){
      console.log("to 4")
      this.address = 4;
      this.$emit('chooseAdd',this.address)
    },
    choose5(){
      console.log("to 5")
      this.address = 5;
      this.$emit('chooseAdd',this.address)
    },
    choose6(){
      console.log("to 6")
      this.address = 6;
      this.$emit('chooseAdd',this.address)
    }
  }
}
</script>

<style scoped>

</style>