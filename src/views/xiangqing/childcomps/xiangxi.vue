<template>
  <div class="xiangxi">
    <div class="xiangxi-top" v-if="imgs.desc !== ''">
      <div class="start">『</div>
      <div class="desc">{{imgs.desc}}</div>
      <div class="end"><span>』</span> </div>
    </div>
    <div class="xiangxi-key">{{imgs.key}}</div>
    <div class="xiangxi-list">
      <img v-for="(item,index) in imgs.detailImage[0].list" :src="item" :key="index" @load="xiangxiimgload">
    </div>
  </div>
</template>

<script>
export default {
  name : 'xiangxi',
  props : {
    imgs : {
      type : Object,
      default() {
        return {}
      }
    }
  },
  methods : {
    xiangxiimgload() {
      this.$emit('xiangxiimgload')
    }
  }
}
</script>

<style>
  .xiangxi .xiangxi-list img {
    width: 100%;
  }
  .xiangxi .desc {
    padding: 10px 20px;
  }
  .xiangxi .start {
    padding-left: 5px;
    padding-top: 10px;
  }
  .xiangxi .end {
    position: relative;
    width: 100%;
    text-align: end;
    padding-bottom: 10px;
  }
  .xiangxi {
    border-bottom: 5px solid rgba(209, 209, 209,.3);
    padding-bottom: 10px;
  }
</style>