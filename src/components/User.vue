<template>
    <div>
        <h2>用户模块测试</h2>
        用户：{{ userId }}
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return{
                userId: this.$route.params.userId
            }
        }
    }
</script>

<style scoped>

</style>