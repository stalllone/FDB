import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import routerConfig from "./router.config"
import fastclick from "fastclick"
import VueLazyLoad from "vue-lazyload"
import axios from "axios"
import store from "./store"

Vue.config.productionTip=false

Vue.use(VueRouter);
Vue.use(VueLazyLoad,{
	loading:require('./assets/loading.gif')
})

fastclick.attach(document.body);

Vue.prototype.$http = axios

const router=new VueRouter({
	// mode: 'history', //切换路径模式，变成history模式
    // scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes:routerConfig
});



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
