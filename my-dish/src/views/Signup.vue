<template>
  <div class="Signup">
    <h1>新しいアカウントを作成</h1>
    <table>
      <tr>
        <td><input type="text" placeholder="ユーザー名" v-model="name" /></td>
      </tr>
      <tr>
        <td>
          <input type="text" placeholder="メールアドレス" v-model="email" />
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" placeholder="パスワード" v-model="password" />
        </td>
      </tr>
    </table>

    <button @click="signUp" class="link-signup">ユーザー登録</button>
    <router-link class="link-signin" to="/signin"
      >ログインはこちらから</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      likeId: ''
    }
  },
  methods: {
    signUp () {
      this.$store.dispatch('signUp', {
        name: this.name,
        email: this.email,
        passward: this.password,
        likeId: this.likeId
      })
    }
  }
}
</script>
