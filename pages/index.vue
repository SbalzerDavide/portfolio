<script setup lang="ts">
  import ScrollTop from 'primevue/scrolltop';
  const menu = useMenu();
  const appConfig = useAppConfig();

</script>

<template>
  <div class="container">
    <header>
      <h4 v-if="appConfig.language == 'en'">
        Hi, my name is Davide Sbalzer
      </h4>
      <h4 v-else-if="appConfig.language == 'it'">
        Ciao, mi chiamo Davide Sbalzer
      </h4>

      <h1 v-if="appConfig.language =='en'">
        I build things for the web.
      </h1>
      <h1 v-else-if="appConfig.language == 'it'">
        Costruisco cose per il web
      </h1>

      <p v-else-if="appConfig.language == 'en'">
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
      </p>
      <p v-else-if="appConfig.language == 'it'">
      </p>
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
    <ScrollTop :threshold="100" icon="pi pi-arrow-up" />
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
  @media screen and (max-width: 600px) {
    header{
      h1{
        font-size: 50px;
      }
    }
    .container{
      padding: 0 20px;
    }
  }

</style>