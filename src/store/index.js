import { defineStore } from 'pinia'
export const useStore = defineStore('store', {
    actions: {
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
    }
})