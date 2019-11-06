<template>
    <div>
        <h2>我是首页</h2>
        <p>我是首页内容</p>

        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return{
                path: '/home/news'
            }
        },
        created() {
            console.log('Home created');
            // this.$router.push(this.path)
        },
        destroyed() {
            console.log('Home destroyed');
        },
        //组件处于活跃时被调用
        activated() {
            this.$router.push(this.path)
        },
        //组件处于不活跃时调用
        deactivated() {
        },

        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`

            console.log(this.$route.path)
            this.path = this.$route.path
            next()
        }

    }
</script>

<style scoped>

</style>