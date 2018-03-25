<template>
  <div class="create-monster">
    <form v-on:submit.prevent="addMonster">
      <label>
        Name:
        <input type="text" v-model="newMonster.name"/>
      </label>
      <Button>Create Monster</Button>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase'
import Button from '@/components/Button'

export default {
  name: 'CreateMonster',
  components: {
    'Button': Button
  },
  firebase () {
    return {
      monsters: firebase.database().ref('monsters')
    }
  },
  data () {
    return {
      newMonster: {
        name: ''
      }
    }
  },
  methods: {
    addMonster () {
      this.$firebaseRefs.monsters.push(this.newMonster)
      this.$router.replace('hello')
    }
  }
}
</script>
<style scoped>

</style>
