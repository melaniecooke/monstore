<template>
  <div class="create-monster">
    <form v-on:submit.prevent="addMonster">
      <label>
        Name:
        <input type="text" v-model="newMonster.name"/>
      </label>
      <Button>Create Monster</Button>
    </form>
    <span><router-link to="/hello">Go back to main page.</router-link></span>
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
    // Add monster to firebase, but only if it's less than 46 characters and doesn't already exist.
    addMonster () {
      // Check the length of the NEW monster's name
      if (this.newMonster.name.length > 45) {
        alert('Monster names must be less than 46 characters. This one is ' + this.newMonster.name.length + '.')
      } else {
        // To check if monster name already exists, we have to check the database
        this.$firebaseRefs.monsters.once('value', s => {
          // this.$firebaseRefs.monsters is how we access the monsters database (using vuefire)
          // .once('value') listens for exactly one 'value' event from firebase
          // Retrieve all existing database entries into an array called 'monsterVals'
          const monsterVals = Object.values(s.val())
          // Put only the 'name' value of the database entries into an array called 'monsterNames'
          const monsterNames = monsterVals.map(m => m.name)
          // Check if NEW monster name already exists in monsterNames array
          if (monsterNames.includes(this.newMonster.name)) {
            alert('This monster name already exists. Please try another name.')
          // If above conditions are false then add the new monster to monsters database using .push
          // then return to main page.
          } else {
            this.$firebaseRefs.monsters.push(this.newMonster)
            this.$router.replace('hello')
          }
        })
      }
    }
  }
}
</script>
<style scoped>
  span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
  }
</style>
