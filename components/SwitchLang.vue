<script setup lang="ts">
  const showSelect = ref(false);
  const appConfig = useAppConfig();
  const languages: string[] = [
    "it",
    "en"
  ]
  const changeLang = (index:number)=>{
    appConfig.language = languages[index];
    showSelect.value = false;
  }

 </script>

<template>
  <div class="switch-lang">
    <div 
      class="active-lang"
      @click="showSelect = !showSelect"
    >
      {{ appConfig.language }}
    </div>
    <div v-show="showSelect" class="selection">
      <div 
        v-for="(language, index) in languages"
        class="option"
        @click="changeLang(index)"
      >
        {{ language }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '~/assets/scss/common.scss';
  .active-lang{
    cursor: pointer;
  }
  .switch-lang{
    position: relative;
    user-select: none; 
  }
  .selection{
    position: absolute;
    top: 140%;
    padding: 4px;
    border-radius: 3px;
    border: 1px solid $text-color;
    .option{
      padding: 4px;
      border-radius: 3px;
      cursor: pointer;
      &:hover{
        background-color: rgba(255,255,255, .3);
      }
    }
  }

</style>