import Vue from 'vue'
import Router from 'vue-router'

// 导入账户管理相关页面
import Login from '../components/account/login/Login';

// 导入商城相关页面
import Shop from '../components/shop/Shop';
import GoodsList from '../components/shop/goods/List';
import GoodsDetail from '../components/shop/goods/Detail';
import Shopcart from '../components/shop/shopcart/Shopcart';
import OrderSite from '../components/shop/order/Site';
import OrderPay from '../components/shop/order/Pay';
import OrderComplete from '../components/shop/order/Complete';

Vue.use(Router)

let goods = [
  { name: 'goodsList', path: 'goods/list', component: GoodsList },
  { name: 'goodsDetail', path: 'goods/detail/:id', component: GoodsDetail }
];

let shopcart = [
  { name: 'shopcart', path: 'shopcart', component: Shopcart },
];

let order = [ 
  { name: 'orderSite', path: 'order/site/:ids', component: OrderSite }, // 需要知道哪些商品要下单
  { name: 'orderPay', path: 'order/pay/:id', component: OrderPay }, // 需要知道订单ID才能付款
  { name: 'orderComplete', path: 'order/complete', component: OrderComplete }
];

export default new Router({
  routes: [

    // 账户管理路由配置
    { name: 'login', path: '/login', component: Login },

    // 商城路由配置
    { name: 'shop', path: '/', component: Shop, children: [ ...goods, ...shopcart, ...order ] },
  ]
})
