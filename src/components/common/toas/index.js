//toast  挂载全局的一个组件，所有组件都能直接调用，要子main.js中use一下

import tishikuang from './tishikuang.vue'

const obj ={}

obj.install = vue => {
    //1.创建组件构造器
    const toastContrustor = vue.extend(tishikuang)

    //2.new的方式，根据组件构造器，创建出来组件对象
    const toast = new toastContrustor()

    //3.将组件对象，手动挂载到一个元素上
    toast.$mount(document.createElement('div'))

    //4.toast.$el对应的就是div
    document.body.appendChild(toast.$el)

    vue.prototype.$toast = toast
}

export default obj