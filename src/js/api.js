// 导出域名
// export const domain = 'http://172.16.2.23:9095/';
export const domain = 'http://127.0.0.1:8899/';

// 默认导出整个接口配置
export default {
    // 账号管理
    login: `/site/account/login`,                           // 登陆
    logout: `/site/account/logout`,                         // 退出
    isLogin: `/site/account/islogin`,                       // 是否已登陆
    register: `/site/account/register`,                     // 注册
    checkuser: `/site/account/checkuser/`,                  // 用户名是否占用, 需要参数: username

    // 非商品数据
    pageTop: `/site/article/getsildtophot/`,                // 获取指定页面顶部数据, 需要参数: tablename
    pageContent: `/site/article/getarticles/`,              // 获取指定页面列表数据, 需要参数: tablename
    pageCategoty: `/site/article/getartlist/`,              // 获取指定分类列表数据, 需要参数: tablename/cateID
    pageDetail: ` /site/article/getartdetial/`,             // 获取文章详情, 需要参数: tablename/artID

    // 商品数据
    goodsTop: `/site/goods/gettopdata/goods`,                // 获取商品顶部数据
    goodsContent: `/site/goods/getgoodsgroup`,               // 获取商品列表数据
    goodsCategoty: `/site/goods/getgoodsbycateid/`,          // 获取指定分类商品列表数据, 需要参数: cateID, 需要查询: pageIndex 与 pageSize
    goodsDetail: `/site/goods/getgoodsinfo/`,                // 获取商品详情, 需要参数: goodsID

    // 评论功能
    comment: `/site/validate/comment/post/`,                 // 发表评论, 需要参数: tablename/artID
    commentList: `/site/comment/getbypage/`,                 // 获取评论, 需要参数: artID, 需要查询: pageIndex 与 pageSize

    // 购物车数据
    shopcartGoods: `/site/comment/getshopcargoods/`,        // 获取购物车商品数据, 需要参数: goodsIDS

    // 订单数据
    orderList: ` /site/validate/order/getgoodslist/`,        // 获取订单商品列表数据, 需要参数: goodsIDS
    orderSubmit: `/site/validate/order/setorder`,            // 订单提交
    order: `/site/validate/order/getorder/`,                  // 获取订单信息, 需要参数orderID
    orderPay: `/site/validate/order/pay/`,                   // 订单支付, 需要查询: orderID
    orderHistory: `/site/validate/order/userorderlist`,      // 获取历史订单列表, 需要查询: pageIndex 与 pageSize
    orderDetail: ` /site/validate/order/getorderdetial/`,    // 获取订单详情, 需要查询: orderID
    orderCancel: `/site/validate/order/cancelorder/`,        // 取消订单, 需要查询: orderID
    orderComplete: `/site/validate/order/complate/`,         // 确认收获, 需要查询: orderID
};