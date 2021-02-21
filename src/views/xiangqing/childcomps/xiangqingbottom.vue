<template>
  <div class="xianqingbottom">
      <div class="kefu">
          <img src="@/assets/img/TabBar/caidanactive.png" alt=""><br>
          <span>客服</span>
      </div>
      <div class="店铺">
          <img src="@/assets/img/TabBar/shouye.png" alt=""><br>
          <span>店铺</span>
      </div>
      <div class="收藏">
          <img src="@/assets/img/TabBar/wode.png" alt=""><br>
          <span>收藏</span>
      </div>
      <div class="join" @click="joincar">
          <span>加入购物车</span>
      </div>
      <div class="buy">
          <span>购买</span>
      </div>
  </div>
</template>

<script>
export default {
    name : 'xiangqingbottom',
    methods : {
        joincar() {
        //点击添加到购物车
            this.$emit('joincar')
        }
    }
}
</script>

<style>
    .xianqingbottom {
        z-index: 9;
        background: white;
        height: 49px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
    }
    .xianqingbottom div {
        text-align: center;
        font-size: 10px;
        flex: 0.7;
        padding-top: 10px;
    }
    .xianqingbottom img {
        width: 20px;
    }
    .xianqingbottom .join {
        background: yellow;
        flex: 1;
        font-size: 13px;
        line-height: 27px;
    }
    .xianqingbottom .buy {
        flex: 1;
        background: pink;
        font-size: 13px;
        color: white;
        line-height: 27px;
    }
</style>