export default function({ $axios, store }) {
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 422) {
      store.dispatch('validation/setErrors', error.response.data.errors)
    }
  })

  $axios.onRequest(config => {
    console.log(`Making request to ${config.url}`)
    store.dispatch('validation/clearErrors')
  })
}
