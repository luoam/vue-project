<template>
  <div id="app">
    <div id="nav">
      <!-- const routes = [
            {
              path: '/',
              name: 'Home',
              component: Home
            },
            {
              path: '/about',
              name: 'About',
              component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            },
            {
              path: '/test',
              name: 'Test',
              component: () => import('../views/test.vue')
            }

] -->
      <!-- 这里匹配到了在路由文件中定义的组件链接 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link>
      <!-- <router-link to="/"> 通过标签中的path,路由会匹配到相应的组件 -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>