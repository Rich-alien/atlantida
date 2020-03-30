import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Blog from './components/blog/blog.vue'

// import styles from '../css/font.css';
// import 'typeface-roboto/index.css'
Vue.config.productionTip = false
// Vue.use(VueRouter);
// var router = new VueRouter({
//   // routes: [
//   //   {patch: '/blog', component: Blog},
//   // ]
// });
new Vue({
  router,
  render: h => h(App),
  // router:router
}).$mount('#app')

