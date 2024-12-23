<script setup lang="ts">
defineProps({
  imageUrl: String,
  title: String,
  articleId: String,
});
</script>

<template>
  <div class="news-box">
    <NuxtLink :to="`news/${articleId}`" class="news-box__link">
      <div class="news-box__img">
        <img :src="imageUrl" :alt="title" />
      </div>
      <h2>
        <span class="news-box__title">{{ title }}</span>
      </h2>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.news-box {
  display: flex;
  flex-flow: column wrap;
  &__link {
    text-decoration: none;
  }
  &__img {
    height: 200px;
    max-width: 100%;
    border-radius: 16px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__title {
    font-size: 16px;
    color: #000;
  }
}
</style>
