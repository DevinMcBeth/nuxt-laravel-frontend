<template>
  <div class="container">
    <h2>Update Post Body</h2>

    <form @submit.prevent="update">
      <div class="form-group mt-5">
        <textarea v-model="post.body" class="form-control" rows="5"></textarea>
        <small v-if="errors.body" class="form-text text-fanger">
          {{ errors.body[0] }}
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
      post: {
        body: ''
      }
    }
  },

  async asyncData({ $axios, params }) {
    const { post } = await $axios.$get(
      `/topics/${params.topicId}/posts/${params.postId}`
    )
    return { post }
  },

  methods: {
    async update() {
      await this.$axios.patch(
        `/topics/${this.$route.params.topicId}/posts/${this.$route.params.postId}`,
        this.post
      )
      this.$router.push({
        name: 'topics-id',
        params: { id: this.$route.params.topicId }
      })
    }
  }
}
</script>
