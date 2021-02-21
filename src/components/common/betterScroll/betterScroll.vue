<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div> 
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name :'betterScroll',
    data() {
      return {
        scroll : null,
      }
    },
    props : {
      probeType : {
        type : Number,
        default : 1
      },
      pullUpLoad : {
        type : Boolean ,
        default : false
      }
    },
    methods : {
      //返回顶部
      scrollTo(x,y,time = 1000) {
        this.scroll.scrollTo(x,y,time)
      },

      //更新滑动高度
      refresh() {
        this.scroll.refresh()
      },
    },
    mounted() {

      //创建better.scroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType : this.probeType,
        click : true,
        pullUpLoad : this.pullUpLoad
      })
      //监听滚动区域
      this.scroll.on('scroll',res => {
        this.$emit('scroll',res)
      })

      //监听上拉事件
      this.scroll.on('pullingUp',res => {
        this.$emit('pullingup')
        setTimeout(() => {
          this.scroll.finishPullUp()
        }, 2000);
      })
    }
}
</script>

<style scoped>
  
</style>