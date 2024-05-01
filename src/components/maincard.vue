<template>
    <div class="bg-white relative md:top-1/2 md:left-[22%] md:-translate-y-1/2 md:-translate-x-1/4 md:ml-4 md:w-fit md:dark:bg-[#31313A] before:absolute before:-top-5 before:-left-5 before:content-[''] before:w-full before:h-full before:bg-gradient-to-br from-green-400 to-transparent before:rounded-md before:dark:from-[#31313A] top-20">
        <div class="md:w-96 lg:h-[27rem] md:h-[30rem] relative before:content-[''] before:absolute before:-left-1/4 before:-bottom-[60%] before:rotate-12 before:w-full before:h-[70%] before:bg-white after:content-[''] after:absolute after:-right-1/4 after:-bottom-[60%] after:rotate-[170deg] after:w-full after:h-[70%] after:bg-white overflow-hidden md:rounded-tl-md md:rounded-tr-md before:dark:bg-[#31313A] after:dark:bg-[#31313A] w-full h-[30rem]" :style="{backgroundImage: 'url(\'/avatar.jpg\')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom'}"></div>
        <div class=" bg-white relative dark:bg-[#31313A]">
            <div class="">
                <h1 class="text-3xl text-center text-shadow-lg">Nguyen Hoai Nam</h1>
                <div class="text-center mt-2">
                    <span class="text-green-500">{{ text }}</span><span v-if="showCursor" class="cursor">|</span>
                </div>
            </div>
            <div class="social text-center mt-6 text-xl">
                <a href="https://www.instagram.com/ngx.h.nam/" class="mx-4" target="_blank">
                    <span class="icon-social-instagram hover:text-primary-color transition-all ease-linear "></span>
                </a>
                <a href="https://www.facebook.com/hoaii.nam.14103/" class="mx-4" target="_blank">
                    <span class="icon-social-facebook hover:text-blue-600 transition-all ease-linear "></span>
                </a>
                <a href="https://github.com/HoaiiNamDz" class="mx-4" target="_blank">
                    <span class="icon-social-github hover:text-gray-500 transition-all ease-linear "></span>
                </a>
                <a href="https://soundcloud.com/nvm_ngocnghech" class="mx-4" target="_blank">
                    <span class="icon-social-soundcloud hover:text-orange-600 transition-all ease-linear "></span>
                </a>
            </div>
            <div class="grid grid-cols-2 w-full border-t mt-3">
                <button class="flex items-center gap-2 justify-center p-4 border-r hover:text-green-500 transition-all group ">DOWNLOAD CV
                    <font-awesome-icon icon="fa-solid fa-cloud-arrow-down" class="group-hover:-translate-y-[2px] transition-all"/>
                </button>
                <router-link :to="'/contact'" class=" items-center gap-2 justify-center p-4 hover:text-green-500 transition-all group md:flex hidden">CONTACT ME
                    <font-awesome-icon icon="fa-solid fa-location-arrow" class="group-hover:-translate-y-[2px] transition-all" />
                </router-link>
                <a href="#contact" class="flex items-center gap-2 justify-center p-4 hover:text-green-500 transition-all group md:hidden">CONTACT ME
                    <font-awesome-icon icon="fa-solid fa-location-arrow" class="group-hover:-translate-y-[2px] transition-all" />
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, onMounted } from 'vue'
export default {
    setup() {
        const text = ref('');
        const phrases = [
            "I'm a Front-end Developer",
            "I will become a Fullstack Developer",
        ];
        let index = 0;
        const delay = 100; // Delay between each character typing
        const showCursor = ref(true);

        const typeText = () => {
            if (index < phrases[0].length) {
                text.value += phrases[0].charAt(index);
                index++;
                setTimeout(typeText, delay);
            } else {
                showCursor.value = false; // Hide cursor when typing is done
                setTimeout(() => {
                    // Reset text and index for next phrase
                    text.value = '';
                    index = 0;
                    // Remove the first phrase from the array and put it at the end
                    phrases.push(phrases.shift());
                    // Start typing next phrase
                    typeText();
                }, 2000); // Delay before typing next phrase
            }
        };

        onMounted(() => {
            typeText();
        });

        return { text, showCursor };
    },
}
</script>
<style scoped>
    .cursor {
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>