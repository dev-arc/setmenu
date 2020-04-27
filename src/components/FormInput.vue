<template>
  <div>
    <input
      v-if="this.isInEditMode"
      class="form-input"
      :name="this.propkey"
      :placeholder="this.placeholder"
      :value="this.value"
      @change="doAction"
      @keyup.enter="doAction"
    />
    <div v-if="!this.isInEditMode" class="form-input">{{ this.value }}</div>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    propkey: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    },
    isInEditMode: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  methods: {
    doAction(e) {
      this.action(e, e.target.name);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.form-input {
  @apply relative w-full my-2 py-1 px-2;
}
</style>
