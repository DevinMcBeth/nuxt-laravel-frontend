<template>
  <div class="container col-md-6 mt-5">
    <h2>Login</h2>
    <br />
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Email address</label>
        <input
          v-model.trim="form.email"
          type="email"
          class="form-control"
          autofocus
        />
        <small v-if="errors.email" class="form-text text-danger">{{
          errors.email[0]
        }}</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          v-model.trim="form.password"
          type="password"
          class="form-control"
        />
        <small v-if="errors.password" class="form-text text-danger">{{
          errors.password[0]
        }}</small>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <br />
    <p>Dont have an account? <nuxt-link to="/register">Register</nuxt-link></p>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  auth: 'guest',

  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async submit() {
      try {
        await this.$auth.loginWith('local', {
          data: this.form
        })

        this.$router.push({
          path: this.$route.query.redirect || '/'
        })
      } catch (error) {
        this.handleError(error)
      }
    }
  }
}
</script>
