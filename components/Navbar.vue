<script setup>
  const menu = useMenu();
  const mobileMenu = ref(false);
  const appConfig = useAppConfig();

  // const resumes = useResume();
  // console.log(resumes.a);

  function toggleMenuMobile() {
    mobileMenu.value = !mobileMenu.value
  }
</script>

<template>
  <nav class="navbar">
    <div class="navbar-left">
      <!-- <i class="pi pi-home"></i> -->
      <!-- <switchLang /> -->
      <button class="animate">
        <div class="background"></div>
        <a v-if="appConfig.language === 'en'" href="./resume/DavideSbalzer_CV_en.pdf"  target="_blank" class="button">
          Resume
        </a>
        <a v-else-if="appConfig.language === 'it'" href="./resume/DavideSbalzer_CV_it.pdf"  target="_blank" class="button">
          Resume
        </a>
      </button>
    </div>
    <div 
      class="navbar-right"
      :class="mobileMenu ? 'navbar-right-mobile' : ''"
    >
      <div class="right-container">
        <div v-if="mobileMenu" class="mobile-blur"></div>
        <i class="pi pi-bars" @click="toggleMenuMobile"></i>
        <ul 
          class="menu"
          :class="mobileMenu ? 'show-on-mobile' : ''"
        >
          <li>
            <switchLang />
          </li>
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
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/common.scss';
  @import '~/assets/scss/navbar.scss';
  img{
    width: 20px;
    height: 20px;
  }
</style>