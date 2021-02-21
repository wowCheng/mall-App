<template>
  <div id="xiangqing" >
        <xiangqingtop ref="xiangqingtop" class="xiangqingtop" @activeclick='activeclick'></xiangqingtop>
        <scroll class="scroll" ref="content" @scroll='scroll' :probeType=3>
            <lunbotu :topimg='topimg'></lunbotu>
            <goodstext :goods='goods'></goodstext>
            <shoplist :shop="shop"></shoplist>
            <xiangxi :imgs='imgs' @xiangxiimgload='xiangxiimgload' ></xiangxi>
            <chicun ref="chicun" :prarm='prarm'></chicun>
            <pinglun ref="pinglun" :pinglun='pinglun'></pinglun>
            <goodslist ref="tuijian" :goods='tuijian'></goodslist>
        </scroll>
        <xiangqingbottom @joincar='joincar'></xiangqingbottom>
        <backtop @click.native='backclick' v-show="showflag"></backtop>
  </div>
</template>

<script>
import xiangqingtop from './childcomps/xiangqingtop.vue'
import lunbotu from './childcomps/lunbotu.vue'
import shoplist from './childcomps/shoplist.vue'    //商家信息数据
import Goodstext from './childcomps/Goodstext.vue'  //商品信息
import xiangxi from './childcomps/xiangxi.vue'  //商品详细介绍
import chicun from './childcomps/chicun.vue'    //商品尺寸信息
import pinglun from './childcomps/pinglun.vue'  //商品评论信息
import goodslist from '@/components/content/goods/goodslist.vue'//推荐商品
import xiangqingbottom from './childcomps/xiangqingbottom.vue' //底部按钮
import backtop from '@/components/content/backtop/backtop.vue' //回到顶部

import Scroll from '@/components/common/betterScroll/betterScroll.vue'  //滚动
import {getxiangqing,gettuijian,shop,Goodsmsg,goodsPrarm} from '@/network/xiangqing.js' //请求
import {imgload} from '@/common/mixin.js'


export default {
    name : 'xiangqing',
    // mixins : [imgload],
    data() {
        return {
            id : null,
            topimg : null,
            goods : {},   //数据列表
            shop : {},     //店铺信息
            imgs : {},       //商品详细信息
            prarm : {},     //商品尺寸信息
            pinglun : {},    //商品评论信息
            tuijian : [],    //推荐数据
            linkY : [],     //各个组件的offsetTop位置
            topactive : 0,   //选项卡选中
            showflag : false,   //回到顶部显示
        }
    },
    components : {
        xiangqingtop,
        lunbotu,
        shoplist,
        Goodstext,
        Scroll,
        xiangxi,
        chicun,
        pinglun,
        goodslist,
        xiangqingbottom,
        backtop,

    },
    methods : {
        xiangxiimgload() {
            //图片加载完成更新可滚动区域高度
            this.$refs.content.refresh()

            //获取各个组件的offsetTop位置
            this.linkY =[]
            this.linkY.push(0)
            this.linkY.push(this.$refs.chicun.$el.offsetTop)
            this.linkY.push(this.$refs.pinglun.$el.offsetTop)
            this.linkY.push(this.$refs.tuijian.$el.offsetTop)
            this.linkY.push(Number.MAX_VALUE)

        },
        activeclick(index) {
            this.$refs.content.scrollTo(0,-this.linkY[index] ,200)
        },
        scroll(res) {
            //监听滚动 显示正确的标题
            let resY = -res.y
            let length = this.linkY.length
            for (let i = 0 ; i < length - 1; i ++) {
                if (this.topactive !== i && ( resY > this.linkY[i] && resY < this.linkY[i+1])) {
                    this.topactive = i
                    this.$refs.xiangqingtop.activeindex = this.topactive
                }
            }

            //回到顶部按钮显示判断
            this.showflag = res.y <= -1000

        },

        //回到顶部
        backclick() {
            this.$refs.content.scrollTo(0,0,1000)
        },

        //加入购物车
        joincar() {
            //1.获取加入购物车需要的商品信息
            const product = {}
            product.img = this.topimg[0]       //商品图片
            product.name = this.goods.title     //商品名称
            product.desc = this.goods.desc      //商品描述
            product.jiage = this.goods.zuidi    //商品价格
            product.id = this.id                //商品id

            //3.添加到购物车vuex
            this.$store.dispatch('joincar' , product).then(res => {
                //添加成功弹出提示框
                console.log(res);
                this.$toast.show(res)
            })
        },
    },
    // mounted() {
    //     this.imgload = () => {
    //         this.$refs.content.refresh()
    //     }
    //     this.$bus.$on('imgload',this.imgload)
    // },
    destroyed() {
        //事件总线监听
        this.$bus.$off('imgload',this.imgload)
    },
    created() {
        //获取详情页面id数据
        this.id = this.$route.params.id

        //请求数据
        getxiangqing(this.id).then(res => {
            //获取轮播图数据
            const data = res.result
            this.topimg = data.itemInfo.topImages

            //获取商品信息
            this.goods = new Goodsmsg(data.itemInfo , data.columns ,data.shopInfo.services)

            //获取店铺信息
            this.shop = new shop(data.shopInfo)

            //获取商品详细信息
            this.imgs = data.detailInfo

            //获取商票尺寸信息
            this.prarm = new goodsPrarm(data.itemParams.info,data.itemParams.rule)

            //获取评论信息
            if (data.rate.cRate !== 0) {
                this.pinglun = data.rate.list[0]
            }
            
        })

        //请求推荐数据
        gettuijian().then(res => {
            this.tuijian = res.data.list
        })
    }
}
</script>

<style>
    #xiangqing {
        z-index: 9;
        background: #fff;
        height: 100vh;
    }
    #xiangqing .xiangqingtop {
        z-index: 9;
        background: #fff;
    }
    #xiangqing .scroll {
        position: absolute;
        top: 44px;
        bottom: 49px;
        overflow: hidden;
    }
</style>