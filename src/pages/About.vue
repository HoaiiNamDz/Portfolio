<template>
    <div>
        <h2 class="text-2xl font-semibold drop-shadow-xl text-gray-600 p-6 text-shadow-md dark:text-gray-400">About Me</h2>
        <div class="sm:grid sm:grid-cols-2 border-t px-6 py-3">
            <div class="sm:border-r text-justify sm:pr-6">
                <div>
                    <span>Hello</span>
                    <span class="text-xl">👋</span>
                    <span class="">I am Nguyen Hoai Nam. I am a person who loves to explore and am currently a 3rd year student majoring in Information Technology at Thuy Loi University.
                        I am constantly seeking opportunities to expand my knowledge and stay up-to-date with the latest trends and technologies in web development.
                        I want to learn and develop myself to become a professional Fullstack Developer in the near future.
                    </span>
                </div>
            </div>
            <div class="sm:pl-6 flex flex-col gap-2">
                <div class="flex items-center justify-between border-b py-3">
                    <span class="p-1 px-3 bg-green-500 text-white rounded-sm">Email</span>
                    <span>namnguyen14103@gmail.com</span>
                </div>
                <div class="flex items-center justify-between border-b py-3">
                    <span class="p-1 px-3 bg-green-500 text-white rounded-sm">Phone</span>
                    <span>0855185913</span>
                </div>
                <div class="flex items-center justify-between border-b py-3">
                    <span class="p-1 px-3 bg-green-500 text-white rounded-sm">Address</span>
                    <span>Yen Phu, Tay Ho, Ha Noi</span>
                </div>
                <div class="flex items-center justify-between py-3">
                    <span class="p-1 px-3 bg-green-500 text-white rounded-sm">Skills</span>
                    <div class="grid grid-cols-5 gap-3">
                        <!-- VueJs -->
                        <section class="flex justify-center items-center">
                            <button class="group flex justify-center items-center w-8 h-8 rounded-md text-white font-semibold hover:rounded-[50%] transition-all duration-500" :style="{background: 'linear-gradient(135deg,rgba(76,175,81,.15),rgba(76,175,81,.01))'}">
                                <font-awesome-icon icon="fa-brands fa-vuejs" class="w-6 h-6 text-green-600"/>
                                
                                <span
                                    class=" p-1 bg-white group-hover:bg-white rounded-sm pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-10 duration-700 "
                                >
                                VueJs
                                </span>
                            </button>
                        </section>
                        <!-- NuxtJs -->
                        <section class="flex justify-center items-center">
                            <button class="group flex justify-center items-center w-8 h-8 rounded-md  text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" :style="{background: 'linear-gradient(135deg,rgba(76,175,81,.15) 0%,rgba(76,175,81,.01) 100%)'}">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 48 48" class="fill-green-600">
                                    <polygon fill="none" points="26.055,24.519 18.71,37 33.401,37"></polygon><path fill="none" d="M14.279,36.641l9.455-16.065l-4.653-7.907L4.762,37h9.366C14.178,36.88,14.212,36.756,14.279,36.641	C14.279,36.642,14.279,36.642,14.279,36.641z"></path><path fill="" d="M14.262,39.569c-0.453-0.792-0.481-1.74-0.134-2.569H4.762l14.319-24.331l4.653,7.907l2.321-3.943	l-4.358-7.404c-0.551-0.937-1.528-1.496-2.615-1.497c0,0,0,0-0.001,0c-1.086,0-2.064,0.559-2.616,1.496L0.458,36.425	c-0.551,0.936-0.559,2.103-0.02,3.046S1.988,41,3.074,41h13.438C15.58,40.908,14.732,40.392,14.262,39.569z M2.182,37.44h0.01H2.182	z"></path><path fill="" d="M47.65,36.641L33.478,12.562c-0.53-0.9-1.469-1.437-2.513-1.437c-1.044,0-1.984,0.537-2.514,1.437	l-2.396,4.071l2.321,3.943l2.589-4.398L43,37h-5c0.258,0.802,0.151,1.724-0.276,2.471C37.185,40.414,36.086,41,35,41l0,0	c0.001,0.013-0.001-0.013,0,0h10c1.043,0,2.149-0.525,2.667-1.431C48.186,38.664,48.179,37.542,47.65,36.641z"></path><path fill="" d="M38,37c-0.068-0.21-0.182-0.381-0.296-0.575l-9.328-15.849l-2.321-3.943l-2.321,3.943l-9.455,16.065	c0,0,0,0.001,0,0.001c-0.067,0.113-0.101,0.238-0.151,0.358c-0.347,0.829-0.32,1.778,0.134,2.569c0.47,0.822,1.318,1.338,2.25,1.431	h18.576c1.086,0,2.096-0.586,2.635-1.529C38.151,38.724,38.258,37.802,38,37z M26.055,24.519L33.401,37H18.71L26.055,24.519z"></path>
                                </svg>

                                <span
                                    class="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-10 duration-700 bg-white p-1 rounded-sm"
                                >
                                NuxtJs
                                </span>
                            </button>
                        </section>
                        <!-- JS -->
                        <section class="flex justify-center items-center">
                            <button class="group flex justify-center items-center w-8 h-8 rounded-md  text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" :style="{background: 'linear-gradient(135deg,rgba(76,175,81,.15) 0%,rgba(76,175,81,.01) 100%)'}">
                                <font-awesome-icon icon="fa-brands fa-js" class="w-6 h-6 text-green-600"/>

                                <span
                                    class="bg-white p-1 rounded-sm pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-10 duration-700"
                                >
                                Js
                                </span>
                            </button>
                        </section>
                        <!-- SQL -->
                        <section class="flex justify-center items-center">
                            <button class="group flex justify-center items-center w-8 h-8 rounded-md  text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" :style="{background: 'linear-gradient(135deg,rgba(76,175,81,.15) 0%,rgba(76,175,81,.01) 100%)'}">
                                <font-awesome-icon icon="fa-solid fa-database" class="w-6 h-6 text-green-600"/>

                                <span
                                    class="bg-white p-1 rounded-sm pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-10 duration-700"
                                >
                                MySQL
                                </span>
                            </button>
                        </section>
                        <!-- Firebase -->
                        <section class="flex justify-center items-center">
                            <button class="group flex justify-center items-center w-8 h-8 rounded-md  text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" :style="{background: 'linear-gradient(135deg,rgba(76,175,81,.15) 0%,rgba(76,175,81,.01) 100%)'}">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" class="fill-green-600">
                                    <path d="M8.56 4.94l-6.02 10.4L5.545 1.147C5.642.69 6.257.603 6.476 1.016L8.56 4.94zM9.67 7.02L10.87 9.27 5.34 14.5zM14.16 6.15l-1.79 1.7-1.52-2.86.973-1.674c.198-.341.694-.329.876.021L14.16 6.15zM21.13 18.74l-8.8 5.12C12.18 23.96 12 24 11.83 24c-.17 0-.35-.04-.5-.13l-8.05-4.65L18.647 4.657c.291-.276.771-.114.837.281L21.61 17.71C21.68 18.12 21.49 18.53 21.13 18.74z"></path>
                                </svg>

                                <span
                                    class="bg-white p-1 rounded-sm pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-10 duration-700"
                                >
                                Firebase
                                </span>
                            </button>
                        </section>
                        <!-- Tailwind -->
                        <section class="flex justify-center items-center">
                            <button class="group flex justify-center items-center w-8 h-8 rounded-md  text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" :style="{background: 'linear-gradient(135deg,rgba(76,175,81,.15) 0%,rgba(76,175,81,.01) 100%)'}">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" class="fill-green-600">
                                    <path d="M6.75,8.75c0,0,2-3.75,5.625-3.75S17.612,9,20,9c0,0,2,1.625,3,0c-1,2.75-3,3-5,3c-1.469,0-3-1-5.125-2.875 C11.125,7.875,8.5,7.5,6.75,8.75z" opacity=".3"></path><path d="M1.25,15.25c0,0,2-3.75,5.625-3.75s5.237,4,7.625,4c0,0,2,1.625,3,0c-1,2.75-3,3-5,3c-1.469,0-3-1-5.125-2.875 C5.625,14.375,3,14,1.25,15.25z" opacity=".3"></path><path d="M18,13c-1.858,0-3.489-1.297-5.748-3.092C10.731,8.699,7.247,8.289,6.7,8.714L5.293,7.293C7.346,5.239,8.586,4,11,4 c3.018,0,5.214,1.688,6.979,3.046c0.554,0.425,1.077,0.827,1.527,1.092c0.342,0.201,1.072,0.436,1.685,0.253 c0.391-0.115,0.689-0.39,0.914-0.838l1.834,0.789C22.879,11.259,20.659,13,18,13z M8.983,6.633 c1.707,0.234,3.512,0.913,4.514,1.709C15.632,10.04,16.894,11,18,11c0.745,0,1.435-0.207,2.042-0.599 c-0.611-0.097-1.158-0.31-1.548-0.539c-0.557-0.328-1.128-0.767-1.732-1.231C15.156,7.397,13.337,6,11,6 C10.214,6,9.641,6.176,8.983,6.633z"></path><path d="M13,20c-1.858,0-3.489-1.297-5.748-3.092C5.732,15.7,2.246,15.287,1.7,15.714l-1.407-1.421C2.346,12.239,3.586,11,6,11 c3.018,0,5.214,1.688,6.979,3.046c0.554,0.425,1.077,0.827,1.527,1.092c0.342,0.201,1.072,0.433,1.685,0.253 c0.391-0.115,0.689-0.39,0.914-0.838l1.834,0.789C17.879,18.259,15.659,20,13,20z M3.983,13.633 c1.707,0.234,3.512,0.913,4.514,1.709C10.632,17.04,11.894,18,13,18c0.745,0,1.435-0.207,2.042-0.599 c-0.611-0.097-1.158-0.31-1.548-0.539c-0.557-0.328-1.128-0.767-1.732-1.231C10.156,14.397,8.337,13,6,13 C5.214,13,4.641,13.176,3.983,13.633z"></path>
                                </svg>

                                <span
                                    class="bg-white p-1 rounded-sm pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-10 duration-700"
                                >
                                TailwindCss
                                </span>
                            </button>
                        </section>
                        <!-- PHP -->
                        <section class="flex justify-center items-center">
                            <button class="group flex justify-center items-center w-8 h-8 rounded-md  text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" :style="{background: 'linear-gradient(135deg,rgba(76,175,81,.15) 0%,rgba(76,175,81,.01) 100%)'}">
                                <font-awesome-icon icon="fa-brands fa-php" class="w-6 h-6 text-green-600"/>

                                <span
                                    class="bg-white p-1 rounded-sm pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-10 duration-700"
                                >
                                PHP
                                </span>
                            </button>
                        </section>
                        <!-- Laravel -->
                        <section class="flex justify-center items-center">
                            <button class="group flex justify-center items-center w-8 h-8 rounded-md  text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" :style="{background: 'linear-gradient(135deg,rgba(76,175,81,.15) 0%,rgba(76,175,81,.01) 100%)'}">
                                <font-awesome-icon icon="fa-brands fa-laravel" class="w-6 h-6 text-green-600"/>

                                <span
                                    class="bg-white p-1 rounded-sm pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-10 duration-700"
                                >
                                Laravel
                                </span>
                            </button>
                        </section>
                        <!-- Java -->
                        <section class="flex justify-center items-center">
                            <button class="group flex justify-center items-center w-8 h-8 rounded-md  text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" :style="{background: 'linear-gradient(135deg,rgba(76,175,81,.15) 0%,rgba(76,175,81,.01) 100%)'}">
                                <font-awesome-icon icon="fa-brands fa-java" class="w-6 h-6 text-green-600"/>

                                <span
                                    class="bg-white p-1 rounded-sm pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-10 duration-700"
                                >
                                Java
                                </span>
                            </button>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {

    }
}
</script>
<style>
    
</style>