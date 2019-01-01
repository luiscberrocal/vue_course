<template>
  <div class="col-sm-6 col-md-4 col-xs-12">
    <div class="card">
      <h5 class="card-header text-white bg-primary">{{ stock.name }}
        <small>Price: {{stock.price}} | Quantiy: {{stock.quantity}}</small>
      </h5>
      <div class="card-body">
        <div class="float-md-left float-xs-left">
          <input type="number" class="form-control" placeholder="Quantity"
                 v-model="quantity" @focus="$event.target.select()"
                 :class="{'danger': insufficientQuantity}">
        </div>
        <div class="float-md-right float-xs-right">
          <button class="btn btn-success"
                  @click="sellStock"
                  :disabled="insufficientQuantity|| disableSell">{{insufficientQuantity ? 'Not enough': 'Sell'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import ComponentMxin from '../mixins'

  export default {
    mixins: [ComponentMxin],
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
      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      },
      disableSell() {
        let isDecimal = !this.isInt(this.quantity);
        let isNegative = this.quantity <= 0;
        let disabled = isDecimal || isNegative;

        console.log('------------------------------');
        console.log(`Quantity: ${this.quantity}`)
        console.log(`Stocks: ${this.stock.quantity}`)
        console.log(`Decimal: ${isDecimal}`);
        console.log(`Negative: ${isNegative}`);
        console.log('------------------------------');
        console.log(`Disabled: ${disabled}`);
        console.log('==============================');

        return disabled;
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        //this.$store.dispatch('sellStock', order);
        this.placeSellOrder(order);
        this.quantity = 0;
      }
    },
    name: "Stock"
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
