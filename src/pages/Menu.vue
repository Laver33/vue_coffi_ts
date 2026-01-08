<template>
  <div class="menu-page">
    <div class="page-header">
      <h1>Наше Меню</h1>
      <p>Откройте для себя разнообразие наших кофейных напитков</p>
    </div>

    <div class="menu-categories">
      <div class="category" 
           v-for="category in categories" 
           :key="category.id"
           :class="{ active: activeCategory === category.id }"
           @click="activeCategory = category.id">
        {{ category.name }}
        <span class="count">{{ category.count }}</span>
      </div>
    </div>

    <div class="menu-items">
      <div class="menu-card" v-for="item in filteredItems" :key="item.id">
        <div class="menu-card-image">
          <img :src="item.image" :alt="item.name">
        </div>
        <div class="menu-card-content">
          <h3>{{ item.name }}</h3>
          <p class="description">{{ item.description }}</p>
          <div class="details">
            <span class="price">{{ item.price }}</span>
            <span class="volume">{{ item.volume }}</span>
            <span class="calories">{{ item.calories }}</span>
          </div>
          <button class="order-btn" @click="orderItem(item)">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  volume: string;
  calories: string;
  isAvailable: boolean;
}

const activeCategory = ref('all');

const categories = ref([
  { id: 'all', name: 'Все', count: 24 },
  { id: 'coffee', name: 'Кофе', count: 12 },
  { id: 'tea', name: 'Чай', count: 6 },
  { id: 'desserts', name: 'Десерты', count: 6 },
  { id: 'seasonal', name: 'Сезонное', count: 4 },
]);

const menuItems = ref<MenuItem[]>([
  {
    id: 1,
    name: 'Эспрессо',
    description: 'Классический крепкий кофе',
    price: '$4.50',
    category: 'coffee',
    image: '/images/Expresso.png',
    volume: '50ml',
    calories: '5 cal',
    isAvailable: true
  },
  {
    id: 2,
    name: 'Капучино',
    description: 'Кофе с молочной пенкой',
    price: '$5.50',
    category: 'coffee',
    image: '/images/Cappuccino.png',
    volume: '250ml',
    calories: '120 cal',
    isAvailable: true
  },
  // Добавьте больше items по аналогии
]);

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') {
    return menuItems.value;
  }
  return menuItems.value.filter(item => item.category === activeCategory.value);
});

function orderItem(item: MenuItem) {
  alert(`Добавлено: ${item.name}`);
}
</script>

<style scoped>
.menu-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 50px;
}

.page-header h1 {
  font-size: 48px;
  color: #603809;
  margin-bottom: 15px;
}

.page-header p {
  font-size: 18px;
  color: #707070;
}

.menu-categories {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.category {
  padding: 12px 24px;
  background: white;
  border: 2px solid #eee;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.category:hover {
  border-color: #F9C06A;
}

.category.active {
  background: #F9C06A;
  border-color: #F9C06A;
  color: #603809;
  font-weight: bold;
}

.count {
  background: rgba(96, 56, 9, 0.1);
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
}

.menu-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.menu-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
}

.menu-card:hover {
  transform: translateY(-5px);
}

.menu-card-image {
  height: 180px;
  overflow: hidden;
  background: #FFF9F0;
}

.menu-card-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
}

.menu-card-content {
  padding: 25px;
}

.menu-card-content h3 {
  font-size: 22px;
  color: #603809;
  margin-bottom: 10px;
}

.description {
  color: #707070;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
  min-height: 42px;
}

.details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #603809;
}

.volume, .calories {
  font-size: 12px;
  color: #999;
  background: #f5f5f5;
  padding: 4px 10px;
  border-radius: 12px;
}

.order-btn {
  width: 100%;
  padding: 12px;
  background: #603809;
  color: white;
  border: none;
  border-radius: 12px;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.order-btn:hover {
  background: #4a2b07;
}
</style>