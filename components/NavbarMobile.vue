<script setup>
  import { onClickOutside } from '@vueuse/core'
  
  const menu = useMenu();
  const mobileMenu = ref(false);
  const appConfig = useAppConfig();
    
  function toggleMenuMobile() {
    mobileMenu.value = !mobileMenu.value;
  }
  
  const mobileNavbar = ref();
  onClickOutside(mobileNavbar, (event) =>{
    console.log(event)
    if(mobileMenu.value === true){
      mobileMenu.value = false;
    }
  })

</script>

<template>
    <!-- <i class="pi pi-bars" @click="toggleMenuMobile"></i> -->
  <nav ref="mobileNavbar" class="navbar-mobile">
    <div v-if="mobileMenu" class="mobile-blur"></div>
    <i class="pi pi-bars" @click="toggleMenuMobile"></i>

    <div 
      class="navbar-right"
      :class="mobileMenu ? 'navbar-right-mobile' : ''"
    >
      <div class="right-container">
        <!-- <i class="pi pi-bars" @click="toggleMenuMobile"></i> -->
        <ul 
          class="menu"
          :class="mobileMenu ? 'show-on-mobile' : ''"
        >
          <li 
            v-for="(menuEl, index) in menu" 
            :key="index"
            :id="`navbar-menu-${menuEl.menuKey}`"
          >
          <a 
            :href="`#${menuEl.title}`"
            @click="toggleMenuMobile"
          >
            <div class="menu-key">{{ menuEl.menuKey }}.</div>
            <div class="menu-desc">{{ menuEl.title }}</div>
          </a>
          </li>
          <li>
            <button 
              @click="toggleMenuMobile"
              class="animate"
            >
              <div class="background"></div>
              <a v-if="appConfig.language === 'en'" href="./resume/DavideSbalzer_CV_en.pdf"  target="_blank" class="button">
                Resume
              </a>
              <a v-else-if="appConfig.language === 'it'" href="./resume/DavideSbalzer_CV_it.pdf"  target="_blank" class="button">
                Resume
              </a>
            </button>
          </li>
          <li>
            <switchLang @change-lang="toggleMenuMobile"/>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/navbar.scss';
</style>