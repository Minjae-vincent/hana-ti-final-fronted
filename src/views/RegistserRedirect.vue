<template>
  <main class="main-content"></main>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()

    const queryParams = route.query

    axios
      .get('http://localhost:8081/api/auth/kakao/callback?code=' + queryParams.code)
      .then((res) => {
        router.push({
          name: 'register-info',
          state: {
            user: res.data
          }
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
</script>
