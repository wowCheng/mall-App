<template>
  <div id="shouye">
      <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
      <xuanxiangka :titles="['流行','新款','精选']"
                       @activeindex='activeindex'
                       ref="xuanxiangka1"
                       class="xuanxiangkaTop"
                       v-show="xuanxiangkaTop"></xuanxiangka>
      <scroll class="content" 
              ref="content" 
              :probe-type='3'
              @scroll='show'
              :pull-up-load='true'
              @pullingup='pullingup'>
          <gundongtiao :banner='banner' @gundongtiaoImgLoad='gundongtiaoImgLoad'></gundongtiao>
          <recommends :recommend='recommend'></recommends>
          <liuxing></liuxing>
          <xuanxiangka :titles="['流行','新款','精选']"
                       @activeindex='activeindex'
                       ref="xuanxiangka"></xuanxiangka>
          <goodslist :goods ="goods[active].list"></goodslist>
      </scroll>
      <backtop @click.native='backclick' v-show="showflag"></backtop>
  </div>
</template>

<script>
import scroll from '@/components/common/betterScroll/betterScroll.vue'
import NavBar from '@/components/common/TopBar/NavBar.vue'
import gundongtiao from '@/components/content/gundongtiao/gundongtiao.vue'
import xuanxiangka from '@/components/content/xuanxiangka/xuanxiangka.vue'
import goodslist from '@/components/content/goods/goodslist.vue'


import recommends from '@/views/shouye/childcomps/recommend/recommends.vue'
import liuxing from '@/views/shouye/childcomps/liuxing/liuxing.vue'
import backtop from '@/components/content/backtop/backtop.vue'
import {debounce} from '@/common/gongju.js'
import {imgload} from '@/common/mixin.js'

import {
  gethomedata,
  getgoods
} from '@/network/shouye.js'

export default {
  name : 'shouye',
  mixins : [imgload],
  components : {
    NavBar,
    gundongtiao,
    xuanxiangka,
    goodslist,
    scroll,

    recommends,
    liuxing,
    backtop,
  },
  data() {
    return {
      banner : [],
      recommend:[],
      goods : {
        'pop' : {page : 0 , list : []},
        'new' : {page : 0 , list : []},
        'sell' : {page : 0 , list : []}
      },
      showflag : false,
      active : 'pop',
      taboffsettop : 0,
      xuanxiangkaTop : false,
      // saveY : 0
    }
  },
  created() {

    //1.请求头部轮播图数据
    this.gethomedata()

    //2.请求商品数据
    this.getgoods('sell')
    this.getgoods('pop')
    this.getgoods('new')

    
  },
  mounted() {
    //监听item中图片加载完成 防抖
    // const refresh = debounce(this.$refs.content.refresh,200)
    // this.shouyeimgload = () => {
    //   refresh()
    // }
    // this.$bus.$on('imgload',this.shouyeimgload)
    //监听item中图片加载完成 不防抖
    // this.$bus.$on('imgload',() => {
    //   this.$refs.content.refresh()
    // })
  },



  activated() {
    // this.$refs.content.scrollTo(0,this.saveY,0)
    this.$refs.content.refresh()
  },
  deactivated() {
    // this.saveY = this.$refs.content.scroll.y
    this.$bus.$off('imgload',this.shouyeimgload)
  },
  methods : {
    gethomedata() {
      //请求首页轮播图数据
      gethomedata().then(res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getgoods(type) {
      //请求首页商品数据
      const page = ++ this.goods[type].page 
      getgoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
      })
    },

    //回到顶部
    backclick() {
      this.$refs.content.scrollTo(0,0,1000)
    },

    //回到顶部按钮显示
    show(res) {
      this.showflag = res.y <= -1000
      //选项卡置顶
      this.xuanxiangkaTop = -res.y >= this.taboffsettop
    },

    //上拉加载更多
    pullingup() {
      this.getgoods(this.active)
    },

    //点击选项卡传入数据
    activeindex(index) {
      switch (index) {
        case 0 :
          this.active = 'pop'
          break
        case 1 :
          this.active = 'new'
          break
        case 2 :
          this.active = 'sell'
      }

      //选项卡点击同步
      this.$refs.xuanxiangka.activeindex = this.$refs.xuanxiangka1.activeindex = index
    },

    //获取选项卡的输出Y位置
    gundongtiaoImgLoad() {
      this.taboffsettop = this.$refs.xuanxiangka.$el.offsetTop
    }
  }
}
</script>

<style scoped>
  #shouye {
    height: 100vh;
  }
  #shouye .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 20px;
  }
  #shouye .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  #shouye .xuanxiangkaTop {
    margin-top: -2px;
    z-index: 2;
    position: relative;
  }

  
</style>