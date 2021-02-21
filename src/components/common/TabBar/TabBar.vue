<template>
  <div id="tab-bar">
    <ul>
      <slot></slot>
    </ul>
    </div>
</template>

<script>
export default {
  name : 'TabBar'
}
</script>

<style>
  #tab-bar {
    background: #f6f6f6;
    height: 49px;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 1px rgba(100,100,100,.1);
  }
  #tab-bar ul {
    width: 100%;
    display: flex;
    padding: 0;
  }
  #tab-bar li {
    
    margin-top: 5px;
    flex: 1;
    text-align: center;
    list-style-type: none;
    font-size: 10px;

  }
  
</style>