<template>
    <div class="flex">
        <NavBar :layout="layout" class="fixed"/>
        <keep-alive class="ml-[280px]">
            <component :is="layout" class="flex-1">
                <transition name="fade">
                    <router-view/>
                </transition>
            </component>
        </keep-alive>
            
            <!-- <router-view v-slot="{ components }">
                <transition name="fade">
                    <component :is="layout"></component>
                </transition>
            </router-view> -->
            <!-- <div class="w-4/5 left-72 relative">
                <Home />
                <About />
            </div> -->
    </div>
</template>
<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/Navbar.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
export default {
    components: {
        NavBar, Home, About,
    },
    setup() {
        const isShowing = true
        const route = useRoute()
        const layout = computed(() => route.meta.layout + '-layout')
        return { isShowing, layout}
    }
}
</script>
<style>
    .fade-enter-active {
        opacity: 0;
        animation: fade 0.5s linear;
    }
    .fade-leave-active {
        opacity: 0;
    }
    @keyframes fade {
        from {
            opacity: 0;
            transform: translateX(-100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
</style>