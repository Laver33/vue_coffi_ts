<template>
  <div class="different-section">
    <img class="blastImg" src="../assets/coffee_blast2.png" alt="всплеск кофе">
    <div class="container">
      <div class="text-content">
        <h2>Why are we different?</h2>
        <p class="subtitle">We don’t just make your coffee, we make your day!</p>
      </div>

      <div class="cards-wrapper">
        <div class="card" v-for="(info) in cards" :key="info.id">
          <div class="card-icon">
            <img :src="info.image" :alt="info.title" class="card-img">
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ info.title }}</h3>
            <p class="card-desc">{{ info.desc }}</p>
          </div>
          <div class="card-hover"></div>
        </div>
      </div>
      
      <div class="cta-section">
        <p class="cta-text">Great ideas start with great coffee, Lets help you achieve that</p>
        <h3 class="cta-title">Get started today.</h3>
        <button class="cust-but">Join Us</button>
      </div>
    </div>
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
.different-section {
  position: relative;
  padding: 80px 20px;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFF9F0 100%);
  overflow: hidden;
}

.blastImg {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  max-height: 200px;
  max-width: 400px;
  z-index: 1;
  opacity: 0.7;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.text-content {
  text-align: center;
  margin-bottom: 60px;
}

.text-content h2 {
  font-size: 48px;
  color: #603809;
  margin-bottom: 20px;
  font-weight: 700;
  position: relative;
  display: inline-block;
}

.text-content h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: #F9C06A;
  border-radius: 2px;
}

.subtitle {
  font-size: 20px;
  color: #707070;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.card {
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(96, 56, 9, 0.08);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(249, 192, 106, 0.1);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(249, 192, 106, 0.2);
  border-color: rgba(249, 192, 106, 0.3);
}

.card-hover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(249, 192, 106, 0.1), rgba(249, 192, 106, 0));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.card:hover .card-hover {
  opacity: 1;
}

.card-icon {
  width: 100px;
  height: 100px;
  background: #FFF9F0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.card-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-title {
  font-size: 24px;
  color: #603809;
  margin-bottom: 15px;
  font-weight: 700;
}

.card-desc {
  font-size: 16px;
  color: #707070;
  line-height: 1.6;
  max-width: 300px;
  margin: 0 auto;
}

.cta-section {
  text-align: center;
  padding: 50px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(96, 56, 9, 0.08);
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid rgba(249, 192, 106, 0.2);
}

.cta-text {
  font-size: 20px;
  color: #707070;
  margin-bottom: 20px;
  line-height: 1.6;
}

.cta-title {
  font-size: 32px;
  color: #603809;
  margin-bottom: 30px;
  font-weight: 700;
}

.cust-but {
  border: none;
  width: 160px;
  height: 56px;
  font-size: 18px;
  border-radius: 14px;
  padding: 10px;
  background: linear-gradient(135deg, #F9C06A, #D4A556);
  color: #603809;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(249, 192, 106, 0.3);
}

.cust-but:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(249, 192, 106, 0.4);
  background: linear-gradient(135deg, #D4A556, #F9C06A);
}

/* Адаптивность */
@media (max-width: 768px) {
  .cards-wrapper {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .blastImg {
    display: none;
  }
  
  .different-section {
    padding: 60px 20px;
  }
  
  .text-content h2 {
    font-size: 36px;
  }
  
  .subtitle {
    font-size: 18px;
  }
  
  .cta-section {
    padding: 30px 20px;
  }
  
  .cta-text {
    font-size: 18px;
  }
  
  .cta-title {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 30px 20px;
  }
  
  .card-icon {
    width: 80px;
    height: 80px;
  }
  
  .card-img {
    width: 50px;
    height: 50px;
  }
  
  .card-title {
    font-size: 20px;
  }
  
  .card-desc {
    font-size: 15px;
  }
  
  .text-content h2 {
    font-size: 32px;
  }
}
</style>