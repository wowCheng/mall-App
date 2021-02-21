<template>
  <div class="buycarlist">
    <scroll class="scroll" ref="content">
      <ul>
        <buycarlistitem v-for="(item,index) in goodslist" :item='item' :key="index"></buycarlistitem>
      </ul>
    </scroll>
  </div>
</template>

<script>
import scroll from '@/components/common/betterScroll/betterScroll.vue'
import buycarlistitem from './buycarlistitem.vue'
import {mapGetters} from 'vuex'

export default {
    name : 'buycarlist',
    components : {
      scroll,
      buycarlistitem
    },
    computed : {
      ...mapGetters({
        goodslist : 'buycarlist'
      })
    },

    //组件获得焦点刷新scroll滑动高度
    activated() {
      this.$refs.content.scroll.refresh()
    },
    
    //监听购物车数据改变刷新scroll滑动高度 BUG：创建之前改变数无法监听
    // watch : {
    //   goodslist : { //深度监听，可以监听到对象，数组的变化
    //     handler(val,oldVal) {
    //       this.$refs.content.scroll.refresh()
    //       console.log('改变');
    //     },
    //     deep: true  //深度监听 true
    //   }
    // }
}
</script>

<style>
  .buycarlist .scroll {
    width: 100vw;
    overflow: hidden;
    position: fixed;
    top: 44px;
    bottom: 97px;
  }
</style>