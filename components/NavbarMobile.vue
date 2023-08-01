<script setup>
  const menu = useMenu();
  const mobileMenu = ref(false);
  const detectOutsideClick = useDetectOutsideClick();

  function toggleMenuMobile() {
    mobileMenu.value = !mobileMenu.value;
  }

  const mobileNavbar = ref();
  detectOutsideClick(mobileNavbar, () => { 
    if(mobileMenu.value === true){
      mobileMenu.value = false;
    }
  })

</script>

<template>
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
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/common.scss';
  @import '~/assets/scss/navbar.scss';
</style>