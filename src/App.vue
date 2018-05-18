<template>
  <div id="app">
    <Navbar></Navbar>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
export default {
  name: 'App',
  components: {
    'navbar': navbar
  }
}
</script>

<style>

</style>
