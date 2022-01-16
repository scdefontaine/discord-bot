import { CommandInterface } from "../interfaces/CommandInterface";

export const Ping: CommandInterface = {
  name: "ping",
  desc: "A simple ping pong to ensure bot is running",
  run: async (message) => {
    try {
      const { channel } = message;
      await channel.send("pong");
    } catch (err) {
      console.log("", err);
    }
  }
}