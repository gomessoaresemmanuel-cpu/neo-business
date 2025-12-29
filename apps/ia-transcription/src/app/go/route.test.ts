import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { GET } from "./[slug]/route";

describe("GET /go/[slug]", () => {
  it("returns 404 for unknown slug", async () => {
    const res = await GET(new NextRequest("http://localhost/go/unknown"), { params: { slug: "unknown" } });
    expect(res.status).toBe(404);
  });

  it("redirects for known slug", async () => {
    const res = await GET(new NextRequest("http://localhost/go/descript"), { params: { slug: "descript" } });
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toContain("descript.com");
  });
});
