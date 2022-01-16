import { Message } from "discord.js";

export interface CommandInterface {
  name: string;
  desc: string;
  hidden?: boolean;
  run: (message: Message) => Promise<void>;
}