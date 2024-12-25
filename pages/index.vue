<script setup lang="ts">
import type {
  NewsApiResponse,
  NewsApiNextPage,
  NewsApiResults,
} from "@/features/news/types";

import NewsBox from "@/features/news/containers/NewsBox.vue";
import NewsPagination from "@/features/news/containers/NewsPagination.vue";
const params = {
  removeduplicate: 1,
  language: ["en"],
  size: 10,
  image: 1,
} as any;

import { usePagination } from "@/composable/usePagination";
const { getPage, hasPrevPage, hasNextPage, loadNextPage, loadPrevPage } =
  usePagination();

const { $api } = useNuxtApp();
const { data, status, error, refresh } = await useAsyncData(() => {
  return $api<NewsApiResponse>("/latest", {
    query: { ...params, ...(getPage && { page: getPage.value }) },
  });
});

const nextPage: ComputedRef<NewsApiNextPage | any> = computed(() => {
  return data.value?.nextPage as NewsApiNextPage;
});
const getResults: ComputedRef<NewsApiResults> = computed(() => {
  return data?.value?.results as NewsApiResults;
});

watch(getPage, () => refresh());
useHead({
  title: "News Homepage",
  meta: [
    { name: "description", content: "This is news page." },
    { name: "keywords", content: "News, Journal, Break News" },
  ],
});
</script>

<template>
  <div class="page">
    <div class="page__container">
      <div class="page">
        <div class="page__container">
          <h1 class="page__title">News</h1>
          <template v-if="status === 'pending'"> Loading</template>
          <template v-else-if="(status = 'success')">
            <div class="page__news">
              <template v-for="(article, index) in getResults" :key="index">
                <NewsBox :article="article" />
              </template>
            </div>
          </template>
          <template v-else>
            {{ error }}
          </template>
          <NewsPagination
            :prev="hasPrevPage"
            :next="hasNextPage"
            @next="loadNextPage(nextPage)"
            @prev="loadPrevPage()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  margin-bottom: 4rem;
  &__news {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);

    @media (width >= 1024px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
}
</style>
