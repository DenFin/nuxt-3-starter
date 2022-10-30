<template>
  <main>Slug: {{ slug }}</main>
</template>

<script setup lang='ts'>
const route = useRoute()
const slug = ref(route?.path)
</script>
