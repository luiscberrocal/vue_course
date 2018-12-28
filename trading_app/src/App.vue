<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <stock-header></stock-header>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      stockHeader: Header
    },
    name: 'App'
  }
</script>

<style>
  body {
    padding: 30px;
  }
  /*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }*/
</style>
