/**
 * 直接更新state的多个方法
 */
import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT
} from './mutation-types'
import Vue from 'vue'
export default{
    [RECEIVE_ADDRESS] (state,{address}){
        state.address=address
    },
    [RECEIVE_SHOPS] (state,{shops}){
        state.shops=shops
    },
    [RECEIVE_CATEGORYS] (state,{categorys}){
        state.categorys=categorys
    },
    [RECEIVE_USER_INFO] (state,{userInfo}){
        state.userInfo=userInfo
    },
    [RESET_USER_INFO] (state){
        state.userInfo={}
    },
    [RECEIVE_RATINGS] (state,{ratings}){
        state.ratings=ratings
    },
    [RECEIVE_GOODS] (state,{goods}){
        state.goods=goods
    },
    [RECEIVE_INFO] (state,{info}){
        state.info=info
    },
    [INCREMENT_FOOD_COUNT] (state,{food}){
        if (!food.count) {//第一次增加
            //food.count=1
            Vue.set(food,'count',1)//对新增的属性进行数据绑定
        } else {
            food.count++
        }
    },
    [DECREMENT_FOOD_COUNT] (state,{food}){
        if (food.count) {//count不等于0
            food.count--
        }
    }
}