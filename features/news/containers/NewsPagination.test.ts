import { it, expect, describe } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import NewsPagination from "./NewsPagination.vue";

describe("NewsPagination", () => {
  it("mount component with props", async () => {
    const prev = true;
    const next = true;
    const component = await mountSuspended(NewsPagination, {
      props: {
        prev: prev,
        next: next,
      },
    });
    if (prev) {
      expect(component.html()).toContain("Prev");
    }
    if (next) {
      expect(component.html()).toContain("Next");
    }
  });
});
