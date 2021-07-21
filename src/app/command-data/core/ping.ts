import { Command } from "../../schemas/Commands";

export const PING = new Command({
  name: "Ping Time",
  cmdStrings: ["ping"],
  shortDesc: "Checks the ping time to the bot.",
});
