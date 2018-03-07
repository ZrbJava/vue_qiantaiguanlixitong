<template>
    <div>
        <!-- 面包屑导航 -->
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link to="">首页</router-link>
                <router-link to="">购物商城</router-link>
            </div>
        </div>

        <!-- 页面头部 - 分类列表与轮播图 -->
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">

                    <!--类别菜单-->
                    <div class="left-220" style="margin:0;">
                        <div class="banner-nav">
                            <ul>
                                <li v-for="item in top.catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{ item.title }}</span>
                                        <p>
                                            <span v-for="subitem in item.subcates" :key="subitem.id">{{ subitem.title }}&nbsp;</span>
                                        </p>
                                    </h3>

                                    <!-- 鼠标填出层 -->
                                    <div class="item-box">
                                        <dl>
                                            <dt><a href="/goods/40.html">{{ item.title }}</a></dt>
                                            <dd>
                                                <router-link to="" v-for="subitem in item.subcates" :key="subitem.id">{{ subitem.title }}&nbsp;</router-link>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--/类别菜单-->
                    
                    <!--幻灯片-->
                    <div class="left-705">
                        <div class="banner-img">
                            <el-carousel style="height: 100%">
                                <el-carousel-item v-for="item in top.sliderlist" :key="item.id">
                                    <img :src="item.img_url" :alt="item.title">
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                    <!--/幻灯片-->
                    
                    <!-- 侧边栏 - 推荐商品列表, 抽取为公共组件 -->
                    <app-aside :list="top.toplist"></app-aside>
                </div>
            </div>
        </div>

        <!-- 页面主体 - 商品列表预览, 抽取为子组件 -->
        <list-main></list-main>
    </div>
</template>

<script>
    import AppAside from './subcom/CommonAside.vue';
    import ListMain from './subcom/ListMain.vue';

    export default {
        components: {
            AppAside,
            ListMain
        },

        data() {
            return {
                top: {
                    catelist: [],
                    sliderlist: [],
                    toplist: []
                }
            }
        },

        methods: {

            // 获取页面顶部数据
            getTop() {
                this.$http.get(this.$api.goodsTop).then(res => {
                    if(res.data.status == 0) {
                        this.top = res.data.message;
                    }
                })
            }
        },

        created() {
            this.getTop();
        }
    }
</script>

<style scoped>

</style>