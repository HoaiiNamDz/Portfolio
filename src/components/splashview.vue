<template lang="">
    <div class="w-full h-screen flex items-center justify-center bg-purple-500 text-white overflow-hidden fixed top-0 left-0 duration-1000 bg-gradient-to-br from-green-300 to-white z-50" :style="showSplash ? { top: '-100%', opacity: 0 } : {}" >
        <h1 class="text-7xl font-bold text-gray-800 splash-text my-auto">HoaiiNam</h1>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue'
export default {
    props: ['showSplash'],
    setup() {
        const showSplash = ref(false);

        onMounted(() => {
            setTimeout(() => {
                showSplash.value = true;
                const splashText = document.querySelector('.splash-text');
                splashText.classList.add('animate-title')
            }, 1000);
        })
        return { showSplash };
    }
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    h1 {
        font-family: "Pacifico", cursive;
    }
</style>