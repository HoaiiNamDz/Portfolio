<template>
    <div>
        <h1 class="relative text-4xl font-semibold drop-shadow-xl text-gray-700 left-24 top-6 mt-8">Contact</h1>
        <div class="container ml-20 mt-20">
            <div class="grid grid-cols-3 mr-20">
                <h3 class="font-semibold text-xl text-gray-700">Let's talk about everything!</h3>
                <input type="text" placeholder="Your name" class="mr-12 p-3 rounded-full">
                <input type="email" placeholder="Email" class="mr-20 p-3 rounded-full">
                <p class="mt-4">Contact with me!</p>
                <div class="col-span-2 mr-20 mt-4">
                    <input type="phone" placeholder="Phone number" class="w-full p-3 rounded-full">
                    <textarea cols="30" rows="8" class="mt-4 w-full rounded-2xl p-3">Message</textarea>
                    <button class="primary-btn block mt-8 button-hover">Send Message</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>