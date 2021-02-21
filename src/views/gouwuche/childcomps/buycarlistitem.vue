<template>
  <li class="buycarlistitem" @click="click">
      <clickbutton class="clickbutton" :isactive='item.checked' ></clickbutton>

      <!-- 添加每个商品的数据 -->
      <div class="img">
          <img :src="item.img" alt="">
      </div>
      <div>
          <div class="text">{{item.name}}</div>
          <div class="text desc">{{item.desc}}</div>
          <div class="dibu">
              <div class="jiage">￥{{item.jiage}}</div>
              <div class="count">×{{item.count}}</div>
          </div>
      </div>
  </li>
</template>

<script>
import clickbutton from './clickButton.vue'

export default {
    name : 'buycarlistitem',
    components : {
        clickbutton
    },
    props : {
        //单个商品数据
        item : {
            type : Object ,
            default() {
                return {}
            }
        }
    },
    methods : {
        click() {
            this.$store.dispatch('clickbutton' , this.item.id)
        }
    }
}
</script>

<style>
    .buycarlistitem {
        display: flex;
        height: 170px;
        background: white;
        flex-direction: row;
        padding-left:15px;
        border-bottom: 2px solid rgba(148, 148, 148,.3);
    }
    .buycarlistitem .clickbutton {
        padding-top: 17%;
    }
    .buycarlistitem img {
        width: 100px;
        border-radius: 10px;
        margin: 9px;
    }
    .buycarlistitem .text {
        padding-top: 15px;
        font-size: 20px;
        overflow: hidden;
        width: 55vw;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .buycarlistitem .desc {
        color: rgb(138, 138, 138);
        padding: 20px 10px;
        font-size: 15px;
        text-align: center;
    }
    .buycarlistitem .jiage {
        color: var(--color-high-text);
    }
    .buycarlistitem .dibu {
        font-size: 22px;
        padding-top: 30px;
        width: 55vw;
        display: flex;
        justify-content: space-between;
    }
</style>