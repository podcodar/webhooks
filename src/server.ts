/// <reference path="./types/deploy.d.ts" />

import { Application } from "https://deno.land/x/oak@v7.7.0/mod.ts";
import { routes } from "./routes.tsx";
import { setupTasks } from "./tasks.ts";
import { startDiscordBot } from "./webhooks/startDiscordBot.ts";

async function run() {
  const app = new Application();
  // Start discord bot
  await startDiscordBot();
  // start tasks
  setupTasks();

  // Apply routes
  for (const route of routes) {
    app.use(route.routes());
  }

  // listen fetches with oak server
  addEventListener("fetch", app.fetchEventHandler());
}

await run();
