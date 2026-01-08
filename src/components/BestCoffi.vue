<template>
  <div class="best-coffee-section">
    <div class="container">
      <div class="text-content">
        <h2>Enjoy a new blend of coffee style</h2>
        <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
      </div>

      <div class="cards-wrapper">
        <div class="card" v-for="coffee in coffees" :key="coffee.id">
          <div class="card-image">
            <img :src="coffee.image" :alt="coffee.name" class="card-img">
            <div class="card-tag" v-if="coffee.isPopular">Популярное</div>
            <div class="card-rating" v-if="coffee.rating">
              <span>★</span>
              <span>{{ coffee.rating }}</span>
            </div>
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ coffee.name }}</h3>
            <p class="card-description">{{ coffee.description }}</p>

            <div class="card-details">
              <div class="detail-item">
                <span class="detail-label">Объем:</span>
                <span class="detail-value">{{ coffee.weight }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Калории:</span>
                <span class="detail-value">{{ coffee.calories }}</span>
              </div>
            </div>

            <div class="card-footer">
              <div class="price-section">
                <span class="card-price">{{ coffee.price }}</span>
                <span class="card-category">{{ coffee.category }}</span>
              </div>
              
              <div class="card-actions">
                <button class="favorite-btn" @click="toggleFavorite(coffee.id)" :class="{ active: coffee.isFavorite }">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3.35L8.55 2.03C6.89 0.55 4.62 0.03 2.5 0.55C1.24 0.85 0.15 1.79 0.02 3.08C-0.19 5.14 1.08 7.02 3 7.72L10 10L17 7.72C18.92 7.02 20.19 5.14 19.98 3.08C19.85 1.79 18.76 0.85 17.5 0.55C15.38 0.03 13.11 0.55 11.45 2.03L10 3.35Z" :fill="coffee.isFavorite ? '#F9C06A' : 'none'" :stroke="coffee.isFavorite ? '#F9C06A' : '#603809'" stroke-width="1.5"/>
                  </svg>
                </button>
                <button class="order-btn" @click="addToCart(coffee)">
                  <span>В корзину</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15H16.6667M15 7.5H3.33333M17.5 2.5L2.5 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="load-more" v-if="showLoadMore">
        <button class="load-more-btn" @click="loadMoreCoffees">
          Показать ещё
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Coffee {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  weight: string;
  calories: string;
  rating: number;
  isPopular: boolean;
  isFavorite: boolean;
}

// Начальный список кофе
const initialCoffees: Coffee[] = [
  {
    id: 1,
    name: 'Cappuccino',
    description: 'Сбалансированный кофе с молочной пенкой',
    price: '$8.50',
    category: 'Classic',
    image: '/images/Cappuccino.png',
    weight: '250ml',
    calories: '120 cal',
    rating: 4.8,
    isPopular: true,
    isFavorite: false
  },
  {
    id: 2,
    name: 'Chai Latte',
    description: 'Ароматный чай с пряностями и молоком',
    price: '$7.50',
    category: 'Tea-based',
    image: '/images/Latte.png',
    weight: '300ml',
    calories: '150 cal',
    rating: 4.6,
    isPopular: false,
    isFavorite: false
  },
  {
    id: 3,
    name: 'Macchiato',
    description: 'Эспрессо с каплей молочной пены',
    price: '$6.50',
    category: 'Strong',
    image: '/images/Macchiato.png',
    weight: '150ml',
    calories: '80 cal',
    rating: 4.9,
    isPopular: true,
    isFavorite: false
  },
  {
    id: 4,
    name: 'Espresso',
    description: 'Крепкий и насыщенный кофе',
    price: '$5.50',
    category: 'Strong',
    image: '/images/Expresso.png',
    weight: '50ml',
    calories: '5 cal',
    rating: 4.7,
    isPopular: false,
    isFavorite: false
  },
  {
    id: 5,
    name: 'Latte Art',
    description: 'Латте с художественной пенкой',
    price: '$9.50',
    category: 'Premium',
    image: '/images/Cappuccino.png',
    weight: '300ml',
    calories: '140 cal',
    rating: 4.9,
    isPopular: true,
    isFavorite: false
  },
  {
    id: 6,
    name: 'Mocha',
    description: 'Кофе с шоколадом и молоком',
    price: '$8.00',
    category: 'Sweet',
    image: '/images/Latte.png',
    weight: '280ml',
    calories: '180 cal',
    rating: 4.5,
    isPopular: false,
    isFavorite: false
  }
];

// Дополнительные кофе для загрузки по кнопке
const additionalCoffees: Coffee[] = [
  {
    id: 7,
    name: 'Americano',
    description: 'Эспрессо с горячей водой',
    price: '$6.00',
    category: 'Classic',
    image: '/images/Macchiato.png',
    weight: '200ml',
    calories: '10 cal',
    rating: 4.4,
    isPopular: false,
    isFavorite: false
  },
  {
    id: 8,
    name: 'Flat White',
    description: 'Нежный кофе с тонкой пенкой',
    price: '$8.80',
    category: 'Premium',
    image: '/images/Expresso.png',
    weight: '220ml',
    calories: '130 cal',
    rating: 4.8,
    isPopular: true,
    isFavorite: false
  },
  {
    id: 9,
    name: 'Caramel Macchiato',
    description: 'Кофе с карамелью и молоком',
    price: '$9.00',
    category: 'Sweet',
    image: '/images/Cappuccino.png',
    weight: '280ml',
    calories: '200 cal',
    rating: 4.6,
    isPopular: false,
    isFavorite: false
  },
  {
    id: 10,
    name: 'Turkish Coffee',
    description: 'Традиционный кофе по-турецки',
    price: '$7.00',
    category: 'Traditional',
    image: '/images/Latte.png',
    weight: '100ml',
    calories: '90 cal',
    rating: 4.7,
    isPopular: false,
    isFavorite: false
  },
  {
    id: 11,
    name: 'Iced Coffee',
    description: 'Освежающий холодный кофе',
    price: '$6.50',
    category: 'Seasonal',
    image: '/images/Macchiato.png',
    weight: '350ml',
    calories: '110 cal',
    rating: 4.3,
    isPopular: false,
    isFavorite: false
  },
  {
    id: 12,
    name: 'Irish Coffee',
    description: 'Кофе с виски и сливками',
    price: '$12.00',
    category: 'Special',
    image: '/images/Expresso.png',
    weight: '200ml',
    calories: '250 cal',
    rating: 4.9,
    isPopular: true,
    isFavorite: false
  }
];

const coffees = ref<Coffee[]>(initialCoffees);
const showLoadMore = ref(true);

// Загрузка избранного из localStorage
const loadFavorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favoriteCoffees') || '[]');
  coffees.value.forEach(coffee => {
    coffee.isFavorite = favorites.includes(coffee.id);
  });
};

