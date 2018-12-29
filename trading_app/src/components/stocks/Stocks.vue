<template>
  <div class="row">
    <app-stock v-for="stock in stocks"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    data() {
      return {
        stocks: [
          {id: 1, name: 'BMW', price: 110.00},
          {id: 2, name: 'RHAT', price: 330.00},
          {id: 3, name: 'AUDI', price: 33.00},
          {id: 4, name: 'TYT', price: 540.00},
        ]
      }
    },
    components: {
      appStock: Stock
    },
    name: "Stocks"
  }
</script>

<style scoped>

</style>
