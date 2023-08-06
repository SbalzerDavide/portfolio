<script setup lang="ts">
  interface Props {
    menuKey: string,
    title: string,
    desc?: string
  }
  const props = defineProps<Props>()
</script>

<template>
  <div class="box">
    <div class="title">
      {{ props.menuKey }}.
      {{ props.desc }}
    </div>
    <section 
      v-if="props.menuKey == '01'"
    >
      <!-- About -->
      <sectionAbout />
    </section>
    <section
      v-else-if="props.menuKey == '02'"
    >
      <!-- Experience -->
      <sectionWork />
    </section>
    <section
      v-else-if="props.menuKey == '03'"
    >
      <!-- Project -->
      <sectionProject />

    </section>
    <section
      v-else-if="props.menuKey == '04'"
    >
      <!-- Contact -->
      <sectionContacts />

    </section>


  </div>
</template>

<style lang="scss">
  .box{
    margin-bottom: 60px;
    min-height: 300px;
    .title{
      font-size: 18px;
      font-family: $font-mono;
      color: $primary;
      padding-top: 20px;
      margin-bottom: 20px;
    }
    &:nth-child(odd){
      margin-left: 80px;
    }
  }
  @media screen and (max-width: 600px) {
    .box:nth-child(odd){
      margin-left: 0;
    }
  }

</style>