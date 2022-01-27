import { Router, React, h, renderToString } from "../deps.ts";

import { GithubDiscussionsEvent } from "./interfaces/github-discussions.ts";
import discussionEventHandler from "./webhooks/discussionEventHandler.ts";
import { dailyCallbackHandler } from "./webhooks/dailyCallbackHandler.ts";

import App from "./webapp/App.tsx";

export const router = new Router()
  .post("/daily-callback", dailyCallbackHandler)
  .post("/github-discussions", async (ctx) => {
    ctx.response.headers.set("Content-Type", "text/html");
    const body = ctx.request.body({ type: 'json' })
    const discussionEvent: GithubDiscussionsEvent = await body.value;
    discussionEventHandler(discussionEvent)
  })
  .get("/", (ctx) => {
    ctx.response.body = renderToString(<App />);
    ctx.response.headers.set("Content-Type", "text/html");
  });
