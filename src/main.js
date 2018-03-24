// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueFire from 'vuefire'

Vue.config.productionTip = false

Vue.use(VueFire)

let app
// Initialize Firebase
let config = {
  apiKey: 'AIzaSyAG-gMvfEY1zz598izs4b3vf1a8HoXhB70',
  authDomain: 'monstore-26d9d.firebaseapp.com',
  databaseURL: 'https://monstore-26d9d.firebaseio.com',
  projectId: 'monstore-26d9d',
  storageBucket: 'monstore-26d9d.appspot.com',
  messagingSenderId: '786970198271'
}

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
