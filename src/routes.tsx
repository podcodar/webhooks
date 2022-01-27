import { Router, renderToString, React, h } from "../deps.ts";
import App from "./webapp/App.tsx";
import { GithubDiscussionsEvent } from "./interfaces/github-discussions.ts";
import discussionEventHandler from "./webhooks/discussionEventHandler.ts";

const webhooks = new Router()
  .post("/github-discussions", async (ctx) => {
    ctx.response.headers.set("Content-Type", "text/html");
    const body = ctx.request.body({ type: 'json' })
    const discussionEvent: GithubDiscussionsEvent = await body.value;
    discussionEventHandler(discussionEvent)
  })

const root = new Router().get("/", (ctx) => {
  ctx.response.body = renderToString(<App />);
  ctx.response.headers.set("Content-Type", "text/html");
});

export const routes: readonly Router[] = [webhooks, root];
