import request from '@/utils/request'

export function fetchSwiperList () {
  return request.request({
    method: 'post',
    url: '/sword/getIndexImages',
    body: {}
  })
  // return [
  //   {url: 'https://img.alicdn.com/tps/i4/TB17YNaArrpK1RjSZTESuwWAVXa.jpg_1080x1800Q90s50.jpg'},
  //   {url: 'https://aecpm.alicdn.com/simba/img/TB1xuyJBjTpK1RjSZKPSuu3UpXa.jpg'},
  //   {url: 'https://img.alicdn.com/tps/i4/TB1jJ3SAVzqK1RjSZFvSuwB7VXa.jpg_1080x1800Q90s50.jpg'},
  //   {url: 'https://img.alicdn.com/tfs/TB1gVLZAAvoK1RjSZPfXXXPKFXa-990-360.jpg_1080x1800Q90s50.jpg'}]
}
