import Vue from 'vue'
import App from './App.vue'
import Employees from './components/Employees.vue'

Vue.component('employees', Employees)
new Vue({
  el: '#app',
  render: h => h(App),
})
