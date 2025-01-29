<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Post {
  media: string;
  order: number;
}

const props = defineProps<{
  posts: Post[];
}>();

const picked = ref(props.posts[0]);
const secondsDelary = 10;
const progress = ref(0);
const touchStartX = ref<number | null>(null);
const touchEndX = ref<number | null>(null);

const nextPicked = () => {
  if (isOrderGreat()) {
    setDefaultPicked();
    setDefaultProgress();
  } else {
    if (picked.value) {
      picked.value = props.posts[picked.value.order + 1];
    }
  }
};

const previousPicked = () => {
  if (isOrderOlder()) {
    setLastPicked();
    setDefaultProgress();
  } else {
    if (picked.value) {
      picked.value = props.posts[picked.value.order - 1];
    }
  }
};

const setLastPicked = () => {
  picked.value = props.posts[props.posts.length - 1];
};

const setDefaultPicked = () => {
  picked.value = props.posts[0];
};

const isOrderGreat = () => {
  return picked.value ? picked.value.order >= props.posts.length - 1 : false;
};

const isOrderOlder = () => {
  return picked.value ? picked.value.order <= 0 : false;
};

const setDefaultProgress = () => {
  progress.value = 0;
};

const handleTouchStart = (event: TouchEvent) => {
  if (event.touches[0]) {
    touchStartX.value = event.touches[0].clientX;
  }
};

const handleTouchEnd = (event: TouchEvent) => {
  if (event.changedTouches[0]) {
    touchEndX.value = event.changedTouches[0].clientX;
  }
  if (touchEndX.value && touchStartX.value) {
    if (touchEndX.value > touchStartX.value) {
      previousPicked();
      setDefaultProgress();
    } else if (touchEndX.value < touchStartX.value) {
      nextPicked();
      setDefaultProgress();
    }
  }
};

const updateProgress = () => {
  const time = secondsDelary * 1000;
  progress.value = progress.value + (100 / (time / 100));
};

onMounted(() => {
  setInterval(() => {
    nextPicked();
    setDefaultProgress();
  }, secondsDelary * 1000);
  setInterval(() => {
    updateProgress();
  }, 100);
});
</script>

<template>
  <picture class="col-12 d-none d-md-block">
    <img v-if="picked" :src="picked.media" alt="Flowers" class="img-fluid" @touchstart="handleTouchStart"
         @touchend="handleTouchEnd">
    <div class="progress-carousel bg-opacity-50" :style="{ width: progress + '%' }"></div>
    <span></span>
  </picture>
</template>

<style scoped>
.progress-carousel {
  background-color: gray;
  width: 0%;
  padding: 1px;
  transition: width 0.2s ease-in-out;
}

.card-category {
  padding: 10px;
}

.card-category figure {
  background-color: rgba(0, 0, 0, 0.6);
  border: #ffc100 solid;
  padding: 10px;
}

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
