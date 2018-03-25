<template>
  <button v-on:click="onClick" class="Button">
    <slot />
  </button>
</template>
<script>
export default {
  methods: {
    onClick () {
      this.$emit('click', this)
    }
  }
}
</script>
<style scoped>
  button.Button {
    padding: 10px 20px;
    background: #42b983;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 22px;
    outline: 0;
    cursor: pointer;
  }
</style>
