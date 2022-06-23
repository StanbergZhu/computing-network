<template>
  <div style="font-size: 12px;  line-height: 60px; display: flex">
    <div style="flex: 1; font-size: 25px">
      <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>
    </div>

    <el-dropdown style="width: 70px; cursor: pointer">
      <span >{{username}}</span>
    </el-dropdown>
  </div>

</template>

<script>
export default {
  name: "Header",
  props:{
    collapseBtnClass: String,
    collapse: Function,
    username: String,
  },
}
</script>

<style scoped>

</style>