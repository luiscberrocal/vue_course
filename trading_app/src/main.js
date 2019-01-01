// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store';

import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-trading-app-43166.firebaseio.com/';
//Vue.http.options.root = 'https://vue-trading-app-43166.firebaseapp.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
