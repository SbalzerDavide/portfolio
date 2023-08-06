<script setup lang="ts">

  const projects = useProject();

  import { Project } from "~/composables/useProject"

  const appConfig = useAppConfig();

  function openProject(project: Project) {
    let projLink = project.link?.find((el)=> el.type === "project");
    if(projLink){
      window.open(projLink.link)
    } else{
      console.log("link not found");
    }
  }

</script>

<template>
  <div class="projects">
    <div
      v-for="project in projects"
      class="project"
    >
      <!-- style="background-image:url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')" -->
      <!-- :style="`background-image:url('${project.img[0]}')'`" -->
      <a
        v-if="project.img.length === 1" 
        class="project-image"
        :class="project.img[0].direction"
        @click="openProject(project)"
      >
        <div class="overlay"></div>
        <img 
          :src="project.img[0].img" 
          :alt="project.name"
        >
      </a>
      <a
        v-else-if="project.img.length > 1"
        class="many-images"
        @click="openProject(project)"
      >
        <div 
          v-for="(image, index) in project.img"
          class="image-container"
          :class="`image-container-${index}`"
        >
          <div class="overlay"></div>

          <img 
            :src="image.img" 
            :alt="project.name"
          >
        </div>
      </a>
      <div class="project-bottom">
        <div class="project-section">
          <h4>Personal Project</h4>
          <h2>{{ project.name }}</h2>
          <div class="project-desc">
            <p v-if="appConfig.language == 'en'">
              {{ project.description.en }}
            </p>
            <p v-else-if="appConfig.language == 'it'">
              {{ project.description.it }}
            </p>
          </div>
        </div>
        <ul class="project-technology">
          <li
            v-for="tech in project.technology"
          >
            {{ tech }}
          </li>
        </ul>
        <ul class="project-link">
          <li
            v-for="link in project.link"
          >          
            <a target="_blank" :href="link.link">
              <i
                v-if="link.type === 'gitHub'"
                class="pi pi-github"
              ></i>
              <i
                v-else-if="link.type === 'project'"
                class="pi pi-external-link"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .projects{
    .project{
      margin: 40px 0;
      position: relative;
      min-height: 400px;
      &:nth-child(odd){
        text-align: right;
        .project-bottom{
          left: 50%; 
        }
        .project-image{
          justify-content: flex-end;
        }
        ul{
          justify-content: flex-end;
          li{
            margin-left: 18px;
          }
        }
        .project-image.portrait{
          left: 25%;
        }
      }
      &:nth-child(even){
        .project-image{
          right: 0;
        }
        li{
          margin-right: 18px;
        }
      }
      .project-section{
        // width: 50%;
      }
      .many-images{
        position: relative;
        width: 100%;
        display: inline-block;
        cursor: pointer;
        .image-container{
          position: absolute;
          height: 300px;
          // filter: blur(1px);
          transition: all .3s;
          z-index: 2;
          &:nth-child(2){
            left: 100px;
            top: -10px;
            height: 320px;
            z-index: 3;
          }
          &:nth-child(3){
            left: 200px;
            height: 340px;
            top: -20px;
            z-index: 4;
          }
          &:nth-child(4){
            left: 300px;
            height: 360px;
            top: -30px;
            z-index: 5;
          }
          &:hover{
            z-index: 6;
            // filter: blur(0);
            transform: scale(1.05);
            .overlay{
            background: rgba(151, 225, 241, 0);
          }

          }
        }
        img{
          height: 100%;
          border-radius: 5px;
        }
      }
      .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(151, 225, 241, .4);
        border-radius: 5px;
        z-index: 1;
        transition: all .3s;
      }
      .project-image{
        position: absolute;
        // width: 65%;
        display: flex;
        justify-content: center;
        height: 300px;
        transition: all .3s;
        cursor: pointer;
        img{
          height: 100%;
          border-radius: 5px;
        }
        &:hover{
          transform: scale(1.05);
          .overlay{
            background: rgba(151, 225, 241, 0);
          }
        }
        // background-image: url("~/public/images/formForPrint.png");
      }
      .project-bottom{
        position: absolute; 
        width: 50%;  
        z-index: 10;    
      }
      .project-desc{
        padding: 18px;
        background-color: rgb(52, 55, 70);
        margin: 20px 0;
        border-radius: 3px;
        box-shadow: 5px 5px 15px -3px rgba(0,0,0,0.2);
      }
      h4{
        font-weight: 400;
        color: $primary;
      }
      h2{
        // color: $text-color-strong;
        font-size: 28px;
      }
      ul{
        font-family: $font-mono;
        display: flex;
        margin: 20px 0;
        li{
          font-size: 12px;
        }
      }
      a{
        color: $text-color;
      }
      i{
        font-size: 20px;
        cursor: pointer;
        &:hover{
          color: $primary;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .projects{
      .project{
        min-height: 300px;
        .project-image, .many-images{
          display: none;
        }
        .project-bottom{
          position: relative;
          width: 100%;
        }
        &:nth-child(odd){
          .project-bottom{
            left: 0;
          }
        }
      }
    }
  }

</style>