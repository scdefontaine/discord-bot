import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { onMessage } from "./events/onMessage";

(async () => {

  const FIN_BOT = new Client({ intents: IntentOptions });

  FIN_BOT.on(
    "ready",
    () => console.log("Fin Bot connected to Discord!")
    // async () => await onReady()
  );

  FIN_BOT.on(
    "message",
    async (message) => await onMessage(message)
  );

  await FIN_BOT.login(process.env.FIN_BOT_TOKEN as string);
})();