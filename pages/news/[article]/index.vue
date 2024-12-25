<script setup lang="ts">
import type { NewsApiResponse, NewsArticle } from "@/features/news/types";

const route = useRoute();
const router = useRouter();
const goToHomepage = () => router.push("/");
const { $api } = useNuxtApp();
const { data, status, error } = await useAsyncData(() => {
  return $api<NewsApiResponse>("/latest", {
    query: { ...(route.params.article && { id: route.params.article }) },
  });
});

const getArticle: ComputedRef<NewsArticle> = computed(() => {
  return data?.value?.results[0] as NewsArticle;
});

useHead({
  title: getArticle.value.title,
  meta: [
    { name: "description", content: getArticle.value.description },
    { name: "keywords", content: getArticle.value.keywords },
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
          <h1 class="page__title">{{ getArticle.title }}</h1>
          <img
            class="page__img"
            :src="getArticle.image_url"
            :alt="getArticle.title"
          />
          <div class="page__description">
            {{ getArticle.description }}
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
  margin-top: 1rem;
  margin-bottom: 5rem;
  &__img {
    max-width: 100%;
  }
  &__description {
    margin-top: 1rem;
  }
}
</style>
