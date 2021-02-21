export default {
    //重复商品更改数量
    addcount(state,payload) {
        payload.count ++
      },

    //添加新商品进入购物车
    pushgoods(state,payload) {
      payload.checked = false  //设置默认不选中
      state.buycar.push(payload)
    },

    //更改选中状态
    clickbutton(state,payload) {
      payload.checked = !payload.checked
    },

    //全部选中
    allclick(state,payload) {
      payload.item.checked = payload.isactive
    }
}