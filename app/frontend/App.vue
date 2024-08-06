<template>
  <div id="app">
    <main class="bg-gray-50">
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AppLayout',
  setup() {
    const title = ref('Welcome to My App')

    return {
      title,
    }
  },
})
</script>
