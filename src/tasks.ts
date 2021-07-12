import * as Time from "https://deno.land/std@0.100.0/datetime/mod.ts";
import { sendMessage } from "./webhooks/discussionEventHandler.ts";

const taskList = [];

function createTask(taskCallback: () => void, runsAt: number[]) {
  const handleTick = () => {
    const now = new Date();
    if (runsAt.includes(now.getHours())) taskCallback();
  };

  const intervalId = setInterval(handleTick, Time.HOUR);
  taskList.push(intervalId);
}

const DAILY_MESSAGE = ":thought_balloon: - Hey pessoal, já mandaram sua daily hoje?";

function sendDailyMessage() {
  sendMessage(DAILY_MESSAGE, 742025222126960760n);
}

export function setupTasks() {
  // Add daily task
  createTask(sendDailyMessage, [9, 17, 20]);
}
