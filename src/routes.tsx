import React, { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";
import { Router } from "https://deno.land/x/oak@v7.7.0/mod.ts";
import App from "./webapp/App.tsx";

const posts = new Router()
  .get("/", (ctx) => {
    ctx.response.body = `Forum: ${ctx.params.forumId}`;
  })
  .get("/:postId", (ctx) => {
    ctx.response.body = `Forum: ${ctx.params.forumId}, Post: ${ctx.params.postId}`;
  });

const forums = new Router().use("/forums/:forumId/posts", posts.routes(), posts.allowedMethods());

const root = new Router().get("/", (ctx) => {
  ctx.response.body = renderToString(<App />);
});

export const routes: readonly Router[] = [forums, root];
