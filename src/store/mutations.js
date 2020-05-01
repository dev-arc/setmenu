/* eslint-disable no-param-reassign */
import { uuid } from '../util/util';

export default {
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
  DELETE_RECIPE: (state, { recipe }) => {
    state.recipes = state.recipes.filter((r) => r.id !== recipe.id);
  },
};
