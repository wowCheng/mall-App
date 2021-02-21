<template>
    <li @click='click' >
        <div v-if="!flag"><slot name='item-icon'><img  src="~@/assets/img/TabBar/shouye.png" ></slot></div>
        <div v-else><slot name='item-icon-active'><img  src="~@/assets/img/TabBar/shouyeactive.png" ></slot></div>
        <div :style='acolor'><slot name='item-text'></slot></div>
    </li>
</template>

<script>
export default {
  name :'TabBarItem',
  props : {
    link : String,
    color : {
      default : 'pink'
    }
  },
  computed : {
    flag() {
      return this.$route.path == this.link    
    },
    acolor() {
      return this.flag ? {'color':this.color} : {}
    }
  },
  methods : {
    click() {
      this.$router.replace(this.link).catch(err => err)
    }
  }
  
  
  
}
</script>

<style>
  #tab-bar li img {
    height: 24px;
  }
  
</style>