<template>
  <div id="gouwuche">
    <!-- 导航 -->
    <navbar class="navbar">
      <div slot='center'>购物车({{length}})</div>
    </navbar>

    <!-- 商品列表 -->
    <buycarlist></buycarlist>
    <!-- 底部汇总 -->
    <dibuhuizong></dibuhuizong>
  </div>
</template>

<script>
import navbar from '@/components/common/TopBar/NavBar.vue'
import buycarlist from './childcomps/buycarlist.vue'
import dibuhuizong from './childcomps/dibuhuizong.vue'

import {mapGetters} from 'vuex'

export default {
  name : 'gouwuche',
  components : {
    navbar,
    buycarlist,
    dibuhuizong,
  },
  computed : {
    ...mapGetters({
      length : 'buycarLength'
    })
  }
}
</script>

<style>
  #gouwuche {
    height: 100vh;
  }
  #gouwuche .navbar {
    background: var(--color-tint);
  }
</style>