/// <reference path="./types/deploy.d.ts" />

import { Application } from "https://deno.land/x/oak@v7.7.0/mod.ts";
import { routes } from "./routes.ts";

function run() {
  const app = new Application();

  // Apply routes
  for (const route of routes) {
    app.use(route.routes());
  }

  // listen fetches with oak server
  addEventListener("fetch", app.fetchEventHandler());
}

run();
