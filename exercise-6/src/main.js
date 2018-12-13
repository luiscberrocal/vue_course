import Vue from 'vue'
import App from './App.vue'
import ServerFooter from './ServerFooter.vue'

Vue.component('server-footer', ServerFooter)
new Vue({
    el: '#app',
    render: h => h(App)
})
