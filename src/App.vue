<template>
  <h1 class="msg">{{msg}}</h1>
  <img src="@/assets/image/wyz.jpg" alt="">
</template>

<script setup>
import {ref} from "vue";

const msg = ref('启动成功了哈哈哈哈322222')
</script>

<style scoped lang="less">
.msg{
  color: red;
}
</style>
