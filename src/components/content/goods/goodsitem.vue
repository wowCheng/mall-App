<template>
  <li class="goodsitem" @click='itemclick'>
      <img :src="showimg" alt="" @load="imgload">
      <div>
          <p>{{goodsitem.title}}</p>
          <span class="jiage">{{goodsitem.price}}</span>
          <span class="shoucang">{{goodsitem.cfav}}</span>
      </div>
  </li>
</template>

<script>
export default {
    name : 'goodsitem',
    props : {
        goodsitem : {
            type : Object,
            default() {
                return {}
            }
        }
    },
    computed : {
        showimg() {
            return (this.goodsitem.img || this.goodsitem.image || this.goodsitem.show.img)
        }
    },
    methods : {
        imgload() {
            //图片加载事件
            this.$bus.$emit('imgload')
            console.log('456');
        },
        itemclick() {
            //商品点击进入详情页
            this.$router.push('/xiangqing/' + this.goodsitem.iid)
        }
    }
}
</script>

<style>
    .goodsitem {
        
        width: 48%;
        padding-top: 8px;
        padding-bottom: 40px;
        position: relative;
    }
    .goodsitem img {
        flex: 1;
        width: 100%;
        border-radius: 10px;
    }
    .goodsitem div {
        position: absolute;
        width: 100%;
        bottom: 0;
    }
    .goodsitem p {
        font-size: 15px;
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;  /*内容超出省略号表示*/ 
    }
    .goodsitem .jiage{
        color: var(--color-high-text);
        padding-right: 10px;
    }
    .goodsitem .shoucang {
        padding-left: 15px;
        position: relative;
        
    }
    .goodsitem .shoucang::before {
        content: '';
        position: absolute;
        left: 0px;
        top: 4px;
        width: 14px;
        height: 14px;
        line-height: 14px;
        background: url('~@/assets/img/common/collect.svg')0 0/14px 14px;
    }
</style>