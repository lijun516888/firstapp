import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    usingComponents: {
      'i-card': '../../../static/iview/card/index',
      'i-cell-group': '../../../static/cell-group/index',
      'i-cell': '../../../static/cell/index',
      'i-load-more': '../../../static/load-more/index',
      'i-button': '../../../static/button/index'
    }
  }
}
