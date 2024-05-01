<template>
    <div class="md:h-screen h-fit">
        <SplashView />
        <DefaultLayout class="">
            <img src="/logo.png" alt="" class="absolute -top-14 -left-28 dark:invert">
            <NavBar class="z-20"/>
            <MainCard class="relative md:z-10 z-10"/>
            <router-view class="md:absolute md:top-[8%] md:left-[42%] md:bg-white md:w-1/2 md:h-5/6 md:overflow-y-auto md:overflow-x-hidden md:dark:bg-[#31313A] sm:relative sm:top-0 hidden md:block" v-slot="{ Component } ">
                <transition name="slide" mode="out-in">
                    <component :is="Component" :key="$route.path"/>
                </transition>
            </router-view>
            <div class="dark:bg-[#31313A] md:hidden bg-white relative top-20 border-t">
                <About id="about" class="before:content-[''] before:block before:h-40 before:invisible before:pointer-events-none before:-mt-40"/>
                <Project id="project" class="before:content-[''] before:block before:h-40 before:invisible before:pointer-events-none before:-mt-40"/>
                <Work id="work" class="before:content-[''] before:block before:h-40 before:invisible before:pointer-events-none before:-mt-40"/>
                <Contact id="contact" class="before:content-[''] before:block before:h-40 before:invisible before:pointer-events-none before:-mt-40"/>
            </div>
        </DefaultLayout>
    </div>
</template>
<script>
import NavBar from './components/navBar.vue'
import MainCard from './components/mainCard.vue'
import DefaultLayout from './layouts/default.vue'
import SplashView from './components/splashView.vue'
import About from './pages/about.vue'
import Project from './pages/project.vue'
import Work from './pages/work.vue'
import Contact from './pages/contact.vue'

export default {
    components: {
        NavBar, MainCard, DefaultLayout, SplashView, About, Project, Work, Contact, Contact
    },
    setup() {

    }
}
</script>
<style>
    .slide-enter-active,
    .slide-leave-active  {
        transition: opacity 0.5s, transform 0.5s;
    }
    .slide-enter-from,
    .slide-leave-to {
        opacity: 0;
        transform: translateX(-30%);
    }
</style>