<template>
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
                </div>
                <div class="card-content">
                    <h3 class="card-title">{{ coffee.name }}</h3>
                    <p class="card-description">{{ coffee.description }}</p>

                    <div class="card-footer">
                        <div class="price-info">
                            <span class="card-price">{{ coffee.price }}</span>
                            <span class="card-weight">{{ coffee.weight }}</span>
                        </div>
                        <span class="card-category">{{ coffee.category }}</span>
                    </div>

                    <div class="card-actions">
                        <button class="order-btn" @click="addToCart(coffee)">
                            <span>Order Now</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15H16.6667M15 7.5H3.33333M17.5 2.5L2.5 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Coffee {
    id: number;
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
    weight: string;
    rating: number;
    isPopular: boolean;
}

const coffees = ref<Coffee[]>([
    {
        id: 1,
        name: 'Cappuccino',
        description: 'Сбалансированный кофе с молочной пенкой',
        price: '$8.50',
        category: 'Classic',
        image: '/images/Cappuccino.png',
        weight: '250ml',
        rating: 4.8,
        isPopular: true
    },
    {
        id: 2,
        name: 'Chai Latte',
        description: 'Ароматный чай с пряностями и молоком',
        price: '$7.50',
        category: 'Tea-based',
        image: '/images/Latte.png',
        weight: '300ml',
        rating: 4.6,
        isPopular: false
    },
    {
        id: 3,
        name: 'Macchiato',
        description: 'Эспрессо с каплей молочной пены',
        price: '$6.50',
        category: 'Strong',
        image: '/images/Macchiato.png',
        weight: '150ml',
        rating: 4.9,
        isPopular: true
    },
    {
        id: 4,
        name: 'Espresso',
        description: 'Крепкий и насыщенный кофе',
        price: '$5.50',
        category: 'Strong',
        image: '/images/Expresso.png',
        weight: '50ml',
        rating: 4.7,
        isPopular: false
    },
    {
        id: 5,
        name: 'Latte Art',
        description: 'Латте с художественной пенкой',
        price: '$9.50',
        category: 'Premium',
        image: '/images/Cappuccino.png',
        weight: '300ml',
        rating: 4.9,
        isPopular: true
    },
    {
        id: 6,
        name: 'Mocha',
        description: 'Кофе с шоколадом и молоком',
        price: '$8.00',
        category: 'Sweet',
        image: '/images/Latte.png',
        weight: '280ml',
        rating: 4.5,
        isPopular: false
    },
    {
        id: 7,
        name: 'Americano',
        description: 'Эспрессо с горячей водой',
        price: '$6.00',
        category: 'Classic',
        image: '/images/Macchiato.png',
        weight: '200ml',
        rating: 4.4,
        isPopular: false
    },
    {
        id: 8,
        name: 'Flat White',
        description: 'Нежный кофе с тонкой пенкой',
        price: '$8.80',
        category: 'Premium',
        image: '/images/Expresso.png',
        weight: '220ml',
        rating: 4.8,
        isPopular: true
    }
]);

const cart = ref<Coffee[]>([]);

function addToCart(coffee: Coffee) {
    cart.value.push(coffee);
    alert(`Добавлено в корзину: ${coffee.name}`);
}
</script>

<style scoped>
.container {
    padding: 80px 20px;
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
    margin-bottom: 15px;
    font-weight: 700;
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
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
}

.card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(96, 56, 9, 0.08);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(96, 56, 9, 0.15);
}

.card-image {
    position: relative;
    height: 200px;
    overflow: hidden;
    background: linear-gradient(135deg, #FFF9F0, #FFEED9);
}

.card-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 20px;
    transition: transform 0.3s ease;
}

.card:hover .card-img {
    transform: scale(1.05);
}

.card-tag {
    position: absolute;
    top: 15px;
    right: 15px;
    background: #F9C06A;
    color: #603809;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
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
    margin-bottom: 10px;
    font-weight: 600;
}

.card-description {
    color: #707070;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 20px;
    flex: 1;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-top: 15px;
    border-top: 1px solid rgba(96, 56, 9, 0.1);
}

.price-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.card-price {
    font-size: 24px;
    font-weight: 700;
    color: #603809;
}

.card-weight {
    font-size: 12px;
    color: #999;
}

.card-category {
    font-size: 12px;
    color: #707070;
    background: rgba(96, 56, 9, 0.05);
    padding: 6px 12px;
    border-radius: 20px;
}

.card-actions {
    margin-top: auto;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.order-btn:hover {
    background: #4a2b07;
    gap: 15px;
}

.order-btn svg {
    transition: transform 0.3s ease;
}

.order-btn:hover svg {
    transform: rotate(45deg);
}

@media (max-width: 768px) {
    .cards-wrapper {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
    }
    
    .text-content h2 {
        font-size: 32px;
    }
}
</style>