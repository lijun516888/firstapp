<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper"
            :indicator-dots="indicatorDots"
            :autoplay="autoplay"
            :interval="interval"
            :duration="duration"
            @change="swiperChange">
      <block v-for="(item, index) in images" :key="index">
        <swiper-item>
          <image :src="item.url" class="slide-image" mode="aspectFill" @click="swiperClick(item.url)"/>
        </swiper-item>
      </block>
    </swiper>

    <i-card full title="品牌: 其他/other" extra="¥238.00" thumb="https://gd2.alicdn.com/imgextra/i4/671434189/O1CN014XbgjI1gobbNQXkcE_!!671434189.jpg_400x400.jpg">
      <view slot="content">ITSCLIMAX一件过冬基础款侧边无缝加厚加绒束脚裤保暖小脚休闲裤</view>
      <view slot="footer"> 海量新品 潮流穿搭 玩趣互动</view>
    </i-card>

    <i-card full title="品牌: 其他/other" extra="¥238.00" thumb="https://gd2.alicdn.com/imgextra/i4/671434189/O1CN014XbgjI1gobbNQXkcE_!!671434189.jpg_400x400.jpg">
      <view slot="content">ITSCLIMAX一件过冬基础款侧边无缝加厚加绒束脚裤保暖小脚休闲裤</view>
      <view slot="footer"> 海量新品 潮流穿搭 玩趣互动</view>
    </i-card>

    <i-card full title="品牌: 其他/other" extra="¥238.00" thumb="https://gd2.alicdn.com/imgextra/i4/671434189/O1CN014XbgjI1gobbNQXkcE_!!671434189.jpg_400x400.jpg">
      <view slot="content">ITSCLIMAX一件过冬基础款侧边无缝加厚加绒束脚裤保暖小脚休闲裤</view>
      <view slot="footer"> 海量新品 潮流穿搭 玩趣互动</view>
    </i-card>


    <i-cell-group>
      <i-cell title="基本用法">
          <i-rate
              value="1">
          </i-rate>
      </i-cell>
    </i-cell-group>

    <i-cell-group>
      <i-cell title="只显示箭头" is-link></i-cell>
      <i-cell title="跳转到首页" is-link url="/pages/dashboard/index"></i-cell>
      <i-cell title="只有 footer 点击有效" is-link url="/pages/dashboard/index" only-tap-footer></i-cell>
      <i-cell title="开关">
          <switch slot="footer" checked />
      </i-cell>
  </i-cell-group>

  <i-button bind:click="handleClick">默认按钮</i-button>
  <i-button bind:click="handleClick" type="primary" size="large">大尺寸</i-button>


        <image class="i-card-left-image" mode="aspectFill"
               url="https://gd2.alicdn.com/imgextra/i4/671434189/O1CN014XbgjI1gobbNQXkcE_!!671434189.jpg_400x400.jpg" />


  </div>
</template>



<script>
// import Swiper from '@/components/swiper'
import { fetchSwiperList } from '@/api/data'
export default {
  // components: { Swiper },
  data () {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
      images: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      // fetchSwiperList().then(result => {
      //   this.images = result
      // })
      this.images = fetchSwiperList()
    },
    swiperChange (e) {
      console.log('第' + e.mp.detail.current + '张轮播图发生了滑动')
    },
    swiperClick (url) {
      console.log('click:' + url)
    }
  }
}
</script>

<style scoped>
  .swiper {
    height: 376rpx !important;
  }
  image {
    height: 100%;
    width: 100%;
  }
  .i-card-left-warp {
    height: 500rpx;
    width: 376rpx;
  }
  .i-card-left-image {
    height: 500px;
    width: 376px;
  }
</style>
