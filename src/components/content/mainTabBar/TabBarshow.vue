<template>
     <tab-bar>
      <tab-bar-item link='/shouye' >
        <img slot='item-icon' src="~@/assets/img/TabBar/shouye.png" >
        <img slot='item-icon-active' src="~@/assets/img/TabBar/shouyeactive.png" >
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item link='/caidan'>
        <img slot='item-icon' src="~@/assets/img/TabBar/caidan.png" >
        <img slot='item-icon-active' src="~@/assets/img/TabBar/caidanactive.png" >
        <div slot='item-text'>菜单</div>
      </tab-bar-item>
      <tab-bar-item link='/gouwuche'>
        <img slot='item-icon' src="~@/assets/img/TabBar/gouwuche.png" >
        <img slot='item-icon-active' src="~@/assets/img/TabBar/gouwucheactive.png" >
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item link='/wode'>
        <img slot='item-icon' src="~@/assets/img/TabBar/wode.png" >
        <img slot='item-icon-active' src="~@/assets/img/TabBar/wodeactive.png" >
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/common/TabBar/TabBar.vue'
import TabBarItem from '@/components/common/TabBar/TabBarItem.vue'
export default {
  name : 'TabBarshow',
  components : {
    TabBarItem,
    TabBar
  }
}
</script>

<style>

</style>