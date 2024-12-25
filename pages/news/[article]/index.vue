<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const goToHomepage = () => router.push("/");

const { $api } = useNuxtApp();
const { data, status, error } = await useAsyncData(() => {
  return $api("/latest", {
    query: { ...(route.params.article && { id: route.params.article }) },
  });
});
const getData: any = computed(() => {
  return data.value;
});
const title = computed(() =>
  status.value === "success" ? getData.value.results[0].title : ""
);
const image_url = computed(() =>
  status.value === "success" ? getData.value.results[0].image_url : ""
);
const description = computed(() =>
  status.value === "success" ? getData.value.results[0].description : ""
);
const keywords = computed(() =>
  status.value === "success" ? getData.value.results[0].keywords : ""
);
useHead({
  title: title,
  meta: [
    { name: "description", content: description },
    { name: "keywords", content: keywords },
  ],
});
</script>

<template>
  <div class="page">
    <div class="page__container">
      <div v-if="error">
        {{ error }}
      </div>
      <div v-else>
        <AppButton @click="goToHomepage">Back Homepage</AppButton>
        <template v-if="status === 'pending'"> Loading</template>
        <template v-else-if="(status = 'success')">
          <h1 class="page__title">{{ title }}</h1>
          <img class="page__img" :src="image_url" :alt="title" />
          <div class="page__description">
            {{ description }}
          </div>
        </template>
        <template v-else>
          {{ error }}
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  &__img {
    max-width: 100%;
  }
}
</style>
