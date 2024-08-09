<template>
  <main class="main-content">
    <div class="spacer-header"></div>
    <div class="content">
      <h1 class="title">회원가입</h1>
      <div class="description-wrapper">
        <p class="description">카카오 간편 인증이 완료되었습니다.</p>
        <p class="description">아이디 및 비밀번호를 입력하시면 회원가입이 완료됩니다.</p>
      </div>
      <hr class="divider" />
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <input
              type="text"
              id="name"
              class="form-input"
              v-model="user.kakao_account.name"
              readonly
            />
            <select class="form-input" disabled>
              <option>내국인</option>
            </select>
          </div>
          <div class="form-group">
            <input
              type="text"
              id="dob"
              class="form-input"
              v-model="user.kakao_account.birthdate"
              readonly
            />
            <select class="form-input" disabled>
              <option>{{ user.kakao_account.gender }}</option>
            </select>
          </div>
          <div class="form-group full-width">
            <input
              type="text"
              id="phone-second"
              class="form-input full-width"
              v-model="user.kakao_account.phone_number"
              readonly
            />
          </div>
          <hr class="divider" />
          <div class="form-group id-group">
            <input
              type="text"
              v-model="userInfo.id"
              class="form-input"
              placeholder="아이디 (대/소문자 반드시 확인해주세요.)"
            />
            <button class="check-button" @click="checkDuplicateId">중복확인</button>
          </div>
          <div class="form-group full-width">
            <input
              type="password"
              v-model="userInfo.password"
              class="form-input full-width"
              placeholder="8-16자: 영문, 숫자, 특수문자 포함"
              @blur="$v.userInfo.password.$touch()"
            />
            <span v-if="$v.userInfo.password.$error" class="error-message">
              <span v-if="!$v.userInfo.password.required">패스워드는 필수입니다.</span>
              <span v-if="!$v.userInfo.password.minLength">8자 이상이어야 합니다.</span>
              <span v-if="!$v.userInfo.password.maxLength">16자 이하여야 합니다.</span>
              <span v-if="!$v.userInfo.password.matches"
                >영문, 숫자, 특수문자를 포함해야 합니다.</span
              >
            </span>
          </div>
          <div class="form-group full-width">
            <input
              type="email"
              v-model="userInfo.email"
              class="form-input full-width"
              placeholder="이메일 주소"
            />
          </div>
          <div class="form-group full-width">
            <input
              type="password"
              v-model="userInfo.ssnLast"
              class="form-input full-width"
              placeholder="주민등록번호 뒷자리(7자)"
            />
          </div>
          <button :disabled="!isIdChecked || $v.$invalid" class="submit-button">가입하기</button>
        </form>
      </div>
    </div>
    <div class="spacer-footer"></div>
  </main>
</template>

<script setup>
const { user } = history.state
user.kakao_account.birthdate = (
  user.kakao_account.birthyear + user.kakao_account.birthday
).substring(2)

console.log(user)
</script>

<script>
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength, helpers } from '@vuelidate/validators'

export default {
  setup() {
    const userInfo = reactive({
      name: '',
      ssnFirst: '',
      phoneNumber: '',
      id: '',
      password: '',
      email: '',
      ssnLast: ''
    })

    const rules = {
      userInfo: {
        password: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(16),
          matches: helpers.regex(
            'matches',
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
          )
        },
        id: { required } // Add validation rule for id as well if needed
      }
    }

    const v$ = useVuelidate(rules, { userInfo })

    return { userInfo, v$ }
  },
  data() {
    return {
      isIdChecked: false
    }
  },
  methods: {
    async checkDuplicateId() {
      try {
        const response = await axios.get('http://localhost:8081/api/user/id-check', {
          params: {
            id: this.userInfo.id
          }
        })
        if (response.data.exists) {
          console.log(response.data)
          alert('아이디가 이미 존재합니다.')
          this.isIdChecked = false
        } else {
          console.log(response.data)
          alert('사용 가능한 아이디입니다.')
          this.isIdChecked = true
        }
      } catch (error) {
        console.error(error)
        alert('중복 확인 중 오류가 발생했습니다.')
        this.isIdChecked = false
      }
    }
  }
}
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
}
</style>
