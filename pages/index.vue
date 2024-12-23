<script setup lang="ts">
import NewsBox from "@/features/news/containers/NewsBox.vue";
import NewsPagination from "@/features/news/containers/NewsPagination.vue";
const params = {
  removeduplicate: 1,
  language: ["en"],
  size: 10,
  image: 1,
  apikey: "pub_63164af692c808492ab56888b56fd9e7059b8",
};

const pages = ref([]);

const getPage = computed(() => {
  return pages.value[pages.value.length - 1];
});

const { data, refresh, status, error } = await useFetch(
  `https://newsdata.io/api/1/latest`,
  {
    query: { ...params, ...(getPage && { page: getPage }) },
  }
);

const hasPrevPage = computed(() => {
  return pages.value.length > 0;
});

const hasNextPage = computed(() => {
  return data.value.nextPage;
});

function loadNextPage(pageNumber) {
  pages.value.push(pageNumber);
}
function loadPrevPage() {
  pages.value.pop();
}
</script>

<template>
  <div class="page">
    <div class="page__container">
      <div v-if="status === 'pending'">Loading...</div>
      <div v-else-if="status === 'success'">
        <h1 class="page__title">News</h1>

        <div class="page__news">
          <template v-for="(item, index) in data.results">
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
          @next="loadNextPage(data.nextPage)"
          @prev="loadPrevPage()"
        />
      </div>
      <div v-else-if="status === 'error'">{{ error }}</div>
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
