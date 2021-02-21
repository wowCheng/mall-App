<template>
    <div class="goodslist">
        <ul>
            <goodsitem v-for="(item,index) in goods" :goodsitem="item" :key="index"></goodsitem>
        </ul>
        
    </div>
</template>

<script>
import goodsitem from './goodsitem.vue'
export default {
    name : 'goodslist',
    props : {
        goods :{
            type : Array,
            default() {
                return []
            }
        }
    },
    components : {
        goodsitem
    }
}
</script>

<style>
    .goodslist ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        text-align: center;
        justify-content: space-around;

    }
</style>