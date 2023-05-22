<template>
    <div class="relative">
        <h2 class="relative text-4xl font-semibold drop-shadow-xl text-gray-700 left-24 top-6 mt-8">About Me</h2>
        <div class="grid grid-cols-3">
            <div class="avatar">
                <img class="h-36 w-36 mt-32 ml-24 rounded-full" src="../assets/img/avatar.jpg" alt="avatar" style="object-fit: cover; object-position: bottom;">
                <div class="personal-info mt-12 ml-4">
                    <div class="container flex items-center mb-6">
                        <span class="icon-envelope ml-8 mr-2 font-semibold text-xl flex justify-center items-center w-10 h-10 border-solid border-2 border-transparent rounded-lg bg-gray-600 shadow-primary text-orange-300"></span>
                        <div class="leading-5">
                            <p class="text-gray-700">EMAIL</p>
                            <a href="mailto:namnguyen14103@gmail.com">namnguyen14103@gmail.com</a>
                        </div>
                    </div>
                    <div class="container flex items-center mb-6">
                        <span class="icon-screen-smartphone ml-8 mr-2 font-semibold text-xl flex justify-center items-center w-10 h-10 border-solid border-2 border-transparent rounded-lg bg-gray-600 shadow-primary text-orange-300"></span>
                        <div class="leading-5">
                            <p class="text-gray-700">PHONE</p>
                            <a href="tel:+84855185913">+84 855 185 913</a>
                        </div>
                    </div>
                    <div class="container flex items-center mb-6">
                        <span class="icon-calendar ml-8 mr-2 font-semibold text-xl flex justify-center items-center w-10 h-10 border-solid border-2 border-transparent rounded-lg bg-gray-600 shadow-primary text-orange-300"></span>
                        <div class="leading-5">
                            <p class="text-gray-700">BIRTHDAY</p>
                            <p>14/10/2003</p>
                        </div>
                    </div>
                    <div class="container flex items-center mb-6">
                        <span class="icon-location-pin ml-8 mr-2 font-semibold text-xl flex justify-center items-center w-10 h-10 border-solid border-2 border-transparent rounded-lg bg-gray-600 shadow-primary text-orange-300"></span>
                        <div class="leading-5">
                            <p class="text-gray-700">ADDRESS</p>
                            <p>An Dương, Tây Hồ, Hà Nội</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info relative col-span-2 pt-6 pb-10 mb-10 px-10 bg-background-color right-14 top-24 ml-20 rounded-3xl shadow-primary">  
                <div class="flex justify-between mb-2">
                    <div class="instroduce w-1/2 border-r border-solid border-black pr-4 text-gray-800">
                        Hello 
                        <br>
                        I am Nguyen Hoai Nam. I'm a student at Thuy Loi University. 
                        <br>
                        I come from Ha Noi, VietNam.
                        <br>
                        Now, I am a FrontEnd Developer. I will be a Fullstack Developer in the future.
                    </div>
                    <div class="skill pl-4 w-1/2">
                        <p class="font-semibold">My skill:</p>
                        <p class="text-gray-800">- I'm good at Office Infomation</p>
                        <p class="text-gray-800">- My English skills are at level B1, can listen and read the document at a basic level</p>
                        <p class="text-gray-800">- Good communication skills</p>
                    </div>
                </div>
                <p class="font-semibold leading-6">Language skills:</p>
                <div class="flex flex-wrap gap-6 px-4 py-4 mb-4 bg-gray-300 rounded-2xl mt-4">
                    <img class="mx-2 w-20 my-2 brightness-90 hover:brightness-100" src="../assets/img/html-img.png" alt="html">
                    <img class="mx-2 w-20 my-2 brightness-90 hover:brightness-100" src="../assets/img/css-img.png" alt="css">
                    <img class="mx-2 w-20 my-2 brightness-90 hover:brightness-100" src="../assets/img/js-img.png" alt="js">
                    <img class="mx-2 w-20 my-2 brightness-90 hover:brightness-100" src="../assets/img/c-img.png" alt="c">
                    <img class="mx-2 w-20 my-2 brightness-90 hover:brightness-100" src="../assets/img/c++-img.png" alt="c++">
                    <img class="mx-2 w-20 my-2 brightness-90 hover:brightness-100" src="../assets/img/vue-img.png" alt="vue">
                    <img class="mx-2 w-20 my-2 brightness-90 hover:brightness-100" src="../assets/img/tailwind-img.png" alt="tailwind">
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