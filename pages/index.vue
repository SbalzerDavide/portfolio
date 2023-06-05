<script setup lang="ts">
  import ScrollTop from 'primevue/scrolltop';
  const menu = useMenu();
</script>

<template>
  <div class="container">
    <header>
      <h4>Hi, my name is Davide Sbalzer</h4>
      <h1>I build things for the web.</h1>
      <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
    </header>
    <!-- :id="`box-${menuEl.menuKey}`" -->
    <Box
    v-for="(menuEl, index) in menu" 
      :key="index"
      :id="menuEl.title"
      :menuKey="menuEl.menuKey"
      :title="menuEl.title"
      :desc="menuEl.desc"
    />
    <ScrollTop :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />
  </div>
</template>

<style lang="scss">
  @import '~/assets/scss/common.scss';
  .container{
    padding: 0 40px;
  }
  header{
    margin: 60px 0;
    font-family: $font-sans;
    & > *{
      padding-bottom: 25px;
    }
    h1{
      color: $text-color-strong;
      font-size: 80px;
    }
    h4{
      font-weight: 400;
      font-size: 18px;
      font-family: $font-mono;
      color: $primary;
    }
    p{
      display: inline-block;
      width: 60%;
    }
  }
  .p-scrolltop{
    padding: 10px;
  }
</style>