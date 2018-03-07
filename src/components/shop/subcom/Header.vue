<template>
    <div id="header" class="header">
        <div class="head-top">
            <div class="section">
                <div class="left-box">
                    <span>vue2.0单页应用</span>
                    <a target="_blank" href="#"></a>
                    <a target="_blank" href="#"></a>
                </div>
                <div id="menu" class="right-box">
                    <a href="/login.html">登录</a>
                    <a href="/register.html">注册</a>
                    <strong>|</strong>
                    <a><i class="iconfont icon-phone"></i>联系我们</a>
                    <router-link :to="{ name: 'shopcart' }">
                        <i class="iconfont icon-cart"></i>
                        <span>购物车(100)</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>