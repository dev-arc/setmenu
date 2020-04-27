import getters from '@/store/getters';
import defaultRecipe from '../testRecipeModel';

describe('Mutations', () => {
  it('returns null when passed invalid id', () => {
    const state = { recipes: [defaultRecipe] };
    const recipe = getters.getRecipe(state)(`${defaultRecipe.id}nothing`);
    expect(recipe).toBe(null);
  });
  it('returns defauly recipe when passed valid id', () => {
    const state = { recipes: [defaultRecipe] };
    const recipe = getters.getRecipe(state)(defaultRecipe.id);
    expect(recipe.title).toBe(defaultRecipe.title);
  });
});
