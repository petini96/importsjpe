<script setup>
import WelcomeItem from './WelcomeItem.vue'
import { RouterLink, RouterView } from 'vue-router'

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
    },
    namecp: {
        type: String,
        required: true
    }
})
</script>

<template>
    <a :href="link" target="_blank"><img :src="photo" alt="" class="card-img p-2"></a>
    <p class="text-center">{{description}}</p>
</template>

<style scoped>
.card-category {
    /* position: relative; */
    padding: 10px;

}

.card-category figcaption {
    /* position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    transform: translateY(-50%); */
}

.card-category figure {
    background-color: rgba(0, 0, 0, 0.6);
    border: #ffc100 solid;
    padding: 10px;
}

img {
    min-height: 100px;
    max-height: 100px;
    min-width: 100px;
    max-width: 100px;
    padding: 10px;
}

/* .card-category{
    position: relative;
    padding: 10px;
    
    min-height: 220px; 
    max-height: 220px; 
} */
/* 
.card-category figure a img{ 
    min-height: 150px; 
    max-height: 150px; 
}
.card-category figure{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
} */
figcaption {
    color: #ffc100;
    font-size: 1.3em;
}

h4 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

.card-img {
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
