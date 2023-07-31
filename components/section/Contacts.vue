<script setup>
  const appConfig = useAppConfig();
</script>

<template>
  <div class="contacts">
    <h3 v-if="appConfig.language === 'en'">Get In Touch</h3>
    <h3 v-else-if="appConfig.language === 'it'">Mettiti in contatto</h3>
    <p v-if="appConfig.language === 'en'">My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
    <p v-else-if="appConfig.language === 'it'">La mia casella di posta è sempre aperta. Se hai proposte, domande o semplicemente vuoi salutarmi, farò del mio meglio per risponderti!</p>
    <button class="animate">
      <div class="background"></div>
      <a href= "mailto:sbalzerdavide@hotmail.it" class="button">
        Say Hello
      </a>
    </button>
    <div class="social">
      <a href="https://github.com/SbalzerDavide" target="_blank">
        <i class="pi pi-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/davide-sbalzer-60b952205/" target="_blank">
        <i class="pi pi-linkedin"></i>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/common.scss';
  h3{
    // text-align: center;
    font-size: 40px;
    color: $text-color-strong;
  }
  p{
    margin: 18px 0;
    width: 65%;
  }
  a{
    color: $text-color;
  }
  .social{
    margin-top: 20px;
    a{
      position: relative;
      bottom: 0;
      transition: all .3s;
      &:hover{
        bottom: 5px;
        color: $primary;
      }
    }
    i{
      margin-right: 18px;
      font-size: 25px;
    }
  }
</style>