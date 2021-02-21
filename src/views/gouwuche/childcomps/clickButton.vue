<template>
    <div class="clickbutton">
        <div class="yuan" :class="{color : isactive}" ></div>
    </div>
</template>

<script>
export default {
    name : 'clickbutton',
    props : {
        isactive : {
            type : Boolean,
            default : false
        }
    },
    
}
</script>

<style>
    .clickbutton .yuan {
        border-radius: 50%;
        width: 25px;
        height: 25px;
        border: 2px solid rgba(107, 107, 107,.3);
    }
    .clickbutton .color {
        background: var(--color-tint) ;
    }
</style>