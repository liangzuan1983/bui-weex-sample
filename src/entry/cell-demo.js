import App from '../views/example/cell-demo.vue'
import buiweex from 'bui-weex'

Vue.use(buiweex);

App.el = '#root'

new Vue(App)