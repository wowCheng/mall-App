<template>
  <div class="gundongtiao">
    <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index" >
      <a :href="item.link">
        <img :src="item.image" @load="gundongtiaoImgLoad">
      </a>
    </swiper-item>
  </swiper>
  </div>
</template>

<script>
import {Swiper , SwiperItem} from '@/components/common/swiper/index.js'
export default {
  name : 'TabBarshow',
  components : {
    Swiper,
    SwiperItem
  },
  props : {
    banner : Array
  },
  data() {
    return {
      loadFlag : true
    }
  },
  methods : {
    //等滚动条图片加载完成 发送事件
    gundongtiaoImgLoad() {
      if (this.loadFlag) {
        this.$emit('gundongtiaoImgLoad')
        this.loadFlag = !this.loadFlag
      }
        
    }
  }
}
</script>
  
<style>

</style>