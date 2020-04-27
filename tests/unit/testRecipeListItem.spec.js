import { shallowMount } from '@vue/test-utils';
import RecipeListItem from '@/components/RecipeListItem.vue';
import defaultRecipe from './testRecipeModel';

describe('RecipeListItem.vue', () => {
  it('renders recipe title when passed', () => {
    const recipe = defaultRecipe;
    const wrapper = shallowMount(RecipeListItem, {
      propsData: { recipe },
    });
    expect(wrapper.text()).toContain(recipe.title);
  });
  it('renders recipe subtitle when passed', () => {
    const recipe = defaultRecipe;
    const wrapper = shallowMount(RecipeListItem, {
      propsData: { recipe },
    });
    expect(wrapper.text()).toContain(recipe.subtitle);
  });
});
