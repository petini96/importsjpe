<template>
  <div class="q-my-xl">
    <q-parallax :height="parallaxSize.height" src="../../../assets/images/three-layers-pastel-colored-candy.webp">
      <div id="review-card" class="container">
        <div class="row justify-center items-center">
          <div class="col-8 col-md-2 text-center q-mb-lg"> <div class="photo q-mx-auto">
              <q-img src="../../../assets/images/review1.jpg" :ratio="1" class="border-1 rounded" />
            </div>
            <div class="text q-mt-md text-white">
              "Gosto muito do trabalho da Marília! Ela é <strong> super atenciosa </strong> e sempre <strong> entrega no prazo</strong>. Recomendo!" </div>
            <div>
              <q-rating size="18px" v-model="stars" :max="5" color="primary" readonly /> </div>
          </div>

          <div class="col-8 col-md-2 text-center q-mb-lg q-mx-lg"> <div class="photo q-mx-auto">
              <q-img src="../../../assets/images/review2.avif" :ratio="1" class="border-1 rounded" />
            </div>
            <div class="text q-mt-md text-white">
              "Sensacional! Um trabalho <strong> muito bem feito </strong> que apoia <strong>animais carentes</strong>. Valeu demais!" </div>
            <div>
              <q-rating size="18px" v-model="stars" :max="5" color="primary" readonly /> </div>
          </div>

          <div class="col-8 col-md-2 text-center">
            <div class="photo q-mx-auto">
              <q-img src="../../../assets/images/review3.jpg" :ratio="1" class="border-1 rounded" />
            </div>
            <div class="text q-mt-md text-white">
              "Puta que o paril! Essa mulher é <strong> Pica to Fly! </strong> amo o trabalho dela <strong> foda-se vocês</strong>. Foda-se!" </div>
            <div>
              <q-rating size="18px" v-model="stars" :max="5" color="primary" readonly /> </div>
          </div>

        </div>
      </div>
    </q-parallax>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed, ref } from 'vue';

const $q = useQuasar();
const parallaxSize = computed(()=>{
  if($q.screen.xs) return { height: 850};
  if($q.screen.md) return { height: 600};
  return { height: 1000}
})

const stars = ref(4.5);
</script>

<style>
.rounded {
  border-radius: 50%;
  border: 3px solid white; /* Added a border to make circles more visible */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Added subtle shadow */
}

.photo {
  max-width: 120px; /* Constrain photo size */
  width: 100%;
}

.text {
  font-size: 1.1em; /* Slightly larger text */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); /* Shadow for readability */
}

/*
  Removed the .customer-review style as it was redundant.
  The q-parallax component handles its own background image.
  Setting height and background here could conflict.
*/
/*
.customer-review {
  height: 100vh;
  background-image: url('../../../assets/images/three-layers-pastel-colored-candy.webp');
}
*/

/* Ensure container has some padding if needed */
.container {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>