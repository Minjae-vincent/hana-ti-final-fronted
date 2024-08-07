<template>
  <header class="header">
    <nav class="menu-bar">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="Logo" class="logo-image" />
        </router-link>
      </div>
      <ul class="menu">
        <li><router-link to="/" exact-active-class="active-link">홈</router-link></li>
        <li><a href="#about">내 여행</a></li>
        <li><a href="#services">환율하우스</a></li>
        <li><a href="#contact">여행하우스</a></li>
      </ul>
      <ul class="actions">
        <li><router-link to="/login" active-class="active-link">로그인</router-link></li>
        <li><router-link to="/register" active-class="active-link">회원가입</router-link></li>
        <li><a href="#notifications">알림</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// No additional script is needed for this simple header
</script>

<style scoped>
@font-face {
  font-family: 'Hana2-Bold';
  src: url('@/assets/fonts/Hana2-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 1rem 0;
  color: white;
  text-align: center;
  font-family: 'Hana2-Bold', sans-serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.menu-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.logo a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: inherit;
}

.logo-image {
  width: 130px;
  height: auto;
}

.menu,
.actions {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.menu li,
.actions li {
  margin: 0 1rem;
}

.menu a,
.actions a {
  color: black;
  text-decoration: none;
  transition: color 0.2s ease;
}

.menu a:hover,
.actions a:hover {
  color: #03ac8e;
  text-decoration: none;
}

.active-link {
  color: #03ac8e !important; /* Ensure this color is applied */
}
</style>
