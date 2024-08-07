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
        <div class="form-group">
          <input type="text" id="name" class="form-input" value="홍길동" readonly />
          <select class="form-input" disabled>
            <option>내국인</option>
          </select>
        </div>
        <div class="form-group">
          <input type="text" id="dob" class="form-input" value="980503" readonly />
          <select class="form-input" disabled>
            <option>남성</option>
          </select>
        </div>
        <div class="form-group">
          <input type="text" id="phone" class="form-input" value="010" readonly />
          <input type="text" id="phone-second" class="form-input" value="40353313" readonly />
        </div>
        <hr class="divider" />
        <div class="form-group id-group">
          <input
            type="text"
            id="id"
            class="form-input"
            placeholder="아이디 (대/소문자 반드시 확인해주세요.)"
          />
          <button class="check-button">중복확인</button>
        </div>
        <div class="form-group full-width">
          <input
            type="password"
            id="password"
            class="form-input full-width"
            placeholder="8-16자: 영문, 숫자, 특수문자 포함"
          />
        </div>
        <div class="form-group full-width">
          <input type="email" id="email" class="form-input full-width" placeholder="이메일 주소" />
        </div>
        <button class="submit-button">가입하기</button>
      </div>
    </div>
    <div class="spacer-footer"></div>
  </main>
</template>

<script setup></script>

<style scoped>
@font-face {
  font-family: 'Hana2-Bold';
  src: url('@/assets/fonts/Hana2-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Hana2-Light';
  src: url('@/assets/fonts/Hana2-Light.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.spacer-header {
  height: 103px;
}

.spacer-footer {
  height: 70px;
}

.main-content {
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
}

.title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Hana2-Bold', sans-serif;
}

.description-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
}

.description {
  margin: 0;
  font-size: 18px;
  font-family: 'Hana2-Light', sans-serif;
  width: 750px;
  text-align: left;
  margin-bottom: 10px;
}

.divider {
  width: 750px;
  margin-top: 60px;
  margin-bottom: 55px;
  border: none;
  border-top: 1px solid #ddd;
}

.form-container {
  width: 750px;
  text-align: left;
}

.form-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.form-group.full-width {
  width: 100%;
  display: flex;
}

.form-group.id-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-input {
  width: 49%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #f9f9f9;
}

.form-input.full-width {
  width: 100%;
}

.form-input[readonly] {
  background-color: #e9e9e9;
}

.form-group.id-group .form-input {
  width: calc(100% - 120px);
}

.check-button {
  width: 100px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #03ac8e;
  border-radius: 21px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  font-family: 'Hana2-Bold', sans-serif;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
}

.submit-button {
  width: 100%;
  padding: 15px 0;
  background-color: transparent;
  border: 1px solid #03ac8e;
  border-radius: 21px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  margin-top: 20px;
  font-family: 'Hana2-Bold', sans-serif;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
}

.check-button:hover,
.submit-button:hover {
  background-color: #03ac8e;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
