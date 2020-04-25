import Vue from 'vue';
import Vuex from 'vuex';
import defaultRecipes from './defaultRecipes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: defaultRecipes,
  },
  mutations: {
    CREATE_RECIPE: (state, { title, subtitle, description }) => {
      state.recipes.push({
        id: state.recipes.length,
        title,
        subtitle,
        description,
      });
    },
  },
  actions: {
  },
  modules: {
  },
});
