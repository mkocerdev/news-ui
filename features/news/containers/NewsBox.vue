<script setup lang="ts">
import type { NewsArticle } from "@/features/news/types";

interface ArticleProps {
  article: NewsArticle;
}
defineProps<ArticleProps>();
</script>

<template>
  <div class="news-box">
    <NuxtLink :to="`/news/${article.article_id}`" class="news-box__link">
      <div class="news-box__img">
        <img :src="article.image_url" :alt="article.title" />
      </div>
      <h2>
        <span class="news-box__title">{{ article.title }}</span>
      </h2>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.news-box {
  display: flex;
  flex-flow: column wrap;
  background-color: #f2f2f2;
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  &__link {
    text-decoration: none;
  }
  &__img {
    height: 200px;
    max-width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__title {
    padding: 0 16px;
    font-size: 16px;
    color: #000;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
