<template>
    <img class="blastImg" src="../assets/coffee_blast2.png" alt="всплеск кофе">
    <div class="container">
        <div class="text-content">
            <h2>Why are we different?</h2>
            <p>We don’t just make your coffee, we make your day!</p>
        </div>

        <div class="cards-wrapper">
            <div class="card"  v-for="(info) in cards" :key="info.id">
                <img :src="info.image" :alt="info.title" class="card-img">
                <p class="card-name">{{ info.title }}</p>

                <div class="card-footer">
                    <span class="card-desc">{{ info.desc }}</span>
                </div>
            </div>
        </div>
    
    <p>Great ideas start with great coffee, Lets help you achieve that</p>
    <h3>Get started today.</h3>

    <button class="cust-but">Join Us</button>
    </div>
</template>

<script setup lang="ts">

    interface Card {
    id: number;
    title: string;
    desc: string;
    image: string;
}

const cards: Card[] = [
    {
        id: 1,
        title: 'Supreme Beans',
        desc: 'Beans that provides great taste',
        image: '/images/differentimg/coffeebeans.png',
    },
    {
        id: 2,
        title: 'High Quality',
        desc: 'We provide the highest quality',
        image: '/images/differentimg/badge.png',
    },
    {
        id: 3,
        title: 'Extraordinary',
        desc: 'Coffee like you have never tasted',
        image: '/images/differentimg/coffeecup.png',
    },
    {
        id: 4,
        title: 'Affordable Price',
        desc: 'Our Coffee prices are easy to afford',
        image: '/images/differentimg/bestprice.png',
    }

    
];


</script>

<style scoped>

.blastImg {
    right: 0px;
    position: absolute;
    max-height: 150px;
    max-width: 350px;
}
    
.container {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.text-content h2 {
    font-size: 42px;
    font-family: "Playfair Display", serif;
    color: rgba(96, 56, 9, 1);
    margin-bottom: 15px;
}

h3 {
    font-size: 30px;
    font-family: "Playfair Display", serif;
    color: rgba(96, 56, 9, 1);
}

.text-content {
    margin-bottom: 40px;
}

p {
    font-size: 18px;
    font-family: "Playfair Display", serif;
    color: rgba(112, 112, 112, 1);
}

.cards-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
    cursor: default
}

.card {
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    animation: animHover;
    background-color: rgba(249, 192, 106, 0.42);
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

@keyframes animHover {
    0%   { transform: scale(1); box-shadow: 0px 0px 17px rgb(146, 97, 22);      }
    20%  { transform: scale(1.01); box-shadow: 0px 0px 20px rgb(179, 125, 43);  }
    50%  { transform: scale(1.02); box-shadow: 0px 0px 22px rgb(125, 79, 10);   }
    70%  { transform: scale(1.01); box-shadow: 0px 0px 20px rgb(179, 125, 43);  }
    100% { transform: scale(1); box-shadow: 0px 0px 17px rgb(146, 97, 22);      }
}

.card-img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-bottom: 20px;
}

.card-name {
    font-family: "Playfair Display", serif;
    font-size: 20px;
    color: rgba(96, 56, 9, 1);
    font-weight: 600;
    margin-bottom: 10px;
}

.card-desc {
    font-family: "Playfair Display", serif;
    color: rgba(112, 112, 112, 1);
    font-size: 14px;
    line-height: 1.5;
}

button {
    margin-top: 30px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: rgb(239, 176, 80);
}
</style>