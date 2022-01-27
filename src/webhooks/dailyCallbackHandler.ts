import { Context } from "../../deps.ts";
import { DAILY_CHANNEL, DAILY_MESSAGE, sendMessage } from "../services/discord.ts";

export function dailyCallbackHandler(ctx: Context) {
  sendMessage(DAILY_MESSAGE, DAILY_CHANNEL);

  ctx.response.headers.set("Content-Type", "application/json");
  ctx.response.body = { message: "Daily Alert sent!" };
}
