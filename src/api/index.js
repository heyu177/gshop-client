/**
 * 接口请求函数
 */
import ajax from './ajax'
// const BASE_URL='http://localhost:4000'
const BASE_URL='/api'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress=(geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys=() => ajax(BASE_URL+'/index_category')
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops=(latitude,longitude) => ajax(BASE_URL+'/shops',{latitude,longitude})
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchShop=(geohash,keyword) => ajax(BASE_URL+'/search_shops',{geohash,keyword})
// [5、获取一次性验证码](#5获取一次性验证码)<br/>
// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin=({name,pwd,captcha}) => ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'post')
// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode=(phone) => ajax(BASE_URL+'/sendcode',{phone})
// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqSmsLogin=(phone,code) => ajax(BASE_URL+'/login_sms',{phone,code},'post')
// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserInfo=() => ajax(BASE_URL+'/userinfo')
// [10、用户登出](#10用户登出)<br/>
export const reqLogout=() => ajax(BASE_URL+'/logout')
//获取商家信息
export const reqShopInfo=() => ajax('/shop_info')
//获取商家评价信息
export const reqShopRatings=() => ajax('/shop_ratings')
//获取商家商品信息
export const reqShopGoods=() => ajax('/shop_goods')
