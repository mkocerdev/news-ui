<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";
defineProps({
  prev: String,
  next: String,
});
</script>

<template>
  <div class="pagination">
    <AppButton v-if="prev" class="pagination__button" @click="$emit('prev')">
      Prev
    </AppButton>
    <AppButton v-if="next" class="pagination__button" @click="$emit('next')">
      Next
    </AppButton>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 16px;
  &__button {
    max-width: 50%;
  }
}
</style>
