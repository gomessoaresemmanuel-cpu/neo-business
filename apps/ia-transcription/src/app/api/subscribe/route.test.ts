import { describe, expect, it, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

let selectResult: { data: any; error: any } = { data: null, error: null };
let insertResult: { data: any; error: any } = { data: { id: "new-id" }, error: null };

const supabaseMock = {
  from: vi.fn(() => ({
    select: vi.fn(() => ({
      eq: vi.fn(() => ({
        maybeSingle: vi.fn(async () => selectResult)
      }))
    })),
    insert: vi.fn(() => ({
      select: vi.fn(() => ({
        maybeSingle: vi.fn(async () => insertResult)
      }))
    }))
  }))
};

vi.mock("@/lib/supabase", () => ({
  getSupabaseClient: () => supabaseMock
}));

vi.stubGlobal("fetch", vi.fn(() => Promise.resolve(new Response("{}"))));

import { POST } from "./route";

describe("POST /api/subscribe", () => {
  beforeEach(() => {
    selectResult = { data: null, error: null };
    insertResult = { data: { id: "new-id" }, error: null };
  });

  it("returns 400 for invalid email", async () => {
    const req = new NextRequest("http://localhost/api/subscribe", { method: "POST", body: JSON.stringify({ email: "bad" }) });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("creates subscriber and returns 200", async () => {
    const req = new NextRequest("http://localhost/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email: "test@example.com", source: "test" })
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
  });

  it("returns 409 when already exists", async () => {
    selectResult = { data: { id: "existing" }, error: null };
    const req = new NextRequest("http://localhost/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email: "test@example.com" })
    });
    const res = await POST(req);
    expect(res.status).toBe(409);
  });
});
