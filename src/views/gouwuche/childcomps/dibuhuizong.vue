<template>
  <div class="dibuhuizong">
    <div class="quanxuan" @click="quanxuan">
      <clickbutton class="button" :isactive="isactive"></clickbutton>
      <div>全选</div>
    </div>
    <div class="zongjia">总价 : ￥{{monery}}</div>
    <div class="jisuan" @click="jiesuan">去计算({{shuliang}})</div>
  </div>
</template>

<script>
import clickbutton from './clickButton.vue'
export default {
  name : 'dibuhuizong',
  components : {
    clickbutton
  },
  computed : {
    //选中商品的总价格
    monery() {
      return this.$store.state.buycar.filter(item => {
        return item.checked
      }).reduce((prevalue,item) => {
        return prevalue + item.jiage * item.count
      },0).toFixed(2)
    },

    //购物车中选中数量
    shuliang() {
      return this.$store.state.buycar.filter(item => {
        return item.checked
      }).length
    },

    //全选按钮的显示
    isactive() {
      if (this.$store.state.buycar.length == 0 ) return false
      return !this.$store.state.buycar.find(item => !item.checked)
    },
  },
  methods : {
    quanxuan() {
      //发送全选dispatch请求
        this.$store.dispatch('allclick', !this.isactive)
    },

    //点击结算按钮，若没有商品显示则提示'请选择购买的商品'
    jiesuan() {
      if (this.shuliang == 0) {
        this.$toast.show('请选择购买的商品')
      }
    }
  }
}
</script>

<style>
  .dibuhuizong {
    height: 45px;
    background: rgb(230, 230, 230);
    position: absolute;
    bottom: 49px;
    left: 0;
    right: 0;
    display: flex;
    line-height: 45px;
  }
  .dibuhuizong .button {
    padding-top: 10px;
    padding-right: 7px;
  }
  .dibuhuizong .quanxuan {
    display: flex;
    width: 100px;
    padding-left: 10px;
  }
  .dibuhuizong .zongjia {
    flex: 1;
  }
  .dibuhuizong .jisuan {
    text-align: center;
    width: 120px;
    background: red;
    border-radius: 30px;
  }
</style>