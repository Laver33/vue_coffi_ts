<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <span>Bean Scene</span>
        </div>
        <ul class="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div class="circle-profile">
          <p>Профиль</p>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.header {
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.133);
  backdrop-filter: blur(10px); 
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
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
  margin-right: auto; 
  font-family: "Clicker Script", cursive;
  font-size: 35px;
}

.nav-list {
  display: flex;
  gap: 40px; 
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li a {
  font-size: 14px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.3s ease;
  font-family: "Playfair Display", serif;
  display: flex;
}

.nav-list li a:hover {
  color: #d97024;
  transform: scale(1.1);
}

.circle-profile {
  background-color: black;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto; 
  cursor: pointer;
}

.circle-profile p {
  color: white;
  font-size: 0.7rem;
  text-align: center;
  margin: 0;
  padding: 0 5px;
}
</style>