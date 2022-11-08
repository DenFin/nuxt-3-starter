<template>
    <main>
      <pre>{{ isPending }}</pre>
      <div v-for="azureFunction in azureFunctions.dev.functions">
        <BegaButton :class="{'bg-red': isPending }" class="mb-1" @click="triggerFunction(azureFunction.url)" :text="`Trigger ${azureFunction.name}`" />
      </div>
  </main>
</template>

<script setup lang='ts'>
import { BegaButton } from '@kernpunkt/bega-component-library'

import azureFunctions from '@/assets/json/functions.json'

let isPending = false

async function triggerFunction(url) {
  const { data, pending } = await $fetch('/api/trigger-azure-function', { method: 'POST', body: {url} })
  isPending = pending
  console.log(pending)
  console.log('result', data)
}


</script>
