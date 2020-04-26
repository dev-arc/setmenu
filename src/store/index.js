/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import defaultRecipes from './defaultRecipes';
import { uuid, saveStatePlugin } from '../util/util';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    recipes: JSON.parse(localStorage.getItem('recipes')) || defaultRecipes,
  },
  getters: {
    getRecipe(state) {
      return (id) => {
        const recipe = state.recipes.filter((r) => r.id === id);
        return recipe.length > 0 ? recipe[0] : null;
      };
    },
  },
  mutations: {
    CREATE_RECIPE: (state, {
      id, title, subtitle, description,
    }) => {
      state.recipes.push({
        id: id ?? uuid(),
        title: title ?? '',
        subtitle: subtitle ?? '',
        description: description ?? '',
      });
    },
    UPDATE_RECIPE_PROPERTY: (state, { recipe, key, value }) => {
      recipe[key] = value;
    },
  },
  actions: {
  },
  modules: {
  },
});
