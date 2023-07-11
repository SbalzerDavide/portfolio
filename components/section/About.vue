<script setup lang="ts">
  const techList = [
    "JavaScript (ES6)",
    "TypeScript",
    "Vue.js",
    "PHP",
    "Laravel"
  ]
  const a = ()=>{
    console.log("cioane")
  }
</script>

<template>
  <div class="about">
    <div class="container-text">
      <div class="decription">
        <p>
          Hello! My name is Davide and I enjoy creating things that live on the internet. My interest in web development started in 2020 when I try to create a website that allow me to take and process data from a survey about different visual art works. All obstacle I found using high level tool pushed me to study web development from the basic.
          I signed up for a six mounth full time online course, Boolean Careers, and from that moment I never stop to learning something new.
        </p>
        <p>
          Currently I work for a software house where I develop the web app of a business management software. Next to this I work on personal project for study and try different technology. Some of this are only prototype but other were born from specific need and are used by others. 
        </p>
        <p>
          I am a very curious person and I love to go deep into the study of new things.
        </p>

      </div>
      <div class="tech">
        <p>
          Here are a few technologies I’ve been working with recently:
        </p>
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
  @import '~/assets/scss/common.scss';
  .about{
    display: flex;
    .container-text{
      padding-right: 30px;
      width: 60%;
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
        background-image: url("~/images/Profile.jpeg");
        background-size: cover;
        background-position: center;
      }
    }
  } 
</style>