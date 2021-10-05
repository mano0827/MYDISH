import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAXMfPaESnJ2J77CVLOTfHAP42BJS5zGkM',
  authDomain: 'mydish-57e10.firebaseapp.com',
  projectId: 'mydish-57e10',
  storageBucket: 'mydish-57e10.appspot.com',
  messagingSenderId: '334763108102',
  appId: '1:334763108102:web:209166248793a30a86e087',
  measurementId: 'G-YLK6KH35BV'
}

firebase.initializeApp(config)

createApp(App).use(store).use(router).mount('#app')
