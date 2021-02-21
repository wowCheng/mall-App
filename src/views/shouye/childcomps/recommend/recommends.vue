<template>
  <div class="recommend">
      <ul>
        <li v-for="item in recommend">
          <a :href="item.link">
            <img :src="item.image" >
            <div>{{item.title}}</div>
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name : 'recomments',
  props : {
    recommend : null
  }
}
</script>

<style>
.recommend {
  z-index: 9;
}
  .recommend ul {
    list-style-type: none;
    display: flex;
    text-align: center;
    width: 100%;
    padding:10px 0 20px ;
    border-bottom: 10px solid #eee ;
  }
  .recommend li img {
    width: 90%;
    margin-bottom: 10px;
  }
</style>