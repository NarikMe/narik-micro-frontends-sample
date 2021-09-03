<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <p>
     <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>

   <router-view></router-view>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
