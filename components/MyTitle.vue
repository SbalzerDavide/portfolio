<template>
  <div>
    <h1>My personal title {{ foo }}</h1>
    <div>pos: {{x}}, {{y}}</div>
  </div>
</template>


<script setup>
  const foo = useFoo("davide", "sbalzer", 1465);
  const { x, y } = useMouse();
</script>

<style>
</style>