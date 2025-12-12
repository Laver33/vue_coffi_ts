<template>

<div class="container" style="min-height: 500px;">
  <div class="hero-content">

    <div class="text-content">
        <h2 style="font-size: 54px; margin-bottom: 30px; color: rgba(96, 56, 9, 1); font-weight: bold;">Discover the best coffee</h2>

        <p class="subtitle" style="font-size: 20px; color: rgba(112, 112, 112, 1);">IBean Scene is a coffee shop that provides you with quality coffee that helps 
            boost your productivity and helps build your mood. Having a cup of coffee is good, but having 
            a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than 
            others you have ever tasted.</p>
        <button class="btn">Learn More</button>     
    </div>

    <div class="image-content">
        <div class="image-coffi"></div>
    </div>

  </div>

  
</div>

<div class="img-bottom"></div>

</template>

<style scoped>

    .hero-content{
        display: flex;
    }

    .hero-content .btn{
        border: none;
        width: 134px;
        height: 48px;
        margin-top: 50px;
        font-size: 16px;
        border-radius: 14px;
        padding: 10px;
        background-color: rgba(249, 192, 106, 1);
        font-family: "Playfair Display", serif;
        font-weight: bold;

        animation-name: buttonUpd;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;

    }

    @keyframes buttonUpd {
        0% { box-shadow: 0px 0px 20px rgb(249, 192, 106); }
        30% { box-shadow: 0px 0px 23px rgb(179, 125, 43); }
        60% { box-shadow: 0px 0px 25px rgb(125, 79, 10); }
        80% { box-shadow: 0px 0px 23px rgb(179, 125, 43); }
        100% { box-shadow: 0px 0px 20px rgb(249, 192, 106); }
    }

    .container{
        margin: 0px 100px 0px 100px;
    }

    .text-content {
        padding-top: 50px;
        width: 45%;
    }

    .image-content {
    flex: 1;
    display: flex;
    justify-content: flex-end; 
    align-items: center;
    padding-right: 40px; 
    }

    .image-coffi {
    background-image: url(/src/assets/coffi_cap.png); 
    background-size: contain; 
    background-repeat: no-repeat;
    background-position: center;
    width: 450px; 
    height: 450px; 
    min-width: 450px; 
    }

    .img-bottom{
        padding-left: 200px;
        background-size: 100% 100%;
        background-position: center;
        background-image: url(/src/assets/coffee_blast.png); 
        height: 150px; 
        width: 200px;
    }
    
</style>