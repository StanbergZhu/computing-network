<template>
  <div style="font-size: 12px;  line-height: 60px; display: flex">
    <div style="flex: 1; font-size: 25px">
      <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>
    </div>

  </div>

</template>

<script>
export default {
  name: "Header",
  props:{
    collapseBtnClass: String,
    collapse: Function,
  },
}
</script>

<style scoped>

</style>