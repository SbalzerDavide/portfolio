<script setup lang="ts">
  import ScrollTop from 'primevue/scrolltop';
  const menu = useMenu();
  const appConfig = useAppConfig();

</script>

<template>
  <div class="container">
    <header>
      <h4 v-if="appConfig.language == 'en'">
        Hi, my name is Davide Sbalzer.
      </h4>
      <h4 v-else-if="appConfig.language == 'it'">
        Ciao, mi chiamo Davide Sbalzer.
      </h4>

      <h1 v-if="appConfig.language =='en'">
        I build things for the web
        <span class="flashing-underscore">_</span>
      </h1>
      <h1 v-else-if="appConfig.language == 'it'">
        Costruisco cose per il web
        <span class="flashing-underscore">_</span>
      </h1>

      <h3 v-if="appConfig.language == 'en'">
        I’m a web developer specializing in building and designing digital experiences.
      </h3>
      <h3 v-else-if="appConfig.language == 'it'">
        Sono uno web developer specializzato nello sviluppo e nella progettazione esperienze digitali.
      </h3>
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
      display: inline-block;
    }
    h3{
      display: inline-block;
      max-width: 600px;
      font-weight: 400;
      font-size: 18px;
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
    .flashing-underscore{
      animation: flash 1.4s linear infinite
    }
  }
  .p-scrolltop{
    padding: 10px;
  }
  @keyframes flash {
    0% {opacity: 0;}
    1% {opacity: 1;}
    50% {opacity: 1;}
    51% {opacity: 0;}
    99% {opacity: 0;}
    100% {opacity: 1;}
  }
  @media screen and (max-width: 600px) {
    header{
      h1{
        font-size: 50px;
      }
    }
    .container{
      position: relative;
      top: 20px;
      padding: 0 20px;
    }
  }

</style>