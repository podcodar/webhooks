import * as Time from "https://deno.land/std@0.100.0/datetime/mod.ts";
import * as Discord from "https://deno.land/x/discordeno@12.0.1/mod.ts";

const DAILY_MESSAGE = ":thought_balloon: Hey pessoal, já mandaram sua daily hoje?";

export async function startup() {
  await Discord.startBot({
    token: Deno.env.get("DISCORDBOT_TOKEN") ?? "",
    intents: ["Guilds", "GuildMessages"],
    eventHandlers: {
      ready() {
        console.log("Successfully connected to gateway");
      },
    },
  });
  setupTasks();
}

export function sendMessage(text: string, channelID = 864139195899445298n) {
  Discord.sendMessage(channelID, text);
}

function setupTasks() {
  // Add daily task
  createTask(dailyMessageTask, [9, 17, 20]);
}

function createTask(taskCallback: () => void, runsAt: number[], interval = Time.HOUR) {
  const handleTick = () => {
    const now = new Date();
    if (runsAt.includes(now.getHours())) taskCallback();
  };
  setInterval(handleTick, interval);
}

function dailyMessageTask() {
  sendMessage(DAILY_MESSAGE, 742025222126960760n); // daily channel
}
