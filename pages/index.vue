<script setup lang="ts">
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
  return $api("/latest", {
    query: { ...params, ...(getPage && { page: getPage.value }) },
  });
});

const getData: any = computed(() => {
  return data.value;
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
              <template v-for="(item, index) in getData.results">
                <NewsBox
                  :title="item.title"
                  :articleId="item.article_id"
                  :image-url="item.image_url"
                />
              </template>
            </div>
            <NewsPagination
              :prev="hasPrevPage"
              :next="hasNextPage"
              @next="loadNextPage(getData.nextPage)"
              @prev="loadPrevPage()"
            />
          </template>
          <template v-else>
            {{ error }}
          </template>
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
