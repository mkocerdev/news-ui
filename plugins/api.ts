export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const api = $fetch.create({
    baseURL: config.public.apiBaseUrl,
    onRequest({ request, options, error }) {
      const initalQuery = options.query as any;
      initalQuery.apiKey = config.public.apiKey;
      options.query = initalQuery;
    },
    async onResponse({ response }) {
      // Success handler
      handleSuccess(response);
    },
    async onResponseError({ response }) {
      // Error handler
      handleError(response);
    },
  });

  // Success handler function
  const handleSuccess = (response: any) => {};

  // Error handler function
  const handleError = (response: any) => {};

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  };
});
