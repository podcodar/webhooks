import * as Discord from "https://deno.land/x/discordeno@12.0.1/mod.ts";
import { GithubDiscussionsEvent } from "../interfaces/github-discussions.ts";

const token = Deno.env.get("DISCORDBOT_TOKEN") ?? "";

export async function startup() {
  await Discord.startBot({
    token,
    intents: ["Guilds", "GuildMessages"],
    eventHandlers: {
      ready() {
        console.log("Successfully connected to gateway");
      },
    },
  });
}

export function sendMessage(text: string, channelID = 864139195899445298n) {
  Discord.sendMessage(channelID, text);
}

function discussionEventHandler({ action, discussion }: GithubDiscussionsEvent) {
  switch (action) {
    case "created":
      return sendMessage(`
        **Nova discussão criada**: ${discussion.title}
        > ${discussion.html_url}
      `);
  }
}

export default discussionEventHandler;
