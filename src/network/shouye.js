//首页所有数据的请求 
import {request} from './request.js'

export function gethomedata() {
  return request({
    url :'/home/multidata'
  })
}

export function getgoods(type,page) {
  // /home/data?type=new&page=1
  return request({
    url : '/home/data',
    params : {
      type,
      page
    }
  })
}