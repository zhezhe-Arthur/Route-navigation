<template>
  <div>
    <Tab-bar>
      <Tab-bar-item path='/home'> <!-- 使用nameColor设置字体颜色 -->
        <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </Tab-bar-item>
      <Tab-bar-item path='/category'>
        <img slot="item-icon" src="../assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </Tab-bar-item>
      <Tab-bar-item path='/cart'>
        <img slot="item-icon" src="../assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </Tab-bar-item>
      <Tab-bar-item path='/profile'>
        <img slot="item-icon" src="../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </Tab-bar-item>
    </Tab-bar>
  </div>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
  name: 'index',
    components: {
      TabBar,
      TabBarItem
  },
  
}
</script>