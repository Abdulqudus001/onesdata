import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Register all base components globally

const req = require.context('./components/Base', true, /\.(js|vue)$/i);
req.keys().map(key => {
  const name = key.match(/\w+/)[0];
  return Vue.component(name, req(key).default)
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
