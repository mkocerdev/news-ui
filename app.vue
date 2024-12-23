<template>
  <div class="app">
    <div class="app__container">
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  &__container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
