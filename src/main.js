import Vue from 'vue'
import Ps from 'perfect-scrollbar'
import ElementUI from 'element-ui'
import 'perfect-scrollbar/dist/css/perfect-scrollbar.min.css'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
Vue.use(ElementUI)
new Vue({
    el : '#app',
    render : h => h(App)
})
let todoList = document.getElementById('todoList');
Ps.initialize(todoList);
