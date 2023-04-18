<template>
  <h1 class="msg">{{msg}}</h1>
  <img src="@/assets/image/wyz.jpg" alt="">
  <input type="file" ref="input">
  <button @click="uploadFile(input)">上传文件</button>
</template>

<script setup>
import {ref} from "vue";
import {uploadFile} from "./bigFileUpload/uploadFile";

const msg = ref('启动成功了哈哈哈哈322222')
const input = ref(null)
</script>

<style scoped lang="less">
.msg{
  color: red;
}

img {
  width: 100px;
  height: 100px;
}
</style>
