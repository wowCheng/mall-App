<template>
  <div class="rightlist">
      <ul>
        <li v-for="(item,index) in list" :key='index'>
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </li>
      </ul>
      
  </div>
</template>

<script>
export default {
    name : 'rightlist',
    props : {
      list : {
        type : Array,
        default() {
          return []
        }
      },
    }
}
</script>

<style>
  .rightlist ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding-left: 10px;
    padding-bottom: 20px;
  }
  .rightlist li {
    width: 80px;
    text-align: center;
  }
  .rightlist img {
    width: 60px;
    padding: 15px 0;
  }
</style>