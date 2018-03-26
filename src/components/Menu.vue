<template>
  <div>
    <div v-on:click="toggleMenu" class="hamburger">
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>
    <div v-bind:class="{menu: true, active: isActive}">
      <div class="item" v-on:click="goto('hello')">Home</div>
      <div class="item" v-on:click="goto('monsters')">Monsters</div>
      <div class="item" v-on:click="goto('lists')">My Lists</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    },
    goto (route) {
      this.$router.replace(route)
    }
  }
}
</script>
<style lang="scss">
  .hamburger {
    cursor: pointer;
    height: 25px;
    width: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .bar {
    background-color: white;
    height: 5px;
    width: 100%;
  }
  .menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 60px;
    right: 0;
    height: calc(100vh - 60px);
    width: 0;
    transition: width 0.5s;
    background-color: #42b983;
  }
  .menu.active {
    width: 200px;
  }
  .item {
    user-select: none;
    cursor: pointer;
    line-height: 50px;
    color: white;
    font-size: 24px;
    font-weight: bolder;
    width: 100%;
    text-align: center;
    white-space: nowrap;
  }
  .item:hover {
    background-color: lighten(#42b983, 10%);
  }
</style>
