<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <dci-button></dci-button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import KangButton from "./components/KangButton/KangButton.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    KangButton,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
