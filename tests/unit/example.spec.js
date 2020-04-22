import { shallowMount } from '@vue/test-utils';
import RecipeListItem from '@/components/RecipeListItem.vue';

describe('RecipeListItem.vue', () => {
  it('renders recipe title when passed', () => {
    const recipe = { id: -1, title: 'DEFAULT', subtitle: 'Feeds people real good' };
    const wrapper = shallowMount(RecipeListItem, {
      propsData: { recipe },
    });
    expect(wrapper.text()).toContain(recipe.title);
  });
  it('renders recipe subtitle when passed', () => {
    const recipe = { id: -1, title: 'DEFAULT', subtitle: 'Feeds people real good' };
    const wrapper = shallowMount(RecipeListItem, {
      propsData: { recipe },
    });
    expect(wrapper.text()).toContain(recipe.subtitle);
  });
});
