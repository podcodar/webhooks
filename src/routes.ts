import { Router } from "https://deno.land/x/oak@v7.7.0/mod.ts";

const posts = new Router()
  .get("/", (ctx) => {
    ctx.response.body = `Forum: ${ctx.params.forumId}`;
  })
  .get("/:postId", (ctx) => {
    ctx.response.body = `Forum: ${ctx.params.forumId}, Post: ${ctx.params.postId}`;
  });

const forums = new Router().use("/forums/:forumId/posts", posts.routes(), posts.allowedMethods());

export const routes: readonly Router[] = [forums];
