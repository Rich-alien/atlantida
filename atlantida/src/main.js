import Vue from 'vue'
import App from './App.vue'
import About from './components/aboutUs.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(About),
}).$mount('#about')
