<script setup lang="ts">
  const showSelect = ref(false);
  const appConfig = useAppConfig();
  const languages: string[] = [
    "it",
    "en"
  ]
  const changeLang = (index:number)=>{
    appConfig.language = languages[index];
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
  .switch-lang{
    position: relative;
    user-select: none; 
  }
  .selection{
    position: absolute;
    top: 140%;
    .option{
      padding: 4px;
    }
  }

</style>