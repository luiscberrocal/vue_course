<template>
  <div>
    <h1>Trade or View your portfolio</h1>
      <h6>Play the game</h6>
    <hr>
    <p>Your funds: {{funds | currency}}</p>
  </div>

</template>

<script>

  export default {
    computed:{
      funds(){
        return this.$store.getters.funds;
      }
    },
    name: "Home",

  }
</script>

<style scoped>

</style>
