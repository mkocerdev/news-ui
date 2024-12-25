// mouse.js
import { ref, onMounted, onUnmounted } from "vue";

// by convention, composable function names start with "use"
export function usePagination() {
  // state encapsulated and managed by the composable
  const pages = ref([]) as any;
  const nextPage = ref("") as any;

  const getPage = computed(() => {
    return pages.value[pages.value.length - 1];
  });

  const hasPrevPage = computed(() => {
    return pages.value.length > 0;
  });

  const hasNextPage = computed(() => {
    return nextPage !== "";
  });

  function loadNextPage(pageNumber: string) {
    nextPage.value = pageNumber;
    pages.value.push(pageNumber);
  }
  function loadPrevPage() {
    pages.value.pop();
  }

  // expose managed state as return value
  return {
    pages,
    getPage,
    hasPrevPage,
    hasNextPage,
    loadNextPage,
    loadPrevPage,
  };
}
