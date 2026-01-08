<template>
  <div class="contact-page">
    <h1>Свяжитесь с нами</h1>
    <div class="contact-info">
      <div class="info-card">
        <h3>📞 Телефон</h3>
        <p>+7 (999) 123-45-67</p>
      </div>
      <div class="info-card">
        <h3>✉️ Email</h3>
        <p>contact@beanscene.com</p>
      </div>
      <div class="info-card">
        <h3>📍 Адрес</h3>
        <p>Москва, ул. Кофейная, 15</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}
</style>