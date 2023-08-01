<template>
    <div class="container h-screen pl-10 w-72">
        <img src="../assets/img/logo.png" alt="logo" class="absolute h-60 w-60 left-4 -top-10 z-0">
        <ul class="relative pt-60 z-10 overflow-y-scroll scrollbar" :class="viewHeight">
            <li class="router mb-8 font-semibold text-gray-700 drop-shadow-lg" active-class="active" exact-active-class="exact-active-class">
                <router-link :to="{name: 'home', params: {}}">
                    <span class="icon icon-home pr-5"></span>
                    Home
                </router-link>
            </li>
            <li class="router mb-8 font-semibold text-gray-700 drop-shadow-lg">
                <router-link :to="{ name: 'about', params: {} }">
                    <span class="icon icon-user-following pr-5"></span>
                    About
                </router-link>
            </li>
            <li class="router mb-8 font-semibold text-gray-700 drop-shadow-lg">
                <router-link :to="{ name: 'experience', params: {} }">
                    <span class="icon icon-graduation pr-5"></span>
                    Experience
                </router-link>
            </li>
            <li class="router mb-8 font-semibold text-gray-700 drop-shadow-lg">
                <router-link :to="{ name: 'contact', params: {} }">
                    <i class="icon icon-bubbles pr-5"></i>
                    Contact
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import { ref } from 'vue'
import { watch } from 'vue'
export default {
    props: ['layout'],
    setup(props) {
        const viewHeight = ref('')
        console.log(props);
        const checkLayout = watch(() => {
            if(props.layout === 'primary-layout') {
                viewHeight.value = 'h-[60vw]'
            } else if(props.layout === 'default-layout') {
                viewHeight.value = 'h-screen'
            }
        })
        return { props ,viewHeight, checkLayout }
    }
}
</script>
<style scoped>
    .active, .icon {
        color: #FF4C60;
    }
    .exact-active-class {
        color: #FF4C60;
        font-weight: bold;
    }
    .scrollbar::-webkit-scrollbar {
        width: 10px;
        background-color: #B8B9BE;
    }
</style>