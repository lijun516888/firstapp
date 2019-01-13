<template>
  <div>
    <Swiper :images="images" />
    <i-card full title="卡片标题" extra="100$" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
    <i-card full title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
    </i-card>
    <i-card full title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
    <i-card full title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
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

  </div>
</template>~  

<script>
import Swiper from '@/components/swiper'
import { fetchSwiperList } from '@/api/data'
export default {
  components: { Swiper },
  data () {
    return {
      images: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.images = fetchSwiperList()
    }
  }
}
</script>

<style scoped>

</style>