const toggleFavorite = (id: number) => {
  const coffee = coffees.value.find(c => c.id === id);
  if (coffee) {
    coffee.isFavorite = !coffee.isFavorite;
    
    // Сохраняем в localStorage
    const favorites = coffees.value
      .filter(c => c.isFavorite)
      .map(c => c.id);
    localStorage.setItem('favoriteCoffees', JSON.stringify(favorites));
  }
};

const addToCart = (coffee: Coffee) => {
  // Импортируем функцию addToCart из Header компонента
  const headerComponent = document.querySelector('header');
  if (headerComponent && (headerComponent as any).__vue_app__) {
    // В реальном приложении используйте глобальное состояние (Pinia)
    // Здесь для простоты используем событие
    const event = new CustomEvent('add-to-cart', {
      detail: {
        id: coffee.id,
        name: coffee.name,
        price: coffee.price,
        image: coffee.image
      }
    });
    document.dispatchEvent(event);
  }
  
  alert(`Добавлено в корзину: ${coffee.name}`);
  
  // Анимация добавления в корзину
  const button = event?.target as HTMLElement;
  if (button) {
    button.classList.add('added');
    setTimeout(() => {
      button.classList.remove('added');
    }, 1000);
  }
};

const loadMoreCoffees = () => {
  // Добавляем ещё 6 кофе
  const nextCoffees = additionalCoffees.slice(0, 6);
  coffees.value.push(...nextCoffees);
  showLoadMore.value = false; // Скрываем кнопку после загрузки всех
  
  // Загружаем избранное для новых элементов
  loadFavorites();
};

