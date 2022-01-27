/// <reference path="./types/deploy.d.ts" />

import { Application } from "../deps.ts";
import { router } from "./routes.tsx";
import * as Discord from "./services/discord.ts";

async function run() {
  const app = new Application();
  // Start discord bot
  await Discord.startup();

  // Apply routes
  app.use(router.routes());

  // listen fetches with oak server
  addEventListener("fetch", app.fetchEventHandler());
}

await run();
