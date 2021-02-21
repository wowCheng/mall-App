<template>
  <div v-show="isshow" class="toas">{{message}}</div>
</template>

<script>
export default {
    name : 'tishikuang',
    data() {
        return {
            message : '',
            isshow : false
        }
    },
    methods : {
        show(message , time=1000) {
            this.message = message
            this.isshow = true
            setTimeout(() => {
                this.isshow =false
                this.message = ''
            }, time);
        }
    }

}
</script>

<style>
    .toas {
        position: fixed;
        z-index: 999;
        background-color: rgba(0, 0, 0, .6);
        color: white;
        padding: 8px 10px;
        border-radius: 5px;
        font-size: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>