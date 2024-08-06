<template>
  <div id="app">
    <main class="bg-gray-50">
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppLayout',
  setup() {
    const title = ref('Welcome to My App');

    return {
      title,
    };
  },
});
</script>

<style scoped>
.Vue-Toastification__toast {
  padding-top: 0;
  padding-bottom: 0;
  min-height: 50px;
  align-items: center;
}
</style>
