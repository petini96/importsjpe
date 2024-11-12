<script setup>
import WelcomeItem from './WelcomeItem.vue'
import { RouterLink, RouterView } from 'vue-router'


defineProps({

    posts: {
        type: Object,
        required: true
    }
})


</script>

<script>
export default {
    data() {
        return {
            picked: this.posts[0],
            secondsDelary: 10,
            progress: 0,
            touchStartX: null,
            touchEndX: null
        }
    },
    mounted() {
        setInterval(() => {
            this.nextPicked();
            this.setDefaultProgress();
        }, this.secondsDelary * 1000);
        setInterval(() => {
            this.updateProgress();
        }, 100);
    },
    methods: {
        manage(){
            
        },
        setLastPicked() {
            this.picked = this.posts[this.posts.length - 1];
        },
        previousPicked() {
            if (this.isOrderOlder()) {
                this.setLastPicked();
                this.setDefaultProgress();
            }else {
                this.picked = this.posts[this.picked.order - 1];
            }
        },
        nextPicked() {
            if (this.isOrderGreat()) {
                this.setDefaultPicked();
                this.setDefaultProgress();
            }else{
                
                this.picked = this.posts[this.picked.order + 1];
            }
        },
        setDefaultProgress() {
            this.progress = 0;
        },
        setDefaultPicked() {
            this.picked = this.posts[0];
        },
        isOrderGreat() {
            if (this.picked.order >= this.posts.length - 1) {
                return true;
            } else {
                return false;
            } 
        },
        isOrderOlder() {
            if (this.picked.order <= 0) {
                return true;
            } else {
                return false;
            } 
        },
        handleTouchStart(event) {
            this.touchStartX = event.touches[0].clientX
        },
        handleTouchEnd(event) {
            this.touchEndX = event.changedTouches[0].clientX 
            if (this.touchEndX > this.touchStartX) {
                this.previousPicked()
                this.setDefaultProgress()
            } else if (this.touchEndX < this.touchStartX) {
                this.nextPicked()
                this.setDefaultProgress()
            }
        },
        updateProgress() {
            let time = this.secondsDelary * 1000;
            this.progress = this.progress + (100/ (time/100));
        },
        handleDrag(event) {
            if (event.deltaX > 0) {
                // arrasto para a direita
                this.picked = this.posts[this.picked.order + 1]
            } else if (event.deltaX < 0) {
                // arrasto para a esquerda
                this.picked = this.posts[this.picked.order - 1]
            }
        }
    }
}
</script>
<template>
    <picture class="col-12 d-none d-md-block">
        <img :src="picked.media" alt="Flowers" class="img-fluid" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
        <div class="progress-carousel bg-opacity-50" :style="{ width: progress + '%'}"></div>
        <!-- <div class="post text-center p-3 bg-opacity-50 bg-black">
            <h2>{{ this.picked.title }}</h2>
            <hr class="w-50 mx-auto">
            <p>{{ this.picked.description }}</p>
        </div> -->
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
