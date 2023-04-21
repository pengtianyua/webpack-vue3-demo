<template>
	<h1 class="msg">{{ msg }}</h1>
	<img src="@/assets/image/wyz.jpg" alt="">
	<input type="file" ref="input">
	<button @click="uploadFile(input)">上传文件</button>
	<p>这是一段文字</p>
</template>

<script setup>
import {ref} from "vue";
import {uploadFile} from "./bigFileUpload/uploadFile";

const msg = ref('启动成功了哈哈哈哈322222')
const input = ref(null)

const handleSelect = () => {
	console.log('选中了')
	navigator.clipboard.writeText(window.getSelection().toString()).then(() => {
		console.log('复制成功')
	}).catch(() => {
		console.log('无权限复制')
	})
}

document.addEventListener('selectionchange', (evt) => {
	navigator.clipboard.writeText(window.getSelection().toString()).then(() => {
		console.log('复制成功')
	}).catch(() => {
		console.log('无权限复制')
	})
})
</script>

<style scoped lang="less">
.msg {
  color: red;
}

img {
  width: 100px;
  height: 100px;
}
</style>
