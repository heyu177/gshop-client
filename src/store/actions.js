/**
 * 通过mutations间接更新state的多个方法
 */
import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART
} from './mutation-types'
import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopGoods,
    reqShopInfo,
    reqShopRatings
} from '../api'

export default{
    //获取异步地址
    async getAddress({commit,state}){
        const geohash=state.latitude+','+state.longitude
        const result=await reqAddress(geohash)
        if(result.code==0){
            const address=result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    //获取食品分类列表
    async getCategorys({commit}){
        const result=await reqFoodCategorys()
        if(result.code==0){
            const categorys=result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },
    //异步获取商家列表
    async getShops({commit,state}){
        const {latitude,longitude}=state
        const result=await reqShops(latitude,longitude)
        if(result.code==0){
            const shops=result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    },
    //同步记录个人信息
    recordUser({commit},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    },
    //异步获取用户信息
    async getUserInfo({commit}){
        const result=await reqUserInfo()
        if (result.code==0) {
            const userInfo=result.data
            commit(RECEIVE_USER_INFO,{userInfo})
        }
    },
    //退出
    async logout({commit}){
        const result=await reqLogout()
        if (result.code==0) {
            commit(RESET_USER_INFO)
        }
    },
    //异步获取商家信息
    async getShopInfo({commit}){
        const result=await reqShopInfo()
        if (result.code==0) {
            const info=result.info
            commit(RECEIVE_INFO,{info})
        }
    },
    //异步获取商家评价列表
    async getShopRatings({commit},callback){
        const result=await reqShopRatings()
        if (result.code==0) {
            const ratings=result.ratings
            commit(RECEIVE_RATINGS,{ratings})
            callback&&callback()
        }
    },
    //异步获取商家商品列表
    async getShopGoods({commit},callback){
        const result=await reqShopGoods()
        if (result.code==0) {
            const goods=result.goods
            commit(RECEIVE_GOODS,{goods})
            callback && callback()
        }
    },
    //同步更新food中的count值
    updateFoodCount({commit},{isAdd,food}){
        if (isAdd) {
            commit(INCREMENT_FOOD_COUNT,{food})
        } else {
            commit(DECREMENT_FOOD_COUNT,{food})
        }
    },
    //同步清空购物车
    clearCart({commit}){
        commit(CLEAR_CART)
    }
}