<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <p>We've got your morning covered with</p>
        <h1>Coffee</h1>

        <p class="subtitle">It is best to start your day with a cup of coffee. Discover the
        best flavours coffee you will ever have. We provide the best
        for our customers.</p>

        <button class="cust-but">Order Now</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.hero {
  min-height: 645px;
  color: white;
  display: flex;
  align-items: flex-start; 
  padding-top: 90px; 
}

h1 {
  font-size: clamp(80px, 15vw, 220px); 
  font-family: "Clicker Script", cursive;
  margin: 20px 0;
}

p {
  font-size: 20px;
}

.hero-content {
  width: 40%; /* Оставить width */
  margin: 90px; /* Оставить margin */
}

.hero-content button {
  margin-top: 30px;
  animation-name: buttonUpd;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  cursor: pointer;
}

@keyframes buttonUpd {
  0% { box-shadow: 0px 0px 20px rgb(249, 192, 106); }
  30% { box-shadow: 0px 0px 23px rgb(179, 125, 43); }
  60% { box-shadow: 0px 0px 25px rgb(125, 79, 10); }
  80% { box-shadow: 0px 0px 23px rgb(179, 125, 43); }
  100% { box-shadow: 0px 0px 20px rgb(249, 192, 106); }
}
</style>