<template>
    <div>
        <h2>个人档案</h2>
        测试query传值
        <br>
        姓名：{{$route.query.name}}
        <br>
        年龄：{{$route.query.age}}
    </div>
</template>

<script>
    export default {
        name: "Profile",

        created() {
            console.log("Profile created");
        },
        destroyed() {
            console.log("Profile destoryed");
        }
    }
</script>

<style scoped>

</style>