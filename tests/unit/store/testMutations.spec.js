import mutations from '@/store/mutations';
import defaultRecipe from '../testRecipeModel';

describe('Mutations', () => {
  // CREATE
  it('adds new blank recipe model when passed nothing', () => {
    const state = { recipes: [] };
    mutations.CREATE_RECIPE(state, {});
    expect(state.recipes.length).toBe(1);
    expect(state.recipes[0].title).toContain('New Recipe');
    expect(state.recipes[0].description).toBe('');
  });
  it('adds new blank recipe model with set id when passed', () => {
    const state = { recipes: [] };
    const id = 'valid';
    mutations.CREATE_RECIPE(state, { id });
    expect(state.recipes.length).toBe(1);
    expect(state.recipes[0].id).toBe(id);
  });
  it('adds new default recipe model when passed', () => {
    const state = { recipes: [] };
    mutations.CREATE_RECIPE(state, defaultRecipe);
    expect(state.recipes.length).toBe(1);
    expect(state.recipes[0].id).toBe(defaultRecipe.id);
    expect(state.recipes[0].title).toBe(defaultRecipe.title);
  });

  // UPDATE
  it('adds new default recipe model when passed', () => {
    const state = { recipes: [defaultRecipe] };
    const newTitle = 'somethingElse';
    mutations.UPDATE_RECIPE_PROPERTY(state, { recipe: state.recipes[0], key: 'title', value: newTitle });
    expect(state.recipes.length).toBe(1);
    expect(state.recipes[0].title).toBe(newTitle);
  });
});
