import { describe, expect, it } from "vitest";
import { isValidEmail } from "./validator";

describe("isValidEmail", () => {
  it("validates correct emails", () => {
    expect(isValidEmail("user@example.com")).toBe(true);
    expect(isValidEmail("test+alias@domain.co")).toBe(true);
  });

  it("rejects invalid emails", () => {
    expect(isValidEmail("invalid-email")).toBe(false);
    expect(isValidEmail("user@domain")).toBe(false);
    expect(isValidEmail("   ")).toBe(false);
  });
});
