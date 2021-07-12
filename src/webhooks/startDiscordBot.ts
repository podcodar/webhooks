import * as Discord from "https://deno.land/x/discordeno@12.0.1/mod.ts";

const token = Deno.env.get("DISCORDBOT_TOKEN") ?? "";

export async function startDiscordBot() {
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
