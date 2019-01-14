const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()
const host = 'http://127.0.0.1:8090/'
// 添加拦截器
fly.interceptors.request.use((config, promise) => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  // 给所有请求添加自定义header
  config.headers = {
    'X-Tag': 'flyio',
    'content-type': 'application/json'
  }
  let authParams = {
    // 公共参数
    'categoryType': 'SaleGoodsType@sim',
    'streamNo': 'wxapp153570682909641893',
    'reqSource': 'MALL_H5',
    'appid': 'string',
    'timestamp': new Date().getTime(),
    'sign': 'string'
  }
  config.body && Object.keys(config.body).forEach((val) => {
    if (config.body[val] === '') {
      delete config.body[val]
    };
  })
  config.body = {
    ...config.body,
    ...authParams
  }
  return config
})
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading()
    return response.data// 请求成功之后将返回值返回
  },
  (err) => {
    // 请求出错，根据返回状态码判断出错原因
    console.log(err)
    wx.hideLoading()
    if (err) {
      return '请求失败'
    };
  }
)
// 配置请求基地址
fly.config.baseURL = host

export default fly
