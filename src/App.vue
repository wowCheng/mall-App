<template>
  <div id="app">
    <keep-alive exclude="xiangqing">
      <router-view></router-view>
    </keep-alive>
    
    <tabbar></tabbar>
  </div>
    
</template>

<script>
import tabbar from './components/content/mainTabBar/TabBarshow.vue'
export default {
  name : 'app',
  components : {
    tabbar,
  },
}
</script>

<style >
  @import url('./assets/css/base.css');
</style>