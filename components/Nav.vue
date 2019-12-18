<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <nuxt-link class="navbar-brand" to="/">
      Frontend
    </nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">
            Home
          </nuxt-link>
        </li>
        <template v-if="authenticated">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard">
              Create Topics
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/topics">
              Topics
            </nuxt-link>
          </li>
        </template>
      </ul>
      <template v-if="!authenticated">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">
              Login
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">
              Register
            </nuxt-link>
          </li>
        </ul>
      </template>
      <template v-else>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link">{{ user.name }}</a>
          </li>
          <li class="nav-item">
            <a @click.prevent="logout" class="nav-link">
              Logout
            </a>
          </li>
        </ul>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>
