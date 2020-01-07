/**
 * 包含多个基于state的多个getter计算属性的对象
 */
export default{
    totalCount(state){
        return state.cartFoods.reduce((preTotal,food)=>preTotal+food.count,0)
    },
    
    totalPrice(){
        return state.cartFoods.reduce((preTotal,food)=>preTotal+food.count*food.price,0)
    }
}