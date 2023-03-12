<script setup>

import Client from '../components/Client.vue';
</script>

<template> 
  <section>
    <Client  /> 
  </section>
</template>
<style>
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


.catalogo-option {
  background-color: rgba(0, 0,0, 0.4);
  padding: 20px; 
}
.catalogo-option span {
  font-size: 2em; 
  margin-right: 5%;
  color: white;
}
</style>