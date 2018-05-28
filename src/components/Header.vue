<template>
  <header>
    <span v-on:click="goto('/hello')">MonStore</span>
    <Menu />
  </header>
</template>
<script>
import Menu from '@/components/Menu'

export default {
  name: 'Header',
  components: {
    Menu
  },
  methods: {
    goto (route) {
      this.$router.replace(route)
    }
  }
}
</script>
<style>
  header {
    height: 60px;
    background-color: #42b983;
    color: white;
    font-size: 24px;
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
  }
  span {
    cursor: pointer;
  }
</style>
