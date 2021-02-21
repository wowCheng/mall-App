
export default {
    joincar(context , payload) {
      return new Promise((resolve , reject) => {
        //判断原购物车中是否有添加商品
        let oldgoods = context.state.buycar.find(item => item.id === payload.id)
        if (oldgoods) {
          //有就数量++
          context.commit('addcount' , oldgoods)
          resolve('商品数量 + 1')
        }else {
          //没有数量就 = 1 并添加购物车
          payload.count = 1
          context.commit('pushgoods' , payload)
          resolve('成功添加购物车')
        }
      })
    },

    //更改选中状态
    clickbutton(context,payload) {
      let oldgoods = context.state.buycar.find(item => item.id === payload)
      context.commit('clickbutton',oldgoods)
    },

    //更改所有的选中状态
    allclick(context,payload) {
      context.state.buycar.forEach(item => {
        context.commit('allclick',{
          item,
          isactive : payload
        })
      });
    }
}