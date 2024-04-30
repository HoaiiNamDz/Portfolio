<template lang="">
    <div class="sticky top-0 left-[10%] h-20 bg-white md:absolute md:top-1/3 md:-translate-y-3/4 md:left-[8%] md:flex md:flex-col md:gap-4 md:bg-transparent">
        <div class="md:dark:bg-[#31313A] md:bg-white md:w-full md:rounded-md text-center w-20 h-full md:ml-0 ml-auto md:relative md:top-0">
            <img src="/logo.png" alt="" class="absolute -top-14 -left-28 dark:invert z-0 md:hidden ">
            <label class="theme-toggle group cursor-pointer md:px-3 md:py-5 border-b group py-3 px-5" title="Toggle theme">
                <input type="checkbox" @click="toggleTheme" v-model="isDark"/>
                <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true"
                    width="24px"
                    height="24px"
                    class="theme-toggle__classic m-auto group-hover:text-green-600  fill-white "
                    viewBox="0 0 32 32">
                    <clipPath id="theme-toggle__classic__cutout">
                        <path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
                    </clipPath>
                    <g clip-path="url(#theme-toggle__classic__cutout)">
                        <circle cx="16" cy="16" r="9.34" stroke="currentColor" stroke-width="1.5" :class="{'fill-none': !isToggle}"/>
                        <g stroke="currentColor" stroke-width="1.5">
                            <path d="M16 5.5v-4" />
                            <path d="M16 30.5v-4" />
                            <path d="M1.5 16h4" />
                            <path d="M26.5 16h4" />
                            <path d="m23.4 8.6 2.8-2.8" />
                            <path d="m5.7 26.3 2.9-2.9" />
                            <path d="m5.8 5.8 2.8 2.8" />
                            <path d="m23.4 23.4 2.9 2.9" />
                        </g>
                    </g>
                </svg>
            </label>
        </div>
        <ul class="dark:bg-[#31313A] bg-white md:rounded-md flex md:block md:max-h-none max-h-20 md:mx-0 z-20 relative shadow-lg md:shadow-none">
            <li class="router group cursor-pointer px-3 py-5 md:border-b w-1/4 md:w-full"  active-class="active" exact-active-class="exact-active-class">
                <router-link :to="{name: 'about', params: {}}" class="flex-col items-center group-hover:text-green-500 gap-2 hidden md:flex">
                    <font-awesome-icon icon="fa-regular fa-user" />
                    <p class="text-sm">ABOUT</p>
                </router-link>
                <a href="#about" class="flex flex-col items-center group-hover:text-green-500 gap-2 md:hidden">
                    <font-awesome-icon icon="fa-regular fa-user" />
                    <p class="text-sm">ABOUT</p>
                </a>
            </li>
            <li class="group cursor-pointer px-3 py-5 md:border-b w-1/4 md:w-full">
                <router-link :to="{name: 'project', params: {}}" class=" flex-col items-center group-hover:text-green-500 gap-2 hidden md:flex">
                    <font-awesome-icon icon="fa-regular fa-rectangle-list" />
                    <p class="text-sm">PROJECT</p>
                </router-link>
                <a href="#project" class="flex flex-col items-center group-hover:text-green-500 gap-2 md:hidden scroll-smooth">
                    <font-awesome-icon icon="fa-regular fa-rectangle-list" />
                    <p class="text-sm">PROJECT</p>
                </a>
            </li>
            <li class="group cursor-pointer px-3 py-5 md:border-b w-1/4 md:w-full">
                <router-link :to="{name: 'work', params: {}}" class=" flex-col items-center group-hover:text-green-500 gap-2 hidden md:flex">
                    <font-awesome-icon icon="fa-solid fa-eye" />
                    <p class="text-sm">WORK</p>
                </router-link>
                <a href="#work" class="flex flex-col items-center group-hover:text-green-500 gap-2 md:hidden scroll-smooth">
                    <font-awesome-icon icon="fa-solid fa-eye" />
                    <p class="text-sm">WORK</p>
                </a>
            </li>
            <li class="group cursor-pointer px-3 py-5 w-1/4 md:w-full">
                <router-link :to="{name: 'contact', params: {}}" class=" flex-col items-center group-hover:text-green-500 gap-2 hidden md:flex">
                    <font-awesome-icon icon="fa-regular fa-paper-plane" />
                    <p class="text-sm">CONTACT</p>
                </router-link>
                <a href="#contact" class="flex flex-col items-center group-hover:text-green-500 gap-2 md:hidden scroll-smooth">
                    <font-awesome-icon icon="fa-regular fa-paper-plane" />
                    <p class="text-sm">CONTACT</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import {ref  } from 'vue'
import { useDark } from "@vueuse/core";
export default {
    setup() {
        const isDark = useDark({
            selector: 'html',
        })
        const isToggle = ref(false)
        function toggleTheme() {
            isToggle.value = !isToggle.value
        }
        return {isToggle, toggleTheme, isDark}
    }
}
</script>
<style scoped>
    .active {
        color: #22c55e;
    }
    .exact-active-class {
        color: #22c55e;
    }
    .scrollbar::-webkit-scrollbar {
        width: 10px;
        background-color: #B8B9BE;
    }
</style>