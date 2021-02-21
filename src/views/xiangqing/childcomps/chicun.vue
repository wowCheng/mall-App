<template>
  <div class="chicun">
    <table class="sizes" v-for="(table,index) in prarm.sizes" :key="index">
      <tr class="sizes-tr" v-for="(tr,indexy) in table" :key="indexy">
        <td class="sizes-td" v-for="(td,indexz) in tr" :key="indexz">
          {{td}}
        </td>
      </tr>
    </table>
    <table class="infos">
      <tr v-for="(item,index) in prarm.infos" :key="index">
        <td v-for="(text,indexq) in item" :key="indexq">{{text}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name : 'chicun',
  props : {
    prarm : {
      type : Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
  .chicun {
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 5px solid rgba(209, 209, 209,.3);
  }
  .chicun table {
    text-align: center;
    width: 85%;
    margin-left: 7%;
    font-size: 17px;
    border-collapse: collapse
  }
  .chicun table tr {
    height: 50px;
    border-bottom: 1px solid rgba(161, 161, 161,.5);
  }
  .chicun .infos tr td:nth-child(1) {
    width: 20%;
  }
  .chicun .infos tr td:nth-child(2) {
    color: pink;
  }
</style>