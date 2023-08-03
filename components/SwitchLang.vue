<script setup lang="ts">
  const showSelect = ref(false);
  const appConfig = useAppConfig();
  const detectOutsideClick = useDetectOutsideClick();

  const languages: string[] = [
    "it",
    "en"
  ]
  const changeLang = (index:number)=>{
    appConfig.language = languages[index];
    showSelect.value = false;
  }

  const switchLang = ref();
  detectOutsideClick(switchLang, () => { 
    showSelect.value = false;
  })

 </script>

<template>
  <div ref="switchLang" class="switch-lang">
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
    text-transform: uppercase;
  }
  .selection{
    position: absolute;
    top: 140%;
    padding: 4px;
    border-radius: 3px;
    border: 1px solid $text-color;
    .option{
      display: flex;
      justify-content: center;
      padding: 4px;
      border-radius: 3px;
      cursor: pointer;
      &:hover{
        background-color: rgba(255,255,255, .3);
      }
    }
  }
  @media screen and (max-width: 600px) {
    .selection{
      width: 100%;
      top: 200%;
      .option{
        // width: 100px;
        width: 100%;
        padding: 10px;
      }
    }
  }
</style>