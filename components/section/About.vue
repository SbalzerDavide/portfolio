<script setup lang="ts">
  const techList = [
    "JavaScript (ES6)",
    "TypeScript",
    "Vue.js",
    "PHP",
    "Laravel"
  ]

</script>

<template>
  <div class="about">
    <div class="container-text">
      <div class="decription">
        <p>{{ $t('aboutMe.description.text1') }}</p>
        <p>{{ $t('aboutMe.description.text2') }}</p>
        <p>{{ $t('aboutMe.description.text3') }}</p>
      </div>
      <div class="tech">
        <p>{{ $t('tech.text') }}</p>
        <ul class="tech-list">
          <li 
            v-for="(el, index) in techList"
            :key="index"
            @click="a"
          >
            <i class="pi pi-caret-right"></i>
            {{ el }}
          </li>
        </ul>
      </div>

    </div>
    <div class="container-image">
      <div class="overlay"></div>
      <div class="frame"></div>
      <div class="image"></div>
    </div>
  </div>
</template>

<style lang="scss">
  .about{
    display: flex;
    // flex-wrap: wrap;
    .container-text{
      padding-right: 30px;
      width: 60%;
      // min-width: 300px;
      p{
        margin-bottom: 20px;
      }
      .tech{
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            margin-bottom: 15px;
            width: 250px;
            i{
              color: $primary;
            }
          }
        }
      }
    }
    .container-image{
      width: 300px;
      height: 400px;
      position: relative;
      bottom: 0;
      right: 0;
      transition: all .3s;
      &:hover{
        bottom: 10px;
        right: 10px;
        .overlay{
          background: rgba(151, 225, 241, 0);
        }
        .frame{
          top: 30px;
          left: 30px;
        }
      }
      .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(151, 225, 241, .5);
        border-radius: 5px;
        z-index: 1;
        transition: all .3s;
      }
      .frame{
        position: absolute;
        top: 10px;
        left: 10px;
        width: 100%;
        height: 100%;
        border: 2px solid $primary;
        border-radius: 5px;
        transition: all .3s;
      }
      .image{
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-image: url("~/assets/images/Profile.jpeg");
        background-size: cover;
        background-position: center;
      }
    }
  } 
  @media screen and (max-width: 600px) {
    .about{
      flex-direction: column;
      align-items: stretch;
      .container-text, .container-image{
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
</style>