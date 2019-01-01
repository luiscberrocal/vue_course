<template>
  <div class="col-sm-6 col-md-4 col-xs-12">
    <div class="card">
      <h5 class="card-header">{{ stock.name }}
        <small>Price: {{stock.price}} | Quantiy: {{stock.quantity}}</small>
      </h5>
      <div class="card-body">
        <div class="float-md-left float-xs-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="float-md-right float-xs-right">
          <button class="btn btn-success"
                  @click="sellStock"
                  :disabled="disableSell">Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      stock: {
        type: Object
      },
    },
    data() {
      return {
        quantity: 0
      }
    },
    computed:{
      disableSell(){
        return false;
      }
    },
    methods: {
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('sellStock', order);
      }
    },
    name: "Stock"
  }
</script>

<style scoped>

</style>
