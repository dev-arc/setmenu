<template>
  <div class="recipe-list-item">
    <div @click="routeToRecipe" class="m-2 text-lg font-bold text-white text-center">
      {{ this.recipe.title }}
    </div>
    <div class="m-4 text-sm font-light text-black text-left">
      {{ this.recipe.subtitle }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'RecipeListItem',
  props: {
    recipe: {
      type: Object,
      default() {
        return { id: -1, title: 'DEFAULT', subtitle: 'Feeds people real good' };
      },
      required: true,
    },
  },
  methods: {
    routeToRecipe() {
      this.$router.push({ path: `/recipes/${this.recipe.id}/` });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.recipe-list-item {
  @apply font-bold py-2 px-4 rounded bg-blue-400 mx-10 my-2
}
</style>
