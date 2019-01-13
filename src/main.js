import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这部分相当于原生小程序的 app.json
  config: {
    'pages': ['^pages/index/main', 'pages/logs/main', 'pages/counter/main'],
    'window': {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#fff',
      'navigationBarTitleText': '小欧家美衣VIP',
      'navigationBarTextStyle': 'black',
      'backgroundColor': '#F2f2f2',
      'enablePullDownRefresh': true
    },
    'tabBar': {
      'color': '#a9b7b7',
      'selectedColor': '#11cd6e',
      'borderStyle': 'white',
      'backgroundColor': '#292929',
      'list': [
        {
          'selectedIconPath': '/static/images/index-select.png',
          'iconPath': '/static/images/index.png',
          'pagePath': 'pages/index/main',
          'text': '商城'
        },
        {
          'selectedIconPath': '/static/images/index.png',
          'iconPath': '/static/images/index.png',
          'pagePath': 'pages/index/main',
          'text': '团购'
        },
        {
          'selectedIconPath': '/static/images/index.png',
          'iconPath': '/static/images/index.png',
          'pagePath': 'pages/index/main',
          'text': '秒杀'
        },
        {
          'selectedIconPath': '/static/images/index.png',
          'iconPath': '/static/images/index.png',
          'pagePath': 'pages/index/main',
          'text': '我的'
        }
      ]
    }
  }
}
