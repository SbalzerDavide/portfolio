<script setup lang="ts">

  const works = useWorks();

  let active = ref(0);
  const activeLine = ref<HTMLElement | null>(null);
  const activeLineMobile = ref<HTMLElement | null>(null);
  function adjustActiveWorkMobile(active: Ref) {
    if(activeLine.value){
      activeLine.value.style.top = `${active.value * 30}px`;
    }
    if(activeLineMobile.value){
      if(works[active.value]?.company === "EDM Spa"){
        activeLineMobile.value.style.left = "19px";
      } else if(works[active.value]?.company === "Freelance"){
        activeLineMobile.value.style.left = "106px";
      } else if(works[active.value]?.company === "Boolean Careers"){
        activeLineMobile.value.style.left = "210px";
      }
      activeLineMobile.value.style.width = `${works[active.value]?.company.length * 5}px`;
    }
  }
  
  let activeWork = ref(works[active.value]);

  onMounted(() => {
    adjustActiveWorkMobile(active)
  })

  watch(active, (newValue)=>{
    adjustActiveWorkMobile(active)    
    activeWork.value = works[newValue];
  })
</script>

<template>
  <div class="work">
    <div class="list">
      <div ref="activeLine" class="active-line-container">
        <div class="active-line"></div>
      </div>
      <div ref="activeLineMobile" class="active-line-container-mobile">
        <div class="active-line"></div>
      </div>
      <ul>
        <li
          v-for="(work, index) in works" 
          :key="index" 
          @click="active = index"
        > 
          {{ work.company }}
        </li>
      </ul>
    </div>
    <div class="detail">
      <!-- {{ active }} -->
      <div class="work-title">
        <div class="role">{{ activeWork.role }}
          <a :href="activeWork.companyLink"> @ {{ activeWork.company }}</a>
        </div>  
      </div>
      <div class="work-time">
        {{ activeWork.start }} - {{ activeWork.end }}
      </div>
      <div class="work-desc-container">
        <div 
          class="work-desc"
          v-for="(desc, index) in activeWork.descriptions[$i18n.locale]"
          :key="index"
        >
          <i class="pi pi-caret-right"></i>
          <p>{{ desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .work{
    display: flex;
    .list{
      width: 180px;
      flex-shrink: 0;
      position: relative;
      font-family: $font-mono;
      li{
        display: flex;
        align-items: center;
        height: 30px;
        cursor: pointer;
      }
      .active-line-container{
        display: flex;
        align-items: center;
        position: absolute;
        left: -10px;
        top: 0;
        height: 30px;
        transition: all .3s;
        .active-line{
          width: 2px;
          height: 18px;
          background: $primary;
        }
      }
      .active-line-container-mobile{
        display: none;
      }
    }
    .detail{
      flex-grow: 1;
      .work-title{
        display: flex;
        font-size: 22px;
        color: $text-color-strong;
        margin-bottom: 10px;
        cursor: pointer;
        a{
          margin-left: 5px;
          color: $primary;
        }
      }
      .work-time{
        font-family: $font-mono;
        margin-bottom: 15px;
      }
      .work-desc{
        display: flex;
        margin-bottom: 8px;
        i,p{
          line-height: 22px;
        }
        i{
          margin-right: 5px;
          color: $primary;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .work{
      flex-direction: column;
      .list{
        margin-bottom: 10px;
        width: 100%;
        overflow: auto;
        ul{
          display: flex;
          padding-bottom: 10px;
          li{
            margin: 0 10px;
            flex-shrink: 0;
          }
        }
        .active-line-container{
          display: none;
        }
        .active-line-container-mobile{
          display: flex;
          align-items: center;
          position: absolute;
          left: 19px;
          top: 30px;
          height: 2px;
          width: 80px;
          transition: all .3s;
          .active-line{
            height: 100%;
            width: 100%;
            background: $primary;
          }
        }
      }
      .detail{
        .work-title, .work-time, .work-desc-container{
          margin-bottom: 15px;
        }
      }
    }
  }

</style>