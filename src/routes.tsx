import React, { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";
import { Router } from "https://deno.land/x/oak@v7.7.0/mod.ts";
import App from "./webapp/App.tsx";

const webhooks = new Router()
  .post("/github-discussions", async (ctx) => {
    ctx.response.headers.set("Content-Type", "text/html");
    const body = ctx.request.body({ type: 'json' })
    ctx.response.body = await body.value;
  })

const root = new Router().get("/", (ctx) => {
  ctx.response.body = renderToString(<App />);
  ctx.response.headers.set("Content-Type", "text/html");
});

export const routes: readonly Router[] = [webhooks, root];
