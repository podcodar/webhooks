import { DAILY_CHANNEL, DAILY_MESSAGE, sendMessage } from "../services/discord.ts";

export function dailyCallbackHandler() {
  // TODO: add request validation
  sendMessage(DAILY_MESSAGE, DAILY_CHANNEL);
}
