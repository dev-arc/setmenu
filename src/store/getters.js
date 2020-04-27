export default {
  getRecipe(state) {
    return (id) => {
      const recipe = state.recipes.filter((r) => r.id === id);
      return recipe.length > 0 ? recipe[0] : null;
    };
  },
};
