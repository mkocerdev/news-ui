import { it, expect, describe } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import AppButton from "./AppButton.vue";

describe("AppButton", () => {
  it("mount component with props", async () => {
    const component = await mountSuspended(AppButton, {
      propsData: {
        title: "test title",
      },
    });
    expect(component.html()).toContain("test title");
  });
});
