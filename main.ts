import { serve } from "https://deno.land/std@0.220.1/http/server.ts";

export function add(a: number, b: number): number {
  return a + b;
}

if (import.meta.main) {
  serve((_req) => {
    return new Response("Hello from Deno!");
  });
}
