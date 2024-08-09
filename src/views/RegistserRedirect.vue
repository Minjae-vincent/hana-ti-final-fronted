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
        if (res.status !== 200) {
          console.log(res)
          alert('카카오 로그인에 실패했습니다.')
          router.push({ name: 'login' })
        } else {
          router.push({
            name: 'register-info',
            state: {
              user: res.data
            }
          })
        }
      })
      .catch((err) => {
        if (err.response.status === 500) {
          alert('내부 서버 에러입니다. 관리자에게 문의 바랍니다.')
          router.push({ name: 'login' })
        } else if (err.response.status === 409) {
          alert('이미 가입된 계정입니다. \n로그인 페이지로 이동합니다.')
          router.push({ name: 'login' })
        } else {
          console.log(err)
          alert('내부 서버 에러입니다. 관리자에게 문의 바랍니다..')
          router.push({ name: 'home' })
        }
      })
  }
}
</script>
