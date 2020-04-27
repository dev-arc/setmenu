import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import defaultRecipes from './defaultRecipes';
import { saveStatePlugin } from '../util/util';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    recipes: JSON.parse(localStorage.getItem('recipes')) || defaultRecipes,
  },
  getters,
  mutations,
  actions,
  modules: {},
});
