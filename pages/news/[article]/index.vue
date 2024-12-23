<script setup lang="ts">
const route = useRoute();

const router = useRouter();
const goToHomepage = () => router.push("/");

const params = {
  apikey: "pub_63164af692c808492ab56888b56fd9e7059b8",
  id: route.params.article,
};
const { data, error } = await useFetch(`https://newsdata.io/api/1/latest`, {
  query: { ...params },
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
        <h1 class="page__title">{{ data.results[0].title }}</h1>
        <img :src="data.results[0].image_url" :alt="data.results[0].title" />
        <div>
          {{ data.results[0].description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
}
</style>
