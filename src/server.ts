/// <reference path="./types/deploy.d.ts" />

import { Application, setup, virtualSheet } from "../deps.ts";
import { router } from "./routes.tsx";
import * as Discord from "./services/discord.ts";

async function run() {
  await bootstrapServer();

  // Create server
  const app = new Application();

  // Apply routes
  app.use(router.routes());

  // listen fetches with oak server
  addEventListener("fetch", app.fetchEventHandler());
}

await run();

async function bootstrapServer() {
  // Start discord bot
  await Discord.startup();
  // Start twind server
  setup({ sheet: virtualSheet });
}
