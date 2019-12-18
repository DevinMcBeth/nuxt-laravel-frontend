<template>
  <div class="container">
    <h2>Latest Topics</h2>

    <div
      v-for="(topic, index) in topics"
      :key="index"
      class="bg-light mt-5 mb-5"
      style="padding: 20px;"
    >
      <h3>
        <nuxt-link :to="{ name: 'topics-id', params: { id: topic.id } }">
          {{ topic.title }}
        </nuxt-link>
      </h3>

      <div v-if="authenticated">
        <div v-if="user.id === topic.user.id">
          <button
            @click="deleteTopic(topic.id)"
            class="btn btn-outline-danger fa fa-trash fa-2x pull-right"
          ></button>
          <nuxt-link :to="{ name: 'topics-edit', params: { id: topic.id } }">
            <button
              class="btn btn-outline-success fa fa-edit fa-2x pull-right"
            ></button>
          </nuxt-link>
        </div>
      </div>

      <p class="text-muted">{{ topic.created_at }} by {{ topic.user.name }}</p>

      <div
        v-for="(content, key) in topic.posts"
        :key="key"
        class="ml-5 content"
      >
        {{ content.body }}
        <p class="text-muted">
          {{ content.created_at }} by {{ content.user.name }}
        </p>
      </div>
    </div>
    <nav>
      <ul class="pagination justify-content-center">
        <li v-for="(key, value) in links" class="page-item">
          <a @click="loadMore(key)" href="#" class="page-link">
            {{ value }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [],
      links: []
    }
  },

  async asyncData({ $axios }) {
    const { data, links } = await $axios.$get('/topics')
    return { topics: data, links }
  },

  methods: {
    async loadMore(key) {
      if (!key) return
      const { data } = await this.$axios.$get(key)
      return (this.topics = { ...this.topics, ...data })
    },

    async deleteTopic(id) {
      await this.$axios.$delete(`/topics/${id}`)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.content {
  border-left: 10px solid white;
  padding: 0 10px;
}
.btn-outline-success,
.btn-outline-danger {
  border: none;
}
</style>
