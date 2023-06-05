<template>
  <div id="app">
    <Navbar />
    <NuxtPage />
  </div>
</template>

<style lang="scss">
  @import '~/assets/scss/common.scss';
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
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
  }
</style>
