<template>
  <div class="profile-page">
    <div class="profile-header">
      <div class="avatar-container">
        <div class="avatar">
          JS
        </div>
        <div class="avatar-badge">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.07 14.28L3.5 10.7L4.91 9.29L7.07 11.45L12.17 6.35L13.58 7.76L7.07 14.28Z" fill="#4CAF50"/>
          </svg>
        </div>
      </div>
      <div class="profile-info">
        <h1>Pavel</h1>
        <p class="email">Pavel@email.com</p>
        <p class="member-since">Участник с ....</p>
      </div>
      <button class="edit-btn">Редактировать</button>
    </div>

    <div class="profile-stats">
      <div class="stat-card">
        <div class="stat-icon">☕</div>
        <div class="stat-info">
          <h3>2</h3>
          <p>Чашек выпито</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">⭐</div>
        <div class="stat-info">
          <h3>12</h3>
          <p>Заслуженных наград</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🛒</div>
        <div class="stat-info">
          <h3>24</h3>
          <p>Заказов сделано</p>
        </div>
      </div>
    </div>

    <div class="profile-content">
      <div class="section">
        <h2>Предпочтения</h2>
        <div class="preferences">
          <span class="pref-tag">Капучино</span>
          <span class="pref-tag">С молоком</span>
          <span class="pref-tag">Средняя обжарка</span>
          <span class="pref-tag">Сахар 1 ложка</span>
        </div>
      </div>

      <div class="section">
        <h2>Последние заказы</h2>
        <div class="orders-list">
          <div class="order-item" v-for="order in recentOrders" :key="order.id">
            <div class="order-info">
              <h4>{{ order.name }}</h4>
              <p>{{ order.date }} • {{ order.price }}</p>
            </div>
            <div class="order-status" :class="order.status">
              {{ order.status === 'completed' ? '✓' : '⏳' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Order {
  id: number;
  name: string;
  date: string;
  price: string;
  status: 'completed' | 'pending';
}

const recentOrders: Order[] = [
  { id: 1, name: 'Капучино x2', date: 'Сегодня, 10:30', price: '$17.00', status: 'completed' },
  { id: 2, name: 'Эспрессо', date: 'Вчера, 15:45', price: '$4.50', status: 'completed' },
  { id: 3, name: 'Латте Арт', date: '2 дня назад', price: '$9.50', status: 'completed' },
  { id: 4, name: 'Мокка x3', date: '3 дня назад', price: '$24.00', status: 'completed' },
];
</script>

<style scoped>
.profile-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.avatar-container {
  position: relative;
}

.avatar {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #F9C06A, #D4A556);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  color: #603809;
  border: 4px solid white;
  box-shadow: 0 5px 15px rgba(249, 192, 106, 0.3);
}

.avatar-badge {
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: white;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.profile-info {
  flex: 1;
}

.profile-info h1 {
  font-size: 32px;
  color: #603809;
  margin-bottom: 5px;
}

.email {
  color: #707070;
  margin-bottom: 5px;
}

.member-since {
  color: #999;
  font-size: 14px;
}

.edit-btn {
  padding: 10px 20px;
  background: white;
  border: 2px solid #F9C06A;
  border-radius: 10px;
  color: #603809;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.edit-btn:hover {
  background: #F9C06A;
}

.profile-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.stat-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  font-size: 32px;
  width: 60px;
  height: 60px;
  background: #FFF9F0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-info h3 {
  font-size: 28px;
  color: #603809;
  margin-bottom: 5px;
}

.stat-info p {
  color: #707070;
  font-size: 14px;
}

.profile-content {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.section {
  margin-bottom: 30px;
}

.section h2 {
  font-size: 24px;
  color: #603809;
  margin-bottom: 20px;
}

.preferences {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.pref-tag {
  background: #FFF9F0;
  color: #603809;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  border: 1px solid #F9C06A;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  background: #f9f9f9;
  transition: background 0.3s ease;
}

.order-item:hover {
  background: #f0f0f0;
}

.order-info h4 {
  color: #603809;
  margin-bottom: 5px;
}

.order-info p {
  color: #707070;
  font-size: 14px;
}

.order-status {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.order-status.completed {
  background: #4CAF50;
  color: white;
}

.order-status.pending {
  background: #FFC107;
  color: #603809;
}
</style>