<template>
  <div class="recipes relative">
    <div v-on:click="createNew" class="create">+ New Recipe</div>
    <RecipeListItem
      v-for="recipe in recipes"
      :key="recipe.id"
      :recipe="recipe"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeListItem from '@/components/RecipeListItem.vue';

export default {
  name: 'Recipes',
  props: {
  },
  components: {
    RecipeListItem,
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
  },
  methods: {
    createNew() {
      this.$store.commit('CREATE_RECIPE', {
        title: 'New recipe',
        subtitle: 'This is a subtitle',
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
  .create {
    @apply bg-blue-300 font-semibold text-sm p-2 absolute top-0 select-none cursor-pointer;
    left: 2.5rem;
    transform: translateY(-3rem);
  }
</style>
