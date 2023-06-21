<script setup>
  const menu = useMenu();
  const mobileMenu = ref(false);
  function toggleMenuMobile() {
    mobileMenu.value = !mobileMenu.value
  }
</script>

<template>
  <nav class="navbar">
    <div class="navbar-left">
      <i class="pi pi-home"></i>
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
          <li 
            v-for="(menuEl, index) in menu" 
            :key="index"
            :id="`navbar-menu-${menuEl.menuKey}`"
          >
          <a :href="`#${menuEl.title}`">
            <div class="menu-key">{{ menuEl.menuKey }}.</div>
            <div class="menu-desc">{{ menuEl.title }}</div>
          </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <h2
    @click="navigateTo('/')"
    >
      goHome
    </h2>
    <MyTitle />
    <h2
      @click="navigateTo('/myPage')"
    >
      goTo myPage
    </h2> -->
  </nav>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/common.scss';
  @import '~/assets/scss/navbar.scss';
</style>