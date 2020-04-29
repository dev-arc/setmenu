<template>
  <div class="recipe-modal">
    <div @click="toggleEditMode" class= "create">Edit</div>
    <div @click="removeRecipe" class= "create">Delete</div>
    <div v-if="this.recipe">
      <FormInput
        class="font-bold text-lg"
        propkey='title'
        placeholder="Title"
        :value="this.recipe.title"
        :action="updateRecipeProperty"
        :isInEditMode="isInEditMode"
      />
      <FormInput
        class="text-base"
        propkey='subtitle'
        placeholder="Subtitle"
        :value="this.recipe.subtitle"
        :action="updateRecipeProperty"
        :isInEditMode="isInEditMode"
      />
      <FormInput
        class="font-thin text-sm"
        propkey='description'
        placeholder="Enter description"
        :value="this.recipe.description"
        :action="updateRecipeProperty"
        :isInEditMode="isInEditMode"
      />
    </div>
    <div v-if="this.recipe === null">No Recipe found with this ID.</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FormInput from './FormInput.vue';

export default {
  name: 'RecipeModal',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    FormInput,
  },
  computed: {
    ...mapGetters(['getRecipe']),
    recipe() {
      return this.getRecipe(this.id);
    },
  },
  data() {
    return {
      isInEditMode: false,
    };
  },
  methods: {
    updateRecipeProperty(e, key) {
      this.$store.commit('UPDATE_RECIPE_PROPERTY', {
        recipe: this.recipe,
        key,
        value: e.target.value,
      });
    },
    toggleEditMode() {
      this.isInEditMode = !this.isInEditMode;
    },
    removeRecipe() {
      // this.$delete(this.recipe);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.recipe-modal {
  @apply relative flex flex-row bg-white inset-0 mx-4 m-32 mx-auto;
  @apply text-left rounded shadow z-10 p-4;
  max-width: 700px;
}
</style>
