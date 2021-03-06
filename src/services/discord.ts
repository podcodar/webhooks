import { Discord } from "../../deps.ts";

export const DAILY_CHANNEL = 742025222126960760n;
export const DAILY_MESSAGE = ":thought_balloon: Hey pessoal, já mandaram sua daily hoje?";

export async function startup() {
  const token = Deno.env.get("DISCORDBOT_TOKEN") ?? "";
  console.log(token);
  await Discord.startBot({
    token,
    intents: ["Guilds", "GuildMessages"],
    eventHandlers: {
      ready() {
        console.log("Successfully connected to gateway");
      },
      applicationCommandCreate: (data) =>
        console.log(`
          slash command crated: ${JSON.stringify(data)}
        `),
    },
  });
  await setupCommands();
}

export function sendMessage(text: string, channelID = 864139195899445298n) {
  Discord.sendMessage(channelID, text);
}

async function setupCommands() {}
