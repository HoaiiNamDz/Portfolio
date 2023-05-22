<template>
    <div>
        <h1 class="relative text-4xl font-semibold drop-shadow-xl text-gray-700 left-24 top-6 mt-8">Experience</h1>
        <div class="grid grid-cols-2 mt-20 ml-20">
            <div class="education rounded-xl shadow-primary py-10 px-6">
                <span class="icon-graduation text-2xl border-none border-solid border-2 px-2 py-1 rounded-xl shadow-primary bg-gray-600 text-gray-100"></span>
                <span class="font-semibold text-xl ml-2">Education</span>
                <ul class="relative">
                    <li class="ml-12 before:w-[2px] before:content[''] before:absolute before:h-full before:bg-red-600 before:left-[18px] before:-top-[1px]">
                        <h3 class="text-lg font-semibold text-gray-700">Trường THCS An Dương</h3>
                    </li>
                </ul>
            </div>
            <div class="experience">
                <span class="icon-book-open text-2xl"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
    h3 {
        font-family: 'Poppins', sans-serif;
    }
</style>