<template>
  <div class="flex items-center justify-between py-5 text-vue">
    <div class="flex items-center hover:scale-105 transition-transform cursor-pointer active:scale-95">
      <img src="../assets/logo.png" class="w-[60px] sm:w-[70px]">
      <p class="font-bold text-lg sm:text-xl">VUE</p>
    </div>
    <ul class="hidden sm:flex items-center gap-6 font-bold">
      <li class="hover:opacity-70 cursor-pointer hover:scale-105 transition-transform active:scale-95" v-for="link in headersLink" :key="link">{{ link }}</li>
    </ul>
    <div class="block sm:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" height="2.2em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        headersLink: ['Home', 'Products', 'About Us']
      }
    }
  }
</script>