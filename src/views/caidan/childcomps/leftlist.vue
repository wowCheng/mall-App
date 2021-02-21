<template>
  <div class="leftlist">
      <ul>
          <li :class="{'active' : index == activeindex}"  v-for="(item,index) in fenlei" @click='click(item,index)' :key="index">{{item.title}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name : 'leftlist',
    props : {
        fenlei : {
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
        click(item,index) {
            this.activeindex = index
            this.$emit('leftIndex',item)
        }
    },
}
</script>

<style>
    .leftlist {
        width: 100px;
    }
    .leftlist li {
        background:white;
        font-size: 17px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        border-left: 3px solid transparent;

    }
    .leftlist .active {
        border-left: 3px solid pink;
        color: rgb(255, 110, 134);
        font-weight: bold;
    }
</style>