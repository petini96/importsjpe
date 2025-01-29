<script setup lang="ts">

const goBack = function () {
    window.history.back();
}
const scrollToTop = function () {
    window.scrollTo(0, 0);
}

</script>
<template>
    <div class="col-3 text-center ">
        <a tag="a" @click="goBack">
            <div class="box-button">
                <span>
                    <i class="bi bi-arrow-return-left"></i>
                </span>
            </div>
        </a>
    </div>
    <div class="col-3 text-center">
        <a @click="scrollToTop()">
            <div class="box-button">
                <span>
                    <i class="bi bi-arrow-90deg-up"></i>
                </span>
            </div>
        </a>
    </div>
</template>