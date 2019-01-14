<template>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item, index) in images" :key="index">
            <swiper-item>
                <image :src="item.url" class="slide-image" mode="aspectFill" />
            </swiper-item>
        </block>
    </swiper>
  <!--<swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide
      v-for="(banner, index) in images"
      :key="banner.id">
      <div class="banner-item">
        <img :src="banner.imgUrl" alt="news">
        <p>{{banner.title}}</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>-->
</template>
<script>
let vm = null
export default {
  props: {
    images: {
      type: Array
    }
  },
  data () {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
      swiperOption: {
        loop: true, // 循环滚动
        on: {
          click: function () {
            // 这里有坑，需要注意的是：this 指向的是 swpier 实例，而不是当前的 vue， 因此借助 vm，来调用 methods 里的方法
            // console.log(this); // -> Swiper
            // 当前活动块的索引，与activeIndex不同的是，在loop模式下不会将 复制的块 的数量计算在内。
            const realIndex = this.realIndex
            vm.handleClickSlide(realIndex)
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  created () {
    vm = this
  },
  methods: {
    handleClickSlide (index) {
      console.log('当前点击索引：', index)
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
</style>
