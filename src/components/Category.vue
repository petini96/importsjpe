<script setup>
import WelcomeItem from './WelcomeItem.vue'
defineProps({
  description: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card-category">
    <figure>
        <a :href="link" target="_blank"><img :src="photo" alt="" width="200" class="card-img"></a>
        <figcaption>{{ description }}</figcaption>
        
    </figure>
  </div>
</template>

<style scoped>
.card-category{
    position: relative;
    padding: 10px;
    
    min-height: 220px; 
    max-height: 220px; 
}

.card-category figure a img{ 
    min-height: 150px; 
    max-height: 150px; 
}
.card-category figure{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
}
figcaption{
    color: #ffc100;
    font-size: 1.3em;
}

h4 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
.card-img{
    border-radius: 20px;
}

h3 {
  font-size: 1.2rem;
}

.card-category h1,
.card-category h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .card-category h1,
  .card-category h3 {
    text-align: left;
  }
}
</style>
