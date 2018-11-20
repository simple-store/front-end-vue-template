import Vue from 'vue';
import App from './common/App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './common/css/base.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
