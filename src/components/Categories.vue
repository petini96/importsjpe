<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import { RouterLink, RouterView } from "vue-router";

defineProps({
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  namecp: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});
 const makeClass = (count) =>{
  return "delay-"+ count.toString();
 }
</script>

<template>
  <router-link :to="{ name: 'teans', params: { title: description, namecp: namecp } }">
    <div class="card-category">
      <figure id="figure" class="rounded row justify-content-center align-items-center" :class="makeClass(count)">
        <a class="col-4"><img :src="photo" alt="" class="card-img" /></a>
        <!-- <a  target="_blank" class="col-4"><img :src="photo" alt=""  class="card-img "></a> -->
        <figcaption class="text-center col-8">{{ description }}</figcaption>
      </figure>
    </div>
  </router-link>
</template>

<style scoped>
#figure {
  animation: borderAnimate 2s infinite; 
}
 
 @keyframes borderAnimate {
  0% {
    border: #0000 solid;
  }
  50% {
    border: #ffc100 solid;
  }
  100% {
    border: #0000 solid;
  }
}

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
  /* border: #ffc100 solid; */
  padding: 10px;
}

.card-category figure a img {
  min-height: 80px;
  max-height: 80px;
  min-width: 80px;
  max-width: 80px;
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
