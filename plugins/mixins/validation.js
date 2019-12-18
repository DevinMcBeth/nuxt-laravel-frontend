import Vue from 'vue'
import { mapGetters } from 'vuex'

const Validation = {
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          errors: 'validation/errors'
        })
      },

      methods: {
        handleError(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2XX
            console.log(error.response.status, error.response.data)
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in browser and
            // an instance of http.ClientRequest in node.js
            console.log(error.request)
          } else {
            // Something happend in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
        }
      }
    })
  }
}

Vue.use(Validation)
