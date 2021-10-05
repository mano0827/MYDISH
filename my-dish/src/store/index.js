import { createStore } from 'vuex'
import firebase from 'firebase'
import router from '@/router'

export default createStore({
  state: {
    user: {
      name: '',
      email: '',
      password: '',
      likeId: ''
    },
    users: []
  },
  getters: {
    name (state) {
      return state.user.name
    },
    email (state) {
      return state.user.email
    },
    password (state) {
      return state.user.password
    },
    likeId (state) {
      return state.user.likeId
    },
    users (state) {
      return state.users
    }
  },
  mutations: {
    setUser (state, payloade) {
      state.user.name = payloade.neme
      state.user.email = payloade.email
      state.user.passward = payloade.passward
    }
  },
  actions: {
    signUp (context, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          const user = firebase.auth().currentUser
            .then(() => {
              const db = firebase.firestore()
              db.collection('users').doc(user.uid).set({
                uid: payload.uid,
                name: payload.name,
                password: payload.passward,
                email: payload.email
              })
            })
            .then(() => {
              context.commit('setUser', payload)
            })
            .then(() => {
              router.push('/home')
            })
        })
    }
  },
  modules: {
  }
})
