import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Framework7 Library CSS Bundle
import 'framework7/css/framework7.bundle.min.css'
// Import Framework7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle'
// // Import Framework7-Vue with all components
// import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle'
// Import Framework7-Vue, import components you need in your components
import Framework7Vue from 'framework7-vue'
// Init plugin and register all components
Framework7.use(Framework7Vue)

Vue.config.productionTip = true
Vue.use(VueAxios, axios)

// Init Vue App
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
