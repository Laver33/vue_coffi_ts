<template>
    <div class="container">
        <div class="text-content">
            <h2>Enjoy a new blend of coffee style</h2>
            <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
        </div>

        <div class="cards-wrapper" style="cursor: default;">

            <div class="card" v-for="coffee in coffees" :key="coffee.id">
                <h3 class="card-title">{{ coffee.name }}</h3>
                <img :src="coffee.image" :alt="coffee.name" class="card-img">
                <p class="card-description">{{ coffee.description }}</p>

                <div class="card-footer">
                    <span class="card-price">{{ coffee.price }}</span>
                    <span class="card-category">{{ coffee.category }}</span>
                </div>

                    <button>Order Now</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

interface Coffee {
    id: number;
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
}

const coffees: Coffee[] = [
    {
        id: 1,
        name: 'Cappuccino',
        description: 'Coffee 50% | Milk 50%',
        price: '$8.50',
        category: 'Classic',
        image: '/images/Cappuccino.png',
    },
    {
        id: 2,
        name: 'Chai Latte',
        description: 'Coffee 50% | Milk 50%',
        price: '$8.50',
        category: 'Tea-based',
        image: '/images/Latte.png',
    },
    {
        id: 3,
        name: 'Macchiato',
        description: 'Coffee 50% | Milk 50%',
        price: '$8.50',
        category: 'Strong',
        image: '/images/Macchiato.png',
    },
    {
        id: 4,
        name: 'Expresso',
        description: 'Coffee 50% | Milk 50%',
        price: '$8.50',
        category: 'Strong',
        image: '/images/Expresso.png',
    }

    
];

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.container {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.container .text-content h2 {
    font-size: 54px;
    font-family: "Playfair Display", serif;
    color: rgba(96, 56, 9, 1);
    margin-bottom: 15px;
    text-align: center;
}

.container .text-content p {
    font-size: 20px;
    font-family: "Playfair Display", serif;
    color: rgba(112, 112, 112, 1);
    text-align: center;
    max-width: 600px;
    margin: 0 auto 50px;
    line-height: 1.6;
}

.cards-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 30px;
    justify-content: center;
}

.card {
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    border: 1px solid rgba(96, 56, 9, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.card-img {
    width: 150px; 
    height: 130px;
    object-fit: contain; 
    margin-bottom: 10px;
    border-radius: 15px;
}

.card-title {
    font-family: "Playfair Display", serif;
    font-size: 24px;
    color: rgba(96, 56, 9, 1);
    margin-bottom: 12px;
    font-weight: 600;
}

.card-description {
    font-family: "Playfair Display", serif;
    color: rgba(112, 112, 112, 1);
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    min-height: 25px;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid rgba(96, 56, 9, 0.1);
    width: 100%; 
}

.card-price {
    font-family: "Playfair Display", serif;
    font-size: 22px;
    font-weight: 700;
    color: rgba(96, 56, 9, 1);
}

.card-category {
    font-family: "Playfair Display", serif;
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
    background: rgba(96, 56, 9, 0.05);
    padding: 6px 12px;
    border-radius: 20px;
}

.card button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: rgba(96, 56, 9, 1);
    color: white;
    border: none;
    border-radius: 8px;
    font-family: "Playfair Display", serif;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.card button:hover {
    background-color: rgba(76, 46, 9, 1);
}
</style>