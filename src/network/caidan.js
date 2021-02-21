//菜单数据请求
import {request} from './request.js'

//菜单左边列表数据
export function gethomedata() {
    return request({
      url :'/category'
    })
  }

//菜单右边上边数据
export function getRightTop(maitKey) {
  return request({
    url : '/subcategory',
    params : {
      maitKey
    }
  })
}

//菜单右边下面数据
export function getRightBottom(miniWallkey,type) {
  return request({
    url : '/subcategory/detail',
    params : {
      miniWallkey,
      type
    }
  })
}