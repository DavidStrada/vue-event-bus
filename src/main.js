// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import CommandBus from './bus/CommandBus'

Vue.config.productionTip = false

let bus = new Vue()
window.bus = bus || {}

CommandBus(bus)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
