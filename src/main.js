import Vue from 'vue';
import MintUI from 'mint-ui';
import Vant from 'vant';
import FastClick from 'fastclick';
import VueI18n from 'vue-i18n';
import router from './router';
import store from './store';
import components from './components';
import filters from './filters';
import directs from './directive';
import App from './App';
import { spread, browser } from './utils';

if (window.htp.mock) {
  require('./mock');
}

Vue.use(MintUI);
Vue.use(Vant);
Vue.use(VueI18n);

Vue.prototype.toast = MintUI.Toast;

Vue.prototype.spread = spread;

if ('addEventListener' in document) {
  document.addEventListener(
    'fastclick',
    () => {
      FastClick.attach(document.body);
    },
    false
  );
}

Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, v => v.toUpperCase());
  Vue.component(`v${name}`, components[key]);
});

if (location.href.indexOf('from=wechat') == -1) {
  if (location.href.split('#')[0].indexOf('?') == -1) {
    window.location.href = location.href.split('#')[0] + '?from=wechat#' + location.href.split('#')[1];
  } else {
    window.location.href = location.href.split('#')[0] + '&from=wechat#' + location.href.split('#')[1];
  }
}

new Vue({
  data: {
    eventHub: new Vue() //事件中心
  },
  store,
  router,
  render: h => h(App)
}).$mount('#app');
