<template>
  <div class="container">
    <h2>Update Topic Title</h2>

    <form @submit.prevent="update">
      <div class="form-group mt-5">
        <input v-model="topic.title" type="text" class="form-control" />
        <small v-if="errors.title" class="form-text text-fanger">
          {{ errors.title[0] }}
        </small>
      </div>
      <button class="btn btn-outline-success">Update</button>
    </form>
    <nuxt-link to="/topics">
      <p class="mt-5 btn btn-outline-warning">
        Back to topics
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topic: {
        title: ''
      }
    }
  },

  async asyncData({ $axios, params }) {
    const { topic } = await $axios.$get(`/topics/${params.id}`)
    return { topic }
  },

  methods: {
    async update() {
      await this.$axios.patch(`/topics/${this.$route.params.id}`, this.topic)
      this.$router.push('/topics')
    }
  }
}
</script>
