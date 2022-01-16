import { Message } from "discord.js";
import { CommandList } from "../commands/_CommandList";
// import { errorHandler } from "../utils/errorHandler";

export const onMessage = async (
  message: Message
): Promise<void> => {

  // Check if sender is a bot. Humans only
  if (message.author.bot) {
    return;
  }

  // Check if message is deliberately calling the bot
  const prefix = "!";
  if (!message.content.startsWith(prefix)) {
    return;
  }

  // Iterate over Command list
  for (const Command of CommandList) {
    if (message.content.startsWith(prefix + Command.name)) {
      await Command.run(message);
      break;
    }
  }
};