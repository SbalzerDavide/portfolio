<script setup>
  const menu = useMenu();
</script>

<template>
  <nav class="navbar">
    <div class="navbar-left">
      <i class="pi pi-home"></i>
    </div>
    <div class="navbar-right">
      <ul class="menu">
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