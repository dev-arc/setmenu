<template>
  <div class="recipes relative">
    <div @click="createNew" class="create">+ New Recipe</div>
    <RecipeListItem
      v-for="recipe in recipes"
      :key="recipe.id"
      :recipe="recipe"
    />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeListItem from '@/components/RecipeListItem.vue';
import { uuid } from '../util/util';

export default {
  name: 'Recipes',
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
      const id = uuid();
      this.$store.commit('CREATE_RECIPE', { id });
      this.$router.push({ path: `/recipes/${id}/?edit-mode=1` });
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
