// 包含多个接口请求函数的模块
// 返回值：promise对象
import ajax from './ajax'
// 1、根据经纬度获取位置详情
export const reqAddress = geohash=>ajax(`/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodTypes = ()=>ajax(`/index_category`)
// 3、获取商家列表
export const reqShops = (longitude,latitude)=>ajax(`/shops`,{longitude,latitude})