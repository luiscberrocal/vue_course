import Vue from 'vue';

export const loadData = ({commit}) =>{
  Vue.http.get('data.json')
    .then(reponse => reponse.json())
    .then(data =>{
      if (data){
        console.log(data);
        const stocks = data.stocks;
        const stockPortfolio = data.stockPortfolio;
        const funds = data.funds;
        console.log(`Funds: ${funds}`);
        const portfolio = {
          funds: funds,
          stockPortfolio: stockPortfolio
        }
        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);

      };
    })
}
