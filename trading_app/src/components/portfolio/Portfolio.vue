<template>
  <div class="row">
    <portfolio-stock v-for="stock in stocks" :stock="stock"></portfolio-stock>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Stock from './Stock.vue';

  export default {
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      }),
    },
    components: {
      portfolioStock: Stock
    },
    name: "Portfolio"
  }
</script>

<style scoped>

</style>