// Инициализация
onMounted(() => {
  loadFavorites();
  
  // Слушаем событие добавления в корзину
  document.addEventListener('add-to-cart', (event: any) => {
    // В реальном приложении здесь будет логика добавления в корзину
    console.log('Добавлено в корзину:', event.detail);
  });
});
</script>

<style scoped>
.best-coffee-section {
  padding: 80px 20px;
  background: linear-gradient(180deg, #FFF9F0 0%, #FFFFFF 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.text-content {
  text-align: center;
  margin-bottom: 60px;
}

.text-content h2 {
  font-size: 42px;
  color: #603809;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 1.2;
}

.text-content p {
  font-size: 18px;
  color: #707070;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(96, 56, 9, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  position: relative;
}

.card:hover {
  transform: translateY(-15px);
  box-shadow: 0 25px 50px rgba(96, 56, 9, 0.15);
}

.card-image {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, #FFF9F0, #FFEED9);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 30px;
  transition: transform 0.5s ease;
}

.card:hover .card-img {
  transform: scale(1.08);
}

.card-tag {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #F9C06A;
  color: #603809;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(249, 192, 106, 0.3);
}

.card-rating {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: white;
  color: #603809;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-rating span:first-child {
  color: #F9C06A;
}

.card-content {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 22px;
  color: #603809;
  margin-bottom: 12px;
  font-weight: 700;
  line-height: 1.3;
}

.card-description {
  color: #707070;
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 20px;
  flex: 1;
}

.card-details {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 12px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.detail-label {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  font-size: 14px;
  color: #603809;
  font-weight: 600;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(96, 56, 9, 0.1);
}

.price-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-price {
  font-size: 28px;
  font-weight: 700;
  color: #603809;
}

.card-category {
  font-size: 13px;
  color: #707070;
  background: rgba(96, 56, 9, 0.05);
  padding: 6px 12px;
  border-radius: 20px;
  display: inline-block;
  text-transform: capitalize;
}

.card-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.favorite-btn {
  width: 45px;
  height: 45px;
  border: 2px solid #603809;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.favorite-btn:hover {
  border-color: #F9C06A;
  transform: scale(1.1);
}

.favorite-btn.active {
  background: #FFF9F0;
  border-color: #F9C06A;
}

.order-btn {
  padding: 12px 20px;
  background: #603809;
  color: white;
  border: none;
  border-radius: 12px;
  font-family: "Playfair Display", serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  min-width: 130px;
}

.order-btn:hover {
  background: #4a2b07;
  gap: 15px;
  transform: translateY(-2px);
}

.order-btn.added {
  background: #4CAF50;
  animation: bounce 0.5s ease;
}

.order-btn svg {
  transition: transform 0.3s ease;
}

.order-btn:hover svg {
  transform: rotate(45deg);
}

.load-more {
  text-align: center;
  margin-top: 40px;
}

.load-more-btn {
  padding: 15px 40px;
  background: white;
  color: #603809;
  border: 2px solid #603809;
  border-radius: 12px;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.load-more-btn:hover {
  background: #603809;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(96, 56, 9, 0.2);
}

@keyframes bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Адаптивность */
@media (max-width: 1024px) {
  .cards-wrapper {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  
  .text-content h2 {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .cards-wrapper {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .best-coffee-section {
    padding: 60px 20px;
  }
  
  .text-content h2 {
    font-size: 32px;
  }
  
  .text-content p {
    font-size: 16px;
  }
  
  .card-footer {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }
  
  .card-actions {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .card-details {
    flex-direction: column;
    gap: 10px;
  }
  
  .text-content h2 {
    font-size: 28px;
  }
  
  .order-btn {
    min-width: 100%;
    justify-content: center;
  }
}
</style>