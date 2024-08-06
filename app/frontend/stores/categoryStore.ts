import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useCategoryStore = defineStore('category', () => {
  const state = reactive({
    categories: [],
  });

  const setCategories = (categories: never[]) => {
    state.categories = categories;
  };

  const addCategory = (category: never[]) => {
    state.categories.push(category);
  };

  const clearCategories = () => {
    state.categories = [];
  };

  return {
    state,
    setCategories,
    addCategory,
    clearCategories,
  };
});
