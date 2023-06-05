<template>
  <div class="contacts">
    <h3>Get In Touch</h3>
    <p>My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
    <button>
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
  button{
    position: relative;
    margin: 18px 0;
    border: none;
    background: transparent;
    cursor: pointer;
    &:hover{
      .button{
        bottom: 10px;
        left: 10px;
      }
    }
    .button{
      position: relative;
      display: block;
      padding: 18px 25px;
      border: 1px solid $primary;
      border-radius: 4px;
      bottom: 0;
      left: 0;
      background: #282a36;
      color: $primary;
      transition: all .3s;
    }
    .background{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background-color: $primary;
    }
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