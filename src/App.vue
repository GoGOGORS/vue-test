<template>
  <div id="app">
    <!--

        &lt;!&ndash;tag表示浏览器解析之后的标签是什么，默认是a标签&ndash;&gt;
        &lt;!&ndash;active-class="active"&ndash;&gt;
        <router-link to="/home" tag="button" replace >首页</router-link>

        &lt;!&ndash;replace 禁止浏览器返回&ndash;&gt;
        &lt;!&ndash;active-class="active"&ndash;&gt;
        <router-link to="/about" replace >关于</router-link>
    -->

    <!--<button @click="indexClick">首页</button>
    <button @click="aboutClick">关于</button>-->


    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path: '/profile', query: {name: 'abc', age: 25}}">档案</router-link>

    <keep-alive exclude="Profile,user">
      <router-view/>
    </keep-alive>
  </div>
</template>



<style>
  .router-link-active{
    color: red;
  }

  .active{
    color: blue;
  }
</style>
<script>
  export default {
    name: 'App',
    data(){
      return{
        userId: 'ruixiang'
      }
    },

    methods: {
      indexClick(){
        this.$router.push('/home')
        console.log("首页")
      },

      aboutClick(){
        this.$router.replace('/about')
        console.log("关于")
      }

    }

  }

</script>