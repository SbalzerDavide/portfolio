<script setup lang="ts">

  const works = useWorks();

  let active = ref(0);
  const activeLine = ref<HTMLElement | null>(null)

  let activeWork = ref(works[active.value]);

  const appConfig = useAppConfig();

  watch(active, (newValue)=>{
    if(activeLine.value){
      activeLine.value.style.top = `${active.value * 30}px`;
    }
    
    activeWork.value = works[newValue];
  })
</script>

<template>
  <div class="work">
    <div class="list">
      <div ref="activeLine" class="active-line-container">
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
        <div class="role">{{ activeWork.role }}</div>  
        <a :href="activeWork.companyLink"> @ {{ activeWork.company }}</a>
      </div>
      <div class="work-time">
        {{ activeWork.start }} - {{ activeWork.end }}
      </div>
      <div class="work-desc-container">
        <div 
          class="work-desc"
          v-if="appConfig.language == 'en'"
          v-for="(desc, index) in activeWork.descriptions.en"
          :key="index"
        >
          <i class="pi pi-caret-right"></i>
          <p>{{ desc }}</p>
        </div>
        <div 
          class="work-desc"
          v-else-if="appConfig.language == 'it'"
          v-for="(desc, i) in activeWork.descriptions.it"
          :key="i"
        >
          <i class="pi pi-caret-right"></i>
          <p>{{ desc }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '~/assets/scss/common.scss';
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
    }
    .detail{
      flex-grow: 1;
      .work-title{
        display: flex;
        font-size: 22px;
        color: $text-color-strong;
        margin-bottom: 10px;
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
</style>