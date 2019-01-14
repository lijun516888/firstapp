var Fly=require("flyio/dist/npm/wx")
var fly=new Fly

//添加拦截器
fly.interceptors.request.use((config,promise)=>{
  //给所有请求添加自定义header
  config.headers["X-Tag"]="flyio";
  return config;
})
//配置请求基地址
fly.config.baseURL='http://127.0.0.1:8888/'
