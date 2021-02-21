<template>
  <div id="caidan">
    <navbar class="navbar"><div slot="center">商品分类</div></navbar>
    <div class="caidan-center">
      <!-- 左边内容 -->
      <betterscroll :probe-type='3'
                    class="scroll">
        <leftlist :fenlei='fenlei' @leftIndex='leftIndex'></leftlist>
      </betterscroll>
      <!-- 右边内容 -->
      <betterscroll :probe-type='2'
                    class="caidanright"
                    ref="content"
                    @scroll='scroll'>
        <rightlist :list='rightTop' class="right-list"></rightlist>
        <xuanxiangka :titles="['综合','新品','销量']" @activeindex='activeindex'></xuanxiangka>
        <goodslist :goods="goodslist[listactive]"></goodslist>
      </betterscroll>
      
    </div>
  </div>
</template>

<script>
import navbar from '@/components/common/TopBar/NavBar.vue'  //顶部标题
import leftlist from './childcomps/leftlist.vue'  //左边菜单列表
import rightlist from './childcomps/rightlist.vue'  //右边菜单列表
import xuanxiangka from '@/components/content/xuanxiangka/xuanxiangka.vue' //选项卡
import goodslist from '@/components/content/goods/goodslist.vue' //选项卡下方数据展示
import {imgload} from '@/common/mixin.js'

import betterscroll from '@/components/common/betterScroll/betterScroll.vue'  //滑动组件
import {gethomedata,getRightTop,getRightBottom} from '@/network/caidan.js' //数据请求
export default {
  name : 'caidan',
  components : {
    navbar,
    leftlist,
    rightlist,
    xuanxiangka,
    goodslist,
    betterscroll
  },
  data() {
    return {
      fenlei : [],
      rightTop : [],
      goodslist : {
         'pop': [],
         'new': [],
         'sell': []
      },
      listactive : 'pop',
      imgload : null ,
    }
  },
  methods : {
    leftIndex(item){
      //请求右边上面的展示数据
      getRightTop(item.maitKey).then(res => {
        this.rightTop = res.data.list
      })
      //请求右下推荐数据
      this._getRightBottom(item.miniWallkey,'pop')
      this._getRightBottom(item.miniWallkey,'new')
      this._getRightBottom(item.miniWallkey,'sell')

    },

    //请求数据
    _getRightBottom(miniWallkey,key) {
      getRightBottom(miniWallkey,key).then(res => {
        this.goodslist[key] = res
      })
    },

    //监听选项卡点击事件
    activeindex(index) {
      switch (index) {
        case 0:
          this.listactive = 'pop'
          break
        case 1:
          this.listactive = 'new'
          break
        case 2:
          this.listactive = 'sell'
      }
    },
  },
  created() {
    //请求分类页面数据
    gethomedata().then(res => {
      this.fenlei = res.data.category.list
    })

    //开始请求默认展示数据（自己写的小BUG）
    this.leftIndex({maitKey: "3627",miniWallkey: "10062603"})
  },

  mounted() {
    //事件总线-刷新可滑动高度
    this.imgload = () => {
            this.$refs.content.refresh()
    }
    this.$bus.$on('imgload',this.imgload)
  }
}
</script>

<style>
  #caidan {
    height: 100vh;
    overflow: hidden;
  }
  #caidan .navbar{
    background-color: var(--color-tint);
    color: white;
  }
  #caidan .caidan-center {
    display: flex;
  }
  #caidan .caidanright {
    height: calc(100vh - 44px - 49px);
    flex: 1;
    overflow: hidden;
  }
  #caidan .scroll {
    overflow: hidden;
    height: calc(100vh - 44px - 49px);
  }
</style>