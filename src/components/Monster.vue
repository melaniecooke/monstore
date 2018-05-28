<template>
  <div class="monster">
    {{monster.name}}
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Monster',
  firebase () {
    return {
      monster: {
        source: firebase.database().ref('monsters').child(this.$route.params.id),
        asObject: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .monster {

  }
</style>
