const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({id: stockId, quantity: quantity});
    }
    state.funds -= quantity * stockPrice;
  },
  'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += quantity * stockPrice;
  }
}

const actions = {
  sellStock({commit}, order){
    commit('SELL_STOCK', order);
  }
}

const getters = {
  stockPortfolio(state, getters){
    return state.stocks.map(stock => {
        const record = getters.stocks.find(element => element.id == stock.id);
        return {
          id: stock.id,
          name: record.name,
          price: record.price,
          quantity: stock.quantity
        };
      }
    );
  },
  funds(state){
    return state.funds;
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
