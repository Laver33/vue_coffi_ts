<template>
  <div class="orders-page">
    <div class="page-header">
      <h1>Мои Заказы</h1>
      <p>История ваших заказов</p>
    </div>

    <div class="orders-list">
      <div class="order-card" v-for="order in orders" :key="order.id">
        <div class="order-header">
          <div class="order-info">
            <h3>Заказ #{{ order.id }}</h3>
            <p class="date">{{ order.date }}</p>
          </div>
          <div class="order-status" :class="order.status">
            {{ getStatusText(order.status) }}
          </div>
        </div>
        
        <div class="order-items">
          <div class="order-item" v-for="item in order.items" :key="item.id">
            <div class="item-info">
              <h4>{{ item.name }}</h4>
              <p>{{ item.quantity }} × {{ item.price }}</p>
            </div>
            <span class="item-total">{{ item.total }}</span>
          </div>
        </div>
        
        <div class="order-footer">
          <div class="order-total">
            <span>Итого:</span>
            <span class="total-price">{{ order.total }}</span>
          </div>
          <button class="reorder-btn" v-if="order.status === 'delivered'">
            Повторить заказ
          </button>
        </div>
      </div>
    </div>
    
    <div class="no-orders" v-if="orders.length === 0">
      <p>У вас еще нет заказов</p>
      <router-link to="/menu" class="shop-btn">Перейти в меню</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: string;
  total: string;
}

interface Order {
  id: number;
  date: string;
  status: 'pending' | 'preparing' | 'delivered' | 'cancelled';
  items: OrderItem[];
  total: string;
}

const orders: Order[] = [
  {
    id: 1234,
    date: 'Сегодня, 10:30',
    status: 'delivered',
    items: [
      { id: 1, name: 'Капучино', quantity: 2, price: '$8.50', total: '$17.00' },
      { id: 2, name: 'Круассан', quantity: 1, price: '$5.00', total: '$5.00' },
    ],
    total: '$22.00'
  },
  {
    id: 1233,
    date: 'Вчера, 15:45',
    status: 'delivered',
    items: [
      { id: 1, name: 'Эспрессо', quantity: 1, price: '$4.50', total: '$4.50' },
    ],
    total: '$4.50'
  },
  {
    id: 1232,
    date: '2 дня назад',
    status: 'delivered',
    items: [
      { id: 1, name: 'Латте Арт', quantity: 1, price: '$9.50', total: '$9.50' },
      { id: 2, name: 'Чизкейк', quantity: 1, price: '$8.00', total: '$8.00' },
    ],
    total: '$17.50'
  }
];

function getStatusText(status: string): string {
  const statusMap: Record<string, string> = {
    'pending': 'В обработке',
    'preparing': 'Готовится',
    'delivered': 'Доставлено',
    'cancelled': 'Отменено'
  };
  return statusMap[status] || status;
}
</script>

<style scoped>
.orders-page {
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

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-card {
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.order-info h3 {
  color: #603809;
  font-size: 20px;
  margin-bottom: 5px;
}

.date {
  color: #707070;
  font-size: 14px;
}

.order-status {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
}

.order-status.pending {
  background: #FFF3CD;
  color: #856404;
}

.order-status.preparing {
  background: #D1ECF1;
  color: #0C5460;
}

.order-status.delivered {
  background: #D4EDDA;
  color: #155724;
}

.order-status.cancelled {
  background: #F8D7DA;
  color: #721C24;
}

.order-items {
  margin-bottom: 20px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
}

.order-item:last-child {
  border-bottom: none;
}

.item-info h4 {
  color: #603809;
  font-size: 16px;
  margin-bottom: 5px;
}

.item-info p {
  color: #707070;
  font-size: 14px;
}

.item-total {
  font-weight: 600;
  color: #603809;
}

.order-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.order-total {
  display: flex;
  gap: 10px;
  align-items: center;
}

.order-total span:first-child {
  color: #707070;
}

.total-price {
  font-size: 24px;
  font-weight: 700;
  color: #603809;
}

.reorder-btn {
  padding: 10px 20px;
  background: #603809;
  color: white;
  border: none;
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.reorder-btn:hover {
  background: #4a2b07;
}

.no-orders {
  text-align: center;
  padding: 60px 20px;
}

.no-orders p {
  color: #707070;
  font-size: 18px;
  margin-bottom: 20px;
}

.shop-btn {
  display: inline-block;
  padding: 12px 30px;
  background: #F9C06A;
  color: #603809;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.shop-btn:hover {
  background: #e0a85c;
  transform: translateY(-2px);
}
</style>