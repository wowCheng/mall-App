<template>
  <div class="xuanxiangka">
    <ul>
      <li v-for="(item,index) in titles" 
          :class="{active : index==activeindex}"  
          @click='click(index)'
          :key="index">
        <span :class="{active : index==activeindex}" >{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name : 'xuanxiangka',
  props : {
    titles : {
      type : Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeindex : 0
    }
  },
  methods : {
    click(index) {
      this.activeindex = index
      this.$emit('activeindex',index)
    }
  }
}
</script>

<style>
  .xuanxiangka {
    z-index: 9;
  }
  .xuanxiangka ul{
    display: flex;
    list-style-type: none;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background: rgb(255, 255, 255);
  }
  .xuanxiangka li {
    flex: 1;
    text-align: center;
  }
  .xuanxiangka li.active{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
    
  }
 
</style>