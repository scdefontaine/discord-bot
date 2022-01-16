// import { logHandler } from "./logHandler";

export const validateVariables = (): void => {
  if (!process.env.FIN_BOT_TOKEN) {
    console.log("warn", "Missing Discord bot token.");
    process.exit(1);
  }
};