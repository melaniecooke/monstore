<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>Monsters:</h4>
    <ul>
      <li v-for="(monster, index) in monsters" v-bind:key="index">{{monster.name}}
        <span class="delete-button" v-on:click="removeMonster(monster)">X</span>
      </li>
    </ul>
    <Button v-on:click="createMonster">New Monster</Button>
    <Button v-on:click="logout">Logout</Button>
  </div>
</template>

<script>
import firebase from 'firebase'
import Button from '@/components/Button'

export default {
  name: 'HelloWorld',
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
      msg: 'Welcome to MonStore!'
    }
  },
  methods: {
    createMonster () {
      this.$router.replace('create_monster')
    },
    removeMonster (monster) {
      this.$firebaseRefs.monsters.child(monster['.key']).remove()
    },
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.delete-button {
  color: #FF4136;
  font-size: 14px;
  font-weight: bolder;
  cursor: pointer;
  margin-left: 25px;
  user-select: none;
}
</style>
