<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo" @click="goToHome">
          <span>Bean Scene</span>
        </div>
        <ul class="nav-list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/menu">Menu</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
        
        <div class="profile-container" @click.stop>
          <div class="circle-profile" @click="toggleMenu">
            <p>JS</p>
          </div>
          
          <div v-if="isMenuOpen" class="dropdown-menu">
            <ul>
              <li><router-link to="/profile">Мой профиль</router-link></li>
              <li><router-link to="/orders">Мои заказы</router-link></li>
              <li><router-link to="/settings">Настройки</router-link></li>
              <li><hr></li>
              <li><a href="#" class="logout">Выйти</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const goToHome = () => {
  router.push('/');
};

const closeMenu = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.profile-container')) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeMenu);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenu);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap');

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 0;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный */
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: background-color 0.3s ease;
}

.header:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: white;
}

.logo {
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  white-space: nowrap;
  font-family: "Clicker Script", cursive;
  color: #F9C06A;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.nav-list {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li a {
  font-size: 16px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 5px 0;
  position: relative;
}

.nav-list li a:hover {
  color: #F9C06A;
}

.nav-list li a.router-link-active {
  color: #F9C06A;
  font-weight: bold;
}

.nav-list li a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #F9C06A;
}

.profile-container {
  position: relative;
}

.circle-profile {
  background: linear-gradient(135deg, #F9C06A, #D4A556);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid white;
  transition: all 0.3s ease;
  font-weight: bold;
  color: #603809;
}

.circle-profile:hover {
  transform: scale(1.1);
  border-color: #F9C06A;
}

.dropdown-menu {
  position: absolute;
  top: 55px;
  right: 0;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  z-index: 1001;
  overflow: hidden;
  animation: fadeIn 0.2s ease;
}

.dropdown-menu ul {
  list-style: none;
  margin: 0;
  padding: 10px 0;
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu a {
  display: block;
  padding: 12px 20px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.dropdown-menu a:hover {
  background-color: #FFF9F0;
  color: #603809;
  padding-left: 25px;
}

.dropdown-menu hr {
  border: none;
  height: 1px;
  background-color: #eee;
  margin: 5px 0;
}

.dropdown-menu .logout {
  color: #ff6b6b;
}

.dropdown-menu .logout:hover {
  background-color: #fff0f0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .nav {
    flex-wrap: wrap;
  }
  
  .nav-list {
    order: 3;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
}
</style>