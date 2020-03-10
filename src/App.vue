<template>
  <div id="app">
    <index></index>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import index from './components/index'
export default {
  name: 'App',
  components: {
    index
  },
  data() {
    return {
    }
  }
}
</script>

<style>
@import './assets/css/base.css';

</style>
