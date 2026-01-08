<template>
  <div class="settings-page">
    <div class="page-header">
      <h1>Настройки</h1>
      <p>Управление вашим аккаунтом</p>
    </div>

    <div class="settings-sections">
      <div class="settings-section">
        <h2>Личная информация</h2>
        <div class="form-group">
          <label>Имя</label>
          <input type="text" v-model="user.name" placeholder="Ваше имя">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="user.email" placeholder="email@example.com">
        </div>
        <div class="form-group">
          <label>Телефон</label>
          <input type="tel" v-model="user.phone" placeholder="+7 (999) 123-45-67">
        </div>
      </div>

      <div class="settings-section">
        <h2>Уведомления</h2>
        <div class="toggle-group">
          <div class="toggle-item">
            <span>Email уведомления</span>
            <label class="toggle">
              <input type="checkbox" v-model="notifications.email">
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-item">
            <span>СМС уведомления</span>
            <label class="toggle">
              <input type="checkbox" v-model="notifications.sms">
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-item">
            <span>Специальные предложения</span>
            <label class="toggle">
              <input type="checkbox" v-model="notifications.promotions">
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <h2>Настройки кофе</h2>
        <div class="preferences">
          <div class="preference-item">
            <label>Любимый напиток</label>
            <select v-model="preferences.favoriteDrink">
              <option value="cappuccino">Капучино</option>
              <option value="espresso">Эспрессо</option>
              <option value="latte">Латте</option>
              <option value="mocha">Мокка</option>
            </select>
          </div>
          <div class="preference-item">
            <label>Количество сахара</label>
            <div class="sugar-options">
              <button 
                v-for="n in 3" 
                :key="n" 
                :class="{ active: preferences.sugar === n }"
                @click="preferences.sugar = n">
                {{ n }}
              </button>
            </div>
          </div>
          <div class="preference-item">
            <label>Молоко</label>
            <select v-model="preferences.milk">
              <option value="regular">Обычное</option>
              <option value="soy">Соевое</option>
              <option value="almond">Миндальное</option>
              <option value="oat">Овсяное</option>
            </select>
          </div>
        </div>
      </div>

      <div class="settings-actions">
        <button class="save-btn" @click="saveSettings">Сохранить изменения</button>
        <button class="cancel-btn" @click="resetSettings">Отмена</button>
      </div>
    </div>
  </div>
</template> 

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';

interface User {
  name: string;
  email: string;
  phone: string;
}

interface Notifications {
  email: boolean;
  sms: boolean;
  promotions: boolean;
}

interface Preferences {
  favoriteDrink: string;
  sugar: number;
  milk: string;
}

// Загрузка из localStorage 
const loadFromStorage = <T>(key: string, defaultValue: T): T => {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : defaultValue;
};

const user = reactive<User>(loadFromStorage('userSettings', {
  name: 'John Smith',
  email: 'john.smith@email.com',
  phone: '+7 (999) 123-45-67'
}));

const notifications = reactive<Notifications>(loadFromStorage('notificationSettings', {
  email: true,
  sms: false,
  promotions: true
}));

const preferences = reactive<Preferences>(loadFromStorage('preferenceSettings', {
  favoriteDrink: 'cappuccino',
  sugar: 1,
  milk: 'regular'
}));

function saveSettings() {
  // Сохраняем 
  localStorage.setItem('userSettings', JSON.stringify(user));
  localStorage.setItem('notificationSettings', JSON.stringify(notifications));
  localStorage.setItem('preferenceSettings', JSON.stringify(preferences));
  
  alert('Настройки сохранены!');
}

function resetSettings() {
  Object.assign(user, {
    name: 'Stock',
    email: 'Stock@email.com',
    phone: '+375'
  });
  
  Object.assign(notifications, {
    email: true,
    sms: false,
    promotions: true
  });
  
  Object.assign(preferences, {
    favoriteDrink: 'cappuccino',
    sugar: 1,
    milk: 'regular'
  });
  
  // Удаляем из localStorage
  localStorage.removeItem('userSettings');
  localStorage.removeItem('notificationSettings');
  localStorage.removeItem('preferenceSettings');
  
  alert('Настройки сброшены!');
}
</script>

<style scoped>
.settings-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 36px;
  color: #603809;
  margin-bottom: 10px;
}

.page-header p {
  color: #707070;
  font-size: 18px;
}

.settings-sections {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
}

.settings-section {
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
}

.settings-section:last-child {
  border-bottom: none;
}

.settings-section h2 {
  font-size: 24px;
  color: #603809;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  color: #603809;
  margin-bottom: 8px;
  font-weight: 600;
}

.form-group input {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #eee;
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #F9C06A;
}

.toggle-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.toggle-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #F9C06A;
}

input:checked + .slider:before {
  transform: translateX(24px);
}

.preferences {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.preference-item label {
  display: block;
  color: #603809;
  margin-bottom: 8px;
  font-weight: 600;
}

.preference-item select {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #eee;
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  background: white;
  cursor: pointer;
}

.preference-item select:focus {
  outline: none;
  border-color: #F9C06A;
}

.sugar-options {
  display: flex;
  gap: 10px;
}

.sugar-options button {
  width: 40px;
  height: 40px;
  border: 2px solid #eee;
  background: white;
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sugar-options button:hover {
  border-color: #F9C06A;
}

.sugar-options button.active {
  background: #F9C06A;
  border-color: #F9C06A;
  color: #603809;
  font-weight: bold;
}

.settings-actions {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.save-btn {
  padding: 15px 30px;
  background: #603809;
  color: white;
  border: none;
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  flex: 1;
  transition: background 0.3s ease;
}

.save-btn:hover {
  background: #4a2b07;
}

.cancel-btn {
  padding: 15px 30px;
  background: white;
  color: #603809;
  border: 2px solid #603809;
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  flex: 1;
  transition: all 0.3s ease;
}

.cancel-btn:hover {
  background: #f9f9f9;
}
</style>