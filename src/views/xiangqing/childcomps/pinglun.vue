<template>
  <div class="pinglun">
      <div class="pingjia">
          <span>用户评价</span>
          <span>更多</span>
      </div>
      <div class="pingjia2">
          <div class="id">
              <img :src="pinglun.user.avatar" >
              <span>{{pinglun.user.uname}}</span>
          </div>
          <div class="msg">
              <span>{{pinglun.content}}</span>
              <div class="time">
                  <span>{{pinglun.created | showtime}}</span>
                  <span>{{pinglun.style}}</span>
              </div>
          </div>
          <div class="img" >
              <img v-for="(img,index) in pinglun.images" :src="img" :key="index">
          </div>
      </div>
  </div>
</template>

<script>

import {formatDate} from '@/common/gongju.js'
export default {
    name : 'pinglun',
    props : {
        pinglun : {
            type : Object,
            default() {
                return {}
            }
        }
    },
    filters : {
        showtime(time) {
            const date = new Date(time * 1000)
            return formatDate(date, 'yyyy-MM-dd')
        }
    }
}
</script>

<style>
    .pinglun {
        padding-bottom: 10px;
        border-bottom: 5px solid rgba(209, 209, 209,.3);
    }
    .pinglun .pingjia {
        background: white;
        height: 50px;
        display: flex;
        line-height: 50px;
        border-bottom: 1px solid rgba(168, 168, 168,.5);
    }
    .pinglun .pingjia span:nth-child(1) {
        padding-left: 10px;
        font-size: 20px;
    }
    .pinglun .pingjia span:nth-child(2) {
        position: absolute;
        right: 10px;
    }
    .pinglun .pingjia2 .id {
        display: flex;
        height:80px ;
        line-height: 60px;
        padding: 10px;
    }
    .pinglun .pingjia2 .id img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .pinglun .pingjia2 .id span {
        font-size: 20px;
        padding-left: 10px;
    }

    .pinglun .pingjia2 .msg {
        padding: 10px;
    }
    .pinglun .pingjia2 .msg span {
        font-size: 17px;
        
    }
    .pinglun .pingjia2 .msg .time {
        padding-top: 10px;
        font-size: 15px;
        color: rgba(71, 71, 71, 0.5);
    }
    .pinglun .pingjia2 .msg .time span {
        padding-right: 10px;
    }
    .pinglun .pingjia2 .img {
        display: flex;
    }
    .pinglun .pingjia2 .img img {
        width: 150px;
        margin-left: 10px;
        padding-bottom: 20px;
    }
</style>