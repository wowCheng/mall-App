<template>
  <div class="shoplist">
    <div class="top">
      <img :src="shop.log" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="oncenter">
      <div class="left">
        <div class="onleft">
          <span class="shopfontsize">{{shop.sells}}</span><br>
          <span >总销量</span>
        </div>
        <div class="onright">
          <span class="shopfontsize">{{shop.goodsCount}}</span><br>
          <span >全部宝贝</span>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item,index) in shop.score" :key="index">
            <span class="itemname">{{item.name}}</span>
            <span class="itemscore" :class="{itemcolor : item.isBetter}">{{item.score}}</span>
            <span class="gao" v-show="item.isBetter">高</span>
            <span class="di" v-show="!item.isBetter">低</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <span>进入店铺</span>
    </div>
  </div>
</template>

<script>
export default {
  name : 'shoplist',
  props : {
    shop : {
      type : Object,
      default() {
        return {}
      }
      }
  },
  // computed : {
  //   shopsells() {
  //     return parseFloat(parseInt(this.shop.sells /1000) /10).toString()
  //   }
  // }
}
</script>

<style>
  .shoplist {
    border-bottom: 5px solid rgba(209, 209, 209,.3);
    height: 200px;
    background : white ;
  }
  .shoplist .top {
    width: 100%;
    display: flex;
    padding-top: 20px;
    padding-left: 10px;
    
    height: 80px;
    line-height: 50px;
    
  }
  .shoplist .top img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .shoplist .top span {
    padding-left: 15px;
    height: 50;
    font-size: 20px;
  }
  .shoplist .oncenter {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 15px;
  }
  .shoplist .onleft {
    flex: 1;
    padding-left: 10px;
    padding-top: 10px;
  }
  .shoplist .onright {
    padding-top: 10px;
    flex: 1;
    border-right: 2px solid rgba(0, 0, 0, .1);
  }
  .shoplist .left {
    flex: 1;
    display: flex;
  }
  .shoplist .left .shopfontsize {
    font-size: 20px;
  }
  .shoplist .right {
    flex: 1;
  }
  .shoplist .right ul li{
    list-style-type: none;
    display: flex;
    text-align: left;
    padding-bottom: 5px;
  }
  .shoplist .right ul li .itemname {
    color: black;
    padding-left: 25px;
  }
  .shoplist .right ul li .itemscore {
    padding-left: 10px;
    width: 55px;
    color: green;
  }
  .shoplist .right ul li .itemcolor {
    color: red;
  }
  .shoplist .right ul li .gao {
    background: red;
    color: white;
  }
  .shoplist .right ul li .di {
    background:green;
    color: white;
  }
  .bottom{
    text-align: center;
    padding-top: 10px;
  }
  .bottom span {
    display: inline-block;
    width: 150px;
    border-radius: 30px;
    height: 25px;
    background: rgba(196, 196, 196,.3);
    color:rgb(126, 126, 126);
    line-height: 25px;
  }
  
  
</style>