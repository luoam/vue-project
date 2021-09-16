<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg/>
  </div>
</template>

<script>
// 引入HelloWorld组件
import HelloWorld from '@/components/HelloWorld.vue'

// 这个函数的作用是：可以使组件在外部文件引用
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

