<template>
  <div class="tab-bar-item" @click="handTab">
    <div v-if="!tabBarActive"><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-active'></slot></div>
    <div :style="tabBarImgShow"><slot name='item-text'></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  computed: {
    tabBarActive () {
      return this.$route.path.includes(this.path) == 1
    },
    tabBarImgShow () {
      return this.tabBarActive ? {color: this.nameColor} : {}
    }
  },
  props: {
    path: String,
    nameColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    handTab () {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scope>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
/* .tab-bar-imgShow{
  color: red;
} */
</style>