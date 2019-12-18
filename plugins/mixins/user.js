import Vue from 'vue'

const User = {
  install(Vue, options) {
    Vue.mixin({
      computed: {
        user() {
          return this.$auth.user
        },
        authenticated() {
          return this.$auth.loggedIn
        }
      }
    })
  }
}

Vue.use(User)
