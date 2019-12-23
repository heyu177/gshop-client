//使用mockjs提供数据接口
import Mock from 'mockjs'
import data from './data.json'

//返回goods的接口
Mock.mock('/shop_goods',{code:0,goods:data.goods})
//返回ratings的接口
Mock.mock('/shop_ratings',{code:0,ratings:data.ratings})
//返回info的接口
Mock.mock('/shop_info',{code:0,info:data.info})