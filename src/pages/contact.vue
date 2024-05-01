<template>
    <div class="border-t sm:border-t-0 pb-8 sm:pb-0">
        <h2 class="text-2xl font-semibold drop-shadow-xl text-gray-600 p-6 text-shadow-md dark:text-gray-400">Contact</h2>
        <div class=" p-6">
            <div class="sm:grid sm:grid-cols-3 ">
                <div class="">
                    <h3 class="font-semibold text-xl text-gray-700">Let's talk about everything!</h3>
                    <p class="my-4 ">Contact with me!</p>
                </div>
                <div class="col-span-2">
                    <div class="grid grid-cols-2 gap-2 mb-3">
                        <input type="text" placeholder="Your name" v-model="formData.nameValue" class="p-3 rounded-full outline-none border">
                        <input type="email" placeholder="Email" v-model="formData.emailValue" class="p-3 rounded-full outline-none border">
                    </div>
                    <input type="phone" placeholder="Phone number" v-model="formData.phoneValue" class="w-full p-3 rounded-full outline-none border">
                    <textarea cols="30" rows="8" v-model="formData.messageValue" class="mt-4 w-full rounded-2xl p-3 outline-none border" placeholder="Message"></textarea>
                    <div class="w-full mt-2">
                        <button
                            class="float-right relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                            @click="handleSubmit">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'   
import {ref} from 'vue'
export default {
    setup() {
        const formData = ref({
            nameValue: '',
            emailValue: '',
            phoneValue: '',
            messageValue: ''
        })
        
        const handleSubmit = async () => {
            const url = 'https://script.google.com/macros/s/AKfycbwL1LdpuvmeKOUyOrgamHXBD_DnqhJhPL8wroLnmpikIko4168t1u6GP2I77qWQmOXNcw/exec';
            try {
                const response = await axios.post(url, new Date(),formData.value, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                if (response.status === 200) {
                    console.log('Form submitted successfully!');
                    // Reset form fields if needed
                    formData.value = {
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    };
                } else {
                    console.error('Form submission failed:', response.status);
                }
            } catch (error) {
                console.error('Form submission error:', error);
            }
        }
        return { handleSubmit, formData }
    }
}
</script>
<style>
    
</style>