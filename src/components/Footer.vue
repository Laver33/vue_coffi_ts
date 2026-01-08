<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section about">
          <div class="footer-logo">
            <span class="logo-text">Bean Scene</span>
          </div>
          <p class="footer-description">
            We are a coffee shop that provides you with quality coffee 
            that helps boost your productivity and helps build your mood. 
            Having a cup of coffee is good, but having a cup of real coffee 
            is greater.
          </p>
          <div class="social-links">
            <a href="#" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09208 10.9099 8.47032 10.1584C8.84856 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01875 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73516 15.8741 10.5211 16 11.37Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5 6.5H17.51" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 4C22 4 21.3 6.1 20 7.4C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.6 3 5C5.2 7.6 8.6 9.1 12 9C11.1 4.8 16 2.4 19 5.2C20.1 5.2 22 4 22 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-section links">
          <h3 class="section-title">About</h3>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/menu">Menu</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
          </ul>
        </div>

        <div class="footer-section links">
          <h3 class="section-title">Contact</h3>
          <ul class="footer-links">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Москва, ул. Кофейная, 15</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>contact@beanscene.com</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92C2 16.37 2.31 15.87 2.81 15.64C6.19 14.08 9.86 13 12 13C14.14 13 17.81 14.08 21.19 15.64C21.69 15.87 22 16.37 22 16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 6V8.92C22 9.47 21.69 9.97 21.19 10.2C17.81 11.76 14.14 12.84 12 12.84C9.86 12.84 6.19 11.76 2.81 10.2C2.31 9.97 2 9.47 2 8.92V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>+7 (999) 123-45-67</span>
            </li>
          </ul>
        </div>

        <div class="footer-section hours">
          <h3 class="section-title">Working Hours</h3>
          <div class="working-hours">
            <div class="day-hour">
              <span class="day">Monday - Friday</span>
              <span class="hours">08:00 - 22:00</span>
            </div>
            <div class="day-hour">
              <span class="day">Saturday</span>
              <span class="hours">09:00 - 23:00</span>
            </div>
            <div class="day-hour">
              <span class="day">Sunday</span>
              <span class="hours">10:00 - 21:00</span>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #603809;
  color: white;
  padding: 60px 0 30px;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 50px;
}

.footer-section h3 {
  color: #F9C06A;
  font-size: 20px;
  margin-bottom: 25px;
  font-weight: 700;
  position: relative;
  padding-bottom: 10px;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: #F9C06A;
}

.about .footer-logo {
  margin-bottom: 20px;
}

.logo-text {
  font-family: "Clicker Script", cursive;
  font-size: 36px;
  color: #F9C06A;
  font-weight: bold;
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 25px;
  font-size: 15px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #F9C06A;
  color: #603809;
  transform: translateY(-3px);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 15px;
}

.footer-links li:last-child {
  margin-bottom: 0;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-links a:hover {
  color: #F9C06A;
  padding-left: 5px;
}

.footer-links span {
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  gap: 10px;
}

.working-hours {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.day-hour {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.day-hour:last-child {
  border-bottom: none;
}

.day {
  color: white;
  font-weight: 500;
}

.hours {
  color: #F9C06A;
  font-weight: 600;
}

.footer-bottom {
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
}

.footer-bottom-links {
  display: flex;
  gap: 25px;
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: #F9C06A;
}

/* Адаптивность */
@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 30px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 50px 0 25px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 35px;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .footer-bottom-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
  
  .logo-text {
    font-size: 32px;
  }
}

@media (max-width: 480px) {
  .footer-section h3 {
    font-size: 18px;
  }
  
  .footer-description {
    font-size: 14px;
  }
  
  .day-hour {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  
  .hours {
    align-self: flex-end;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>