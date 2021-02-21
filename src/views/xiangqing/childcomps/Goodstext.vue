<template>
  <div class="goodstext">
    <div class='goodstext-title'>{{goods.title}}</div>
    <div class="goodstext-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount" :style="{background : goods.discountBgcolor}">{{goods.discount}}</span>
    </div>
    <div class="shuju">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="goodstext-bottom">
      <span v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Goodstext',
  props : {
    goods : {
      type : Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style>
  .goodstext {
    padding: 10px;
    border-bottom: 5px solid rgba(209, 209, 209,.3);
  }
  .goodstext .goodstext-title{
    padding-bottom: 5px;
    font-size: 20px;
  }
  .goodstext .goodstext-price .n-price {
    color:var(--color-high-text);
    font-size: 30px;
  }
  .goodstext .goodstext-price .o-price {
    color:rgb(185, 185, 185);
    text-decoration: line-through;
  }
  .goodstext .goodstext-price .discount {
    margin-left: 5px;
    font-size: 17px;
    text-align: center;
    display: inline-block;
    width: 80px;
    line-height: 20px;
    border-radius: 30px;
    color: white;
  }
  .goodstext .shuju {
    display: flex;
    margin-top: 10px;
    border-bottom: 2px solid rgba(197, 197, 197,.2);
    padding-bottom: 10px;
    justify-content: space-between;
    color: rgb(185, 185, 185);
  }
  .goodstext .goodstext-bottom {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }
  .goodstext .goodstext-bottom img{
    width: 15px;
  }

</style>