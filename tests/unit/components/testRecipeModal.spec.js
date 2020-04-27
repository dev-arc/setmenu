import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import RecipeModal from '@/components/RecipeModal.vue';
import defaultRecipe from '../testRecipeModel';

const localVue = createLocalVue();
localVue.use(Vuex);

const validId = defaultRecipe.id;
const invalidId = `${defaultRecipe}invalid`;

describe('RecipeModal.vue', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      getRecipe() {
        return (id) => (id === validId ? defaultRecipe : null);
      },
    };
    store = new Vuex.Store({
      getters,
    });
  });

  /**
   * This tests a computed property that's directly passed to FormInput
   */
  it('title of correct recipe is found', () => {
    const wrapper = shallowMount(RecipeModal, {
      store,
      localVue,
      propsData: { id: validId },
    });
    const { title } = wrapper.vm.recipe;
    expect(title).toBe(defaultRecipe.title);
  });

  /**
   * This tests a computed property that fails in the getter
   */
  it('when no recipe found displays "No Recipe found"', () => {
    const wrapper = shallowMount(RecipeModal, {
      store,
      localVue,
      propsData: { id: invalidId },
    });
    expect(wrapper.text()).toContain('No Recipe found');
  });
});
