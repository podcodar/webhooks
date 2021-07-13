import { GithubDiscussionsEvent } from "../interfaces/github-discussions.ts";
import * as Discord from "../services/discord.ts";

function discussionEventHandler({ action, discussion }: GithubDiscussionsEvent) {
  const messageTemplate = (prefix: string) => `
    *${prefix}: ${discussion.category.name}* - **${discussion.title}**
    > ${discussion.html_url}
  `;
  const getMessage = () => {
    switch (action) {
      case "created":
        return messageTemplate("Nova discussão criada");
      case "edited":
        return messageTemplate("Discussão editada");
      // no default
    }
  };

  const msg = getMessage();
  if (msg != null) Discord.sendMessage(msg);
}

export default discussionEventHandler;
