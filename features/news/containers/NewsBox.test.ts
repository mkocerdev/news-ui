import { test, expect, describe } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import NewsBox from "./NewsBox.vue";

const prop = {
  article_id: "0a0f72f766b76a94c04a34a62cd4ed03",
  title: "Winning numbers drawn in Tuesday’s Florida Pick 3 Evening",
  image_url:
    "https://dims.apnews.com/dims4/default/dcac1a4/2147483647/strip/true/crop/700x394+0+28/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F90%2F29%2F4e3c1cc7446089a9101a7bdff4c8%2Fdefaultshareimage-copy.png",
};

describe("NewsBox", () => {
  test("mount component with props", async () => {
    const component = await mountSuspended(NewsBox, {
      props: {
        article: { ...prop },
      },
    });
    expect(component.html()).toContain(prop.title);
    expect(component.html()).toContain(prop.article_id);
    expect(component.html()).toContain(prop.image_url);
  });
});
