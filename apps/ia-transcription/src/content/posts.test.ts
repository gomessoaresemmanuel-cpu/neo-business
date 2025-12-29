import { describe, expect, it } from "vitest";
import { posts } from "./posts";

describe("content sanity", () => {
  it("has at least 3 fully written posts", () => {
    const full = posts.filter((post) => post.content.length > 0);
    expect(full.length).toBeGreaterThanOrEqual(3);
  });

  it("each post has required fields", () => {
    posts.forEach((post) => {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
    });
  });
});
