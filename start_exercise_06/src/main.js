import Vue from 'vue'
import App from './App.vue'
import ServerDetails from './ServerDetails.vue'
import ServerFooter from './ServerFooter.vue'
import ServerHeader from './ServerHeader.vue'
import Servers from './Servers.vue'
import Server from './Server.vue'

Vue.component('server-header', ServerHeader)
Vue.component('server-footer', ServerFooter)
Vue.component('server-details', ServerDetails)
Vue.component('servers', Servers)
Vue.component('server', Server)

export const eventBus = new Vue()

new Vue({
    el: '#app',
    render: h => h(App)
})
