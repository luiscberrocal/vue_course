<template>
  <div class="col-sm-6 col-md-4 col-xs-12">
    <div class="card">
      <h5 class="card-header">{{ stock.name }}
        <small>{{stock.price}}</small>
      </h5>
      <div class="card-body">
        <div class="float-md-left float-xs-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="float-md-right float-xs-right">
          <button class="btn btn-success"
                  @click="buyStock"
                  :disabled="allowBuy">Buy
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
    computed: {
      allowBuy() {
        let isDecimal = !this.isInt(this.quantity);
        let isNegative = this.quantity <= 0;
        let disabled = isDecimal || isNegative;
        // console.log(`Decimal: ${isDecimal}`);
        // console.log(`Negative: ${isNegative}`);
        // console.log(`Disabled: ${disabled}`);
        return disabled;
      },
    },
    methods: {
      isInt(n) {
        return n % 1 === 0;
      },
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        console.log(order);
        this.quantity = 0;

      }
    },
    name: "Stock"
  }
</script>

<style scoped>

</style>
