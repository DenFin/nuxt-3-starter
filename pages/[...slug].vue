<template>
    <main>Slug: {{ slug }}
      <BegaButton text="Text" />
  </main>
</template>

<script setup lang='ts'>
import {BegaButton} from '@kernpunkt/bega-component-library'
const route = useRoute()
const slug = ref(route?.path)
</script>
