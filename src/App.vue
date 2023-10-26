<template>
  <main class="p-5 md:p-10 bg-background min-h-screen">
    <div class="bg-white rounded-[2.2rem] min-h-mainHeight px-8 md:px-16 relative">
      <Header />
      <Home />
    </div>
  </main>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
