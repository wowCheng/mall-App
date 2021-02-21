//详细页数据请求
import {request} from './request.js'

export function getxiangqing(iid) {
    return request({
        url :'/detail',
        params : {
            iid
        }
    })
}

//推荐数据获取
export function gettuijian() {
    return request({
        url : '/recommend'
    })
}





//提取单个产品信息
export class Goodsmsg {
    constructor(itemInfo,columns,services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc           //介绍
        this.newPrice = itemInfo.price      //最新价格（有可能是区间）
        this.oldPrice = itemInfo.oldPrice   //老价格
        this.discount = itemInfo.discountDesc
        this.discountBgcolor = itemInfo.discountBgColor
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
        this.zuidi = itemInfo.lowNowPrice   //最低价格
    }
}

//创建shop信息类 提取店铺信息
export class shop {
    constructor(shopInfo) {
        this.log = shopInfo.shopLogo    //logo
        this.name = shopInfo.name       //店铺name
        this.fans = shopInfo.cFans      //店铺粉丝
        this.sells = shopInfo.cSells    //商品销量
        this.score = shopInfo.score     //评分
        this.goodsCount = shopInfo.cGoods   //商品个数
    }
}

//商品尺寸信息
export class goodsPrarm {
    constructor(info,rule) {
        this.image = info.images ? info.images[0] : '' 
        this.infos = info.set 
        this.sizes = rule.tables
    }
}

