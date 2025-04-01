<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useProductStore } from '../stores/product-store';
import { useQuasar } from 'quasar';
import { computed } from 'vue';

const props = defineProps<{
  id: number;
  name: string;
  description: string;
  photos: { id: number; url: string; fileType: string; fileSize: number; createdAt: number }[];
}>();

const $q = useQuasar();

const cardSize = computed(() => {
  if ($q.screen.xs) return { maxWidth: "75vw", height: "500px" };
  if ($q.screen.sm) return { maxWidth: "280px", height: "340px" };
  if ($q.screen.md) return { maxWidth: "300px", height: "340px" };
  return { maxWidth: "320px", height: "380px" };
});

const router = useRouter();
const productStore = useProductStore();

const handleProductClick = async () => {
  productStore.setSelectedProduct(props.id);
  await router.push({ name: 'product' });
};
</script>

<template>
  <div class="q-pa-md">
    <q-card 
      class="product-card shadown-pink border-rounded"
      :style="{ width: '70vw', maxWidth: cardSize.maxWidth, height: cardSize.height }"
      @click="handleProductClick"
    >
      <!-- Imagem -->
      <q-card-section 
        class="card-image-container"
        :style="{ height:'50%'}"
      >
        <q-img 
          v-if="photos?.length" 
          :src="photos[0]?.url" 
          alt="Product image" 
          class="img-fluid"
          fit="cover"
          style="width: 100%; height: 100%; object-fit: cover;"
        />
      </q-card-section>

      <q-separator dark />

      <q-card-section class="q-px-md">
        <q-item-label class="q-my-lg text-secondary text-center text-bold fixed-title font-primoto-pro text-h6 ">{{ name }}</q-item-label>
        <q-item-label class="text-black q-px-lg ">{{ description }}</q-item-label>
      </q-card-section>

      <!-- Nome e Descrição -->
      <q-card-actions align="center" class="q-pa-none q-my-md flex column ">
        
        <q-btn color="primary" icon-right="send" label="Comprar" />

      </q-card-actions>
    </q-card>

    <div class="grandao">
      <p>aaaaaaaaaaaaaaaa sass</p>
    </div>
  </div>
</template>
 
<style lang="sass" scoped>

@mixin fontSize($fontSize: 1px, $color: black)
  font-size: $fontSize !important
  color: $color

.grandao
  @include fontSize(50px, blue)

.medio
  @include fontSize(10px, yellow)

.normal
  @include fontSize()

$pinkShadown: rgba(200, 80, 140, 0.5)

@mixin theme($theme: DarkGray)
  background: $theme
  box-shadow: 0 0 1px rgba($theme, .25)
  color: #fff
  
.shadown-pink
  box-shadow: 0px 4px 10px $pinkShadown

.border-rounded
  border-radius: 15px

.fixed-title
  height: 24px
  line-height: 24px

.fixed-description
  height: 40px
  line-height: 20px
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap

.card-image-container
  height: 180px
</style>