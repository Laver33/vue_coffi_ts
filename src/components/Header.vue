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
        
        <div class="header-actions">
          <div class="cart-icon" @click="toggleCart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="cart-badge" v-if="cartItemCount > 0">{{ cartItemCount }}</span>
          </div>
          
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
                <li><a href="#" class="logout" @click.prevent="logout">Выйти</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
    <div v-if="showCart" class="cart-modal">
      <div class="cart-header">
        <h3>Корзина</h3>
        <button class="close-btn" @click="showCart = false">×</button>
      </div>
      <div class="cart-content">
        <div v-if="cartItems.length === 0" class="empty-cart">
          <p>Корзина пуста</p>
          <router-link to="/menu" class="shop-link" @click="showCart = false">
            Перейти в меню
          </router-link>
        </div>
        <div v-else>
          <div class="cart-item" v-for="item in cartItems" :key="item.id">
            <img :src="item.image" :alt="item.name" class="cart-item-image">
            <div class="cart-item-info">
              <h4>{{ item.name }}</h4>
              <p>{{ item.price }}</p>
            </div>
            <div class="cart-item-actions">
              <button class="qty-btn" @click="updateQuantity(item.id, item.quantity - 1)">-</button>
              <span class="qty-number">{{ item.quantity }}</span>
              <button class="qty-btn" @click="updateQuantity(item.id, item.quantity + 1)">+</button>
              <button class="remove-btn" @click="removeFromCart(item.id)">×</button>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-footer" v-if="cartItems.length > 0">
        <div class="cart-total">
          <span>Итого:</span>
          <span class="total-price">${{ cartTotal.toFixed(2) }}</span>
        </div>
        <button class="checkout-btn" @click="checkout">Оформить заказ</button>
        <button class="clear-btn" @click="clearCart">Очистить корзину</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);
const showCart = ref(false);

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

const cartItems = ref<CartItem[]>([]);

const loadCart = () => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cartItems.value = JSON.parse(savedCart);
  }
};

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cartItems.value));
};

const cartItemCount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});

const cartTotal = computed(() => {
  return cartItems.value.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + (price * item.quantity);
  }, 0);
});

const addToCart = (item: CartItem) => {
  const existingItem = cartItems.value.find(cartItem => cartItem.id === item.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.value.push({
      ...item,
      quantity: 1
    });
  }
  
  saveCart();
  showCart.value = true; 
};

const removeFromCart = (id: number) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
  saveCart();
};

const updateQuantity = (id: number, quantity: number) => {
  const item = cartItems.value.find(item => item.id === id);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      item.quantity = quantity;
      saveCart();
    }
  }
};

const clearCart = () => {
  cartItems.value = [];
  localStorage.removeItem('cart');
  showCart.value = false;
};

const checkout = () => {
  if (cartItems.value.length === 0) {
    alert('Корзина пуста!');
    return;
  }
  
  const orderDetails = cartItems.value.map(item => 
    `${item.name} (${item.quantity} × ${item.price})`
  ).join('\n');
  
  alert(`Заказ оформлен!\n\n${orderDetails}\n\nИтого: $${cartTotal.value.toFixed(2)}\n\nСпасибо за заказ!`);
  
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.unshift({
    id: Date.now(),
    date: new Date().toLocaleString('ru-RU'),
    items: cartItems.value,
    total: `$${cartTotal.value.toFixed(2)}`,
    status: 'pending'
  });
  localStorage.setItem('orders', JSON.stringify(orders));
  
  clearCart();
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleCart = () => {
  showCart.value = !showCart.value;
  if (showCart.value) {
    isMenuOpen.value = false;
  }
};

const goToHome = () => {
  router.push('/');
  isMenuOpen.value = false;
  showCart.value = false;
};

const logout = () => {
  alert('Вы вышли из аккаунта');
  isMenuOpen.value = false;
  router.push('/');
};

const closeMenu = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.profile-container')) {
    isMenuOpen.value = false;
  }
};

const closeCart = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.cart-icon') && !target.closest('.cart-modal')) {
    showCart.value = false;
  }
};

onMounted(() => {
  loadCart();
  document.addEventListener('click', closeMenu);
  document.addEventListener('click', closeCart);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenu);
  document.removeEventListener('click', closeCart);
});

defineExpose({
  addToCart,
  cartItems,
  cartTotal,
  cartItemCount
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
  background-color: rgba(0, 0, 0, 0.5);
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

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cart-icon {
  position: relative;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.cart-icon:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #F9C06A;
  color: #603809;
  font-size: 12px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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

/* Стили для модального окна корзины */
.cart-modal {
  position: fixed;
  top: 80px;
  right: 20px;
  width: 380px;
  max-height: 80vh;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  z-index: 1002;
  animation: slideIn 0.3s ease;
  display: flex;
  flex-direction: column;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.cart-header h3 {
  color: #603809;
  margin: 0;
  font-size: 20px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #707070;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.close-btn:hover {
  background-color: #f5f5f5;
}

.cart-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.empty-cart {
  text-align: center;
  padding: 40px 20px;
  color: #707070;
}

.empty-cart p {
  margin-bottom: 20px;
  font-size: 16px;
}

.shop-link {
  display: inline-block;
  padding: 10px 20px;
  background: #F9C06A;
  color: #603809;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.shop-link:hover {
  background: #e0a85c;
  transform: translateY(-2px);
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #f5f5f5;
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
  background: #FFF9F0;
  padding: 5px;
}

.cart-item-info {
  flex: 1;
}

.cart-item-info h4 {
  color: #603809;
  margin: 0 0 5px 0;
  font-size: 16px;
}

.cart-item-info p {
  color: #603809;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.cart-item-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-btn {
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.qty-btn:hover {
  background: #f5f5f5;
  border-color: #F9C06A;
}

.qty-number {
  min-width: 30px;
  text-align: center;
  font-weight: 600;
  color: #603809;
}

.remove-btn {
  width: 28px;
  height: 28px;
  border: 1px solid #ff6b6b;
  background: white;
  border-radius: 5px;
  color: #ff6b6b;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  transition: all 0.2s ease;
}

.remove-btn:hover {
  background: #ff6b6b;
  color: white;
}

.cart-footer {
  padding: 20px;
  border-top: 1px solid #eee;
  background: #f9f9f9;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;
  color: #603809;
}

.total-price {
  font-weight: bold;
  color: #603809;
  font-size: 22px;
}

.checkout-btn {
  width: 100%;
  padding: 14px;
  background: #603809;
  color: white;
  border: none;
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background 0.3s ease;
}

.checkout-btn:hover {
  background: #4a2b07;
}

.clear-btn {
  width: 100%;
  padding: 12px;
  background: white;
  color: #603809;
  border: 2px solid #603809;
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-btn:hover {
  background: #603809;
  color: white;
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

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
    gap: 15px;
  }
  
  .nav-list li a {
    font-size: 14px;
  }
  
  .cart-modal {
    width: calc(100vw - 40px);
    right: 10px;
    left: 10px;
    top: 70px;
  }
  
  .logo {
    font-size: 1.8rem;
  }
}
</style>