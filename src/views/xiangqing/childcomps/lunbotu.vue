<template>

      <swiper class="xiangqinglunbo">
          <swiper-item  v-for="(item,index) in topimg" :key="index">
              <img :src="item" alt="">
          </swiper-item>
      </swiper>

</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index.js'  //轮播图组件
export default {
    name : 'lunbotu',
    props : {
        topimg :{
            type : Array,
            default() {
                return []
            }
        }
    },
    components : {
        Swiper,
        SwiperItem
    }
}
</script>

<style>
    .xiangqinglunbo {
        height: 300px;
        overflow: hidden;
    }
</style>