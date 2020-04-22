<template>
  <div class="recipes">
    <RecipeListItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeListItem from '@/components/RecipeListItem.vue';

export default {
  name: 'Recipes',
  props: {
    recipes: {
      type: Array,
      default() {
        return [
          { id: 0, title: 'This is a recipe', subtitle: 'Feeds people real good' },
          { id: 1, title: 'This is another one', subtitle: 'Feeds people real good' },
          { id: 2, title: 'This is a third', subtitle: 'Feeds people real good' },
        ];
      },
    },
  },
  components: {
    RecipeListItem,
  },
};
</script>
