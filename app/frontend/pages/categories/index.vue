<template>
  <div>
    <h1>Categories</h1>
    <ul>
      <li v-for="category in state.categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCategoryStore } from "../../stores/categoryStore";
import { usePage } from "@inertiajs/vue3";

export default defineComponent({
  setup() {
    const store = useCategoryStore();
    const { props } = usePage();
    console.log(usePage());

    // Set categories from props to the store
    store.setCategories(props.categories);

    return {
      state: store.state,
    };
  },
});
</script>
