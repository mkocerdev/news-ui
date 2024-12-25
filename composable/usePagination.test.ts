import { usePagination as _testPagination } from "./usePagination";
const { pages, getPage, hasPrevPage, hasNextPage, loadNextPage, loadPrevPage } =
  _testPagination();

import { expect, describe, test } from "vitest";

describe("usePagination", () => {
  test("call loadNext and getPage", () => {
    const page = "randompagenuber";
    loadNextPage(page);
    expect(getPage.value).toBe(page);
  });
  test("call loadPrevPage and check pages array pop", () => {
    const pagesTotal = pages.value.length; // before loadPrevPage method page length
    loadPrevPage();
    expect(pages.value.length).toBeLessThan(pagesTotal);
  });
  test("call hasPrevPage and hasNext Page", () => {
    expect(hasPrevPage.value).toBe(false);
    expect(hasNextPage.value).toBe(true);
  });
});
