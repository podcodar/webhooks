import React, { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";
import { Router } from "https://deno.land/x/oak@v7.7.0/mod.ts";
import App from "./webapp/App.tsx";
import { GithubDiscussions } from "./interfaces/github-discussions.ts";

const webhooks = new Router()
  .post("/github-discussions", async (ctx) => {
    ctx.response.headers.set("Content-Type", "text/html");
    const body = ctx.request.body({ type: 'json' })
    const ghDiscussion: GithubDiscussions = await body.value;
    ctx.response.body = ghDiscussion.action
  })

const root = new Router().get("/", (ctx) => {
  ctx.response.body = renderToString(<App />);
  ctx.response.headers.set("Content-Type", "text/html");
});

export const routes: readonly Router[] = [webhooks, root];
