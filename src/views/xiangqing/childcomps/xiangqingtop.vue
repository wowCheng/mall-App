<template>
  <div class="xiangqingtop">
      <navbaritem>
          <div slot="left" @click='backclick'>＜</div>
          <ul slot="center">
              <li v-for="(item,index) in titles" 
                  :key="index"
                  @click="click(index)"
                  :class="{active : index == activeindex}">{{item}}</li>
          </ul>
      </navbaritem>
  </div>
</template>

<script>
import navbaritem from '@/components/common/TopBar/NavBar.vue'
export default {
    name : 'navbar',
    data() {
        return {
            titles : ['商品','参数','评论','推荐'],
            activeindex : 0
        }
    },
    components : {
        navbaritem
    },
    methods : {
        click(index) {
            //点击的标签
            this.activeindex = index
            this.$emit('activeclick',index)
        },
        backclick() {
            //返回
            history.go(-1)
        }
    }
}
</script>
    
<style>
    .xiangqingtop ul{
        list-style-type: none;
        display: flex;
        justify-content: center;
    }
    .xiangqingtop li {
        flex: 1;
    }
    .xiangqingtop .active {
        color: var(--color-high-text);
    }
</style>