<script setup lang="ts">
  const appConfig = useAppConfig();
</script>
<template>
  <div id="app">
    <Navbar />
    <NuxtPage />
    <navbarMobile />
    <div class="cover"></div>
  </div>
</template>

<style lang="scss">
  html{
    scroll-behavior: smooth;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: #282a36;
    color: $text-color;
    font-family: $font-sans;
    font-size: 14px;
  }
  #app{
    overflow-x: hidden;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
  }
</style>
