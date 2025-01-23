<script setup lang="ts">
import { ref } from 'vue'

const count = ref(122)
let x: string | number = 1

</script>

<template>
    <h1>Count!</h1>
    {{ (x as number).toFixed(2) }}

    {{ count.toFixed(2) }}
</template>