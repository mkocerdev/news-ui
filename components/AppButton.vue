<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<template>
  <button class="app-button" v-bind="$attrs" v-on="$listeners">
    <template v-if="title">
      {{ title }}
    </template>
    <slot v-else />
  </button>
</template>

<style lang="scss" scoped>
.app-button {
  cursor: pointer;
  padding: 0.8rem 2rem;
  background-color: #bbbbbb;
  text-decoration: none;
  border: 0;
  font-size: 18px;
  font-weight: 500;
}
</style>
